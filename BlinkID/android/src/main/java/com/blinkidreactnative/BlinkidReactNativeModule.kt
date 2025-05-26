package com.blinkidreactnative

import android.app.Activity
import android.content.Intent
import android.os.Bundle
import com.facebook.react.bridge.BaseActivityEventListener
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.annotations.ReactModule
import com.microblink.blinkid.ux.contract.BlinkIdScanActivitySettings
import com.microblink.blinkid.ux.contract.MbBlinkIdScan
import com.microblink.core.LicenseLockedException
import org.json.JSONObject

@ReactModule(name = BlinkidReactNativeModule.NAME)
class BlinkidReactNativeModule(reactContext: ReactApplicationContext) :
  NativeBlinkidReactNativeSpec(reactContext) {
  var pendingPromise: Promise? = null

  override fun getName(): String {
    return NAME
  }

  init {
    reactApplicationContext.addActivityEventListener(object : BaseActivityEventListener() {
      override fun onActivityResult(activity: Activity?, requestCode: Int, resultCode: Int, data: Intent?) {
        if (requestCode == 1040 && resultCode == Activity.RESULT_OK && data != null) {
          val result = MbBlinkIdScan().parseResult(resultCode, data)
          val resultJson = BlinkIdSerializationUtils.serializeBlinkIdScanningResult(result.result)
          println("RESULTS: $resultJson")
          pendingPromise?.resolve(resultJson.toString())
        } else if (requestCode == 1040) {
          pendingPromise?.reject("BlinkID", "Scan cancelled or failed.")
        }
        pendingPromise = null
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
          pendingPromise?.reject("BlinkIdAndroid", "Invalid SDK settings.")
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
          currentActivity?.startActivityForResult(intent, 1040, Bundle())
        }?: pendingPromise?.reject("BlinkIdAndroid", "Activity not found.")
      } catch (error: Exception) {
        when (error) {
          is LicenseLockedException -> {
            pendingPromise?.reject("BlinkIdAndroid", error.message)
          }

          else -> {
            println("SDK ERROR" + error)
            pendingPromise?.reject("BlinkIdAndroid", error.message)
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
