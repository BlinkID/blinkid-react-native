package com.microblink.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.reactnative.overlays.OverlaySettingsSerialization;
import com.microblink.uisettings.BarcodeUISettings;
import com.microblink.uisettings.UISettings;

public final class BarcodeOverlaySettingsSerialization implements OverlaySettingsSerialization {
    @Override
    public UISettings createUISettings(ReadableMap jsonUISettings, RecognizerBundle recognizerBundle) {
        BarcodeUISettings settings =  new BarcodeUISettings(recognizerBundle);
        OverlaySerializationUtils.extractCommonUISettings(jsonUISettings, settings);
        OverlaySerializationUtils.extractCommonScanSettings(jsonUISettings, settings);
        return settings;
    }

    @Override
    public String getJsonName() {
        return "BarcodeOverlaySettings";
    }
}
