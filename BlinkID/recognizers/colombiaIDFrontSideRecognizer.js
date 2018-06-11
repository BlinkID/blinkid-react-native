import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for ColombiaIDFrontSideRecognizer.
 */
export class ColombiaIDFrontSideRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the Colombian ID document number number. 
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
         * owner first name 
         */
        this.ownerFirsName = nativeResult.ownerFirsName;
        
        /** 
         * owner first name 
         */
        this.ownerLastName = nativeResult.ownerLastName;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer for reading Colombia ID Front document.

 */
export class ColombiaIDFrontSideRecognizer extends Recognizer {
    constructor() {
        super('ColombiaIDFrontSideRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if first name of Colombia ID Front owner is being extracted 
         */
        this.extractFirstName = true;
        
        /** 
         * true if last name of Colombia ID Front owner is being extracted 
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
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaIDFrontSideRecognizerResult(nativeResult); }
    }
}