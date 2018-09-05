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
 * Result object for KuwaitIdFrontRecognizer.
 */
export class KuwaitIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The birth Date of the front side of the Kuroom wait Id owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * The civil Id Number of the front side of the Kuwait Id owner. 
         */
        this.civilIdNumber = nativeResult.civilIdNumber;
        
        /** 
         * The expiry Date of the front side of the Kuwait Id owner. 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The name of the front side of the Kuwait Id owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of the front side of the Kuwait Id owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The sex of the front side of the Kuwait Id owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan front side of Kuwait national ID cards.
 */
export class KuwaitIdFrontRecognizer extends Recognizer {
    constructor() {
        super('KuwaitIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Kuwait ID owner should be extracted.
         * 
         *  
         */
        this.extractBirthDate = true;
        
        /** 
         * Defines if name of Kuwait ID owner should be extracted.
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of Kuwait ID owner should be extracted.
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if sex of Kuwait ID owner should be extracted.
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
        
        this.createResultFromNative = function (nativeResult) { return new KuwaitIdFrontRecognizerResult(nativeResult); }
    }
}