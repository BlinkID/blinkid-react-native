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
 * Result object for SwedenDlFrontRecognizer.
 */
export class SwedenDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * date of birth of Sweden DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * date of expiry of Sweden DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * date of issue of Sweden DL. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * issuing agency of Sweden DL card. 
         */
        this.issuingAgency = nativeResult.issuingAgency;
        
        /** 
         * licence categories of Sweden DL. 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * the licence number of Sweden DL card owner. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * name of Sweden DL owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * reference number of Sweden DL card. 
         */
        this.referenceNumber = nativeResult.referenceNumber;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * surname of Sweden DL owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 *  Recognizer settings for reading front side of Sweden DL
 * 
 */
export class SwedenDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SwedenDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if date of birth of Sweden DL owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if date of expiry of Sweden DL is being extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * true if date of issue of Sweden DL is being extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * true if issuing agency of Sweden DL is being extracted 
         */
        this.extractIssuingAgency = true;
        
        /** 
         * true if licence categories of Sweden DL is being extracted 
         */
        this.extractLicenceCategories = false;
        
        /** 
         * true if name of Sweden DL owner is being extracted 
         */
        this.extractName = true;
        
        /** 
         * true if reference number of Sweden DL is being extracted 
         */
        this.extractReferenceNumber = true;
        
        /** 
         * true if surname of Sweden DL owner is being extracted 
         */
        this.extractSurname = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SwedenDlFrontRecognizerResult(nativeResult); }
    }
}