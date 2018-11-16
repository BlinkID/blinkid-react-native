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
 * Result object for JordanCombinedRecognizer.
 */
export class JordanCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Jordan ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document date of expiry of the Jordan ID. 
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
         * The document number of Jordan ID. 
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
         * The issuer of Jordan ID. 
         */
        this.issuer = nativeResult.issuer;
        
        /** 
         * True if all check digits inside MRZ are correct, false otherwise. 
         */
        this.mrzVerified = nativeResult.mrzVerified;
        
        /** 
         * The name of the Jordan ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The national number of Jordan ID owner. 
         */
        this.nationalNumber = nativeResult.nationalNumber;
        
        /** 
         * Nationality of the Jordan ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * Sex of the Jordan ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 *  Recognizer for combined reading of both front and back side of Jordan ID.
 * 
 */
export class JordanCombinedRecognizer extends Recognizer {
    constructor() {
        super('JordanCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * True if date of birth of Jordan owner is being extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * True if name of Jordan ID owner is being extracted 
         */
        this.extractName = true;
        
        /** 
         * True if sex of Jordan owner is being extracted 
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new JordanCombinedRecognizerResult(nativeResult); }
    }
}