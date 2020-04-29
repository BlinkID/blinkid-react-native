import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date, 
    Point, 
    Quadrilateral,
    MrtdDocumentType, 
    MrzResult,
    DocumentFaceDetectorType,
    ImageExtensionFactors,
    DataMatchResult,
    Country,
    Region,
    Type,
    DocumentImageColorStatus,
    
} from '../types'

/**
 * Result object for IdBarcodeRecognizer.
 */
export class IdBarcodeRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * THe additional address information of the document owner. 
         */
        this.additionalAddressInformation = nativeResult.additionalAddressInformation;
        
        /** 
         * The additional name information of the document owner. 
         */
        this.additionalNameInformation = nativeResult.additionalNameInformation;
        
        /** 
         * The address of the document owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The current age of the document owner in years. It is calculated difference 
         */
        this.age = nativeResult.age;
        
        /** 
         * The format of the scanned barcode. 
         */
        this.barcodeType = nativeResult.barcodeType;
        
        /** 
         * The date of birth of the document owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the document. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the document. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The additional number of the document. 
         */
        this.documentAdditionalNumber = nativeResult.documentAdditionalNumber;
        
        /** 
         * The document number. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The document type deduced from the recognized barcode 
         */
        this.documentType = nativeResult.documentType;
        
        /** 
         * The employer of the document owner. 
         */
        this.employer = nativeResult.employer;
        
        /** 
         * The first name of the document owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * The full name of the document owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The issuing authority of the document. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the document owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The marital status of the document owner. 
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
        /** 
         * The nationality of the documet owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The personal identification number. 
         */
        this.personalIdNumber = nativeResult.personalIdNumber;
        
        /** 
         * The place of birth of the document owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The profession of the document owner. 
         */
        this.profession = nativeResult.profession;
        
        /** 
         * The race of the document owner. 
         */
        this.race = nativeResult.race;
        
        /** 
         * The raw bytes contained inside barcode. 
         */
        this.rawData = nativeResult.rawData;
        
        /** 
         * The religion of the document owner. 
         */
        this.religion = nativeResult.religion;
        
        /** 
         * The residential stauts of the document owner. 
         */
        this.residentialStatus = nativeResult.residentialStatus;
        
        /** 
         * The sex of the document owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * String representation of data inside barcode. 
         */
        this.stringData = nativeResult.stringData;
        
        /** 
         * True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e. 
         */
        this.uncertain = nativeResult.uncertain;
        
    }
}

/**
 * The ID Barcode Recognizer is used for scanning ID Barcode.
 */
export class IdBarcodeRecognizer extends Recognizer {
    constructor() {
        super('IdBarcodeRecognizer');
        
        this.createResultFromNative = function (nativeResult) { return new IdBarcodeRecognizerResult(nativeResult); }
    }
}