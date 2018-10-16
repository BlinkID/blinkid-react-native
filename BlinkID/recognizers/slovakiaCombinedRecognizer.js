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
 * Result object for SlovakiaCombinedRecognizer.
 */
export class SlovakiaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Slovak ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Slovak ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Slovak ID owner 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Slovak ID owner 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Digital signature of the recognition result. Available only if enabled with signResult property. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Version of the digital signature. Available only if enabled with signResult property. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * The identity card number of Slovak ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Slovak ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * back side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * front side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The issuing authority of Slovak ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The last name of the Slovak ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise.
         * More specifically, true if MRZ complies with ICAO Document 9303 standard, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The nationality of the Slovak ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The PIN of the Slovak ID owner. 
         */
        this.personalIdentificationNumber = nativeResult.personalIdentificationNumber;
        
        /** 
         * The place of birth of the Slovak ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Slovak ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The special remarks of Slovak ID. 
         */
        this.specialRemarks = nativeResult.specialRemarks;
        
        /** 
         * The surname at birth of Slovak ID. 
         */
        this.surnameAtBirth = nativeResult.surnameAtBirth;
        
    }
}

/**
 * Slovak ID Combined Recognizer.
 * 
 * Slovak ID Combined recognizer is used for scanning both front and back side of Slovak ID.
 */
export class SlovakiaCombinedRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaCombinedRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if ID's date of expiry should be extracted
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if ID's date of issue should be extracted
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if issuing document number should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if issuing authority should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractIssuedBy = true;
        
        /** 
         * Defines if owner's nationality should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if owner's place of birth should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if owner's sex should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractSex = true;
        
        /** 
         * Defines if owner's special remarks should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractSpecialRemarks = true;
        
        /** 
         * Defines if owner's surname at birth should be extracted from Slovakian ID
         * 
         *  
         */
        this.extractSurnameAtBirth = true;
        
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
        
        /** 
         * Sets whether signature image from ID card should be extracted.
         * 
         *  
         */
        this.returnSignatureImage = false;
        
        /** 
         * Whether or not recognition result should be signed.
         * 
         *  
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaCombinedRecognizerResult(nativeResult); }
    }
}