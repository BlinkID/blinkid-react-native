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
 * Represents the type of scanned barcode
 */
export const BarcodeType = Object.freeze(
    {
        /** No barcode was scanned */
        None: 1,
        /** QR code was scanned */
        QRCode: 2,
        /** Data Matrix 2D barcode was scanned */
        DataMatrix: 3,
        /** UPC E barcode was scanned */
        UPCE: 4,
        /** UPC A barcode was scanned */
        UPCA: 5,
        /** EAN 8 barcode was scanned */
        EAN8: 6,
        /** EAN 13 barcode was scanned */
        EAN13: 7,
        /** Code 128 barcode was scanned */
        Code128: 8,
        /** Code 39 barcode was scanned */
        Code39: 9,
        /** ITF barcode was scanned */
        ITF: 10,
        /** Aztec 2D barcode was scanned */
        Aztec: 11,
        /** PDF417 2D barcode was scanned */
        PDF417: 12
    }
);

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
    }    
}

/**
 * Possible values for EUDL country field.
 */
export const EudlCountry = Object.freeze(
    {
        /** UK Driver's license */
        UK : 1,
        /** German driver's license */
        Germany : 2,
        /** Austrian driver's license */
        Austria : 3,
        /** Performs country detection and uses scanning parameters for detected country */
        Automatic : 4
    }
);

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