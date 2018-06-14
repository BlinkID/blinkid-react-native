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
         * address of the Singapore ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * blood group of the Singapore ID owner. 
         */
        this.bloodGroup = nativeResult.bloodGroup;
        
        /** 
         * the card number of Singapore ID. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * the document date of issue of the Singapore ID 
         */
        this.dateOfIssue = nativeResult.dateOfIssue;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 *  Recognizer for back side of Singapore ID.

 */
export class SingaporeIdBackRecognizer extends Recognizer {
    constructor() {
        super('SingaporeIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if blood group of Singapore ID owner is being extracted 
         */
        this.extractBloodGroup = true;
        
        /** 
         * true if date of issue is being extracted from Singapore ID 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeIdBackRecognizerResult(nativeResult); }
    }
}