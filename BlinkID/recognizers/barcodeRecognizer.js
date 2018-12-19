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
 * BarcodeRecognizer is used for scanning most of 1D barcode formats, and 2D format
 * such as Aztec, DataMatrix and QR code
 */
export class BarcodeRecognizer extends Recognizer {
    constructor() {
        super('BarcodeRecognizer');
        
        /** 
         * Allow enabling the autodetection of image scale when scanning barcodes.
         * If set to true, prior reading barcode, image scale will be
         * corrected. This enabled correct reading of barcodes on high
         * resolution images but slows down the recognition process.
         * 
         * falseTE: This setting is applied only for Code39 and Code128 barcode scanning.
         * 
         *  
         */
        this.autoScaleDetection = true;
        
        /** 
         * Set this to true to scan barcodes which don't have quiet zone (white area) around it
         * 
         * Use only if necessary because it slows down the recognition process
         * 
         *  
         */
        this.nullQuietZoneAllowed = false;
        
        /** 
         * Enable reading code39 barcode contents as extended data. For more information about code39
         * extended data (a.k.a. full ASCII mode), see https://en.wikipedia.org/wiki/Code_39#Full_ASCII_Code_39
         * 
         *  
         */
        this.readCode39AsExtendedData = false;
        
        /** 
         * Set this to true to scan Aztec 2D barcodes
         * 
         *  
         */
        this.scanAztecCode = false;
        
        /** 
         * Set this to true to scan Code 128 1D barcodes
         * 
         *  
         */
        this.scanCode128 = false;
        
        /** 
         * Set this to true to scan Code 39 1D barcodes
         * 
         *  
         */
        this.scanCode39 = false;
        
        /** 
         * Set this to true to scan DataMatrix 2D barcodes
         * 
         *  
         */
        this.scanDataMatrix = false;
        
        /** 
         * Set this to true to scan EAN 13 barcodes
         * 
         *  
         */
        this.scanEan13 = false;
        
        /** 
         * Set this to true to scan EAN8 barcodes
         * 
         *  
         */
        this.scanEan8 = false;
        
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
         * Set this to true to scan ITF barcodes
         * 
         *  
         */
        this.scanItf = false;
        
        /** 
         * Set this to true to scan Pdf417 barcodes
         * 
         *  
         */
        this.scanPdf417 = false;
        
        /** 
         * Set this to true to scan QR barcodes
         * 
         *  
         */
        this.scanQrCode = false;
        
        /** 
         * Set this to true to scan even barcode not compliant with standards
         * For example, malformed PDF417 barcodes which were incorrectly encoded
         * 
         * Use only if necessary because it slows down the recognition process
         * 
         *  
         */
        this.scanUncertain = true;
        
        /** 
         * Set this to true to scan UPCA barcodes
         * 
         *  
         */
        this.scanUpca = false;
        
        /** 
         * Set this to true to scan UPCE barcodes
         * 
         *  
         */
        this.scanUpce = false;
        
        /** 
         * Set this to true to allow slower, but better image processing.
         * 
         *  
         */
        this.slowerThoroughScan = true;
        
        this.createResultFromNative = function (nativeResult) { return new BarcodeRecognizerResult(nativeResult); }
    }
}