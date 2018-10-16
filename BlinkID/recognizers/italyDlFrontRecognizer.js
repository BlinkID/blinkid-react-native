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
 * Result object for ItalyDlFrontRecognizer.
 */
export class ItalyDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Italian DL owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of the Italian DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Italian DL card. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the Italian DL card. 
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
         * The given name of the Italian DL owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The issuing authority of the Italian DL card. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The licence categories of the Italian DL owner. 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence number of the Italian DL owner. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The place of birth of the Italian DL owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Italian DL owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of Italian driver licence.
 */
export class ItalyDlFrontRecognizer extends Recognizer {
    constructor() {
        super('ItalyDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Italian DL owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of Italian DL owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Italian DL card should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Italian DL card should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given name of Italian DL owner should be extracted. 
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if issuing authority of Italian DL card should be extracted. 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if licence categories of Italian DL owner should be extracted. 
         */
        this.extractLicenceCategories = true;
        
        /** 
         * Defines if place of birth of Italian DL owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if surname of Italian DL owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new ItalyDlFrontRecognizerResult(nativeResult); }
    }
}