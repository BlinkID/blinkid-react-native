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
 * Result object for MoroccoIdBackRecognizer.
 */
export class MoroccoIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Moroccan ID owner 
         */
        this.address = nativeResult.address;
        
        /** 
         * The civil status number of the Moroccan ID owner 
         */
        this.civilStatusNumber = nativeResult.civilStatusNumber;
        
        /** 
         * The date of expiry of the Moroccan ID 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document number of the Moroccan ID 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The father's name of the Moroccan ID owner 
         */
        this.fathersName = nativeResult.fathersName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The mother's name of the Moroccan ID owner 
         */
        this.mothersName = nativeResult.mothersName;
        
        /** 
         * The sex of the Moroccan ID owner 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan back side of Moroccan national ID cards.
 */
export class MoroccoIdBackRecognizer extends Recognizer {
    constructor() {
        super('MoroccoIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of the Moroccan ID owner should be extracted 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if civil status number of the Moroccan ID owner should be extracted 
         */
        this.extractCivilStatusNumber = true;
        
        /** 
         * Defines if date of expiry of the Moroccan ID should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if father's name of the Moroccan ID owner should be extracted 
         */
        this.extractFathersName = true;
        
        /** 
         * Defines if mother's name of the Moroccan ID owner should be extracted 
         */
        this.extractMothersName = true;
        
        /** 
         * Defines if sex of the Moroccan ID owner should be extracted 
         */
        this.extractSex = true;
        
        /** 
         * the DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Defines whether full document image will be available in result. 
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MoroccoIdBackRecognizerResult(nativeResult); }
    }
}