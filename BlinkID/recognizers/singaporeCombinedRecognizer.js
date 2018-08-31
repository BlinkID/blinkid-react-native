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
 * Result object for SingaporeCombinedRecognizer.
 */
export class SingaporeCombinedRecognizerResult extends RecognizerResult {
    constructor(nativeResult) {
        super(nativeResult.resultState);
        
        /** 
         * The Singapore ID owner's address 
         */
        this.address = nativeResult.address;
        
        /** 
         * The Singapore ID owner's address change date, present if the address is on a sticker 
         */
        this.addressChangeDate = nativeResult.addressChangeDate != null ? new Date(nativeResult.addressChangeDate) : null;
        
        /** 
         * The Singapore ID owner's blood type 
         */
        this.bloodType = nativeResult.bloodType;
        
        /** 
         * The country/place of birth of the Singaporean ID card owner. 
         */
        this.countryOfBirth = nativeResult.countryOfBirth;
        
        /** 
         * The date of birth of the Singaporean ID card owner. 
         */
        this.dateOfBirth = nativeResult.dateOfBirth != null ? new Date(nativeResult.dateOfBirth) : null;
        
        /** 
         * The Singapore ID's date of issue 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
        /** 
         * Defines digital signature of recognition results. 
         */
        this.digitalSignature = nativeResult.digitalSignature;
        
        /** 
         * Defines digital signature version. 
         */
        this.digitalSignatureVersion = nativeResult.digitalSignatureVersion;
        
        /** 
         * Defines {true} if data from scanned parts/sides of the document match, 
         */
        this.documentDataMatch = nativeResult.documentDataMatch;
        
        /** 
         *  face image from the document 
         */
        this.faceImage = nativeResult.faceImage;
        
        /** 
         *  back side image of the document 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         *  front side image of the document 
         */
        this.fullDocumentFrontImage = nativeResult.fullDocumentFrontImage;
        
        /** 
         * The identity card number of the Singaporean ID card. 
         */
        this.identityCardNumber = nativeResult.identityCardNumber;
        
        /** 
         * The name of the Singaporean ID card owner. 
         */
        this.name = nativeResult.name;
        
        /** 
         * The race of the Singaporean ID card owner. 
         */
        this.race = nativeResult.race;
        
        /** 
         *  {true} if recognizer has finished scanning first side and is now scanning back side, 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Singaporean ID card owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Recognizer for combined reading of both front and back side of Singapore ID.
 */
export class SingaporeCombinedRecognizer extends Recognizer {
    constructor() {
        super('SingaporeCombinedRecognizer');
        
        /** 
         * Defines whether glare detector is enabled. 
         */
        this.detectGlare = true;
        
        /** 
         * Defines if Singapore ID owner's address should be extracted 
         */
        this.extractAddress = true;
        
        /** 
         * Defines if Singapore ID owner's address change date on sticker should be extracted 
         */
        this.extractAddressChangeDate = false;
        
        /** 
         * Defines if Singapore ID owner's blood type should be extracted 
         */
        this.extractBloodType = true;
        
        /** 
         * Defines if country of birth of Singaporean ID card owner should be extracted. 
         */
        this.extractCountryOfBirth = true;
        
        /** 
         * Defines if date of birth of Singaporean ID card owner should be extracted. 
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if Singapore ID's date of issue should be extracted 
         */
        this.extractDateOfIssue = true;
        
        /** 
         * Defines if name of Singaporean ID card owner should be extracted. 
         */
        this.extractName = true;
        
        /** 
         * Defines if race of Singaporean ID card owner should be extracted. 
         */
        this.extractRace = true;
        
        /** 
         * Defines if sex of Singaporean ID card owner should be extracted. 
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
         * Defines whether or not recognition result should be signed. 
         */
        this.signResult = false;
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeCombinedRecognizerResult(nativeResult); }
    }
}