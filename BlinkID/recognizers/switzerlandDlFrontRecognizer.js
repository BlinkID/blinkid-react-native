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
         * The date of birth 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The expiry date permanent 
         */
        this.expiryDatePermanent = nativeResult.expiryDatePermanent;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The license number 
         */
        this.licenseNumber = nativeResult.licenseNumber;
        
        /** 
         * The place of birth 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The vehicle categories 
         */
        this.vehicleCategories = nativeResult.vehicleCategories;
        
    }
}

/**
 * The Switzerland DL Front Recognizer is used for scanning front side of the Switzerland DL.
 */
export class SwitzerlandDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SwitzerlandDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines whether date of birth should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines whether date of expiry should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines whether date of issue should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines whether first name should be extracted 
         */
        this.extractFirstName = true;
        
        /** 
         * Defines whether issuing authority should be extracted 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines whether last name should be extracted 
         */
        this.extractLastName = true;
        
        /** 
         * Defines whether place of birth should be extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines whether vehicle categories should be extracted 
         */
        this.extractVehicleCategories = true;
        
        /** 
         * the DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        /** 
         * the DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandDlFrontRecognizerResult(nativeResult); }
    }
}