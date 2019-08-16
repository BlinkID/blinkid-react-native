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
 * Result object for PolandCombinedRecognizer.
 */
export class PolandCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of the Poland ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Poland ID card. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
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
         * The document number of the Poland ID card. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The family name of the Poland ID owner. 
         */
        this.familyName = nativeResult.familyName;
        
        /** 
         * Back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * Front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The given names of the Poland ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The issuing authority of the Poland ID card. 
         */
        this.issuedBy = nativeResult.issuedBy;
        
        /** 
         * Determines if all check digits inside MRZ are correct 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The nationality of the Poland ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The parents given names of the Poland ID owner. 
         */
        this.parentsGivenNames = nativeResult.parentsGivenNames;
        
        /** 
         * The personal number of the Poland ID owner. 
         */
        this.personalNumber = nativeResult.personalNumber;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Poland ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * The surname of the Poland ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front and back side of Poland national ID cards.
 */
export class PolandCombinedRecognizer extends Recognizer {
    constructor() {
        super('PolandCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Poland ID owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if family name of Poland ID owner should be extracted. 
         */
        this.extractFamilyName = false;
        
        /** 
         * Defines if given names of Poland ID owner should be extracted. 
         */
        this.extractGivenNames = true;
        
        /** 
         * Defines if parents given names of Poland ID owner should be extracted. 
         */
        this.extractParentsGivenNames = false;
        
        /** 
         * Defines if sex of Poland ID owner should be extracted. 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of Poland ID owner should be extracted. 
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
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new PolandCombinedRecognizerResult(nativeResult); }
    }
}