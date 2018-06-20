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
 * Result object for AustraliaDlFrontRecognizer.
 */
export class AustraliaDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the Australian DL owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The date of birth of Australian DL owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The document date of expiry of the Australian DL 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The licence number of the Australian DL owner. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The licence type of Australian DL. 
         */
        this.licenceType = nativeResult.licenceType;
        
        /** 
         * The first name of the Australian DL owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Class for configuring Australia DL Front Recognizer.
 * 
 * Australia DL Front recognizer is used for scanning front side of Australia DL.
 */
export class AustraliaDlFrontRecognizer extends Recognizer {
    constructor() {
        super('AustraliaDlFrontRecognizer');
        
        /** 
         *  Defines if sex of Australian DL owner should be extracted
         * 
         *   
         */
        this.extractAddress = true;
        
        /** 
         * Defines if date of birth of Australian DL owner should be extracted
         * 
         *  
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry should be extracted from Australian DL
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if citizenship of Australian DL owner should be extracted
         * 
         *  
         */
        this.extractLicenceNumber = true;
        
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
        
        /** 
         * Sets whether signature image from ID card should be extracted.
         * 
         *  
         */
        this.returnSignatureImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new AustraliaDlFrontRecognizerResult(nativeResult); }
    }
}