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
 * Result object for AustriaPassportRecognizer.
 */
export class AustriaPassportRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date Of Birth of the Austrian Passport owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date Of Expiry of the Austrian Passport. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date Of Issue of the Austrian Passport. 
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
         * The given Name of the Austrian Passport owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The height of the Austrian Passport owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * The issuing Authority of the Austrian Passport. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The mrz of the back side of Austria Passport. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The nationality of the Austrian Passport owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The passport Number of the Austrian Passport. 
         */
        this.passportNumber = nativeResult.passportNumber;
        
        /** 
         * The place Of Birth of the Austrian Passport owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The sex of the Austrian Passport owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Austrian Passport owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Class for configuring Austrian Passport Recognizer.
 * 
 * Austrian Passport recognizer is used for scanning Austrian Passport.
 */
export class AustriaPassportRecognizer extends Recognizer {
    constructor() {
        super('AustriaPassportRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's date of birth should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if owner's given name should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if owner's height should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractHeight = true;
        
        /** 
         * Defines if issuing authority should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if owner's nationality should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractNationality = false;
        
        /** 
         * Defines if passport number should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if owner's place of birth should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if owner's sex should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractSex = true;
        
        /** 
         * Defines if owner's surname should be extracted from Austrian Passport
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
        
        this.createResultFromNative = function (nativeResult) { return new AustriaPassportRecognizerResult(nativeResult); }
    }
}