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
 * Result object for SerbiaCombinedRecognizer.
 */
export class SerbiaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.MRZVerified = nativeResult.MRZVerified;
        
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
         * the date of birth of the Serbian ID holder. 
         */
        this.documentDateOfBirth = nativeResult.documentDateOfBirth;
        
        /** 
         * the document date of expiry of the Serbian ID. 
         */
        this.documentDateOfExpiry = nativeResult.documentDateOfExpiry;
        
        /** 
         * the document date of issue of the Serbian ID. 
         */
        this.documentDateOfIssue = nativeResult.documentDateOfIssue;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * first name of the Serbian ID holder. 
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
         * the identity card number of Serbian ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * issuer of the Serbian ID holder. 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * personal identification number of the Serbian ID holder. 
         */
        this.jMBG = nativeResult.jMBG;
        
        /** 
         * last name of the Serbian ID holder. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * nationality of the Serbian ID holder. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * sex of the Serbian ID holder. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Serbian ID.

 */
export class SerbiaCombinedRecognizer extends Recognizer {
    constructor() {
        super('SerbiaCombinedRecognizer');
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SerbiaCombinedRecognizerResult(nativeResult); }
    }
}