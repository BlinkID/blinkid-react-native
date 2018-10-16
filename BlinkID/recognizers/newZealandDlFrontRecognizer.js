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
 * Result object for NewZealandDlFrontRecognizer.
 */
export class NewZealandDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the New Zealand DL owner 
         */
        this.address = nativeResult.address;
        
        /** 
         * The card version of the New Zealand DL 
         */
        this.cardVersion = nativeResult.cardVersion;
        
        /** 
         * The date of birth of the New Zealand DL owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the New Zealand DL 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the New Zealand DL 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Donor indicator of the New Zealand DL owner. It's true if "DONOR" is printed on document, otherwise it's false 
         */
        this.donorIndicator = nativeResult.donorIndicator;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first names of the New Zealand DL owner 
         */
        this.firstNames = nativeResult.firstNames;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The license number of the New Zealand DL 
         */
        this.licenseNumber = nativeResult.licenseNumber;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the New Zealand DL owner 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of New Zealand DL cards.
 */
export class NewZealandDlFrontRecognizer extends Recognizer {
    constructor() {
        super('NewZealandDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of New Zealand DL owner should be extracted 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of New Zealand DL owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of New Zealand DL should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of New Zealand DL should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if donor indicator of New Zealand DL owner should be extracted 
         */
        this.extractDonorIndicator = true;
        
        /** 
         * Defines if first names of New Zealand DL owner should be extracted 
         */
        this.extractFirstNames = true;
        
        /** 
         * Defines if surname of New Zealand DL owner should be extracted 
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
        
        this.createResultFromNative = function (nativeResult) { return new NewZealandDlFrontRecognizerResult(nativeResult); }
    }
}