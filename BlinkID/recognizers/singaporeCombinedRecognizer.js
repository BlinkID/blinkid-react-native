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
         * The address of the back side of the Singapore Id owner. 
         */
        this.address = nativeResult.address;
        
        /** 
         * The address Change Date of the back side of the Singapore Id owner. 
         */
        this.addressChangeDate = nativeResult.addressChangeDate != null ? new Date(nativeResult.addressChangeDate) : null;
        
        /** 
         * The blood Type of the back side of the Singapore Id owner. 
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
         * The date Of Issue of the back side of the Singapore Id owner. 
         */
        this.dateOfIssue = nativeResult.dateOfIssue != null ? new Date(nativeResult.dateOfIssue) : null;
        
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
         * back side image of the document if enabled with returnFullDocumentImage property. 
         */
        this.fullDocumentBackImage = nativeResult.fullDocumentBackImage;
        
        /** 
         * front side image of the document if enabled with returnFullDocumentImage property. 
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
         * Returns true if recognizer has finished scanning first side and is now scanning back side,
         * false if it's still scanning first side. 
         */
        this.scanningFirstSideDone = nativeResult.scanningFirstSideDone;
        
        /** 
         * The sex of the Singaporean ID card owner. 
         */
        this.sex = nativeResult.sex;
        
    }
}

/**
 * Singapore ID Combined Recognizer.
 * 
 * Singapore ID Combined recognizer is used for scanning both front and back side of Singapore ID.
 */
export class SingaporeCombinedRecognizer extends Recognizer {
    constructor() {
        super('SingaporeCombinedRecognizer');
        
        /** 
         * Defines if glare detection should be turned on/off.
         * 
         *  
         */
        this.detectGlare = true;
        
        /** 
         * Defines if owner's address should be extracted from back side of the Singapore Id
         * 
         *  
         */
        this.extractAddress = true;
        
        /** 
         * Defines if owner's address change date should be extracted from back side of the Singapore Id
         * 
         *  
         */
        this.extractAddressChangeDate = false;
        
        /** 
         * Defines if owner's blood type should be extracted from back side of the Singapore Id
         * 
         *  
         */
        this.extractBloodType = true;
        
        /** 
         *  Defines if country/place of birth of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractCountryOfBirth = true;
        
        /** 
         *  Defines if date of birth of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractDateOfBirth = true;
        
        /** 
         * Defines if owner's date of issue should be extracted from back side of the Singapore Id
         * 
         *  
         */
        this.extractDateOfIssue = true;
        
        /** 
         *  Defines if name of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractName = true;
        
        /** 
         *  Defines if race of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractRace = true;
        
        /** 
         *  Defines if sex of Singaporean ID card owner should be extracted
         * 
         *   
         */
        this.extractSex = true;
        
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
        
        this.createResultFromNative = function (nativeResult) { return new SingaporeCombinedRecognizerResult(nativeResult); }
    }
}