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
 * Result object for MalaysiaMyKadFrontRecognizer.
 */
export class MalaysiaMyKadFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The birth date of Malaysian MyKad owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * The city of Malaysian MyKad owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The address of Malaysian MyKad owner. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The full name of Malaysian MyKad owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The nric of Malaysian IDMyKad 
         */
        this.nric = nativeResult.nric;
        
        /** 
         * The state of Malaysian MyKad owner. 
         */
        this.ownerState = nativeResult.ownerState;
        
        /** 
         * The religion of Malaysian MyKad owner. 
         */
        this.religion = nativeResult.religion;
        
        /** 
         * The sex of Malaysian MyKad owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The street of Malaysian MyKad owner. 
         */
        this.street = nativeResult.street;
        
        /** 
         * The zipcode of Malaysian MyKad owner. 
         */
        this.zipcode = nativeResult.zipcode;
        
    }
}

/**
 * Recognizer which can scan front side of Malaysian MyKad cards.
 */
export class MalaysiaMyKadFrontRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaMyKadFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if full name and address of Malaysian MyKad owner should be extracted. 
         */
        this.extractFullNameAndAddress = true;
        
        /** 
         * Defines if religion of Malaysian MyKad owner should be extracted. 
         */
        this.extractReligion = true;
        
        /** 
         * Defines if sex of Malaysian MyKad owner should be extracted. 
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaMyKadFrontRecognizerResult(nativeResult); }
    }
}