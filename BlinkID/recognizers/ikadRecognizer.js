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
 * Result object for IkadRecognizer.
 */
export class IkadRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the iKad owner 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of iKad owner, parsed in NSDate object 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The employer of the iKad owner 
         */
        this.employer = nativeResult.employer;
        
        /** 
         * The expiry date of the iKad, parsed in NSDate object 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The faculty address of the iKad owner 
         */
        this.facultyAddress = nativeResult.facultyAddress;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The name of the iKad owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of the iKad owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The passport number of the iKad owner. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * The sector of the iKad owner 
         */
        this.sector = nativeResult.sector;
        
        /** 
         * The sex of the iKad owner 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Class for configuring iKad Recognizer.
 * 
 * iKad recognizer is used for scanning iKad.
 */
export class IkadRecognizer extends Recognizer {
    constructor() {
        super('IkadRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's address should be extracted from iKad
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if owner's employer should be extracted from iKad
         * 
         *  
         */
        this.extractEmployer = true;
        
        /** 
         * Defines if expiry date should be extracted from iKad
         * 
         *  
         */
        this.extractExpiryDate = true;
        
        /** 
         * Defines if owner's faculty address should be extracted from iKad
         * 
         *  
         */
        this.extractFacultyAddress = true;
        
        /** 
         * Defines if date of expiry should be extracted from iKad
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if owner's passport number should be extracted from iKad
         * 
         *  
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if owner's sector should be extracted from iKad
         * 
         *  
         */
        this.extractSector = true;
        
        /** 
         * Defines if owner's sex should be extracted from iKad
         * 
         *  
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new IkadRecognizerResult(nativeResult); }
    }
}