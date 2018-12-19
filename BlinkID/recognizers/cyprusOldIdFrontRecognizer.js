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
 * Result object for CyprusOldIdFrontRecognizer.
 */
export class CyprusOldIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The document number of old Cyprus ID card. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The ID number of the old Cyprus ID card. 
         */
        this.idNumber = nativeResult.idNumber;
        
        /** 
         * The name of old Cyprus ID card owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The surname of old Cyprus ID card owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of old Cyprus national ID cards.
 */
export class CyprusOldIdFrontRecognizer extends Recognizer {
    constructor() {
        super('CyprusOldIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if document number of old Cyprus ID card should be extracted. 
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if name of old Cyprus ID card owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if surname of old Cyprus ID card owner should be extracted. 
         */
        this.extractSurname = true;
        
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
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new CyprusOldIdFrontRecognizerResult(nativeResult); }
    }
}