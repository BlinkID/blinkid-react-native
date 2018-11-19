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

        String firstSideSplashMessage = getStringFromMap(jsonUISettings, "firstSideSplashMessage");
        if (firstSideSplashMessage != null) {
            settings.setFirstSideSplashMessage(firstSideSplashMessage);
        }
        String secondSideSplashMessage = getStringFromMap(jsonUISettings, "secondSideSplashMessage");
        if (secondSideSplashMessage != null) {
            settings.setSecondSideSplashMessage(secondSideSplashMessage);
        }
        String firstSideInstructions = getStringFromMap(jsonUISettings, "firstSideInstructions");
        if (firstSideInstructions != null) {
            settings.setFirstSideInstructions(firstSideInstructions);
        }
        String secondSideInstructions = getStringFromMap(jsonUISettings, "secondSideInstructions");
        if (secondSideInstructions != null) {
            settings.setSecondSideInstructions(secondSideInstructions);
        }
        String glareMessage = getStringFromMap(jsonUISettings, "glareMessage");
        if (glareMessage != null) {
            settings.setGlareMessage(glareMessage);
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
        return "DocumentVerificationOverlaySettings";
    }
}
