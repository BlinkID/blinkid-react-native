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
 * Result object for AustriaDlFrontRecognizer.
 */
export class AustriaDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date Of Birth of the front side of the Austria Dl owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date Of Expiry of the front side of the Austria Dl owner. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date Of Issue of the front side of the Austria Dl owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first Name of the front side of the Austria Dl owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing Authority of the front side of the Austria Dl owner. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The licence Number of the front side of the Austria Dl owner. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The name of the front side of the Austria Dl owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The place Of Birth of the front side of the Austria Dl owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The vehicle Categories of the front side of the Austria Dl owner. 
         */
        this.vehicleCategories = nativeResult.vehicleCategories;
        
    }
}

/**
 * Recognizer which can scan front side of Austrian national DL cards.
 */
export class AustriaDlFrontRecognizer extends Recognizer {
    constructor() {
        super('AustriaDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Austrian DL owner should be extracted.
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Austrian DL should be extracted.
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Austrian DL should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if first name of Austrian DL owner should be extracted.
         * 
         *  
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Austrian DL should be extracted.
         * 
         *  
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if name of Austrian DL owner should be extracted.
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if place of birth of Austrian DL owner should be extracted.
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if vehicle categories of Austrian DL should be extracted.
         * 
         *  
         */
        this.extractVehicleCategories = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new AustriaDlFrontRecognizerResult(nativeResult); }
    }
}