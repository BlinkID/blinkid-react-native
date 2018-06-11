import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for AustriaPassportRecognizer.
 */
export class AustriaPassportRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.MRZResult = nativeResult.MRZResult;
        
        /** 
         * the date of birth of Austrian passport owner 
         */
        this.dateOfBirth = new Date(nativeResult.dateOfBirth);
        
        /** 
         * the date of expiry of Austrian passport 
         */
        this.dateOfExpiry = new Date(nativeResult.dateOfExpiry);
        
        /** 
         * the date of issue of Austrian passport 
         */
        this.dateOfIssue = new Date(nativeResult.dateOfIssue);
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the given name of the Austrian passport owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * issuing authority of the Austrian passport. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * nationality of the Austrian passport owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * passport number of the Austrian passport. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * place of birth of the Austrian passport owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * sex of the Austrian passport owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * the surname of the Austrian passport owner. 
         */
        this.surname = nativeResult.surname;
        
        /** 
         * the height of the passport in centimeters. 
         */
        this.height = nativeResult.height;
        
    }
}

/**
 * Recognizer which can scan austrian passport.
 */
export class AustriaPassportRecognizer extends Recognizer {
    constructor() {
        super('AustriaPassportRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Austrian passport owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Austrian passport should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Austrian passport should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given name of Austrian passport owner should be extracted 
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if height of Austrian passport owner should be extracted 
         */
        this.extractHeight = true;
        
        /** 
         * Defines if issuing authority of Austrian passport should be extracted 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if nationality of Austrian passport owner should be extracted 
         */
        this.extractNationality = false;
        
        /** 
         * Defines if passport number of Austrian passport should be extracted 
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if place of birth of Austrian passport owner should be extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if sex of Austrian passport owner should be extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Austrian passport owner should be extracted 
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
        
        this.createResultFromNative = function (nativeResult) { return new AustriaPassportRecognizerResult(nativeResult); }
    }
}