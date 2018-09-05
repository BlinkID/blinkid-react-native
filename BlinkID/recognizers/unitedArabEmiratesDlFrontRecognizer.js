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
         * The date Of Birth of the front side of the United Arab Emirates Dl owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The expiry Date of the front side of the United Arab Emirates Dl owner. 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issue Date of the front side of the United Arab Emirates Dl owner. 
         */
        this.issueDate = nativeResult.issueDate != null ? new Date(nativeResult.issueDate) : null;
        
        /** 
         * The license Number of the front side of the United Arab Emirates Dl owner. 
         */
        this.licenseNumber = nativeResult.licenseNumber;
        
        /** 
         * The licensing Authority of the front side of the United Arab Emirates Dl owner. 
         */
        this.licensingAuthority = nativeResult.licensingAuthority;
        
        /** 
         * The name of the front side of the United Arab Emirates Dl owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of the front side of the United Arab Emirates Dl owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place Of Issue of the front side of the United Arab Emirates Dl owner. 
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
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of UAE DL owner should be extracted
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if issue date of UAE DL should be extracted
         * 
         *  
         */
        this.extractIssueDate = true;
        
        /** 
         * Defines if license number of UAE DL should be extracted
         * 
         *  
         */
        this.extractLicenseNumber = true;
        
        /** 
         * Defines if licensing authority code of UAE DL should be extracted
         * 
         *  
         */
        this.extractLicensingAuthority = true;
        
        /** 
         * Defines if name of UAE DL owner should be extracted
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of UAE DL owner should be extracted
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if place of issue of UAE DL should be extracted
         * 
         *  
         */
        this.extractPlaceOfIssue = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new UnitedArabEmiratesDlFrontRecognizerResult(nativeResult); }
    }
}