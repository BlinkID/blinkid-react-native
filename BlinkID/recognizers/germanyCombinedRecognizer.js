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
 * Result object for GermanyCombinedRecognizer.
 */
export class GermanyCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the German ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The CAN number of German ID. 
         */
        this.canNumber = nativeResult.canNumber;
        
        /** 
         * The date of birth of German ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document date of expiry of the German ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document date of issue of the German ID. 
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
         * The issuing authority of German ID. 
         */
        this.eyeColor = nativeResult.eyeColor;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the German ID owner. 
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
         * The issuing authority of German ID. 
         */
        this.height = nativeResult.height;
        
        /** 
         * The identity card number of German ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * The issuing authority of German ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the German ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * True if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * Nationality of the German ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The issuing authority of German ID. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * Sex of the German ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of German ID.
 * 
 */
export class GermanyCombinedRecognizer extends Recognizer {
    constructor() {
        super('GermanyCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if address is being extracted from ID 
         */
        this.extractAddress = true;
        
        /** 
         * Defines the extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyCombinedRecognizerResult(nativeResult); }
    }
}