import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for UnitedArabEmiratesIDFrontRecognizer.
 */
export class UnitedArabEmiratesIDFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the idNumber of the United Arab Emirates ID owner. 
         */
        this.idNumber = nativeResult.idNumber;
        
        /** 
         * the name of the United Arab Emirates ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * the nationality of the United Arab Emirates ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
    }
}

/**
 * Recognizer which can scan front side of United Arab Emirates national ID cards.
 */
export class UnitedArabEmiratesIDFrontRecognizer extends Recognizer {
    constructor() {
        super('UnitedArabEmiratesIDFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if name of United Arab Emirates ID owner should be extracted 
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of United Arab Emirates ID owner should be extracted 
         */
        this.extractNationality = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new UnitedArabEmiratesIDFrontRecognizerResult(nativeResult); }
    }
}