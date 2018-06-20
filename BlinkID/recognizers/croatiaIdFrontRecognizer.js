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
 * Result object for CroatiaIdFrontRecognizer.
 */
export class CroatiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * citizenship of the Croatian ID owner. 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * the date of birth of Croatian ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * the document date of expiry of the Croatian ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * true if date of expiry of the Croatian ID is permanent else false 
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /** 
         * true if scanned document is bilingual 
         */
        this.documentBilingual = nativeResult.documentBilingual;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Croatian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the identity card number of Croatian ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * the last name of the Croatian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * sex of the Croatian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan front side of croatian national ID cards.
 * 
 */
export class CroatiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('CroatiaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if citizenship of Croatian ID owner is being extracted 
         */
        this.extractCitizenship = true;
        
        /** 
         * true if date of birth of Croatian ID owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if date of expiry is being extracted from Croatian ID 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * true if sex of Croatian ID owner is being extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new CroatiaIdFrontRecognizerResult(nativeResult); }
    }
}