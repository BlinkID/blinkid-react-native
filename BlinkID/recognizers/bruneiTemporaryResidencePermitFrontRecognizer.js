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
 * Result object for BruneiTemporaryResidencePermitFrontRecognizer.
 */
export class BruneiTemporaryResidencePermitFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of Brunei Temporary Residence Permit owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Brunei Temporary Residence Permit owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document number of Brunei Temporary Residence Permit. 
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
         * The full name of Brunei Temporary Residence Permit owner. 
         */
        this.fullName = nativeResult.fullName;
        
        /** 
         * The place of birth of Brunei Temporary Residence Permit owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The sex of Brunei Temporary Residence Permit owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan front side of Brunei Temporary Residence Permit.
 */
export class BruneiTemporaryResidencePermitFrontRecognizer extends Recognizer {
    constructor() {
        super('BruneiTemporaryResidencePermitFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Brunei Temporary Residence Permit owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of Brunei Temporary Residence Permit owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if full name of Brunei Temporary Residence Permit owner should be extracted. 
         */
        this.extractFullName = true;
        
        /** 
         * Defines if place of birth of Brunei Temporary Residence Permit owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if sex of Brunei Temporary Residence Permit owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new BruneiTemporaryResidencePermitFrontRecognizerResult(nativeResult); }
    }
}