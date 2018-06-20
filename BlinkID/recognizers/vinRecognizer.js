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
 * Result object for VinRecognizer.
 */
export class VinRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Returns the recognized VIN or empty string if recognition failed. 
         */
        this.vin = nativeResult.vin;
        
    }
}

/**
 * Recognizer that can perform recognition of VINs (Vehicle Identification Number).
 */
export class VinRecognizer extends Recognizer {
    constructor() {
        super('VinRecognizer');
        
        this.createResultFromNative = function (nativeResult) { return new VinRecognizerResult(nativeResult); }
    }
}