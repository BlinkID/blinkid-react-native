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
 * Result object for SpainDlFrontRecognizer.
 */
export class SpainDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Spain DL owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Spain DL owner 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of the Spain DL 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The licence categories of the Spain DL 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence number of the Spain DL 
         */
        this.number = nativeResult.number;
        
        /** 
         * The place of birth of Spain DL owner 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Spain DL owner 
         */
        this.surname = nativeResult.surname;
        
        /** 
         * The date of issue of Spain DL 
         */
        this.validFrom = nativeResult.validFrom != null ? new Date(nativeResult.validFrom) : null;
        
        /** 
         * The date of expiry of Spain DL 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
    }
}

/**
 * Spain Driver's License Front Recognizer.
 * 
 * Recognizer which can scan front side of Spain national DL cards
 */
export class SpainDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SpainDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         *  Defines if date of birth of Spain DL owner should be extracted
         * 
         *   
         */
        this.extractDateOfBirth = true;
        
        /** 
         *  Defines if first name of Spain DL owner should be extracted
         * 
         *   
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Spain DL should be extracted
         * 
         *  
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if licence categories of Spain DL should be extracted
         * 
         *  
         */
        this.extractLicenceCategories = true;
        
        /** 
         *  Defines if place of birth of Spain DL owner should be extracted
         * 
         *   
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         *  Defines if surname of Spain DL owner should be extracted
         * 
         *   
         */
        this.extractSurname = true;
        
        /** 
         * Defines if date of issue of Spain DL should be extracted
         * 
         *  
         */
        this.extractValidFrom = true;
        
        /** 
         * Defines if date of expiry of Spain DL should be extracted
         * 
         *  
         */
        this.extractValidUntil = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SpainDlFrontRecognizerResult(nativeResult); }
    }
}