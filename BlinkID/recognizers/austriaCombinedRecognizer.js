import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for AustriaCombinedRecognizer.
 */
export class AustriaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.MRZVerified = nativeResult.MRZVerified;
        
        /** 
         * the date of birth of Austrian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         * the date of issuance of the Austrian ID. 
         */
        this.dateOfIssuance = nativeResult.dateOfIssuance;
        
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
         * the document date of expiry of the Austrian ID. 
         */
        this.documentDateOfExpiry = nativeResult.documentDateOfExpiry;
        
        /** 
         * the eye colour of the card holder. 
         */
        this.eyeColour = nativeResult.eyeColour;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Austrian ID owner. 
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
         * the height of the cardholder in centimeters. 
         */
        this.height = nativeResult.height;
        
        /** 
         * the identity card number of Austrian ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * the issuing authority of Austrian ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * the last name of the Austrian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * the nationality of card holder. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * the place of birth of the card holder. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * principal residendce at issuance of the card holder. 
         */
        this.principalResidenceAtIssuance = nativeResult.principalResidenceAtIssuance;
        
        /** 
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * sex of the Austrian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Austrian ID.

 */
export class AustriaCombinedRecognizer extends Recognizer {
    constructor() {
        super('AustriaCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if date of birth of Austrian ID owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if date of expiry is being extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * true if date of issue is being extracted from Austrian ID 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * true if height is being extracted from Austrian ID 
         */
        this.extractHeight = true;
        
        /** 
         * true if issuing authority is being extracted from Austrian ID 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * true if nationality is being extracted from Austrian ID 
         */
        this.extractNationality = true;
        
        /** 
         * true if place of birth is being extracted from Austrian ID 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * true if principal residence is being extracted from Austrian ID 
         */
        this.extractPrincipalResidence = true;
        
        /** 
         * true if sex of Austrian ID owner is being extracted 
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
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new AustriaCombinedRecognizerResult(nativeResult); }
    }
}