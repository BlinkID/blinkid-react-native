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
 * Result object for ColombiaIdBackRecognizer.
 */
export class ColombiaIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The birth Date of the Colombia Id owner. 
         */
        this.birthDate = nativeResult.birthDate != null ? new Date(nativeResult.birthDate) : null;
        
        /** 
         * The blood Group of the Colombia Id owner. 
         */
        this.bloodGroup = nativeResult.bloodGroup;
        
        /** 
         * The document Number Colombia Id owner. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * The fingerprint of the Colombian ID owner. 
         */
        this.fingerprint = nativeResult.fingerprint;
        
        /** 
         * The first Name of the Colombia Id owner. 
         */
        this.firstName = nativeResult.firstName;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The last Name of the Colombia Id owner. 
         */
        this.lastName = nativeResult.lastName;
        
        /** 
         * The sex of the Colombia Id owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Class for configuring Colombia Id Back Recognizer.
 * 
 * Colombia Id Back recognizer is used for scanning back side of the Colombia Id.
 */
export class ColombiaIdBackRecognizer extends Recognizer {
    constructor() {
        super('ColombiaIdBackRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Property for setting DPI for full document images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * Set this to true to scan barcodes which don't have quiet zone (white area) around it
         * 
         * Use only if necessary because it slows down the recognition process
         * 
         *  
         */
        this.nullQuietZoneAllowed = true;
        
        /** 
         * Sets whether full document image of ID card should be extracted.
         * 
         *  
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Set this to true to scan even barcode not compliant with standards
         * For example, malformed PDF417 barcodes which were incorrectly encoded
         * 
         * Use only if necessary because it slows down the recognition process
         * 
         *  
         */
        this.scanUncertain = true;
        
        this.createResultFromNative = function (nativeResult) { return new ColombiaIdBackRecognizerResult(nativeResult); }
    }
}