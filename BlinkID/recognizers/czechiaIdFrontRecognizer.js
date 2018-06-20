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
 * Result object for CzechiaIdFrontRecognizer.
 */
export class CzechiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of the Czech ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Czech ID owner. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the Czech ID owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Czech ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The ID card number of the Czech ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * The last name of the Czech ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The place of birth of the Czech ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The sex of the Czech ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Class for configuring Cz ID Front Recognizer.
 * 
 * Cz ID Front recognizer is used for scanning front side of Cz ID.
 */
export class CzechiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('CzechiaIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of expiry should be extracted from Czech ID
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry should be extracted from Czech ID
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue should be extracted from Czech ID
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given names of Czech ID owner should be extracted
         * 
         *  
         */
        this.extractGivenNames = true;
        
        /** 
         * Defines if place of birth should be extracted from Czech ID
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         *  Defines if sex of Czech ID owner should be extracted
         * 
         *   
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Czech ID owner should be extracted
         * 
         *  
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new CzechiaIdFrontRecognizerResult(nativeResult); }
    }
}