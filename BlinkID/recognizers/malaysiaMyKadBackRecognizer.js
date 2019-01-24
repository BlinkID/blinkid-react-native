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
 * Result object for MalaysiaMyKadBackRecognizer.
 */
export class MalaysiaMyKadBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Date of birth of MyKad owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Extended NRIC (National Registration Identity Card Number) of MyKad. 
         */
        this.extendedNric = nativeResult.extendedNric;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * NRIC (National Registration Identity Card Number) of MyKad. 
         */
        this.nric = nativeResult.nric;
        
        /** 
         * Old NRIC (National Registration Identity Card Number) of MyKad. 
         */
        this.oldNric = nativeResult.oldNric;
        
    }
}

/**
 * Recognizer for reading back side of Malaysian MyKad.
 */
export class MalaysiaMyKadBackRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaMyKadBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if old NRIC (National Registration Identity Card Number) of MyKad 
         */
        this.extractOldNric = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaMyKadBackRecognizerResult(nativeResult); }
    }
}