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
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Brunei residence permit owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if full name of Brunei residence permit owner should be extracted. 
         */
        this.extractFullName = true;
        
        /** 
         * Defines if place of birth of Brunei residence permit owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if sex of Brunei residence permit owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiResidencePermitFrontRecognizerResult(nativeResult); }
    }
}