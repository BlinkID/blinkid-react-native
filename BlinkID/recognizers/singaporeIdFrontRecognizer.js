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
 * Result object for SingaporeIdFrontRecognizer.
 */
export class SingaporeIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The country/place of birth of the Singaporean ID card owner. 
         */
        this.countryOfBirth = nativeResult.countryOfBirth;
        
        /** 
         * The date of birth of the Singaporean ID card owner. 
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
         * The identity card number of the Singaporean ID card. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * The name of the Singaporean ID card owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The race of the Singaporean ID card owner. 
         */
        this.race = nativeResult.race;
        
        /** 
         * The sex of the Singaporean ID card owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan front side of Singaporean national ID card.
 */
export class SingaporeIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SingaporeIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if country/place of birth of Singaporean ID card owner should be extracted. 
         */
        this.extractCountryOfBirth = true;
        
        /** 
         * Defines if date of birth of Singaporean ID card owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if name of Singaporean ID card owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if race of Singaporean ID card owner should be extracted. 
         */
        this.extractRace = true;
        
        /** 
         * Defines if sex of Singaporean ID card owner should be extracted. 
         */
        this.extractSex = true;
        
        /** 
         * the DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeIdFrontRecognizerResult(nativeResult); }
    }
}