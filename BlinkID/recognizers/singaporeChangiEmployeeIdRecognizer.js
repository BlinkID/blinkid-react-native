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
 * Result object for SingaporeChangiEmployeeIdRecognizer.
 */
export class SingaporeChangiEmployeeIdRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The company name of the Singapore Changi employee ID owner 
         */
        this.companyName = nativeResult.companyName;
        
        /** 
         * The date of expiry of Singapore Changi employee ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document number of the Singapore Changi employee ID 
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
         * The name of the Singapore Changi employee ID owner 
         */
        this.name = nativeResult.name;
        
    }
}

/**
 * Recognizer which can scan front side of Singapore Changi employee ID cards.
 */
export class SingaporeChangiEmployeeIdRecognizer extends Recognizer {
    constructor() {
        super('SingaporeChangiEmployeeIdRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if company name of the Singapore Changi employee ID owner should be extracted 
         */
        this.extractCompanyName = true;
        
        /** 
         * Defines if date of expiry of the Singapore Changi employee ID should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if name of the Singapore Changi employee ID owner should be extracted 
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
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeChangiEmployeeIdRecognizerResult(nativeResult); }
    }
}