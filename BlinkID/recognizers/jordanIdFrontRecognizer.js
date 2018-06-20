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
 * Result object for JordanIdFrontRecognizer.
 */
export class JordanIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The Date Of Birth of the Jordan ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The Name of the Jordan ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The National Number of the Jordan ID. 
         */
        this.nationalNumber = nativeResult.nationalNumber;
        
        /** 
         * The Sex of the Jordan ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Class for configuring Jordan ID Front Recognizer.
 * 
 * Jordan ID Front recognizer is used for scanning front side of Jordan ID.
 */
export class JordanIdFrontRecognizer extends Recognizer {
    constructor() {
        super('JordanIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from Jordan ID
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if owner's name should be extracted from Jordan ID
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if owner's sex should be extracted from Jordan ID
         * 
         *  
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new JordanIdFrontRecognizerResult(nativeResult); }
    }
}