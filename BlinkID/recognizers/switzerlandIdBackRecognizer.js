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
 * Result object for SwitzerlandIdBackRecognizer.
 */
export class SwitzerlandIdBackRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The issuing authority of Switzerland ID. 
         */
        this.authority = nativeResult.authority;
        
        /** 
         * The date of expiry of Switzerland ID. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of issue of Switzerland ID. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The height of Switzerland ID owner. 
         */
        this.height = nativeResult.height;
        
        /** 
         * The data extracted from the machine readable zone. 
         */
        this.mrzResult = nativeResult.mrzResult != null ? new MrzResult(nativeResult.mrzResult) : null;
        
        /** 
         * The place of origin of Switzerland ID owner. 
         */
        this.placeOfOrigin = nativeResult.placeOfOrigin;
        
        /** 
         * The sex of Switzerland ID owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer which can scan back side of Switzerland ID.
 */
export class SwitzerlandIdBackRecognizer extends Recognizer {
    constructor() {
        super('SwitzerlandIdBackRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if issuing authority of Switzerland ID should be extracted. 
         */
        this.extractAuthority = true;
        
        /** 
         * Defines if date of expiry of Switzerland ID should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if date of issue of Switzerland ID should be extracted. 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if height of Switzerland ID owner should be extracted. 
         */
        this.extractHeight = true;
        
        /** 
         * Defines if place of origin of Switzerland ID owner should be extracted. 
         */
        this.extractPlaceOfOrigin = true;
        
        /** 
         * Defines if sex of Switzerland ID owner should be extracted. 
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SwitzerlandIdBackRecognizerResult(nativeResult); }
    }
}