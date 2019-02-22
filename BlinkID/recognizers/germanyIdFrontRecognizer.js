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
 * Result object for GermanyIdFrontRecognizer.
 */
export class GermanyIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The CAN number of Germany ID. 
         */
        this.canNumber = nativeResult.canNumber;
        
        /** 
         * The date of birth of Germany ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Germany ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document number of Germany ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given names of Germany ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The nationality of Germany ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of birth of Germany ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of Germany ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of Germany national ID cards.
 */
export class GermanyIdFrontRecognizer extends Recognizer {
    constructor() {
        super('GermanyIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if CAN number of Germany ID should be extracted. 
         */
        this.extractCanNumber = true;
        
        /** 
         * Defines if date of expiry of Germany ID should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if document number of Germany ID should be extracted. 
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if given names of Germany ID owner should be extracted. 
         */
        this.extractGivenNames = true;
        
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
         * The DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new GermanyIdFrontRecognizerResult(nativeResult); }
    }
}