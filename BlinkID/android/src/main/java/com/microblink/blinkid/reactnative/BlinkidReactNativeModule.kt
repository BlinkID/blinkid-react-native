package com.microblink.blinkid.reactnative

import android.app.Activity
import android.content.Context
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
import com.microblink.core.ping.PingManager
import com.microblink.core.ping.pinglets.WrapperProductInfo
import kotlinx.coroutines.CoroutineScope
import kotlinx.coroutines.Dispatchers
import kotlinx.coroutines.launch
import kotlinx.coroutines.withContext
import okhttp3.Dispatcher
import org.json.JSONObject

@ReactModule(name = BlinkidReactNativeModule.NAME)
class BlinkidReactNativeModule(reactContext: ReactApplicationContext) :
  NativeBlinkidReactNativeSpec(reactContext) {
  private val BLINKID_REQUEST_CODE = 1453
  private val BLINKID_ERROR_RESULT_CODE = "BlinkIdAndroid"
  var pendingPromise: Promise? = null
  private var blinkIdSdk: BlinkIdSdk? = null

  override fun getName(): String {
    return NAME
  }

  override fun loadBlinkIdSdk(
    blinkIdSdkSettings: String?,
    promise: Promise?
  ) {
    pendingPromise = promise
    CoroutineScope(Dispatchers.Main).launch {
      try {
        val blinkIdSettingsJson = blinkIdSdkSettings?.let { JSONObject(it) }
        ensureLoadedSdk(blinkIdSettingsJson)
        pendingPromise?.resolve("")
      } catch (error: Exception) {
        blinkIdSdk = null
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
  }

  override fun unloadBlinkIdSdk(
    deleteCachedResources: Boolean,
    promise: Promise?
  ) {
    try {
      pendingPromise = promise
      if (deleteCachedResources) {
          BlinkIdSdk.sdkInstance?.closeAndDeleteCachedAssets()
        } else {
          BlinkIdSdk.sdkInstance?.close()
        }
        blinkIdSdk = null
        pendingPromise?.resolve("")
    } catch (exception: Exception) {
      blinkIdSdk = null
      pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, exception.message, null)
    }
  }

  init {
    reactApplicationContext.addActivityEventListener(object : BaseActivityEventListener() {

      override fun onActivityResult(
        activity: Activity,
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
              suspend { BlinkIdSdk.sdkInstance?.close() }
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
    blinkIdScanningUxSettings: String?,
    classFilter: String?,
    promise: Promise?
  ) {
    pendingPromise = promise

    try {
      val sdkSettingsJson = blinkIdSdkSettings?.let { JSONObject(it) }
      val sessionSettingsJson = blinkIdSessionSettings?.let { JSONObject(it) }
      val classFilterJson = classFilter?.let { JSONObject(it) }
      val blinkIdScanningUxJson = blinkIdScanningUxSettings?.let { JSONObject(it) }
      val sdkSettings = sdkSettingsJson?.let {
        BlinkIdDeserializationUtilities.deserializeBlinkIdSdkSettings(it)
      } ?: run {
        pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, "Invalid SDK settings.")
        return
      }

      reactApplicationContext.currentActivity?.applicationContext?.let {
      val intent = MbBlinkIdScan().createIntent(
          it,
          BlinkIdScanActivitySettings(
            sdkSettings = sdkSettings,
            cameraSettings = BlinkIdDeserializationUtilities.deserializeCameraSettings(blinkIdScanningUxJson),
            scanningSessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(
              sessionSettingsJson,
              false
            ),
            uxSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdScanningUxSettings(
              blinkIdScanningUxJson,
              classFilterJson,
            ),
            showHelpButton = blinkIdScanningUxJson?.optBoolean("showHelpButton", true)?: true,
            showOnboardingDialog = blinkIdScanningUxJson?.optBoolean("showOnboardingDialog", true) ?: true
          )
        )
        addReactNativePinglet(it)
        reactApplicationContext.startActivityForResult(intent, BLINKID_REQUEST_CODE, null)
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
    pendingPromise = promise
    CoroutineScope(Dispatchers.Default).launch {
      try {
        val sdkSettingsJson = blinkIdSdkSettings?.let { JSONObject(it) }
        val sessionSettingsJson = blinkIdSessionSettings?.let { JSONObject(it) }

        val context = reactApplicationContext.applicationContext
          ?: return@launch withContext(Dispatchers.Main) {
            promise?.reject(BLINKID_ERROR_RESULT_CODE, "No activity")
          }
        blinkIdSdk = ensureLoadedSdk(sdkSettingsJson)
        blinkIdSdk?.let {
          addReactNativePinglet(context)
          val session = it.createScanningSession(
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

          it.close()
        }?:pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, "Reason: The BlinkID SDK is not initialized. Call the loadBlinkIdSdk() method to pre-load the SDK first, or try running the performDirectApiScan() method with a valid internet connection.", null)
      } catch (e: Exception) {
        withContext(Dispatchers.Main) {
          promise?.reject(BLINKID_ERROR_RESULT_CODE, e.message)
        }
      }
    }
  }

  private suspend fun ensureLoadedSdk(blinkidSdkSettings: JSONObject?): BlinkIdSdk? {

    blinkIdSdk?.let { return it }

    val sdkSettings = BlinkIdDeserializationUtilities
      .deserializeBlinkIdSdkSettings(blinkidSdkSettings)?: throw IllegalStateException("Incorrect SDK Settings.")

    reactApplicationContext.currentActivity?.let {
      val maybeInstance = BlinkIdSdk.initializeSdk(it, sdkSettings)
      when {
        maybeInstance.isSuccess -> {
          blinkIdSdk = maybeInstance.getOrNull()
          return blinkIdSdk
        }

        maybeInstance.isFailure -> {
          blinkIdSdk = null
          throw maybeInstance.exceptionOrNull() ?: IllegalStateException("SDK initialization failed.")
        }
      }
    }?: throw IllegalStateException("Activity not available.")

    return null
  }

  private fun addReactNativePinglet(context: Context) {
    PingManager.getInstance(context).add(
      WrapperProductInfo(
        wrapperProduct = WrapperProductInfo.WrapperProduct.CROSSPLATFORMREACTNATIVE),
      0)
  }
  companion object {
    const val NAME = "BlinkidReactNative"
  }
}
