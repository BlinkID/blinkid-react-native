import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for BarcodeRecognizer.
 */
export class BarcodeRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The format of the scanned barcode. 
         */
        this.barcodeFormat = nativeResult.barcodeFormat;
        
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
 * Recognizer that can perform recognition of any supported barcode type.
 */
export class BarcodeRecognizer extends Recognizer {
    constructor() {
        super('BarcodeRecognizer');
        
        /** 
         * Allow enabling the autodetection of image scale when scanning barcodes. 
         */
        this.autoScaleDetection = true;
        
        /** 
         * Enables scanning of barcodes with inverse intensity values (e.g. white barcode on black background) 
         */
        this.inverseScanning = false;
        
        /** 
         * Allow scanning PDF417 barcodes which don't have quiet zone 
         */
        this.nullQuietZoneAllowed = false;
        
        /** 
         * Enable reading code39 barcode contents as extended data. For more information about code39 
         */
        this.readCode39AsExtendedData = false;
        
        /** 
         * Should Aztec 2D barcode be scanned. 
         */
        this.scanAztecCode = false;
        
        /** 
         * Should Code128 barcode be scanned. 
         */
        this.scanCode128 = false;
        
        /** 
         * Should Code39 barcode be scanned. 
         */
        this.scanCode39 = false;
        
        /** 
         * Should DataMatrix 2D barcode be scanned. 
         */
        this.scanDataMatrixCode = false;
        
        /** 
         * Should EAN13 barcode be scanned. 
         */
        this.scanEAN13Code = false;
        
        /** 
         * Should EAN8 barcode be scanned. 
         */
        this.scanEAN8Code = false;
        
        /** 
         * Should ITF barcode be scanned. 
         */
        this.scanITFCode = false;
        
        /** 
         * Should PDF417 2D barcode be scanned. 
         */
        this.scanPDF417 = false;
        
        /** 
         * Should QR code be scanned. 
         */
        this.scanQRCode = false;
        
        /** 
         * Should UPCA barcode be scanned. 
         */
        this.scanUPCACode = false;
        
        /** 
         * Should UPCE barcode be scanned. 
         */
        this.scanUPCECode = false;
        
        /** 
         * Enable slower, but more thorough scanning, thus giving higher possibility of successful scan. 
         */
        this.slowerThoroughScan = true;
        
        /** 
         * Enable decoding of non-standard PDF417 barcodes, but without 
         */
        this.uncertainDecoding = true;
        
        this.createResultFromNative = function (nativeResult) { return new BarcodeRecognizerResult(nativeResult); }
    }
}