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
 * Result object for CyprusIdFrontRecognizer.
 */
export class CyprusIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The document number of Cyprus ID card. 
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
         * The ID number of the Cyprus ID card. 
         */
        this.idNumber = nativeResult.idNumber;
        
        /** 
         * The name of Cyprus ID card owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The surname of Cyprus ID card owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of Cyprus national ID cards.
 */
export class CyprusIdFrontRecognizer extends Recognizer {
    constructor() {
        super('CyprusIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if document number of Cyprus ID card should be extracted. 
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if name of Cyprus ID card owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if surname of Cyprus ID card owner should be extracted. 
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new CyprusIdFrontRecognizerResult(nativeResult); }
    }
}