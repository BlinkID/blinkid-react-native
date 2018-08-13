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
         * the date of birth of Swiss ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * the given name of the Swiss ID owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * the surname of the Swiss ID owner. 
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
         * true if given name of Swiss ID owner is being extracted 
         */
        this.extractGivenName = true;
        
        /** 
         * true if surname of Swiss ID owner is being extracted 
         */
        this.extractSurname = true;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandIdFrontRecognizerResult(nativeResult); }
    }
}