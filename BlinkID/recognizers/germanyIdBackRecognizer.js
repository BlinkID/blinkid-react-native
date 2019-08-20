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
 * Result object for GermanyIdBackRecognizer.
 */
export class GermanyIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The city of German ID owner. 
         */
        this.addressCity = nativeResult.addressCity;
        
        /** 
         * The house number of German ID owner. 
         */
        this.addressHouseNumber = nativeResult.addressHouseNumber;
        
        /** 
         * The street of German ID owner. 
         */
        this.addressStreet = nativeResult.addressStreet;
        
        /** 
         * The zip code of German ID owner. 
         */
        this.addressZipCode = nativeResult.addressZipCode;
        
        /** 
         * The issuing authority of German ID. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * The colour of eyes of German ID owner. 
         */
        this.colourOfEyes = nativeResult.colourOfEyes;
        
        /** 
         * The date of issue of German ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The full address of German ID owner. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The height of German ID owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
    }
}

/**
 * Recognizer which can scan back side of German ID.
 */
export class GermanyIdBackRecognizer extends Recognizer {
    constructor() {
        super('GermanyIdBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of German ID owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if issuing authority of German ID should be extracted.
         * 
         *  
         */
        this.extractAuthority = true;
        
        /** 
         * Defines if colour of eyes of German ID owner should be extracted.
         * 
         *  
         */
        this.extractColourOfEyes = true;
        
        /** 
         * Defines if date of issue of German ID should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if height of German ID owner should be extracted.
         * 
         *  
         */
        this.extractHeight = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyIdBackRecognizerResult(nativeResult); }
    }
}