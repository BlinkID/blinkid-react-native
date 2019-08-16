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
 * Result object for MalaysiaMyKasFrontRecognizer.
 */
export class MalaysiaMyKasFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The birth date of Malaysian MyKAS owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * The city of Malaysian MyKAS owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * The date of expiry of Malaysian MyKAS. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The address of Malaysian MyKAS owner. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The full name of Malaysian MyKAS owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The nric of Malaysian MyKAS. 
         */
        this.nric = nativeResult.nric;
        
        /** 
         * The state of Malaysian MyKAS owner. 
         */
        this.ownerState = nativeResult.ownerState;
        
        /** 
         * The religion of Malaysian MyKAS owner. 
         */
        this.religion = nativeResult.religion;
        
        /** 
         * The sex of Malaysian MyKAS owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The street of Malaysian MyKAS owner. 
         */
        this.street = nativeResult.street;
        
        /** 
         * The zipcode of Malaysian MyKAS owner. 
         */
        this.zipcode = nativeResult.zipcode;
        
    }
}

/**
 * Recognizer which can scan front side of Malaysian MyKAS cards.
 */
export class MalaysiaMyKasFrontRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaMyKasFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if full name and address of Malaysian MyKAS owner should be extracted. 
         */
        this.extractFullNameAndAddress = true;
        
        /** 
         * Defines if religion of Malaysian MyKAS owner should be extracted. 
         */
        this.extractReligion = true;
        
        /** 
         * Defines if sex of Malaysian MyKAS owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaMyKasFrontRecognizerResult(nativeResult); }
    }
}