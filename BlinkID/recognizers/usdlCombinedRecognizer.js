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
 * Result object for UsdlCombinedRecognizer.
 */
export class UsdlCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Defines digital signature of recognition results. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Defines digital signature version. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Defines {true} if data from scanned parts/sides of the document match, 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
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
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e. 
         */
        this.uncertain = nativeResult.uncertain;
        
    }
}

/**
 * Recognizer for combined reading of face from front side of documents and USDL barcode from back side of
 * US driver's license.
 */
export class UsdlCombinedRecognizer extends Recognizer {
    constructor() {
        super('UsdlCombinedRecognizer');
        
        /** 
         * the DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new UsdlCombinedRecognizerResult(nativeResult); }
    }
}