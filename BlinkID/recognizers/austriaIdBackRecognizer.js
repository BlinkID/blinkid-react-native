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
         * The date of issuance of the ID 
         */
        this.dateOfIssuance = nativeResult.dateOfIssuance != null ? new Date(nativeResult.dateOfIssuance) : null;
        
        /** 
         * The document number of Austrian ID 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The eye colour of the card holder. 
         */
        this.eyeColour = nativeResult.eyeColour;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The height of the cardholder in centimeters 
         */
        this.height = nativeResult.height;
        
        /** 
         * The issuing authority of Austrian ID 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The place of birth of the card holder 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The principal residence at issuance of the card holder. 
         */
        this.principalResidence = nativeResult.principalResidence;
        
    }
}

/**
 * Recognizer which can scan back side of Austrian national ID cards.
 */
export class AustriaIdBackRecognizer extends Recognizer {
    constructor() {
        super('AustriaIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of issuance should be extracted 
         */
        this.extractDateOfIssuance = true;
        
        /** 
         * Defines if height of Austrian ID owner should be extracted 
         */
        this.extractHeight = true;
        
        /** 
         * Defines if issuing authority should be extracted 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if place of birth of Austrian ID owner should be extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if principal residence of Austrian ID owner should be extracted 
         */
        this.extractPrincipalResidence = true;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new AustriaIdBackRecognizerResult(nativeResult); }
    }
}