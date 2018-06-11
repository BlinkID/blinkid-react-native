import { Recognizer, RecognizerResult } from '../recognizer'
import * as Types from '../types'

/**
 * Result object for AustraliaDLBackSideRecognizer.
 */
export class AustraliaDLBackSideRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * address of the Australian DL owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * the date of expiry of Australian DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * last name of the Australian DL owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * the licence number of Australian DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
    }
}

/**
 *  Recognizer which can scan back side of austrian driver's license.

 */
export class AustraliaDLBackSideRecognizer extends Recognizer {
    constructor() {
        super('AustraliaDLBackSideRecognizer');
        
        /** 
         * true if address of Australian DL owner is being extracted 
         */
        this.extractAddress = true;
        
        /** 
         * true if date of expiry of Australian DL is being extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * true if last name of Australian DL owner is being extracted 
         */
        this.extractLastName = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDPI = 250;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new AustraliaDLBackSideRecognizerResult(nativeResult); }
    }
}