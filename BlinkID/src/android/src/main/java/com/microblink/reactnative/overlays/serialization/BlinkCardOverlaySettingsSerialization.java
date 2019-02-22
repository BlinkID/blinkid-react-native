package com.microblink.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.reactnative.overlays.OverlaySettingsSerialization;
import com.microblink.uisettings.BlinkCardUISettings;
import com.microblink.uisettings.UISettings;

public final class BlinkCardOverlaySettingsSerialization implements OverlaySettingsSerialization {
    @Override
    public UISettings createUISettings(ReadableMap jsonUISettings, RecognizerBundle recognizerBundle) {
        BlinkCardUISettings settings = new BlinkCardUISettings(recognizerBundle);
        OverlaySerializationUtils.extractCommonUISettings(jsonUISettings, settings);
        BlinkIDOverlaySerializationUtils.extractCommonVerificationUISettings(jsonUISettings, settings);

        String firstSideInstructions = getStringFromMap(jsonUISettings, "firstSideInstructions");
        if (firstSideInstructions != null) {
            settings.setFirstSideInstructions(firstSideInstructions);
        }
        String secondSideInstructions = getStringFromMap(jsonUISettings, "secondSideInstructions");
        if (secondSideInstructions != null) {
            settings.setSecondSideInstructions(secondSideInstructions);
        }
        return settings;
    }

    private String getStringFromMap(ReadableMap map, String key) {
        if (map.hasKey(key)) {
            return map.getString(key);
        }
        return null;
    }

    @Override
    public String getJsonName() {
        return "BlinkCardOverlaySettings";
    }
}
