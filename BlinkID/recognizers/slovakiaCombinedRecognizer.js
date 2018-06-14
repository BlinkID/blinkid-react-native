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
         * the address of the Slovak ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * the date of birth of Slovak ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         * the document date of expiry of the Slovak ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry;
        
        /** 
         * the document date of issue of the Slovak ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue;
        
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
         *  back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         *  front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * the issuing authority of Slovak ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * the last name of the Slovak ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * nationality of the Slovak ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * personal identification number of the Slovak ID holder. 
         */
        this.personalIdentificationNumber = nativeResult.personalIdentificationNumber;
        
        /** 
         * place of birth of the Slovak ID holder. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * sex of the Slovak ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * special remarks of the Slovak ID holder. 
         */
        this.specialRemarks = nativeResult.specialRemarks;
        
        /** 
         * surname at birth of the Slovak ID holder. 
         */
        this.surnameAtBirth = nativeResult.surnameAtBirth;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Slovak ID.

 */
export class SlovakiaCombinedRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaCombinedRecognizer');
        
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
         * true if place of birth is being extracted from ID 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * true if sex is being extracted from ID 
         */
        this.extractSex = true;
        
        /** 
         * true if special remarks are being extracted from ID 
         */
        this.extractSpecialRemarks = true;
        
        /** 
         * true if surname at birth is being extracted from ID 
         */
        this.extractSurnameAtBirth = true;
        
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
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaCombinedRecognizerResult(nativeResult); }
    }
}