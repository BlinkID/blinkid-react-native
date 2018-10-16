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
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The family name of Polish ID owner. 
         */
        this.familyName = nativeResult.familyName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The first name of the Polish ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The parents name of Polish ID owner. 
         */
        this.parentsGivenNames = nativeResult.parentsGivenNames;
        
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
 * Class for configuring Polish ID Front Recognizer.
 * 
 * Polish ID Front recognizer is used for scanning front side of Polish ID.
 */
export class PolandIdFrontRecognizer extends Recognizer {
    constructor() {
        super('PolandIdFrontRecognizer');
        
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
        
        this.createResultFromNative = function (nativeResult) { return new PolandIdFrontRecognizerResult(nativeResult); }
    }
}