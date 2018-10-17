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
 * Result object for IndonesiaIdFrontRecognizer.
 */
export class IndonesiaIdFrontRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The address of the front side of the Indonesia Id owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The blood Type of the front side of the Indonesia Id owner. 
         */
        this.bloodType = nativeResult.bloodType;
        
        /** 
         * The citizenship of the front side of the Indonesia Id owner. 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * The city of the front side of the Indonesia Id owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * The date Of Birth of the front side of the Indonesia Id owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date Of Expiry of the front side of the Indonesia Id owner. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date Of Expiry Permanent of the front side of the Indonesia Id owner. 
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /** 
         * The district of the front side of the Indonesia Id owner. 
         */
        this.district = nativeResult.district;
        
        /** 
         * The document Number of the front side of the Indonesia Id owner. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * face image from the document if enabled with returnFaceImage property. 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * full document image if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The kel Desa of the front side of the Indonesia Id owner. 
         */
        this.kelDesa = nativeResult.kelDesa;
        
        /** 
         * The marital Status of the front side of the Indonesia Id owner. 
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
        /** 
         * The name of the front side of the Indonesia Id owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The occupation of the front side of the Indonesia Id owner. 
         */
        this.occupation = nativeResult.occupation;
        
        /** 
         * The place Of Birth of the front side of the Indonesia Id owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The province of the front side of the Indonesia Id owner. 
         */
        this.province = nativeResult.province;
        
        /** 
         * The religion of the front side of the Indonesia Id owner. 
         */
        this.religion = nativeResult.religion;
        
        /** 
         * The rt of the front side of the Indonesia Id owner. 
         */
        this.rt = nativeResult.rt;
        
        /** 
         * The rw of the front side of the Indonesia Id owner. 
         */
        this.rw = nativeResult.rw;
        
        /** 
         * The sex of the front side of the Indonesia Id owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
    }
}

/**
 * Recognizer which can scan front side of Indonesian national ID cards.
 */
export class IndonesiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('IndonesiaIdFrontRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if blood type of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractBloodType = true;
        
        /** 
         * Defines if citizenship of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractCitizenship = true;
        
        /** 
         * Defines if city of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractCity = true;
        
        /** 
         * Defines if date of expiry of Indonesian ID card should be extracted.
         * 
         *  
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if district of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractDistrict = true;
        
        /** 
         * Defines if Kel/Desa of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractKelDesa = true;
        
        /** 
         * Defines if marital status of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractMaritalStatus = true;
        
        /** 
         * Defines if name of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if occupation of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractOccupation = true;
        
        /** 
         * Defines if place of birth of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if religion of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractReligion = true;
        
        /** 
         * Defines if RT number of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractRt = true;
        
        /** 
         * Defines if RW number of Indonesian ID owner should be extracted.
         * 
         *  
         */
        this.extractRw = true;
        
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
        
        /** 
         * Sets whether signature image from ID card should be extracted.
         * 
         *  
         */
        this.returnSignatureImage = false;
        
        /** 
         * Property for setting DPI for signature images
         * Valid ranges are [100,400]. Setting DPI out of valid ranges throws an exception
         * 
         *  
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new IndonesiaIdFrontRecognizerResult(nativeResult); }
    }
}