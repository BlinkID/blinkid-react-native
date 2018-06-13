import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
} from '../types'

/**
 * Result object for VinRecognizer.
 */
export class VinRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * scanned VIN (Vehicle Identification Number). 
         */
        this.vin = nativeResult.vin;
        
    }
}

/**
 * Recognizer that can scan VIN (Vehicle Identification Number) barcode.
 */
export class VinRecognizer extends Recognizer {
    constructor() {
        super('VinRecognizer');
        
        this.createResultFromNative = function (nativeResult) { return new VinRecognizerResult(nativeResult); }
    }
}