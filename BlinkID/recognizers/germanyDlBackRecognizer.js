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
 * Result object for GermanyDlBackRecognizer.
 */
export class GermanyDlBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of issue for B category of German DL card. 
         */
        this.dateOfIssueB10 = nativeResult.dateOfIssueB10 != null ? new Date(nativeResult.dateOfIssueB10) : null;
        
        /** 
         * The date of issue for B category of German DL card is not specified. 
         */
        this.dateOfIssueB10NotSpecified = nativeResult.dateOfIssueB10NotSpecified;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Recognizer which can scan back side of German DL cards.
 */
export class GermanyDlBackRecognizer extends Recognizer {
    constructor() {
        super('GermanyDlBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyDlBackRecognizerResult(nativeResult); }
    }
}