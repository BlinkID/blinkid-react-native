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
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
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
         * Signature image from the document 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Australian DL owner should be extracted 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of Australian DL owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if full name of Australian DL owner should be extracted 
         */
        this.extractFullName = true;
        
        /** 
         * Defines if date of expiry of Australian DL should be extracted 
         */
        this.extractLicenseExpiry = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new AustraliaDlFrontRecognizerResult(nativeResult); }
    }
}