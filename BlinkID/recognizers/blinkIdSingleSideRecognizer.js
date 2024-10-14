import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date,
    Point,
    Quadrilateral,
    MrtdDocumentType,
    MrzResult,
    DocumentFaceDetectorType,
    Country,
    Region,
    Type,
    DocumentImageColorStatus,
    DocumentImageMoireStatus,
    AnonymizationMode,
    RecognitionModeFilter,
    StrictnessLevel,
    
    
    ImageExtensionFactors,
    DataMatchResult,
} from '../types'

/**
 * Result object for BlinkIdSingleSideRecognizer.
 */
export class BlinkIdSingleSideRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /**
         * The additional address information of the document owner.
         */
        this.additionalAddressInformation = nativeResult.additionalAddressInformation;
        
        /**
         * The additional name information of the document owner.
         */
        this.additionalNameInformation = nativeResult.additionalNameInformation;
        
        /**
         * The one more additional address information of the document owner.
         */
        this.additionalOptionalAddressInformation = nativeResult.additionalOptionalAddressInformation;
        
        /**
         * Additional info on processing.
         */
        this.additionalProcessingInfo = nativeResult.additionalProcessingInfo;
        
        /**
         * The address of the document owner.
         */
        this.address = nativeResult.address;
        
        /**
         * The current age of the document owner in years. It is calculated difference
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown.
         */
        this.age = nativeResult.age;
        
        /**
         * The barcode raw camera frame.
         */
        this.barcodeCameraFrame = nativeResult.barcodeCameraFrame;
        
        /**
         * Defines the data extracted from the barcode.
         */
        this.barcodeResult = nativeResult.barcodeResult;
        
        /**
         * This member indicates whether the barcode scanning step was utilized during the
         * process.
         * If the barcode scanning step was executed: a parsable barcode image will be stored in the
         * `barcodeCameraFrame`.
         * If the barcode scanning step was not executed: a parsable barcode image will be stored in the
         * `fullDocumentImage`.
         */
        this.barcodeStepUsed = nativeResult.barcodeStepUsed;
        
        /**
         * The blood type of the document owner.
         */
        this.bloodType = nativeResult.bloodType;
        
        /**
         * The raw camera frame.
         */
        this.cameraFrame = nativeResult.cameraFrame;
        
        /**
         * The classification information.
         */
        this.classInfo = nativeResult.classInfo;
        
        /**
         * The date of birth of the document owner.
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /**
         * The date of expiry of the document.
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /**
         * Determines if date of expiry is permanent.
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /**
         * The date of issue of the document.
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /**
         * The additional number of the document.
         */
        this.documentAdditionalNumber = nativeResult.documentAdditionalNumber;
        
        /**
         * The document number.
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /**
         * The one more additional number of the document.
         */
        this.documentOptionalAdditionalNumber = nativeResult.documentOptionalAdditionalNumber;
        
        /**
         * The transcription of the document subtype.
         */
        this.documentSubtype = nativeResult.documentSubtype;
        
        /**
         * The driver license detailed info.
         */
        this.driverLicenseDetailedInfo = nativeResult.driverLicenseDetailedInfo;
        
        /**
         * The manufacturing year..
         */
        this.eligibilityCategory = nativeResult.eligibilityCategory;
        
        /**
         * The employer of the document owner.
         */
        this.employer = nativeResult.employer;
        
        /**
         * Checks whether the document has expired or not by comparing the current
         * time on the device with the date of expiry.
         * 
         * @return true if the document has expired, false in following cases:
         * document does not expire (date of expiry is permanent)
         * date of expiry has passed
         * date of expiry is unknown and it is not permanent
         */
        this.expired = nativeResult.expired;
        
        /**
         * face image from the document if enabled with returnFaceImage property.
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * face image location from the document if enabled with returnFaceImage property.
         */
        this.faceImageLocation = nativeResult.faceImageLocation;
        
        /**
         * side of document that face image is located on if enabled with returnFaceImage property.
         */
        this.faceImageSide = nativeResult.faceImageSide;
        
        /**
         * The father's name of the document owner.
         */
        this.fathersName = nativeResult.fathersName;
        
        /**
         * The first name of the document owner.
         */
        this.firstName = nativeResult.firstName;
        
        /**
         * full document image if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /**
         * The full name of the document owner.
         */
        this.fullName = nativeResult.fullName;
        
        /**
         * Defines possible color and moire statuses determined from scanned image.
         */
        this.imageAnalysisResult = nativeResult.imageAnalysisResult;
        
        /**
         * The issuing authority of the document.
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /**
         * The last name of the document owner.
         */
        this.lastName = nativeResult.lastName;
        
        /**
         * The localized name of the document owner.
         */
        this.localizedName = nativeResult.localizedName;
        
        /**
         * The manufacturing year.
         */
        this.manufacturingYear = nativeResult.manufacturingYear;
        
        /**
         * The marital status of the document owner.
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
        /**
         * The mother's name of the document owner.
         */
        this.mothersName = nativeResult.mothersName;
        
        /**
         * The data extracted from the machine readable zone
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /**
         * The nationality of the documet owner.
         */
        this.nationality = nativeResult.nationality;
        
        /**
         * The personal identification number.
         */
        this.personalIdNumber = nativeResult.personalIdNumber;
        
        /**
         * The place of birth of the document owner.
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /**
         * Defines status of the last recognition process.
         */
        this.processingStatus = nativeResult.processingStatus;
        
        /**
         * The profession of the document owner.
         */
        this.profession = nativeResult.profession;
        
        /**
         * The race of the document owner.
         */
        this.race = nativeResult.race;
        
        /**
         * Recognition mode used to scan current document.
         */
        this.recognitionMode = nativeResult.recognitionMode;
        
        /**
         * The religion of the document owner.
         */
        this.religion = nativeResult.religion;
        
        /**
         * The remarks on the residence permit.
         */
        this.remarks = nativeResult.remarks;
        
        /**
         * The residence permit type.
         */
        this.residencePermitType = nativeResult.residencePermitType;
        
        /**
         * The residential stauts of the document owner.
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /**
         * The sex of the document owner.
         */
        this.sex = nativeResult.sex;
        
        /**
         * image of the signature if enabled with returnSignatureImage property.
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /**
         * The specific document validity.
         */
        this.specificDocumentValidity = nativeResult.specificDocumentValidity;
        
        /**
         * The sponsor of the document owner.
         */
        this.sponsor = nativeResult.sponsor;
        
        /**
         * The eligibility category.
         */
        this.vehicleType = nativeResult.vehicleType;
        
        /**
         * The visa type.
         */
        this.visaType = nativeResult.visaType;
        
        /**
         * Defines the data extracted from the visual inspection zone
         */
        this.vizResult = nativeResult.vizResult;
        
        /**
         * The dependents info.
         */
        this.dependentsInfo = nativeResult.dependentsInfo;
        
    }
}

/**
 * The Blink ID Recognizer is used for scanning Blink ID.
 */
export class BlinkIdSingleSideRecognizer extends Recognizer {
    constructor() {
        super('BlinkIdSingleSideRecognizer');
        
        /**
         * Additional anonymization settings.
         */
        this.additionalAnonymization = [];
        
        /**
         * Allows barcode recognition to proceed even if the initial extraction fails.
         * This only works for still images - video feeds will ignore this setting.
         * If the barcode recognition is successful, the recognizer will still end in a valid state.
         * This setting is applicable only to photo frames. For multi-side recognizers, it is permitted only for the back side.
         * 
         * 
         */
        this.allowBarcodeScanOnly = false;
        
        /**
         * Defines whether returning of unparsed MRZ (Machine Readable Zone) results is allowed
         * 
         * 
         */
        this.allowUnparsedMrzResults = false;
        
        /**
         * Defines whether returning unverified MRZ (Machine Readable Zone) results is allowed
         * Unverified MRZ is parsed, but check digits are incorrect
         * 
         * 
         */
        this.allowUnverifiedMrzResults = true;
        
        /**
         * Defines whether sensitive data should be removed from images, result fields or both.
         * The setting only applies to certain documents
         * 
         * 
         */
        this.anonymizationMode = AnonymizationMode.FullResult;
        
        /**
         * Strictness level for blur detection.
         * 
         * 
         */
        this.blurStrictnessLevel = StrictnessLevel.Normal;
        
        /**
         * Enables the aggregation of data from multiple frames.
         * Disabling this setting will yield higher-quality captured images, but it may slow down the scanning process due to the additional effort required to find the optimal frame.
         * Enabling this setting will simplify the extraction process, but the extracted data will be aggregated from multiple frames instead of being sourced from a single frame.
         * 
         * 
         */
        this.combineFrameResults = true;
        
        /**
         * Get custom class rules.
         */
        this.customClassRules = [];
        
        /**
         * Skip processing of the blurred frames.
         * 
         * 
         */
        this.enableBlurFilter = true;
        
        /**
         * Skip processing of the glared frames.
         * 
         * 
         */
        this.enableGlareFilter = true;
        
        /**
         * Property for setting DPI for face images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
         */
        this.faceImageDpi = 250;
        
        /**
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
         */
        this.fullDocumentImageDpi = 250;
        
        /**
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         * 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /**
         * Strictness level for glare detection.
         * 
         * 
         */
        this.glareStrictnessLevel = StrictnessLevel.Normal;
        
        /**
         * Pading is a minimum distance from the edge of the frame and is defined as a percentage of the frame width. Default value is 0.0f and in that case
         * padding edge and image edge are the same.
         * Recommended value is 0.02f.
         * 
         * 
         */
        this.paddingEdge = 0.0;
        
        /**
         * Enable or disable recognition of specific document groups supported by the current license.
         * 
         * 
         */
        this.recognitionModeFilter = new RecognitionModeFilter();
        
        /**
         * Sets whether face image from ID card should be extracted
         * 
         * 
         */
        this.returnFaceImage = false;
        
        /**
         * Sets whether full document image of ID card should be extracted.
         * 
         * 
         */
        this.returnFullDocumentImage = false;
        
        /**
         * Sets whether signature image from ID card should be extracted.
         * 
         * 
         */
        this.returnSignatureImage = false;
        
        /**
         * Configure the recognizer to save the raw camera frames.
         * This significantly increases memory consumption.
         * 
         * 
         */
        this.saveCameraFrames = false;
        
        /**
         * Configure the recognizer to only work on already cropped and dewarped images.
         * This only works for still images - video feeds will ignore this setting.
         * 
         * 
         */
        this.scanCroppedDocumentImage = false;
        
        /**
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         * 
         */
        this.signatureImageDpi = 250;
        
        /**
         * Defines whether result characters validatation is performed.
         * If a result member contains invalid character, the result state cannot be valid
         * 
         * 
         */
        this.validateResultCharacters = true;
        
        this.createResultFromNative = function (nativeResult) { return new BlinkIdSingleSideRecognizerResult(nativeResult); }
    }
}