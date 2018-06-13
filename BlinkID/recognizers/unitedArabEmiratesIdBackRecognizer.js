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
 * Result object for UnitedArabEmiratesIdBackRecognizer.
 */
export class UnitedArabEmiratesIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
    }
}

/**
 * Recognizer which can scan back side of United Arab Emirates national ID cards.
 */
export class UnitedArabEmiratesIdBackRecognizer extends Recognizer {
    constructor() {
        super('UnitedArabEmiratesIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new UnitedArabEmiratesIdBackRecognizerResult(nativeResult); }
    }
}