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
 * Result object for MalaysiaIkadFrontRecognizer.
 */
export class MalaysiaIkadFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Address of Malaysian iKad owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Malaysian iKad owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Date of expiry of Malaysian iKad card. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Employer of Malaysian iKad owner. 
         */
        this.employer = nativeResult.employer;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Faculty address in which Malaysian iKad owner currently studies. 
         */
        this.facultyAddress = nativeResult.facultyAddress;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Gender of Malaysian iKad owner. 
         */
        this.gender = nativeResult.gender;
        
        /** 
         * The name of Malaysian iKad owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * Nationality of Malaysian iKad owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The passport number of Malaysian iKad owners passport. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * Sector in which Malaysian iKad owner works. 
         */
        this.sector = nativeResult.sector;
        
    }
}

/**
 * Recognizer which can scan front side of Malaysia iKad card.
 */
export class MalaysiaIkadFrontRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaIkadFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Malaysian iKad owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of expiry of Malaysian iKad card should be extracted.
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if employer of Malaysian iKad owner should be extracted.
         * 
         *  
         */
        this.extractEmployer = true;
        
        /** 
         * Defines if address of faculty, in which Malaysian iKad owner currently studies, should be extracted.
         * 
         *  
         */
        this.extractFacultyAddress = true;
        
        /** 
         * Defines if gender of Malaysian iKad owner should be extracted.
         * 
         *  
         */
        this.extractGender = true;
        
        /** 
         * Defines if (full) name of Malaysian iKad owner should be extracted.
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of Malaysian iKad owner should be extracted.
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if passport number of Malaysian iKad owners passport should be extracted.
         * 
         *  
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if sector in which  Malaysian iKad owner works should be extracted.
         * 
         *  
         */
        this.extractSector = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaIkadFrontRecognizerResult(nativeResult); }
    }
}