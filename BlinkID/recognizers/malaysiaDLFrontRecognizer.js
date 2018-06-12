import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for MalaysiaDlFrontRecognizer.
 */
export class MalaysiaDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * extracted city from the owner address. 
         */
        this.city = nativeResult.city;
        
        /** 
         * Malaysian DL class. 
         */
        this.dLClass = nativeResult.dLClass;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full owner address. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the Malaysian DL identity number. 
         */
        this.identityNumber = nativeResult.identityNumber;
        
        /** 
         * name of Malaysian DL owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * nationality of Malaysian DL owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * extracted state from the owner address. 
         */
        this.state = nativeResult.state;
        
        /** 
         * extracted street from the owner address. 
         */
        this.street = nativeResult.street;
        
        /** 
         * Malaysian DL valid from. 
         */
        this.validFrom = nativeResult.validFrom;
        
        /** 
         * Malaysian DL valid until. 
         */
        this.validUntil = nativeResult.validUntil;
        
        /** 
         * extracted ZIP code from the owner address. 
         */
        this.zipCode = nativeResult.zipCode;
        
    }
}

/**
 *  Recognizer for reading Malaysian driving license document.

 */
export class MalaysiaDlFrontRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if DL class is being extracted 
         */
        this.extractDLClass = true;
        
        /** 
         * true if full address of Malaysian DL owner is being extracted 
         */
        this.extractFullAddress = true;
        
        /** 
         * true if name of Malaysian DL owner is being extracted 
         */
        this.extractName = true;
        
        /** 
         * true if nationality of Malaysian DL owner is being extracted 
         */
        this.extractNationality = true;
        
        /** 
         * true if valid from is being extracted 
         */
        this.extractValidFrom = true;
        
        /** 
         * true if valid until is being extracted 
         */
        this.extractValidUntil = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaDlFrontRecognizerResult(nativeResult); }
    }
}