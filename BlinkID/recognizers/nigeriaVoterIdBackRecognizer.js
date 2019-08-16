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
 * Result object for NigeriaVoterIdBackRecognizer.
 */
export class NigeriaVoterIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Nigeria Voter ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Nigeria Voter ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The first name of Nigeria Voter ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The raw barcode data of Nigeria Voter ID card. 
         */
        this.rawBarcodeData = nativeResult.rawBarcodeData;
        
        /** 
         * The sex of Nigeria Voter ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The surname of Nigeria Voter ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan back side of Nigeria voter ID cards.
 */
export class NigeriaVoterIdBackRecognizer extends Recognizer {
    constructor() {
        super('NigeriaVoterIdBackRecognizer');
        
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
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new NigeriaVoterIdBackRecognizerResult(nativeResult); }
    }
}