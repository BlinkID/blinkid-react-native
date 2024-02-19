package com.microblink.blinkid.reactnative;

import android.app.Activity;
import android.content.Intent;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableNativeMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.facebook.react.bridge.WritableArray;
import com.microblink.blinkid.MicroblinkSDK;
import com.microblink.blinkid.entities.recognizers.RecognizerBundle;
import com.microblink.blinkid.intent.IntentDataTransferMode;
import com.microblink.blinkid.reactnative.overlays.OverlaySettingsSerializers;
import com.microblink.blinkid.uisettings.ActivityRunner;
import com.microblink.blinkid.locale.LanguageUtils;

import com.microblink.blinkid.uisettings.UISettings;
import com.microblink.blinkid.reactnative.recognizers.RecognizerSerializers;

/**
 * React Native module for BlinkID.
 */
public class MicroblinkModule extends ReactContextBaseJavaModule {

    // promise reject message codes
    private static final String ERROR_ACTIVITY_DOES_NOT_EXIST = "ERROR_ACTIVITY_DOES_NOT_EXIST";
    private static final String ERROR_LICENSE_KEY_NOT_SET = "ERROR_LICENSE_KEY_NOT_SET";
    private static final String STATUS_SCAN_CANCELED = "STATUS_SCAN_CANCELED";

    private static final String PARAM_LICENSE_KEY = "licenseKey";
    private static final String PARAM_LICENSEE = "licensee";
    private static final String PARAM_SHOW_TRIAL_LICENSE_WARNING = "showTrialLicenseKeyWarning";

    /**
     * Request code for scan activity
     */
    private static final int REQUEST_CODE = 1337;

    private Promise mScanPromise;
    private RecognizerBundle mRecognizerBundle;

    public MicroblinkModule(ReactApplicationContext reactContext) {
        super(reactContext);

        // Add the listener for `onActivityResult`
        reactContext.addActivityEventListener(mScanActivityListener);
    }

    @Override
    public String getName() {
        return "BlinkIDAndroid";
    }

    @ReactMethod
    public void scanWithCamera(ReadableMap jsonOverlaySettings, ReadableMap jsonRecognizerCollection, ReadableMap license, Promise promise) {
        prepareScanning(license, promise);
        try {
            LanguageUtils.setLanguageAndCountry(jsonOverlaySettings.getString("language"),
                    jsonOverlaySettings.getString("country"),
                    getCurrentActivity());
        } catch (Exception e) {}
        mRecognizerBundle = RecognizerSerializers.INSTANCE.deserializeRecognizerCollection(jsonRecognizerCollection);
        UISettings overlaySettings = OverlaySettingsSerializers.INSTANCE.getOverlaySettings(getReactApplicationContext(), jsonOverlaySettings, mRecognizerBundle);
        ActivityRunner.startActivityForResult(getCurrentActivity(), REQUEST_CODE, overlaySettings);
    }

    private void prepareScanning(ReadableMap license, Promise promise) {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            promise.reject(ERROR_ACTIVITY_DOES_NOT_EXIST, "Activity does not exist");
            return;
        }

        // Store the promise to resolve/reject when scanning is done
        mScanPromise = promise;
        if (!license.hasKey(PARAM_LICENSE_KEY)) {
            promise.reject(ERROR_LICENSE_KEY_NOT_SET, "License key is not set");
            return;
        }
        String licenseKey = license.getString(PARAM_LICENSE_KEY);
        String licensee = null;
        if (license.hasKey(PARAM_LICENSEE)) {
            licensee = license.getString(PARAM_LICENSEE);
        }
        Boolean showTrialLicenseKeyWarning = null;
        if (license.hasKey(PARAM_SHOW_TRIAL_LICENSE_WARNING)) {
            showTrialLicenseKeyWarning = license.getBoolean(PARAM_SHOW_TRIAL_LICENSE_WARNING);
        }
        setLicense(licenseKey, licensee, showTrialLicenseKeyWarning);
    }

    private void setLicense( String licenseKey, String licensee, Boolean showTrialLicenseKeyWarning ) {
        if (showTrialLicenseKeyWarning != null) {
            MicroblinkSDK.setShowTrialLicenseWarning(showTrialLicenseKeyWarning);
        }
        if (licensee != null) {
            MicroblinkSDK.setLicenseKey(licenseKey, licensee, this.getCurrentActivity());
        } else {
            MicroblinkSDK.setLicenseKey(licenseKey, this.getCurrentActivity());
        }
        MicroblinkSDK.setIntentDataTransferMode(IntentDataTransferMode.PERSISTED_OPTIMISED);
    }

    private void rejectPromise(String code, String message) {
        if (mScanPromise == null) {
            return;
        }
        mScanPromise.reject(code, message);
        mScanPromise = null;
    }

    private final ActivityEventListener mScanActivityListener = new BaseActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            if (mScanPromise != null) {
                if (resultCode == Activity.RESULT_OK) {
                    if (requestCode == REQUEST_CODE) {
                        mRecognizerBundle.loadFromIntent(data);
                        WritableArray resultList = RecognizerSerializers.INSTANCE.serializeRecognizerResults(mRecognizerBundle.getRecognizers());
                        mScanPromise.resolve(resultList);
                    }
                } else if (resultCode == Activity.RESULT_CANCELED) {
                    rejectPromise(STATUS_SCAN_CANCELED, "Scanning has been canceled");
                }
                mScanPromise = null;
            }
        }
    };
}