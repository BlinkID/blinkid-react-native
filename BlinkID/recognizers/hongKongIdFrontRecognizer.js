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
 * Result object for HongKongIdFrontRecognizer.
 */
export class HongKongIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The commerical Code of the Hong Kong ID. 
         */
        this.commercialCode = nativeResult.commercialCode;
        
        /** 
         * The date of birth of the Hong Kong ID ownder. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The issue date of the Hong Kong ID owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The document number of the Hong Kong card. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The full name of the Hong Kong ID owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The residential status of the Hong Kong ID. 
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /** 
         * The sex of the Hong Kong ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Class for configuring Hong Kong ID Front Recognizer.
 * 
 * Hong Kong ID Front recognizer is used for scanning front side of Hong Kong ID.
 */
export class HongKongIdFrontRecognizer extends Recognizer {
    constructor() {
        super('HongKongIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if commercial code should be extracted from Hong Kong ID
         * 
         *  
         */
        this.extractCommercialCode = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from Hong Kong ID
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if card's date of issue should be extracted from Hong Kong ID
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if owner's full name should be extracted from Hong Kong ID
         * 
         *  
         */
        this.extractFullName = true;
        
        /** 
         * Defines if card's residential status should be extracted from Hong Kong ID
         * 
         *  
         */
        this.extractResidentialStatus = true;
        
        /** 
         * Defines if owner's sex should be extracted from Hong Kong ID
         * 
         *  
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new HongKongIdFrontRecognizerResult(nativeResult); }
    }
}