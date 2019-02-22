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
 * Result object for UnitedArabEmiratesDlFrontRecognizer.
 */
export class UnitedArabEmiratesDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of UAE DL owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The expiry date of UAE DL 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issue date of UAE DL 
         */
        this.issueDate = nativeResult.issueDate != null ? new Date(nativeResult.issueDate) : null;
        
        /** 
         * The license number of UAE DL 
         */
        this.licenseNumber = nativeResult.licenseNumber;
        
        /** 
         * The licensing authority code of UAE DL 
         */
        this.licensingAuthority = nativeResult.licensingAuthority;
        
        /** 
         * The name of UAE DL owner 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of UAE DL owner 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of issue of UAE DL 
         */
        this.placeOfIssue = nativeResult.placeOfIssue;
        
    }
}

/**
 * Recognizer which can scan front side of UAE drivers license.
 */
export class UnitedArabEmiratesDlFrontRecognizer extends Recognizer {
    constructor() {
        super('UnitedArabEmiratesDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of UAE DL owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if issue date of UAE DL should be extracted 
         */
        this.extractIssueDate = true;
        
        /** 
         * Defines if license number of UAE DL should be extracted 
         */
        this.extractLicenseNumber = true;
        
        /** 
         * Defines if licensing authority code of UAE DL should be extracted 
         */
        this.extractLicensingAuthority = true;
        
        /** 
         * Defines if name of UAE DL owner should be extracted 
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of UAE DL owner should be extracted 
         */
        this.extractNationality = true;
        
        /** 
         * Defines if place of issue of UAE DL should be extracted 
         */
        this.extractPlaceOfIssue = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new UnitedArabEmiratesDlFrontRecognizerResult(nativeResult); }
    }
}