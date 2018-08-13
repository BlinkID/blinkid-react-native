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
 * Result object for CroatiaIdFrontRecognizer.
 */
export class CroatiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The citizenship of the Croatian ID owner 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * The date of birth of the Croatian ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Croatian ID document 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of expiry of the Croatian ID document is permanent 
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /** 
         * The Croatian ID document is bilingual 
         */
        this.documentBilingual = nativeResult.documentBilingual;
        
        /** 
         * The document number of the Croatian ID 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * The last name of the Croatian ID owner 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The first name of the Croatian ID owner 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The sex of the Croatian ID owner 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer which can scan front side of Croatia national ID cards.
 */
export class CroatiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('CroatiaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if citizenship of Croatian ID owner should be extracted 
         */
        this.extractCitizenship = true;
        
        /** 
         * Defines if date of birth of Croatian ID owner should be extracted 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if date of expiry of Croatian ID document should be extracted 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if first name of Croatian ID owner should be extracted 
         */
        this.extractFirstName = true;
        
        /** 
         * Defines if last name of Croatian ID owner should be extracted 
         */
        this.extractLastName = true;
        
        /** 
         * Defines if sex of Croatian ID owner should be extracted 
         */
        this.extractSex = true;
        
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
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        /** 
         * the DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new CroatiaIdFrontRecognizerResult(nativeResult); }
    }
}