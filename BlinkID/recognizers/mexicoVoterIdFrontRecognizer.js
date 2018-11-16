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
 * Result object for MexicoVoterIdFrontRecognizer.
 */
export class MexicoVoterIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Mexico Voter ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The CURP of Mexico Voter ID owner. 
         */
        this.curp = nativeResult.curp;
        
        /** 
         * The date of birth of Mexico Voter ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The elector key of Mexico Voter ID owner. 
         */
        this.electorKey = nativeResult.electorKey;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The full name of Mexico Voter ID owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The sex of Mexico Voter ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer which can scan front side of Mexican voter id.
 */
export class MexicoVoterIdFrontRecognizer extends Recognizer {
    constructor() {
        super('MexicoVoterIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Mexico Voter ID owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if CURP of Mexico Voter ID owner should be extracted. 
         */
        this.extractCurp = true;
        
        /** 
         * Defines if full name of Mexico Voter ID owner should be extracted. 
         */
        this.extractFullName = true;
        
        /** 
         * The DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
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
        
        /** 
         * The DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new MexicoVoterIdFrontRecognizerResult(nativeResult); }
    }
}