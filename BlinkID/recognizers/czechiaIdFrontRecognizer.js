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
 * Result object for CzechiaIdFrontRecognizer.
 */
export class CzechiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the date of birth of Czech ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * the date of expiry of Czech ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * the date of issue of Czech ID 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Czech ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the identity card number of Czech ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * the last name of the Czech ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * the place of birth of Czech ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * sex of the Czech ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan front side of czech national ID cards.

 */
export class CzechiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('CzechiaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * {true} if the date of birth is being extracted, {false} otherwise. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * {true} if the date of expiry is being extracted, {false} otherwise. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * {true} if the date of issue is being extracted, {false} otherwise. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * {true} if the given names is being extracted, {false} otherwise. 
         */
        this.extractGivenNames = true;
        
        /** 
         * {true} if the place of birth is being extracted, {false} otherwise. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * {true} if the sex is being extracted, {false} otherwise. 
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new CzechiaIdFrontRecognizerResult(nativeResult); }
    }
}