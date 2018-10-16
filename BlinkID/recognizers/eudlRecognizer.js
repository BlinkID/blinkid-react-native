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
 * Result object for EudlRecognizer.
 */
export class EudlRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Driver's Licence owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * Birth date and birth place of Driver's Licence owner 
         */
        this.birthData = nativeResult.birthData;
        
        /** 
         * The country where the driver's license has been issued. 
         */
        this.country = nativeResult.country;
        
        /** 
         * The driver number. 
         */
        this.driverNumber = nativeResult.driverNumber;
        
        /** 
         * The expiry date of the Driver's Licence 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Driver's Licence owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issue date of the Driver's Licence 
         */
        this.issueDate = nativeResult.issueDate != null ? new Date(nativeResult.issueDate) : null;
        
        /** 
         * Document issuing authority. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the Driver's Licence owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The personal number of the Driver's Licence owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
    }
}

/**
 * Recognizer for scanning driver's licence of several european countries
 */
export class EudlRecognizer extends Recognizer {
    constructor() {
        super('EudlRecognizer');
        
        /** 
         * Currently used country. 
         */
        this.country = EudlCountry.Automatic;
        
        /** 
         * Defines if address should be extracted from EU driver's license 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if expiry date should be extracted from EU driver's license 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if issue date should be extracted from EU driver's license 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if issuing authority should be extracted from EU driver's license 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if personal number should be extracted from EU driver's license 
         */
        this.extractPersonalNumber = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new EudlRecognizerResult(nativeResult); }
    }
}