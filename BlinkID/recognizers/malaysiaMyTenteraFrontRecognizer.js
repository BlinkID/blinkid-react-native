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
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The address of Malaysian MyTentera owner. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * Image of the full document 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if full name and address of Malaysian MyTentera owner should be extracted. 
         */
        this.extractFullNameAndAddress = true;
        
        /** 
         * Defines if religion of Malaysian MyTentera owner should be extracted. 
         */
        this.extractReligion = true;
        
        /** 
         * The DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaMyTenteraFrontRecognizerResult(nativeResult); }
    }
}