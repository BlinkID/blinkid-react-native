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
 * Result object for GermanyIdFrontRecognizer.
 */
export class GermanyIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the date of birth of German ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         * the date of expiry of German ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the German ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the identity card number of German ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * the last name of the German ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * nationality of the German ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * the place of birth of German ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan the front side of German national ID cards.

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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyIdFrontRecognizerResult(nativeResult); }
    }
}