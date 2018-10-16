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
 * Result object for PaymentCardCombinedRecognizer.
 */
export class PaymentCardCombinedRecognizerResult extends RecognizerResult {
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
         * Defines digital signature of recognition results. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Defines digital signature version. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Defines {true} if data from scanned parts/sides of the document match, 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * Back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * Front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * Payment card's inventory number. 
         */
        this.inventoryNumber = nativeResult.inventoryNumber;
        
        /** 
         * Information about the payment card owner (name, company, etc.) 
         */
        this.owner = nativeResult.owner;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The payment card's last month of validity. 
         */
        this.validThru = nativeResult.validThru != null ? new Date(nativeResult.validThru) : null;
        
    }
}

/**
 * Recognizer used for scanning both sides of payment cards.
 */
export class PaymentCardCombinedRecognizer extends Recognizer {
    constructor() {
        super('PaymentCardCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Should extract the card's inventory number 
         */
        this.extractInventoryNumber = true;
        
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
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new PaymentCardCombinedRecognizerResult(nativeResult); }
    }
}