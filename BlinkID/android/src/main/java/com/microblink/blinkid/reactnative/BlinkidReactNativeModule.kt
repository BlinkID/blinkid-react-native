package com.microblink.blinkid.reactnative

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.microblink.blinkid.core.BlinkIdSdk
import com.microblink.blinkid.core.session.BlinkIdProcessResult
import com.microblink.blinkid.ux.contract.BlinkIdScanActivityResultStatus
import com.microblink.blinkid.ux.contract.BlinkIdScanActivitySettings
import com.microblink.blinkid.ux.contract.MbBlinkIdScan
import com.microblink.core.LicenseLockedException
import com.microblink.core.image.InputImage
import com.microblink.ux.UiSettings
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import org.json.JSONObject

@ReactModule(name = BlinkidReactNativeModule.NAME)
class BlinkidReactNativeModule(reactContext: ReactApplicationContext) :
  NativeBlinkidReactNativeSpec(reactContext) {
  private val BLINKID_REQUEST_CODE = 1453
  private val BLINKID_ERROR_RESULT_CODE = "BlinkIdAndroid"

  var pendingPromise: Promise? = null

  override fun getName(): String {
    return NAME
  }

  init {
    reactApplicationContext.addActivityEventListener(object : BaseActivityEventListener() {
      override fun onActivityResult(
        activity: Activity?,
        requestCode: Int,
        resultCode: Int,
        data: Intent?
      ) {
        if (requestCode == BLINKID_REQUEST_CODE) {

          val blinkIdResult = MbBlinkIdScan().parseResult(resultCode, data)
          when (blinkIdResult.status) {
            BlinkIdScanActivityResultStatus.DocumentScanned -> {
              blinkIdResult.result?.let { scanningResult ->
                val success = BlinkIdSerializationUtilities.serializeBlinkIdScanningResult(
                  scanningResult
                )
                pendingPromise?.resolve(success)

              } ?: pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, "BlinkID result is empty.")
            }

            BlinkIdScanActivityResultStatus.Canceled -> {
              pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, "Scanning is canceled.")
            }

            BlinkIdScanActivityResultStatus.ErrorSdkInit -> {
              pendingPromise?.reject(
                BLINKID_ERROR_RESULT_CODE,
                "Could not initialize the SDK."
              )
            }
          }
        }
      }
    })
  }

  override fun performScan(
    blinkIdSdkSettings: String?,
    blinkIdSessionSettings: String?,
    blinkIdUiSettings: String?,
    classFilter: String?,
    promise: Promise?
  ) {
    pendingPromise = promise

    try {
      val sdkSettingsJson = blinkIdSdkSettings?.let { JSONObject(it) }
      val sessionSettingsJson = blinkIdSessionSettings?.let { JSONObject(it) }
      val classFilterJson = classFilter?.let { JSONObject(it) }
      val blinkIdUiSettingsJson = blinkIdUiSettings?.let { JSONObject(it) }
      val sdkSettings = sdkSettingsJson?.let {
        BlinkIdDeserializationUtilities.deserializeBlinkIdSdkSettings(it)
      } ?: run {
        pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, "Invalid SDK settings.")
        return
      }

      currentActivity?.applicationContext?.let {
        val intent = MbBlinkIdScan().createIntent(
          it,
          BlinkIdScanActivitySettings(
            sdkSettings = sdkSettings,
            scanningSessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(
              sessionSettingsJson,
              false
            ),
            uxSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdUxSettings(
              sessionSettingsJson,
              classFilterJson,
            ),
            showHelpButton = blinkIdUiSettingsJson?.optBoolean("showHelpButton", true)?: true,
            showOnboardingDialog = blinkIdUiSettingsJson?.optBoolean("showOnboardingDialog", true) ?: true
          )
        )
        currentActivity?.startActivityForResult(intent, BLINKID_REQUEST_CODE, null)
      } ?: pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, "Activity not found.")
    } catch (error: Exception) {
      when (error) {
        is LicenseLockedException -> {
          pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, error.message)
        }

        else -> {
          pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, error.message)
        }
      }
    }
  }

  override fun performDirectApiScan(
    blinkIdSdkSettings: String?,
    blinkIdSessionSettings: String?,
    firstImage: String?,
    secondImage: String?,
    promise: Promise?
  ) {
    CoroutineScope(Dispatchers.Default).launch {
      try {
        val sdkSettingsJson = blinkIdSdkSettings?.let { JSONObject(it) }
        val sessionSettingsJson = blinkIdSessionSettings?.let { JSONObject(it) }

        val sdkSettings =
          BlinkIdDeserializationUtilities.deserializeBlinkIdSdkSettings(sdkSettingsJson)
            ?: return@launch withContext(Dispatchers.Main) {
              promise?.reject(BLINKID_ERROR_RESULT_CODE, "Invalid SDK settings")
            }

        val context = currentActivity?.applicationContext
          ?: return@launch withContext(Dispatchers.Main) {
            promise?.reject(BLINKID_ERROR_RESULT_CODE, "No activity")
          }

        val sdkInit = BlinkIdSdk.initializeSdk(context, sdkSettings)
        when {
          sdkInit.isSuccess -> {
            val instance = sdkInit.getOrNull() ?: return@launch withContext(Dispatchers.Main) {
              promise?.reject(BLINKID_ERROR_RESULT_CODE, "SDK returned null instance")
            }

            val session = instance.createScanningSession(
              BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(
                sessionSettingsJson,
                true
              )
            )

            val inputImages = listOfNotNull(
              firstImage?.let { BlinkIdDeserializationUtilities.base64ToBitmap(it) },
              secondImage?.let { BlinkIdDeserializationUtilities.base64ToBitmap(it) }
            )

            var result: Result<BlinkIdProcessResult>? = null

            for (img in inputImages) {
              result = session.process(InputImage.createFromBitmap(img))
            }

            if (result?.isSuccess == true) {
              val scanResult = session.getResult()
              val resultJson =
                BlinkIdSerializationUtilities.serializeBlinkIdScanningResult(scanResult)

              withContext(Dispatchers.Main) {
                promise?.resolve(resultJson.toString())
              }
            } else {
              withContext(Dispatchers.Main) {
                promise?.reject(BLINKID_ERROR_RESULT_CODE, "Could not get the results.")
              }
            }

            instance.close()
          }

          sdkInit.isFailure -> {
            return@launch withContext(Dispatchers.Main) {
              promise?.reject(BLINKID_ERROR_RESULT_CODE, sdkInit.exceptionOrNull()?.message)
            }
          }
        }

      } catch (e: Exception) {
        withContext(Dispatchers.Main) {
          promise?.reject(BLINKID_ERROR_RESULT_CODE, e.message)
        }
      }
    }
  }

  companion object {
    const val NAME = "BlinkidReactNative"
  }
}
