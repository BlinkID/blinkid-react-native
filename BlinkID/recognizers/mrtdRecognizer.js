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
 * Result object for MrtdRecognizer.
 */
export class MrtdRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Image of the Machine Readable Zone or nil if not available. 
         */
        this.mrzImage = nativeResult.mrzImage;
        
        /** 
         * Returns the Data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
    }
}

/**
 * Recognizer that can recognizer Machine Readable Zone (MRZ) of the Machine Readable Travel Document (MRTD)
 */
export class MrtdRecognizer extends Recognizer {
    constructor() {
        super('MrtdRecognizer');
        
        /** 
         * Whether returning of unparsed results is allowed
         * 
         *  
         */
        this.allowUnparsedResults = false;
        
        /** 
         * Whether returning of unverified results is allowed
         * Unverified result is result that is parsed, but check digits are incorrect.
         * 
         *  
         */
        this.allowUnverifiedResults = false;
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Whether cropped image of the Machine Readable Zone should be available in result.
         * Note - enabling this feature will degrade performance
         * 
         *  
         */
        this.returnMrzImage = false;
        
        /** 
         * Desired DPI for MRZ and full document images (if saving of those is enabled)
         * 
         *  
         */
        this.saveImageDPI = 250;
        
        this.createResultFromNative = function (nativeResult) { return new MrtdRecognizerResult(nativeResult); }
    }
}