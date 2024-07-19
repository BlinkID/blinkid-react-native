package com.microblink.blinkid.reactnative;

import android.app.Activity;
import android.content.Intent;
import androidx.annotation.NonNull;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.util.Base64;

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
import com.microblink.blinkid.directApi.DirectApiErrorListener;
import com.microblink.blinkid.directApi.RecognizerRunner;
import com.microblink.blinkid.hardware.orientation.Orientation;
import com.microblink.blinkid.metadata.MetadataCallbacks;
import com.microblink.blinkid.metadata.recognition.FirstSideRecognitionCallback;
import com.microblink.blinkid.recognition.RecognitionSuccessType;
import com.microblink.blinkid.view.recognition.ScanResultListener;
import com.microblink.blinkid.licence.exception.LicenceKeyException;

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
    private static final String PARAM_FRONT_IMAGE = "frontImage";
    private static final String PARAM_BACK_IMAGE = "backImage";

    /**
     * Request code for scan activity
     */
    private static final int REQUEST_CODE = 1337;

    private Promise mScanPromise;
    private RecognizerBundle mRecognizerBundle;
    private RecognizerRunner mRecognizerRunner;
    private boolean mFirstSideScanned = false;

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
        if(prepareScanning(license, promise)) {
            try {
                LanguageUtils.setLanguageAndCountry(jsonOverlaySettings.getString("language"),
                        jsonOverlaySettings.getString("country"),
                        getCurrentActivity());
            } catch (Exception e) {}
            mRecognizerBundle = RecognizerSerializers.INSTANCE.deserializeRecognizerCollection(jsonRecognizerCollection);
            UISettings overlaySettings = OverlaySettingsSerializers.INSTANCE.getOverlaySettings(getReactApplicationContext(), jsonOverlaySettings, mRecognizerBundle);
            ActivityRunner.startActivityForResult(getCurrentActivity(), REQUEST_CODE, overlaySettings);
        }
    }

    @ReactMethod
    private void scanWithDirectApi(ReadableMap jsonRecognizerCollection, ReadableMap frontImage, ReadableMap backImage, ReadableMap license, Promise promise) {
        //DirectAPI processing
        mScanPromise = promise;
        if(prepareScanning(license, promise)) {
            ScanResultListener mScanResultListenerBackSide = new ScanResultListener() {
                @Override
                public void onScanningDone(@NonNull RecognitionSuccessType recognitionSuccessType) {
                    mFirstSideScanned = false;
                    handleDirectApiResult(recognitionSuccessType);
                }
                @Override
                public void onUnrecoverableError(@NonNull Throwable throwable) {
                    promise.reject(throwable);
                }
            };

            FirstSideRecognitionCallback mFirstSideRecognitionCallback = new FirstSideRecognitionCallback() {
                @Override
                public void onFirstSideRecognitionFinished() {
                    mFirstSideScanned = true;
                }
            };

            ScanResultListener mScanResultListenerFrontSide = new ScanResultListener() {
                @Override
                public void onScanningDone(@NonNull RecognitionSuccessType recognitionSuccessType) {
                    if (mFirstSideScanned == true) {
                        //multiside recognizer used
                        try {
                            if (backImage != null) {
                                processImage(backImage.getString(PARAM_BACK_IMAGE), mScanResultListenerBackSide);
                            } else if (recognitionSuccessType != RecognitionSuccessType.UNSUCCESSFUL) {
                                handleDirectApiResult(recognitionSuccessType);
                            } else {
                                handleDirectApiError("Could not extract the information from the front side and back side is empty!", promise);
                            }
                        } catch (Exception e) {
                            throw new RuntimeException(e);
                        }
                    } else if (mFirstSideScanned == false && recognitionSuccessType != RecognitionSuccessType.UNSUCCESSFUL){
                        //singleside recognizer used
                        handleDirectApiResult(recognitionSuccessType);
                    } else {
                        mFirstSideScanned = false;
                        handleDirectApiError("Could not extract the information with DirectAPI!", promise);
                    }
                }
                @Override
                public void onUnrecoverableError(@NonNull Throwable throwable) {
                    promise.reject(throwable);
                }
            };

            setupRecognizerRunner(jsonRecognizerCollection, mFirstSideRecognitionCallback, promise);

            if (frontImage != null) {
                processImage(frontImage.getString(PARAM_FRONT_IMAGE), mScanResultListenerFrontSide);
            } else {
                handleDirectApiError("The provided image for the 'frontImage' parameter is empty!", promise);
            }
        }
    }

    private boolean prepareScanning(ReadableMap license, Promise promise) {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            promise.reject(ERROR_ACTIVITY_DOES_NOT_EXIST, "Activity does not exist");
            return false;
        }

        // Store the promise to resolve/reject when scanning is done
        mScanPromise = promise;
        if (!license.hasKey(PARAM_LICENSE_KEY)) {
            promise.reject(ERROR_LICENSE_KEY_NOT_SET, "License key is not set");
            return false;
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

        return setLicense(licenseKey, licensee, showTrialLicenseKeyWarning);
    }

    private void setupRecognizerRunner(ReadableMap jsonRecognizerCollection, FirstSideRecognitionCallback mFirstSideRecognitionCallback, Promise promise) {
        if (mRecognizerRunner != null) {
            mRecognizerRunner.terminate();
        }

        mRecognizerBundle = RecognizerSerializers.INSTANCE.deserializeRecognizerCollection(jsonRecognizerCollection);
        
        try {
            mRecognizerRunner = RecognizerRunner.getSingletonInstance();
        } catch (Exception e) {
            handleDirectApiError("DirectAPI not support: " + e.getMessage(), promise);
        }

        MetadataCallbacks metadataCallbacks = new MetadataCallbacks();
        metadataCallbacks.setFirstSideRecognitionCallback(mFirstSideRecognitionCallback);
        mRecognizerRunner.setMetadataCallbacks(metadataCallbacks);
        mRecognizerRunner.initialize(getCurrentActivity(), mRecognizerBundle, new DirectApiErrorListener() {
            @Override
            public void onRecognizerError(@NonNull Throwable throwable) {
                handleDirectApiError("Failed to initialize recognizer with DirectAPI: " + throwable.getMessage(), promise);
            }
        });
    }

    private void processImage(String base64Image, ScanResultListener scanResultListener) {
        Bitmap image = base64ToBitmap(base64Image);
        if (image != null) {
            mRecognizerRunner.recognizeBitmap(
                    base64ToBitmap(base64Image),
                    Orientation.ORIENTATION_LANDSCAPE_RIGHT,
                    scanResultListener
            );
        } else {
            handleDirectApiError("Could not decode the Base64 image!", mScanPromise);
        }
    }

    private void handleDirectApiResult(RecognitionSuccessType recognitionSuccessType) {
        if (recognitionSuccessType != RecognitionSuccessType.UNSUCCESSFUL) {
                WritableArray resultList = RecognizerSerializers.INSTANCE.serializeRecognizerResults(mRecognizerBundle.getRecognizers());
                mScanPromise.resolve(resultList);
        } else {
            handleDirectApiError("Unexpected error with DirectAPI scanning", mScanPromise);
        }
    }

    private void handleDirectApiError(String errorMessage, Promise promise) {
        promise.reject(errorMessage);
        if (mRecognizerRunner != null) {
            mRecognizerRunner.resetRecognitionState(true);
        }
    }

    private Bitmap base64ToBitmap(String base64String) {
        byte[] decodedBytes = Base64.decode(base64String, Base64.DEFAULT);
        return BitmapFactory.decodeByteArray(decodedBytes, 0, decodedBytes.length);
    }

    private boolean setLicense( String licenseKey, String licensee, Boolean showTrialLicenseKeyWarning ) {
        if (showTrialLicenseKeyWarning != null) {
            MicroblinkSDK.setShowTrialLicenseWarning(showTrialLicenseKeyWarning);
        }
        if (licensee != null) {
            try {
                MicroblinkSDK.setLicenseKey(licenseKey, licensee, this.getCurrentActivity());
            } catch (LicenceKeyException licenceKeyException) {
                mScanPromise.reject("Android license key error: " + licenceKeyException.toString());
                return false;
            }
        } else {
            try {
                MicroblinkSDK.setLicenseKey(licenseKey, this.getCurrentActivity());
            } catch (LicenceKeyException licenceKeyException) {
                mScanPromise.reject("Android license key error: " + licenceKeyException.toString());
                return false;
            }
        }
        MicroblinkSDK.setIntentDataTransferMode(IntentDataTransferMode.PERSISTED_OPTIMISED);
        return true;
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