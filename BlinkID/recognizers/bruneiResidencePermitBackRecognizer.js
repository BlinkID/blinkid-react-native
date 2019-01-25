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
 * Result object for BruneiResidencePermitBackRecognizer.
 */
export class BruneiResidencePermitBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Brunei Residence Permit card owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of issue of Brunei Residence Permit card. 
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
         * The race of Brunei Residence Permit card owner. 
         */
        this.race = nativeResult.race;
        
    }
}

/**
 * Recognizer which can scan back side of Brunei national Residence Permit cards.
 */
export class BruneiResidencePermitBackRecognizer extends Recognizer {
    constructor() {
        super('BruneiResidencePermitBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Brunei Residence Permit card owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of issue of Brunei Residence Permit card should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if the race of Brunei Residence Permit card owner should be extracted.
         * 
         *  
         */
        this.extractRace = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiResidencePermitBackRecognizerResult(nativeResult); }
    }
}