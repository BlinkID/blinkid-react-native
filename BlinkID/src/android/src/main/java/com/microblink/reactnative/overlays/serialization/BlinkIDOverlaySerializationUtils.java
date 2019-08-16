package com.microblink.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.hardware.camera.CameraType;
import com.microblink.uisettings.BaseBlinkIdUiSettings;
import com.microblink.uisettings.BlinkCardUISettings;
import com.microblink.uisettings.UISettings;

public abstract class BlinkIDOverlaySerializationUtils {
    public static void extractCommonBlinkIdUiSettings(ReadableMap jsonOverlaySettings, UISettings uiSettings) {
        if (jsonOverlaySettings.hasKey("useFrontCamera")
                && jsonOverlaySettings.getBoolean("useFrontCamera")) {
            if (uiSettings instanceof BaseBlinkIdUiSettings) {
                ((BaseBlinkIdUiSettings) uiSettings).setCameraType(CameraType.CAMERA_FRONTFACE);
            } else if (uiSettings instanceof BlinkCardUISettings) {
                ((BlinkCardUISettings) uiSettings).setCameraType(CameraType.CAMERA_FRONTFACE);
            }
        }
    }
}
