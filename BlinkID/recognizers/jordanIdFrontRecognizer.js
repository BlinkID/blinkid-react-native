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
         * date of birth of Jordan ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * name of Jordan ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * the national number of Jordan ID card owner. 
         */
        this.natianalNumber = nativeResult.natianalNumber;
        
        /** 
         * sex of Jordan ID owner. 
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
         * true if date of birth of Jordan owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if name of Jordan ID owner is being extracted 
         */
        this.extractName = true;
        
        /** 
         * true if sex of Jordan owner is being extracted 
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
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new JordanIdFrontRecognizerResult(nativeResult); }
    }
}