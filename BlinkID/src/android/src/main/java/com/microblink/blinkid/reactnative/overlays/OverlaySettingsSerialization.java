package com.microblink.blinkid.reactnative.overlays;

import android.content.Context;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.blinkid.entities.recognizers.RecognizerBundle;
import com.microblink.blinkid.uisettings.UISettings;

public interface OverlaySettingsSerialization {
    UISettings createUISettings(Context context, ReadableMap jsonUISettings, RecognizerBundle recognizerBundle);

    String getJsonName();
}