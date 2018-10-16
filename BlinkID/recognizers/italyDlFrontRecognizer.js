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
         * The address of the front side of the Italy Dl owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date Of Birth of the front side of the Italy Dl owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date Of Expiry of the front side of the Italy Dl owner. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date Of Issue of the front side of the Italy Dl owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given Name of the front side of the Italy Dl owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The issuing Authority of the front side of the Italy Dl owner. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The licence Categories of the front side of the Italy Dl owner. 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence Number of the front side of the Italy Dl owner. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The place Of Birth of the front side of the Italy Dl owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the front side of the Italy Dl owner. 
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
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Italian DL owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of Italian DL owner should be extracted.
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Italian DL card should be extracted.
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Italian DL card should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given name of Italian DL owner should be extracted.
         * 
         *  
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if issuing authority of Italian DL card should be extracted.
         * 
         *  
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if licence categories of Italian DL owner should be extracted.
         * 
         *  
         */
        this.extractLicenceCategories = true;
        
        /** 
         * Defines if place of birth of Italian DL owner should be extracted.
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if surname of Italian DL owner should be extracted.
         * 
         *  
         */
        this.extractSurname = true;
        
        /** 
         * Property for setting DPI for face images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.faceImageDpi = 250;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         *  
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
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
        
        /** 
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new ItalyDlFrontRecognizerResult(nativeResult); }
    }
}