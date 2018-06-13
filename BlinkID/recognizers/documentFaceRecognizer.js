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
 * Result object for DocumentFaceRecognizer.
 */
export class DocumentFaceRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the location of document detection in coordinate system of full input frame. 
         */
        this.documentLocation = nativeResult.documentLocation != null ? new Quadrilateral(nativeResult.documentLocation) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the location of face detection in coordinate system of cropped full document image. 
         */
        this.faceLocation = nativeResult.faceLocation != null ? new Quadrilateral(nativeResult.faceLocation) : null;
        
        /** 
         *  image of the full document 
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
         * currently used detector type. 
         */
        this.detectorType = DocumentFaceDetectorType.TD1;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new DocumentFaceRecognizerResult(nativeResult); }
    }
}