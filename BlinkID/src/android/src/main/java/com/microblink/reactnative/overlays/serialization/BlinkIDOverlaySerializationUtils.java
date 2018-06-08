package com.microblink.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.hardware.camera.CameraType;
import com.microblink.uisettings.BaseVerificationUISettings;

public abstract class BlinkIDOverlaySerializationUtils {
    public static void extractCommonVerificationUISettings(ReadableMap jsonOverlaySettings, BaseVerificationUISettings verificationUISettings) {
        if (jsonOverlaySettings.hasKey("useFrontCamera")) {
            if (jsonOverlaySettings.getBoolean("useFrontCamera")) {
                verificationUISettings.setCameraTypeForDocumentScan(CameraType.CAMERA_FRONTFACE);
            }
        }
    }
}
