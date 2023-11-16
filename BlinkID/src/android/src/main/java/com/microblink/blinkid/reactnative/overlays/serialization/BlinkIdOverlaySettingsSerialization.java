package com.microblink.blinkid.reactnative.overlays.serialization;

import android.content.Context;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.blinkid.entities.recognizers.RecognizerBundle;
import com.microblink.blinkid.fragment.overlay.blinkid.reticleui.ReticleOverlayStrings;
import com.microblink.blinkid.reactnative.overlays.OverlaySettingsSerialization;
import com.microblink.blinkid.uisettings.BlinkIdUISettings;
import com.microblink.blinkid.uisettings.UISettings;
import com.microblink.blinkid.locale.LanguageUtils;

import static com.microblink.blinkid.reactnative.SerializationUtils.getStringFromMap;

public final class BlinkIdOverlaySettingsSerialization implements OverlaySettingsSerialization {
    @Override
    public UISettings createUISettings(Context context, ReadableMap jsonUISettings, RecognizerBundle recognizerBundle) {
        BlinkIdUISettings settings = new BlinkIdUISettings(recognizerBundle);
        OverlaySerializationUtils.extractCommonUISettings(jsonUISettings, settings);
        BlinkIDOverlaySerializationUtils.extractCommonBlinkIdUiSettings(jsonUISettings, settings);

        Boolean requireDocumentSidesDataMatch = getBooleanFromMap(jsonUISettings, "requireDocumentSidesDataMatch");
        if (requireDocumentSidesDataMatch != null) {
            settings.setDocumentDataMatchRequired(requireDocumentSidesDataMatch);
        }

        String language = getStringFromMap(jsonUISettings, "language");
        if (language != null) {
            String country = jsonUISettings.hasKey("country") ? jsonUISettings.getString("country") : null;
            LanguageUtils.setLanguageAndCountry(language, country, context);
        }

        Boolean showNotSupportedDialog = getBooleanFromMap(jsonUISettings, "showNotSupportedDialog");
        if (showNotSupportedDialog != null) {
            settings.setShowNotSupportedDialog(showNotSupportedDialog);
        }

        Boolean showFlashlightWarning = getBooleanFromMap(jsonUISettings, "showFlashlightWarning");
        if (showFlashlightWarning != null) {
            settings.setShowFlashlightWarning(showFlashlightWarning);
        }

        Boolean showMandatoryFieldsMissing = getBooleanFromMap(jsonUISettings, "showMandatoryFieldsMissing");
        if (showMandatoryFieldsMissing != null) {
            settings.setShowMandatoryFieldsMissing(showMandatoryFieldsMissing);
        }

        Boolean showOnboardingInfo = getBooleanFromMap(jsonUISettings, "showOnboardingInfo");
        if (showOnboardingInfo != null) {
            settings.setShowOnboardingInfo(showOnboardingInfo);
        }

        Boolean showIntroductionDialog = getBooleanFromMap(jsonUISettings, "showIntroductionDialog");
        if (showIntroductionDialog != null) {
            settings.setShowIntroductionDialog(showIntroductionDialog);
        }

        if (jsonUISettings.hasKey("onboardingButtonTooltipDelay")) {
            settings.setShowTooltipTimeIntervalMs(jsonUISettings.getInt("onboardingButtonTooltipDelay"));
        }

        if (jsonUISettings.hasKey("backSideScanningTimeoutMilliseconds")) {
            settings.setBackSideScanningTimeoutMs(jsonUISettings.getInt("backSideScanningTimeoutMilliseconds"));
        }

        ReticleOverlayStrings.Builder overlasStringsBuilder = new ReticleOverlayStrings.Builder(context);

        String firstSideInstructionsText = getStringFromMap(jsonUISettings, "firstSideInstructionsText");
        if (firstSideInstructionsText != null) {
            overlasStringsBuilder.setFirstSideInstructionsText(firstSideInstructionsText);
        }
        String flipInstructions = getStringFromMap(jsonUISettings, "flipInstructions");
        if (flipInstructions != null) {
            overlasStringsBuilder.setFlipInstructions(flipInstructions);
        }
        String errorMoveCloser = getStringFromMap(jsonUISettings, "errorMoveCloser");
        if (errorMoveCloser != null) {
            overlasStringsBuilder.setErrorMoveCloser(errorMoveCloser);
        }
        String errorMoveFarther = getStringFromMap(jsonUISettings, "errorMoveFarther");
        if (errorMoveFarther != null) {
            overlasStringsBuilder.setErrorMoveFarther(errorMoveFarther);
        }
        String sidesNotMatchingTitle = getStringFromMap(jsonUISettings, "sidesNotMatchingTitle");
        if (sidesNotMatchingTitle != null) {
            overlasStringsBuilder.setSidesNotMatchingTitle(sidesNotMatchingTitle);
        }
        String sidesNotMatchingMessage = getStringFromMap(jsonUISettings, "sidesNotMatchingMessage");
        if (sidesNotMatchingMessage != null) {
            overlasStringsBuilder.setSidesNotMatchingMessage(sidesNotMatchingMessage);
        }
        String unsupportedDocumentTitle = getStringFromMap(jsonUISettings, "unsupportedDocumentTitle");
        if (unsupportedDocumentTitle != null) {
            overlasStringsBuilder.setUnsupportedDocumentTitle(unsupportedDocumentTitle);
        }
        String unsupportedDocumentMessage = getStringFromMap(jsonUISettings, "unsupportedDocumentMessage");
        if (unsupportedDocumentMessage != null) {
            overlasStringsBuilder.setUnsupportedDocumentMessage(unsupportedDocumentMessage);
        }
        String recognitionTimeoutTitle = getStringFromMap(jsonUISettings, "recognitionTimeoutTitle");
        if (recognitionTimeoutTitle != null) {
            overlasStringsBuilder.setRecognitionTimeoutTitle(recognitionTimeoutTitle);
        }
        String recognitionTimeoutMessage = getStringFromMap(jsonUISettings, "recognitionTimeoutMessage");
        if (recognitionTimeoutMessage != null) {
            overlasStringsBuilder.setRecognitionTimeoutMessage(recognitionTimeoutMessage);
        }
        String retryButtonText = getStringFromMap(jsonUISettings, "retryButtonText");
        if (retryButtonText != null) {
            overlasStringsBuilder.setRetryButtonText(retryButtonText);
        }
        String scanBarcodeText = getStringFromMap(jsonUISettings, "scanBarcodeText");
        if (scanBarcodeText != null) {
            overlasStringsBuilder.setBackSideBarcodeInstructions(scanBarcodeText);
        }
        String errorDocumentTooCloseToEdge = getStringFromMap(jsonUISettings, "errorDocumentTooCloseToEdge");
        if (errorDocumentTooCloseToEdge != null) {
            overlasStringsBuilder.setErrorDocumentTooCloseToEdge(errorDocumentTooCloseToEdge);
        }

        settings.setStrings(overlasStringsBuilder.build());

        return settings;
    }

    public static Boolean getBooleanFromMap(ReadableMap map, String key) {
        if (map.hasKey(key)) {
            return map.getBoolean(key);
        }
        return null;
    }

    @Override
    public String getJsonName() {
        return "BlinkIdOverlaySettings";
    }
}