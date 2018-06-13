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
 * Result object for NewZealandDlFrontRecognizer.
 */
export class NewZealandDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * address on New Zealand drivers license. 
         */
        this.address = nativeResult.address;
        
        /** 
         * card version on New Zealand drivers license. 
         */
        this.cardVersion = nativeResult.cardVersion;
        
        /** 
         * date of birth on New Zealand drivers license. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         * true if DONOR is on New Zealand drivers license else returns false. 
         */
        this.donorIndicator = nativeResult.donorIndicator;
        
        /** 
         * expiry date on New Zealand drivers license. 
         */
        this.expiryDate = nativeResult.expiryDate;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * first names on New Zealand drivers license. 
         */
        this.firstNames = nativeResult.firstNames;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * issue date on New Zealand drivers license. 
         */
        this.issueDate = nativeResult.issueDate;
        
        /** 
         * license number on New Zealand drivers license. 
         */
        this.licenseNumber = nativeResult.licenseNumber;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * surname on New Zealand drivers license. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 *  Recognizer for reading front side of New Zealand driver's licence.

 */
export class NewZealandDlFrontRecognizer extends Recognizer {
    constructor() {
        super('NewZealandDlFrontRecognizer');
        
        /** 
         * true if address of New Zealand DL owner is being extracted 
         */
        this.extractAddress = true;
        
        /** 
         * true if date of birth on New Zealand DL is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if donor indicator of New Zealand DL owner is being extracted 
         */
        this.extractDonorIndicator = true;
        
        /** 
         * true if expiry date on New Zealand DL is being extracted 
         */
        this.extractExpiryDate = true;
        
        /** 
         * true if first names of New Zealand DL owner is being extracted 
         */
        this.extractFirstNames = true;
        
        /** 
         * true if issue date on New Zealand DL is being extracted 
         */
        this.extractIssueDate = true;
        
        /** 
         * true if surname of New Zealand DL owner is being extracted 
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new NewZealandDlFrontRecognizerResult(nativeResult); }
    }
}