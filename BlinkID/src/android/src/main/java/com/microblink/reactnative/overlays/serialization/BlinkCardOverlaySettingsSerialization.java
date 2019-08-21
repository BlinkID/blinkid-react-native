package com.microblink.reactnative.overlays.serialization;

import android.content.Context;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.fragment.overlay.blinkcard.scanlineui.ScanLineOverlayStrings;
import com.microblink.reactnative.overlays.OverlaySettingsSerialization;
import com.microblink.uisettings.BlinkCardUISettings;
import com.microblink.uisettings.UISettings;

public final class BlinkCardOverlaySettingsSerialization implements OverlaySettingsSerialization {
    @Override
    public UISettings createUISettings(Context context, ReadableMap jsonUISettings, RecognizerBundle recognizerBundle) {
        BlinkCardUISettings settings = new BlinkCardUISettings(recognizerBundle);
        OverlaySerializationUtils.extractCommonUISettings(jsonUISettings, settings);
        BlinkIDOverlaySerializationUtils.extractCommonBlinkIdUiSettings(jsonUISettings, settings);

        ScanLineOverlayStrings.Builder stringsBuilder = new ScanLineOverlayStrings.Builder(context);
        String firstSideInstructions = getStringFromMap(jsonUISettings, "firstSideInstructions");
        if (firstSideInstructions != null) {
            stringsBuilder.setFrontSideInstructions(firstSideInstructions);
        }
        String secondSideInstructions = getStringFromMap(jsonUISettings, "secondSideInstructions");
        if (secondSideInstructions != null) {
            stringsBuilder.setBackSideInstructions(secondSideInstructions);
        }
        settings.setStrings(stringsBuilder.build());
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
