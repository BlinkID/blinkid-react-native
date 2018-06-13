import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult, 
    EudlCountry, 
    DocumentFaceDetectorType,
} from '../types'

/**
 * Result object for HongKongIdFrontRecognizer.
 */
export class HongKongIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * ID date of issue it is successfully converted to {Date} from date format: <code>DDMMYYYY</code>. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue;
        
        /** 
         * the Hong Kong document number. 
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
         * owner's date of birth if it is successfully converted to {Date} from date format: <code>DDMMYYYY</code>. 
         */
        this.ownerBirthDate = nativeResult.ownerBirthDate;
        
        /** 
         * owner commercial code if written on ID 
         */
        this.ownerCommercialCode = nativeResult.ownerCommercialCode;
        
        /** 
         * owner full name. 
         */
        this.ownerFullName = nativeResult.ownerFullName;
        
        /** 
         * owner sex (M for male, F for female). 
         */
        this.ownerSex = nativeResult.ownerSex;
        
    }
}

/**
 *  Recognizer for reading Hong Kong ID front document.

 */
export class HongKongIdFrontRecognizer extends Recognizer {
    constructor() {
        super('HongKongIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if commercial code of Hong Kong ID owner is being extracted 
         */
        this.extractCommercialCode = true;
        
        /** 
         * true if date of birth of Hong Kong ID owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if date of issue of Hong Kong ID owner is being extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * true if full name of Hong Kong ID owner is being extracted 
         */
        this.extractFullName = true;
        
        /** 
         * true if sex of Hong Kong ID owner is being extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new HongKongIdFrontRecognizerResult(nativeResult); }
    }
}