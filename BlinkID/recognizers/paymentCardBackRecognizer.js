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
 * Result object for PaymentCardBackRecognizer.
 */
export class PaymentCardBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Payment card's security code/value. 
         */
        this.cvv = nativeResult.cvv;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Payment card's inventory number. 
         */
        this.inventoryNumber = nativeResult.inventoryNumber;
        
    }
}

/**
 * Recognizer used for scanning the back side of credit/debit cards
 */
export class PaymentCardBackRecognizer extends Recognizer {
    constructor() {
        super('PaymentCardBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Should extract the card's inventory number 
         */
        this.extractInventoryNumber = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new PaymentCardBackRecognizerResult(nativeResult); }
    }
}