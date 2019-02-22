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
         * The date of birth of Polish ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document date of expiry of the Polish ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Defines digital signature of recognition results. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Defines digital signature version. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Defines {true} if data from scanned parts/sides of the document match, 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * The document number of the Polish ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The family name of the Polish ID owner. 
         */
        this.familyName = nativeResult.familyName;
        
        /** 
         * Back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * Front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The given names of the Polish ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The issuer of the Polish ID. 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * True if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The nationality of the Polish ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The parents' given names of the Polish ID owner. 
         */
        this.parentsGivenNames = nativeResult.parentsGivenNames;
        
        /** 
         * Personal number of the Polish ID owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * Sex of the Polish ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The surname of the Polish ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Polish ID.
 * 
 */
export class PolandCombinedRecognizer extends Recognizer {
    constructor() {
        super('PolandCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if date of birth is being extracted from ID 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * True if family name is being extracted from ID 
         */
        this.extractFamilyName = true;
        
        /** 
         * True if given names is being extracted from ID 
         */
        this.extractGivenNames = true;
        
        /** 
         * True if parents' given names is being extracted from ID 
         */
        this.extractParentsGivenNames = true;
        
        /** 
         * True if sex is being extracted from ID 
         */
        this.extractSex = true;
        
        /** 
         * True if surname is being extracted from ID 
         */
        this.extractSurname = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new PolandCombinedRecognizerResult(nativeResult); }
    }
}