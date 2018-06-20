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
         * The address of the Australian DL owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The document date of expiry of the Australian DL 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The last name of the Australian DL owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The licence number of the Australian DL owner. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
    }
}

/**
 * Class for configuring Australia DL Back Recognizer.
 * 
 * Australia DL Back recognizer is used for scanning back side of Australia DL.
 */
export class AustraliaDlBackRecognizer extends Recognizer {
    constructor() {
        super('AustraliaDlBackRecognizer');
        
        /** 
         *  Defines if sex of Australian DL owner should be extracted
         * 
         *   
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of expiry should be extracted from Australian DL
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         *  Defines if last name of Australian DL owner should be extracted
         * 
         *   
         */
        this.extractLastName = true;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new AustraliaDlBackRecognizerResult(nativeResult); }
    }
}