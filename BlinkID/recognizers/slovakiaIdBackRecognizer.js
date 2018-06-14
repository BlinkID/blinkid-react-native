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
 * Result object for SlovakiaIdBackRecognizer.
 */
export class SlovakiaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the address of the card holder. 
         */
        this.address = nativeResult.address;
        
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
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Defines three-letter or two-letter code which indicate the issuing State. Three-letter codes are based 
         */
        this.issuer = nativeResult.issuer;
        
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
         * Defines first optional data.<code>null</code> or empty string if not available. 
         */
        this.opt1 = nativeResult.opt1;
        
        /** 
         * Defines second optional data.<code>null</code> or empty string if not available. 
         */
        this.opt2 = nativeResult.opt2;
        
        /** 
         * place of birth of the card holder. 
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
         * special remarks concerning the card holder. 
         */
        this.specialRemarks = nativeResult.specialRemarks;
        
        /** 
         * surname at birth of the card holder. 
         */
        this.surnameAtBirth = nativeResult.surnameAtBirth;
        
    }
}

/**
 *  Recognizer for back side of Slovak ID.

 */
export class SlovakiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('SlovakiaIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if place of birth is being extracted from ID 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * true if special remarks are being extracted from ID 
         */
        this.extractSpecialRemarks = true;
        
        /** 
         * true if surname at birth is being extracted from ID 
         */
        this.extractSurnameAtBirth = true;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SlovakiaIdBackRecognizerResult(nativeResult); }
    }
}