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
 * Result object for SloveniaCombinedRecognizer.
 */
export class SloveniaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.MRZVerified = nativeResult.MRZVerified;
        
        /** 
         * the address of the Slovenian ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * citizenship of the Slovenian ID owner. 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * the date of birth of Slovenian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
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
         * the document date of expiry of the Slovenian ID. 
         */
        this.documentDateOfExpiry = nativeResult.documentDateOfExpiry;
        
        /** 
         * the document date of issue of the Slovenian ID. 
         */
        this.documentDateOfIssue = nativeResult.documentDateOfIssue;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Slovenian ID owner. 
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
         * the identity card number of Slovenian ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * the issuing authority of Slovenian ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * the last name of the Slovenian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * personal identification number of the Slovenian ID holder. 
         */
        this.personalIdentificationNumber = nativeResult.personalIdentificationNumber;
        
        /** 
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * sex of the Slovenian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Slovenian ID.

 */
export class SloveniaCombinedRecognizer extends Recognizer {
    constructor() {
        super('SloveniaCombinedRecognizer');
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SloveniaCombinedRecognizerResult(nativeResult); }
    }
}