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
 * Result object for MalaysiaMyTenteraFrontRecognizer.
 */
export class MalaysiaMyTenteraFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The army number of Malaysian MyTentera owner. 
         */
        this.armyNumber = nativeResult.armyNumber;
        
        /** 
         * The birth date of Malaysian MyTentera owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * The city of Malaysian MyTentera owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The address of Malaysian MyTentera owner. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The full name of Malaysian MyTentera owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The nric of Malaysian MyTentera. 
         */
        this.nric = nativeResult.nric;
        
        /** 
         * The state of Malaysian MyTentera owner. 
         */
        this.ownerState = nativeResult.ownerState;
        
        /** 
         * The religion of Malaysian MyTentera owner. 
         */
        this.religion = nativeResult.religion;
        
        /** 
         * The sex of Malaysian MyTentera owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The street of Malaysian MyTentera owner. 
         */
        this.street = nativeResult.street;
        
        /** 
         * The zipcode of Malaysian MyTentera owner. 
         */
        this.zipcode = nativeResult.zipcode;
        
    }
}

/**
 * Recognizer which can scan front side of Malaysian MyTentera cards.
 */
export class MalaysiaMyTenteraFrontRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaMyTenteraFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if full name and address of Malaysian MyTentera owner should be extracted.
         * 
         *  
         */
        this.extractFullNameAndAddress = true;
        
        /** 
         * Defines if religion of Malaysian MyTentera owner should be extracted.
         * 
         *  
         */
        this.extractReligion = true;
        
        /** 
         * Property for setting DPI for face images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.faceImageDpi = 250;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaMyTenteraFrontRecognizerResult(nativeResult); }
    }
}