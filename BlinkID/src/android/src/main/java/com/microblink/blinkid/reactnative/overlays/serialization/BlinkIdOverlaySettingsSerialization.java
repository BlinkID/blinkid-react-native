package com.microblink.blinkid.reactnative.overlays.serialization;

import android.content.Context;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.blinkid.entities.recognizers.RecognizerBundle;
import com.microblink.blinkid.fragment.overlay.blinkid.reticleui.ReticleOverlayStrings;
import com.microblink.blinkid.reactnative.overlays.OverlaySettingsSerialization;
import com.microblink.blinkid.uisettings.BlinkIdUISettings;
import com.microblink.blinkid.uisettings.UISettings;
import com.microblink.blinkid.locale.LanguageUtils;
import com.microblink.blinkid.hardware.camera.VideoResolutionPreset;
import com.microblink.blinkid.uisettings.CameraSettings;


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

        Boolean showTorchButton = getBooleanFromMap(jsonUISettings, "showTorchButton");
        if (showTorchButton != null) {
            settings.setShowTorchButton(showTorchButton);
        }

        Boolean showCancelButton = getBooleanFromMap(jsonUISettings, "showCancelButton");
        if (showCancelButton != null) {
            settings.setShowCancelButton(showCancelButton);
        }

        if (jsonUISettings.hasKey("onboardingButtonTooltipDelay")) {
            settings.setShowTooltipTimeIntervalMs(jsonUISettings.getInt("onboardingButtonTooltipDelay"));
        }

        if (jsonUISettings.hasKey("backSideScanningTimeoutMilliseconds")) {
            settings.setBackSideScanningTimeoutMs(jsonUISettings.getInt("backSideScanningTimeoutMilliseconds"));
        }

        VideoResolutionPreset videoResolutionPreset = VideoResolutionPreset.values()[0];
        if (jsonUISettings.hasKey("androidCameraResolutionPreset")) {
            videoResolutionPreset = VideoResolutionPreset.values()[jsonUISettings.getInt("androidCameraResolutionPreset")];
        }

        Boolean androidLegacyCameraApi = false;
        if (jsonUISettings.hasKey("enableAndroidLegacyCameraApi")) {
            androidLegacyCameraApi = jsonUISettings.getBoolean("enableAndroidLegacyCameraApi");
        }

        settings.setCameraSettings(new CameraSettings.Builder()
                .setVideoResolutionPreset(videoResolutionPreset)
                .setForceLegacyApi(androidLegacyCameraApi)
                .build());

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
        String errorBlurDetected = getStringFromMap(jsonUISettings, "errorBlurDetected");
        if (errorBlurDetected != null) {
            overlasStringsBuilder.setErrorBlurDetected(errorBlurDetected);
        }
        String errorGlareDetected = getStringFromMap(jsonUISettings, "errorGlareDetected");
        if (errorGlareDetected != null) {
            overlasStringsBuilder.setErrorGlareDetected(errorGlareDetected);
        }
        String topPageInstructions = getStringFromMap(jsonUISettings, "topPageInstructions");
        if (topPageInstructions != null) {
            overlasStringsBuilder.setTopPageInstructions(topPageInstructions);
        }
        String leftPageInstructions = getStringFromMap(jsonUISettings, "leftPageInstructions");
        if (leftPageInstructions != null) {
            overlasStringsBuilder.setLeftPageInstructions(leftPageInstructions);
        }
        String rightPageInstructions = getStringFromMap(jsonUISettings, "rightPageInstructions");
        if (rightPageInstructions != null) {
            overlasStringsBuilder.setRightPageInstructions(rightPageInstructions);
        }
        String turnTopPageInstructions = getStringFromMap(jsonUISettings, "turnTopPageInstructions");
        if (turnTopPageInstructions != null) {
            overlasStringsBuilder.setTurnTopPageInstructions(turnTopPageInstructions);
        }
        String turnLeftPageInstructions = getStringFromMap(jsonUISettings, "turnLeftPageInstructions");
        if (turnLeftPageInstructions != null) {
            overlasStringsBuilder.setTurnLeftPageInstructions(turnLeftPageInstructions);
        }
        String turnRightPageInstructions = getStringFromMap(jsonUISettings, "turnRightPageInstructions");
        if (turnRightPageInstructions != null) {
            overlasStringsBuilder.setTurnRightPageInstructions(turnRightPageInstructions);
        }
        String errorScanningWrongPageTop = getStringFromMap(jsonUISettings, "errorScanningWrongPageTop");
        if (errorScanningWrongPageTop != null) {
            overlasStringsBuilder.setErrorScanningWrongPageTop(errorScanningWrongPageTop);
        }
        String errorScanningWrongPageLeft = getStringFromMap(jsonUISettings, "errorScanningWrongPageLeft");
        if (errorScanningWrongPageLeft != null) {
            overlasStringsBuilder.setErrorScanningWrongPageLeft(errorScanningWrongPageLeft);
        }
        String errorScanningWrongPageRight = getStringFromMap(jsonUISettings, "errorScanningWrongPageRight");
        if (errorScanningWrongPageRight != null) {
            overlasStringsBuilder.setErrorScanningWrongPageRight(errorScanningWrongPageRight);
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