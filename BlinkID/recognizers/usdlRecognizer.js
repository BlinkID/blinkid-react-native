import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for UsdlRecognizer.
 */
export class UsdlRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Array of elements that are not part of AAMVA standard and are specific to each US state. 
         */
        this.optionalElements = nativeResult.optionalElements;
        
        /** 
         * The raw bytes contained inside 2D barcode. 
         */
        this.rawData = nativeResult.rawData;
        
        /** 
         * Raw string inside 2D barcode. 
         */
        this.rawStringData = nativeResult.rawStringData;
        
        /** 
         * True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e. 
         */
        this.uncertain = nativeResult.uncertain;
        
    }
}

/**
 * Recognizer that scan 2D barcodes from United States Driver License.
 */
export class UsdlRecognizer extends Recognizer {
    constructor() {
        super('UsdlRecognizer');
        
        /** 
         * Allow scanning PDF417 barcodes which don't have quiet zone 
         */
        this.nullQuietZoneAllowed = true;
        
        /** 
         * Enable decoding of non-standard PDF417 barcodes, but without 
         */
        this.uncertainDecoding = true;
        
        this.createResultFromNative = function (nativeResult) { return new UsdlRecognizerResult(nativeResult); }
    }
}