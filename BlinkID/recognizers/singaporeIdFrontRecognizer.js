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
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
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
 * Class for configuring Singapore ID Front Recognizer.
 * 
 * Singapore ID Front recognizer is used for scanning front side of Singapore ID.
 */
export class SingaporeIdFrontRecognizer extends Recognizer {
    constructor() {
        super('SingaporeIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         *  Defines if country/place of birth of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractCountryOfBirth = true;
        
        /** 
         *  Defines if date of birth of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractDateOfBirth = true;
        
        /** 
         *  Defines if name of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractName = true;
        
        /** 
         *  Defines if race of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractRace = true;
        
        /** 
         *  Defines if sex of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeIdFrontRecognizerResult(nativeResult); }
    }
}