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
 * Result object for GermanyCombinedRecognizer.
 */
export class GermanyCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.MRZVerified = nativeResult.MRZVerified;
        
        /** 
         * the address of the German ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * the date of birth of German ID owner. 
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
         * the document date of expiry of the German ID. 
         */
        this.documentDateOfExpiry = nativeResult.documentDateOfExpiry;
        
        /** 
         * the document date of issue of the German ID. 
         */
        this.documentDateOfIssue = nativeResult.documentDateOfIssue;
        
        /** 
         * the issuing authority of German ID. 
         */
        this.eyeColor = nativeResult.eyeColor;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the German ID owner. 
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
         * the issuing authority of German ID. 
         */
        this.height = nativeResult.height;
        
        /** 
         * the identity card number of German ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * the issuing authority of German ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * the last name of the German ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * nationality of the German ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * the issuing authority of German ID. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * sex of the German ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of German ID.

 */
export class GermanyCombinedRecognizer extends Recognizer {
    constructor() {
        super('GermanyCombinedRecognizer');
        
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyCombinedRecognizerResult(nativeResult); }
    }
}