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
 * Result object for PolandCombinedRecognizer.
 */
export class PolandCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Polish ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document date of expiry of the Polish ID 
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
         * The document number on Polish ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The family name of Polish ID owner. 
         */
        this.familyName = nativeResult.familyName;
        
        /** 
         * back side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * front side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The first name of the Polish ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The issuer of Polish ID. 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise.
         * More specifically, true if MRZ complies with ICAO Document 9303 standard, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The nationality of the Polish ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The parents name of Polish ID owner. 
         */
        this.parentsGivenNames = nativeResult.parentsGivenNames;
        
        /** 
         * The personal number of Polish ID. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Polish ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The last name of the Polish ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Polish ID Combined Recognizer.
 * 
 * Polish ID Combined recognizer is used for scanning both front and back side of Polish ID.
 */
export class PolandCombinedRecognizer extends Recognizer {
    constructor() {
        super('PolandCombinedRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of expiry should be extracted from Polish ID
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry should be extracted from Polish ID
         * 
         *  
         */
        this.extractFamilyName = true;
        
        /** 
         * Defines if date of birth of Polish ID owner should be extracted
         * 
         *  
         */
        this.extractGivenNames = true;
        
        /** 
         * Defines if date of expiry should be extracted from Polish ID
         * 
         *  
         */
        this.extractParentsGivenNames = true;
        
        /** 
         *  Defines if sex of Polish ID owner should be extracted
         * 
         *   
         */
        this.extractSex = true;
        
        /** 
         * Defines if citizenship of Polish ID owner should be extracted
         * 
         *  
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new PolandCombinedRecognizerResult(nativeResult); }
    }
}