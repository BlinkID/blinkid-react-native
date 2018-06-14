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
 * Result object for SlovakiaIdFrontRecognizer.
 */
export class SlovakiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the date of birth of Slovak ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * the date of expiry of Slovak ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * the date of issue of Slovak ID 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * the identity card number of Slovak ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Slovak ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the issuer of the Slovak ID. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * the last name of the Slovak ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * the nationality of the Slovak ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * the personal number of the Slovak ID owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         * sex of the Slovak ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan front side of slovak national ID cards.

 */
export class SlovakiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if date of birth is being extracted from ID 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if date of expiry is being extracted from ID 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * true if date of issue is being extracted from ID 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * true if document number is being extracted from ID 
         */
        this.extractDocumentNumber = true;
        
        /** 
         * true if issuer is being extracted from ID 
         */
        this.extractIssuedBy = true;
        
        /** 
         * true if nationality is being extracted from ID 
         */
        this.extractNationality = true;
        
        /** 
         * true if sex is being extracted from ID 
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
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaIdFrontRecognizerResult(nativeResult); }
    }
}