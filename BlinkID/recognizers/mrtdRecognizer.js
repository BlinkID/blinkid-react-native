import { Recognizer, RecognizerResult } from '../recognizer'
import {
    Date,
    Point,
    Quadrilateral,
    MrtdDocumentType,
    MrzResult,
    DocumentFaceDetectorType,
    Country,
    Region,
    Type,
    DocumentImageColorStatus,
    DocumentImageMoireStatus,
    AnonymizationMode,
    RecognitionModeFilter,
    
    
    ImageExtensionFactors,
    DataMatchResult,
} from '../types'

/**
 * Result object for MrtdRecognizer.
 */
export class MrtdRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /**
         * Image of the full document
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /**
         * The Data extracted from the machine readable zone.
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
    }
}

/**
 * Recognizer that can recognize Machine Readable Zone (MRZ) of the Machine Readable Travel Document (MRTD)
 */
export class MrtdRecognizer extends Recognizer {
    constructor() {
        super('MrtdRecognizer');
        
        /**
         * Whether special characters are allowed.
         */
        this.allowSpecialCharacters = false;
        
        /**
         * Whether returning of unparsed results is allowed.
         */
        this.allowUnparsedResults = false;
        
        /**
         * Whether returning of unverified results is allowed.
         */
        this.allowUnverifiedResults = false;
        
        /**
         * Defines whether glare detector is enabled.
         */
        this.detectGlare = true;
        
        /**
         * The DPI (Dots Per Inch) for full document image that should be returned.
         */
        this.fullDocumentImageDpi = 250;
        
        /**
         * The extension factors for full document image.
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /**
         * Defines whether full document image will be available in
         */
        this.returnFullDocumentImage = false;
        
        this.createResultFromNative = function (nativeResult) { return new MrtdRecognizerResult(nativeResult); }
    }
}