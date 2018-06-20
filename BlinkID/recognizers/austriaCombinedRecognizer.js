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
 * Result object for AustriaCombinedRecognizer.
 */
export class AustriaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Austrian ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Austrian ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issuance of the Austrian ID 
         */
        this.dateOfIssuance = nativeResult.dateOfIssuance != null ? new Date(nativeResult.dateOfIssuance) : null;
        
        /** 
         * Digital signature of the recognition result. Available only if enabled with signResult property. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Version of the digital signature. Available only if enabled with signResult property. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * The document number of the Austrian ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The eye eyeColour of Austrian ID owner. 
         */
        this.eyeColour = nativeResult.eyeColour;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * back side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * front side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The gien name of the Austrian ID owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The height of Austrian ID owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * The issuing authority of Austrian ID. 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * Whether check digits in machine readable zone of the Austrian ID are OK. 
         */
        this.mrtdVerified = nativeResult.mrtdVerified;
        
        /** 
         * The nationaliy of the Austrian ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of birth of the Austrian ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The principal residence of the Austrian ID owner. 
         */
        this.principalResidence = nativeResult.principalResidence;
        
        /** 
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Austrian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Austrian ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Austrian ID Combined Recognizer.
 * 
 * Austrian ID Combined recognizer is used for scanning both front and back side of Austrian ID.
 */
export class AustriaCombinedRecognizer extends Recognizer {
    constructor() {
        super('AustriaCombinedRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if ownder's date of birth should be extracted
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
         * Defines if date of issuance should be extracted from back side of Austrian ID
         * 
         *  
         */
        this.extractDateOfIssuance = true;
        
        /** 
         * Defines if date of issue should be extracted from Austrian Passport
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if owner's given name should be extracted
         * 
         *  
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if owner's height should be extracted
         * 
         *  
         */
        this.extractHeight = true;
        
        /** 
         * Defines if issuing authority should be extracted
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
         * Defines if owner's place of birth should be extracted
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if owner's principal residence should be extracted from back side of Austrian ID
         * 
         *  
         */
        this.extractPrincipalResidence = true;
        
        /** 
         * Defines if owner's sex should be extracted
         * 
         *  
         */
        this.extractSex = true;
        
        /** 
         * Defines if owner's surname should be extracted
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
         * Whether or not recognition result should be signed.
         * 
         *  
         */
        this.signResult = false;
        
        /** 
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new AustriaCombinedRecognizerResult(nativeResult); }
    }
}