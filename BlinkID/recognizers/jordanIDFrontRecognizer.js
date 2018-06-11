import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for JordanIDFrontRecognizer.
 */
export class JordanIDFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * date of birth of Jordan ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * name of Jordan ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * the national number of Jordan ID card owner. 
         */
        this.natianalNumber = nativeResult.natianalNumber;
        
        /** 
         * sex of Jordan ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 *  Recognizer for reading front side of Jordan ID.

 */
export class JordanIDFrontRecognizer extends Recognizer {
    constructor() {
        super('JordanIDFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if date of birth of Jordan owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if name of Jordan ID owner is being extracted 
         */
        this.extractName = true;
        
        /** 
         * true if sex of Jordan owner is being extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDPI = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new JordanIDFrontRecognizerResult(nativeResult); }
    }
}