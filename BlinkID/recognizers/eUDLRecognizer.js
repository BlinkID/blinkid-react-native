import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for EUDLRecognizer.
 */
export class EUDLRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * the address of the Driver's Licence owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * the driver number. 
         */
        this.driverNumber = nativeResult.driverNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * the first name of the Driver's Licence owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * document issuing authority. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * the last name of the Driver's Licence owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * the personal number of the Driver's Licence owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         * the place of birth of Driver's Licence owner 
         */
        this.birthPlace = nativeResult.birthPlace;
        
        /** 
         * the country where the driver's license has been issued. 
         */
        this.country = nativeResult.country;
        
    }
}

/**
 * Recognizer for scanning driver's licence of several european countries
 */
export class EUDLRecognizer extends Recognizer {
    constructor() {
        super('EUDLRecognizer');
        
        /** 
         * Defines if address should be extracted from EU driver's license 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if expiry date should be extracted from EU driver's license 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if issue date should be extracted from EU driver's license 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if issuing authority should be extracted from EU driver's license 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if personal number should be extracted from EU driver's license 
         */
        this.extractPersonalNumber = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * currently used country. 
         */
        this.country = EUDLCountry.Automatic;
        
        this.createResultFromNative = function (nativeResult) { return new EUDLRecognizerResult(nativeResult); }
    }
}