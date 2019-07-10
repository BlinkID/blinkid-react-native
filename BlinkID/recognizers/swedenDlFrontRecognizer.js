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
         * The date of birth of Sweden DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Sweden DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Sweden DL. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing agency of Sweden DL. 
         */
        this.issuingAgency = nativeResult.issuingAgency;
        
        /** 
         * The licence categories of Sweden DL. 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence number of Sweden DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The name of Sweden DL owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The reference number of Sweden DL. 
         */
        this.referenceNumber = nativeResult.referenceNumber;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of Sweden DL owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of Sweden DL.
 */
export class SwedenDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SwedenDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Sweden DL owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Sweden DL should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Sweden DL should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if issuing agency of Sweden DL should be extracted. 
         */
        this.extractIssuingAgency = true;
        
        /** 
         * Defines if licence categories of Sweden DL should be extracted. 
         */
        this.extractLicenceCategories = true;
        
        /** 
         * Defines if name of Sweden DL owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if reference number of Sweden DL should be extracted. 
         */
        this.extractReferenceNumber = true;
        
        /** 
         * Defines if surname of Sweden DL owner should be extracted. 
         */
        this.extractSurname = true;
        
        /** 
         * The DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
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
         * The DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new SwedenDlFrontRecognizerResult(nativeResult); }
    }
}