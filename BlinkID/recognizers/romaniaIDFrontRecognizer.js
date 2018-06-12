import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for RomaniaIdFrontRecognizer.
 */
export class RomaniaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * address of the Romanian ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * Defines alien number.<code>null</code> or empty string if not available. 
         */
        this.alienNumber = nativeResult.alienNumber;
        
        /** 
         * Defines application receipt number.<code>null</code> or empty string if not available. 
         */
        this.applicationReceiptNumber = nativeResult.applicationReceiptNumber;
        
        /** 
         * the CNP of Romanian ID owner. 
         */
        this.cNP = nativeResult.cNP;
        
        /** 
         * Defines holder's date of birth if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         * Defines date of expiry if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry;
        
        /** 
         * Defines document code. Document code contains two characters. For MRTD the first character shall 
         */
        this.documentCode = nativeResult.documentCode;
        
        /** 
         * Defines document number. Document number contains up to 9 characters. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Defines the MRTD document type of recognized document. 
         */
        this.documentType = nativeResult.documentType;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Romanian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the identity card number of Romanian ID. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * the identity card series of Romanian ID. 
         */
        this.identityCardSeries = nativeResult.identityCardSeries;
        
        /** 
         * Defines immigrant case number.<code>null</code> or empty string if not available. 
         */
        this.immigrantCaseNumber = nativeResult.immigrantCaseNumber;
        
        /** 
         * issuing authority the Romanian ID. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * Defines three-letter or two-letter code which indicate the issuing State. Three-letter codes are based 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * the last name of the Romanian ID owner. 
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
         * nationality of the Romanian ID owner which is extracted from the non MRZ field. 
         */
        this.nonMRZNationality = nativeResult.nonMRZNationality;
        
        /** 
         * sex of the Romanian ID owner which is extracted from the non MRZ field. 
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
         * the parent names of Romanian ID owner. 
         */
        this.parentNames = nativeResult.parentNames;
        
        /** 
         * place of birth of the Romanian ID owner. 
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
         * the valid from date of Romanian ID. 
         */
        this.validFrom = nativeResult.validFrom;
        
        /** 
         * the valid until date of Romanian ID. 
         */
        this.validUntil = nativeResult.validUntil;
        
    }
}

/**
 *  Recognizer for front side of Romanian ID.

 */
export class RomaniaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('RomaniaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if address is being extracted from Romanian ID 
         */
        this.extractAddress = true;
        
        /** 
         * true if first name is being extracted from Romanian ID 
         */
        this.extractFirstName = true;
        
        /** 
         * true if issuing authority is being extracted from Romanian ID 
         */
        this.extractIssuedBy = true;
        
        /** 
         * true if last name is being extracted from Romanian ID 
         */
        this.extractLastName = true;
        
        /** 
         * true if sex field outside of the MRZ is being extracted from Romanian ID 
         */
        this.extractNonMRZSex = true;
        
        /** 
         * true if place of birth is being extracted from Romanian ID 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * true if valid from is being extracted from Romanian ID 
         */
        this.extractValidFrom = true;
        
        /** 
         * true if valid until is being extracted from Romanian ID 
         */
        this.extractValidUntil = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new RomaniaIdFrontRecognizerResult(nativeResult); }
    }
}