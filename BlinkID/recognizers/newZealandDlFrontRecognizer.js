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
         * The last name of the New Zealand Driver License owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The card version of the New Zealand Driver License. 
         */
        this.cardVersion = nativeResult.cardVersion;
        
        /** 
         * The last name of the New Zealand Driver License owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The last name of the New Zealand Driver License owner. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The last name of the New Zealand Driver License owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The last name of the New Zealand Driver License owner. 
         */
        this.donorIndicator = nativeResult.donorIndicator;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the New Zealand Driver License owner. 
         */
        this.firstNames = nativeResult.firstNames;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The license number of the New Zealand Driver License. 
         */
        this.licenseNumber = nativeResult.licenseNumber;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The last name of the New Zealand Driver License owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Class for configuring New Zealand DL Front Recognizer.
 * 
 * New Zealand DL Front recognizer is used for scanning front side of New Zealand DL.
 */
export class NewZealandDlFrontRecognizer extends Recognizer {
    constructor() {
        super('NewZealandDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's address should be extracted from New Zealand Driver License
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from New Zealand Driver License
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if card's expiry date should be extracted from New Zealand Driver License
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if card's issue date should be extracted from New Zealand Driver License
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if owner's donor indicator should be extracted from New Zealand Driver License
         * 
         *  
         */
        this.extractDonorIndicator = true;
        
        /** 
         * Defines if owner's first name should be extracted from New Zealand Driver License
         * 
         *  
         */
        this.extractFirstNames = true;
        
        /** 
         * Defines if owner's last name should be extracted from New Zealand Driver License
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
        
        this.createResultFromNative = function (nativeResult) { return new NewZealandDlFrontRecognizerResult(nativeResult); }
    }
}