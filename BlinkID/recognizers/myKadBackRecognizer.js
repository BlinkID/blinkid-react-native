import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
} from '../types'

/**
 * Result object for MyKadBackRecognizer.
 */
export class MyKadBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * date of birth of MyKad owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         * document classifier of MyKad. 
         */
        this.documentClassifier = nativeResult.documentClassifier;
        
        /** 
         * extended NRIC (National Registration Identity Card Number) of MyKad. 
         */
        this.extendedNRIC = nativeResult.extendedNRIC;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * NRIC (National Registration Identity Card Number) of MyKad. 
         */
        this.nRIC = nativeResult.nRIC;
        
        /** 
         * sex of MyKad owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer for reading back side of Malaysian MyKad.

 */
export class MyKadBackRecognizer extends Recognizer {
    constructor() {
        super('MyKadBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MyKadBackRecognizerResult(nativeResult); }
    }
}