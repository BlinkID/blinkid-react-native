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
         * The date of birth of the Austrian DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Austrian DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the Austrian DL. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Austrian DL owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of the Austrian DL. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The licence number of the Austrian DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The name of the Austrian DL owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The place of birth of the Austrian DL owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The vehicle categories of the Austrian DL. 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Austrian DL owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Austrian DL should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Austrian DL should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if first name of Austrian DL owner should be extracted. 
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Austrian DL should be extracted. 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if name of Austrian DL owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if place of birth of Austrian DL owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if vehicle categories of Austrian DL should be extracted. 
         */
        this.extractVehicleCategories = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new AustriaDlFrontRecognizerResult(nativeResult); }
    }
}