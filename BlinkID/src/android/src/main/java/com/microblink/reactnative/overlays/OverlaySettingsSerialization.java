package com.microblink.reactnative.overlays;

import android.content.Context;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.uisettings.UISettings;

public interface OverlaySettingsSerialization {
    UISettings createUISettings(Context context, ReadableMap jsonUISettings, RecognizerBundle recognizerBundle);

    String getJsonName();
}
