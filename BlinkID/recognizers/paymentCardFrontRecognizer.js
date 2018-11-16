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
 * Result object for PaymentCardFrontRecognizer.
 */
export class PaymentCardFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The payment card number. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Information about the payment card owner (name, company, etc.). 
         */
        this.owner = nativeResult.owner;
        
        /** 
         * The payment card's last month of validity. 
         */
        this.validThru = nativeResult.validThru != null ? new Date(nativeResult.validThru) : null;
        
    }
}

/**
 * Recognizer used for scanning the front side of credit/debit cards.
 */
export class PaymentCardFrontRecognizer extends Recognizer {
    constructor() {
        super('PaymentCardFrontRecognizer');
        
        /** 
         * Should anonymize the card number area (redact image pixels) on the document image result 
         */
        this.anonymizeCardNumber = false;
        
        /** 
         * Should anonymize the owner area (redact image pixels) on the document image result 
         */
        this.anonymizeOwner = false;
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Should extract the card owner information 
         */
        this.extractOwner = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new PaymentCardFrontRecognizerResult(nativeResult); }
    }
}