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
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Faculty address in which Malaysian iKad owner currently studies. 
         */
        this.facultyAddress = nativeResult.facultyAddress;
        
        /** 
         * Image of the full document 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Malaysian iKad owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of expiry of Malaysian iKad card should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if employer of Malaysian iKad owner should be extracted. 
         */
        this.extractEmployer = true;
        
        /** 
         * Defines if address of faculty, in which Malaysian iKad owner currently studies, should be extracted. 
         */
        this.extractFacultyAddress = true;
        
        /** 
         * Defines if gender of Malaysian iKad owner should be extracted. 
         */
        this.extractGender = true;
        
        /** 
         * Defines if (full) name of Malaysian iKad owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of Malaysian iKad owner should be extracted. 
         */
        this.extractNationality = true;
        
        /** 
         * Defines if passport number of Malaysian iKad owners passport should be extracted. 
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if sector in which  Malaysian iKad owner works should be extracted. 
         */
        this.extractSector = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaIkadFrontRecognizerResult(nativeResult); }
    }
}