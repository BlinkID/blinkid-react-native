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
 * Result object for MoroccoIdFrontRecognizer.
 */
export class MoroccoIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The date of birth of the Moroccan ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Moroccan ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document number of the Moroccan ID 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The name of the Moroccan ID owner 
         */
        this.name = nativeResult.name;
        
        /** 
         * The place of birth of the Moroccan ID owner 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The sex of the Moroccan ID owner 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The surname of the Moroccan ID owner 
         */
        this.surname = nativeResult.surname;
        
    }
}

/**
 * Recognizer which can scan front side of Moroccan national ID cards.
 */
export class MoroccoIdFrontRecognizer extends Recognizer {
    constructor() {
        super('MoroccoIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of the Moroccan ID owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of the Moroccan ID should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if name of the Moroccan ID owner should be extracted 
         */
        this.extractName = true;
        
        /** 
         * Defines if place of birth of the Moroccan ID owner should be extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if sex of the Moroccan ID owner should be extracted 
         */
        this.extractSex = true;
        
        /** 
         * Defines if surname of the Moroccan ID owner should be extracted 
         */
        this.extractSurname = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MoroccoIdFrontRecognizerResult(nativeResult); }
    }
}