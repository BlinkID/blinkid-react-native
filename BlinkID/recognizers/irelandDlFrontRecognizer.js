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
         * The address of the front side of the Ireland Dl owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date Of Birth of the front side of the Ireland Dl owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date Of Expiry of the front side of the Ireland Dl owner. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date Of Issue of the front side of the Ireland Dl owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The driver Number of the front side of the Ireland Dl owner. 
         */
        this.driverNumber = nativeResult.driverNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first Name of the front side of the Ireland Dl owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issued By of the front side of the Ireland Dl owner. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The licence Categories of the front side of the Ireland Dl owner. 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence Number of the front side of the Ireland Dl owner. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The place Of Birth of the front side of the Ireland Dl owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the front side of the Ireland Dl owner. 
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
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Ireland DL owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of Ireland DL owner should be extracted.
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Ireland DL should be extracted.
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Ireland DL should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if first name of Ireland DL owner should be extracted.
         * 
         *  
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Ireland DL should be extracted.
         * 
         *  
         */
        this.extractIssuedBy = true;
        
        /** 
         * Defines if licence categories of Ireland DL should be extracted.
         * 
         *  
         */
        this.extractLicenceCategories = true;
        
        /** 
         * Defines if licence number of Ireland DL should be extracted.
         * 
         *  
         */
        this.extractLicenceNumber = true;
        
        /** 
         * Defines if place of birth of Ireland DL owner should be extracted.
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if surname of Ireland DL owner should be extracted.
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
        
        this.createResultFromNative = function (nativeResult) { return new IrelandDlFrontRecognizerResult(nativeResult); }
    }
}