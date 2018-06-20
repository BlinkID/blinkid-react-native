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
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The id Number of the front side of United Arab Emirates ID owner. 
         */
        this.idNumber = nativeResult.idNumber;
        
        /** 
         * The name of the front side of United Arab Emirates ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of the front side of United Arab Emirates ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
    }
}

/**
 * Class for configuring United Arab Emirates ID Front Recognizer.
 * 
 * United Arab Emirates ID Front recognizer is used for scanning front side of United Arab Emirates ID.
 */
export class UnitedArabEmiratesIdFrontRecognizer extends Recognizer {
    constructor() {
        super('UnitedArabEmiratesIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's name should be extracted from front side of United Arab Emirates ID
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if owner's nationality should be extracted from front side of United Arab Emirates ID
         * 
         *  
         */
        this.extractNationality = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new UnitedArabEmiratesIdFrontRecognizerResult(nativeResult); }
    }
}