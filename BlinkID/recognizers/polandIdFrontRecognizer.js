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
 * Result object for PolandIdFrontRecognizer.
 */
export class PolandIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the date of birth of Polish ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the family name of Polish ID owner. 
         */
        this.familyName = nativeResult.familyName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the given names of the Polish ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * the parents' given names of the Polish ID owner. 
         */
        this.parentsGivenNames = nativeResult.parentsGivenNames;
        
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
 *  Recognizer which can scan front side of Polish national ID cards.

 */
export class PolandIdFrontRecognizer extends Recognizer {
    constructor() {
        super('PolandIdFrontRecognizer');
        
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
        
        this.createResultFromNative = function (nativeResult) { return new PolandIdFrontRecognizerResult(nativeResult); }
    }
}