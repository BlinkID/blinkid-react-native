import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for MRTDRecognizer.
 */
export class MRTDRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
    
        /** 
         * The Data extracted from the machine readable zone. 
         */
        this.MRZResult = nativeResult.MRZResult;
    
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
    
        /** 
         *  MRZ image from the document 
         */
        this.mrzImage = nativeResult.mrzImage;
    }
}

/**
 * Recognizer that can recognizer Machine Readable Zone (MRZ) of the Machine Readable Travel Document (MRTD)
 */
export class MRTDRecognizer extends Recognizer {
    constructor() {
        super('MRTDRecognizer');
    
        /** 
         * Whether returning of unparsed results is allowed 
         */
        this.allowUnparsedResults = false;
    
        /** 
         * Whether returning of unverified results is allowed 
         */
        this.allowUnverifiedResults = false;
    
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
    
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
    
        /** 
         * Defines whether MRZ image will be available in result. 
         */
        this.returnMRZImage = false;
    
        /** 
         * Desired DPI for MRZ and full document images (if saving of those is enabled) 
         */
        this.saveImageDPI = 250;
    
        this.createResultFromNative = function (nativeResult) { return new MRTDRecognizerResult(nativeResult); }
    }
}