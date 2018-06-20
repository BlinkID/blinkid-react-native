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
 * Result object for AustriaIdBackRecognizer.
 */
export class AustriaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The Date Of Issuance of Austrian ID. 
         */
        this.dateOfIssuance = nativeResult.dateOfIssuance != null ? new Date(nativeResult.dateOfIssuance) : null;
        
        /** 
         * The Document Number of Austrian ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The Eye Colour of Austrian ID owner. 
         */
        this.eyeColour = nativeResult.eyeColour;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The Height of Austrian ID owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * The Issuing Authority of Austrian ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The mrz on the back side of Austrian ID. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The Place Of Birth of Austrian ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The Principal Residence of Austrian ID owner. 
         */
        this.principalResidence = nativeResult.principalResidence;
        
    }
}

/**
 * Class for configuring Austrian ID Back Recognizer.
 * 
 * Austrian ID Back recognizer is used for scanning back side of Austrian ID.
 */
export class AustriaIdBackRecognizer extends Recognizer {
    constructor() {
        super('AustriaIdBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of issuance should be extracted from back side of Austrian ID
         * 
         *  
         */
        this.extractDateOfIssuance = true;
        
        /** 
         * Defines if owner's height should be extracted from back side of Austrian ID
         * 
         *  
         */
        this.extractHeight = true;
        
        /** 
         * Defines if issuing authority should be extracted from back side of Austrian ID
         * 
         *  
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if owner's place of birth should be extracted from back side of Austrian ID
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if owner's principal residence should be extracted from back side of Austrian ID
         * 
         *  
         */
        this.extractPrincipalResidence = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new AustriaIdBackRecognizerResult(nativeResult); }
    }
}