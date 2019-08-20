import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
    ImageExtensionFactors,
} from '../types'

/**
 * Result object for BlinkIdCombinedRecognizer.
 */
export class BlinkIdCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the document owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of the document owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the document. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
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
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * The document number. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The driver license detailed info. 
         */
        this.driverLicenseDetailedInfo = nativeResult.driverLicenseDetailedInfo;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
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
         * The last name of the document owner. 
         */
        this.lastName = nativeResult.lastName;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new BlinkIdCombinedRecognizerResult(nativeResult); }
    }
}