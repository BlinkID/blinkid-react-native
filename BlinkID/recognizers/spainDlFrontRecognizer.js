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
 * Result object for SpainDlFrontRecognizer.
 */
export class SpainDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Spain DL owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the Spain DL owner 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issuing authority of the Spain DL 
         */
        this.issuingAuthority = nativeResult.issuingAuthority;
        
        /** 
         * The licence categories of the Spain DL 
         */
        this.licenceCategories = nativeResult.licenceCategories;
        
        /** 
         * The licence number of the Spain DL 
         */
        this.number = nativeResult.number;
        
        /** 
         * The date of birth of Spain DL owner 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Spain DL owner. 
         */
        this.surname = nativeResult.surname;
        
        /** 
         * The date of issue of Spain DL 
         */
        this.validFrom = nativeResult.validFrom != null ? new Date(nativeResult.validFrom) : null;
        
        /** 
         * The date of expiry of Spain DL 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
    }
}

/**
 * Recognizer which can scan front side of Spain national DL cards
 */
export class SpainDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SpainDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Spain DL owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if first name of Spain DL owner should be extracted 
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if issuing authority of Spain DL should be extracted 
         */
        this.extractIssuingAuthority = true;
        
        /** 
         * Defines if licence categories of Spain DL should be extracted 
         */
        this.extractLicenceCategories = true;
        
        /** 
         * Defines if place of birth of Spain DL owner should be extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if surname of Spain DL owner should be extracted 
         */
        this.extractSurname = true;
        
        /** 
         * Defines if date of issue of Spain DL should be extracted 
         */
        this.extractValidFrom = true;
        
        /** 
         * Defines if date of expiry of Spain DL should be extracted 
         */
        this.extractValidUntil = true;
        
        /** 
         * the DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        /** 
         * the DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new SpainDlFrontRecognizerResult(nativeResult); }
    }
}