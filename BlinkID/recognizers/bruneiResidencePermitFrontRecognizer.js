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
 * Result object for BruneiResidencePermitFrontRecognizer.
 */
export class BruneiResidencePermitFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of Brunei residence permit owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document number of Brunei residence permit. 
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
         * The full name of Brunei residence permit owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The place of birth of Brunei residence permit owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The sex of Brunei residence permit owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan front side of Brunei residence permits.
 */
export class BruneiResidencePermitFrontRecognizer extends Recognizer {
    constructor() {
        super('BruneiResidencePermitFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Brunei residence permit owner should be extracted.
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if full name of Brunei residence permit owner should be extracted.
         * 
         *  
         */
        this.extractFullName = true;
        
        /** 
         * Defines if place of birth of Brunei residence permit owner should be extracted.
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if sex of Brunei residence permit owner should be extracted.
         * 
         *  
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiResidencePermitFrontRecognizerResult(nativeResult); }
    }
}