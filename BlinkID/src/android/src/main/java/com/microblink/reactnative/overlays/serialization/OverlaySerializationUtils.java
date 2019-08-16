package com.microblink.reactnative.overlays.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.microblink.hardware.camera.CameraType;
import com.microblink.reactnative.R;
import com.microblink.uisettings.BarcodeUISettings;
import com.microblink.uisettings.BasicScanUISettings;
import com.microblink.uisettings.UISettings;
import com.microblink.uisettings.options.BeepSoundUIOptions;

public abstract class OverlaySerializationUtils {
    public static void extractCommonUISettings(ReadableMap jsonOverlaySettings, UISettings uiSettings) {
        if (uiSettings instanceof BeepSoundUIOptions) {
            if (jsonOverlaySettings.hasKey("enableBeep")) {
                if (jsonOverlaySettings.getBoolean("enableBeep")) {
                    ((BeepSoundUIOptions)uiSettings).setBeepSoundResourceID(R.raw.beep);
                }
            }
        }
        if (uiSettings instanceof BarcodeUISettings) {
            if (jsonOverlaySettings.hasKey("useFrontCamera")
                    && jsonOverlaySettings.getBoolean("useFrontCamera")) {
                ((BasicScanUISettings) uiSettings).setCameraType(CameraType.CAMERA_FRONTFACE);
            }
        }
    }
}
