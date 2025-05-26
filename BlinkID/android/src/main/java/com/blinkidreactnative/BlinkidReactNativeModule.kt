package com.blinkidreactnative

import android.app.Activity
import android.content.Intent
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.microblink.blinkid.ux.contract.BlinkIdScanActivityResultStatus
import com.microblink.blinkid.ux.contract.BlinkIdScanActivitySettings
import com.microblink.blinkid.ux.contract.MbBlinkIdScan
import com.microblink.core.LicenseLockedException
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
      override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == BLINKID_REQUEST_CODE) {

          val blinkIdResult = MbBlinkIdScan().parseResult(resultCode, data)
          when (blinkIdResult.status) {
            BlinkIdScanActivityResultStatus.DocumentScanned -> {
              blinkIdResult.result?.let { scanningResult ->
                val success = BlinkIdSerializationUtils.serializeBlinkIdScanningResult(
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
    classFilter: String?,
    promise: Promise?
  ) {
    pendingPromise = promise

      try {
        val sdkSettingsJson = blinkIdSdkSettings?.let { JSONObject(it) }
        val sessionSettingsJson = blinkIdSessionSettings?.let { JSONObject(it) }
        val classFilterJson = classFilter?.let { JSONObject(it) }

        val sdkSettings = sdkSettingsJson?.let {
          BlinkIdDeserializationUtils.deserializeBlinkIdSdkSettings(it)
        } ?: run {
          pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, "Invalid SDK settings.")
          return
        }

        currentActivity?.applicationContext?.let {
          val intent = MbBlinkIdScan().createIntent(
            it,
            BlinkIdScanActivitySettings(
              sdkSettings = sdkSettings,
              scanningSessionSettings = BlinkIdDeserializationUtils.deserializeBlinkIdSessionSettings(sessionSettingsJson, false),
              uxSettings = BlinkIdDeserializationUtils.deserializeBlinkIdUxSettings(sessionSettingsJson, classFilterJson)
            )
          )
          currentActivity?.startActivityForResult(intent, BLINKID_REQUEST_CODE, null)
        }?: pendingPromise?.reject(BLINKID_ERROR_RESULT_CODE, "Activity not found.")
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

  }

  companion object {
    const val NAME = "BlinkidReactNative"
  }
}
