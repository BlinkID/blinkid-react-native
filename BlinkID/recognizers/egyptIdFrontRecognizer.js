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
 * Result object for EgyptIdFrontRecognizer.
 */
export class EgyptIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the Egypt ID document number. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the Egypt ID card owner national number. 
         */
        this.nationalNumber = nativeResult.nationalNumber;
        
    }
}

/**
 *  Recognizer for reading Egypt ID Front document.
 * 
 */
export class EgyptIdFrontRecognizer extends Recognizer {
    constructor() {
        super('EgyptIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if national number of Egypt ID Front owner is being extracted 
         */
        this.extractNationalNumber = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new EgyptIdFrontRecognizerResult(nativeResult); }
    }
}