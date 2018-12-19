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
 * Result object for ElitePaymentCardBackRecognizer.
 */
export class ElitePaymentCardBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The payment card number. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
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
        
        /** 
         * The payment card's last month of validity. 
         */
        this.validThru = nativeResult.validThru != null ? new Date(nativeResult.validThru) : null;
        
    }
}

/**
 * Recognizer used for scanning the back side of elite payment cards.
 */
export class ElitePaymentCardBackRecognizer extends Recognizer {
    constructor() {
        super('ElitePaymentCardBackRecognizer');
        
        /** 
         * Should anonymize the card number area (redact image pixels) on the document image result 
         */
        this.anonymizeCardNumber = false;
        
        /** 
         * Should anonymize the CVV area (redact image pixels) on the document image result 
         */
        this.anonymizeCvv = false;
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Should extract the card's inventory number 
         */
        this.extractInventoryNumber = true;
        
        /** 
         * Should extract the payment card's month of expiry 
         */
        this.extractValidThru = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new ElitePaymentCardBackRecognizerResult(nativeResult); }
    }
}