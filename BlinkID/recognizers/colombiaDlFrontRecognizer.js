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
 * Result object for ColombiaDlFrontRecognizer.
 */
export class ColombiaDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date Of Birth of the front side of the Colombia Dl owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date Of Issue of the front side of the Colombia Dl owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The driver Restrictions of the front side of the Colombia Dl owner. 
         */
        this.driverRestrictions = nativeResult.driverRestrictions;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing Agency of the front side of the Colombia Dl owner. 
         */
        this.issuingAgency = nativeResult.issuingAgency;
        
        /** 
         * The licence Number of the front side of the Colombia Dl owner. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The name of the front side of the Colombia Dl owner. 
         */
        this.name = nativeResult.name;
        
    }
}

/**
 * Recognizer which can scan front side of Colombia drivers licence.
 */
export class ColombiaDlFrontRecognizer extends Recognizer {
    constructor() {
        super('ColombiaDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if the date of birth of the Colombia Dl owner should be extracted.
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if the driver restrictions of the Colombia Dl owner should be extracted.
         * 
         *  
         */
        this.extractDriverRestrictions = true;
        
        /** 
         * Defines if the issuing agency of the Colombia Dl card should be extracted.
         * 
         *  
         */
        this.extractIssuingAgency = true;
        
        /** 
         * Defines if the name of the Colombia Dl owner should be extracted.
         * 
         *  
         */
        this.extractName = true;
        
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
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         *  
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
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
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaDlFrontRecognizerResult(nativeResult); }
    }
}