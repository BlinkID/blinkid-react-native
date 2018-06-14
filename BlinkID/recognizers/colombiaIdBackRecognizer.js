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
 * Result object for ColombiaIdBackRecognizer.
 */
export class ColombiaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * owner blood type 
         */
        this.bloodGroup = nativeResult.bloodGroup;
        
        /** 
         * owner date of birth 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * the Colombian ID document number number. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * owner fingerprint 
         */
        this.fingerprint = nativeResult.fingerprint;
        
        /** 
         * owner first name 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * owner first name 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * owner sex 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 *  Recognizer for reading Colombia ID Back document.

 */
export class ColombiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('ColombiaIdBackRecognizer');
        
        /** 
         * true if null quiet zone is allowed 
         */
        this.nullQuietZoneAllowed = true;
        
        /** 
         * true if should scan uncertain results 
         */
        this.scanUncertain = true;
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaIdBackRecognizerResult(nativeResult); }
    }
}