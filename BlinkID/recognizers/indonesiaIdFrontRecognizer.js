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
         * address of Indonesian ID owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * blood type of Indonesian ID owner. 
         */
        this.bloodType = nativeResult.bloodType;
        
        /** 
         * citizenship of Indonesian ID owner. 
         */
        this.citizenship = nativeResult.citizenship;
        
        /** 
         * the city of Indonesian ID. 
         */
        this.city = nativeResult.city;
        
        /** 
         * date of birth of Indonesian ID owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * district of Indonesian ID owner. 
         */
        this.district = nativeResult.district;
        
        /** 
         * document classifier of Indonesian ID. 
         */
        this.documentClassifier = nativeResult.documentClassifier;
        
        /** 
         * the document number of Indonesian ID. 
         */
        this.documentNumber = nativeResult.documentNumber;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  image of the full document 
         */
        this.fullDocumentImage = nativeResult.fullDocumentImage;
        
        /** 
         * Kel/ Desa of Indonesian ID owner. 
         */
        this.kelDesa = nativeResult.kelDesa;
        
        /** 
         * marital status of Indonesian ID owner. 
         */
        this.maritalStatus = nativeResult.maritalStatus;
        
        /** 
         * the name of Indonesian ID owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * occupation of Indonesian ID owner. 
         */
        this.occupation = nativeResult.occupation;
        
        /** 
         * place of birth of Indonesian ID owner. 
         */
        this.placeOfBirth = nativeResult.placeOfBirth;
        
        /** 
         * the province of Indonesian ID. 
         */
        this.province = nativeResult.province;
        
        /** 
         * religion of Indonesian ID owner. 
         */
        this.religion = nativeResult.religion;
        
        /** 
         * RT of Indonesian ID. 
         */
        this.rt = nativeResult.rt;
        
        /** 
         * RW of Indonesian ID. 
         */
        this.rw = nativeResult.rw;
        
        /** 
         * sex of Indonesian ID owner. 
         */
        this.sex = nativeResult.sex;
        
        /** 
         *  signature image from the document 
         */
        this.signatureImage = nativeResult.signatureImage;
        
        /** 
         * valid until of Indonesian ID. 
         */
        this.validUntil = nativeResult.validUntil != null ? new Date(nativeResult.validUntil) : null;
        
        /** 
         * {true} if date of expiry of the Indonesian ID is permanent, {false} otherwise. 
         */
        this.validUntilPermanent = nativeResult.validUntilPermanent;
        
    }
}

/**
 *  Recognizer for reading front side of indonesian ID document.

 */
export class IndonesiaIdFrontRecognizer extends Recognizer {
    constructor() {
        super('IndonesiaIdFrontRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * true if address of Indonesian ID owner is being extracted 
         */
        this.extractAddress = true;
        
        /** 
         * true if blood type of Indonesian ID owner is being extracted 
         */
        this.extractBloodType = true;
        
        /** 
         * true if citizenship of Indonesian ID owner is being extracted 
         */
        this.extractCitizenship = true;
        
        /** 
         * true if city of Indonesian ID owner is being extracted 
         */
        this.extractCity = true;
        
        /** 
         * true if district of Indonesian ID owner is being extracted 
         */
        this.extractDistrict = true;
        
        /** 
         * true if Kel/Desa of Indonesian ID owner is being extracted 
         */
        this.extractKelDesa = true;
        
        /** 
         * true if marital status of Indonesian ID owner is being extracted 
         */
        this.extractMaritalStatus = true;
        
        /** 
         * true if name of Indonesian ID owner is being extracted 
         */
        this.extractName = true;
        
        /** 
         * true if occupation of Indonesian ID owner is being extracted 
         */
        this.extractOccupation = true;
        
        /** 
         * true if place of birth of Indonesian ID owner is being extracted 
         */
        this.extractPlaceOfBirth = true;
        
        /** 
         * true if religion of Indonesian ID owner is being extracted 
         */
        this.extractReligion = true;
        
        /** 
         * true if RT of Indonesian ID owner is being extracted 
         */
        this.extractRt = true;
        
        /** 
         * true if RW of Indonesian ID owner is being extracted 
         */
        this.extractRw = true;
        
        /** 
         * true if valid until of Indonesian ID owner is being extracted 
         */
        this.extractValidUntil = true;
        
        /** 
         * true if valid until permanent of Indonesian ID owner is being extracted 
         */
        this.extractValidUntilPermanent = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new IndonesiaIdFrontRecognizerResult(nativeResult); }
    }
}