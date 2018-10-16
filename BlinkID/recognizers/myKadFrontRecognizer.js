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
         * Owner army number if written on MyTentera 
         */
        this.armyNumber = nativeResult.armyNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * NRIC number (National Registration Identity Card Number) 
         */
        this.nricNumber = nativeResult.nricNumber;
        
        /** 
         * Full owner address. 
         */
        this.ownerAddress = nativeResult.ownerAddress;
        
        /** 
         * Extracted city from the owner address. 
         */
        this.ownerAddressCity = nativeResult.ownerAddressCity;
        
        /** 
         * Extracted state from the owner address. 
         */
        this.ownerAddressState = nativeResult.ownerAddressState;
        
        /** 
         * Extracted street from the owner address. 
         */
        this.ownerAddressStreet = nativeResult.ownerAddressStreet;
        
        /** 
         * Extracted ZIP code from the owner address. 
         */
        this.ownerAddressZipCode = nativeResult.ownerAddressZipCode;
        
        /** 
         * Owner's date of birth if it is successfully converted to {Date} from date format: <code>YYMMDD</code>. 
         */
        this.ownerBirthDate = nativeResult.ownerBirthDate != null ? new Date(nativeResult.ownerBirthDate) : null;
        
        /** 
         * Owner full name 
         */
        this.ownerFullName = nativeResult.ownerFullName;
        
        /** 
         * Owner religion if written on MyKad 
         */
        this.ownerReligion = nativeResult.ownerReligion;
        
        /** 
         * Owner sex (M for male, F for female) 
         */
        this.ownerSex = nativeResult.ownerSex;
        
    }
}

/**
 *  Recognizer for reading front side of Malaysian MyKad.
 * 
 */
export class MyKadFrontRecognizer extends Recognizer {
    constructor() {
        super('MyKadFrontRecognizer');
        
        /** 
         * True if army number of Malaysian MyTentera owner is being extracted 
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
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MyKadFrontRecognizerResult(nativeResult); }
    }
}