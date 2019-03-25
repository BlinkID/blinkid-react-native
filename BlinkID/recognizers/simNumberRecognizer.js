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
 * Result object for SimNumberRecognizer.
 */
export class SimNumberRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Returns the recognized SIM number from barcode or empty string if recognition failed. 
         */
        this.simNumber = nativeResult.simNumber;
        
    }
}

/**
 * Recognizer that can perform recognition of barcodes on SIM packaging.
 */
export class SimNumberRecognizer extends Recognizer {
    constructor() {
        super('SimNumberRecognizer');
        
        this.createResultFromNative = function (nativeResult) { return new SimNumberRecognizerResult(nativeResult); }
    }
}