import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult,
    DocumentFaceDetectorType,
    ImageExtensionFactors,
    DataMatchResult,
    Country,
    Region,
    Type,
    DocumentImageColorStatus,
    
} from '../types'

/**
 * Result object for BlinkIdCombinedRecognizer.
 */
export class BlinkIdCombinedRecognizerResult extends RecognizerResult {
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
         * The classification information. 
         */
        this.classInfo = nativeResult.classInfo;
        
        /** 
         * The driver license conditions. 
         */
        this.conditions = nativeResult.conditions;
        
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
         * Digital signature of the recognition result. Available only if enabled with signResult property. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Version of the digital signature. Available only if enabled with signResult property. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * The additional number of the document. 
         */
        this.documentAdditionalNumber = nativeResult.documentAdditionalNumber;
        
        /** 
         * Defines possible color statuses determined from scanned image. 
         */
        this.documentBackImageColorStatus = nativeResult.documentBackImageColorStatus;
        
        /** 
         * Returns DataMatchResultSuccess if data from scanned parts/sides of the document match,
         * DataMatchResultFailed otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return DataMatchResultFailed. Result will
         * be DataMatchResultSuccess only if scanned values for all fields that are compared are the same. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * Defines possible color statuses determined from scanned image. 
         */
        this.documentFrontImageColorStatus = nativeResult.documentFrontImageColorStatus;
        
        /** 
         * The document number. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The driver license detailed info. 
         */
        this.driverLicenseDetailedInfo = nativeResult.driverLicenseDetailedInfo;
        
        /** 
         * The employer of the document owner. 
         */
        this.employer = nativeResult.employer;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the document owner. 
         */
        this.firstName = nativeResult.firstName;
        
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
         * The profession of the document owner. 
         */
        this.profession = nativeResult.profession;
        
        /** 
         * The race of the document owner. 
         */
        this.race = nativeResult.race;
        
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
        
    }
}

/**
 * Recognizer which can scan front and back side of the United States driver license.
 */
export class BlinkIdCombinedRecognizer extends Recognizer {
    constructor() {
        super('BlinkIdCombinedRecognizer');
        
        /** 
         * Defines whether blured frames filtering is allowed
         * 
         *  
         */
        this.allowBlurFilter = true;
        
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
         * Pading is a minimum distance from the edge of the frame and is defined as a percentage of the frame width. Default value is 0.0f and in that case
         * padding edge and image edge are the same.
         * Recommended value is 0.02f.
         * 
         *  
         */
        this.paddingEdge = 0.0f;
        
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
         * Whether or not recognition result should be signed.
         * 
         *  
         */
        this.signResult = false;
        
        /** 
         * Skip back side capture and processing step when back side of the document is not supported
         * 
         *  
         */
        this.skipUnsupportedBack = false;
        
        this.createResultFromNative = function (nativeResult) { return new BlinkIdCombinedRecognizerResult(nativeResult); }
    }
}