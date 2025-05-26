package com.blinkidreactnative

import android.os.Bundle
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

  override fun getName(): String {
    return NAME
  }

  override fun performScan(
    blinkIdSdkSettings: String?,
    blinkIdSessionSettings: String?,
    classFilter: String?,
    promise: Promise?
  ) {
    promise?.let { blinkIdPromise ->
      try {
        val sdkSettingsJson = blinkIdSdkSettings?.let { JSONObject(it) }
        val sessionSettingsJson = blinkIdSessionSettings?.let { JSONObject(it) }
        val classFilterJson = classFilter?.let { JSONObject(it) }
        println("SDK SETTINGS" + sdkSettingsJson)
        println("SESSION SETTINGS: " + sessionSettingsJson)
        println("CLASSFILTER: " + classFilterJson)

        val sdkSettings = blinkIdSdkSettings?.let { JSONObject(it) }?.let {
          BlinkIdDeserializationUtils
            .deserializeBlinkIdSdkSettings(it)
        }
          ?: return blinkIdPromise.reject("BlinkIdAndroid", "Invalid SDK settings")

        reactApplicationContext?.let {
          val intent = MbBlinkIdScan().createIntent(
            it,
            BlinkIdScanActivitySettings(
              sdkSettings = sdkSettings,
              scanningSessionSettings = BlinkIdDeserializationUtils.deserializeBlinkIdSessionSettings(sessionSettingsJson, false),
              uxSettings = BlinkIdDeserializationUtils.deserializeBlinkIdUxSettings(sessionSettingsJson, classFilterJson)
            )
          )
          it.startActivityForResult(intent, 1040, Bundle())
        } ?: promise.reject("BlinkIdAndroid", "Activity not found.", null)
      } catch (error: Exception) {
        when (error) {
          is LicenseLockedException -> {
            blinkIdPromise.reject("BlinkIdAndroid", error.message, null)
          }

          else -> {
            println("SDK ERROR" + error)
            blinkIdPromise.reject("BlinkIdAndroid", error.message, null)
          }
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
