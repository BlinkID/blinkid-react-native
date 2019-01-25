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
 * Result object for AustraliaDlFrontRecognizer.
 */
export class AustraliaDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Australian DL owner 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of the Australian DL owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The full name of the Australian DL owner 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The date of expiry of the Australian DL 
         */
        this.licenceExpiry = nativeResult.licenceExpiry != null ? new Date(nativeResult.licenceExpiry) : null;
        
        /** 
         * The licence number of the Australian DL 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The licence type of the Australian DL 
         */
        this.licenceType = nativeResult.licenceType;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer which can scan the front side of Australian driver's licences.
 */
export class AustraliaDlFrontRecognizer extends Recognizer {
    constructor() {
        super('AustraliaDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Australian DL owner should be extracted
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of Australian DL owner should be extracted
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if full name of Australian DL owner should be extracted
         * 
         *  
         */
        this.extractFullName = true;
        
        /** 
         * Defines if date of expiry of Australian DL should be extracted
         * 
         *  
         */
        this.extractLicenseExpiry = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new AustraliaDlFrontRecognizerResult(nativeResult); }
    }
}