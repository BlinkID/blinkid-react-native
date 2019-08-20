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
 * Result object for SlovakiaIdFrontRecognizer.
 */
export class SlovakiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of the Slovak ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Slovak ID card. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the Slovak ID card. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The document number of the Slovak ID card. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Slovak ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of the Slovak ID card. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The last name of the Slovak ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The nationality of the Slovak ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The personal number of the Slovak ID owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         * The sex of the Slovak ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer which can scan front side of Slovak national ID cards.
 */
export class SlovakiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Slovak ID owner should be extracted.
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Slovak ID should be extracted.
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Slovak ID should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if document number of Slovak ID should be extracted.
         * 
         *  
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if first name of Slovak ID owner should be extracted.
         * 
         *  
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Slovak ID should be extracted.
         * 
         *  
         */
        this.extractIssuedBy = true;
        
        /** 
         * Defines if last name of Slovak ID owner should be extracted.
         * 
         *  
         */
        this.extractLastName = true;
        
        /** 
         * Defines if nationality of Slovak ID owner should be extracted.
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if sex of Slovak ID owner should be extracted.
         * 
         *  
         */
        this.extractSex = true;
        
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
         * Sets whether signature image from ID card should be extracted.
         * 
         *  
         */
        this.returnSignatureImage = false;
        
        /** 
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaIdFrontRecognizerResult(nativeResult); }
    }
}