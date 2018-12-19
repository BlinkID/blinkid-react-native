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
         * The commercial code of Hong Kong ID owner 
         */
        this.commercialCode = nativeResult.commercialCode;
        
        /** 
         * The date of birth of Hong Kong ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of issue of Hong Kong ID 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The document number of Hong Kong ID 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The full name of Hong Kong ID owner 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The residential status of Hong Kong ID owner 
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /** 
         * The sex of Hong Kong ID owner 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan front side of Hong Kong national ID cards.
 */
export class HongKongIdFrontRecognizer extends Recognizer {
    constructor() {
        super('HongKongIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if commercial code of Hong Kong ID owner should be extracted 
         */
        this.extractCommercialCode = true;
        
        /** 
         * Defines if date of birth of Hong Kong ID owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of issue of Hong Kong ID should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if full name of Hong Kong ID owner should be extracted 
         */
        this.extractFullName = true;
        
        /** 
         * Defines if residential status of Hong Kong ID owner should be extracted 
         */
        this.extractResidentialStatus = true;
        
        /** 
         * Defines if sex of Hong Kong ID owner should be extracted 
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new HongKongIdFrontRecognizerResult(nativeResult); }
    }
}