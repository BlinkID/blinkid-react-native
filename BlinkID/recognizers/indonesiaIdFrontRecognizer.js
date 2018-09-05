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
         * The occupation of the Indonesian ID owner. 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * The city of the Indonesian ID owner. 
         */
        this.city = nativeResult.city;
        
        /** 
         * The date of birth of Indonesian ID owner 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The district of the Indonesian ID owner. 
         */
        this.district = nativeResult.district;
        
        /** 
         * The document classifier of Indonesian ID 
         */
        this.documentClassifier = nativeResult.documentClassifier;
        
        /** 
         * The document number of the Indonesian ID owner. 
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
         * The kel desa of the Indonesian ID owner. 
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
         * The rt of the Indonesian ID owner. 
         */
        this.rt = nativeResult.rt;
        
        /** 
         * The rw of the Indonesian ID owner. 
         */
        this.rw = nativeResult.rw;
        
        /** 
         * The sex of the Indonesian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         * image of the signature if enabled with returnSignatureImage property. 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * The document date of expiry of the Indonesian ID 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
        /** 
         * Check if date of expiry is permanent on the Indonesian ID. 
         */
        this.validUntilPermanent = nativeResult.validUntilPermanent;
        
    }
}

/**
 * Class for configuring Indonesian ID Front Recognizer.
 * 
 * Indonesian ID Front recognizer is used for scanning front side of Indonesian ID.
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
         * Defines if address should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if blood type should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractBloodType = true;
        
        /** 
         * Defines if citizenship should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractCitizenship = true;
        
        /** 
         *  Defines if city of Indonesian ID owner should be extracted
         * 
         *   
         */
        this.extractCity = true;
        
        /** 
         * Defines if district should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractDistrict = true;
        
        /** 
         * Defines if keldesa should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractKelDesa = true;
        
        /** 
         * Defines if marital status should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractMaritalStatus = true;
        
        /** 
         * Defines if name of Indonesian ID owner should be extracted
         * 
         *  
         */
        this.extractName = true;
        
        /** 
         * Defines if occupation should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractOccupation = true;
        
        /** 
         * Defines if place of birth of Indonesian ID owner should be extracted
         * 
         *  
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * Defines if religion should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractReligion = true;
        
        /** 
         * Defines if rt should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractRt = true;
        
        /** 
         * Defines if rw should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractRw = true;
        
        /** 
         * Defines if valid until should be extracted from Indonesian ID
         * 
         *  
         */
        this.extractValidUntil = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new IndonesiaIdFrontRecognizerResult(nativeResult); }
    }
}