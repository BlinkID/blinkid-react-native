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
 * Result object for PolandIdFrontRecognizer.
 */
export class PolandIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of the Poland ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The family name of the Poland ID owner. 
         */
        this.familyName = nativeResult.familyName;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given names of the Poland ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The parents given names of the Poland ID owner. 
         */
        this.parentsGivenNames = nativeResult.parentsGivenNames;
        
        /** 
         * The sex of the Poland ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The surname of the Poland ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of Poland ID cards.
 */
export class PolandIdFrontRecognizer extends Recognizer {
    constructor() {
        super('PolandIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Poland ID owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if family name of Poland ID owner should be extracted. 
         */
        this.extractFamilyName = false;
        
        /** 
         * Defines if given names of Poland ID owner should be extracted. 
         */
        this.extractGivenNames = true;
        
        /** 
         * Defines if parents given names of Poland ID owner should be extracted. 
         */
        this.extractParentsGivenNames = false;
        
        /** 
         * Defines if sex of Poland ID owner should be extracted. 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Poland ID owner should be extracted. 
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new PolandIdFrontRecognizerResult(nativeResult); }
    }
}