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
 * Result object for SwitzerlandDlFrontRecognizer.
 */
export class SwitzerlandDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of the Switzerland DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of rxpiry of the Switzerland DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the Switzerland DL. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * If true, then this Switzerland DL will never expire. 
         */
        this.expiryDatePermanent = nativeResult.expiryDatePermanent;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Switzerland DL owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of the Switzerland DL. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the Switzerland DL owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The license number of the Switzerland DL. 
         */
        this.licenseNumber = nativeResult.licenseNumber;
        
        /** 
         * The place of birth of the Switzerland DL owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The vehicle categories of the Switzerland DL. 
         */
        this.vehicleCategories = nativeResult.vehicleCategories;
        
    }
}

/**
 * Class for configuring Switzerland DL Front Recognizer.
 * 
 * Switzerland DL Front recognizer is used for scanning front side of the Switzerland DL.
 */
export class SwitzerlandDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SwitzerlandDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from front side of the Switzerland DL
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry should be extracted from front side of the Switzerland DL
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue should be extracted from front side of the Switzerland DL
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if owner's first name should be extracted from front side of the Switzerland DL
         * 
         *  
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority should be extracted from front side of the Switzerland DL
         * 
         *  
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if owner's last name should be extracted from front side of the Switzerland DL
         * 
         *  
         */
        this.extractLastName = true;
        
        /** 
         * Defines if owner's place of birth should be extracted from front side of the Switzerland DL
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if vehicle categories should be extracted from front side of the Switzerland DL
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
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandDlFrontRecognizerResult(nativeResult); }
    }
}