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
         * The City of the Malaysian DL owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * The Class of the Malaysian DL. 
         */
        this.dlClass = nativeResult.dlClass;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The Full Address of the Malaysian DL owner. 
         */
        this.fullAddress = nativeResult.fullAddress;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The Identity Number of the Malaysian DL owner. 
         */
        this.identityNumber = nativeResult.identityNumber;
        
        /** 
         * The Name of the Malaysian DL owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The Nationality of the Malaysian DL owner. 
         */
        this.nationality = nativeResult.nationality;
        
        /** 
         * The State of the Malaysian DL owner. 
         */
        this.state = nativeResult.state;
        
        /** 
         * The Street of the Malaysian DL owner. 
         */
        this.street = nativeResult.street;
        
        /** 
         * The Valid From date of the Malaysian DL owner. 
         */
        this.validFrom = nativeResult.validFrom != null ? new Date(nativeResult.validFrom) : null;
        
        /** 
         * The Valid Until date of the Malaysian DL owner. 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
        /** 
         * The Zip Code of the Malaysian DL owner. 
         */
        this.zipCode = nativeResult.zipCode;
        
    }
}

/**
 * Class for configuring Malaysian DL Front Recognizer.
 * 
 * Malaysian DL Front recognizer is used for scanning front side of Malaysian DL.
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
         * Defines if owner's license class should be extracted from Malaysian DL
         * 
         *  
         */
        this.extractDlClass = true;
        
        /** 
         * Defines if owner's full address should be extracted from Malaysian DL
         * 
         *  
         */
        this.extractFullAddress = true;
        
        /** 
         * Defines if owner's name should be extracted from Malaysian DL
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if owner's nationality should be extracted from Malaysian DL
         * 
         *  
         */
        this.extractNationality = true;
        
        /** 
         * Defines if owner's valid from should be extracted from Malaysian DL
         * 
         *  
         */
        this.extractValidFrom = true;
        
        /** 
         * Defines if owner's valid until should be extracted from Malaysian DL
         * 
         *  
         */
        this.extractValidUntil = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new MalaysiaDlFrontRecognizerResult(nativeResult); }
    }
}