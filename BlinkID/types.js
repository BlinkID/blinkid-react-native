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
        MalaysianPassIMM13P : 6,
        /** One liner ISO DL */
        Dl: 7,
        /** One liner ISO DL */
        InternalTravelDocument: 8
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
 * Detailed information about the recognition process.
 */
export const ProcessingStatus = Object.freeze(
    {
    /** Recognition was successful. */
    Success: 1,

    /** Detection of the document failed. */
    DetectionFailed: 2,

    /** Preprocessing of the input image has failed. */
    ImagePreprocessingFailed: 3,

    /** Recognizer has inconsistent results. */
    StabilityTestFailed: 4,

    /** Wrong side of the document has been scanned. */
    ScanningWrongSide: 5,

    /** Identification of the fields present on the document has failed. */
    FieldIdentificationFailed: 6,

    /** Mandatory field for the specific document is missing. */
    MandatoryFieldMissing: 7,

    /** Result contains invalid characters in some of the fields. */
    InvalidCharactersFound: 8,

    /** Failed to return a requested image. */
    ImageReturnFailed: 9,

    /** Reading or parsing of the barcode has failed. */
    BarcodeRecognitionFailed: 10,

    /** Parsing of the MRZ has failed. */
    MrzParsingFailed: 11,

    /** Document class has been filtered out. */
    ClassFiltered: 12,

    /** Document currently not supported by the recognizer. */
    UnsupportedClass: 13,

    /** License for the detected document is missing. */
    UnsupportedByLicense: 14,

    /** Front side recognition has completed successfully, and recognizer is waiting for the other side to be scanned. */
    AwaitingOtherSide: 15,

    /** Side not scanned. */
    NotScanned: 16
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
        /** Face detection status determined from the scanned image. */
        this.faceDetectionStatus = nativeImageAnalysisResult.faceDetectionStatus;
        /** Mrz detection status determined from the scanned image.  */
        this.mrzDetectionStatus = nativeImageAnalysisResult.mrzDetectionStatus;
        /** Barcode detection status determined from the scanned image. */
        this.barcodeDetectionStatus = nativeImageAnalysisResult.barcodeDetectionStatus;
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
        Ecuador: 88,
        ElSalvador: 89,
        SriLanka: 90,
        Peru: 91,
        Uruguay: 92,
        Bahamas: 93,
        Bermuda: 94,
        Bolivia: 95,
        China: 96,
        EuropeanUnion: 97,
        Haiti: 98,
        Honduras: 99,
        Iceland: 100,
        Japan: 101,
        Luxembourg: 102,
        Montenegro: 103,
        Nicaragua: 104,
        SouthKorea: 105,
        Venezuela: 106,
        Afghanistan: 107,
        AlandIslands: 108,
        AmericanSamoa: 109,
        Andorra: 110,
        Angola: 111,
        Anguilla: 112,
        Antarctica: 113,
        AntiguaAndBarbuda: 114,
        Armenia: 115,
        Aruba: 116,
        BailiwickOfGuernsey: 117,
        BailiwickOfJersey: 118,
        Barbados: 119,
        Belarus: 120,
        Belize: 121,
        Benin: 122,
        Bhutan: 123,
        BonaireSaintEustatiusAndSaba: 124,
        Botswana: 125,
        BouvetIsland: 126,
        BritishIndianOceanTerritory: 127,
        BurkinaFaso: 128,
        Burundi: 129,
        Cameroon: 130,
        CapeVerde: 131,
        CaribbeanNetherlands: 132,
        CaymanIslands: 133,
        CentralAfricanRepublic: 134,
        Chad: 135,
        ChristmasIsland: 136,
        CocosIslands: 137,
        Comoros: 138,
        Congo: 139,
        CookIslands: 140,
        Cuba: 141,
        Curacao: 142,
        DemocraticRepublicOfTheCongo: 143,
        Djibouti: 144,
        Dominica: 145,
        EastTimor: 146,
        EquatorialGuinea: 147,
        Eritrea: 148,
        Ethiopia: 149,
        FalklandIslands: 150,
        FaroeIslands: 151,
        FederatedStatesOfMicronesia: 152,
        Fiji: 153,
        FrenchGuiana: 154,
        FrenchPolynesia: 155,
        FrenchSouthernTerritories: 156,
        Gabon: 157,
        Gambia: 158,
        Gibraltar: 159,
        Greenland: 160,
        Grenada: 161,
        Guadeloupe: 162,
        Guam: 163,
        Guinea: 164,
        GuineaBissau: 165,
        Guyana: 166,
        HeardIslandAndMcdonaldIslands: 167,
        Iran: 168,
        Iraq: 169,
        IsleOfMan: 170,
        IvoryCoast: 171,
        Jamaica: 172,
        Kiribati: 173,
        Kyrgyzstan: 174,
        Laos: 175,
        Lebanon: 176,
        Lesotho: 177,
        Liberia: 178,
        Libya: 179,
        Liechtenstein: 180,
        Macau: 181,
        Madagascar: 182,
        Malawi: 183,
        Mali: 184,
        MarshallIslands: 185,
        Martinique: 186,
        Mauritania: 187,
        Mayotte: 188,
        Moldova: 189,
        Monaco: 190,
        Mongolia: 191,
        Montserrat: 192,
        Mozambique: 193,
        Myanmar: 194,
        Namibia: 195,
        Nauru: 196,
        Nepal: 197,
        NewCaledonia: 198,
        Niger: 199,
        Niue: 200,
        NorfolkIsland: 201,
        NorthernCyprus: 202,
        NorthernMarianaIslands: 203,
        NorthKorea: 204,
        NorthMacedonia: 205,
        Palau: 206,
        Palestine: 207,
        PapuaNewGuinea: 208,
        Pitcairn: 209,
        Reunion: 210,
        Rwanda: 211,
        SaintBarthelemy: 212,
        SaintHelenaAscensionAndTristianDaCunha: 213,
        SaintKittsAndNevis: 214,
        SaintLucia: 215,
        SaintMartin: 216,
        SaintPierreAndMiquelon: 217,
        SaintVincentAndTheGrenadines: 218,
        Samoa: 219,
        SanMarino: 220,
        SaoTomeAndPrincipe: 221,
        Senegal: 222,
        Seychelles: 223,
        SierraLeone: 224,
        SintMaarten: 225,
        SolomonIslands: 226,
        Somalia: 227,
        SouthGeorgiaAndTheSouthSandwichIslands: 228,
        SouthSudan: 229,
        Sudan: 230,
        Suriname: 231,
        SvalbardAndJanMayen: 232,
        Swaziland: 233,
        Syria: 234,
        Tajikistan: 235,
        Tanzania: 236,
        Togo: 237,
        Tokelau: 238,
        Tonga: 239,
        TrinidadAndTobago: 240,
        Turkmenistan: 241,
        TurksAndCaicosIslands: 242,
        Tuvalu: 243,
        UnitedStatesMinorOutlyingIslands: 244,
        Uzbekistan: 245,
        Vanuatu: 246,
        VaticanCity: 247,
        VirginIslandsBritish: 248,
        VirginIslandsUs: 249,
        WallisAndFutuna: 250,
        WesternSahara: 251,
        Yemen: 252,
        Yugoslavia: 253,
        Zambia: 254,
        Zimbabwe: 255
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
        Yukon: 69,
        CiudadDeMexico: 70,
        Jalisco: 71,
        NewfoundlandAndLabrador: 72,
        NuevoLeon: 73,
        BajaCalifornia: 74,
        Chihuahua: 75,
        Guanajuato: 76,
        Guerrero: 77,
        Mexico: 78,
        Michoacan: 79,
        NewYorkCity: 80,
        Tamaulipas: 81,
        Veracruz: 82,
        Chiapas: 83,
        Coahuila: 84,
        Durango: 85,
        GuerreroCocula: 86,
        GuerreroJuchitan: 87,
        GuerreroTepecoacuilco: 88,
        GuerreroTlacoapa: 89,
        Gujarat: 90,
        Hidalgo: 91,
        Karnataka: 92,
        Kerala: 93,
        KhyberPakhtunkhwa: 94,
        MadhyaPradesh: 95,
        Maharashtra: 96,
        Morelos: 97,
        Nayarit: 98,
        Oaxaca: 99,
        Puebla: 100,
        Punjab: 101,
        Queretaro: 102,
        SanLuisPotosi: 103,
        Sinaloa: 104,
        Sonora: 105,
        Tabasco: 106,
        TamilNadu: 107,
        Yucatan: 108,
        Zacatecas: 109,
        Aguascalientes: 110,
        BajaCaliforniaSur: 111,
        Campeche: 112,
        Colima: 113,
        QuintanaRooBenitoJuarez: 114
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
        EmploymentPass: 5,
        FinCard: 6,
        Id: 7,
        MultipurposeId: 8,
        MyKad: 9,
        MyKid: 10,
        MyPr: 11,
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
        HealthInsuranceCard: 25,
        Passport: 26,
        SPass: 27,
        AddressCard: 28,
        AlienId: 29,
        AlienPassport: 30,
        GreenCard: 31,
        MinorsId: 32,
        PostalId: 33,
        ProfessionalDl: 34,
        TaxId: 35,
        WeaponPermit: 36,
        Visa: 37,
        BorderCrossingCard: 38,
        DriverCard: 39,
        GlobalEntryCard: 40,
        Mypolis: 41,
        NexusCard: 42,
        PassportCard: 43,
        ProofOfAgeCard: 44,
        RefugeeId: 45,
        TribalId: 46,
        VeteranId: 47,
        CitizenshipCertificate: 48
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

        /** The middle name of the document owner. */
        this.middleName = nativeBarcodeResult.middleName;

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

        /** Document specific extended elements that contain all barcode fields in their original form. */
        this.extendedElements = nativeBarcodeResult.extendedElements != null ? new BarcodeElements(nativeBarcodeResult.extendedElements) : null;
    }
}

/**
 * Enumeration of possible barcode element keys
 */
export const BarcodeElementKey = Object.freeze(
    {
        //==============================================================/
        //============== 1. DETERMINING BARCODE VERSION ================/
        //==============================================================/

        /**
        Mandatory on all driver's licenses. All barcodes which are using 3-track magnetic
        stripe encoding used in the interest of smoothing a transition from legacy documents
        shall be designated as "Magnetic". All barcodes which are using compact encoding
        compliant with ISO/IEC 18013-2 shall be designated as "Compact". All barcodes (majority
        compliant with Mandatory PDF417 Bar Code of the American Association of Motor Vehicle
        Administrators (AAMVA Card Design Standard from AAMVA DL/ID-2000 standard to DL/ID-2013
        shall be designated as "AAMVA".
        */
        DocumentType: 0,

        /**
        Mandatory on all driver's licenses.

        AAMVA Version Number: This is a decimal value between 0 and 99 that
        specifies the version level of the PDF417 bar code format. Version "0" and "00"
        is reserved for bar codes printed to the specification of the American Association
        of Motor Vehicle Administrators (AAMVA prior to the adoption of the AAMVA DL/ID-2000
        standard.

        - All barcodes compliant with AAMVA DL/ID-2000 standard shall be designated Version "01."
        - All barcodes compliant with AAMVA Card Design Specification version 1.0, dated 09-2003
        shall be designated Version "02."
        - All barcodes compliant with AAMVA Card Design Specification version 2.0, dated 03-2005
        shall be designated Version "03."
        - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2009
        shall be designated Version "04."
        - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2010
        shall be designated Version "05."
        - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2011
        shall be designated Version "06".
        - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 06-2012
        shall be designated Version "07".
        - All barcodes compliant with this current AAMVA standard shall be designated "08".

        Should a need arise requiring major revision to the format, this field provides the
        means to accommodate additional revision.

        If the document type is not "AAMVA", this field defines the version number of the
        given document type's standard.
        */
        StandardVersionNumber: 1,

        //==============================================================/
        //==========          2. PERSONAL DATA KEYS          ===========/
        //==============================================================/

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        Family name of the cardholder. (Family name is sometimes also called "last name" or "surname."
        Collect full name for record, print as many characters as possible on portrait side of DL/ID.
        */
        CustomerFamilyName: 2,

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        First name of the cardholder.
        */
        CustomerFirstName: 3,

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        Full name of the individual holding the Driver's License or ID.

        The Name field contains up to four portions, separated with the "," delimiter:
        Last Name (required
        , (required
        First Name (required
        , (required if other name portions follow, otherwise optional
        Middle Name(s (optional
        , (required if other name portions follow, otherwise optional
        Suffix (optional
        , (optional

        If the individual has more than one middle name they are separated with space.
        */
        CustomerFullName: 4,

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        Date on which the cardholder was born. (MMDDCCYY format
        */
        DateOfBirth: 5,

        /**
        Mandatory on all AAMVA, Magnetic barcodes.
        Optional on Compact barcodes.

        Gender of the cardholder. 1 = male, 2 = female.
        */
        Sex: 6,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 barcodes.
        Optional on AAMVA 01, Magnetic and Compact barcodes.

        Color of cardholder's eyes. (ANSI D-20 codes

        Code   Description
        BLK    Black
        BLU    Blue
        BRO    Brown
        GRY    Gray
        GRN    Green
        HAZ    Hazel
        MAR    Maroon
        PNK    Pink
        DIC    Dichromatic
        UNK    Unknown
        */
        EyeColor: 7,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        On compact barcodes, use kFullAddress.

        Street portion of the cardholder address.
        The place where the registered driver of a vehicle (individual or corporation
        may be contacted such as a house number, street address, etc.
        */
        AddressStreet: 8,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        On compact barcodes, use kFullAddress.

        City portion of the cardholder address.
        */
        AddressCity: 9,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        On compact barcodes, use kFullAddress.

        State portion of the cardholder address.
        */
        AddressJurisdictionCode: 10,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        On compact barcodes, use kFullAddress.

        Postal code portion of the cardholder address in the U.S. and Canada. If the
        trailing portion of the postal code in the U.S. is not known, zeros can be used
        to fill the trailing set of numbers up to nine (9 digits.
        */
        AddressPostalCode: 11,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.
        Optional on Compact barcodes.

        Full address of the individual holding the Driver's License or ID.

        The full address field contains up to four portions, separated with the "," delimiter:
        Street Address (required
        , (required if other address portions follow, otherwise optional
        City (optional
        , (required if other address portions follow, otherwise optional
        Jurisdiction Code (optional
        , (required if other address portions follow, otherwise optional
        ZIP - Postal Code (optional

        */
        FullAddress: 12,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
        Optional on AAMVA 01 and Magnetic barcodes.

        Height of cardholder, either in Inches or in Centimeters.

        Inches (in: number of inches followed by " in"
        example: 6'1'' = "73 in"

        Centimeters (cm: number of centimeters followed by " cm"
        example: 181 centimeters = "181 cm"
        */
        Height: 13,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
        Optional on AAMVA 01 and Magnetic barcodes.

        Height of cardholder in Inches.
        Example: 5'9'' = "69".
        */
        HeightIn: 14,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 Compact barcodes.
        Optional on AAMVA 01 and Magnetic barcodes.

        Height of cardholder in Centimeters.
        Example: 180 Centimeters = "180".
        */
        HeightCm: 15,

        /**
        Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
        Optional on AAMVA 01, 02, 03, Magnetic and Compcat barcodes.

        Middle name(s of the cardholder. In the case of multiple middle names they
        shall be separated by space " ".
        */
        CustomerMiddleName: 16,

        /**
        Optional on all AAMVA, Magnetic and Compact barcodes.

        Bald, black, blonde, brown, gray, red/auburn, sandy, white, unknown. If the issuing
        jurisdiction wishes to abbreviate colors, the three-character codes provided in ANSI D20 must be
        used.

        Code   Description
        BAL    Bald
        BLK    Black
        BLN    Blond
        BRO    Brown
        GRY    Grey
        RED    Red/Auburn
        SDY    Sandy
        WHI    White
        UNK    Unknown
        */
        HairColor: 17,

        /**
        Mandatory on AAMVA 02 barcodes.
        Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.

        Name Suffix (If jurisdiction participates in systems requiring name suffix (PDPS, CDLIS, etc.,
        the suffix must be collected and displayed on the DL/ID and in the MRT.
        - JR (Junior
        - SR (Senior
        - 1ST or I (First
        - 2ND or II (Second
        - 3RD or III (Third
        - 4TH or IV (Fourth
        - 5TH or V (Fifth
        - 6TH or VI (Sixth
        - 7TH or VII (Seventh
        - 8TH or VIII (Eighth
        - 9TH or IX (Ninth
        */
        NameSuffix: 18,

        /**
        Optional on all AAMVA and Compact barcodes.

        Other name by which the cardholder is known. ALTERNATIVE NAME(S of the individual
        holding the Driver License or ID.

        The Name field contains up to four portions, separated with the "," delimiter:
        AKA Last Name (required
        , (required
        AKA First Name (required
        , (required if other name portions follow, otherwise optional
        AKA Middle Name(s (optional
        , (required if other name portions follow, otherwise optional
        AKA Suffix (optional
        , (optional

        If the individual has more than one AKA middle name they are separated with space.
        */
        AKAFullName: 19,

        /**
        Optional on all AAMVA and Compact barcodes.

        Other family name by which the cardholder is known.
        */
        AKAFamilyName: 20,

        /**
        Optional on all AAMVA and Compact barcodes.

        Other given name by which the cardholder is known
        */
        AKAGivenName: 21,

        /**
        Optional on all AAMVA and Compact barcodes.

        Other suffix by which the cardholder is known.

        The Suffix Code Portion, if submitted, can contain only the Suffix Codes shown in the following table (e.g., Andrew Johnson, III = JOHNSON@ANDREW@@3RD:

        Suffix     Meaning or Synonym
        JR         Junior
        SR         Senior or Esquire 1ST First
        2ND        Second
        3RD        Third
        4TH        Fourth
        5TH        Fifth
        6TH        Sixth
        7TH        Seventh
        8TH        Eighth
        9TH        Ninth
        */
        AKASuffixName: 22,

        /**
        Mandatory on AAMVA 02 barcodes.
        Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.

        Indicates the approximate weight range of the cardholder:
        0 = up to 31 kg (up to 70 lbs
        1 = 32 – 45 kg (71 – 100 lbs
        2 = 46 - 59 kg (101 – 130 lbs
        3 = 60 - 70 kg (131 – 160 lbs
        4 = 71 - 86 kg (161 – 190 lbs
        5 = 87 - 100 kg (191 – 220 lbs
        6 = 101 - 113 kg (221 – 250 lbs
        7 = 114 - 127 kg (251 – 280 lbs
        8 = 128 – 145 kg (281 – 320 lbs
        9 = 146+ kg (321+ lbs
        */
        WeightRange: 23,

        /**
        Mandatory on AAMVA 02 barcodes.
        Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.

        Cardholder weight in pounds Example: 185 lb = "185"
        */
        WeightPounds: 24,

        /**
        Mandatory on AAMVA 02 barcodes.
        Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.

        Cardholder weight in kilograms Example: 84 kg = "084"
        */
        WeightKilograms: 25,

        /**
        Mandatory on all AAMVA and Compact barcodes.

        The number assigned or calculated by the issuing authority.
        */
        CustomerIdNumber: 26,

        /**
        Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
        Optional on Compact barcodes.

        A code that indicates whether a field has been truncated (T, has not been
        truncated (N, or – unknown whether truncated (U.
        */
        FamilyNameTruncation: 27,

        /**
        Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
        Optional on Compact barcodes.

        A code that indicates whether a field has been truncated (T, has not been
        truncated (N, or – unknown whether truncated (U.
        */
        FirstNameTruncation: 28,

        /**
        Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.

        A code that indicates whether a field has been truncated (T, has not been
        truncated (N, or – unknown whether truncated (U.
        */
        MiddleNameTruncation: 29,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Country and municipality and/or state/province.
        */
        PlaceOfBirth: 30,

        /**
        Optional on all AAMVA barcodes.

        On Compact barcodes, use kFullAddress.

        Second line of street portion of the cardholder address.
        */
        AddressStreet2: 31,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Codes for race or ethnicity of the cardholder, as defined in ANSI D20.

        Race:
        Code   Description
        AI     Alaskan or American Indian (Having Origins in Any of The Original Peoples of
                North America, and Maintaining Cultural Identification Through Tribal
                Affiliation of Community Recognition
        AP     Asian or Pacific Islander (Having Origins in Any of the Original Peoples of
                the Far East, Southeast Asia, or Pacific Islands. This Includes China, India,
                Japan, Korea, the Philippines Islands, and Samoa
        BK     Black (Having Origins in Any of the Black Racial Groups of Africa
        W      White (Having Origins in Any of The Original Peoples of Europe, North Africa,
                or the Middle East

        Ethnicity:
        Code   Description
        H      Hispanic Origin (A Person of Mexican, Puerto Rican, Cuban, Central or South
                American or Other Spanish Culture or Origin, Regardless of Race
        O      Not of Hispanic Origin (Any Person Other Than Hispanic
        U      Unknown

        */
        RaceEthnicity: 32,

        /**
        Optional on AAMVA 01 barcodes.

        PREFIX to Driver Name. Freeform as defined by issuing jurisdiction.
        */
        NamePrefix: 33,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Country in which DL/ID is issued. U.S. = USA, Canada = CAN.
        */
        CountryIdentification: 34,

        /**
        Optional on AAMVA version 01.

        Driver Residence Street Address 1.
        */
        ResidenceStreetAddress: 35,

        /**
        Optional on AAMVA version 01.

        Driver Residence Street Address 2.
        */
        ResidenceStreetAddress2: 36,

        /**
        Optional on AAMVA version 01.

        Driver Residence City
        */
        ResidenceCity: 37,

        /**
        Optional on AAMVA version 01.

        Driver Residence Jurisdiction Code.
        */
        ResidenceJurisdictionCode: 38,

        /**
        Optional on AAMVA 01 barcodes.

        Driver Residence Postal Code.
        */
        ResidencePostalCode: 39,

        /**
        Optional on AAMVA 01 barcodes.

        Full residence address of the individual holding the Driver's License or ID.

        The full address field contains up to four portions, separated with the "," delimiter:
        Residence Street Address (required
        , (required if other address portions follow, otherwise optional
        Residence City (optional
        , (required if other address portions follow, otherwise optional
        Residence Jurisdiction Code (optional
        , (required if other address portions follow, otherwise optional
        Residence ZIP - Residence Postal Code (optional
        */
        ResidenceFullAddress: 40,

        /**
        Optional on AAMVA 05, 06, 07, 08 barcodes.

        Date on which the cardholder turns 18 years old. (MMDDCCYY format
        */
        Under18: 41,

        /**
        Optional on AAMVA 05, 06, 07, 08 barcodes.

        Date on which the cardholder turns 19 years old. (MMDDCCYY format
        */
        Under19: 42,

        /**
        Optional on AAMVA 05, 06, 07, 08 barcodes.

        Date on which the cardholder turns 21 years old. (MMDDCCYY format
        */
        Under21: 43,

        /**
        Optional on AAMVA version 01.

        The number assigned to the individual by the Social Security Administration.
        */
        SocialSecurityNumber: 44,

        /**
        Optional on AAMVA version 01.

        Driver "AKA" Social Security Number. FORMAT SAME AS DRIVER SOC SEC NUM. ALTERNATIVE NUMBERS(S used as SS NUM.
        */
        AKASocialSecurityNumber: 45,

        /**
        Optional on AAMVA 01 barcodes.

        ALTERNATIVE MIDDLE NAME(s or INITIALS of the individual holding the Driver License or ID.
        Hyphenated names acceptable, spaces between names acceptable, but no other
        use of special symbols.
        */
        AKAMiddleName: 46,

        /**
        Optional on AAMVA 01 barcodes.

        ALTERNATIVE PREFIX to Driver Name. Freeform as defined by issuing jurisdiction.
        */
        AKAPrefixName: 47,

        /**
        Optional on AAMVA 01, 06, 07, 08 barcodes.

        Field that indicates that the cardholder is an organ donor = "1".
        */
        OrganDonor: 48,

        /**
        Optional on AAMVA 07, 08 barcodes.

        Field that indicates that the cardholder is a veteran = "1"
        */
        Veteran: 49,

        /**
        Optional on AAMVA 01. (MMDDCCYY format

        ALTERNATIVE DATES(S given as date of birth.
        */
        AKADateOfBirth: 50,

        //==============================================================/
        //==========          3. LICENSE DATA KEYS          ============/
        //==============================================================/

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        This number uniquely identifies the issuing jurisdiction and can
        be obtained by contacting the ISO Issuing Authority (AAMVA
        */
        IssuerIdentificationNumber: 51,

        /**
        Mandatory on all AAMVA, Magnetic and Compact barcodes.

        If the document is non expiring then "Non expiring" is written in this field.

        Date on which the driving and identification privileges granted by the document are
        no longer valid. (MMDDCCYY format
        */
        DocumentExpirationDate: 52,

        /**
        Mandatory on all AAMVA and Compact barcodes.
        Optional on Magnetic barcodes.

        Jurisdiction Version Number: This is a decimal value between 0 and 99 that
        specifies the jurisdiction version level of the PDF417 barcode format.
        Notwithstanding iterations of this standard, jurisdictions implement incremental
        changes to their barcodes, including new jurisdiction-specific data, compression
        algorithms for digitized images, digital signatures, or new truncation
        conventions used for names and addresses. Each change to the barcode format
        within each AAMVA version (above must be noted, beginning with Jurisdiction
        Version 00.
        */
        JurisdictionVersionNumber: 53,

        /**
        Mandatory on all AAMVA and Magnetic barcodes.

        Jurisdiction-specific vehicle class / group code, designating the type
        of vehicle the cardholder has privilege to drive.
        */
        JurisdictionVehicleClass: 54,

        /**
        Mandatory on all AAMVA barcodes.
        Optional on Magnetic barcodes.

        Jurisdiction-specific codes that represent restrictions to driving
        privileges (such as airbrakes, automatic transmission, daylight only, etc..
        */
        JurisdictionRestrictionCodes: 55,

        /**
        Mandatory on all AAMVA barcodes.
        Optional on Magnetic barcodes.

        Jurisdiction-specific codes that represent additional privileges
        granted to the cardholder beyond the vehicle class (such as transportation of
        passengers, hazardous materials, operation of motorcycles, etc..
        */
        JurisdictionEndorsementCodes: 56,

        /**
        Mandatory on all AAMVA and Compact barcodes.

        Date on which the document was issued. (MMDDCCYY format
        */
        DocumentIssueDate: 57,

        /**
        Mandatory on AAMVA versions 02 and 03.

        Federally established codes for vehicle categories, endorsements, and restrictions
        that are generally applicable to commercial motor vehicles. If the vehicle is not a
        commercial vehicle, "NONE" is to be entered.
        */
        FederalCommercialVehicleCodes: 58,

        /**
        Optional on all AAMVA barcodes.
        Mandatory on Compact barcodes.

        Jurisdictions may define a subfile to contain jurisdiction-specific information.
        These subfiles are designated with the first character of “Z” and the second
        character is the first letter of the jurisdiction's name. For example, "ZC" would
        be the designator for a California or Colorado jurisdiction-defined subfile, "ZQ"
        would be the designator for a Quebec jurisdiction-defined subfile. In the case of
        a jurisdiction-defined subfile that has a first letter that could be more than
        one jurisdiction (e.g. California, Colorado, Connecticut then other data, like
        the IIN or address, must be examined to determine the jurisdiction.
        */
        IssuingJurisdiction: 59,

        /**
        Optional on all AAMVA barcodes.
        Mandatory on Compact barcodes.

        Standard vehicle classification code(s for cardholder. This data element is a
        placeholder for future efforts to standardize vehicle classifications.
        */
        StandardVehicleClassification: 60,

        /**
        Optional on all AAMVA and Magnetic barcodes.

        Name of issuing jurisdiction, for example: Alabama, Alaska ...
        */
        IssuingJurisdictionName: 61,

        /**
        Optional on all AAMVA barcodes.

        Standard endorsement code(s for cardholder. See codes in D20. This data element is a
        placeholder for future efforts to standardize endorsement codes.

        Code   Description
        H      Hazardous Material - This endorsement is required for the operation of any vehicle
                transporting hazardous materials requiring placarding, as defined by U.S.
                Department of Transportation regulations.
        L      Motorcycles – Including Mopeds/Motorized Bicycles.
        N      Tank - This endorsement is required for the operation of any vehicle transporting,
                as its primary cargo, any liquid or gaseous material within a tank attached to the vehicle.
        O      Other Jurisdiction Specific Endorsement(s - This code indicates one or more
                additional jurisdiction assigned endorsements.
        P      Passenger - This endorsement is required for the operation of any vehicle used for
                transportation of sixteen or more occupants, including the driver.
        S      School Bus - This endorsement is required for the operation of a school bus. School bus means a
                CMV used to transport pre-primary, primary, or secondary school students from home to school,
                from school to home, or to and from school sponsored events. School bus does not include a
                bus used as common carrier (49 CRF 383.5.
        T      Doubles/Triples - This endorsement is required for the operation of any vehicle that would be
                referred to as a double or triple.
        X      Combined Tank/HAZ-MAT - This endorsement may be issued to any driver who qualifies for
                both the N and H endorsements.
        */
        StandardEndorsementCode: 62,

        /**
        Optional on all AAMVA barcodes.

        Standard restriction code(s for cardholder. See codes in D20. This data element is a placeholder
        for future efforts to standardize restriction codes.

        Code   Description
        B      Corrective Lenses
        C      Mechanical Devices (Special Brakes, Hand Controls, or Other Adaptive Devices
        D      Prosthetic Aid
        E      Automatic Transmission
        F      Outside Mirror
        G      Limit to Daylight Only
        H      Limit to Employment
        I      Limited Other
        J      Other
        K      CDL Intrastate Only
        L      Vehicles without air brakes
        M      Except Class A bus
        N      Except Class A and Class B bus
        O      Except Tractor-Trailer
        V      Medical Variance Documentation Required
        W      Farm Waiver
        */
        StandardRestrictionCode: 63,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Text that explains the jurisdiction-specific code(s for classifications
        of vehicles cardholder is authorized to drive.
        */
        JurisdictionVehicleClassificationDescription: 64,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Text that explains the jurisdiction-specific code(s that indicates additional
        driving privileges granted to the cardholder beyond the vehicle class.
        */
        JurisdictionEndorsmentCodeDescription: 65,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        Text describing the jurisdiction-specific restriction code(s that curtail driving privileges.
        */
        JurisdictionRestrictionCodeDescription: 66,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 barcodes.

        A string of letters and/or numbers that is affixed to the raw materials (card stock,
        laminate, etc. used in producing driver's licenses and ID cards. (DHS recommended field
        */
        InventoryControlNumber: 67,

        /**
        Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.

        DHS required field that indicates date of the most recent version change or
        modification to the visible format of the DL/ID. (MMDDCCYY format
        */
        CardRevisionDate: 68,

        /**
        Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Magnetic barcodes.
        Optional and Compact barcodes.

        Number must uniquely identify a particular document issued to that customer
        from others that may have been issued in the past. This number may serve multiple
        purposes of document discrimination, audit information number, and/or inventory control.
        */
        DocumentDiscriminator: 69,

        /**
        Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.

        DHS required field that indicates that the cardholder has temporary lawful status = "1".
        */
        LimitedDurationDocument: 70,

        /**
        Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.

        A string of letters and/or numbers that identifies when, where, and by whom a driver's
        license/ID card was made. If audit information is not used on the card or the MRT, it
        must be included in the driver record.
        */
        AuditInformation: 71,

        /**
        Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.

        DHS required field that indicates compliance: "M" = materially compliant,
        "F" = fully compliant, and, "N" = non-compliant.
        */
        ComplianceType: 72,

        /**
        Optional on AAMVA version 01 barcodes.

        Issue Timestamp. A string used by some jurisdictions to validate the document against their data base.
        */
        IssueTimestamp: 73,

        /**
        Optional on AAMVA version 01 barcodes.

        Driver Permit Expiration Date. MMDDCCYY format. Date permit expires.
        */
        PermitExpirationDate: 74,

        /**
        Optional on AAMVA version 01 barcodes..

        Type of permit.
        */
        PermitIdentifier: 75,

        /**
        Optional on AAMVA version 01 barcodes..

        Driver Permit Issue Date. MMDDCCYY format. Date permit was issued.
        */
        PermitIssueDate: 76,

        /**
        Optional on AAMVA version 01.

        Number of duplicate cards issued for a license or ID if any.
        */
        NumberOfDuplicates: 77,

        /**
        Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.

        Date on which the hazardous material endorsement granted by the document is
        no longer valid. (MMDDCCYY format
        */
        HAZMATExpirationDate: 78,

        /**
        Optional on AAMVA version 01.

        Medical Indicator/Codes.
        STATE SPECIFIC. Freeform, Standard "TBD"
        */
        MedicalIndicator: 79,

        /**
        Optional on AAMVA version 01.

        Non-Resident Indicator. "Y". Used by some jurisdictions to indicate holder of the document is a non-resident.
        */
        NonResident: 80,

        /**
        Optional on AAMVA version 01.

        A number or alphanumeric string used by some jurisdictions to identify a "customer" across multiple data bases.
        */
        UniqueCustomerId: 81,

        /**
        Optional on compact barcodes.

        Document discriminator.
        */
        DataDiscriminator: 82,

        /**
        Optional on Magnetic barcodes.

        Month on which the driving and identification privileges granted by the document are
        no longer valid. (MMYY format
        */
        DocumentExpirationMonth: 83,

        /**
        Optional on Magnetic barcodes.

        Field that indicates that the driving and identification privileges granted by the
        document are nonexpiring = "1".
        */
        DocumentNonexpiring: 84,

        /**
        Optional on Magnetic barcodes.

        Security version beeing used.
        */
        SecurityVersion: 85
    }
)

/** Defines the data extracted from the visual inspection zone */
export class BarcodeElements {
    constructor(nativeBarcodeElements) {

        /** Flag that indicates if barcode elements is empty */
        this.empty = nativeBarcodeElements.empty;

        /** All strings for scanned barcode element key value*/
        this.values = nativeBarcodeElements.values;
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

        /** Flag that indicates if barcode result is empty */
        this.empty = nativeVizResult.empty;

        /** The one more additional number of the document. */
        this.documentOptionalAdditionalNumber = nativeVizResult.documentOptionalAdditionalNumber;
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
 * RecognitionModeFilter is used to enable/disable recognition of specific document groups.
 * Setting is taken into account only if the right for that document is purchased.
 */
export class RecognitionModeFilter {
    constructor() {
        /** Enable scanning of MRZ IDs. Setting is taken into account only if the mrz_id right is purchased. */
        this.enableMrzId = true;
        /** Enable scanning of visa MRZ. Setting is taken into account only if the visa right is purchased. */
        this.enableMrzVisa = true;
        /** Enable scanning of Passport MRZ. Setting is taken into account only if the passport right is purchased. */
        this.enableMrzPassport = true;
        /** Enable scanning of Photo ID. Setting is taken into account only if the photo_id right is purchased. */
        this.enablePhotoId = true;
        /** Enable scanning of barcode IDs. Setting is taken into account only if the barcode right to scan that barcode is purchased. */
        this.enableBarcodeId = true;
        /** Enable full document recognition. Setting is taken into account only if the document right to scan that document is purchased. */
        this.enableFullDocumentRecognition = true;
    }
}

/**
 * Possible recognition modes used by BlinkID(Combined)Recognizer to scan the document.
 */
export const RecognitionMode = Object.freeze(
    {
        /** No recognition performed. */
        None: 1,

        /** Recognition of mrz document (does not include visa and passport) */
        MrzId: 2,

        /** Recognition of visa mrz. */
        MrzVisa: 3,

        /** Recognition of passport mrz. */
        MrzPassport: 4,

        /** Recognition of documents that have face photo on the front. */
        PhotoId: 5,

        /** Detailed document recognition. */
        FullRecognition: 6,

        /** Recognition of barcode document. */
        BarcodeId: 7
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

/** Result of the data matching algorithm for scanned parts/sides of the document. */
export const DataMatchResult = Object.freeze(
    {
        /** Data matching has not been performed. */
        NotPerformed : 1,
        /** Data does not match. */
        Failed : 2,
        /** Data match. */
        Success : 3
    }
);