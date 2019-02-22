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
 * Result object for SerbiaIdFrontRecognizer.
 */
export class SerbiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The document number of Serbian ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing date of the Serbian ID. 
         */
        this.issuingDate = nativeResult.issuingDate != null ? new Date(nativeResult.issuingDate) : null;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The valid until of the Serbian ID. 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
    }
}

/**
 *  Recognizer for front side of Serbian ID.
 * 
 */
export class SerbiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SerbiaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if issuing date of Serbian ID is being extracted 
         */
        this.extractIssuingDate = true;
        
        /** 
         * True if valid until is being extracted from Serbian ID 
         */
        this.extractValidUntil = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SerbiaIdFrontRecognizerResult(nativeResult); }
    }
}