import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for AustriaIDFrontSideRecognizer.
 */
export class AustriaIDFrontSideRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the date of birth of Austrian ID owner 
         */
        this.dateOfBirth = new Date(nativeResult.dateOfBirth);
        
        /** 
         * the document number of Austrian ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the given name of the Austrian ID owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * sex of the Austrian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * the surname of the Austrian ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of austrian national ID cards.
 */
export class AustriaIDFrontSideRecognizer extends Recognizer {
    constructor() {
        super('AustriaIDFrontSideRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Austrian ID owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if given name of Austrian ID owner should be extracted 
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if sex of Austrian ID owner should be extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Austrian ID owner should be extracted 
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new AustriaIDFrontSideRecognizerResult(nativeResult); }
    }
}