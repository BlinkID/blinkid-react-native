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
         * The Singapore ID owner's address 
         */
        this.address = nativeResult.address;
        
        /** 
         * The Singapore ID owner's address change date, present if the address is on a sticker 
         */
        this.addressChangeDate = nativeResult.addressChangeDate != null ? new Date(nativeResult.addressChangeDate) : null;
        
        /** 
         * The Singapore ID owner's blood type 
         */
        this.bloodType = nativeResult.bloodType;
        
        /** 
         * The Singapore ID card number 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * The Singapore ID's date of issue 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Recognizer used for scanning the back side of Singapore IDs
 */
export class SingaporeIdBackRecognizer extends Recognizer {
    constructor() {
        super('SingaporeIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if Singapore ID owner's address should be extracted 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if Singapore ID owner's address change date on sticker should be extracted 
         */
        this.extractAddressChangeDate = false;
        
        /** 
         * Defines if Singapore ID owner's blood type should be extracted 
         */
        this.extractBloodType = true;
        
        /** 
         * Defines if Singapore ID's date of issue should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeIdBackRecognizerResult(nativeResult); }
    }
}