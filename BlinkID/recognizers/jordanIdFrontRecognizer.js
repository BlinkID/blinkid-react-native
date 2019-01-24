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
         * Date of birth of Jordan ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Name of Jordan ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The national number of Jordan ID card owner. 
         */
        this.nationalNumber = nativeResult.nationalNumber;
        
        /** 
         * Sex of Jordan ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 *  Recognizer for reading front side of Jordan ID.
 * 
 */
export class JordanIdFrontRecognizer extends Recognizer {
    constructor() {
        super('JordanIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if date of birth of Jordan owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * True if name of Jordan ID owner is being extracted 
         */
        this.extractName = true;
        
        /** 
         * True if sex of Jordan owner is being extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new JordanIdFrontRecognizerResult(nativeResult); }
    }
}