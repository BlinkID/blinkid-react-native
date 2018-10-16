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
 * Result object for MalaysiaDlFrontRecognizer.
 */
export class MalaysiaDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The city of Malaysia DL owner 
         */
        this.city = nativeResult.city;
        
        /** 
         * The vehicle classes of Malaysia DL 
         */
        this.dlClass = nativeResult.dlClass;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The address of Malaysia DL owner 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The identity number of Malaysia DL owner 
         */
        this.identityNumber = nativeResult.identityNumber;
        
        /** 
         * The name of Malaysia DL owner 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of Malaysia DL owner 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The state of Malaysia DL owner 
         */
        this.ownerState = nativeResult.ownerState;
        
        /** 
         * The street of Malaysia DL owner 
         */
        this.street = nativeResult.street;
        
        /** 
         * The date of issue of Malaysia DL 
         */
        this.validFrom = nativeResult.validFrom != null ? new Date(nativeResult.validFrom) : null;
        
        /** 
         * The date of expiry of Malaysia DL 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
        /** 
         * The zipocde of Malaysia DL owner 
         */
        this.zipcode = nativeResult.zipcode;
        
    }
}

/**
 * Recognizer which can scan front side of Malaysia DL cards.
 */
export class MalaysiaDlFrontRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Malaysia DL owner should be extracted 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if vehicle classes of Malaysia DL should be extracted 
         */
        this.extractClass = true;
        
        /** 
         * Defines if name of Malaysia DL owner should be extracted 
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of Malaysia DL owner should be extracted 
         */
        this.extractNationality = true;
        
        /** 
         * Defines if date of issue of Malaysia DL should be extracted 
         */
        this.extractValidFrom = true;
        
        /** 
         * Defines if date of expiry of Malaysia DL should be extracted 
         */
        this.extractValidUntil = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaDlFrontRecognizerResult(nativeResult); }
    }
}