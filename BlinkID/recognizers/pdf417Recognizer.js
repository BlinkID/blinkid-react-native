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
 * Result object for Pdf417Recognizer.
 */
export class Pdf417RecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The format of the scanned barcode. 
         */
        this.barcodeType = nativeResult.barcodeType;
        
        /** 
         * The raw bytes contained inside barcode. 
         */
        this.rawData = nativeResult.rawData;
        
        /** 
         * String representation of data inside barcode. 
         */
        this.stringData = nativeResult.stringData;
        
        /** 
         * True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e. 
         */
        this.uncertain = nativeResult.uncertain;
        
    }
}

/**
 * A recognizer that can scan PDF417 2D barcodes.
 */
export class Pdf417Recognizer extends Recognizer {
    constructor() {
        super('Pdf417Recognizer');
        
        /** 
         * Allow scanning PDF417 barcodes which don't have quiet zone 
         */
        this.nullQuietZoneAllowed = false;
        
        /** 
         * Enables scanning of barcodes with inverse intensity values (e.g. white barcode on black background) 
         */
        this.scanInverse = false;
        
        /** 
         * Enable decoding of non-standard PDF417 barcodes, but without 
         */
        this.scanUncertain = true;
        
        this.createResultFromNative = function (nativeResult) { return new Pdf417RecognizerResult(nativeResult); }
    }
}