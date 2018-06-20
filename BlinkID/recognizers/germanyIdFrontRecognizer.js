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
         * The CAN number of the German ID 
         */
        this.canNumber = nativeResult.canNumber;
        
        /** 
         * The date of birth of German ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document date of expiry of the German ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document number of the German ID 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The first name of the German ID owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The last name of the German ID owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The nationality of the German ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The place of birth of the German ID 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Class for configuring German ID Front Recognizer.
 * 
 * German ID Front recognizer is used for scanning front side of German ID.
 */
export class GermanyIdFrontRecognizer extends Recognizer {
    constructor() {
        super('GermanyIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if CAN number should be extracted from German ID
         * 
         *  
         */
        this.extractCanNumber = true;
        
        /** 
         * Defines if date of expiry should be extracted from German ID
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if document number should be extracted from German ID
         * 
         *  
         */
        this.extractDocumentNumber = true;
        
        /** 
         * Defines if owner's first names should be extracted from German ID
         * 
         *  
         */
        this.extractGivenNames = true;
        
        /** 
         * Defines if owner's nationality should be extracted from German ID
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if owner's place of birth should be extracted from German ID
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if owner's surname should be extracted from German ID
         * 
         *  
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new GermanyIdFrontRecognizerResult(nativeResult); }
    }
}