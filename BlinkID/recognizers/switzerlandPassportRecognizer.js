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
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if issuing authority of Switzerland passport should be extracted. 
         */
        this.extractAuthority = true;
        
        /** 
         * Defines if date of birth of Switzerland passport owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Switzerland passport should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Switzerland passport should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given name of Switzerland passport owner should be extracted. 
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if height of Switzerland passport owner should be extracted. 
         */
        this.extractHeight = true;
        
        /** 
         * Defines if passport number of Switzerland passport should be extracted. 
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if place of origin of Switzerland passport owner should be extracted. 
         */
        this.extractPlaceOfOrigin = true;
        
        /** 
         * Defines if sex of Switzerland passport owner should be extracted. 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Switzerland passport owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandPassportRecognizerResult(nativeResult); }
    }
}