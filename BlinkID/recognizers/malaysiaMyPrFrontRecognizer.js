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
 * Result object for MalaysiaMyPrFrontRecognizer.
 */
export class MalaysiaMyPrFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The birth date of Malaysian MyPR owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * The city of Malaysian MyPR owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * The country code of Malaysian MyPR owner. 
         */
        this.countryCode = nativeResult.countryCode;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The address of Malaysian MyPR owner. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The full name of Malaysian MyPR owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The nric of Malaysian MyPR. 
         */
        this.nric = nativeResult.nric;
        
        /** 
         * The state of Malaysian MyPR owner. 
         */
        this.ownerState = nativeResult.ownerState;
        
        /** 
         * The religion of Malaysian MyPR owner. 
         */
        this.religion = nativeResult.religion;
        
        /** 
         * The sex of Malaysian MyPR owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The street of Malaysian MyPR owner. 
         */
        this.street = nativeResult.street;
        
        /** 
         * The zipcode of Malaysian MyPR owner. 
         */
        this.zipcode = nativeResult.zipcode;
        
    }
}

/**
 * Recognizer which can scan front side of Malaysian MyPR cards.
 */
export class MalaysiaMyPrFrontRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaMyPrFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if full name and address of Malaysian MyPR owner should be extracted.
         * 
         *  
         */
        this.extractFullNameAndAddress = true;
        
        /** 
         * Defines if religion of Malaysian MyPR owner should be extracted.
         * 
         *  
         */
        this.extractReligion = true;
        
        /** 
         * Defines if sex of Malaysian MyPR owner should be extracted.
         * 
         *  
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaMyPrFrontRecognizerResult(nativeResult); }
    }
}