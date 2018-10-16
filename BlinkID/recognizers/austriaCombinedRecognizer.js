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
         * The date of birth of the document owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the document 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issuance of the document 
         */
        this.dateOfIssuance = nativeResult.dateOfIssuance != null ? new Date(nativeResult.dateOfIssuance) : null;
        
        /** 
         * Defines digital signature of recognition results. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Defines digital signature version. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Defines {true} if data from scanned parts/sides of the document match, 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * The document number 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The eye colour of the document holder. 
         */
        this.eyeColour = nativeResult.eyeColour;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * Front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The given name of the document owner 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The height of the document holder in centimeters 
         */
        this.height = nativeResult.height;
        
        /** 
         * The issuing authority of the document 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * Determines if all check digits inside MRZ are correct 
         */
        this.mrtdVerified = nativeResult.mrtdVerified;
        
        /** 
         * The nationality of the document owner 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of birth of the document holder 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The principal residence at issuance of the document holder. 
         */
        this.principalResidence = nativeResult.principalResidence;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the document owner 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the document owner 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan Austrian national ID card and passport.
 */
export class AustriaCombinedRecognizer extends Recognizer {
    constructor() {
        super('AustriaCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Austrian ID owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Austrian passport should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issuance should be extracted 
         */
        this.extractDateOfIssuance = true;
        
        /** 
         * Defines if date of issue of Austrian passport should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given name of Austrian ID owner should be extracted 
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if height of Austrian ID owner should be extracted 
         */
        this.extractHeight = true;
        
        /** 
         * Defines if issuing authority should be extracted 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if nationality of the Austrian passport owner should be extracted 
         */
        this.extractNationality = false;
        
        /** 
         * Defines if passport number of Austrian passport should be extracted 
         */
        this.extractPassportNumber = true;
        
        /** 
         * Defines if place of birth of Austrian ID owner should be extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if principal residence of Austrian ID owner should be extracted 
         */
        this.extractPrincipalResidence = true;
        
        /** 
         * Defines if sex of Austrian ID owner should be extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Austrian ID owner should be extracted 
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
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        /** 
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        /** 
         * The DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new AustriaCombinedRecognizerResult(nativeResult); }
    }
}