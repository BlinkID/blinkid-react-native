package com.microblink.reactnative.blinkid;

import android.app.Activity;
import android.content.Intent;
import android.graphics.Bitmap;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.Base64;
import android.util.Log;

import com.facebook.react.bridge.ActivityEventListener;
import com.facebook.react.bridge.BaseActivityEventListener;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.activity.ScanCard;
import com.microblink.hardware.camera.CameraType;
import com.microblink.image.Image;
import com.microblink.image.ImageListener;
import com.microblink.image.ImageType;
import com.microblink.metadata.MetadataSettings;
import com.microblink.recognizers.BaseRecognitionResult;
import com.microblink.recognizers.IResultHolder;
import com.microblink.recognizers.RecognitionResults;
import com.microblink.recognizers.blinkbarcode.pdf417.Pdf417RecognizerSettings;
import com.microblink.recognizers.blinkbarcode.pdf417.Pdf417ScanResult;
import com.microblink.recognizers.blinkbarcode.usdl.USDLRecognizerSettings;
import com.microblink.recognizers.blinkbarcode.usdl.USDLScanResult;
import com.microblink.recognizers.blinkid.documentface.DocumentFaceDetectorType;
import com.microblink.recognizers.blinkid.documentface.DocumentFaceRecognitionResult;
import com.microblink.recognizers.blinkid.documentface.DocumentFaceRecognizerSettings;
import com.microblink.recognizers.blinkid.eudl.EUDLCountry;
import com.microblink.recognizers.blinkid.eudl.EUDLRecognitionResult;
import com.microblink.recognizers.blinkid.eudl.EUDLRecognizerSettings;
import com.microblink.recognizers.blinkid.malaysia.MyKadRecognitionResult;
import com.microblink.recognizers.blinkid.malaysia.MyKadRecognizerSettings;
import com.microblink.recognizers.blinkid.mrtd.MRTDRecognitionResult;
import com.microblink.recognizers.blinkid.mrtd.MRTDRecognizerSettings;
import com.microblink.recognizers.settings.RecognitionSettings;
import com.microblink.recognizers.settings.RecognizerSettings;
import com.microblink.results.date.DateResult;

import java.io.ByteArrayOutputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * React Native module for BlinkID.
 */
public class BlinkIDModule extends ReactContextBaseJavaModule {

    // promise reject message codes
    private static final String ERROR_ACTIVITY_DOES_NOT_EXIST = "ERROR_ACTIVITY_DOES_NOT_EXIST";
    private static final String STATUS_SCAN_CANCELED = "STATUS_SCAN_CANCELED";

    // js keys for scanning options
    private static final String OPTION_USE_FRONT_CAMERA_JS_KEY = "useFrontCamera";
    private static final String OPTION_ENABLE_BEEP_JS_KEY = "enableBeep";
    private static final String OPTION_SHOULD_RETURN_CROPPED_IMAGE_JS_KEY = "shouldReturnCroppedImage";
    private static final String OPTION_SHOULD_RETURN_SUCCESSFUL_IMAGE_JS_KEY = "shouldReturnSuccessfulImage";
    private static final String OPTION_SHOULD_RETURN_FACE_IMAGE_JS_KEY = "shouldReturnFaceImage";
    private static final String RECOGNIZERS_ARRAY_JS_KEY = "recognizers";

    // js keys for recognizer types
    private static final String RECOGNIZER_MRTD_JS_KEY = "RECOGNIZER_MRTD";
    private static final String RECOGNIZER_USDL_JS_KEY = "RECOGNIZER_USDL";
    private static final String RECOGNIZER_EUDL_JS_KEY = "RECOGNIZER_EUDL";
    private static final String RECOGNIZER_DOCUMENT_FACE_JS_KEY = "RECOGNIZER_DOCUMENT_FACE";
    private static final String RECOGNIZER_MYKAD_JS_KEY = "RECOGNIZER_MYKAD";
    private static final String RECOGNIZER_PDF417_JS_KEY = "RECOGNIZER_PDF417";

    // js result keys
    private static final String RESULT_LIST = "resultList";
    private static final String RESULT_IMAGE_CROPPED = "resultImageCropped";
    private static final String RESULT_IMAGE_SUCCESSFUL = "resultImageSuccessful";
    private static final String RESULT_IMAGE_FACE = "resultImageFace";
    private static final String RESULT_TYPE = "resultType";
    private static final String FIELDS = "fields";

    // result values for resultType
    private static final String MRTD_RESULT_TYPE = "MRTD result";
    private static final String USDL_RESULT_TYPE = "USDL result";
    private static final String EUDL_RESULT_TYPE = "EUDL result";
    private static final String DOCUMENT_FACE_RESULT_TYPE = "DocumentFace result";
    private static final String MYKAD_RESULT_TYPE = "MyKad result";
    private static final String PDF417_RESULT_TYPE = "PDF417 result";

    // java mappings for recognizer types
    private static final int RECOGNIZER_MRTD = 1;
    private static final int RECOGNIZER_USDL = 2;
    private static final int RECOGNIZER_EUDL = 3;
    private static final int RECOGNIZER_DOCUMENT_FACE = 4;
    private static final int RECOGNIZER_MYKAD = 5;
    private static final int RECOGNIZER_PDF417 = 6;

    private static final int COMPRESSED_IMAGE_QUALITY = 90;

    /**
     * Request code for scan activity
     */
    private static final int REQ_CODE_SCAN = 0x123;

    private static final String LOG_TAG = "BlinkID";

    private Promise mScanPromise;
    private boolean mShouldReturnCroppedImage;
    private boolean mShouldReturnSuccessfulImage;
    private boolean mShouldReturnFaceImage;

    public BlinkIDModule(ReactApplicationContext reactContext) {
        super(reactContext);

        // Add the listener for `onActivityResult`
        reactContext.addActivityEventListener(mScanActivityListener);
    }

    @Override
    public String getName() {
        return "BlinkIDAndroid";
    }

    @Override
    public Map<String, Object> getConstants() {
        final Map<String, Object> constants = new HashMap<>();
        constants.put(RECOGNIZER_MRTD_JS_KEY, RECOGNIZER_MRTD);
        constants.put(RECOGNIZER_USDL_JS_KEY, RECOGNIZER_USDL);
        constants.put(RECOGNIZER_EUDL_JS_KEY, RECOGNIZER_EUDL);
        constants.put(RECOGNIZER_DOCUMENT_FACE_JS_KEY, RECOGNIZER_DOCUMENT_FACE);
        constants.put(RECOGNIZER_MYKAD_JS_KEY, RECOGNIZER_MYKAD);
        constants.put(RECOGNIZER_PDF417_JS_KEY, RECOGNIZER_PDF417);
        return constants;
    }

    /**
     * React native method which invokes ScanCard activity with given BlinkID license key
     * and {@code scanningOptions}. It returns results as JS Promise object.
     *
     * @param licenseKey      BlinkID license key which is bound to the application ID. To obtain
     *                        valid license key, please visit http://microblink.com/login or
     *                        contact us at http://help.microblink.com
     * @param scanningOptions scanning options map with following key-value pairs:
     *                        {@Link #OPTION_USE_FRONT_CAMERA_JS_KEY} -> boolean
     *                        {@link #OPTION_SHOULD_RETURN_CROPPED_IMAGE_JS_KEY} -> boolean
     *                        {@link #OPTION_SHOULD_RETURN_SUCCESSFUL_IMAGE_JS_KEY} -> boolean
     *                        {@link #RECOGNIZERS_ARRAY_JS_KEY} -> array of enabled recognizers
     * @param promise         Promise for returning scan results.
     */
    @ReactMethod
    public void scan(String licenseKey, ReadableMap scanningOptions, Promise promise) {
        Activity currentActivity = getCurrentActivity();
        if (currentActivity == null) {
            promise.reject(ERROR_ACTIVITY_DOES_NOT_EXIST, "Activity does not exist");
            return;
        }

        // Store the promise to resolve/reject when scanning is done
        mScanPromise = promise;

        boolean useFrontCamera = readBooleanValue(scanningOptions, OPTION_USE_FRONT_CAMERA_JS_KEY, false);
        mShouldReturnCroppedImage = readBooleanValue(scanningOptions, OPTION_SHOULD_RETURN_CROPPED_IMAGE_JS_KEY, false);
        mShouldReturnSuccessfulImage = readBooleanValue(scanningOptions, OPTION_SHOULD_RETURN_SUCCESSFUL_IMAGE_JS_KEY, false);
        mShouldReturnFaceImage = readBooleanValue(scanningOptions, OPTION_SHOULD_RETURN_FACE_IMAGE_JS_KEY, false);

        List<RecognizerSettings> recSettList = new ArrayList<>();
        if (scanningOptions.hasKey(RECOGNIZERS_ARRAY_JS_KEY)) {
            ReadableArray recognizerArray = scanningOptions.getArray(RECOGNIZERS_ARRAY_JS_KEY);
            for (int i = 0, n = recognizerArray.size(); i < n; i++) {
                recSettList.add(buildRecognizerSettings(recognizerArray.getInt(i)));
            }
        }

        RecognizerSettings[] recognizerSetArray = new RecognizerSettings[recSettList.size()];
        recognizerSetArray = recSettList.toArray(recognizerSetArray);

        RecognitionSettings recognitionSettings = new RecognitionSettings();
        recognitionSettings.setRecognizerSettingsArray(recognizerSetArray);
        // set this to true to enable returning of multiple scan results from single camera frame
        // default is false, which means that as soon as first barcode is found (no matter which type)
        // its contents will be returned.
        recognitionSettings.setAllowMultipleScanResultsOnSingleImage(true);

        // create scan intent fore ScanCard activity
        Intent scanIntent = new Intent(currentActivity, ScanCard.class);
        scanIntent.putExtra(ScanCard.EXTRAS_LICENSE_KEY, licenseKey);
        scanIntent.putExtra(ScanCard.EXTRAS_CAMERA_TYPE, (Parcelable) (useFrontCamera ? CameraType.CAMERA_FRONTFACE : CameraType.CAMERA_DEFAULT));
        scanIntent.putExtra(ScanCard.EXTRAS_RECOGNITION_SETTINGS, recognitionSettings);

        boolean enableBeep = readBooleanValue(scanningOptions, OPTION_ENABLE_BEEP_JS_KEY, true);
        if (enableBeep) {
            // if scan sound should be played when scanning is done, pass its resource ID
            scanIntent.putExtra(ScanCard.EXTRAS_BEEP_RESOURCE, R.raw.beep);
        }

        // set image metadata settings to define which images will be obtained as metadata during scan process
        MetadataSettings.ImageMetadataSettings ims = new MetadataSettings.ImageMetadataSettings();
        if (mShouldReturnCroppedImage || mShouldReturnFaceImage) {
            // enable obtaining of dewarped (cropped) images
            ims.setDewarpedImageEnabled(true);
        }
        if (mShouldReturnSuccessfulImage) {
            // enable obtaining of successful frames
            ims.setSuccessfulScanFrameEnabled(true);
        }
        // pass prepared image metadata settings to scan activity
        scanIntent.putExtra(ScanCard.EXTRAS_IMAGE_METADATA_SETTINGS, ims);

        // pass image listener to scan activity
        scanIntent.putExtra(ScanCard.EXTRAS_IMAGE_LISTENER,
                new ScanImageListener(
                        mShouldReturnCroppedImage,
                        mShouldReturnSuccessfulImage,
                        mShouldReturnFaceImage
                )
        );

        currentActivity.startActivityForResult(scanIntent, REQ_CODE_SCAN);
    }

    private boolean readBooleanValue(ReadableMap optionsMap, String optionKey, boolean defaultValue) {
        if (optionsMap.hasKey(optionKey)) {
            return optionsMap.getBoolean(optionKey);
        }
        return defaultValue;
    }

    /**
     * Builds recognizer settings for the given recognizer type.
     *
     * @param recognizerType code for the supported recognizer type.
     * @return Recognizer settings for the chosen recognizer.
     * @throws IllegalArgumentException If the given recognizer type code is unknown.
     */
    private RecognizerSettings buildRecognizerSettings(int recognizerType) {
        switch (recognizerType) {
            case RECOGNIZER_MRTD:
                return buildMrtdSettings();
            case RECOGNIZER_USDL:
                return buildUsdlSettings();
            case RECOGNIZER_EUDL:
                return buildEudlSettings();
            case RECOGNIZER_DOCUMENT_FACE:
                return buildDocumentFaceSettings();
            case RECOGNIZER_MYKAD:
                return buildMyKadSettings();
            case RECOGNIZER_PDF417:
                return buildPdf417Settings();
            default:
                throw new IllegalArgumentException("Unknown recognizer type");
        }
    }

    /**
     * Builds settings for the MRTD (Machine Readable Travel Document) recognizer.
     *
     * @return settings for the MRTD (Machine Readable Travel Document) recognizer.
     */
    private MRTDRecognizerSettings buildMrtdSettings() {
        // prepare settings for Machine Readable Travel Document (MRTD) recognizer
        MRTDRecognizerSettings mrtd = new MRTDRecognizerSettings();
        // Set this to true to allow obtaining results that have not been parsed by SDK.
        // By default this is off. The reason for this is that we want to ensure best possible
        // data quality when returning results.
        mrtd.setAllowUnparsedResults(false);

        mrtd.setShowFullDocument(mShouldReturnCroppedImage);

        return mrtd;
    }

    /**
     * Builds settings for the USDL (US Driver's Licence) recognizer.
     *
     * @return settings for the USDL (US Driver's Licence) recognizer.
     */
    private USDLRecognizerSettings buildUsdlSettings() {
        // prepare settings for US Driver's Licence recognizer
        USDLRecognizerSettings usdl = new USDLRecognizerSettings();
        // By setting this to true, you will enable scanning of non-standard elements,
        // but there is no guarantee that all data will be read. This option is used when multiple
        // rows are missing (e.g. not whole barcode is printed). Default is false.
        usdl.setUncertainScanning(false);
        // By setting this to true, you will allow scanning barcodes which don't have quiet zone
        // surrounding it (e.g. text concatenated with barcode). This option can significantly
        // increase recognition time. Default is true.
        usdl.setNullQuietZoneAllowed(true);

        // USDLRecognizer does no return cropped image
        return usdl;
    }

    /**
     * Builds settings for the EUDL (EU Driver's License) recognizer.
     *
     * @return settings for the EUDL (EU Driver's License) recognizer.
     */
    private EUDLRecognizerSettings buildEudlSettings() {
        // To specify we want to perform EUDL (EU Driver's License) recognition,
        // prepare settings for EUDL recognizer. Pass country as parameter to EUDLRecognizerSettings
        // constructor. Here we choose AUTO - automatic country recognition.
        EUDLRecognizerSettings ukdl = new EUDLRecognizerSettings(EUDLCountry.EUDL_COUNTRY_AUTO);
        // Defines if issue date should be extracted. Default is true
        ukdl.setExtractIssueDate(true);
        // Defines if expiry date should be extracted. Default is true.
        ukdl.setExtractExpiryDate(true);
        // Defines if address should be extracted. Default is true.
        ukdl.setExtractAddress(true);
        if (mShouldReturnCroppedImage) {
            ukdl.setShowFullDocument(true);
        }
        return ukdl;
    }

    /**
     * Builds settings for the Document Face recognizer.
     *
     * @return settings for the Document Face recognizer.
     */
    private DocumentFaceRecognizerSettings buildDocumentFaceSettings() {
        // prepare settings for Document Face recognizer
        // choose apropriate DocumentFaceDetectorType, here we use DocumentFaceDetectorType.IDENTITY_CARD_TD1
        DocumentFaceRecognizerSettings documentFace = new DocumentFaceRecognizerSettings(DocumentFaceDetectorType.IDENTITY_CARD_TD1);
        if (mShouldReturnCroppedImage) {
            documentFace.setShowFullDocument(true);
        }
        if (mShouldReturnFaceImage) {
            documentFace.setShowFaceImage(true);
        }

        return documentFace;
    }

    /**
     * Builds settings for the MyKad (Malaysian ID card) recognizer.
     *
     * @return settings for the MyKad (Malaysian ID card) recognizer.
     */
    private MyKadRecognizerSettings buildMyKadSettings() {
        // prepare settings for the MyKad (Malaysian ID card) recognizer
        MyKadRecognizerSettings myKad = new MyKadRecognizerSettings();
        if (mShouldReturnCroppedImage) {
            myKad.setShowFullDocument(true);
        }
        return myKad;
    }

    /**
     * Builds settings for the Pdf417recognizer.
     *
     * @return settings for the Pdf417 recognizer.
     */
    private Pdf417RecognizerSettings buildPdf417Settings() {
        // prepare settings for the PDF417 recognizer
        Pdf417RecognizerSettings pdf417 = new Pdf417RecognizerSettings();

        /**
         * Set this to true to scan even if barcode is not compliant with standards.
         * For example, malformed PDF417 barcodes which were incorrectly encoded.
         * Use only if necessary because it slows down the recognition process.
         */
        pdf417.setUncertainScanning(false);

        /**
         * Set this to true to scan barcodes which don't have quiet zone (white area) around it.
         * Disable if you need a slight speed boost.
         */
        pdf417.setNullQuietZoneAllowed(true);

        return pdf417;
    }

    /**
     * Image listener that will store obtained images to {@link ImageHolder} singleton.
     */
    public static class ScanImageListener implements ImageListener {

        private boolean mShouldStoreCroppedImage;
        private boolean mShouldStoreSuccessfulImage;
        private boolean mShouldStoreFaceImage;

        public ScanImageListener(boolean shouldStoreCroppedImage, boolean shouldStoreSuccessfulImage, boolean shouldStoreFaceImage) {
            mShouldStoreCroppedImage = shouldStoreCroppedImage;
            mShouldStoreSuccessfulImage = shouldStoreSuccessfulImage;
            mShouldStoreFaceImage = shouldStoreFaceImage;
        }

        /**
         * Called when library has image available.
         */
        @Override
        public void onImageAvailable(Image image) {
            ImageType imageType = image.getImageType();
            if (mShouldStoreFaceImage && imageType == ImageType.DEWARPED && image.getImageName().equals(DocumentFaceRecognizerSettings.FACE_IMAGE_NAME)) {
                ImageHolder.getInstance().setFaceImage(image.clone());
            } else if (mShouldStoreCroppedImage && imageType == ImageType.DEWARPED) {
                ImageHolder.getInstance().setDewarpedImage(image.clone());
            } else if (mShouldStoreSuccessfulImage && imageType == ImageType.SUCCESSFUL_SCAN) {
                ImageHolder.getInstance().setSuccessFulImage(image.clone());
            }
        }

        /**
         * ImageListener interface extends Parcelable interface, so we also need to implement
         * that interface. The implementation of Parcelable interface is below this line.
         */
        @Override
        public int describeContents() {
            return 0;
        }

        @Override
        public void writeToParcel(Parcel dest, int flags) {
            dest.writeByte(mShouldStoreCroppedImage ? (byte) 1 : 0);
            dest.writeByte(mShouldStoreSuccessfulImage ? (byte) 1 : 0);
            dest.writeByte(mShouldStoreFaceImage ? (byte) 1 : 0);
        }

        public static final Creator<ScanImageListener> CREATOR = new Creator<ScanImageListener>() {
            @Override
            public ScanImageListener createFromParcel(Parcel source) {
                return new ScanImageListener(source.readByte() == 1, source.readByte() == 1, source.readByte() == 1);
            }

            @Override
            public ScanImageListener[] newArray(int size) {
                return new ScanImageListener[size];
            }
        };
    }

    /**
     * Holds obtained images.
     */
    public static class ImageHolder {

        private static ImageHolder sInstance = new ImageHolder();
        private Image mLastDewarpedImage = null;
        private Image mSuccessFulImage = null;
        private Image mFaceImage = null;

        private ImageHolder() {

        }

        public static ImageHolder getInstance() {
            return sInstance;
        }

        public void setDewarpedImage(Image image) {
            if (mLastDewarpedImage != null) {
                mLastDewarpedImage.dispose();
            }
            mLastDewarpedImage = image;
        }

        public void setSuccessFulImage(Image image) {
            if (mSuccessFulImage != null) {
                mSuccessFulImage.dispose();
            }
            mSuccessFulImage = image;
        }

        public Image getLastDewarpedImage() {
            return mLastDewarpedImage;
        }

        public Image getSuccessfulImage() {
            return mSuccessFulImage;
        }

        public void clear() {
            if (mLastDewarpedImage != null) {
                mLastDewarpedImage.dispose();
            }
            if (mSuccessFulImage != null) {
                mSuccessFulImage.dispose();
            }
            if (mFaceImage != null) {
                mFaceImage.dispose();
            }
            mSuccessFulImage = null;
            mLastDewarpedImage = null;
            mFaceImage = null;
        }

        public void setFaceImage(Image faceImage) {
            if (mFaceImage != null) {
                mFaceImage.dispose();
            }
            mFaceImage = faceImage;
        }

        public Image getFaceImage() {
            return mFaceImage;
        }
    }

    /**
     * Rejects scan promise with the given status/error code and message.
     *
     * @param code    status/error code.
     * @param message status/error message.
     */
    private void rejectPromise(String code, String message) {
        if (mScanPromise == null) {
            return;
        }
        mScanPromise.reject(code, message);
        mScanPromise = null;
    }

    /**
     * Converts given image to base64 encoded JPEG image.
     *
     * @param image image to convert.
     * @return Base64 encoded JPEG image or null if the given {@code image} is {@code null},
     * or conversion has failed.
     */
    private String convertImageToJPEGBase64Encoded(Image image) {
        if (image == null) {
            return null;
        }
        Bitmap imageBmp = image.convertToBitmap();
        if (imageBmp != null) {
            ByteArrayOutputStream byteArrayOutputStream = new ByteArrayOutputStream();
            boolean success = imageBmp.compress(Bitmap.CompressFormat.JPEG, COMPRESSED_IMAGE_QUALITY, byteArrayOutputStream);
            if (success) {
                return Base64.encodeToString(byteArrayOutputStream.toByteArray(), Base64.DEFAULT);
            }
            try {
                byteArrayOutputStream.close();
            } catch (IOException ignorable) {
            }
        }
        return null;
    }

    /**
     * Builds USDL result for returning to JS.
     *
     * @param res USDL result.
     * @return map representation of the given {@code res} for returning to JS.
     */
    private WritableMap buildUSDLResult(USDLScanResult res) {
        return buildKeyValueResult(res, USDL_RESULT_TYPE);
    }

    /**
     * Builds EUDL result for returning to JS.
     *
     * @param res EUDL result.
     * @return map representation of the given {@code res} for returning to JS.
     */
    private WritableMap buildEUDLResult(EUDLRecognitionResult res) {
        return buildKeyValueResult(res, EUDL_RESULT_TYPE);
    }

    /**
     * Builds MRTD result for returning to JS.
     *
     * @param res MRTD result.
     * @return map representation of the given {@code res} for returning to JS.
     */
    private WritableMap buildMRTDResult(MRTDRecognitionResult res) {
        return buildKeyValueResult(res, MRTD_RESULT_TYPE);
    }

    /**
     * Builds DocumentFace result for returning to JS.
     *
     * @param res DocumentFace result.
     * @return map representation of the given {@code res} for returning to JS.
     */
    private WritableMap buildDocumentFaceResult(DocumentFaceRecognitionResult res) {
        WritableMap fields = new WritableNativeMap();
        WritableMap result = new WritableNativeMap();
        result.putString(RESULT_TYPE, DOCUMENT_FACE_RESULT_TYPE);
        result.putMap(FIELDS, fields);
        return result;
    }

    /**
     * Builds MyKad result for returning to JS.
     *
     * @param res MyKad result.
     * @return map representation of the given {@code res} for returning to JS.
     */
    private WritableMap buildMyKadResult(MyKadRecognitionResult res) {
        return buildKeyValueResult(res, MYKAD_RESULT_TYPE);
    }

    /**
     * Builds PDF417 result for returning to JS.
     *
     * @param res PDF417 result.
     * @return map representation of the given {@code res} for returning to JS.
     */
    private WritableMap buildPDF417Result(Pdf417ScanResult res) {
        return buildKeyValueResult(res, PDF417_RESULT_TYPE);
    }

    private WritableMap buildKeyValueResult(BaseRecognitionResult res, String resultType) {
        WritableMap fields = new WritableNativeMap();
        IResultHolder resultHolder = res.getResultHolder();
        for (String key : resultHolder.keySet()) {
            Object value = resultHolder.getObject(key);
            if (value instanceof String) {
                fields.putString(key, (String) value);
            } else if (value instanceof DateResult) {
                fields.putString(key, ((DateResult) value).getOriginalDateString());
            } else {
                Log.d(LOG_TAG, "Ignoring result key '" + key + "'");
            }
        }
        WritableMap result = new WritableNativeMap();
        result.putString(RESULT_TYPE, resultType);
        result.putMap(FIELDS, fields);
        return result;
    }

    private final ActivityEventListener mScanActivityListener = new BaseActivityEventListener() {
        @Override
        public void onActivityResult(Activity activity, int requestCode, int resultCode, Intent data) {
            if (requestCode == REQ_CODE_SCAN) {
                if (mScanPromise != null) {
                    if (resultCode == ScanCard.RESULT_OK) {
                        // First, obtain recognition result
                        RecognitionResults results = data.getParcelableExtra(ScanCard.EXTRAS_RECOGNITION_RESULTS);
                        // Get scan results array. If scan was successful, array will contain at least one element.
                        // Multiple element may be in array if multiple scan results from single image were allowed in settings.
                        BaseRecognitionResult[] resultArray = results.getRecognitionResults();

                        // Each recognition result corresponds to active recognizer. Available recognizers are:
                        // MRTD, USDL, EUDL, DocumentFace, MyKad

                        WritableArray resultsList = new WritableNativeArray();
                        for (BaseRecognitionResult res : resultArray) {
                            if (res instanceof MRTDRecognitionResult) { // check if scan result is result of MRTD recognizer
                                resultsList.pushMap(buildMRTDResult((MRTDRecognitionResult) res));
                            } else if (res instanceof USDLScanResult) { // check if scan result is result of US Driver's Licence recognizer
                                resultsList.pushMap(buildUSDLResult((USDLScanResult) res));
                            } else if (res instanceof EUDLRecognitionResult) { // check if scan result is result of EUDL recognizer
                                resultsList.pushMap(buildEUDLResult((EUDLRecognitionResult) res));
                            } else if (res instanceof DocumentFaceRecognitionResult) { // check if scan result is result of DocumentFace recognizer
                                resultsList.pushMap(buildDocumentFaceResult((DocumentFaceRecognitionResult) res));
                            } else if (res instanceof MyKadRecognitionResult) { // check if scan result is result of MyKad recognizer
                                resultsList.pushMap(buildMyKadResult((MyKadRecognitionResult) res));
                            } else if (res instanceof Pdf417ScanResult) { // check if scan result is result of PDF417 recognizer
                                resultsList.pushMap(buildPDF417Result((Pdf417ScanResult) res));
                            }
                        }

                        WritableMap root = new WritableNativeMap();
                        root.putArray(RESULT_LIST, resultsList);
                        if (mShouldReturnCroppedImage) {
                            Image croppedImage = ImageHolder.getInstance().getLastDewarpedImage();
                            String croppedImageBase64 = convertImageToJPEGBase64Encoded(croppedImage);
                            if (croppedImageBase64 != null) {
                                root.putString(RESULT_IMAGE_CROPPED, croppedImageBase64);
                            }
                        }
                        if (mShouldReturnSuccessfulImage) {
                            Image successfulImage = ImageHolder.getInstance().getSuccessfulImage();
                            String successfulImageBase64 = convertImageToJPEGBase64Encoded(successfulImage);
                            if (successfulImageBase64 != null) {
                                root.putString(RESULT_IMAGE_SUCCESSFUL, successfulImageBase64);
                            }
                        }
                        if (mShouldReturnFaceImage) {
                            Image faceImage = ImageHolder.getInstance().getFaceImage();
                            String faceImageBase64 = convertImageToJPEGBase64Encoded(faceImage);
                            if (faceImageBase64 != null) {
                                root.putString(RESULT_IMAGE_FACE, faceImageBase64);
                            }
                        }
                        mScanPromise.resolve(root);
                    } else if (resultCode == ScanCard.RESULT_CANCELED) {
                        rejectPromise(STATUS_SCAN_CANCELED, "Scanning has been canceled");
                    }
                    mScanPromise = null;
                }
                ImageHolder.getInstance().clear();
            }
        }
    };
}
