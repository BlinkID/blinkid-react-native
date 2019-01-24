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
 * Result object for BruneiIdBackRecognizer.
 */
export class BruneiIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Brunei ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of issue of Brunei ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The race of Brunei ID owner. 
         */
        this.race = nativeResult.race;
        
    }
}

/**
 * Recognizer which can scan back side of Brunei national ID cards.
 */
export class BruneiIdBackRecognizer extends Recognizer {
    constructor() {
        super('BruneiIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Brunei ID owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of issue of Brunei ID should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if the race of Brunei ID owner should be extracted. 
         */
        this.extractRace = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiIdBackRecognizerResult(nativeResult); }
    }
}