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
    DocumentImageMoireStatus,
    
    
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
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown. 
         */
        this.age = nativeResult.age;
        
        /** 
         * Type of the barcode scanned
         * 
         *  @return Type of the barcode 
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
         * 
         *  @return Type of the document 
         */
        this.documentType = nativeResult.documentType;
        
        /** 
         * The employer of the document owner. 
         */
        this.employer = nativeResult.employer;
        
        /** 
         * The additional privileges granted to the driver license owner. 
         */
        this.endorsements = nativeResult.endorsements;
        
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
         * Byte array with result of the scan 
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
         * The restrictions to driving privileges for the driver license owner. 
         */
        this.restrictions = nativeResult.restrictions;
        
        /** 
         * The sex of the document owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Retrieves string content of scanned data 
         */
        this.stringData = nativeResult.stringData;
        
        /** 
         * Flag indicating uncertain scanning data
         * E.g obtained from damaged barcode. 
         */
        this.uncertain = nativeResult.uncertain;
        
        /** 
         * The type of vehicle the driver license owner has privilege to drive. 
         */
        this.vehicleClass = nativeResult.vehicleClass;
        
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