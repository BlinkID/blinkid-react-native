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
         * The date of birth of Polish ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The family name of Polish ID owner. 
         */
        this.familyName = nativeResult.familyName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given names of the Polish ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The parents' given names of the Polish ID owner. 
         */
        this.parentsGivenNames = nativeResult.parentsGivenNames;
        
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
 *  Recognizer which can scan front side of Polish national ID cards.
 * 
 */
export class PolandIdFrontRecognizer extends Recognizer {
    constructor() {
        super('PolandIdFrontRecognizer');
        
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
        
        this.createResultFromNative = function (nativeResult) { return new PolandIdFrontRecognizerResult(nativeResult); }
    }
}