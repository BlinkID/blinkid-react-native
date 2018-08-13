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
         * the address of the Driver's Licence owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * birth date and birth place of Driver's Licence owner 
         */
        this.birthData = nativeResult.birthData;
        
        /** 
         * the country where the driver's license has been issued. 
         */
        this.country = nativeResult.country;
        
        /** 
         * the driver number. 
         */
        this.driverNumber = nativeResult.driverNumber;
        
        /** 
         * the expiry date of the Driver's Licence 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Driver's Licence owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the issue date of the Driver's Licence 
         */
        this.issueDate = nativeResult.issueDate != null ? new Date(nativeResult.issueDate) : null;
        
        /** 
         * document issuing authority. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * the last name of the Driver's Licence owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * the personal number of the Driver's Licence owner. 
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
         * currently used country. 
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
         * the DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new EudlRecognizerResult(nativeResult); }
    }
}