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
         * full document image if enabled with returnFullDocumentImage property. 
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
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Brunei temporary residence permit owner's employer should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of issue of Brunei temporary residence permit should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if the passport number of Brunei temporary residence permit owner should be extracted.
         * 
         *  
         */
        this.extractPassportNumber = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiTemporaryResidencePermitBackRecognizerResult(nativeResult); }
    }
}