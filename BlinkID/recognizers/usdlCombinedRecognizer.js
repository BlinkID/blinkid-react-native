import { Recognizer, RecognizerResult } from '../recognizer'

/**
 * Result object for UsdlCombinedRecognizer.
 */
export class UsdlCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * Digital signature of the recognition result. Available only if enabled with signResult property. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Version of the digital signature. Available only if enabled with signResult property. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Returns true if data from scanned parts/sides of the document match,
         * false otherwise. For example if date of expiry is scanned from the front and back side
         * of the document and values do not match, this method will return false. Result will
         * be true only if scanned values for all fields that are compared are the same. 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** Array of elements that are not part of AAMVA standard and are specific to each US state. */
        this.optionalElements = nativeResult.optionalElements;
    
        /** The raw bytes contained inside 2D barcode. */
        this.rawData = nativeResult.rawData;
    
        /** Raw string inside 2D barcode. */
        this.rawStringData = nativeResult.rawStringData;
    
        /** True if returned result is uncertain, i.e. if scanned barcode was incomplete (i.e. */
        this.uncertain = nativeResult.uncertain;

        /** Fields inside US Driver's licence. Available Keys are listed in UsdlKeys enum. */
        this.fields = nativeResult.fields;
    }
}

/**
 * USDL Combined Recognizer.
 * 
 * USDL Combined recognizer is used for scanning both front and back side of US Driver's License.
 */
export class UsdlCombinedRecognizer extends Recognizer {
    constructor() {
        super('UsdlCombinedRecognizer');
        
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
        
        /** 
         * Whether or not recognition result should be signed.
         * 
         *  
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new UsdlCombinedRecognizerResult(nativeResult); }
    }
}