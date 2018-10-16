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
 * Result object for JordanCombinedRecognizer.
 */
export class JordanCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The Date Of Birth of the Jordan ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The Date of expiry of the Jordan ID. 
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
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * The Document Number of the Jordan ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
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
         * The issuer of the Jordan ID. 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise.
         * More specifically, true if MRZ complies with ICAO Document 9303 standard, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The Name of the Jordan ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The Document Number of the Jordan ID. 
         */
        this.nationalNumber = nativeResult.nationalNumber;
        
        /** 
         * The nationality of the Jordan ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The Sex of the Jordan ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Jordan ID Combined Recognizer.
 * 
 * Jordan ID Combined recognizer is used for scanning both front and back side of Jordan ID.
 */
export class JordanCombinedRecognizer extends Recognizer {
    constructor() {
        super('JordanCombinedRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from Jordan ID
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if owner's name should be extracted from Jordan ID
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if owner's sex should be extracted from Jordan ID
         * 
         *  
         */
        this.extractSex = true;
        
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
         * Whether or not recognition result should be signed.
         * 
         *  
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new JordanCombinedRecognizerResult(nativeResult); }
    }
}