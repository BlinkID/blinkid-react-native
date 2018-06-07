package com.microblink.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.reactnative.overlays.OverlaySettingsSerialization;
import com.microblink.uisettings.DocumentVerificationUISettings;
import com.microblink.uisettings.UISettings;

public final class DocumentVerificationOverlaySettingsSerialization implements OverlaySettingsSerialization {
    @Override
    public UISettings createUISettings(ReadableMap jsonUISettings, RecognizerBundle recognizerBundle) {
        DocumentVerificationUISettings settings = new DocumentVerificationUISettings(recognizerBundle);
        OverlaySerializationUtils.extractCommonUISettings(jsonUISettings, settings);
        BlinkIDOverlaySerializationUtils.extractCommonVerificationUISettings(jsonUISettings, settings);
        return settings;
    }

    @Override
    public String getJsonName() {
        return "DocumentVerificationOverlaySettings";
    }
}
