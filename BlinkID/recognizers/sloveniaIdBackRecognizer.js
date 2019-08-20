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
 * Result object for SloveniaIdBackRecognizer.
 */
export class SloveniaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Slovenian ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The issuing administrative unit of Slovenian ID. 
         */
        this.administrativeUnit = nativeResult.administrativeUnit;
        
        /** 
         * The date of issue of Slovenian ID. 
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
        
    }
}

/**
 * Recognizer which can scan back side of Slovenia ID.
 */
export class SloveniaIdBackRecognizer extends Recognizer {
    constructor() {
        super('SloveniaIdBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Slovenian ID owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if issuing administrative unit of Slovenian ID should be extracted.
         * 
         *  
         */
        this.extractAdministrativeUnit = true;
        
        /** 
         * Defines if date of issue of Slovenian ID should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SloveniaIdBackRecognizerResult(nativeResult); }
    }
}