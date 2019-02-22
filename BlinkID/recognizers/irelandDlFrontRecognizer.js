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
 * Result object for IrelandDlFrontRecognizer.
 */
export class IrelandDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Ireland DL owner 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Ireland DL owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Ireland DL 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Ireland DL 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The driver number of Ireland DL owner 
         */
        this.driverNumber = nativeResult.driverNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of Ireland DL owner 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of Ireland DL 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The licence categories of Ireland DL 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence number of Ireland DL 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The place of birth of Ireland DL owner 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of Ireland DL owner 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of Ireland drivers license.
 */
export class IrelandDlFrontRecognizer extends Recognizer {
    constructor() {
        super('IrelandDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Ireland DL owner should be extracted 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of Ireland DL owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Ireland DL should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Ireland DL should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if first name of Ireland DL owner should be extracted 
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Ireland DL should be extracted 
         */
        this.extractIssuedBy = true;
        
        /** 
         * Defines if licence categories of Ireland DL should be extracted 
         */
        this.extractLicenceCategories = true;
        
        /** 
         * Defines if licence number of Ireland DL should be extracted 
         */
        this.extractLicenceNumber = true;
        
        /** 
         * Defines if place of birth of Ireland DL owner should be extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if surname of Ireland DL owner should be extracted 
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
        
        this.createResultFromNative = function (nativeResult) { return new IrelandDlFrontRecognizerResult(nativeResult); }
    }
}