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
 * Result object for CzechiaIdFrontRecognizer.
 */
export class CzechiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Czech ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of Czech ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Czech ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * The document number of Czech ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The given names of Czech ID owner. 
         */
        this.givenNames = nativeResult.givenNames;
        
        /** 
         * The place of birth of Czech ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The sex of Czech ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of Czech ID owner. 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan the front side of Czech IDs.
 */
export class CzechiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('CzechiaIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if Czech ID owner's date of birth should be extracted
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if Czech ID's date of expiry should be extracted
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if Czech ID's date of issue should be extracted
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if Czech ID owner's given names should be extracted
         * 
         *  
         */
        this.extractGivenNames = true;
        
        /** 
         * Defines if Czech ID owner's place of birth should be extracted
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if Czech ID owner's sex should be extracted
         * 
         *  
         */
        this.extractSex = true;
        
        /** 
         * Defines if Czech ID owner's surname should be extracted
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
         * Image extension factors for full document image.
         * 
         * @see ImageExtensionFactors
         *  
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
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
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new CzechiaIdFrontRecognizerResult(nativeResult); }
    }
}