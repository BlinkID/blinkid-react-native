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
 * Result object for MyTenteraRecognizer.
 */
export class MyTenteraRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Owner army number 
         */
        this.armyNumber = nativeResult.armyNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * NRIC number (National Registration Identity Card Number)
         * 
         *  @see https://en.wikipedia.org/wiki/Malaysian_identity_card#Structure_of_the_National_Registration_Identity_Card_Number_.28NRIC.29 
         */
        this.nricNumber = nativeResult.nricNumber;
        
        /** 
         * Owner address 
         */
        this.ownerAddress = nativeResult.ownerAddress;
        
        /** 
         * Owner address city. Determined from owner address. 
         */
        this.ownerAddressCity = nativeResult.ownerAddressCity;
        
        /** 
         * Owner address state. Determined from owner address. 
         */
        this.ownerAddressState = nativeResult.ownerAddressState;
        
        /** 
         * Owner street. Determined from owner address. 
         */
        this.ownerAddressStreet = nativeResult.ownerAddressStreet;
        
        /** 
         * Owner address Zip code. Determined from owner address. 
         */
        this.ownerAddressZipCode = nativeResult.ownerAddressZipCode;
        
        /** 
         * Owner birth date converted in NSDate object 
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
 * Class for configuring My Tentera Recognizer.
 * 
 * My Tentera recognizer is used for scanning My Tentera.
 */
export class MyTenteraRecognizer extends Recognizer {
    constructor() {
        super('MyTenteraRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if full name and address should be extracted from MyTentera
         * 
         *  
         */
        this.extractFullNameAndAddress = true;
        
        /** 
         * Defines if religion should be extracted from MyTentera
         * 
         *  
         */
        this.extractReligion = true;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Sets whether face image from ID card should be extracted
         * 
         *  
         */
        this.returnFaceImage = false;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MyTenteraRecognizerResult(nativeResult); }
    }
}