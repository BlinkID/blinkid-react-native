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
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
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
         * image of the signature if enabled with returnSignatureImage property. 
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
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Mexico Voter ID owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if CURP of Mexico Voter ID owner should be extracted.
         * 
         *  
         */
        this.extractCurp = true;
        
        /** 
         * Defines if full name of Mexico Voter ID owner should be extracted.
         * 
         *  
         */
        this.extractFullName = true;
        
        /** 
         * Property for setting DPI for face images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.faceImageDpi = 250;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         *  
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Sets whether face image from ID card should be extracted
         * 
         *  
         */
        this.returnFaceImage = false;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Sets whether signature image from ID card should be extracted.
         * 
         *  
         */
        this.returnSignatureImage = false;
        
        /** 
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new MexicoVoterIdFrontRecognizerResult(nativeResult); }
    }
}