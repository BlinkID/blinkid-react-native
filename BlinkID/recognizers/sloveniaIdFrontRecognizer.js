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
 * Result object for SloveniaIdFrontRecognizer.
 */
export class SloveniaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the date of birth of Slovenian ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         * the date of expiry of Slovenian ID owner 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Slovenian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the last name of the Slovenian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * nationality of the Slovenian ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * sex of the Slovenian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan the front side of Slovenian national ID cards.

 */
export class SloveniaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SloveniaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if date of birth of Slovenian ID owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if date of expiry is being extracted from Slovenian ID 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * true if nationality of Slovenian ID owner is being extracted 
         */
        this.extractNationality = true;
        
        /** 
         * true if sex of Slovenian ID owner is being extracted 
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
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SloveniaIdFrontRecognizerResult(nativeResult); }
    }
}