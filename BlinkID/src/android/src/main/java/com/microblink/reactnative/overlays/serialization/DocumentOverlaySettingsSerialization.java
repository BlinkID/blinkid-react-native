package com.microblink.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.reactnative.overlays.OverlaySettingsSerialization;
import com.microblink.uisettings.DocumentUISettings;
import com.microblink.uisettings.UISettings;

public final class DocumentOverlaySettingsSerialization implements OverlaySettingsSerialization {
    @Override
    public UISettings createUISettings(ReadableMap jsonUISettings, RecognizerBundle recognizerBundle) {
        DocumentUISettings settings = new DocumentUISettings(recognizerBundle);
        OverlaySerializationUtils.extractCommonUISettings(jsonUISettings, settings);
        OverlaySerializationUtils.extractCommonScanSettings(jsonUISettings, settings);
        return settings;
    }

    @Override
    public String getJsonName() {
        return "DocumentOverlaySettings";
    }
}
