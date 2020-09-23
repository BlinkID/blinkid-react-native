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
    
    
    RecognitionModeFilter,
} from '../types'

/**
 * Result object for DocumentFaceRecognizer.
 */
export class DocumentFaceRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The location of document detection in coordinate system of full input frame. 
         */
        this.documentLocation = nativeResult.documentLocation != null ? new Quadrilateral(nativeResult.documentLocation) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The location of face detection in coordinate system of cropped full document image. 
         */
        this.faceLocation = nativeResult.faceLocation != null ? new Quadrilateral(nativeResult.faceLocation) : null;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Recognizer for detecting holder's photo on documents containing image.
 */
export class DocumentFaceRecognizer extends Recognizer {
    constructor() {
        super('DocumentFaceRecognizer');
        
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
        
        this.createResultFromNative = function (nativeResult) { return new DocumentFaceRecognizerResult(nativeResult); }
    }
}