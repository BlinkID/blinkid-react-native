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
         * Type of the barcode scanned
         * 
         *  @return Type of the barcode 
         */
        this.barcodeType = nativeResult.barcodeType;
        
        /** 
         * Byte array with result of the scan 
         */
        this.rawData = nativeResult.rawData;
        
        /** 
         * Retrieves string content of scanned data 
         */
        this.stringData = nativeResult.stringData;
        
        /** 
         * Flag indicating uncertain scanning data
         * E.g obtained from damaged barcode. 
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
         * Set this to true to scan barcodes which don't have quiet zone (white area) around it
         * 
         * Use only if necessary because it slows down the recognition process
         * 
         *  
         */
        this.nullQuietZoneAllowed = false;
        
        /** 
         * Set this to true to allow scanning barcodes with inverted intensities
         * (i.e. white barcodes on black background)
         * 
         * falseTE: this options doubles the frame processing time
         * 
         *  
         */
        this.scanInverse = false;
        
        /** 
         * Set this to true to scan even barcode not compliant with standards
         * For example, malformed PDF417 barcodes which were incorrectly encoded
         * 
         * Use only if necessary because it slows down the recognition process
         * 
         *  
         */
        this.scanUncertain = true;
        
        this.createResultFromNative = function (nativeResult) { return new Pdf417RecognizerResult(nativeResult); }
    }
}