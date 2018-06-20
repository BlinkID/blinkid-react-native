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
 * Result object for MrtdCombinedRecognizer.
 */
export class MrtdCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Alien number. Returns nil or empty string if not available.
         * Exists only on US Green Cards. To see which document was scanned use documentType property. 
         */
        this.alienNumber = nativeResult.alienNumber;
        
        /** 
         * Application receipt number. Returns nil or empty string if not available.
         * Exists only on US Green Cards. To see which document was scanned use documentType property. 
         */
        this.applicationReceiptNumber = nativeResult.applicationReceiptNumber;
        
        /** 
         * Holder's date of birth. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Date of expiry of the document. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Digital signature of the recognition result. Available only if enabled with signResult property. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Version of the digital signature. Available only if enabled with signResult property. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * The document code. Document code contains two characters. For MRTD the first character
         * shall be A, C or I. The second character shall be discretion of the issuing State or organization
         * except that V shall not be used, and C shall not be used after A except in the crew member
         * certificate. On machine-readable passports (MRP) first character shall be P to designate an MRP.
         * One additional letter may be used, at the discretion of the issuing State or organization,
         * to designate a particular MRP. If the second character position is not used for this purpose, it
         * shall be filled by the filter character <. 
         */
        this.documentCode = nativeResult.documentCode;
        
        /** 
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * Unique number of the document. Document number contains up to 9 characters.
         * Element does not exist on US Green Card. To see which document was scanned use documentType property. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Returns the MRTD document type of recognized document. 
         */
        this.documentType = nativeResult.documentType;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * back side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * front side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * Immigrant case number. Returns nil or empty string if not available.
         * Exists only on US Green Cards. To see which document was scanned use documentType property. 
         */
        this.immigrantCaseNumber = nativeResult.immigrantCaseNumber;
        
        /** 
         * Three-letter code which indicate the issuing State.
         * Three-letter codes are based on Alpha-3 codes for entities specified in
         * ISO 3166-1, with extensions for certain States. 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * face image from the document if enabled with returnMrzImage property. 
         */
        this.mrzImage = nativeResult.mrzImage;
        
        /** 
         * Boolean value which denotes that MRTD result is successfully parsed. When the result is parsed, all
         * properties below are present.
         * 
         * If in the PPMrtdRecognizerSettings you specified allowUnparsedResults = true, then it can happen that
         * MRTDRecognizerResult is not parsed. When this happens, this property will be equal to true.
         * 
         * In that case, you can use rawOcrResult property to obtain the raw result of the OCR process, so you can
         * implement MRTD parsing in your application.
         * 
         *  @return true if MRTD Recognizer result was successfully parsed and all the fields are extracted. false otherwise. 
         */
        this.mrzParsed = nativeResult.mrzParsed;
        
        /** 
         * The entire Machine Readable Zone text from ID. This text is usually used for parsing
         * other elements. 
         */
        this.mrzText = nativeResult.mrzText;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise.
         * More specifically, true if MRZ complies with ICAO Document 9303 standard, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * Nationality of the holder represented by a three-letter code. Three-letter codes are based
         * on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain States. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * First optional data. Returns nil or empty string if not available.
         * Element does not exist on US Green Card. To see which document was scanned use documentType property. 
         */
        this.opt1 = nativeResult.opt1;
        
        /** 
         * Second optional data. Returns nil or empty string if not available.
         * Element does not exist on Passports and Visas. To see which document was scanned use documentType property. 
         */
        this.opt2 = nativeResult.opt2;
        
        /** 
         * Returns the primary indentifier. If there is more than one component, they are separated with space.
         * 
         *  @return primary id of a card holder. 
         */
        this.primaryId = nativeResult.primaryId;
        
        /** 
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * Returns the secondary identifier. If there is more than one component, they are separated with space.
         * 
         *  @return secondary id of a card holder 
         */
        this.secondaryId = nativeResult.secondaryId;
        
        /** 
         * Sex of the card holder. Sex is specified by use of the single initial, capital
         * letter F for female, M for male or < for unspecified. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * MRTD Combined recognizer
 * 
 * MRTD Combined recognizer is used for scanning both front and back side of generic IDs.
 */
export class MrtdCombinedRecognizer extends Recognizer {
    constructor() {
        super('MrtdCombinedRecognizer');
        
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
         * Sets whether MRZ image from ID card should be extracted
         * 
         *  
         */
        this.returnMrzImage = false;
        
        /** 
         * Whether or not recognition result should be signed.
         * 
         *  
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new MrtdCombinedRecognizerResult(nativeResult); }
    }
}