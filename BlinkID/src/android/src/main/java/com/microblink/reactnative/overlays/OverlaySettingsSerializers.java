package com.microblink.reactnative.overlays;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.reactnative.overlays.serialization.*;
import com.microblink.uisettings.UISettings;

import java.util.HashMap;

public enum OverlaySettingsSerializers {
    INSTANCE;

    private HashMap<String, OverlaySettingsSerialization> mByJSONName = new HashMap<>();

    private void registerMapping(OverlaySettingsSerialization overlaySettingsSerialization) {
        mByJSONName.put(overlaySettingsSerialization.getJsonName(), overlaySettingsSerialization);
    }

    OverlaySettingsSerializers() {
        registerMapping(new BarcodeOverlaySettingsSerialization());
        registerMapping(new DocumentOverlaySettingsSerialization());
        registerMapping(new DocumentVerificationOverlaySettingsSerialization());
    }

    public UISettings getOverlaySettings(ReadableMap jsonOverlaySettings, RecognizerBundle recognizerBundle) {
        return mByJSONName.get(jsonOverlaySettings.getString("overlaySettingsType")).createUISettings(jsonOverlaySettings, recognizerBundle);
    }
}