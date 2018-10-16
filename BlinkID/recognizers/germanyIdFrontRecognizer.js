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
 * Result object for GermanyIdFrontRecognizer.
 */
export class GermanyIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The CAN number of German ID. 
         */
        this.canNumber = nativeResult.canNumber;
        
        /** 
         * The date of birth of German ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of German ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document number of German ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the German ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The last name of the German ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * Nationality of the German ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of birth of German ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan the front side of German national ID cards.
 * 
 */
export class GermanyIdFrontRecognizer extends Recognizer {
    constructor() {
        super('GermanyIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * {true} if the can number is being extracted, {false} otherwise. 
         */
        this.extractCanNumber = true;
        
        /** 
         * {true} if the date of expiry is being extracted, {false} otherwise. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * {true} if the document number is being extracted, {false} otherwise. 
         */
        this.extractDocumentNumber = true;
        
        /** 
         * {true} if the given names is being extracted, {false} otherwise. 
         */
        this.extractGivenNames = true;
        
        /** 
         * {true} if the nationality is being extracted, {false} otherwise. 
         */
        this.extractNationality = true;
        
        /** 
         * {true} if the place of birth is being extracted, {false} otherwise. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * {true} if the surname is being extracted, {false} otherwise. 
         */
        this.extractSurname = true;
        
        /** 
         * Defines the extension factors for full document image. 
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
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new GermanyIdFrontRecognizerResult(nativeResult); }
    }
}