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
 * Result object for CroatiaCombinedRecognizer.
 */
export class CroatiaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the address of the Croatian ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * citizenship of the Croatian ID owner. 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * the date of birth of Croatian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * the document date of expiry of the Croatian ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * true if document expiry is permanent 
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /** 
         * the document date of issue of the Croatian ID. 
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
         * true if scanned document is bilingual 
         */
        this.documentBilingual = nativeResult.documentBilingual;
        
        /** 
         * Defines {true} if data from scanned parts/sides of the document match, 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Croatian ID owner. 
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
         * the identity card number of Croatian ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * the issuing authority of Croatian ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * the last name of the Croatian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * true if document owner is non resident. 
         */
        this.nonResident = nativeResult.nonResident;
        
        /** 
         * personal identification number of the Croatian ID holder. 
         */
        this.personalIdentificationNumber = nativeResult.personalIdentificationNumber;
        
        /** 
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * sex of the Croatian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Croatian ID.
 * 
 */
export class CroatiaCombinedRecognizer extends Recognizer {
    constructor() {
        super('CroatiaCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new CroatiaCombinedRecognizerResult(nativeResult); }
    }
}