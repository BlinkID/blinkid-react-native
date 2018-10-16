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
 * Result object for SloveniaIdBackRecognizer.
 */
export class SloveniaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the card holder. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The issuing authority of Slovenian ID. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * Defines holder's date of birth if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Defines date of expiry if it is successfully converted to result from MRZ date format: <code>YYMMDD</code>. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Defines document code. Document code contains two characters. For MRTD the first character shall 
         */
        this.documentCode = nativeResult.documentCode;
        
        /** 
         * Defines document number. Document number contains up to 9 characters. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Image of the full document 
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
        
    }
}

/**
 *  Recognizer for the back side of Slovenian ID.
 * 
 */
export class SloveniaIdBackRecognizer extends Recognizer {
    constructor() {
        super('SloveniaIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if issuing authority is being extracted from Slovenian ID 
         */
        this.extractAuthority = true;
        
        /** 
         * True if date of issue is being extracted from Slovenian ID 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SloveniaIdBackRecognizerResult(nativeResult); }
    }
}