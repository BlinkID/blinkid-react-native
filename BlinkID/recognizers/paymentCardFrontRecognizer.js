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
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Information about the payment card owner (name, company, etc.) 
         */
        this.owner = nativeResult.owner;
        
        /** 
         * The payment card's last month of validity. 
         */
        this.validThru = nativeResult.validThru != null ? new Date(nativeResult.validThru) : null;
        
    }
}

/**
 * Recognizer used for scanning the front side of credit/debit cards
 */
export class PaymentCardFrontRecognizer extends Recognizer {
    constructor() {
        super('PaymentCardFrontRecognizer');
        
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
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new PaymentCardFrontRecognizerResult(nativeResult); }
    }
}