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
 * Result object for SloveniaIdFrontRecognizer.
 */
export class SloveniaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of the Slovenian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Slovenian ID owner. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Slovenian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The last name of the Slovenian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The nationality of the Slovenian ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The sex of the Slovenian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Class for configuring Slovenian ID Front Recognizer.
 * 
 * Slovenian ID Front recognizer is used for scanning front side of Slovenian ID.
 */
export class SloveniaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SloveniaIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         *  Defines if date of birth of Slovenian ID owner should be extracted
         * 
         *   
         */
        this.extractDateOfBirth = true;
        
        /** 
         *  Defines if date of expiry of Slovenian ID should be extracted
         * 
         *   
         */
        this.extractDateOfExpiry = true;
        
        /** 
         *  Defines if nationality of Slovenian ID owner should be extracted
         * 
         *   
         */
        this.extractNationality = true;
        
        /** 
         *  Defines if sex of Slovenian ID owner should be extracted
         * 
         *   
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SloveniaIdFrontRecognizerResult(nativeResult); }
    }
}