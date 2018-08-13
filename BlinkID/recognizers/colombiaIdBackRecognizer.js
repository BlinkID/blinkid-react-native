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
         * owner’s date of birth 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * owner’s blood group 
         */
        this.bloodGroup = nativeResult.bloodGroup;
        
        /** 
         * the Colombian ID document number number. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * owner’s encoded fingerprint 
         */
        this.fingerprint = nativeResult.fingerprint;
        
        /** 
         * owner’s first name 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * owner’s last name 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * owner’s sex 
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
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Allow scanning PDF417 barcodes which don't have quiet zone 
         */
        this.nullQuietZoneAllowed = true;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Enable decoding of non-standard PDF417 barcodes, but without 
         */
        this.scanUncertain = true;
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaIdBackRecognizerResult(nativeResult); }
    }
}