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
 * Result object for GermanyPassportRecognizer.
 */
export class GermanyPassportRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The issuing authority of German passport. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * The date of issue of German passport. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given name of German passport owner. 
         */
        this.givenName = nativeResult.givenName;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The nationality of German passport owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of birth of German passport owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * Signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of German passport owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan German passport.
 */
export class GermanyPassportRecognizer extends Recognizer {
    constructor() {
        super('GermanyPassportRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if issuing authority of German passport should be extracted. 
         */
        this.extractAuthority = true;
        
        /** 
         * Defines if date of issue of German passport should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if given name of German passport owner should be extracted. 
         */
        this.extractGivenName = true;
        
        /** 
         * Defines if nationality of German passport owner should be extracted. 
         */
        this.extractNationality = true;
        
        /** 
         * Defines if place of birth of German passport owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if surname of German passport owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyPassportRecognizerResult(nativeResult); }
    }
}