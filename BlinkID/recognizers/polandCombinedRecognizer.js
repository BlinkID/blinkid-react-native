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
         * the date of birth of Polish ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * the document date of expiry of the Polish ID. 
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
         * the document number of the Polish ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the family name of the Polish ID owner. 
         */
        this.familyName = nativeResult.familyName;
        
        /** 
         *  back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         *  front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * the given names of the Polish ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * the issuer of the Polish ID. 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * true if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * the nationality of the Polish ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * the parents' given names of the Polish ID owner. 
         */
        this.parentsGivenNames = nativeResult.parentsGivenNames;
        
        /** 
         * personal number of the Polish ID owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * sex of the Polish ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * the surname of the Polish ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Polish ID.

 */
export class PolandCombinedRecognizer extends Recognizer {
    constructor() {
        super('PolandCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if date of birth is being extracted from ID 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if family name is being extracted from ID 
         */
        this.extractFamilyName = true;
        
        /** 
         * true if first name is being extracted from ID 
         */
        this.extractFirstName = true;
        
        /** 
         * true if last name is being extracted from ID 
         */
        this.extractLastName = true;
        
        /** 
         * true if parents' names is being extracted from ID 
         */
        this.extractParentsName = true;
        
        /** 
         * true if sex is being extracted from ID 
         */
        this.extractSex = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new PolandCombinedRecognizerResult(nativeResult); }
    }
}