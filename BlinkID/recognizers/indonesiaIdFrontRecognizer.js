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
         * The address of the Indonesian ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The blood type of the Indonesian ID owner. 
         */
        this.bloodType = nativeResult.bloodType;
        
        /** 
         * The citizenship of the Indonesian ID owner. 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * The city of the Indonesian ID owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * The date of birth of the Indonesian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The date of expiry of the Indonesian ID card. 
         */
        this.dateOfExpiry = nativeResult.dateOfExpiry != null ? new Date(nativeResult.dateOfExpiry) : null;
        
        /** 
         * The date of expiry of the Indonesian ID card is permanent. 
         */
        this.dateOfExpiryPermanent = nativeResult.dateOfExpiryPermanent;
        
        /** 
         * The district of the Indonesian ID owner. 
         */
        this.district = nativeResult.district;
        
        /** 
         * The document number of Indonesian ID card. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         * Face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         * Image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * The Kel/Desa of the Indonesian ID owner. 
         */
        this.kelDesa = nativeResult.kelDesa;
        
        /** 
         * The marital status of the Indonesian ID owner. 
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
        /** 
         * The name of the Indonesian ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The occupation of the Indonesian ID owner. 
         */
        this.occupation = nativeResult.occupation;
        
        /** 
         * The place of birth of the Indonesian ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * The province of the Indonesian ID owner. 
         */
        this.province = nativeResult.province;
        
        /** 
         * The religion of the Indonesian ID owner. 
         */
        this.religion = nativeResult.religion;
        
        /** 
         * The RT number of the Indonesian ID owner. 
         */
        this.rt = nativeResult.rt;
        
        /** 
         * The RW number of the Indonesian ID owner. 
         */
        this.rw = nativeResult.rw;
        
        /** 
         * The sex of the Indonesian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * Signature image from the document 
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
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if address of Indonesian ID owner should be extracted. 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if blood type of Indonesian ID owner should be extracted. 
         */
        this.extractBloodType = true;
        
        /** 
         * Defines if citizenship of Indonesian ID owner should be extracted. 
         */
        this.extractCitizenship = true;
        
        /** 
         * Defines if city of Indonesian ID owner should be extracted. 
         */
        this.extractCity = true;
        
        /** 
         * Defines if date of expiry of Indonesian ID card should be extracted. 
         */
        this.extractDateOfExpiry = true;
        
        /** 
         * Defines if district of Indonesian ID owner should be extracted. 
         */
        this.extractDistrict = true;
        
        /** 
         * Defines if Kel/Desa of Indonesian ID owner should be extracted. 
         */
        this.extractKelDesa = true;
        
        /** 
         * Defines if marital status of Indonesian ID owner should be extracted. 
         */
        this.extractMaritalStatus = true;
        
        /** 
         * Defines if name of Indonesian ID owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if occupation of Indonesian ID owner should be extracted. 
         */
        this.extractOccupation = true;
        
        /** 
         * Defines if place of birth of Indonesian ID owner should be extracted. 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if religion of Indonesian ID owner should be extracted. 
         */
        this.extractReligion = true;
        
        /** 
         * Defines if RT number of Indonesian ID owner should be extracted. 
         */
        this.extractRt = true;
        
        /** 
         * Defines if RW number of Indonesian ID owner should be extracted. 
         */
        this.extractRw = true;
        
        /** 
         * The DPI (Dots Per Inch) for face image that should be returned. 
         */
        this.faceImageDpi = 250;
        
        /** 
         * The DPI (Dots Per Inch) for full document image that should be returned. 
         */
        this.fullDocumentImageDpi = 250;
        
        /** 
         * The extension factors for full document image. 
         */
        this.fullDocumentImageExtensionFactors = new ImageExtensionFactors();
        
        /** 
         * Defines whether face image will be available in result. 
         */
        this.returnFaceImage = false;
        
        /** 
         * Defines whether full document image will be available in 
         */
        this.returnFullDocumentImage = false;
        
        /** 
         * Defines whether signature image will be available in result. 
         */
        this.returnSignatureImage = false;
        
        /** 
         * The DPI (Dots Per Inch) for signature image that should be returned. 
         */
        this.signatureImageDpi = 250;
        
        this.createResultFromNative = function (nativeResult) { return new IndonesiaIdFrontRecognizerResult(nativeResult); }
    }
}