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
 * Result object for UnitedArabEmiratesIdFrontRecognizer.
 */
export class UnitedArabEmiratesIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The idNumber of the United Arab Emirates ID owner. 
         */
        this.idNumber = nativeResult.idNumber;
        
        /** 
         * The name of the United Arab Emirates ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of the United Arab Emirates ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
    }
}

/**
 * Recognizer which can scan front side of United Arab Emirates national ID cards.
 */
export class UnitedArabEmiratesIdFrontRecognizer extends Recognizer {
    constructor() {
        super('UnitedArabEmiratesIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if name of United Arab Emirates ID owner should be extracted 
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of United Arab Emirates ID owner should be extracted 
         */
        this.extractNationality = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new UnitedArabEmiratesIdFrontRecognizerResult(nativeResult); }
    }
}