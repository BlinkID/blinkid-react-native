package com.microblink.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.hardware.camera.CameraType;
import com.microblink.uisettings.BaseScanUISettings;
import com.microblink.uisettings.UISettings;
import com.microblink.uisettings.options.BeepSoundUIOptions;

import com.microblink.reactnative.R;

public abstract class OverlaySerializationUtils {
    public static void extractCommonScanSettings(ReadableMap jsonOverlaySettings, BaseScanUISettings scanUISettings) {
        if (jsonOverlaySettings.hasKey("useFrontCamera")) {
            if (jsonOverlaySettings.getBoolean("useFrontCamera")) {
                scanUISettings.setCameraType(CameraType.CAMERA_FRONTFACE);
            }
        }
    }

    public static void extractCommonUISettings(ReadableMap jsonOverlaySettings, UISettings uiSettings) {
        if (uiSettings instanceof BeepSoundUIOptions) {
            if (jsonOverlaySettings.hasKey("enableBeep")) {
                if (jsonOverlaySettings.getBoolean("enableBeep")) {
                    ((BeepSoundUIOptions)uiSettings).setBeepSoundResourceID(R.raw.beep);
                }
            }
        }
        if (uiSettings instanceof BaseScanUISettings) {
            ((BaseScanUISettings) uiSettings).setSplashScreenLayoutResourceID(R.layout.mb_layout_camera_splash);
        }
    }
}
