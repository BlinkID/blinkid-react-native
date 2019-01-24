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
 * Result object for GermanyDlFrontRecognizer.
 */
export class GermanyDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Germany DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Germany DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Germany DL. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Germany DL owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of the Germany DL. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the Germany DL owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The licence categories of the Germany DL. 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence number of the Germany DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The place of birth of Germany DL owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer which can scan front side of Germany national DL cards
 */
export class GermanyDlFrontRecognizer extends Recognizer {
    constructor() {
        super('GermanyDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Germany DL owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Germany DL should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Germany DL should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if first name of Germany DL owner should be extracted. 
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Germany DL should be extracted. 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if last name of Germany DL owner should be extracted. 
         */
        this.extractLastName = true;
        
        /** 
         * Defines if licence categories of Germany DL should be extracted. 
         */
        this.extractLicenceCategories = true;
        
        /** 
         * Defines if place of birth of Germany DL owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyDlFrontRecognizerResult(nativeResult); }
    }
}