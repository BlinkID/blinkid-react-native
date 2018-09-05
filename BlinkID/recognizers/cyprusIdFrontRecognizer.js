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
         * The document Number of the front side of the Cyprus Id owner. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The id Number of the front side of the Cyprus Id owner. 
         */
        this.idNumber = nativeResult.idNumber;
        
        /** 
         * The name of the front side of the Cyprus Id owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The surname of the front side of the Cyprus Id owner. 
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
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if document number of Cyprus ID card should be extracted.
         * 
         *  
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if name of Cyprus ID card owner should be extracted.
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if surname of Cyprus ID card owner should be extracted.
         * 
         *  
         */
        this.extractSurname = true;
        
        /** 
         * Property for setting DPI for face images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.faceImageDpi = 250;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Sets whether face image from ID card should be extracted
         * 
         *  
         */
        this.returnFaceImage = false;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new CyprusIdFrontRecognizerResult(nativeResult); }
    }
}