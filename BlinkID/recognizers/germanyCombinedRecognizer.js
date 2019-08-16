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
 * Result object for GermanyCombinedRecognizer.
 */
export class GermanyCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Germany ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The issuing authority of the Germany ID card. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * The CAN number of the Germany ID card. 
         */
        this.canNumber = nativeResult.canNumber;
        
        /** 
         * The colour of eyes of the Germany ID owner. 
         */
        this.colourOfEyes = nativeResult.colourOfEyes;
        
        /** 
         * The date of birth of the Germany ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Germany ID card. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of the Germany ID card. 
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
         * The document number of the Germany ID card. 
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
         * The given names of the Germany ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The height of the Germany ID owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * Determines if all check digits inside MRZ are correct 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The nationality of the Germany ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of birth of the Germany ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The full mrz string result. 
         */
        this.rawMrzString = nativeResult.rawMrzString;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Germany ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Germany ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front and back side of German national ID cards,
 *  * front side of German old ID card and front side of German Passport.
 */
export class GermanyCombinedRecognizer extends Recognizer {
    constructor() {
        super('GermanyCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of German ID owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if issuing authority of German ID should be extracted. 
         */
        this.extractAuthority = true;
        
        /** 
         * Defines if CAN number of Germany ID should be extracted. 
         */
        this.extractCanNumber = true;
        
        /** 
         * Defines if colour of eyes of German ID owner should be extracted. 
         */
        this.extractColourOfEyes = true;
        
        /** 
         * Defines if date of expiry of Germany ID should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of German ID should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if document number of Germany ID should be extracted. 
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if given name of German passport owner should be extracted. 
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if given names of Germany ID owner should be extracted. 
         */
        this.extractGivenNames = true;
        
        /** 
         * Defines if height of German ID owner should be extracted. 
         */
        this.extractHeight = true;
        
        /** 
         * Defines if nationality  of Germany ID owner should be extracted. 
         */
        this.extractNationality = true;
        
        /** 
         * Defines if place of birth of Germany ID owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if surname of Germany ID owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyCombinedRecognizerResult(nativeResult); }
    }
}