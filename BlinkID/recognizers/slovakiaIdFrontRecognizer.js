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
         * The date of birth of Slovak ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Slovak ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Slovak ID 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The identity card number of Slovak ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Slovak ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuer of the Slovak ID. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The last name of the Slovak ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The nationality of the Slovak ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The personal number of the Slovak ID owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         * Sex of the Slovak ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan front side of slovak national ID cards.
 * 
 */
export class SlovakiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if date of birth is being extracted from ID 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * True if date of expiry is being extracted from ID 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * True if date of issue is being extracted from ID 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * True if document number is being extracted from ID 
         */
        this.extractDocumentNumber = true;
        
        /** 
         * True if issuer is being extracted from ID 
         */
        this.extractIssuedBy = true;
        
        /** 
         * True if nationality is being extracted from ID 
         */
        this.extractNationality = true;
        
        /** 
         * True if sex is being extracted from ID 
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
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaIdFrontRecognizerResult(nativeResult); }
    }
}