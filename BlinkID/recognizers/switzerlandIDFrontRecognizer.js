import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for SwitzerlandIDFrontRecognizer.
 */
export class SwitzerlandIDFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the date of birth of Swiss ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Swiss ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the last name of the Swiss ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan the front side of Swiss national ID cards.

 */
export class SwitzerlandIDFrontRecognizer extends Recognizer {
    constructor() {
        super('SwitzerlandIDFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if first name of Swiss ID owner is being extracted 
         */
        this.extractFirstName = true;
        
        /** 
         * true if last name of Swiss ID owner is being extracted 
         */
        this.extractLastName = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandIDFrontRecognizerResult(nativeResult); }
    }
}