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
 * Result object for BarcodeRecognizer.
 */
export class BarcodeRecognizerResult extends RecognizerResult {
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
         * The license key for unlocking improved aztec scanning feature, provided by Manatee. 
         */
        this.manateeLicenseKey = '';
        
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
        this.scanDataMatrix = false;
        
        /** 
         * Should EAN13 barcode be scanned. 
         */
        this.scanEan13 = false;
        
        /** 
         * Should EAN8 barcode be scanned. 
         */
        this.scanEan8 = false;
        
        /** 
         * Enables scanning of barcodes with inverse intensity values (e.g. white barcode on black background) 
         */
        this.scanInverse = false;
        
        /** 
         * Should ITF barcode be scanned. 
         */
        this.scanItf = false;
        
        /** 
         * Should PDF417 2D barcode be scanned. 
         */
        this.scanPdf417 = false;
        
        /** 
         * Should QR code be scanned. 
         */
        this.scanQrCode = false;
        
        /** 
         * Enable decoding of non-standard PDF417 barcodes, but without 
         */
        this.scanUncertain = true;
        
        /** 
         * Should UPCA barcode be scanned. 
         */
        this.scanUpca = false;
        
        /** 
         * Should UPCE barcode be scanned. 
         */
        this.scanUpce = false;
        
        /** 
         * Enable slower, but more thorough scanning, thus giving higher possibility of successful scan. 
         */
        this.slowerThoroughScan = true;
        
        this.createResultFromNative = function (nativeResult) { return new BarcodeRecognizerResult(nativeResult); }
    }
}