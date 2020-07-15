/**
 * Represents a date extracted from image.
 */
export class Date {
    constructor(nativeDate) {
        /** day in month */
        this.day = nativeDate.day;
        /** month in year */
        this.month = nativeDate.month;
        /** year */
        this.year = nativeDate.year;
    }    
}

/**
 * Represents a point in image
 */
export class Point {
    constructor(nativePoint) {
        /** x coordinate of the point */
        this.x = nativePoint.x;
        /** y coordinate of the point */
        this.y = nativePoint.y;
    }
}

/**
 * Represents a quadrilateral location in the image
 */
export class Quadrilateral {
    constructor(nativeQuad) {
        /** upper left point of the quadrilateral */
        this.upperLeft = new Point(nativeQuad.upperLeft);
        /** upper right point of the quadrilateral */
        this.upperRight = new Point(nativeQuad.upperRight);
        /** lower left point of the quadrilateral */
        this.lowerLeft = new Point(nativeQuad.lowerLeft);
        /** lower right point of the quadrilateral */
        this.lowerRight = new Point(nativeQuad.lowerRight);
    }
}

/**
 * Possible types of Machine Readable Travel Documents (MRTDs).
 */
export const MrtdDocumentType = Object.freeze(
    {
        /** Unknown document type */
        Unknown : 1,
        /** Identity card */
        IdentityCard : 2,
        /** Passport */
        Passport : 3,
        /** Visa */
        Visa : 4,
        /** US Green Card */
        GreenCard : 5,
        /** Malaysian PASS type IMM13P */
        MalaysianPassIMM13P : 6
    }
);

/**
 * Possible types of documents scanned with IdBarcodeRecognizer.
 */
export const IdBarcodeDocumentType = Object.freeze(
    {
        /** No document was scanned */
        None: 1,
        /** AAMVACompliant document was scanned */
        AAMVACompliant: 2,
        /** Argentina ID document was scanned */
        ArgentinaID: 3,
        /** Argentina driver license document was scanned */
        ArgentinaDL: 4,
        /** Colombia ID document was scanned */
        ColombiaID: 5,
        /** Colombia driver license document was scanned */
        ColombiaDL: 6,
        /** NigeriaVoter ID document was scanned */
        NigeriaVoterID: 7,
        /** Nigeria driver license document was scanned */
        NigeriaDL: 8,
        /** Panama ID document was scanned */
        PanamaID: 9,
        /** SouthAfrica ID document was scanned */
        SouthAfricaID: 10
    }
);

/**
 * Defines possible color statuses determined from scanned image scanned with BlinkID or BlinkID Combined Recognizer
 */
export const DocumentImageColorStatus = Object.freeze(
    {
        /** Determining image color status was not performed */ 
        NotAvailable: 1,
        /** Black-and-white image scanned */ 
        BlackAndWhite: 2,
        /** Color image scanned */ 
        Color: 3
    }
);

/**
 * Defines possible states of Moire pattern detection.
 */
export const DocumentImageMoireStatus = Object.freeze(
    {
        /** Detection of Moire patterns was not performed. */
        NotAvailable: 1,

        /** Moire pattern not detected on input image. */
        NotDetected: 2,

        /** Moire pattern detected on input image. */
        Detected: 3
    }
);

/**
 * Define level of anonymization performed on recognizer result.
 */
export const AnonymizationMode = Object.freeze(
    {
        /** Anonymization will not be performed. */
        None: 1,

        /** FullDocumentImage is anonymized with black boxes covering sensitive data. */
        ImageOnly: 2,

        /** Result fields containing sensitive data are removed from result. */
        ResultFieldsOnly: 3,

        /** This mode is combination of ImageOnly and ResultFieldsOnly modes. */
        FullResult: 4
    }
);

/**
 * Defines possible color and moire statuses determined from scanned image.
 */
export class ImageAnalysisResult {
    constructor(nativeImageAnalysisResult) {
        /**  Whether the image is blurred. */
        this.blurred = nativeImageAnalysisResult.blurred;
        /** he color status determined from scanned image. */
        this.documentImageColorStatus = nativeImageAnalysisResult.documentImageColorStatus;
        /** The Moire pattern detection status determined from the scanned image. */
        this.documentImageMoireStatus = nativeImageAnalysisResult.documentImageMoireStatus;
    }
}

/**
 * Defines possible the document country from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const Country = Object.freeze(
    {
        None: 1,
        Albania: 2,
        Algeria: 3,
        Argentina: 4,
        Australia: 5,
        Austria: 6,
        Azerbaijan: 7,
        Bahrain: 8,
        Bangladesh: 9,
        Belgium: 10,
        BosniaAndHerzegovina: 11,
        Brunei: 12,
        Bulgaria: 13,
        Cambodia: 14,
        Canada: 15,
        Chile: 16,
        Colombia: 17,
        CostaRica: 18,
        Croatia: 19,
        Cyprus: 20,
        Czechia: 21,
        Denmark: 22,
        DominicanRepublic: 23,
        Egypt: 24,
        Estonia: 25,
        Finland: 26,
        France: 27,
        Georgia: 28,
        Germany: 29,
        Ghana: 30,
        Greece: 31,
        Guatemala: 32,
        HongKong: 33,
        Hungary: 34,
        India: 35,
        Indonesia: 36,
        Ireland: 37,
        Israel: 38,
        Italy: 39,
        Jordan: 40,
        Kazakhstan: 41,
        Kenya: 42,
        Kosovo: 43,
        Kuwait: 44,
        Latvia: 45,
        Lithuania: 46,
        Malaysia: 47,
        Maldives: 48,
        Malta: 49,
        Mauritius: 50,
        Mexico: 51,
        Morocco: 52,
        Netherlands: 53,
        NewZealand: 54,
        Nigeria: 55,
        Pakistan: 56,
        Panama: 57,
        Paraguay: 58,
        Philippines: 59,
        Poland: 60,
        Portugal: 61,
        PuertoRico: 62,
        Qatar: 63,
        Romania: 64,
        Russia: 65,
        SaudiArabia: 66,
        Serbia: 67,
        Singapore: 68,
        Slovakia: 69,
        Slovenia: 70,
        SouthAfrica: 71,
        Spain: 72,
        Sweden: 73,
        Switzerland: 74,
        Taiwan: 75,
        Thailand: 76,
        Tunisia: 77,
        Turkey: 78,
        UAE: 79,
        Uganda: 80,
        UK: 81,
        Ukraine: 82,
        Usa: 83,
        Vietnam: 84,
        Brazil: 85,
        Norway: 86,
        Oman: 87,
        ElSalvador: 88,
        SriLanka: 89
    }
);

/**
 * Defines possible the document country's region from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const Region = Object.freeze(
    {
        None: 1,
        Alabama: 2,
        Alaska: 3,
        Alberta: 4,
        Arizona: 5,
        Arkansas: 6,
        AustralianCapitalTerritory: 7,
        BritishColumbia: 8,
        California: 9,
        Colorado: 10,
        Connecticut: 11,
        Delaware: 12,
        DistrictOfColumbia: 13,
        Florida: 14,
        Georgia: 15,
        Hawaii: 16,
        Idaho: 17,
        Illinois: 18,
        Indiana: 19,
        Iowa: 20,
        Kansas: 21,
        Kentucky: 22,
        Louisiana: 23,
        Maine: 24,
        Manitoba: 25,
        Maryland: 26,
        Massachusetts: 27,
        Michigan: 28,
        Minnesota: 29,
        Mississippi: 30,
        Missouri: 31,
        Montana: 32,
        Nebraska: 33,
        Nevada: 34,
        NewBrunswick: 35,
        NewHampshire: 36,
        NewJersey: 37,
        NewMexico: 38,
        NewSouthWales: 39,
        NewYork: 40,
        NorthernTerritory: 41,
        NorthCarolina: 42,
        NorthDakota: 43,
        NovaScotia: 44,
        Ohio: 45,
        Oklahoma: 46,
        Ontario: 47,
        Oregon: 48,
        Pennsylvania: 49,
        Quebec: 50,
        Queensland: 51,
        RhodeIsland: 52,
        Saskatchewan: 53,
        SouthAustralia: 54,
        SouthCarolina: 55,
        SouthDakota: 56,
        Tasmania: 57,
        Tennessee: 58,
        Texas: 59,
        Utah: 60,
        Vermont: 61,
        Victoria: 62,
        Virginia: 63,
        Washington: 64,
        WesternAustralia: 65,
        WestVirginia: 66,
        Wisconsin: 67,
        Wyoming: 68,
        Yukon: 69
    }
);

/**
 * Defines possible the document type from ClassInfo scanned with BlinkID or BlinkID Combined Recognizer
 */
export const Type = Object.freeze(
    {
        None: 1,
        ConsularId: 2,
        Dl: 3,
        DlPublicServicesCard: 4,
        FinCard: 5,
        EmploymentPass: 6,
        GreenCard: 7,
        Id: 8,
        MultipurposeId: 9,
        MyKad: 10,
        MyKid: 11,
        MyTentera: 12,
        PanCard: 13,
        ProfessionalId: 14,
        PublicServicesCard: 15,
        ResidencePermit: 16,
        ResidentId: 17,
        TemporaryResidencePermit: 18,
        VoterId: 19,
        WorkPermit: 20,
        iKad: 21,
        MilitaryId: 22,
        MyKas: 23,
        SocialSecurityCard: 24,
        HealthInsuranceCard: 25
    }
);

/** Defines the data extracted from the barcode. */
export class BarcodeResult {
    constructor(nativeBarcodeResult) {

        /** Type of the barcode scanned */
        this.barcodeType = nativeBarcodeResult.barcodeType;
        
        /** Byte array with result of the scan */
        this.rawData = nativeBarcodeResult.rawData;

        /** Retrieves string content of scanned data */
        this.stringData = nativeBarcodeResult.stringData;

        /** Flag indicating uncertain scanning data */
        this.uncertain = nativeBarcodeResult.uncertain;

        /** The first name of the document owner. */
        this.firstName = nativeBarcodeResult.firstName;

        /** The last name of the document owner. */
        this.lastName = nativeBarcodeResult.lastName;

        /** The full name of the document owner. */
        this.fullName = nativeBarcodeResult.fullName;

        /** The additional name information of the document owner. */
        this.additionalNameInformation = nativeBarcodeResult.additionalNameInformation;

        /** The address of the document owner. */
        this.address = nativeBarcodeResult.address;

        /** The place of birth of the document owner. */
        this.placeOfBirth = nativeBarcodeResult.placeOfBirth;

        /** The nationality of the documet owner. */
        this.nationality = nativeBarcodeResult.nationality;

        /** The race of the document owner. */
        this.race = nativeBarcodeResult.race;

        /** The religion of the document owner. */
        this.religion = nativeBarcodeResult.religion;

        /** The profession of the document owner. */
        this.profession = nativeBarcodeResult.profession;

        /** The marital status of the document owner. */
        this.maritalStatus = nativeBarcodeResult.maritalStatus;

        /** The residential stauts of the document owner. */
        this.residentialStatus = nativeBarcodeResult.residentialStatus;

        /** The employer of the document owner. */
        this.employer = nativeBarcodeResult.employer;

        /** The sex of the document owner. */
        this.sex = nativeBarcodeResult.sex;

        /** The date of birth of the document owner. */
        this.dateOfBirth = nativeBarcodeResult.dateOfBirth != null ? new Date(nativeBarcodeResult.dateOfBirth) : null;

        /** The date of issue of the document. */
        this.dateOfIssue = nativeBarcodeResult.dateOfIssue.Date != null ? new Date(nativeBarcodeResult.dateOfIssue) : null;

        /** The date of expiry of the document. */
        this.dateOfExpiry = nativeBarcodeResult.dateOfExpiry.Date != null ? new Date(nativeBarcodeResult.dateOfExpiry) : null;

        /** The document number. */
        this.documentNumber = nativeBarcodeResult.documentNumber;

        /**  The personal identification number. */
        this.personalIdNumber = nativeBarcodeResult.personalIdNumber;

        /** The additional number of the document. */
        this.documentAdditionalNumber = nativeBarcodeResult.documentAdditionalNumber;

        /** The issuing authority of the document. */
        this.issuingAuthority = nativeBarcodeResult.issuingAuthority;

        /** The street address portion of the document owner. */
        this.street = nativeBarcodeResult.street;

        /** The postal code address portion of the document owner. */
        this.postalCode = nativeBarcodeResult.postalCode;

        /** The city address portion of the document owner. */
        this.city = nativeBarcodeResult.city;

        /** The jurisdiction code address portion of the document owner. */
        this.jurisdiction = nativeBarcodeResult.jurisdiction;

        /** The driver license detailed info. */
        this.driverLicenseDetailedInfo = nativeBarcodeResult.driverLicenseDetailedInfo != null ? new DriverLicenseDetailedInfo(nativeBarcodeResult.driverLicenseDetailedInfo) : null;

        /** Flag that indicates if barcode result is empty */
        this.empty = nativeBarcodeResult.empty;
    }
}

/** Defines the data extracted from the visual inspection zone */
export class VizResult {
    constructor(nativeVizResult) {

        /** The first name of the document owner. */
        this.firstName = nativeVizResult.firstName;

        /** The last name of the document owner. */
        this.lastName = nativeVizResult.lastName;

        /** The full name of the document owner. */
        this.fullName = nativeVizResult.fullName;

        /** The additional name information of the document owner. */
        this.additionalNameInformation = nativeVizResult.additionalNameInformation;

        /** The localized name of the document owner. */
        this.localizedName = nativeVizResult.localizedName;

        /** The address of the document owner. */
        this.address = nativeVizResult.address;

        /** The additional address information of the document owner. */
        this.additionalAddressInformation = nativeVizResult.additionalAddressInformation;

        /** The place of birth of the document owner. */
        this.placeOfBirth = nativeVizResult.placeOfBirth;

        /** The nationality of the documet owner. */
        this.nationality = nativeVizResult.nationality;

        /** The race of the document owner. */
        this.race = nativeVizResult.race;

        /** The religion of the document owner. */
        this.religion = nativeVizResult.religion;

        /** The profession of the document owner. */
        this.profession = nativeVizResult.profession;

        /** The marital status of the document owner. */
        this.maritalStatus = nativeVizResult.maritalStatus;

        /** The residential stauts of the document owner. */
        this.residentialStatus = nativeVizResult.residentialStatus;

        /** The employer of the document owner. */
        this.employer = nativeVizResult.employer;

        /** The sex of the document owner. */
        this.sex = nativeVizResult.sex;

        /** The date of birth of the document owner. */
        this.dateOfBirth = nativeVizResult.dateOfBirth.Date != null ? new Date(nativeVizResult.dateOfBirth) : null;

        /** The date of issue of the document. */
        this.dateOfIssue = nativeVizResult.dateOfIssue.Date != null ? new Date(nativeVizResult.dateOfIssue) : null;

        /** The date of expiry of the document. */
        this.dateOfExpiry = nativeVizResult.dateOfExpiry.Date != null ? new Date(nativeVizResult.dateOfExpiry) : null;

        /** The document number. */
        this.documentNumber = nativeVizResult.documentNumber;

        /** The personal identification number. */
        this.personalIdNumber = nativeVizResult.personalIdNumber;

        /** The additional number of the document. */
        this.documentAdditionalNumber = nativeVizResult.documentAdditionalNumber;

        /** The additional personal identification number. */
        this.additionalPersonalIdNumber = nativeVizResult.additionalPersonalIdNumber;

        /** The issuing authority of the document. */
        this.issuingAuthority = nativeVizResult.issuingAuthority;

        /** The driver license detailed info. */
        this.driverLicenseDetailedInfo = nativeVizResult.driverLicenseDetailedInfo != null ? new DriverLicenseDetailedInfo(nativeVizResult.driverLicenseDetailedInfo) : null;

        /** The driver license conditions. */
        this.conditions = nativeVizResult.conditions;

        /** Flag that indicates if barcode result is empty */
        this.empty = nativeVizResult.empty;
    }
}

/**
 * Represents data extracted from MRZ (Machine Readable Zone) of Machine Readable Travel Document (MRTD).
 */
export class MrzResult {
    constructor(nativeMRZResult) {
        /**
         * Type of recognized document. It is always one of the values represented by BlinkIDScanner.MRTDDocumentType
         */
        this.documentType = nativeMRZResult.documentType;
        /** The primary indentifier. If there is more than one component, they are separated with space. */
        this.primaryId = nativeMRZResult.primaryId;
        /** The secondary identifier. If there is more than one component, they are separated with space. */
        this.secondaryId = nativeMRZResult.secondaryId;
        /**
         * Three-letter or two-letter code which indicate the issuing State. Three-letter codes are based
         * on Aplha-3 codes for entities specified in ISO 3166-1, with extensions for certain States. Two-letter
         * codes are based on Alpha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
         */
        this.issuer = nativeMRZResult.issuer;
        /** Holder's date of birth */
        this.dateOfBirth = nativeMRZResult.dateOfBirth != null ? new Date(nativeMRZResult.dateOfBirth) : null;
        /**
         * The document number. Document number contains up to 9 characters.
         * Element does not exist on US Green Card. To see which document was scanned use documentType property.
         */
        this.documentNumber = nativeMRZResult.documentNumber;
        /**
         * The nationality of the holder represented by a three-letter or two-letter code. Three-letter
         * codes are based on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain
         * States. Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with
         * extensions for certain States.
         */
        this.nationality = nativeMRZResult.nationality;
        /**
         * The gender of the card holder. Gender is specified by use of the single initial, capital letter F for female,
         * M for male or <code>&lt;</code> for unspecified.
         */
        this.gender = nativeMRZResult.gender;
        /**
         * The document code. Document code contains two characters. For MRTD the first character shall
         * be A, C or I. The second character shall be discretion of the issuing State or organization except
         * that V shall not be used, and `C` shall not be used after `A` except in the crew member certificate.
         * On machine-readable passports (MRP) first character shall be `P` to designate an MRP. One additional
         * letter may be used, at the discretion of the issuing State or organization, to designate a particular
         * MRP. If the second character position is not used for this purpose, it shall be filled by the filter
         * character <code>&lt;</code>.
         */
        this.documentCode = nativeMRZResult.documentCode;
        /** The date of expiry */
        this.dateOfExpiry = nativeMRZResult.dateOfExpiry != null ? new Date(nativeMRZResult.dateOfExpiry) : null;
        /**
         * The first optional data. Contains empty string if not available.
         * Element does not exist on US Green Card. To see which document was scanned use the documentType property.
         */
        this.opt1 = nativeMRZResult.opt1;
        /**
         * The second optional data. Contains empty string if not available.
         * Element does not exist on Passports and Visas. To see which document was scanned use the documentType property.
         */
        this.opt2 = nativeMRZResult.opt2;
        /**
         * The alien number. Contains empty string if not available.
         * Exists only on US Green Cards. To see which document was scanned use the documentType property.
         */
        this.alienNumber = nativeMRZResult.alienNumber;
        /**
         * The application receipt number. Contains empty string if not available.
         * Exists only on US Green Cards. To see which document was scanned use the documentType property.
         */
        this.applicationReceiptNumber = nativeMRZResult.applicationReceiptNumber;
        /**
         * The immigrant case number. Contains empty string if not available.
         * Exists only on US Green Cards. To see which document was scanned use the documentType property.
         */
        this.immigrantCaseNumber = nativeMRZResult.immigrantCaseNumber;
        /**
         * The entire Machine Readable Zone text from ID. This text is usually used for parsing
         * other elements.
         * NOTE: This string is available only if OCR result was parsed successfully.
         */
        this.mrzText = nativeMRZResult.mrzText;
        /** true if Machine Readable Zone has been parsed, false otherwise. */
        this.mrzParsed = nativeMRZResult.mrzParsed;
        /** true if all check digits inside MRZ are correct, false otherwise. */
        this.mrzVerified = nativeMRZResult.mrzVerified;

        /**
        * Sanitized field opt1
        */
        this.sanitizedOpt1 = nativeMRZResult.sanitizedOpt1;

        /**
        * Sanitized field opt2
        */
        this.sanitizedOpt2 = nativeMRZResult.sanitizedOpt2;

        /**
        * Sanitized field nationality
        */
        this.sanitizedNationality = nativeMRZResult.sanitizedNationality;

        /**
        * Sanitized field issuer
        */
        this.sanitizedIssuer = nativeMRZResult.sanitizedIssuer;

        /**
        * Sanitized document code
        */
        this.sanitizedDocumentCode = nativeMRZResult.sanitizedDocumentCode;

        /**
        * Sanitized document number
        */
        this.sanitizedDocumentNumber = nativeMRZResult.sanitizedDocumentNumber;

        /**
         * The current age of the document owner in years. It is calculated difference
         * between now and date of birth. Now is current time on the device.
         * @return current age of the document owner in years or -1 if date of birth is unknown.
        */
        this.age = nativeMRZResult.age;
    }    
}

/** Possible supported detectors for documents containing face image */
export const DocumentFaceDetectorType = Object.freeze(
    {
        /** Uses document detector for TD1 size identity cards */
        TD1 : 1,
        /** Uses document detector for TD2 size identity cards  */
        TD2 : 2,
        /** Uses MRTD detector for detecting documents with MRZ */
        PassportsAndVisas : 3
    }
);

/**
 * Extension factors relative to corresponding dimension of the full image. For example,
 * upFactor and downFactor define extensions relative to image height, e.g.
 * when upFactor is 0.5, upper image boundary will be extended for half of image's full
 * height.
 */
export class ImageExtensionFactors {
    constructor() {
        /** image extension factor relative to full image height in UP direction. */
        this.upFactor = 0.0;
        /** image extension factor relative to full image height in RIGHT direction. */
        this.rightFactor = 0.0;
        /** image extension factor relative to full image height in DOWN direction. */
        this.downFactor = 0.0;
        /** image extension factor relative to full image height in LEFT direction. */
        this.leftFactor = 0.0;
    }
};
