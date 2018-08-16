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
 * Result object for SingaporeDlFrontRecognizer.
 */
export class SingaporeDlFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The birth Date of the Singapore DL owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issue date of the Singapore DL. 
         */
        this.issueDate = nativeResult.issueDate != null ? new Date(nativeResult.issueDate) : null;
        
        /** 
         * The licence Number of the Singapore DL. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The name of the Singapore DL owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The valid till of the Singapore DL. 
         */
        this.validTill = nativeResult.validTill != null ? new Date(nativeResult.validTill) : null;
        
    }
}

/**
 * Class for configuring Singapore Dl Front Recognizer.
 * 
 * Singapore Dl Front recognizer is used for scanning front side of the Singapore Driver's license..
 */
export class SingaporeDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SingaporeDlFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's birth date should be extracted from front side of the Singapore DL
         * 
         *  
         */
        this.extractBirthDate = true;
        
        /** 
         * Defines if the issue date should be extracted from front side of the Singapore DL
         * 
         *  
         */
        this.extractIssueDate = true;
        
        /** 
         * Defines if owner's name should be extracted from front side of the Singapore DL
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if valid till should be extracted from front side of the Singapore DL
         * 
         *  
         */
        this.extractValidTill = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeDlFrontRecognizerResult(nativeResult); }
    }
}