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
 * Result object for SwedenDlFrontRecognizer.
 */
export class SwedenDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The Date Of Birth of the Sweden DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The Date Of Expiry of the Sweden DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The Date Of Issue of the Sweden DL. 
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
         * The Issuing Agency of the Sweden DL. 
         */
        this.issuingAgency = nativeResult.issuingAgency;
        
        /** 
         * The Licence Categories of the Sweden DL. 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The Licence Numer of the Sweden DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The Name of the Sweden DL owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The Reference Number of the Sweden DL. 
         */
        this.referenceNumber = nativeResult.referenceNumber;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The Surname of the Sweden DL owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Class for configuring Sweden Dl Front Recognizer.
 * 
 * Sweden Dl Front recognizer is used for scanning front side of Sweden Dl.
 */
export class SwedenDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SwedenDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from Sweden DL
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry should be extracted from Sweden DL
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue should be extracted from Sweden DL
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if issuing agency should be extracted from Sweden DL
         * 
         *  
         */
        this.extractIssuingAgency = true;
        
        /** 
         * Defines iflicence categories should be extracted from Sweden DL
         * 
         *  
         */
        this.extractLicenceCategories = false;
        
        /** 
         * Defines if owner's name should be extracted from Sweden DL
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if reference number should be extracted from Sweden DL
         * 
         *  
         */
        this.extractReferenceNumber = true;
        
        /** 
         * Defines if owner's surname should be extracted from Sweden DL
         * 
         *  
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SwedenDlFrontRecognizerResult(nativeResult); }
    }
}