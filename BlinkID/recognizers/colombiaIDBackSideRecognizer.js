import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for ColombiaIDBackSideRecognizer.
 */
export class ColombiaIDBackSideRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the Colombian ID document number number. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * owner blood type 
         */
        this.ownerBloodGroup = nativeResult.ownerBloodGroup;
        
        /** 
         * owner date of birth 
         */
        this.ownerDateOfBirth = nativeResult.ownerDateOfBirth;
        
        /** 
         * owner fingerprint 
         */
        this.ownerFingerprint = nativeResult.ownerFingerprint;
        
        /** 
         * owner first name 
         */
        this.ownerFirsName = nativeResult.ownerFirsName;
        
        /** 
         * owner first name 
         */
        this.ownerLastName = nativeResult.ownerLastName;
        
        /** 
         * owner sex 
         */
        this.ownerSex = nativeResult.ownerSex;
        
    }
}

/**
 *  Recognizer for reading Colombia ID Back document.

 */
export class ColombiaIDBackSideRecognizer extends Recognizer {
    constructor() {
        super('ColombiaIDBackSideRecognizer');
        
        /** 
         * true if null quiet zone is allowed 
         */
        this.nullQuietZoneAllowed = true;
        
        /** 
         * true if should scan uncertain results 
         */
        this.scanUncertain = true;
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaIDBackSideRecognizerResult(nativeResult); }
    }
}