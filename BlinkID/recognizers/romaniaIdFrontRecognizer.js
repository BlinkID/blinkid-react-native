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
 * Result object for RomaniaIdFrontRecognizer.
 */
export class RomaniaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Address of the Romanian ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The card number of Romanian ID. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * The CNP of Romanian ID owner. 
         */
        this.cnp = nativeResult.cnp;
        
        /** 
         * Defines holder's date of birth if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Defines date of expiry if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Defines document code. Document code contains two characters. For MRTD the first character shall 
         */
        this.documentCode = nativeResult.documentCode;
        
        /** 
         * Defines document number. Document number contains up to 9 characters. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Romanian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The identity card series of Romanian ID. 
         */
        this.idSeries = nativeResult.idSeries;
        
        /** 
         * Issuing authority the Romanian ID. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * Defines three-letter or two-letter code which indicate the issuing State. Three-letter codes are based 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * The last name of the Romanian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * Defines true if Machine Readable Zone has been parsed, false otherwise. 
         */
        this.mrzParsed = nativeResult.mrzParsed;
        
        /** 
         * Defines the entire Machine Readable Zone text from ID. This text is usually used for parsing 
         */
        this.mrzText = nativeResult.mrzText;
        
        /** 
         * Defines true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * Defines nationality of the holder represented by a three-letter or two-letter code. Three-letter 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * Nationality of the Romanian ID owner which is extracted from the non MRZ field. 
         */
        this.nonMRZNationality = nativeResult.nonMRZNationality;
        
        /** 
         * Sex of the Romanian ID owner which is extracted from the non MRZ field. 
         */
        this.nonMRZSex = nativeResult.nonMRZSex;
        
        /** 
         * Defines first optional data.<code>null</code> or empty string if not available. 
         */
        this.opt1 = nativeResult.opt1;
        
        /** 
         * Defines second optional data.<code>null</code> or empty string if not available. 
         */
        this.opt2 = nativeResult.opt2;
        
        /** 
         * The parent names of Romanian ID owner. 
         */
        this.parentNames = nativeResult.parentNames;
        
        /** 
         * Place of birth of the Romanian ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Defines the primary indentifier. If there is more than one component, they are separated with space. 
         */
        this.primaryId = nativeResult.primaryId;
        
        /** 
         * Defines the secondary identifier. If there is more than one component, they are separated with space. 
         */
        this.secondaryId = nativeResult.secondaryId;
        
        /** 
         * Defines sex of the card holder. Sex is specified by use of the single initial, 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The valid from date of Romanian ID. 
         */
        this.validFrom = nativeResult.validFrom != null ? new Date(nativeResult.validFrom) : null;
        
        /** 
         * The valid until date of Romanian ID. 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
    }
}

/**
 *  Recognizer for front side of Romanian ID.
 * 
 */
export class RomaniaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('RomaniaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if address is being extracted from Romanian ID 
         */
        this.extractAddress = true;
        
        /** 
         * True if first name is being extracted from Romanian ID 
         */
        this.extractFirstName = true;
        
        /** 
         * True if issuing authority is being extracted from Romanian ID 
         */
        this.extractIssuedBy = true;
        
        /** 
         * True if last name is being extracted from Romanian ID 
         */
        this.extractLastName = true;
        
        /** 
         * True if sex field outside of the MRZ is being extracted from Romanian ID 
         */
        this.extractNonMRZSex = true;
        
        /** 
         * True if place of birth is being extracted from Romanian ID 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * True if valid from is being extracted from Romanian ID 
         */
        this.extractValidFrom = true;
        
        /** 
         * True if valid until is being extracted from Romanian ID 
         */
        this.extractValidUntil = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new RomaniaIdFrontRecognizerResult(nativeResult); }
    }
}