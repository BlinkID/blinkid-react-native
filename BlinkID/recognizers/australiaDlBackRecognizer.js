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
 * Result object for AustraliaDlBackRecognizer.
 */
export class AustraliaDlBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Australia DL owner 
         */
        this.address = nativeResult.address;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The last name of the Australia DL owner 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The date of expiry of the Australia DL 
         */
        this.licenceExpiry = nativeResult.licenceExpiry != null ? new Date(nativeResult.licenceExpiry) : null;
        
        /** 
         * The licence number of the Australia DL 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
    }
}

/**
 * Recognizer which can scan the back side of Australian driver's licences
 */
export class AustraliaDlBackRecognizer extends Recognizer {
    constructor() {
        super('AustraliaDlBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of the Australia DL owner should be extracted
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if last name of the Australia DL owner should be extracted
         * 
         *  
         */
        this.extractLastName = true;
        
        /** 
         * Defines if the licence number of the Australia DL should be extracted
         * 
         *  
         */
        this.extractLicenceNumber = true;
        
        /** 
         * Defines if date of expiry of the Australia DL should be extracted
         * 
         *  
         */
        this.extractLicenseExpiry = true;
        
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
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new AustraliaDlBackRecognizerResult(nativeResult); }
    }
}