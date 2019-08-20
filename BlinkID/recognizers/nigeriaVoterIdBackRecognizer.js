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
         * full document image if enabled with returnFullDocumentImage property. 
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
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         *  
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new NigeriaVoterIdBackRecognizerResult(nativeResult); }
    }
}