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
 * Result object for AustraliaDlBackRecognizer.
 */
export class AustraliaDlBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Address of the Australian DL owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of expiry of Australian DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Last name of the Australian DL owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The licence number of Australian DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
    }
}

/**
 *  Recognizer which can scan back side of austrian driver's license.
 * 
 */
export class AustraliaDlBackRecognizer extends Recognizer {
    constructor() {
        super('AustraliaDlBackRecognizer');
        
        /** 
         * True if address of Australian DL owner is being extracted 
         */
        this.extractAddress = true;
        
        /** 
         * True if date of expiry of Australian DL is being extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * True if last name of Australian DL owner is being extracted 
         */
        this.extractLastName = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new AustraliaDlBackRecognizerResult(nativeResult); }
    }
}