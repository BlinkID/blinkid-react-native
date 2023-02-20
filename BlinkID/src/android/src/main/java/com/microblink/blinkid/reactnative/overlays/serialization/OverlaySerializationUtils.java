package com.microblink.blinkid.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.blinkid.hardware.camera.CameraType;
import com.microblink.blinkid.reactnative.R;
import com.microblink.blinkid.uisettings.CameraSettings;
import com.microblink.blinkid.uisettings.UISettings;
import com.microblink.blinkid.uisettings.options.BeepSoundUIOptions;

public abstract class OverlaySerializationUtils {
    public static void extractCommonUISettings(ReadableMap jsonOverlaySettings, UISettings uiSettings) {
        if (uiSettings instanceof BeepSoundUIOptions) {
            if (jsonOverlaySettings.hasKey("enableBeep")) {
                if (jsonOverlaySettings.getBoolean("enableBeep")) {
                    ((BeepSoundUIOptions)uiSettings).setBeepSoundResourceID(R.raw.beep);
                }
            }
        }
        if (jsonOverlaySettings.hasKey("useFrontCamera")
                && jsonOverlaySettings.getBoolean("useFrontCamera")) {
            CameraSettings cameraSettings = new CameraSettings.Builder()
                    .setType(CameraType.CAMERA_FRONTFACE)
                    .build();
            uiSettings.setCameraSettings(cameraSettings);
        }
    }
}