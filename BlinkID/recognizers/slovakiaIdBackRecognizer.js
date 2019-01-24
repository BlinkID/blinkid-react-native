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
 * Result object for SlovakiaIdBackRecognizer.
 */
export class SlovakiaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Slovak ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The place of birth of Slovak ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The special remarks of Slovak ID owner. 
         */
        this.specialRemarks = nativeResult.specialRemarks;
        
        /** 
         * The surname at birth of Slovak ID owner. 
         */
        this.surnameAtBirth = nativeResult.surnameAtBirth;
        
    }
}

/**
 * Recognizer which can scan back side of Slovak ID cards.
 */
export class SlovakiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Slovak ID owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if place of birth of Slovak ID owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if special remarks of Slovak ID owner should be extracted. 
         */
        this.extractSpecialRemarks = true;
        
        /** 
         * Defines if surname at birth of Slovak ID owner should be extracted. 
         */
        this.extractSurnameAtBirth = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaIdBackRecognizerResult(nativeResult); }
    }
}