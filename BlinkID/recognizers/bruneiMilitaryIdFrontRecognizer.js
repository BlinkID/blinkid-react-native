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
 * Result object for BruneiMilitaryIdFrontRecognizer.
 */
export class BruneiMilitaryIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Brunei Military ID owner. 
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
         * The full name of Brunei Military ID owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The military rank of Brunei Military ID owner. 
         */
        this.rank = nativeResult.rank;
        
    }
}

/**
 * Recognizer which can scan front side of Brunei Military ID card.
 */
export class BruneiMilitaryIdFrontRecognizer extends Recognizer {
    constructor() {
        super('BruneiMilitaryIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if full name of Brunei Military ID owner should be extracted. 
         */
        this.extractFullName = true;
        
        /** 
         * Defines if military rank of Brunei Military ID owner should be extracted. 
         */
        this.extractRank = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiMilitaryIdFrontRecognizerResult(nativeResult); }
    }
}