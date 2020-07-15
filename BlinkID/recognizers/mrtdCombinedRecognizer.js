import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult,
    DocumentFaceDetectorType,
    ImageExtensionFactors,
    DataMatchResult,
    Country,
    Region,
    Type,
    DocumentImageColorStatus,
    DocumentImageMoireStatus,
    AnonymizationMode,
    
    
} from '../types'

/**
 * Result object for MrtdCombinedRecognizer.
 */
export class MrtdCombinedRecognizerResult extends RecognizerResult {
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
         * Defines result of the data matching algorithm for scanned parts/sides of the document. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * Front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
    }
}

/**
 * Recognizer for combined reading of face from front side of documents  and MRZ from back side of
 *  * Machine Readable Travel Document.
 */
export class MrtdCombinedRecognizer extends Recognizer {
    constructor() {
        super('MrtdCombinedRecognizer');
        
        /** 
         * Whether special characters are allowed. 
         */
        this.allowSpecialCharacters = false;
        
        /** 
         * Whether returning of unparsed results is allowed. 
         */
        this.allowUnparsedResults = false;
        
        /** 
         * Whether returning of unverified results is allowed. 
         */
        this.allowUnverifiedResults = false;
        
        /** 
         * Currently used detector type. 
         */
        this.detectorType = DocumentFaceDetectorType.TD1;
        
        /** 
         * The DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Minimum number of stable detections required for detection to be successful. 
         */
        this.numStableDetectionsThreshold = 6;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new MrtdCombinedRecognizerResult(nativeResult); }
    }
}