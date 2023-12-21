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
    
    
    ImageExtensionFactors,
    DataMatchResult,
} from '../types'

/**
 * Result object for BlinkIdMultiSideRecognizer.
 */
export class BlinkIdMultiSideRecognizerResult extends RecognizerResult {
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
         * Additional info on processing of the back side.
         */
        this.backAdditionalProcessingInfo = nativeResult.backAdditionalProcessingInfo;
        
        /**
         * The back raw camera frame.
         */
        this.backCameraFrame = nativeResult.backCameraFrame;
        
        /**
         * Defines possible color and moire statuses determined from scanned back image.
         */
        this.backImageAnalysisResult = nativeResult.backImageAnalysisResult;
        
        /**
         * Status of the last back side recognition process.
         */
        this.backProcessingStatus = nativeResult.backProcessingStatus;
        
        /**
         * Defines the data extracted from the back side visual inspection zone.
         */
        this.backVizResult = nativeResult.backVizResult;
        
        /**
         * The barcode raw camera frame.
         */
        this.barcodeCameraFrame = nativeResult.barcodeCameraFrame;
        
        /**
         * Defines the data extracted from the barcode.
         */
        this.barcodeResult = nativeResult.barcodeResult;
        
        /**
         * The classification information.
         */
        this.classInfo = nativeResult.classInfo;
        
        /**
         * Detailed info on data match.
         */
        this.dataMatch = nativeResult.dataMatch;
        
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
         * The driver license detailed info.
         */
        this.driverLicenseDetailedInfo = nativeResult.driverLicenseDetailedInfo;
        
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
         * Additional info on processing of the front side.
         */
        this.frontAdditionalProcessingInfo = nativeResult.frontAdditionalProcessingInfo;
        
        /**
         * The front raw camera frame.
         */
        this.frontCameraFrame = nativeResult.frontCameraFrame;
        
        /**
         * Defines possible color and moire statuses determined from scanned front image.
         */
        this.frontImageAnalysisResult = nativeResult.frontImageAnalysisResult;
        
        /**
         * Status of the last front side recognition process.
         */
        this.frontProcessingStatus = nativeResult.frontProcessingStatus;
        
        /**
         * Defines the data extracted from the front side visual inspection zone.
         */
        this.frontVizResult = nativeResult.frontVizResult;
        
        /**
         * back side image of the document if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /**
         * front side image of the document if enabled with returnFullDocumentImage property.
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /**
         * The full name of the document owner.
         */
        this.fullName = nativeResult.fullName;
        
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
         * The residential stauts of the document owner.
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /**
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side.
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /**
         * The sex of the document owner.
         */
        this.sex = nativeResult.sex;
        
        /**
         * image of the signature if enabled with returnSignatureImage property.
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer which can scan front and back side of the United States driver license.
 */
export class BlinkIdMultiSideRecognizer extends Recognizer {
    constructor() {
        super('BlinkIdMultiSideRecognizer');
        
        /**
         * Additional anonymization settings.
         */
        this.additionalAnonymization = [];
        
        /**
         * Defines whether blured frames filtering is allowed
         * 
         * 
         */
        this.allowBlurFilter = true;
        
        /**
         * Proceed with scanning the back side even if the front side result is uncertain.
         * This only works for still images - video feeds will ignore this setting.
         * 
         * 
         */
        this.allowUncertainFrontSideScan = false;
        
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
         * Configure the number of characters per field that are allowed to be inconsistent in data match.
         * 
         * 
         */
        this.maxAllowedMismatchesPerField = 0;
        
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
         * Skip back side capture and processing step when back side of the document is not supported
         * 
         * 
         */
        this.skipUnsupportedBack = false;
        
        /**
         * Defines whether result characters validatation is performed.
         * If a result member contains invalid character, the result state cannot be valid
         * 
         * 
         */
        this.validateResultCharacters = true;
        
        this.createResultFromNative = function (nativeResult) { return new BlinkIdMultiSideRecognizerResult(nativeResult); }
    }
}