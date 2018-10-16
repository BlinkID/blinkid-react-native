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
         * The birth date of the Kuwait ID owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * The civil ID number of the Kuwait ID owner. 
         */
        this.civilIdNumber = nativeResult.civilIdNumber;
        
        /** 
         * The expiry date of the Kuwait ID. 
         */
        this.expiryDate = nativeResult.expiryDate != null ? new Date(nativeResult.expiryDate) : null;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The name of the Kuwait ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of the Kuwait ID owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The sex of the Kuwait ID owner. 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if date of birth of Kuwait ID owner should be extracted. 
         */
        this.extractBirthDate = true;
        
        /** 
         * Defines if name of Kuwait ID owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of Kuwait ID owner should be extracted. 
         */
        this.extractNationality = true;
        
        /** 
         * Defines if sex of Kuwait ID owner should be extracted. 
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
        
        this.createResultFromNative = function (nativeResult) { return new KuwaitIdFrontRecognizerResult(nativeResult); }
    }
}