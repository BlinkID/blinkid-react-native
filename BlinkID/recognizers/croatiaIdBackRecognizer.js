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
 * Result object for CroatiaIdBackRecognizer.
 */
export class CroatiaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Determines if date of expiry of Croatian ID is permanent 
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /** 
         * The date of issue of Croatian ID 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Determines if Croatian ID is issued for non resident 
         */
        this.documentForNonResident = nativeResult.documentForNonResident;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuer of Croatian ID 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The data extracted from the machine readable zone 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The residence of Croatian ID owner 
         */
        this.residence = nativeResult.residence;
        
    }
}

/**
 * Croatian ID Back Recognizer.
 * 
 * Croatian ID Back recognizer is used for scanning back side of Croatian ID. It always extracts
 * MRZ zone and address of ID holder while extracting other elements is optional.
 */
export class CroatiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('CroatiaIdBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of issue of Croatian ID should be extracted
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if issuer of Croatian ID should be extracted
         * 
         *  
         */
        this.extractIssuedBy = true;
        
        /** 
         * Defines if residence of Croatian ID owner should be extracted
         * 
         *  
         */
        this.extractResidence = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new CroatiaIdBackRecognizerResult(nativeResult); }
    }
}