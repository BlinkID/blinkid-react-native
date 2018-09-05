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
         * TThe company name of the Singapore Changi employee ID owner. 
         */
        this.companyName = nativeResult.companyName;
        
        /** 
         * The date of expiry of Singapore Changi employee ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document number of the Singapore Changi employee ID. 
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
         * The name of the Singapore Changi employee ID owner. 
         */
        this.name = nativeResult.name;
        
    }
}

/**
 * Class for configuring Singapore Changi Employee Id Recognizer.
 * 
 * Singapore Changi Employee Id recognizer is used for scanning front side of the Singapore Driver's license..
 */
export class SingaporeChangiEmployeeIdRecognizer extends Recognizer {
    constructor() {
        super('SingaporeChangiEmployeeIdRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if company name should be extracted from the Singapore Changi Employee Id
         * 
         *  
         */
        this.extractCompanyName = true;
        
        /** 
         * Defines if birth of expiry should be extracted from the Singapore Changi Employee Id
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if owner's name should be extracted from the Singapore Changi Employee Id
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
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeChangiEmployeeIdRecognizerResult(nativeResult); }
    }
}