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
         * The address of the EU Driver License owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The birth Data of the EU Driver License owner. 
         */
        this.birthData = nativeResult.birthData;
        
        /** 
         * The country of the EU Driver License owner. 
         */
        this.country = nativeResult.country;
        
        /** 
         * The driver Number of the EU Driver License owner. 
         */
        this.driverNumber = nativeResult.driverNumber;
        
        /** 
         * The expiry Date of the EU Driver License owner. 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first Name of the EU Driver License owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issue Date of the EU Driver License owner. 
         */
        this.issueDate = nativeResult.issueDate != null ? new Date(nativeResult.issueDate) : null;
        
        /** 
         * The issuing Authority of the EU Driver License owner. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last Name of the EU Driver License owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The personal Number of the EU Driver License owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
    }
}

/**
 * Class for configuring EU Driver License Recognizer.
 * 
 * EU Driver License recognizer is used for scanning EU Driver License.
 */
export class EudlRecognizer extends Recognizer {
    constructor() {
        super('EudlRecognizer');
        
        /** 
         * Country of scanning Eudl. The default value of EudlCountryAny will scan all supported driver's licenses.
         * 
         *  
         */
        this.country = EudlCountry.Automatic;
        
        /** 
         * Defines if owner's address should be extracted from EU Driver License
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if owner's date of expiry should be extracted from EU Driver License
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if owner's date of issue should be extracted from EU Driver License
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if owner's issuing authority should be extracted from EU Driver License
         * 
         *  
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if owner's personal number should be extracted from EU Driver License
         * 
         *  
         */
        this.extractPersonalNumber = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new EudlRecognizerResult(nativeResult); }
    }
}