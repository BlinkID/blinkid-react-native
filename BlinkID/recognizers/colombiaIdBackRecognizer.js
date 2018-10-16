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
 * Result object for ColombiaIdBackRecognizer.
 */
export class ColombiaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The birth date of Colombia ID owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * The blood group of Colombia ID owner. 
         */
        this.bloodGroup = nativeResult.bloodGroup;
        
        /** 
         * The document number of Colombia ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The encoded fingerprint of Colombia ID owner. 
         */
        this.fingerprint = nativeResult.fingerprint;
        
        /** 
         * The first name of Colombia ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The last name of Colombia ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The sex of Colombia ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan back side of Colombian national ID cards.
 */
export class ColombiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('ColombiaIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Allow scanning PDF417 barcodes which don't have quiet zone 
         */
        this.nullQuietZoneAllowed = true;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Enable decoding of non-standard PDF417 barcodes, but without 
         */
        this.scanUncertain = true;
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaIdBackRecognizerResult(nativeResult); }
    }
}