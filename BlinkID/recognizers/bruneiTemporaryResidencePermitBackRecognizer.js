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
 * Result object for BruneiTemporaryResidencePermitBackRecognizer.
 */
export class BruneiTemporaryResidencePermitBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Brunei temporary residence permit owner's employer. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of issue of Brunei temporary residence permit. 
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
         * The passport number of Brunei temporary residence permit owner. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
    }
}

/**
 * Recognizer which can scan back side of Brunei temporary residence permit cards.
 */
export class BruneiTemporaryResidencePermitBackRecognizer extends Recognizer {
    constructor() {
        super('BruneiTemporaryResidencePermitBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Brunei temporary residence permit owner's employer should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of issue of Brunei temporary residence permit should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if the passport number of Brunei temporary residence permit owner should be extracted. 
         */
        this.extractPassportNumber = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiTemporaryResidencePermitBackRecognizerResult(nativeResult); }
    }
}