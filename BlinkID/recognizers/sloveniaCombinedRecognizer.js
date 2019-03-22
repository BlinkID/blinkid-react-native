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
 * Result object for SloveniaCombinedRecognizer.
 */
export class SloveniaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Slovenia ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The administrative unit of the Slovenia ID card. 
         */
        this.administrativeUnit = nativeResult.administrativeUnit;
        
        /** 
         * The date of birth of the Slovenia ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Slovenia ID card. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the Slovenia ID card. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
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
         * The document number of the Slovenia ID card. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
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
         * The given names of the Slovenia ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * Determines if all check digits inside MRZ are correct 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The nationality of the Slovenia ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The pin of the Slovenia ID owner. 
         */
        this.pin = nativeResult.pin;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Slovenia ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Slovenia ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front and back side of Slovenia national ID cards.
 */
export class SloveniaCombinedRecognizer extends Recognizer {
    constructor() {
        super('SloveniaCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Slovenian ID owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if issuing administrative unit of Slovenian ID should be extracted. 
         */
        this.extractAdministrativeUnit = true;
        
        /** 
         * Defines if date of expiry of Slovenian ID card should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Slovenian ID should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given names of Slovenian ID owner should be extracted. 
         */
        this.extractGivenNames = true;
        
        /** 
         * Defines if nationality of Slovenian ID owner should be extracted. 
         */
        this.extractNationality = true;
        
        /** 
         * Defines if sex of Slovenian ID owner should be extracted. 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Slovenian ID owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new SloveniaCombinedRecognizerResult(nativeResult); }
    }
}