import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for UnitedArabEmiratesIDBackRecognizer.
 */
export class UnitedArabEmiratesIDBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.MRZResult = nativeResult.MRZResult;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Recognizer which can scan back side of United Arab Emirates national ID cards.
 */
export class UnitedArabEmiratesIDBackRecognizer extends Recognizer {
    constructor() {
        super('UnitedArabEmiratesIDBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new UnitedArabEmiratesIDBackRecognizerResult(nativeResult); }
    }
}