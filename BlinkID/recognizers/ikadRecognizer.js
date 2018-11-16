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
         * Personal address of the Malaysian iKad owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Malaysian iKad owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Employer of the Malaysian iKad owner. 
         */
        this.employer = nativeResult.employer;
        
        /** 
         * The expiry date of the Malaysian iKad 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Faculty address of the Malaysian iKad owner. 
         */
        this.facultyAddress = nativeResult.facultyAddress;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The name of the Malaysian iKad owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of the Malaysian iKad owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The passport number of Malaysian iKad. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * The sector of Malaysian iKad. 
         */
        this.sector = nativeResult.sector;
        
        /** 
         * Sex of the Malaysian iKad owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 *  Recognizer for reading Malaysian iKad.
 * 
 */
export class IkadRecognizer extends Recognizer {
    constructor() {
        super('IkadRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if address is being extracted 
         */
        this.extractAddress = true;
        
        /** 
         * True if employer is being extracted 
         */
        this.extractEmployer = true;
        
        /** 
         * True if expiry date is being extracted 
         */
        this.extractExpiryDate = true;
        
        /** 
         * True if faculty address is being extracted 
         */
        this.extractFacultyAddress = true;
        
        /** 
         * True if nationality is being extracted 
         */
        this.extractNationality = true;
        
        /** 
         * True if passport number is being extracted 
         */
        this.extractPassportNumber = true;
        
        /** 
         * True if sector is being extracted 
         */
        this.extractSector = true;
        
        /** 
         * True if sex is being extracted 
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new IkadRecognizerResult(nativeResult); }
    }
}