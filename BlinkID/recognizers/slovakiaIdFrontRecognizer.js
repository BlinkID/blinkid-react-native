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
 * Result object for SlovakiaIdFrontRecognizer.
 */
export class SlovakiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of the Slovakian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Slovakian ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the Slovakian ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The document number of the Slovakian ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Slovakian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of the ID. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The last name of the Slovakian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The nationality of the Slovakian ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The personal number of the Slovakian ID owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         * The sex of the Slovakian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Class for configuring Slovak ID Front Recognizer.
 * 
 * Slovak ID Front recognizer is used for scanning front side of Slovak ID.
 */
export class SlovakiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if ID's date of expiry should be extracted
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if ID's date of issue should be extracted
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if issuing document number should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if issuing authority should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractIssuedBy = true;
        
        /** 
         * Defines if owner's nationality should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if owner's sex should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractSex = true;
        
        /** 
         * Sets whether face image from ID card should be extracted
         * 
         *  
         */
        this.returnFaceImage = false;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Sets whether signature image from ID card should be extracted.
         * 
         *  
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaIdFrontRecognizerResult(nativeResult); }
    }
}