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
 * Result object for SwitzerlandPassportRecognizer.
 */
export class SwitzerlandPassportRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The issuing authority of Switzerland passport. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * The date of birth of Switzerland passport owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Switzerland passport. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Switzerland passport. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given name of Switzerland passport owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The height of Switzerland passport owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The passport number of Switzerland passport. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * The place of origin of Switzerland passport owner. 
         */
        this.placeOfOrigin = nativeResult.placeOfOrigin;
        
        /** 
         * The sex of Switzerland passport owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The surname of Switzerland passport owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan Switzerland passport.
 */
export class SwitzerlandPassportRecognizer extends Recognizer {
    constructor() {
        super('SwitzerlandPassportRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if issuing authority of Switzerland passport should be extracted.
         * 
         *  
         */
        this.extractAuthority = true;
        
        /** 
         * Defines if date of birth of Switzerland passport owner should be extracted.
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Switzerland passport should be extracted.
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Switzerland passport should be extracted.
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given name of Switzerland passport owner should be extracted.
         * 
         *  
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if height of Switzerland passport owner should be extracted.
         * 
         *  
         */
        this.extractHeight = true;
        
        /** 
         * Defines if passport number of Switzerland passport should be extracted.
         * 
         *  
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if place of origin of Switzerland passport owner should be extracted.
         * 
         *  
         */
        this.extractPlaceOfOrigin = true;
        
        /** 
         * Defines if sex of Switzerland passport owner should be extracted.
         * 
         *  
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Switzerland passport owner should be extracted.
         * 
         *  
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandPassportRecognizerResult(nativeResult); }
    }
}