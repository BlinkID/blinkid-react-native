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
         * The birth date of Singapore driver's owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The issue date of Singapore driver's licence. 
         */
        this.issueDate = nativeResult.issueDate != null ? new Date(nativeResult.issueDate) : null;
        
        /** 
         * The licence number of Singapore driver's licence. 
         */
        this.licenceNumber = nativeResult.licenceNumber;
        
        /** 
         * The (full) name of Singapore driver's licence owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The valid till date of Singapore driver's licence. 
         */
        this.validTill = nativeResult.validTill != null ? new Date(nativeResult.validTill) : null;
        
    }
}

/**
 * The Singapore Dl Front Recognizer is used for scanning front side of the Singapore Dl.
 */
export class SingaporeDlFrontRecognizer extends Recognizer {
    constructor() {
        super('SingaporeDlFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if birth date of Singapore driver's license owner should be extracted. 
         */
        this.extractBirthDate = true;
        
        /** 
         * Defines if issue date of Singapore driver's license should be extracted. 
         */
        this.extractIssueDate = true;
        
        /** 
         * Defines if name of Singapore driver's license owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if valid till date of Singapore driver's license should be extracted. 
         */
        this.extractValidTill = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeDlFrontRecognizerResult(nativeResult); }
    }
}