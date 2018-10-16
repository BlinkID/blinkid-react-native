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
 * Result object for SwitzerlandIdFrontRecognizer.
 */
export class SwitzerlandIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Swiss ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given name of the Swiss ID owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Swiss ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 *  Recognizer which can scan the front side of Swiss national ID cards.
 * 
 */
export class SwitzerlandIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SwitzerlandIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if given name of Swiss ID owner is being extracted 
         */
        this.extractGivenName = true;
        
        /** 
         * True if surname of Swiss ID owner is being extracted 
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandIdFrontRecognizerResult(nativeResult); }
    }
}