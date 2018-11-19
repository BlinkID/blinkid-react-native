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
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The owner of the front side of the Elite Payment Card owner. 
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
         * Should anonymize the owner area (redact image pixels) on the document image result
         * 
         *  
         */
        this.anonymizeOwner = false;
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Should extract the card owner information
         * 
         *  
         */
        this.extractOwner = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new ElitePaymentCardFrontRecognizerResult(nativeResult); }
    }
}