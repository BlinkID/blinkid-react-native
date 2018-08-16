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
         * The address of the back side of the Singapore Id owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The address Change Date of the back side of the Singapore Id owner. 
         */
        this.addressChangeDate = nativeResult.addressChangeDate != null ? new Date(nativeResult.addressChangeDate) : null;
        
        /** 
         * The blood Type of the back side of the Singapore Id owner. 
         */
        this.bloodType = nativeResult.bloodType;
        
        /** 
         * The card Number of the back side of the Singapore Id owner. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * The date Of Issue of the back side of the Singapore Id owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
    }
}

/**
 * Class for configuring Singapore Id Back Recognizer.
 * 
 * Singapore Id Back recognizer is used for scanning back side of the Singapore Id.
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
         * Defines if owner's address should be extracted from back side of the Singapore Id
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if owner's address change date should be extracted from back side of the Singapore Id
         * 
         *  
         */
        this.extractAddressChangeDate = false;
        
        /** 
         * Defines if owner's blood type should be extracted from back side of the Singapore Id
         * 
         *  
         */
        this.extractBloodType = true;
        
        /** 
         * Defines if owner's date of issue should be extracted from back side of the Singapore Id
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeIdBackRecognizerResult(nativeResult); }
    }
}