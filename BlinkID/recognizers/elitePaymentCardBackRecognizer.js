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
         * The card Number of the back side of the Elite Payment Card owner. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * The cvv of the back side of the Elite Payment Card owner. 
         */
        this.cvv = nativeResult.cvv;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The inventory Number of the back side of the Elite Payment Card owner. 
         */
        this.inventoryNumber = nativeResult.inventoryNumber;
        
        /** 
         * The valid Thru of the back side of the Elite Payment Card owner. 
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
         * 
         *  
         */
        this.anonymizeCardNumber = false;
        
        /** 
         * Should anonymize the CVV area (redact image pixels) on the document image result
         * 
         *  
         */
        this.anonymizeCvv = false;
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Should extract the card's inventory number
         * 
         *  
         */
        this.extractInventoryNumber = true;
        
        /** 
         * Should extract the payment card's month of expiry
         * 
         *  
         */
        this.extractValidThru = true;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         *  
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new ElitePaymentCardBackRecognizerResult(nativeResult); }
    }
}