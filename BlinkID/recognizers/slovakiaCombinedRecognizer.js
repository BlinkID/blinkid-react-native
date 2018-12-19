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
 * Result object for SlovakiaCombinedRecognizer.
 */
export class SlovakiaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Slovak ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Slovak ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document date of expiry of the Slovak ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document date of issue of the Slovak ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Defines digital signature of recognition results. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Defines digital signature version. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Defines {true} if data from scanned parts/sides of the document match, 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
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
         * Back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * Front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The issuing authority of Slovak ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the Slovak ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * True if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * Nationality of the Slovak ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * Personal identification number of the Slovak ID holder. 
         */
        this.personalIdentificationNumber = nativeResult.personalIdentificationNumber;
        
        /** 
         * Place of birth of the Slovak ID holder. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * Sex of the Slovak ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * Special remarks of the Slovak ID holder. 
         */
        this.specialRemarks = nativeResult.specialRemarks;
        
        /** 
         * Surname at birth of the Slovak ID holder. 
         */
        this.surnameAtBirth = nativeResult.surnameAtBirth;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Slovak ID.
 * 
 */
export class SlovakiaCombinedRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaCombinedRecognizer');
        
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
         * True if place of birth is being extracted from ID 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * True if sex is being extracted from ID 
         */
        this.extractSex = true;
        
        /** 
         * True if special remarks are being extracted from ID 
         */
        this.extractSpecialRemarks = true;
        
        /** 
         * True if surname at birth is being extracted from ID 
         */
        this.extractSurnameAtBirth = true;
        
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
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaCombinedRecognizerResult(nativeResult); }
    }
}