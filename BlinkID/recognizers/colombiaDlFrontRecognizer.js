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
         * The date of birth of the Colombia Dl card owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of issue of the Colombia Dl card. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The driver restrictions of the Colombia Dl card owner. 
         */
        this.driverRestrictions = nativeResult.driverRestrictions;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing agency of the Colombia Dl card. 
         */
        this.issuingAgency = nativeResult.issuingAgency;
        
        /** 
         * The licence number of the Colombia Dl card. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The name of the Colombia Dl card owner. 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if the date of birth of the Colombia Dl owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if the driver restrictions of the Colombia Dl owner should be extracted. 
         */
        this.extractDriverRestrictions = true;
        
        /** 
         * Defines if the issuing agency of the Colombia Dl card should be extracted. 
         */
        this.extractIssuingAgency = true;
        
        /** 
         * Defines if the name of the Colombia Dl owner should be extracted. 
         */
        this.extractName = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaDlFrontRecognizerResult(nativeResult); }
    }
}