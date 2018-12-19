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
         * The date of birth of Slovenian ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Slovenian ID owner 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Slovenian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The last name of the Slovenian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * Nationality of the Slovenian ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * Sex of the Slovenian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan the front side of Slovenian national ID cards.
 * 
 */
export class SloveniaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SloveniaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if date of birth of Slovenian ID owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * True if date of expiry is being extracted from Slovenian ID 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * True if nationality of Slovenian ID owner is being extracted 
         */
        this.extractNationality = true;
        
        /** 
         * True if sex of Slovenian ID owner is being extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SloveniaIdFrontRecognizerResult(nativeResult); }
    }
}