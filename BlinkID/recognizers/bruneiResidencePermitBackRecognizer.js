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
         * Image of the full document 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Brunei Residence Permit card owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of issue of Brunei Residence Permit card should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if the race of Brunei Residence Permit card owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiResidencePermitBackRecognizerResult(nativeResult); }
    }
}