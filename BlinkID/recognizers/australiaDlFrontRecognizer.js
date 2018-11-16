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
 * Result object for AustraliaDlFrontRecognizer.
 */
export class AustraliaDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Address of the Australian DL owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Australian DL owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Australian DL. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The licence number of Australian DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The licence type of the Australian DL. 
         */
        this.licenceType = nativeResult.licenceType;
        
        /** 
         * The full name of the Australian ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 *  Recognizer which can scan front side of austrian driver's license.
 * 
 */
export class AustraliaDlFrontRecognizer extends Recognizer {
    constructor() {
        super('AustraliaDlFrontRecognizer');
        
        /** 
         * True if address of Australian DL owner is being extracted 
         */
        this.extractAddress = true;
        
        /** 
         * True if date of birth of Australian DL owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * True if date of expiry of Australian DL is being extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new AustraliaDlFrontRecognizerResult(nativeResult); }
    }
}