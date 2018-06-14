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
 * Result object for MyKadFrontRecognizer.
 */
export class MyKadFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * owner army number if written on MyTentera 
         */
        this.armyNumber = nativeResult.armyNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * NRIC number (National Registration Identity Card Number) 
         */
        this.nricNumber = nativeResult.nricNumber;
        
        /** 
         * full owner address. 
         */
        this.ownerAddress = nativeResult.ownerAddress;
        
        /** 
         * extracted city from the owner address. 
         */
        this.ownerAddressCity = nativeResult.ownerAddressCity;
        
        /** 
         * extracted state from the owner address. 
         */
        this.ownerAddressState = nativeResult.ownerAddressState;
        
        /** 
         * extracted street from the owner address. 
         */
        this.ownerAddressStreet = nativeResult.ownerAddressStreet;
        
        /** 
         * extracted ZIP code from the owner address. 
         */
        this.ownerAddressZipCode = nativeResult.ownerAddressZipCode;
        
        /** 
         * owner's date of birth if it is successfully converted to {Date} from date format: <code>YYMMDD</code>. 
         */
        this.ownerBirthDate = nativeResult.ownerBirthDate;
        
        /** 
         * owner full name 
         */
        this.ownerFullName = nativeResult.ownerFullName;
        
        /** 
         * owner religion if written on MyKad 
         */
        this.ownerReligion = nativeResult.ownerReligion;
        
        /** 
         * owner sex (M for male, F for female) 
         */
        this.ownerSex = nativeResult.ownerSex;
        
    }
}

/**
 *  Recognizer for reading front side of Malaysian MyKad.

 */
export class MyKadFrontRecognizer extends Recognizer {
    constructor() {
        super('MyKadFrontRecognizer');
        
        /** 
         * true if army number of Malaysian MyTentera owner is being extracted 
         */
        this.extractArmyNumber = false;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MyKadFrontRecognizerResult(nativeResult); }
    }
}