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
 * Result object for BelgiumCombinedRecognizer.
 */
export class BelgiumCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The card number of the Belgium ID card. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * The date of birth of the Belgium ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Belgium ID card. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
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
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Belgium ID owner. 
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
         * The issuing authority of the Belgium ID card. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The last name of the Belgium ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * Determines if all check digits inside MRZ are correct. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The nationality of the Belgium ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Belgium ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan front and back side of Belgium national ID cards.
 */
export class BelgiumCombinedRecognizer extends Recognizer {
    constructor() {
        super('BelgiumCombinedRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new BelgiumCombinedRecognizerResult(nativeResult); }
    }
}