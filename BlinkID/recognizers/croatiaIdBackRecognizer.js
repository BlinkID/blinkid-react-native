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
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuer of Croatian ID 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The residence of Croatian ID owner 
         */
        this.residence = nativeResult.residence;
        
    }
}

/**
 * Recognizer which can scan back side of Croatian national ID cards.
 */
export class CroatiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('CroatiaIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of issue of Croatian ID should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if issuer of Croatian ID should be extracted 
         */
        this.extractIssuedBy = true;
        
        /** 
         * Defines if residence of Croatian ID owner should be extracted 
         */
        this.extractResidence = true;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new CroatiaIdBackRecognizerResult(nativeResult); }
    }
}