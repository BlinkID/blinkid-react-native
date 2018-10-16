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
         * The address of Singapore ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The address change date, present if the address is on a sticker, of Singapore ID owner. 
         */
        this.addressChangeDate = nativeResult.addressChangeDate != null ? new Date(nativeResult.addressChangeDate) : null;
        
        /** 
         * The blood group of Singapore ID owner. 
         */
        this.bloodGroup = nativeResult.bloodGroup;
        
        /** 
         * The card number of Singapore ID. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * The date of issue of Singapore ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Recognizer which can scan back side of Singapore national ID cards.
 */
export class SingaporeIdBackRecognizer extends Recognizer {
    constructor() {
        super('SingaporeIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Singapore ID owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if adress change date, present on sticker, of Singapore ID owner should be extracted. 
         */
        this.extractAddressChangeDate = true;
        
        /** 
         * Defines if blood group of Singapore ID owner should be extracted. 
         */
        this.extractBloodGroup = true;
        
        /** 
         * Defines if date of issue of Singapore ID should be extracted. 
         */
        this.extractDateOfIssue = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeIdBackRecognizerResult(nativeResult); }
    }
}