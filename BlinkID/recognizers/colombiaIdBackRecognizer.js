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
         * The blood group of the Colombian ID owner. 
         */
        this.bloodGroup = nativeResult.bloodGroup;
        
        /** 
         * The date of birth of the Colombian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document number of the Colombian ID card. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The fingerprint of the Colombian ID owner. 
         */
        this.fingerprint = nativeResult.fingerprint;
        
        /** 
         * The first name of the Colombian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * The last name of the Colombian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The sex of the Colombian ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Class for configuring Colombia ID Back Recognizer.
 * 
 * Colombia ID Back recognizer is used for scanning back side of Colombia ID.
 */
export class ColombiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('ColombiaIdBackRecognizer');
        
        /** 
         * Set this to true to scan barcodes which don't have quiet zone (white area) around it
         * 
         * Use only if necessary because it slows down the recognition process
         * 
         *  
         */
        this.nullQuietZoneAllowed = true;
        
        /** 
         * Set this to true to scan even barcode not compliant with standards
         * For example, malformed PDF417 barcodes which were incorrectly encoded
         * 
         * Use only if necessary because it slows down the recognition process
         * 
         *  
         */
        this.scanUncertain = true;
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaIdBackRecognizerResult(nativeResult); }
    }
}