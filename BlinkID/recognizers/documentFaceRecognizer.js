import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for DocumentFaceRecognizer.
 */
export class DocumentFaceRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
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
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * currently used detector type. 
         */
        this.detectorType = DocumentFaceDetectorType.TD1;
        
        this.createResultFromNative = function (nativeResult) { return new DocumentFaceRecognizerResult(nativeResult); }
    }
}