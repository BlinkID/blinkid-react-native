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
         * The address of the Morocco ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The civil status number of the Morocco ID owner. 
         */
        this.civilStatusNumber = nativeResult.civilStatusNumber;
        
        /** 
         * The date of expiry of the Morocco ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The document number of the Morocco ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The father's name of the Morocco ID owner. 
         */
        this.fathersName = nativeResult.fathersName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The mother's name of the Morocco ID owner. 
         */
        this.mothersName = nativeResult.mothersName;
        
        /** 
         * The sex of the Morocco ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Class for configuring Morocco ID Back Recognizer.
 * 
 * Morocco ID Back recognizer is used for scanning Back side of the Morocco ID.
 */
export class MoroccoIdBackRecognizer extends Recognizer {
    constructor() {
        super('MoroccoIdBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's address should be extracted from Back side of the Morocco ID
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if owner's civil status number should be extracted from Back side of the Morocco ID
         * 
         *  
         */
        this.extractCivilStatusNumber = true;
        
        /** 
         * Defines if date of expiry should be extracted from Back side of the Morocco ID
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if father's name should be extracted from Back side of the Morocco ID
         * 
         *  
         */
        this.extractFathersName = true;
        
        /** 
         * Defines if mother's name should be extracted from Back side of the Morocco ID
         * 
         *  
         */
        this.extractMothersName = true;
        
        /** 
         * Defines if owner's sex should be extracted from Back side of the Morocco ID
         * 
         *  
         */
        this.extractSex = true;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MoroccoIdBackRecognizerResult(nativeResult); }
    }
}