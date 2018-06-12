import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for SingaporeIdFrontRecognizer.
 */
export class SingaporeIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the card number of Singapore ID. 
         */
        this.cardNumber = nativeResult.cardNumber;
        
        /** 
         * country of birth of the Singapore ID owner 
         */
        this.countryOfBirth = nativeResult.countryOfBirth;
        
        /** 
         * the date of birth of Singapore ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * name of the Singapore ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * race of the Singapore ID owner. 
         */
        this.race = nativeResult.race;
        
        /** 
         * sex of the Singapore ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 *  Recognizer for front side of Singapore ID.

 */
export class SingaporeIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SingaporeIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if country of birth of Singapore ID owner is being extracted 
         */
        this.extractCountryOfBirth = true;
        
        /** 
         * true if date of birth of Singapore ID owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * true if race of Singapore ID owner is being extracted 
         */
        this.extractRace = true;
        
        /** 
         * true if sex of Singapore ID owner is being extracted 
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
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeIdFrontRecognizerResult(nativeResult); }
    }
}