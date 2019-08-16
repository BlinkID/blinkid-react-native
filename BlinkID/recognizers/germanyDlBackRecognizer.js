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
         * Image of the full document 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyDlBackRecognizerResult(nativeResult); }
    }
}