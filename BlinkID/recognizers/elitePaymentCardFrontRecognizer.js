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
 * Result object for ElitePaymentCardFrontRecognizer.
 */
export class ElitePaymentCardFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Information about the payment card owner (name, company, etc.). 
         */
        this.owner = nativeResult.owner;
        
    }
}

/**
 * Recognizer used for scanning the front side of elite credit/debit cards.
 */
export class ElitePaymentCardFrontRecognizer extends Recognizer {
    constructor() {
        super('ElitePaymentCardFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Should extract the card owner information 
         */
        this.extractOwner = true;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new ElitePaymentCardFrontRecognizerResult(nativeResult); }
    }
}