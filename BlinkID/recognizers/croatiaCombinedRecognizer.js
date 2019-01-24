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
 * Result object for CroatiaCombinedRecognizer.
 */
export class CroatiaCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The citizenship of the Croatian ID owner. 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * The date of birth of the Croatian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Croatian ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * Determines if date of expiry of the Croatian ID is permanent. 
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /** 
         * The date of issue of Croatian ID. 
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
         * Determines if Croatian ID is bilingual. 
         */
        this.documentBilingual = nativeResult.documentBilingual;
        
        /** 
         * Defines {true} if data from scanned parts/sides of the document match, 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * Determines if Croatian ID is issued for non resident. 
         */
        this.documentForNonResident = nativeResult.documentForNonResident;
        
        /** 
         * The document number of the Croatian ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Croatian ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * Back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * Front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The issuer of Croatian ID. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * The last name of the Croatian ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * Determines if all check digits inside MRZ are correct. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The OIB of Croatian ID owner. 
         */
        this.oib = nativeResult.oib;
        
        /** 
         * The residence of Croatian ID owner. 
         */
        this.residence = nativeResult.residence;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Croatian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer for combined reading of both front and back side of Croatian ID.
 */
export class CroatiaCombinedRecognizer extends Recognizer {
    constructor() {
        super('CroatiaCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if citizenship of Croatian ID owner should be extracted 
         */
        this.extractCitizenship = true;
        
        /** 
         * Defines if date of birth of Croatian ID owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Croatian ID document should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Croatian ID should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if first name of Croatian ID owner should be extracted 
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuer of Croatian ID should be extracted. 
         */
        this.extractIssuedBy = true;
        
        /** 
         * Defines if last name of Croatian ID owner should be extracted 
         */
        this.extractLastName = true;
        
        /** 
         * Defines if personal identification number should be extracted. 
         */
        this.extractPersonalIdentificationNumber = true;
        
        /** 
         * Defines if residence of Croatian ID owner should be extracted. 
         */
        this.extractResidence = true;
        
        /** 
         * Defines if sex of Croatian ID owner should be extracted 
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new CroatiaCombinedRecognizerResult(nativeResult); }
    }
}