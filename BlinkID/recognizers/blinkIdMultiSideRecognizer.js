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
         * The additional name information of the document owner.
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
         */
        this.age = nativeResult.age;
        
        /**
         * Additional info on processing of the back side.
         */
        this.backAdditionalProcessingInfo = nativeResult.backAdditionalProcessingInfo;
        
        /**
         * Back camera frame.
         */
        this.backCameraFrame = nativeResult.backCameraFrame;
        
        /**
         * Image analysis result for the scanned document back side image
         */
        this.backImageAnalysisResult = nativeResult.backImageAnalysisResult;
        
        /**
         * Status of the last back side recognition process.
         */
        this.backProcessingStatus = nativeResult.backProcessingStatus;
        
        /**
         * The data extracted from the back side visual inspection zone.
         */
        this.backVizResult = nativeResult.backVizResult;
        
        /**
         * Barcode camera frame.
         */
        this.barcodeCameraFrame = nativeResult.barcodeCameraFrame;
        
        /**
         * The data extracted from the barcode.
         */
        this.barcodeResult = nativeResult.barcodeResult;
        
        /**
         * The document class information.
         */
        this.classInfo = nativeResult.classInfo;
        
        /**
         * Info on whether the data extracted from front image matches the data extracted from the back image.
         */
        this.dataMatch = nativeResult.dataMatch;
        
        /**
         * The date of birth of the document owner.
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /**
         * The date of expiry of the document.
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry;
        
        /**
         * Determines if date of expiry is permanent.
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /**
         * The date of issue of the document.
         */
        this.dateOfIssue = nativeResult.dateOfIssue;
        
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
         */
        this.expired = nativeResult.expired;
        
        /**
         * Face image from the document
         */
        this.faceImage = nativeResult.faceImage;
        
        /**
         * The face image location.
         */
        this.faceImageLocation = nativeResult.faceImageLocation;
        
        /**
         * Side of the card of the face image.
         */
        this.faceImageSide = nativeResult.faceImageSide;
        
        /**
         * The fathers name of the document owner.
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
         * Front camera frame.
         */
        this.frontCameraFrame = nativeResult.frontCameraFrame;
        
        /**
         * Image analysis result for the scanned document front side image
         */
        this.frontImageAnalysisResult = nativeResult.frontImageAnalysisResult;
        
        /**
         * Status of the last front side recognition process.
         */
        this.frontProcessingStatus = nativeResult.frontProcessingStatus;
        
        /**
         * The data extracted from the front side visual inspection zone.
         */
        this.frontVizResult = nativeResult.frontVizResult;
        
        /**
         * Back side image of the document
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /**
         * Front side image of the document
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
         * The mothers name of the document owner.
         */
        this.mothersName = nativeResult.mothersName;
        
        /**
         * The data extracted from the machine readable zone.
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
         * Status of the last recognition process.
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
         * {true} if recognizer has finished scanning first side and is now scanning back side,
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /**
         * The sex of the document owner.
         */
        this.sex = nativeResult.sex;
        
        /**
         * Signature image from the document
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * A generic recognizer which can scan front and back side of the document.
 */
export class BlinkIdMultiSideRecognizer extends Recognizer {
    constructor() {
        super('BlinkIdMultiSideRecognizer');
        
        /**
         * Additional anonymization settings.
         */
        this.additionalAnonymization = [];
        
        /**
         * Skip processing of the blurred frames.
         */
        this.allowBlurFilter = true;
        
        /**
         * Proceed to scan the back side of a document even if some of the validity checks have failed while scanning the front side of a document.
         */
        this.allowUncertainFrontSideScan = false;
        
        /**
         * Allow reading of non-standard MRZ (Machine Readable Zone). Only raw MRZ result is returned.
         */
        this.allowUnparsedMrzResults = false;
        
        /**
         * Allow reading of standard MRZ (Machine Readable Zone) which gets successfully parsed,
         */
        this.allowUnverifiedMrzResults = true;
        
        /**
         * Redact specific fields based on requirements or laws regarding a specific document.
         */
        this.anonymizationMode = AnonymizationMode.FullResult;
        
        /**
         * The DPI (Dots Per Inch) for face image that should be returned.
         */
        this.faceImageDpi = 250;
        
        /**
         * The DPI (Dots Per Inch) for full document image that should be returned.
         */
        this.fullDocumentImageDpi = 250;
        
        /**
         * The extension factors for full document image.
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /**
         * Configure the number of characters per field that are allowed to be inconsistent in data match.
         */
        this.maxAllowedMismatchesPerField = 0;
        
        /**
         * Minimum required distance between the edge of the scanning frame and the document.
         */
        this.paddingEdge = 0.0;
        
        /**
         * Currently set recognition mode filter.
         */
        this.recognitionModeFilter = new RecognitionModeFilter();
        
        /**
         * Defines whether face image will be available in result.
         */
        this.returnFaceImage = false;
        
        /**
         * Defines whether full document image will be available in
         */
        this.returnFullDocumentImage = false;
        
        /**
         * Defines whether signature image will be available in result.
         */
        this.returnSignatureImage = false;
        
        /**
         * Save the raw camera frames at the moment of the data extraction or timeout.
         */
        this.saveCameraFrames = false;
        
        /**
         * Process only cropped document images with corrected perspective (frontal images of a document).
         */
        this.scanCroppedDocumentImage = false;
        
        /**
         * The DPI (Dots Per Inch) for signature image that should be returned.
         */
        this.signatureImageDpi = 250;
        
        /**
         * Back side of the document will not be scanned if only the front side is supported for a specific document.
         */
        this.skipUnsupportedBack = false;
        
        /**
         * Allow only results containing expected characters for a given field.
         */
        this.validateResultCharacters = true;
        
        this.createResultFromNative = function (nativeResult) { return new BlinkIdMultiSideRecognizerResult(nativeResult); }
    }
}