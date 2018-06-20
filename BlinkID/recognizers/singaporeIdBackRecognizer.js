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
 * Result object for SingaporeIdBackRecognizer.
 */
export class SingaporeIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Singapore ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The blood group of the Singapore ID owner. 
         */
        this.bloodGroup = nativeResult.bloodGroup;
        
        /** 
         * The identity card number of the Singapore ID. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * The date of issue of the Singapore ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Class for configuring Singapore ID Back Recognizer.
 * 
 * Singapore ID Back recognizer is used for scanning back side of Singapore ID.
 */
export class SingaporeIdBackRecognizer extends Recognizer {
    constructor() {
        super('SingaporeIdBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         *  Defines if blood group of Singapore ID owner should be extracted
         * 
         *   
         */
        this.extractBloodGroup = true;
        
        /** 
         *  Defines if date of issue of Singapore ID owner should be extracted
         * 
         *   
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeIdBackRecognizerResult(nativeResult); }
    }
}