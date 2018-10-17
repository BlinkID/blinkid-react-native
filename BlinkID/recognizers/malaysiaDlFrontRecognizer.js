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
         * The city of the front side of the Malaysia Dl owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * The dl Class of the front side of the Malaysia Dl owner. 
         */
        this.dlClass = nativeResult.dlClass;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The full Address of the front side of the Malaysia Dl owner. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The identity Number of the front side of the Malaysia Dl owner. 
         */
        this.identityNumber = nativeResult.identityNumber;
        
        /** 
         * The name of the front side of the Malaysia Dl owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The nationality of the front side of the Malaysia Dl owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The owner State of the front side of the Malaysia Dl owner. 
         */
        this.ownerState = nativeResult.ownerState;
        
        /** 
         * The street of the front side of the Malaysia Dl owner. 
         */
        this.street = nativeResult.street;
        
        /** 
         * The valid From of the front side of the Malaysia Dl owner. 
         */
        this.validFrom = nativeResult.validFrom != null ? new Date(nativeResult.validFrom) : null;
        
        /** 
         * The valid Until of the front side of the Malaysia Dl owner. 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
        /** 
         * The zipcode of the front side of the Malaysia Dl owner. 
         */
        this.zipcode = nativeResult.zipcode;
        
    }
}

/**
 * Recognizer which can scan front side of Malaysian DL cards.
 */
export class MalaysiaDlFrontRecognizer extends Recognizer {
    constructor() {
        super('MalaysiaDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Malaysian DL owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if vehicle classes of Malaysian DL should be extracted.
         * 
         *  
         */
        this.extractClass = true;
        
        /** 
         * Defines if name of Malaysian DL owner should be extracted.
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if nationality of Malaysian DL owner should be extracted.
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if date of issue of Malaysian DL should be extracted.
         * 
         *  
         */
        this.extractValidFrom = true;
        
        /** 
         * Defines if date of expiry of Malaysian DL should be extracted.
         * 
         *  
         */
        this.extractValidUntil = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaDlFrontRecognizerResult(nativeResult); }
    }
}