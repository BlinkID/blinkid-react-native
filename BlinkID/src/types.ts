import { BlinkIdUtilities } from "./blinkIdUtilities";

/**
 * ClassFilter represents the document filter used to determine which documents will be processed.
 * Document information (Country, Region, Type) is evaluated with the content set in the filter, and their inclusion or exclusion depends on the defined rules.
 * To set the document information, use {@link DocumentFilter}.
 * The recognition results of the excluded documents will not be returned.
 * If using the standard BlinkID UX, an alert will be displayed that the document will not be scanned.
 *
 * By default, the ClassFilter is turned off, and all documents will be included.
 */
export class ClassFilter {
  /**
   * Document classes that will be explicitly accepted by this filter.
   * Only documents belonging to the specified classes will be processed. All other documents will be rejected.
   *
   * If this list is empty, no restrictions are applied, and documents will be accepted unless explicitly excluded by `excludeDocuments`.
   *
   * Example usage:
   *
   *  ```
   *   final classFilter = ClassFilter();
   *    classFilter.includeDocuments = [
   *      DocumentFilter.country(Country.Usa),
   *      DocumentFilter.countryType(Country.Croatia, DocumentType.Id),
   *    ];
   *
   *
   *  ```
   *
   *
   * NOTE: from the example above, the class filter is set to only accept all documents from USA, and Croatian IDs.
   * All other documents will be rejected.
   *
   * Rules can be combined, for example, to set all three properties (Country Region, Type), two (e.g., Country and Type) or just one (e.g, Region).
   *
   * See {@link DocumentFilter} for setting the combinations.
   */
  includeDocuments?: DocumentFilter[];
  /**
   * Document classes that will be explicitly rejected by this filter.
   * Documents belonging to the specified classes will not be processed. Other documents, not included with `excludeDocuments` will be accepted.
   *
   * If this array is empty, no restrictions are applied, and documents will be excluded only if not present in `includeDocuments`.
   *
   * Example usage:
   *
   *  ```
   *   final classFilter = ClassFilter();
   *    classFilter.excludeDocuments = [
   *      DocumentFilter.country(Country.Usa),
   *      DocumentFilter.countryType(Country.Croatia, DocumentType.Id),
   *    ];
   *
   *
   *  ```
   *
   * NOTE: from the example above, the class filter is set to only exclude all documents from USA, and Croatian IDs.
   * All other classes will be accepted.
   *
   * Rules can be combined, for example, to set all three properties (Country Region, Type), two (e.g., Country and Type) or just one (e.g, Region).
   *
   * See {@link DocumentFilter} for setting the combinations.
   */
  excludeDocuments?: DocumentFilter[];

  /**
   *
   * @param includeDocuments - specifies which document classes that will be explicitly accepted by this filter.
   * @param excludeDocuments - specifies which document classes that will be explicitly rejected by this filter.
   */
  constructor(
    includeDocuments?: DocumentFilter[],
    excludeDocuments?: DocumentFilter[]
  ) {
    this.includeDocuments = includeDocuments;
    this.excludeDocuments = excludeDocuments;
  }
}

/**
 * Represents the document filter.
 *
 * Used with other classes like the {@link ClassFilter}, {@link DocumentRules} and the {@link DocumentAnonymizationSettings}.
 */
export class DocumentFilter {
  /**
   * If set, only specified country will pass the filter criteria.
   * Otherwise, issuing country will not betaken into account.
   */
  country?: Country;

  /**
   * If set, only specified country will pass the filter criteria.
   * Otherwise, issuing region will not be taken into account.
   */
  region?: Region;

  /**
   * If set, only specified type will pass the filter criteria.
   * Otherwise, issuing type will not be taken into account.
   */
  documentType?: DocumentType;

  /**
   *
   * @param country - specifies the {@link Country} that will pass the filter criteria.
   *
   * @param region - specifies the {@link Region} that will pass the filter criteria.
   *
   * @param documentType - specifies the {@link DocumentType} that will pass the filter criteria.
   *
   *
   * All parameters are optional, and do not need to be added.
   * The filter can be set to be more generic (for example, to only accept document from USA):
   * ```
   * DocumentFilter(Country.Usa);
   * ```
   * or, it can be set to be more specific (for example, to specifically accept USA drivers licenses from California):
   * ```
   * DocumentFilter(Country.Usa, Region.California, DocumentType.Dl);
   * ```
   */
  constructor(country?: Country, region?: Region, documentType?: DocumentType) {
    this.country = country;
    this.region = region;
    this.documentType = documentType;
  }
}

/**
 * Represents the custom document rules.
 *
 * This setting allows users to narrow down our internal rules on mandatory fields. All undefined fields will become optional.
 * It is not possible to mark fields as mandatory if they cannot theoretically appear on the document.
 * The more detailed document filter will have priority over the other.
 *
 * Document fields are validated using internal rules that define mandatory fields for the scanned document class.
 */
export class DocumentRules {
  /**
   * Specified fields will overrule our document class field rules if filter conditions are met.
   *
   * See {@link DocumentFilter} for more information.
   */
  documentFilter?: DocumentFilter;

  /**
   * Fields to overrule our class field rules.
   *
   * See {@link DetailedFieldType} for more information.
   */
  fields: DetailedFieldType[];

  /**
   * Represents the custom document rules.
   *
   * This setting allows users to narrow down our internal rules on mandatory fields. All undefined fields will become optional.
   * It is not possible to mark fields as mandatory if they cannot theoretically appear on the document.
   * The more detailed document filter will have priority over the other.
   *
   * Document fields are validated using internal rules that define mandatory fields for the scanned document class.
   * Defines custom rules for specific document class.
   *
   * When defining {@link DocumentRules}, the {@link DocumentFilter} paramter is optionally set to specify the document to which the rule applies, and a `fields` with
   *     the appropriate `alphabetType` should be specified as mandatory for that document.
   * If a `fields` is set to a field that is optional for that document or does not exist on it, all fields on the document become optional.
   * If a `fields` is set to a field with an incorrect alphabetType, all fields on the document become optional.
   * If a `fields` is set to a field that doesn’t exist in the internal rules, that rule is ignored.
   * When adding multiple `fields`, any field that does not match our rules is ignored. Only fields that comply with our rules are set as mandatory.
   * If the documentFilter fields `country`, `region`, or `type` are set to `null`, all supported values for those fields will be considered.
   *     For example, if `country = null`, the rule will apply to all supported countries in BlinkID.
   *
   * @param fields - specifies the list of {@link DetailedFieldType} for overruling our class field rules.
   * This parameter is mandatory.
   * @param documentFilter - specifies the {@link DocumentFilter} to specify the document to which the rule applies.
   * This parameter is optional.
   */
  constructor(fields: DetailedFieldType[], documentFilter?: DocumentFilter) {
    this.fields = fields;
    this.documentFilter = documentFilter;
  }
}

/**
 * Represents the detailed field type.
 *
 */
export class DetailedFieldType {
  /**
   * The field type.
   *
   * See {@link FieldType} for more information.
   */
  fieldType: FieldType;

  /**
   * The alphabet type.
   *
   * See {@link AlphabetType} for more information.
   */
  alphabetType: AlphabetType;

  /**
   *
   * @param fieldType - specifies the {@link FieldType}.
   * @param alphabetType - specifies the {@link AlphabetType}.
   *
   * Both parameters are mandatory.
   */
  constructor(fieldType: FieldType, alphabetType: AlphabetType) {
    this.fieldType = fieldType;
    this.alphabetType = alphabetType;
  }
}

/**
 * Represents the document anonymization settings.
 *
 */
export class DocumentAnonymizationSettings {
  /**
   * Document fields that will be anonymized.
   *
   */
  fields: FieldType[];

  /**
   * Specified fields will be anonymized if filter conditions are met.
   *
   */
  documentFilter?: DocumentFilter;

  /**
   * Document number anonymization settings.
   *
   */
  documentNumberAnonymizationSettings?: DocumentNumberAnonymizationSettings;

  /**
   *
   * @param fields - specifies the document fields that will be anonymized. This parameter is mandatory.
   *
   * @param documentFilter - specifies the document filter.
   *
   * If the conditions of the filter are met, fields of those documents will be anonymized.
   * This parameter is mandatory.
   * @param documentNumberAnonymizationSettings - specifies the document number anonymization settings.
   *
   * If this parameter is set, it will anonymize the document number, even if the document number is not set in the `fields` parameter.
   * If the default constructor for {@link DocumentNumberAnonymizationSettings} is used, all of the digits within the document number will be anonymized.
   *
   * This parameter is optional.
   */
  constructor(
    fields: FieldType[],
    documentFilter?: DocumentFilter,
    documentNumberAnonymizationSettings?: DocumentNumberAnonymizationSettings
  ) {
    this.fields = fields;
    this.documentFilter = documentFilter;
    this.documentNumberAnonymizationSettings =
      documentNumberAnonymizationSettings;
  }
}

/**
 * Represents the document number anonymization settings.
 *
 * Both settings, `prefixDigitsVisible` and `suffixDigitsVisible`, can be modified and set.
 *
 * By default, `prefixDigitsVisible` and `suffixDigitsVisible` are set to 0.
 * This results that no digits within the document number will be visible.
 *
 * If any parameter is `undefined`, the value of the parameter will be set to `0`.
 */
export class DocumentNumberAnonymizationSettings {
  /**
   * Defines how many digits at the beginning of the document number remain visible after anonymization.
   *
   */
  prefixDigitsVisible?: number;

  /**
   * Defines how many digits at the end of the document number remain visible after anonymization.
   *
   */
  suffixDigitsVisible?: number;

  constructor(
    prefixDigitsVisible: number = 0,
    suffixDigitsVisible: number = 0
  ) {
    this.prefixDigitsVisible = prefixDigitsVisible;
    this.suffixDigitsVisible = suffixDigitsVisible;
  }
}
/**
 * Represents the configuration used to enable/disable recognition of specific
 * document groups.
 *
 * By default all modes are enabled.
 */
export class RecognitionModeFilter {
  /**
   * Enable scanning of MRZ IDs.
   *
   */
  enableMrzId: boolean;

  /**
   * Enable scanning of visa MRZ.
   *
   */
  enableMrzVisa: boolean;

  /**
   * Enable scanning of Passport MRZ.
   *
   */
  enableMrzPassport: boolean;

  /**
   * Enable scanning of Photo ID.
   *
   */
  enablePhotoId: boolean;

  /**
   * Enable scanning of barcode IDs.
   *
   */
  enableBarcodeId: boolean;

  /**
   * Enable full document recognition.
   *
   */
  enableFullDocumentRecognition: boolean;

  constructor() {
    this.enableMrzId = true;
    this.enableMrzVisa = true;
    this.enableMrzPassport = true;
    this.enablePhotoId = true;
    this.enableBarcodeId = true;
    this.enableFullDocumentRecognition = true;
  }
}

/**
 * Represents the document class information.
 *
 */
export class DocumentClassInfo {
  /**
   * The document country.
   *
   * See {@link Country} for more information.
   */
  country?: Country;
  /**
   * The document region.
   *
   * See {@link Region} for more information.
   */
  region?: Region;

  /**
   * The type of the scanned document.
   *
   * See {@link DocumentType} for more information.
   */
  documentType?: DocumentType;

  /**
   * Flag that indicates if the document class information is empty
   *
   */
  empty?: boolean;

  /**
   * The name of the country that issued the scanned document.
   *
   */
  countryName?: string;

  /**
   * The ISO numeric code of the country that issued the scanned document.
   *
   */
  isoNumericCountryCode?: string;

  /**
   * The 2 letter ISO code of the country that issued the scanned document.
   *
   */
  isoAlpha2CountryCode?: string;

  /**
   * The 3 letter ISO code of the country that issued the scanned document.
   *
   */
  isoAlpha3CountryCode?: string;

  /**
   *
   * @param nativeDocumentClassInfo
   *
   */
  constructor(nativeDocumentClassInfo: any) {
    this.country = nativeDocumentClassInfo.country;
    this.region = nativeDocumentClassInfo.region;
    this.documentType = nativeDocumentClassInfo.documentType;
    this.empty = nativeDocumentClassInfo.empty;
    this.countryName = nativeDocumentClassInfo.countryName;
    this.isoNumericCountryCode = nativeDocumentClassInfo.isoNumericCountryCode;
    this.isoAlpha2CountryCode = nativeDocumentClassInfo.isoAlpha2CountryCode;
    this.isoAlpha3CountryCode = nativeDocumentClassInfo.isoAlpha3CountryCode;
  }
}

/**
 * Represents the result of the data match.
 *
 */
export class DataMatchResult {
  /**
   * The state of the data match on the whole document.
   *
   * See {@link DataMatchState} for more information.
   */
  overallState?: DataMatchState;

  /**
   * The data match state of each field.
   *
   * See {@link DataMatchResultField} for more information.
   */
  states?: DataMatchResultField[];

  /**
   *
   * @param nativeDataMatchResult
   */
  constructor(nativeDataMatchResult: any) {
    this.overallState =
      nativeDataMatchResult.overallState != undefined
        ? (nativeDataMatchResult.overallState as DataMatchState)
        : undefined;
    this.states = nativeDataMatchResult.states;
  }
}

/**
 * Represents the state of the field in the data match.
 *
 */
export class DataMatchResultField {
  /**
   * The type of the field.
   *
   * See {@link DataMatchField} for more information.
   */
  field?: DataMatchField;
  /**
   * The state of the field.
   *
   * See {@link DataMatchState} for more information.
   */
  state?: DataMatchState;

  /**
   *
   * @param nativeDataMatchResultField
   *
   */
  constructor(nativeDataMatchResultField: any) {
    this.field = nativeDataMatchResultField.field;
    this.state = nativeDataMatchResultField.state;
  }
}

/**
 * Represents the multi-alphabet string result extracted from the OCR.
 *
 * The result contains the extracted strings, their locations, and the sides of the extracted strings.
 *
 */
export class StringResult {
  /**
   * All strings separated by new line
   *
   */
  value?: string;

  /**
   * String for field in latin alphabet
   *
   */
  latin?: string;

  /**
   * String for field in arabic alphabet
   *
   */
  arabic?: string;

  /**
   * String for field in cyrillic alphabet
   *
   */
  cyrillic?: string;

  /**
   * String for field in greek alphabet
   *
   */
  greek?: string;

  /**
   * Document field location.
   *
   * See {@link Location} for more information.
   */
  location?: Location;

  /**
   * The document side where the field is located.
   *
   * See {@link Side} for more information.
   */
  side?: Side;

  /**
   *
   * @param nativeStringResult
   *
   */
  constructor(nativeStringResult: any) {
    this.value = nativeStringResult.value;
    this.latin = nativeStringResult.latin;
    this.cyrillic = nativeStringResult.cyrillic;
    this.arabic = nativeStringResult.arabic;
    this.greek = nativeStringResult.greek;
    this.location =
      nativeStringResult.location != undefined
        ? new Location(nativeStringResult.location)
        : undefined;
    this.side =
      nativeStringResult.side != undefined
        ? new Side(nativeStringResult.side)
        : undefined;
  }
}

/**
 * Represents the rectangle location of each document field
 *
 */
export class Rectangle {
  /**
   * X location
   *
   */
  x?: number;

  /**
   * Y location
   *
   */
  y?: number;

  /**
   * Rectangle width
   *
   */
  width?: number;

  /**
   * Rectangle height.
   *
   */
  height?: number;

  /**
   *
   * @param nativeRectangle
   *
   */
  constructor(nativeRectangle: any) {
    this.x = nativeRectangle.x;
    this.y = nativeRectangle.y;
    this.width = nativeRectangle.width;
    this.height = nativeRectangle.height;
  }
}

/**
 * Represents the information about the location of an element within a document or image.
 *
 */
export class Location {
  /**
   * Rectangle location of the result extracted from the OCR in the latin alphabet.
   *
   */
  latin?: Rectangle;

  /**
   * Rectangle location of the result extracted from the OCR in the arabic alphabet.
   *
   */
  arabic?: Rectangle;

  /**
   * Rectangle location of the result extracted from the OCR in the cyrillic alphabet.
   *
   */
  cyrillic?: Rectangle;

  /**
   * Rectangle location of the result extracted from the OCR in the greek alphabet.
   *
   */
  greek?: Rectangle;

  /**
   *
   * @param nativeLocation
   *
   */
  constructor(nativeLocation: any) {
    this.latin =
      nativeLocation.latin != undefined
        ? new Rectangle(nativeLocation.latin)
        : undefined;
    this.arabic =
      nativeLocation.arabic != undefined
        ? new Rectangle(nativeLocation.arabic)
        : undefined;
    this.cyrillic =
      nativeLocation.cyrillic != undefined
        ? new Rectangle(nativeLocation.cyrillic)
        : undefined;
    this.greek =
      nativeLocation.greek != undefined
        ? new Rectangle(nativeLocation.greek)
        : undefined;
  }
}

/**
 * Side of the document on which the specific result is located.
 *
 */
export class Side {
  /**
   * Document side of the result extracted from the OCR in the latin alphabet.
   *
   */
  latin?: DocumentSide;

  /**
   * Document side of the result extracted from the OCR in the arabic alphabet.
   *
   */
  arabic?: DocumentSide;

  /**
   * Document side of the result extracted from the OCR in the cyrillic alphabet.
   *
   */
  cyrillic?: DocumentSide;

  /**
   * Document side of the result extracted from the OCR in the cyrillic alphabet.
   *
   */
  greek?: DocumentSide;

  /**
   *
   * @param nativeSide
   *
   */
  constructor(nativeSide: any) {
    this.latin = nativeSide.latin;
    this.arabic = nativeSide.arabic;
    this.cyrillic = nativeSide.cyrillic;
    this.greek = nativeSide.greek;
  }
}

/**
 * Represents the result of the date extraction.
 *
 * Contains the extracted date, along with additional date information.
 */
export class DateResult<T> {
  /**
   * The extracted date information.
   *
   * See {@link Date} for more information.
   */
  date?: Date;

  /**
   * Original string representation of the date which has been extracted.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `string`.
   */
  originalString?: T;

  /**
   * Indicates that date does not appear on the document
   * but is filled by our internal domain knowledge.
   */
  isFilledByDomainKnowledge?: boolean;

  /**
   * Indicates whether date was successfully parsed.
   *
   */
  successfullyParsed?: boolean;

  constructor(nativeDateResult: any) {
    this.date = nativeDateResult.date;
    this.originalString = BlinkIdUtilities.handleStringType<T>(
      nativeDateResult.originalString
    );
    this.isFilledByDomainKnowledge = nativeDateResult.isFilledByDomainKnowledge;
    this.successfullyParsed = nativeDateResult.successfullyParsed;
  }
}

/**
 * Represents the extracted date.
 *
 */
export class Date {
  /**
   * Day of the month.
   *
   * The first day of the month has value 1.
   */
  day?: number;
  /**
   * Month of the year.
   *
   * The first month of the year has value 1.
   */
  month?: number;

  /**
   * Full year.
   *
   */
  year?: number;

  /**
   *
   * @param nativeDate
   */
  constructor(nativeDate: any) {
    this.day = nativeDate.day;
    this.month = nativeDate.month;
    this.year = nativeDate.year;
  }
}

/**
 * Represents detailed extracted information about the driver license.
 *
 */
export class DriverLicenseDetailedInfo<T> {
  /**
   * The restrictions to driving privileges for the United States driver license owner.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */
  restrictions?: T;
  /**
   * The additional privileges granted to the US driver license owner.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */
  endorsements?: T;
  /**
   * The type of vehicle the driver license owner has privilege to drive.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */
  vehicleClass?: T;

  /**
   * The driver license conditions.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */
  conditions?: T;

  /**
   * The additional information on vehicle class.
   *
   * See {@link VehicleClassInfo} for more information.
   */
  vehicleClassesInfo?: VehicleClassInfo<T>[];

  constructor(nativeDriverLicenseDetailedInfo: any) {
    this.restrictions = BlinkIdUtilities.handleStringType(
      nativeDriverLicenseDetailedInfo.restrictions
    );
    this.endorsements = BlinkIdUtilities.handleStringType(
      nativeDriverLicenseDetailedInfo.endorsements
    );
    this.vehicleClass = BlinkIdUtilities.handleStringType(
      nativeDriverLicenseDetailedInfo.vehicleClass
    );
    this.vehicleClassesInfo =
      nativeDriverLicenseDetailedInfo.vehicleClassesInfo;
  }
}

/**
 * Represents the information about the vehicle class extraction.
 *
 */
export class VehicleClassInfo<T> {
  /**
   * The type of driver licence.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `string`.
   */
  licenceType?: T;
  /**
   * The type of vehicle the driver license owner has privilege to drive.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */
  vehicleClass?: T;
  /**
   * The date since licence is effective.
   *
   * See {@link DateResult} for more information.
   */
  effectiveDate?: DateResult<T>;

  /**
   * The date of expiry of licence.
   *
   * See {@link DateResult} for more information.
   */
  expiryDate?: DateResult<T>;

  constructor(nativeVehicleClassInfo: any) {
    this.licenceType = BlinkIdUtilities.handleStringType<T>(
      nativeVehicleClassInfo.licenceType
    );
    this.vehicleClass = BlinkIdUtilities.handleStringType<T>(
      nativeVehicleClassInfo.vehicleClass
    );
    this.effectiveDate = nativeVehicleClassInfo.effectiveDate;
    this.expiryDate = nativeVehicleClassInfo.expiryDate;
  }
}

/**
 * Information about the dependent.
 *
 */
export class DependentInfo {
  /**
   * The date of birth of the dependent.
   *
   */
  dateOfBirth?: DateResult<StringResult>;

  /**
   * The sex or gender of the dependent.
   *
   */
  sex?: StringResult;

  /**
   * The document number of the dependent.
   *
   */
  documentNumber?: StringResult;

  /**
   * The full name of the dependent.
   *
   */
  fullName?: StringResult;

  /**
   * Checks if the dependent's information is empty.
   *
   */
  empty?: boolean;

  constructor(nativeDependentInfo: any) {
    this.dateOfBirth = nativeDependentInfo.dateOfBirth;
    this.sex = nativeDependentInfo.sex;
    this.documentNumber = nativeDependentInfo.documentNumber;
    this.fullName = nativeDependentInfo.fullName;
    this.empty = nativeDependentInfo.empty;
  }
}

/**
 * Represents the result of the image crop transformation with additional details.
 *
 */
export class DetailedCroppedImageResult {
  /**
   * The cropped image in the Base64 format
   *
   */
  image?: string;

  /**
   * The document side that was cropped.
   *
   */
  side?: ScanningSide;

  /**
   * The location of the cropped image in the transformed image of the document.
   *
   */
  location?: Rectangle;

  /**
   *
   * @param nativeDetailedCroppedImageResult
   *
   */
  constructor(nativeDetailedCroppedImageResult: any) {
    this.image = nativeDetailedCroppedImageResult.image;
    this.side =
      nativeDetailedCroppedImageResult.side != undefined
        ? (nativeDetailedCroppedImageResult.side as ScanningSide)
        : undefined;
    this.location =
      nativeDetailedCroppedImageResult.location != undefined
        ? new Rectangle(nativeDetailedCroppedImageResult.location)
        : undefined;
  }
}

/**
 * Represents the result of scanning a single side of the document.
 *
 * Contains the data extracted from the Visual Inspection Zone, Machine Readable Zone,
 * barcode, the input image, and the cropped document, face, and signature images.
 */
export class SingleSideScanningResult {
  /**
   * The data extracted from the Visual Inspection Zone.
   *
   */
  viz?: VizResult;

  /**
   * The data extracted from the Machine Readable Zone.
   *
   */
  mrz?: MrzResult;

  /**
   * The data extracted from the barcode.
   *
   */
  barcode?: BarcodeResult;

  /**
   * The input image in the Base64 format.
   *
   */
  inputImage?: string;

  /**
   * The input image containing parsable barcode in the Base64 format.
   *
   */
  barcodeInputImage?: string;

  /**
   * The cropped document image in the Base64 format.
   *
   */
  documentImage?: string;

  /**
   * The cropped face image with additional info.
   *
   */
  faceImage?: DetailedCroppedImageResult;

  /**
   * The cropped signature image with additional info.
   *
   */
  signatureImage?: DetailedCroppedImageResult;

  /**
   *
   * @param nativeSingleSideScanningResult - specifies the single side scanning result obtained from the native SDK.
   *
   */
  constructor(nativeSingleSideScanningResult: any) {
    this.viz = nativeSingleSideScanningResult.viz;
    this.mrz = nativeSingleSideScanningResult.mrz;
    this.barcode = nativeSingleSideScanningResult.barcode;
    this.inputImage = nativeSingleSideScanningResult.inputImage;
    this.barcodeInputImage = nativeSingleSideScanningResult.barcodeInputImage;
    this.documentImage = nativeSingleSideScanningResult.documentImage;
    this.faceImage = nativeSingleSideScanningResult.faceImage;
    this.signatureImage = nativeSingleSideScanningResult.signatureImage;
  }
}

/**
 * Represents the result of the Visual Inspection Zone of a document.
 *
 */
export class VizResult {
  /**
   * The first name of the document owner.
   *
   */
  firstName?: StringResult;

  /**
   * The last name of the document owner.
   *
   */
  lastName?: StringResult;

  /**
   * The full name of the document owner.
   *
   */
  fullName?: StringResult;

  /**
   * The additional name information of the document owner.
   *
   */
  additionalNameInformation?: StringResult;

  /**
   * The localized name of the document owner.
   *
   */
  localizedName?: StringResult;

  /**
   * The fathers name of the document owner.
   *
   */
  fathersName?: StringResult;

  /**
   * The mothers name of the document owner.
   *
   */
  mothersName?: StringResult;

  /**
   * The address of the document owner.
   *
   */
  address?: StringResult;

  /**
   * The additional address information of the document owner.
   *
   */
  additionalAddressInformation?: StringResult;

  /**
   * The one more additional address information of the document owner.
   *
   */
  additionalOptionalAddressInformation?: StringResult;

  /**
   * The place of birth of the document owner.
   *
   */
  placeOfBirth?: StringResult;

  /**
   * The nationality of the document owner.
   *
   */
  nationality?: StringResult;

  /**
   * The race of the document owner.
   *
   */
  race?: StringResult;

  /**
   * The religion of the document owner.
   *
   */
  religion?: StringResult;

  /**
   * The profession of the document owner.
   *
   */
  profession?: StringResult;

  /**
   * The marital status of the document owner.
   *
   */
  maritalStatus?: StringResult;

  /**
   * The residential status of the document owner.
   *
   */
  residentialStatus?: StringResult;

  /**
   * The employer of the document owner.
   *
   */
  employer?: StringResult;

  /**
   * The sex of the document owner.
   *
   */
  sex?: StringResult;

  /**
   * The sponsor of the document owner.
   *
   */
  sponsor?: StringResult;

  /**
   * The blood type of the document owner.
   *
   */
  bloodType?: StringResult;

  /**
   * The date of birth of the document owner.
   *
   */
  dateOfBirth?: DateResult<StringResult>;

  /**
   * The date of issue of the document.
   *
   */
  dateOfIssue?: DateResult<StringResult>;

  /**
   * The date of expiry of the document.
   *
   */
  dateOfExpiry?: DateResult<StringResult>;

  /**
   * The date of entry of the document owner.
   *
   */
  dateOfEntry?: DateResult<StringResult>;

  /**
   * The locality code of the document owner.
   *
   */
  localityCode?: StringResult;

  /**
   * The maiden name of the document owner.
   *
   */
  maidenName?: StringResult;

  /**
   * The municipality code of the document owner.
   *
   */
  municipalityCode?: StringResult;

  /**
   * The municipality of registration of the document owner.
   *
   */
  municipalityOfRegistration?: StringResult;

  /**
   * The polling station code of the document owner.
   *
   */
  pollingStationCode?: StringResult;

  /**
   * The registration center code of the document owner.
   *
   */
  registrationCenterCode?: StringResult;

  /**
   * The section code of the document owner.
   *
   */
  sectionCode?: StringResult;

  /**
   * The state code of the document owner.
   *
   */
  stateCode?: StringResult;

  /**
   * The state of the document owner.
   *
   */
  stateName?: StringResult;

  /**
   * Determines if date of expiry is permanent.
   *
   */
  dateOfExpiryPermanent?: boolean;

  /**
   * The document number.
   *
   */
  documentNumber?: StringResult;

  /**
   * The personal identification number.
   *
   */
  personalIdNumber?: StringResult;

  /**
   * The additional number of the document.
   *
   */
  documentAdditionalNumber?: StringResult;

  /**
   * The one more additional number of the document.
   *
   */
  documentOptionalAdditionalNumber?: StringResult;

  /**
   * The additional personal identification number.
   *
   */
  additionalPersonalIdNumber?: StringResult;

  /**
   * The issuing authority of the document.
   *
   */
  issuingAuthority?: StringResult;

  /**
   * The visa type of the document.
   *
   */
  visaType?: StringResult;

  /**
   * The driver license detailed info.
   *
   */
  driverLicenseDetailedInfo?: DriverLicenseDetailedInfo<StringResult>;

  /**
   * The transcription of the document subtype.
   *
   */
  documentSubtype?: StringResult;

  /**
   * The remarks on the residence permit.
   *
   */
  remarks?: StringResult;

  /**
   * The residence permit type.
   */
  residencePermitType?: StringResult;

  /**
   * The manufacturing year.
   *
   */
  manufacturingYear?: StringResult;

  /**
   * The vehicle type.
   *
   */
  vehicleType?: StringResult;

  /**
   * The eligibility category.
   *
   */
  eligibilityCategory?: StringResult;

  /**
   * The specific document validity.
   *
   */
  specificDocumentValidity?: StringResult;

  /**
   * The dependents info.
   *
   */
  dependentsInfo?: DependentInfo[];

  /**
   * The vehicle owner.
   *
   */
  vehicleOwner?: StringResult;

  /**
   * The country code of the document owner.
   *
   */
  countryCode?: StringResult;

  /**
   * The certificate number of the document owner.
   *
   */
  certificateNumber?: StringResult;

  /**
   * The national insurance number of the document owner.
   *
   */
  nationalInsuranceNumber?: StringResult;

  /**
   *
   * @param nativeVizResult
   *
   */
  constructor(nativeVizResult: any) {
    this.firstName = nativeVizResult.firstName;
    this.lastName = nativeVizResult.lastName;
    this.fullName = nativeVizResult.fullName;
    this.additionalNameInformation = nativeVizResult.additionalNameInformation;
    this.localizedName = nativeVizResult.localizedName;
    this.fathersName = nativeVizResult.fathersName;
    this.mothersName = nativeVizResult.mothersName;
    this.address = nativeVizResult.address;
    this.additionalAddressInformation =
      nativeVizResult.additionalAddressInformation;
    this.additionalOptionalAddressInformation =
      nativeVizResult.additionalOptionalAddressInformation;
    this.placeOfBirth = nativeVizResult.placeOfBirth;
    this.nationality = nativeVizResult.nationality;
    this.race = nativeVizResult.race;
    this.religion = nativeVizResult.religion;
    this.profession = nativeVizResult.profession;
    this.maritalStatus = nativeVizResult.maritalStatus;
    this.residentialStatus = nativeVizResult.residentialStatus;
    this.employer = nativeVizResult.employer;
    this.sex = nativeVizResult.sex;
    this.sponsor = nativeVizResult.sponsor;
    this.bloodType = nativeVizResult.bloodType;
    this.dateOfBirth = nativeVizResult.dateOfBirth;
    this.dateOfIssue = nativeVizResult.dateOfIssue;
    this.dateOfExpiry = nativeVizResult.dateOfExpiry;
    this.dateOfEntry = nativeVizResult.dateOfEntry;
    this.localityCode = nativeVizResult.localityCode;
    this.maidenName = nativeVizResult.maidenName;
    this.municipalityCode = nativeVizResult.municipalityCode;
    this.municipalityOfRegistration =
      nativeVizResult.municipalityOfRegistration;
    this.pollingStationCode = nativeVizResult.pollingStationCode;
    this.registrationCenterCode = nativeVizResult.registrationCenterCode;
    this.sectionCode = nativeVizResult.sectionCode;
    this.stateCode = nativeVizResult.stateCode;
    this.stateName = nativeVizResult.stateName;
    this.dateOfExpiryPermanent = nativeVizResult.dateOfExpiryPermanent;
    this.documentNumber = nativeVizResult.documentNumber;
    this.personalIdNumber = nativeVizResult.personalIdNumber;
    this.documentAdditionalNumber = nativeVizResult.documentAdditionalNumber;
    this.documentOptionalAdditionalNumber =
      nativeVizResult.documentOptionalAdditionalNumber;
    this.additionalPersonalIdNumber =
      nativeVizResult.additionalPersonalIdNumber;
    this.issuingAuthority = nativeVizResult.issuingAuthority;
    this.visaType = nativeVizResult.visaType;
    this.driverLicenseDetailedInfo = nativeVizResult.driverLicenseDetailedInfo;
    this.documentSubtype = nativeVizResult.documentSubtype;
    this.remarks = nativeVizResult.remarks;
    this.residencePermitType = nativeVizResult.residencePermitType;
    this.manufacturingYear = nativeVizResult.manufacturingYear;
    this.vehicleType = nativeVizResult.vehicleType;
    this.eligibilityCategory = nativeVizResult.eligibilityCategory;
    this.specificDocumentValidity = nativeVizResult.specificDocumentValidity;
    this.dependentsInfo = nativeVizResult.dependentsInfo;
    this.vehicleOwner = nativeVizResult.vehicleOwner;
    this.countryCode = nativeVizResult.countryCode;
    this.certificateNumber = nativeVizResult.certificateNumber;
    this.nationalInsuranceNumber = nativeVizResult.nationalInsuranceNumber;
  }
}

/**
 * Represents the result of the MRZ recognition.
 *
 */
export class MrzResult {
  /**
   * The entire Machine Readable Zone text from ID.
   *
   */
  rawMRZString?: string;
  /**
   * The document code. Document code contains two characters.
   * For MRTD the first character shall be A, C or I.
   *
   * The second character shall be discretion of the issuing State or organization except
   * that V shall not be used, and `C` shall not be used after `A` except in the crew member certificate.
   *
   * On machine-readable passports (MRP) first character shall be `P` to designate an MRP. One additional
   * letter may be used, at the discretion of the issuing State or organization, to designate a particular
   * MRP.
   *
   * If the second character position is not used for this purpose, it shall be filled by the filter character.
   */
  documentCode?: string;

  /**
   * Three-letter or two-letter code which indicate the issuing State. Three-letter codes are based
   * on Aplha-3 codes for entities specified in ISO 3166-1, with extensions for certain States.
   *
   * Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
   */
  issuer?: string;

  /**
   * The document number.
   *
   */
  documentNumber?: string;

  /**
   * The first optional data. Empty string if not available.
   *
   */
  opt1?: string;

  /**
   * The second optional data. Empty string if not available.
   *
   */
  opt2?: string;
  /**
   * The gender of the document holder.
   *
   * Gender is specified by use of the single initial.
   */
  gender?: string;
  /**
   * The nationality of the document holder represented by a three-letter or two-letter code.
   *
   * Three-letter codes are based on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain States.
   *
   * Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
   */
  nationality?: string;

  /**
   * The primary indentifier.
   *
   * If there is more than one component, they are separated with space.
   */
  primaryID?: string;

  /**
   * The secondary identifier.
   *
   * If there is more than one component, they are separated with space.
   */
  secondaryID?: string;

  /**
   * The full issuer name that is expanded from the three-letter or two-letter code which indicate
   * the issuing State.
   *
   */
  issuerName?: string;
  /**
   * The full nationality of the document holder, which is expanded from the three-letter or two-letter
   * nationality code.
   */
  nationalityName?: string;

  /**
   * Whether the MRZ is verified.
   *
   * If the MRZ is verified, it means that all check digits are correct.
   */
  verified?: boolean;

  /**
   * The date of birth of the document holder.
   *
   */
  dateOfBirth?: DateResult<string>;

  /**
   * The date of expiry of the document.
   *
   */
  dateOfExpiry?: DateResult<string>;

  /**
   * The type of the document.
   *
   */
  documentType?: MRZDocumentType;

  /**
   * The sanitized first optional data.
   *
   * Result without additional '<' characters if they exist.
   */
  sanitizedOpt1?: string;

  /**
   * The sanitized second optional data.
   *
   * Result without additional '<' characters if they exist.
   */
  sanitizedOpt2?: string;

  /**
   * The sanitized nationality.
   *
   * Result without additional '<' characters if they exist.
   */
  sanitizedNationality?: string;

  /**
   * The sanitized issuer.
   *
   * Result without additional '<' characters if they exist.
   */
  sanitizedIssuer?: string;

  /**
   * The sanitized document code.
   *
   * Result without additional '<' characters if they exist.
   */
  sanitizedDocumentCode?: string;

  /**
   * The sanitized document number.
   *
   * Result without additional '<' characters if they exist.
   */
  sanitizedDocumentNumber?: string;

  /**
   *
   * @param nativeMrzResult
   *
   */
  constructor(nativeMrzResult: any) {
    this.rawMRZString = nativeMrzResult.rawMRZString;
    this.documentCode = nativeMrzResult.documentCode;
    this.issuer = nativeMrzResult.issuer;
    this.documentNumber = nativeMrzResult.documentNumber;
    this.opt1 = nativeMrzResult.opt1;
    this.opt2 = nativeMrzResult.opt2;
    this.gender = nativeMrzResult.gender;
    this.nationality = nativeMrzResult.nationality;
    this.primaryID = nativeMrzResult.primaryID;
    this.secondaryID = nativeMrzResult.secondaryID;
    this.issuerName = nativeMrzResult.issuerName;
    this.nationalityName = nativeMrzResult.nationalityName;
    this.verified = nativeMrzResult.verified;
    this.dateOfBirth = nativeMrzResult.dateOfBirth;
    this.dateOfExpiry = nativeMrzResult.dateOfExpiry;
    this.documentType = nativeMrzResult.documentType;
    this.sanitizedOpt1 = nativeMrzResult.sanitizedOpt1;
    this.sanitizedOpt2 = nativeMrzResult.sanitizedOpt2;
    this.sanitizedNationality = nativeMrzResult.sanitizedNationality;
    this.sanitizedIssuer = nativeMrzResult.sanitizedIssuer;
    this.sanitizedDocumentCode = nativeMrzResult.sanitizedDocumentCode;
    this.sanitizedDocumentNumber = nativeMrzResult.sanitizedDocumentNumber;
  }
}

/**
 * Represents the data extracted from the barcode.
 *
 */
export class BarcodeResult {
  /**
   * The raw, unparsed barcode data.
   *
   */
  barcodeData?: BarcodeData;

  /**
   * The first name of the document owner.
   *
   */
  firstName?: string;

  /**
   * The middle name of the document owner.
   *
   */
  middleName?: string;

  /**
   * The last name of the document owner.
   *
   */
  lastName?: string;

  /**
   * The full name of the document owner.
   *
   */
  fullName?: string;

  /**
   * The additional name information of the document owner.
   *
   */
  additionalNameInformation?: string;

  /**
   * The address of the document owner.
   *
   */
  address?: string;

  /**
   * The place of birth of the document owner.
   *
   */
  placeOfBirth?: string;

  /**
   * The nationality of the document owner.
   *
   */
  nationality?: string;

  /**
   * The race of the document owner.
   *
   */
  race?: string;

  /**
   * The religion of the document owner.
   *
   */
  religion?: string;

  /**
   * The profession of the document owner.
   *
   */
  profession?: string;

  /**
   * The marital status of the document owner.
   *
   */
  maritalStatus?: string;

  /**
   * The residential status of the document owner.
   *
   */
  residentialStatus?: string;

  /**
   * The employer of the document owner.
   *
   */
  employer?: string;

  /**
   * The sex of the document owner.
   *
   */
  sex?: string;

  /**
   * The date of birth of the document owner.
   *
   */
  dateOfBirth?: DateResult<string>;

  /**
   * The date of issue of the document.
   *
   */
  dateOfIssue?: DateResult<string>;

  /**
   * The date of expiry of the document.
   *
   */
  dateOfExpiry?: DateResult<string>;

  /**
   * The document number.
   *
   */
  documentNumber?: string;

  /**
   * The personal identification number.
   *
   */
  personalIdNumber?: string;

  /**
   * The additional number of the document.
   *
   */
  documentAdditionalNumber?: string;

  /**
   * The issuing authority of the document.
   *
   */
  issuingAuthority?: string;

  /**
   * The details about the address of the document owner.
   *
   */
  addressDetailedInfo?: AddressDetailedInfo;

  /**
   * The driver license detailed info.
   *
   */
  driverLicenseDetailedInfo?: DriverLicenseDetailedInfo<string>;
  /**
   * Document specific extended elements that contain all barcode fields in their original form.
   *
   * Currently this is only filled for AAMVACompliant documents.
   */
  extendedElements?: BarcodeExtendedElements;

  /**
   * Indicates whether the barcode was successfully parsed.
   */
  parsed?: boolean;

  /**
   *
   * @param nativeBarcodeResult
   */
  constructor(nativeBarcodeResult: any) {
    this.barcodeData = nativeBarcodeResult.barcodeData;
    this.firstName = nativeBarcodeResult.firstName;
    this.middleName = nativeBarcodeResult.middleName;
    this.lastName = nativeBarcodeResult.lastName;
    this.fullName = nativeBarcodeResult.fullName;
    this.additionalNameInformation =
      nativeBarcodeResult.additionalNameInformation;
    this.address = nativeBarcodeResult.address;
    this.placeOfBirth = nativeBarcodeResult.placeOfBirth;
    this.nationality = nativeBarcodeResult.nationality;
    this.race = nativeBarcodeResult.race;
    this.religion = nativeBarcodeResult.religion;
    this.profession = nativeBarcodeResult.profession;
    this.maritalStatus = nativeBarcodeResult.maritalStatus;
    this.residentialStatus = nativeBarcodeResult.residentialStatus;
    this.employer = nativeBarcodeResult.employer;
    this.sex = nativeBarcodeResult.sex;
    this.dateOfBirth = nativeBarcodeResult.dateOfBirth;
    this.dateOfIssue = nativeBarcodeResult.dateOfIssue;
    this.dateOfExpiry = nativeBarcodeResult.dateOfExpiry;
    this.documentNumber = nativeBarcodeResult.documentNumber;
    this.personalIdNumber = nativeBarcodeResult.personalIdNumber;
    this.documentAdditionalNumber =
      nativeBarcodeResult.documentAdditionalNumber;
    this.issuingAuthority = nativeBarcodeResult.issuingAuthority;
    this.addressDetailedInfo = nativeBarcodeResult.addressDetailedInfo;
    this.driverLicenseDetailedInfo =
      nativeBarcodeResult.driverLicenseDetailedInfo;
    this.extendedElements = nativeBarcodeResult.extendedElements;
    this.parsed = nativeBarcodeResult.parsed;
  }
}

/**
 * Represents the raw, unparsed data extracted from a scanned barcode.
 *
 */
export class BarcodeData {
  /**
   * Type of the scanned barcode.
   *
   */
  barcodeType?: BarcodeType;

  /**
   * Raw bytes of the barcode content.
   *
   */
  rawData?: string;

  /**
   * String representation of the barcode content.
   *
   */
  stringData?: string;

  /**
   * Whether the barcode data is uncertain, i.e. if scanned barcode was incomplete or has parts of it missing.
   *
   */
  uncertain?: boolean;

  /**
   *
   * @param nativeBarcodeData - specifies the barcode data obtained from the native SDK.
   */
  constructor(nativeBarcodeData: any) {
    this.barcodeType = nativeBarcodeData.barcodeType;
    this.rawData = nativeBarcodeData.rawData;
    this.stringData = nativeBarcodeData.stringData;
    this.uncertain = nativeBarcodeData.uncertain;
  }
}

/**
 * Detailed information about the address.
 *
 */
export class AddressDetailedInfo {
  /**
   * he address street portion of the document owner.
   *
   */
  street?: string;

  /**
   * The address postal code portion of the document owner.
   *
   */
  postalCode?: string;

  /**
   * The address city portion of the document owner.
   *
   */
  city?: string;

  /**
   * The address jurisdiction code portion of the document owner.
   *
   */
  jurisdiction?: string;

  /**
   *
   * @param nativeAddressDetailedInfo - specificies the address detailed info obtained from the native SDK.
   *
   */
  constructor(nativeAddressDetailedInfo: any) {
    this.street = nativeAddressDetailedInfo.street;
    this.postalCode = nativeAddressDetailedInfo.postalCode;
    this.city = nativeAddressDetailedInfo.city;
    this.jurisdiction = nativeAddressDetailedInfo.jurisdiction;
  }
}
/**
 * Represents the fields present in the barcode.
 * Currently this is only used for AAMVACompliant documents.
 */
export class BarcodeExtendedElements {
  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   * On compact barcodes, use kFullAddress.
   *
   * City portion of the cardholder address.
   */
  addressCity?: string;

  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   * On compact barcodes, use kFullAddress.
   *
   * State portion of the cardholder address.
   */
  addressJurisdictionCode?: string;
  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   * On compact barcodes, use kFullAddress.
   *
   * Postal code portion of the cardholder address in the U.S. and Canada.
   * If the trailing portion of the postal code in the U.S. is not known, zeros can be used
   * to fill the trailing set of numbers up to nine (9) digits.
   */
  addressPostalCode?: string;

  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   * On compact barcodes, use kFullAddress.
   *
   * Street portion of the cardholder address.
   * The place where the registered driver of a vehicle (individual or corporation)
   * may be contacted such as a house number, street address, etc.
   */
  addressStreet?: string;

  /**
   * Optional on all AAMVA barcodes.
   * On Compact barcodes, use kFullAddress.
   *
   * Second line of street portion of the cardholder address.
   */
  addressStreet2?: string;

  /**
   * Optional on AAMVA 01. (MMDDCCYY format)
   *
   * ALTERNATIVE DATES(S) given as date of birth.
   */
  akaDateOfBirth?: string;

  /**
   * Optional on all AAMVA and Compact barcodes.
   * Other family name by which the cardholder is known.
   */
  akaFamilyName?: string;

  /**
   * Optional on all AAMVA and Compact barcodes.
   *
   * Other name by which the cardholder is known. ALTERNATIVE NAME(S) of the individual
   * holding the Driver License or ID.
   *
   * The Name field contains up to four portions, separated with the "," delimiter:
   * AKA Last Name (required)
   * , (required)
   * AKA First Name (required)
   * , (required if other name portions follow, otherwise optional)
   * AKA Middle Name(s) (optional)
   * , (required if other name portions follow, otherwise optional)
   * AKA Suffix (optional)
   * , (optional)
   *
   * If the individual has more than one AKA middle name they are separated with space.
   */
  akaFullName?: string;

  /**
   * Optional on all AAMVA and Compact barcodes.
   *
   * Other given name by which the cardholder is known
   */
  akaGivenName?: string;

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * ALTERNATIVE MIDDLE NAME(s) or INITIALS of the individual holding the Driver License or ID.
   * Hyphenated names acceptable, spaces between names acceptable, but no other
   * use of special symbols.
   */
  akaMiddleName?: string;

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * ALTERNATIVE PREFIX to Driver Name. Freeform as defined by issuing jurisdiction.
   */
  akaPrefixName?: string;
  /**
   * Optional on AAMVA version 01.
   *
   * Driver "AKA" Social Security Number. FORMAT SAME AS DRIVER SOC SEC NUM. ALTERNATIVE NUMBERS(S) used as SS NUM.
   */
  akaSocialSecurityNumber?: string;

  /**
  *  Optional on all AAMVA and Compact barcodes.
  *
  * Other suffix by which the cardholder is known.

  * The Suffix Code Portion, if submitted, can contain only the Suffix Codes
  * shown in the following table (e.g., Andrew Johnson, III = JOHNSON@ANDREW@@3RD):
  *
  * Suffix     Meaning or Synonym
  * JR         Junior
  * SR         Senior or Esquire 1ST First
  * 2ND        Second
  * 3RD        Third
  * 4TH        Fourth
  * 5TH        Fifth
  * 6TH        Sixth
  * 7TH        Seventh
  * 8TH        Eighth
  * 9TH        Ninth
  */
  akaSuffixName?: string;

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * A string of letters and/or numbers that identifies when, where, and by whom a driver's
   * license/ID card was made. If audit information is not used on the card or the MRT, it
   * must be included in the driver record.
   */
  auditInformation?: string;

  /**
   * Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * DHS required field that indicates date of the most recent version change or
   *  modification to the visible format of the DL/ID. (MMDDCCYY format)
   */
  cardRevisionDate?: string;

  /**
   * Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * DHS required field that indicates compliance: "M" = materially compliant,
   * "F" = fully compliant, and, "N" = non-compliant.
   */
  complianceType?: string;

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Country in which DL/ID is issued. U.S. = USA, Canada = CAN.
   */
  countryIdentification?: string;

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * Family name of the cardholder. (Family name is sometimes also called "last name" or "surname.")
   * Collect full name for record, print as many characters as possible on portrait side of DL/ID.
   */
  customerFamilyName?: string;

  /**
   * Mandatory on all AAMVA and Compact barcodes.
   *
   * The number assigned or calculated by the issuing authority.
   */
  customerIdNumber?: string;

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * First name of the cardholder.
   */
  customerFirstName?: string;

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * Full name of the individual holding the Driver's License or ID.
   *
   * The Name field contains up to four portions, separated with the "," delimiter:
   * Last Name (required)
   * , (required)
   * First Name (required)
   * , (required if other name portions follow, otherwise optional)
   * Middle Name(s) (optional)
   * , (required if other name portions follow, otherwise optional)
   * Suffix (optional)
   * , (optional)
   *
   * If the individual has more than one middle name they are separated with space.
   */
  customerFullName?: string;

  /**
   * Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
   * Optional on AAMVA 01, 02, 03, Magnetic and Compcat barcodes.
   *
   * Middle name(s) of the cardholder. In the case of multiple middle names they
   * shall be separated by space " ".
   */
  customerMiddleName?: string;

  /**
   * Optional on compact barcodes.
   *
   * Document discriminator.
   */
  dataDiscriminator?: string;

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * Date on which the cardholder was born. (MMDDCCYY format)
   */
  dateOfBirth?: string;

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Magnetic barcodes.
   * Optional on Compact barcodes.
   *
   * Number must uniquely identify a particular document issued to that customer
   * from others that may have been issued in the past. This number may serve
   * multiple purposes of document discrimination, audit info, and/or inventory control.
   */
  documentDiscriminator?: string;

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * Date on which the document expires. (MMDDCCYY format)
   * If the document is non expiring then "Non expiring" is written in this field.
   */
  documentExpirationDate?: string;

  /**
   * Optional on Magnetic barcodes.
   *
   * Month on which the driving and identification privileges granted by the document are no longer valid.
   */
  documentExpirationMonth?: string;

  /**
   * Mandatory on all AAMVA and Compact barcodes.
   *
   * Date on which the document was issued. (MMDDCCYY format)
   */
  documentIssueDate?: string;

  /**
   * Optional on Magnetic barcodes.
   *
   * Field that indicates that the driving and identification privileges granted by the
   * document are nonexpiring = "1".
   */
  documentNonexpiring?: string;

  /**
   * Mandatory on all driver's licenses.
   * All barcodes which are using 3-track magnetic stripe encoding used in the interest of smoothing a transition from legacy documents
   * shall be designated as "Magnetic". All barcodes which are using compact encoding
   * compliant with ISO/IEC 18013-2 shall be designated as "Compact". All barcodes (majority)
   * compliant with Mandatory PDF417 Bar Code of the American Association of Motor Vehicle
   * Administrators (AAMVA) Card Design Standard from AAMVA DL/ID-2000 standard to DL/ID-2013
   * shall be designated as "AAMVA".
   */
  documentType?: string;

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 barcodes.
   * Optional on AAMVA 01, Magnetic and Compact barcodes.
   *
   * Color of cardholder's eyes. (ANSI D-20 codes)
   * Code   Description
   * BLK    Black
   * BLU    Blue
   * BRO    Brown
   * GRY    Gray
   * GRN    Green
   * HAZ    Hazel
   * MAR    Maroon
   * PNK    Pink
   * DIC    Dichromatic
   * UNK    Unknown
   */
  eyeColor?: string;

  /**
   * Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
   * Optional on Compact barcodes.
   * A code that indicates whether a field has been truncated (T), has not been
   * truncated (N), or – unknown whether truncated (U).
   */
  familyNameTruncation?: string;

  /**
   * Mandatory on AAMVA versions 02 and 03.
   *
   * Federally established codes for vehicle categories, endorsements, and restrictions
   * that are generally applicable to commercial motor vehicles. If the vehicle is not a
   * commercial vehicle, "NONE" is to be entered.
   */
  federalCommercialVehicleCodes?: string;

  /**
   * Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
   * Optional on Compact barcodes.
   *
   * A code that indicates whether a field has been truncated (T), has not been
   * truncated (N), or – unknown whether truncated (U).
   */
  firstNameTruncation?: string;

  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   * Optional on Compact barcodes.
   *
   * Full address of the individual holding the Driver's License or ID.
   *
   * The full address field contains up to four portions, separated with the "," delimiter:
   * Street Address (required)
   * , (required if other address portions follow, otherwise optional)
   * City (optional)
   * , (required if other address portions follow, otherwise optional)
   * Jurisdiction Code (optional)
   * , (required if other address portions follow, otherwise optional)
   * ZIP - Postal Code (optional)
   */
  fullAddress?: string;

  /**
   * Optional on all AAMVA, Magnetic and Compact barcodes.
   *
   * Bald, black, blonde, brown, gray, red/auburn, sandy, white, unknown. If the issuing
   * jurisdiction wishes to abbreviate colors, the three-character codes provided in ANSI D20 must be
   * used.
   *
   * Code   Description
   * BAL    Bald
   * BLK    Black
   * BLN    Blond
   * BRO    Brown
   * GRY    Grey
   * RED    Red/Auburn
   * SDY    Sandy
   * WHI    White
   * UNK    Unknown
   */
  hairColor?: string;

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   * Optional on AAMVA 01 and Magnetic barcodes.
   *
   * Height of cardholder, either in Inches or in Centimeters.
   *
   * Inches (in): number of inches followed by " in"
   * example: 6'1'' = "73 in"
   *
   * Centimeters (cm): number of centimeters followed by " cm"
   * example: 181 centimeters = "181 cm"
   */
  height?: string;

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   * Optional on AAMVA 01 and Magnetic barcodes.
   *
   * Height of cardholder in Inches.
   * Example: 5'9'' = "69".
   *
   */
  heightIn?: string;

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 Compact barcodes.
   * Optional on AAMVA 01 and Magnetic barcodes.
   *
   * Height of cardholder in Centimeters.
   * Example: 180 Centimeters = "180".
   */
  heightCm?: string;

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * This number uniquely identifies the issuing jurisdiction and can
   * be obtained by contacting the ISO Issuing Authority (AAMVA)
   */
  issuerIdentificationNumber?: string;

  /**
   * Optional on all AAMVA barcodes.
   * Mandatory on Compact barcodes.
   *
   * Jurisdictions may define a subfile to contain jurisdiction-specific information.
   * These subfiles are designated with the first character of “Z” and the second
   * character is the first letter of the jurisdiction's name. For example, "ZC" would
   * be the designator for a California or Colorado jurisdiction-defined subfile, "ZQ"
   * would be the designator for a Quebec jurisdiction-defined subfile. In the case of
   * a jurisdiction-defined subfile that has a first letter that could be more than
   * one jurisdiction (e.g. California, Colorado, Connecticut) then other data, like
   * the IIN or address, must be examined to determine the jurisdiction.
   *
   */
  issuingJurisdiction?: string;

  /**
   * Optional on all AAMVA and Magnetic barcodes.
   *
   * Name of issuing jurisdiction, for example: Alabama, Alaska ...
   */
  issuingJurisdictionName?: string;

  /**
   * Mandatory on all AAMVA barcodes.
   * Optional on Magnetic barcodes.
   *
   * Jurisdiction-specific codes that represent additional privileges
   * granted to the cardholder beyond the vehicle class (such as transportation of
   * passengers, hazardous materials, operation of motorcycles, etc.).
   */
  jurisdictionEndorsementCodes?: string;

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Text that explains the jurisdiction-specific code(s) that indicates additional
   * driving privileges granted to the cardholder beyond the vehicle class.
   */
  jurisdictionEndorsmentCodeDescription?: string;

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Text describing the jurisdiction-specific restriction code(s) that curtail driving privileges.
   */
  jurisdictionRestrictionCodeDescription?: string;

  /**
   * Mandatory on all AAMVA barcodes.
   * Optional on Magnetic barcodes.
   *
   * Jurisdiction-specific codes that represent additional privileges
   * granted to the cardholder beyond the vehicle class (such as transportation of
   * passengers, hazardous materials, operation of motorcycles, etc.).
   */
  jurisdictionRestrictionCodes?: string;

  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   *
   * Jurisdiction-specific vehicle class / group code, designating the type
   * of vehicle the cardholder has privilege to drive.
   */
  jurisdictionVehicleClass?: string;

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Text that explains the jurisdiction-specific code(s) for classifications
   * of vehicles cardholder is authorized to drive.
   */
  jurisdictionVehicleClassificationDescription?: string;

  /**
   * Mandatory on all AAMVA and Compact barcodes.
   * Optional on Magnetic barcodes.
   *
   * Jurisdiction Version Number: This is a decimal value between 0 and 99 that
   * specifies the jurisdiction version level of the PDF417 barcode format.
   * Notwithstanding iterations of this standard, jurisdictions implement incremental
   * changes to their barcodes, including new jurisdiction-specific data, compression
   * algorithms for digitized images, digital signatures, or new truncation
   * conventions used for names and addresses. Each change to the barcode format
   * within each AAMVA version (above) must be noted, beginning with Jurisdiction
   * Version 00.
   */
  jurisdictionVersionNumber?: string;

  /**
   * Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * DHS required field that indicates that the cardholder has temporary lawful status = "1".
   */
  limitedDurationDocument?: string;

  /**
   * Optional on AAMVA version 01.
   *
   * Medical Indicator/Codes.
   * STATE SPECIFIC. Freeform, Standard "TBD"
   */
  medicalIndicator?: string;

  /**
   * Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
   *
   * A code that indicates whether a field has been truncated (T), has not been
   * truncated (N), or – unknown whether truncated (U).
   */
  middleNameTruncation?: string;

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * PREFIX to Driver Name. Freeform as defined by issuing jurisdiction.
   */
  namePrefix?: string;

  /**
   * Mandatory on AAMVA 02 barcodes.
   * Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.
   *
   * Name Suffix (If jurisdiction participates in systems requiring name suffix (PDPS, CDLIS, etc.),
   * the suffix must be collected and displayed on the DL/ID and in the MRT).
   * - JR (Junior)
   * - SR (Senior)
   * - 1ST or I (First)
   * - 2ND or II (Second)
   * - 3RD or III (Third)
   * - 4TH or IV (Fourth)
   * - 5TH or V (Fifth)
   * - 6TH or VI (Sixth)
   * - 7TH or VII (Seventh)
   * - 8TH or VIII (Eighth)
   * - 9TH or IX (Ninth)
   */
  nameSuffix?: string;

  /**
   * Optional on AAMVA version 01.
   *
   * Non-Resident Indicator. "Y". Used by some jurisdictions to indicate holder of the document is a non-resident.
   */
  nonResident?: string;

  /**
   * Optional on AAMVA version 01.
   *
   * Number of duplicate cards issued for a license or ID if any.
   */
  numberOfDuplicates?: string;

  /**
   * Optional on AAMVA 01, 06, 07, 08 barcodes.
   *
   * Field that indicates that the cardholder is an organ donor = "1".
   */
  organDonor?: string;

  /**
   * Optional on AAMVA version 01 barcodes.
   *
   * Driver Permit Expiration Date. MMDDCCYY format. Date permit expires.
   */
  permitExpirationDate?: string;

  /**
   * Optional on AAMVA version 01 barcodes..
   *
   * Type of permit.
   */
  permitIdentifier?: string;

  /**
   * Optional on AAMVA version 01 barcodes..
   *
   * Driver Permit Issue Date. MMDDCCYY format. Date permit was issued.
   */
  permitIssueDate?: string;

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Country and municipality and/or state/province.
   */
  placeOfBirth?: string;

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Codes for race or ethnicity of the cardholder, as defined in ANSI D20.
   *
   * Race:
   * Code   Description
   * AI     Alaskan or American Indian (Having Origins in Any of The Original Peoples of
   * North America, and Maintaining Cultural Identification Through Tribal
   * Affiliation of Community Recognition)
   * AP     Asian or Pacific Islander (Having Origins in Any of the Original Peoples of
   * the Far East, Southeast Asia, or Pacific Islands. This Includes China, India,
   * Japan, Korea, the Philippines Islands, and Samoa)
   * BK     Black (Having Origins in Any of the Black Racial Groups of Africa)
   * W      White (Having Origins in Any of The Original Peoples of Europe, North Africa,
   * or the Middle East)
   *
   * Ethnicity:
   * Code   Description
   * H      Hispanic Origin (A Person of Mexican, Puerto Rican, Cuban, Central or South
   * American or Other Spanish Culture or Origin, Regardless of Race)
   * O      Not of Hispanic Origin (Any Person Other Than Hispanic)
   * U      Unknown
   */
  raceEthnicity?: string;

  /**
   * Optional on AAMVA version 01.
   *
   * Driver Residence City
   */
  residenceCity?: string;

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * Full residence address of the individual holding the Driver's License or ID.
   * The full address field contains up to four portions, separated with the "," delimiter:
   * Residence Street Address (required)
   * , (required if other address portions follow, otherwise optional)
   * Residence City (optional)
   * , (required if other address portions follow, otherwise optional)
   * Residence Jurisdiction Code (optional)
   * , (required if other address portions follow, otherwise optional)
   * Residence ZIP - Residence Postal Code (optional)
   */
  residenceFullAddress?: string;

  /**
   * Optional on AAMVA version 01.
   *
   * Driver Residence Jurisdiction Code.
   */
  residenceJurisdictionCode?: string;

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * Driver Residence Postal Code.
   */
  residencePostalCode?: string;

  /**
   * Optional on AAMVA version 01.
   *
   * Driver Residence Street Address 1.
   */
  residenceStreetAddress?: string;

  /**
   * Optional on AAMVA version 01.
   *
   * Driver Residence Street Address 2.
   */
  residenceStreetAddress2?: string;

  /**
   * Optional on Magnetic barcodes.
   *
   * Security version being used.
   */
  securityVersion?: string;

  /**
   * Mandatory on all AAMVA, Magnetic barcodes.
   * Optional on Compact barcodes.
   *
   * Gender of the cardholder. 1 = male, 2 = female.
   */
  sex?: string;

  /**
   * Optional on AAMVA version 01.
   *
   * The number assigned to the individual by the Social Security Administration.
   */
  socialSecurityNumber?: string;

  /**
   * Optional on all AAMVA barcodes.
   *
   * Standard endorsement code(s) for cardholder. See codes in D20. This data element is a
   * placeholder for future efforts to standardize endorsement codes.
   *
   * Code   Description
   * H      Hazardous Material - This endorsement is required for the operation of any vehicle
   * transporting hazardous materials requiring placarding, as defined by U.S.
   * Department of Transportation regulations.
   * L      Motorcycles – Including Mopeds/Motorized Bicycles.
   *
   * N      Tank - This endorsement is required for the operation of any vehicle transporting,
   * as its primary cargo, any liquid or gaseous material within a tank attached to the vehicle.
   *
   * O      Other Jurisdiction Specific Endorsement(s) - This code indicates one or more
   * additional jurisdiction assigned endorsements.
   *
   * P      Passenger - This endorsement is required for the operation of any vehicle used for
   * transportation of sixteen or more occupants, including the driver.
   *
   * S      School Bus - This endorsement is required for the operation of a school bus. School bus means a
   * CMV used to transport pre-primary, primary, or secondary school students from home to school,
   * from school to home, or to and from school sponsored events. School bus does not include a
   * bus used as common carrier (49 CRF 383.5).
   *
   * T      Doubles/Triples - This endorsement is required for the operation of any vehicle that would be
   * referred to as a double or triple.
   *
   * X      Combined Tank/HAZ-MAT - This endorsement may be issued to any driver who qualifies for
   * both the N and H endorsements.
   */
  standardEndorsementCode?: string;

  /**
   * Optional on all AAMVA barcodes.
   *
   * Standard restriction code(s) for cardholder. See codes in D20. This data element is a placeholder
   * for future efforts to standardize restriction codes.
   *
   * Code   Description
   * B      Corrective Lenses
   * C      Mechanical Devices (Special Brakes, Hand Controls, or Other Adaptive Devices)
   * D      Prosthetic Aid
   * E      Automatic Transmission
   * F      Outside Mirror
   * G      Limit to Daylight Only
   * H      Limit to Employment
   * I      Limited Other
   * J      Other
   * K      CDL Intrastate Only
   * L      Vehicles without air brakes
   * M      Except Class A bus
   * N      Except Class A and Class B bus
   * O      Except Tractor-Trailer
   * V      Medical Variance Documentation Required
   * W      Farm Waiver
   */
  standardRestrictionCode?: string;

  /**
   * Optional on all AAMVA barcodes.
   * Mandatory on Compact barcodes.
   *
   * Standard vehicle classification code(s) for cardholder. This data element is a
   * placeholder for future efforts to standardize vehicle classifications.
   */
  standardVehicleClassification?: string;

  /**
   * Mandatory on all driver's licenses.
   *
   * AAMVA Version Number: This is a decimal value between 0 and 99 that
   * specifies the version level of the PDF417 bar code format. Version "0" and "00"
   * is reserved for bar codes printed to the specification of the American Association
   * of Motor Vehicle Administrators (AAMVA) prior to the adoption of the AAMVA DL/ID-2000
   * standard.
   *
   * - All barcodes compliant with AAMVA DL/ID-2000 standard shall be designated Version "01."
   * - All barcodes compliant with AAMVA Card Design Specification version 1.0, dated 09-2003
   * shall be designated Version "02."
   * - All barcodes compliant with AAMVA Card Design Specification version 2.0, dated 03-2005
   * shall be designated Version "03."
   * - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2009
   * shall be designated Version "04."
   * - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2010
   * shall be designated Version "05."
   * - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 07-2011
   * shall be designated Version "06".
   * - All barcodes compliant with AAMVA Card Design Standard version 1.0, dated 06-2012
   * shall be designated Version "07".
   * - All barcodes compliant with this current AAMVA standard shall be designated "08".
   *
   * Should a need arise requiring major revision to the format, this field provides the
   * means to accommodate additional revision.
   *
   * If the document type is not "AAMVA", this field defines the version number of the
   * given document type's standard.
   */
  standardVersionNumber?: string;

  /**
   * Optional on AAMVA 05, 06, 07, 08 barcodes.
   * Date on which the cardholder turns 18 years old. (MMDDCCYY format)
   */
  under18?: string;

  /**
   * Optional on AAMVA 05, 06, 07, 08 barcodes.
   *
   * Date on which the cardholder turns 19 years old. (MMDDCCYY format)
   */
  under19?: string;

  /**
   * Optional on AAMVA 05, 06, 07, 08 barcodes.
   *
   * Date on which the cardholder turns 21 years old. (MMDDCCYY format)
   */
  under21?: string;

  /**
   * Optional on AAMVA version 01.
   *
   *  A number or alphanumeric string used by some jurisdictions to identify a "customer" across multiple data bases.
   */
  uniqueCustomerId?: string;

  /**
   * Optional on AAMVA 07, 08 barcodes.
   *
   * Field that indicates that the cardholder is a veteran = "1"
   */
  veteran?: string;

  /**
   * Mandatory on AAMVA 02 barcodes.
   * Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.
   *
   * Cardholder weight in kilograms Example: 84 kg = "084"
   */
  weightKilograms?: string;

  /**
   * Mandatory on AAMVA 02 barcodes.
   * Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.
   *
   * Cardholder weight in pounds Example: 185 lb = "185"
   */
  weightPounds?: string;

  /**
   * Mandatory on AAMVA 02 barcodes.
   * Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.
   *
   * Indicates the approximate weight range of the cardholder:
   * 0 = up to 31 kg (up to 70 lbs)
   * 1 = 32 – 45 kg (71 – 100 lbs)
   * 2 = 46 - 59 kg (101 – 130 lbs)
   * 3 = 60 - 70 kg (131 – 160 lbs)
   * 4 = 71 - 86 kg (161 – 190 lbs)
   * 5 = 87 - 100 kg (191 – 220 lbs)
   * 6 = 101 - 113 kg (221 – 250 lbs)
   * 7 = 114 - 127 kg (251 – 280 lbs)
   * 8 = 128 – 145 kg (281 – 320 lbs)
   * 9 = 146+ kg (321+ lbs)
   */
  weightRange?: string;

  /**
   * SubField Designator extracted from barcode, to support proper document classification based on the standard.
   *
   * Subfield designator is a 2-character code that specifies the type of document, typically DL or ID.
   *
   * It is located immediately after the IIN and the variable metadata structure in the PDF417 barcode data structure.
   *
   *
   *  For example: ANSI 636010090002DL00410267ZF03080067DLDAQS1234567812300000000000000 ^^ |           | |           +-- SubField Designator (DL, ID, EN, etc.) +----- IIN (636010)
   */
  subfieldDesignator?: string;

  /**
   *
   * @param nativeBarcodeExtendedElements - specifies the extended barcode elements obtained from the native SDK.
   */
  constructor(nativeBarcodeExtendedElements: any) {
    this.addressCity = nativeBarcodeExtendedElements.addressCity;
    this.addressJurisdictionCode =
      nativeBarcodeExtendedElements.addressJurisdictionCode;
    this.addressPostalCode = nativeBarcodeExtendedElements.addressPostalCode;
    this.addressStreet = nativeBarcodeExtendedElements.addressStreet;
    this.addressStreet2 = nativeBarcodeExtendedElements.addressStreet2;
    this.akaDateOfBirth = nativeBarcodeExtendedElements.akaDateOfBirth;
    this.akaFamilyName = nativeBarcodeExtendedElements.akaFamilyName;
    this.akaFullName = nativeBarcodeExtendedElements.akaFullName;
    this.akaGivenName = nativeBarcodeExtendedElements.akaGivenName;
    this.akaMiddleName = nativeBarcodeExtendedElements.akaMiddleName;
    this.akaPrefixName = nativeBarcodeExtendedElements.akaPrefixName;
    this.akaSocialSecurityNumber =
      nativeBarcodeExtendedElements.akaSocialSecurityNumber;
    this.akaSuffixName = nativeBarcodeExtendedElements.akaSuffixName;
    this.auditInformation = nativeBarcodeExtendedElements.auditInformation;
    this.cardRevisionDate = nativeBarcodeExtendedElements.cardRevisionDate;
    this.complianceType = nativeBarcodeExtendedElements.complianceType;
    this.countryIdentification =
      nativeBarcodeExtendedElements.countryIdentification;
    this.customerFamilyName = nativeBarcodeExtendedElements.customerFamilyName;
    this.customerIdNumber = nativeBarcodeExtendedElements.customerIdNumber;
    this.customerFirstName = nativeBarcodeExtendedElements.customerFirstName;
    this.customerFullName = nativeBarcodeExtendedElements.customerFullName;
    this.customerMiddleName = nativeBarcodeExtendedElements.customerMiddleName;
    this.dataDiscriminator = nativeBarcodeExtendedElements.dataDiscriminator;
    this.dateOfBirth = nativeBarcodeExtendedElements.dateOfBirth;
    this.documentDiscriminator =
      nativeBarcodeExtendedElements.documentDiscriminator;
    this.documentExpirationDate =
      nativeBarcodeExtendedElements.documentExpirationDate;
    this.documentExpirationMonth =
      nativeBarcodeExtendedElements.documentExpirationMonth;
    this.documentIssueDate = nativeBarcodeExtendedElements.documentIssueDate;
    this.documentNonexpiring =
      nativeBarcodeExtendedElements.documentNonexpiring;
    this.documentType = nativeBarcodeExtendedElements.documentType;
    this.eyeColor = nativeBarcodeExtendedElements.eyeColor;
    this.familyNameTruncation =
      nativeBarcodeExtendedElements.familyNameTruncation;
    this.federalCommercialVehicleCodes =
      nativeBarcodeExtendedElements.federalCommercialVehicleCodes;
    this.firstNameTruncation =
      nativeBarcodeExtendedElements.firstNameTruncation;
    this.fullAddress = nativeBarcodeExtendedElements.fullAddress;
    this.hairColor = nativeBarcodeExtendedElements.hairColor;
    this.height = nativeBarcodeExtendedElements.height;
    this.heightIn = nativeBarcodeExtendedElements.heightIn;
    this.heightCm = nativeBarcodeExtendedElements.heightCm;
    this.issuerIdentificationNumber =
      nativeBarcodeExtendedElements.issuerIdentificationNumber;
    this.issuingJurisdiction =
      nativeBarcodeExtendedElements.issuingJurisdiction;
    this.issuingJurisdictionName =
      nativeBarcodeExtendedElements.issuingJurisdictionName;
    this.jurisdictionEndorsementCodes =
      nativeBarcodeExtendedElements.jurisdictionEndorsementCodes;
    this.jurisdictionEndorsmentCodeDescription =
      nativeBarcodeExtendedElements.jurisdictionEndorsmentCodeDescription;
    this.jurisdictionRestrictionCodeDescription =
      nativeBarcodeExtendedElements.jurisdictionRestrictionCodeDescription;
    this.jurisdictionRestrictionCodes =
      nativeBarcodeExtendedElements.jurisdictionRestrictionCodes;
    this.jurisdictionVehicleClass =
      nativeBarcodeExtendedElements.jurisdictionVehicleClass;
    this.jurisdictionVehicleClassificationDescription =
      nativeBarcodeExtendedElements.jurisdictionVehicleClassificationDescription;
    this.jurisdictionVersionNumber =
      nativeBarcodeExtendedElements.jurisdictionVersionNumber;
    this.limitedDurationDocument =
      nativeBarcodeExtendedElements.limitedDurationDocument;
    this.medicalIndicator = nativeBarcodeExtendedElements.medicalIndicator;
    this.middleNameTruncation =
      nativeBarcodeExtendedElements.middleNameTruncation;
    this.namePrefix = nativeBarcodeExtendedElements.namePrefix;
    this.nameSuffix = nativeBarcodeExtendedElements.nameSuffix;
    this.nonResident = nativeBarcodeExtendedElements.nonResident;
    this.numberOfDuplicates = nativeBarcodeExtendedElements.numberOfDuplicates;
    this.organDonor = nativeBarcodeExtendedElements.organDonor;
    this.permitExpirationDate =
      nativeBarcodeExtendedElements.permitExpirationDate;
    this.permitIdentifier = nativeBarcodeExtendedElements.permitIdentifier;
    this.permitIssueDate = nativeBarcodeExtendedElements.permitIssueDate;
    this.placeOfBirth = nativeBarcodeExtendedElements.placeOfBirth;
    this.raceEthnicity = nativeBarcodeExtendedElements.raceEthnicity;
    this.residenceCity = nativeBarcodeExtendedElements.residenceCity;
    this.residenceFullAddress =
      nativeBarcodeExtendedElements.residenceFullAddress;
    this.residenceJurisdictionCode =
      nativeBarcodeExtendedElements.residenceJurisdictionCode;
    this.residencePostalCode =
      nativeBarcodeExtendedElements.residencePostalCode;
    this.residenceStreetAddress =
      nativeBarcodeExtendedElements.residenceStreetAddress;
    this.residenceStreetAddress2 =
      nativeBarcodeExtendedElements.residenceStreetAddress2;
    this.securityVersion = nativeBarcodeExtendedElements.securityVersion;
    this.sex = nativeBarcodeExtendedElements.sex;
    this.socialSecurityNumber =
      nativeBarcodeExtendedElements.socialSecurityNumber;
    this.standardEndorsementCode =
      nativeBarcodeExtendedElements.standardEndorsementCode;
    this.standardRestrictionCode =
      nativeBarcodeExtendedElements.standardRestrictionCode;
    this.standardVehicleClassification =
      nativeBarcodeExtendedElements.standardVehicleClassification;
    this.standardVersionNumber =
      nativeBarcodeExtendedElements.standardVersionNumber;
    this.under18 = nativeBarcodeExtendedElements.under18;
    this.under19 = nativeBarcodeExtendedElements.under19;
    this.under21 = nativeBarcodeExtendedElements.under21;
    this.uniqueCustomerId = nativeBarcodeExtendedElements.uniqueCustomerId;
    this.veteran = nativeBarcodeExtendedElements.veteran;
    this.weightKilograms = nativeBarcodeExtendedElements.weightKilograms;
    this.weightPounds = nativeBarcodeExtendedElements.weightPounds;
    this.weightRange = nativeBarcodeExtendedElements.weightRange;
    this.subfieldDesignator = nativeBarcodeExtendedElements.subfieldDesignator;
  }
}

/**
 * Represents the mode of document scanning.
 *
 * This enum class defines whether the scanning process is limited to a single
 * side of the document or includes multiple sides, automatically identifying how many sides need to be scanned.
 */
export enum ScanningMode {
  /**
   * Specifies the scanning process to be for single side only.
   *
   */
  Single = 0,

  /**
   * The default `ScanningMode`.
   *
   * Automatically determines the number of sides to scan.
   */
  Automatic = 1,
}

/**
 * Represents the type of the alphabet used in the document.
 *
 */
export enum AlphabetType {
  /**
   * The Latin alphabet type
   *
   */
  Latin = "latin",

  /**
   * The Arabic alphabet type
   *
   */
  Arabic = "arabic",

  /**
   * The Cyrillic alphabet type
   *
   */
  Cyrillic = "cyrillic",

  /**
   * The Greek alphabet type
   *
   */
  Greek = "greek",
}

/**
 * Represents the different levels of detection sensitivity.
 *
 * This enum class is used to configure detection thresholds and enable or
 * disable detection functionality.
 *
 * The levels range from turning detection
 * off completely to setting various levels of sensitivity (`Low`, `Mid`, `High`).
 */
export enum DetectionLevel {
  /**
   * Disables the `DetectionLevel`
   *
   */
  Off = 0,

  /**
   * Sets the `DetectionLevel` to be less sensitive.
   *
   */
  Low = 1,

  /**
   * The default `DetectionLevel` sensitivity.
   *
   */
  Mid = 2,

  /**
   * Sets the `DetectionLevel` to be highly sensitive.
   *
   */
  High = 3,
}

/**
 * Represents level of anonymization performed on the scanning result.
 *
 */
export enum AnonymizationMode {
  /**
   * Anonymization will not be performed.
   *
   */
  None = "none",

  /**
   * Full document image is anonymized with black boxes covering sensitive data.
   *
   */
  ImageOnly = "imageOnly",

  /**
   * Result fields containing sensitive data are removed from result.
   *
   */
  ResultFieldsOnly = "resultFieldsOnly",

  /**
   * This mode is combination of `imageOnly` and `resultFieldsOnly` modes.
   *
   */
  FullResult = "fullResult",
}

/**
 * Represents possible recognition modes.
 *
 */
export const enum RecognitionMode {
  /**
   * No recognition performed.
   *
   */
  None = "none",

  /**
   * Recognition of mrz document (does not include visa and passport).
   *
   */
  MrzId = "mrzId",

  /**
   * Recognition of visa mrz.
   *
   */
  MrzVisa = "mrzVisa",

  /**
   * Recognition of passport mrz.
   *
   */

  MrzPassport = "mrzPassport",

  /*
   * Recognition of documents that have face photo on the front.
   *
   */
  PhotoId = "photoId",

  /**
   * Detailed document recognition.
   *
   */
  FullRecognition = "fullRecognition",

  /**
   * Recognition of barcode document.
   *
   */
  BarcodeId = "barcodeId",
}

/**
 * Define document side where the document field is located.
 *
 */
export enum DocumentSide {
  /**
   * The field is located on the front side of the document
   *
   */
  Front = 0,

  /**
   * The field is located on the back side of the document
   *
   */
  Back = 1,
}

/**
 * Represents the type of scanned barcode
 *
 */
export enum BarcodeType {
  /**
   * No barcode was scanned
   *
   */
  None = 0,

  /**
   * QR code was scanned
   *
   */
  QrCode = 1,

  /**
   * Data Matrix 2D barcode was scanned
   *
   */
  DataMatrix = 2,

  /**
   * UPC E barcode was scanned
   *
   */
  Upce = 3,

  /**
   * UPC A barcode was scanned
   *
   */
  Upca = 4,

  /**
   * EAN 8 barcode was scanned
   *
   */
  Ean8 = 5,

  /**
   * EAN 13 barcode was scanned
   *
   */
  Ean13 = 6,

  /**
   * Code 128 barcode was scanned
   *
   */
  Code128 = 7,

  /**
   * Code 39 barcode was scanned
   *
   */
  Code39 = 8,

  /**
   * ITF barcode was scanned
   *
   */
  Itf = 9,

  /**
   * Aztec 2D barcode was scanned
   *
   */
  Aztec = 10,

  /**
   * PDF417 2D barcode was scanned
   *
   */
  Pdf417 = 11,
}

/**
 * Represents the document type found on the Machine Readable Zone
 *
 */
export enum MRZDocumentType {
  /**
   * Document type was not identified.
   *
   */
  Unknown = 0,

  /**
   * Identity card
   *
   */
  IdentityCard = 1,

  /**
   * Passport
   *
   */
  Passport = 2,

  /**
   * VISA
   *
   */
  Visa = 3,

  /**
   * Green card
   *
   */
  GreenCard = 4,

  /**
   * IIM13P Pass
   *
   */
  MysPassIMM13P = 5,

  /**
   * Driver license
   *
   */
  DriverLicense = 6,

  /**
   * Internal travel document
   *
   */
  InternalTravelDocument = 7,

  /**
   * Border crossing card
   *
   */
  BorderCrossingCard = 8,
}

/**
 * Represents the side of the document being scanned.
 *
 */
enum ScanningSide {
  /**
   * The first side of the scanned document
   *
   */
  First = 0,

  /**
   * The second side of the scanned document
   *
   */
  Second = 1,
}

/**
 * Represents the type of the field used in data match.
 *
 */
export enum DataMatchField {
  /**
   * The date of birth field.
   *
   */
  DateOfBirth = 0,

  /**
   * The date of expiry field.
   *
   */
  DateOfExpiry = 1,

  /**
   * The document number field.
   *
   */
  DocumentNumber = 2,

  /**
   * The document additional number field.
   *
   */
  DocumentAdditionalNumber = 3,

  /**
   * The document optional additional number field.
   *
   */
  DocumentOptionalAdditionalNumber = 4,

  /**
   * The personal ID number field.
   *
   */

  PersonalIdNumber = 5,
}

/**
 * Represents the state of the data match.
 *
 */
export enum DataMatchState {
  /**
   * Data matching has not been performed.
   *
   */
  NotPerformed = 0,

  /**
   * Data does not match.
   *
   */
  Failed = 1,

  /**
   * Data does match.
   *
   */
  Success = 2,
}

/**
 * Document country.
 *
 */
export enum Country {
  None = "none",

  Albania = "albania",

  Algeria = "algeria",

  Argentina = "argentina",

  Australia = "australia",

  Austria = "austria",

  Azerbaijan = "azerbaijan",

  Bahrain = "bahrain",

  Bangladesh = "bangladesh",

  Belgium = "belgium",

  BosniaAndHerzegovina = "bosniaAndHerzegovina",

  Brunei = "brunei",

  Bulgaria = "bulgaria",

  Bambodia = "bambodia",

  Canada = "canada",

  Chile = "chile",

  Colombia = "colombia",

  CostaRica = "costaRica",

  Croatia = "croatia",

  Cyprus = "cyprus",

  Czechia = "czechia",

  Denmark = "denmark",

  DominicanRepublic = "dominicanRepublic",

  Egypt = "egypt",

  Estonia = "estonia",

  Finland = "finland",

  France = "france",

  Georgia = "georgia",

  Germany = "germany",

  Ghana = "ghana",

  Greece = "greece",

  Guatemala = "guatemala",

  HongKong = "hongKong",

  Hungary = "hungary",

  India = "india",

  Indonesia = "indonesia",

  Ireland = "ireland",

  Israel = "israel",

  Italy = "italy",

  Jordan = "jordan",

  Kazakhstan = "kazakhstan",

  Kenya = "kenya",

  Kosovo = "kosovo",

  Kuwait = "kuwait",

  Latvia = "latvia",

  Lithuania = "lithuania",

  Malaysia = "malaysia",

  Maldives = "maldives",

  Malta = "malta",

  Mauritius = "mauritius",

  Mexico = "mexico",

  Morocco = "morocco",

  Netherlands = "netherlands",

  NewZealand = "newZealand",

  Nigeria = "nigeria",

  Pakistan = "pakistan",

  Panama = "panama",

  Paraguay = "paraguay",

  Philippines = "philippines",

  Poland = "poland",

  Portugal = "portugal",

  PuertoRico = "puertoRico",

  Qatar = "qatar",

  Romania = "romania",

  Russia = "russia",

  SaudiArabia = "saudiArabia",

  Serbia = "serbia",

  Singapore = "singapore",

  Slovakia = "slovakia",

  Slovenia = "slovenia",

  SouthAfrica = "southAfrica",

  Spain = "spain",

  Sweden = "sweden",

  Switzerland = "switzerland",

  Taiwan = "taiwan",

  Thailand = "thailand",

  Tunisia = "tunisia",

  Turkey = "turkey",

  UAE = "uae",

  Ganda = "gganda",

  UK = "uk",

  Ukraine = "ukraine",

  USA = "usa",

  Vietnam = "vietnam",

  Brazil = "brazil",

  Norway = "norway",

  Oman = "oman",

  Ecuador = "ecuador",

  ElSalvador = "elSalvador",

  SriLanka = "sriLanka",

  Peru = "peru",

  Uruguay = "uruguay",

  Bahamas = "bahamas",

  Bermuda = "bermuda",

  Bolivia = "bolivia",

  China = "china",

  EuropeanUnion = "europeanUnion",

  Haiti = "haiti",

  Honduras = "honduras",

  Iceland = "iceland",

  Japan = "japan",

  Luxembourg = "luxembourg",

  Montenegro = "montenegro",

  Nicaragua = "nicaragua",

  SouthKorea = "southKorea",

  Venezuela = "venezuela",

  Afghanistan = "afghanistan",

  AlandIslands = "alandIslands",

  AmericanSamoa = "americanSamoa",

  Andorra = "andorra",

  Angola = "angola",

  Anguilla = "anguilla",

  Antartica = "antarctica",

  AntiguaAndBarbuda = "antiguaAndBarbuda",

  Armenia = "armenia",

  Aruba = "aruba",

  BailiwickOfGuernsey = "bailiwickOfGuernsey",

  BailiwickOfJersey = "bailiwickOfJersey",

  Barbados = "barbados",

  Belarus = "belarus",

  Belize = "belize",

  Benin = "benin",

  Bhutan = "bhutan",

  BonaireSaintEustatiusAndSaba = "bonaireSaintEustatiusAndSaba",

  Botswana = "botswana",

  BouvetIsland = "bouvetIsland",

  BritishIndianOceanTerritory = "britishIndianOceanTerritory",

  BurkinaFaso = "burkinaFaso",

  Burundi = "burundi",

  Cameroon = "cameroon",

  CapeVerde = "capeVerde",

  CaribbeanNetherlands = "caribbeanNetherlands",

  CaymanIslands = "caymanIslands",

  CentralAfricanRepublic = "centralAfricanRepublic",

  Chad = "chad",

  ChristmasIsland = "christmasIsland",

  CocosIslands = "cocosIslands",

  Comoros = "comoros",

  Congo = "congo",

  CookIslands = "cookIslands",

  Cuba = "cuba",

  Curacao = "curacao",

  DemocraticRepublicOfTheCongo = "democraticRepublicOfTheCongo",

  Djibouti = "djibouti",

  Dominica = "dominica",

  EastTimor = "eastTimor",

  EquatorialGuinea = "equatorialGuinea",

  Eritrea = "eritrea",

  Ethiopia = "ethiopia",

  FalklandIslands = "falklandIslands",

  FaroeIslands = "faroeIslands",

  FederatedStatesOfMicronesia = "federatedStatesOfMicronesia",

  Fiji = "fiji",

  FrenchGuiana = "frenchGuiana",

  FrenchPolynesia = "frenchPolynesia",

  FrenchSouthernTerritories = "frenchSouthernTerritories",

  Gabon = "gabon",

  Gambia = "gambia",

  Gibraltar = "gibraltar",

  Greenland = "greenland",

  Grenada = "grenada",

  Guadeloupe = "guadeloupe",

  Guam = "guam",

  Guinea = "guinea",

  GuineaBissau = "guineaBissau",

  Guyana = "guyana",

  HeardIslandAndMcdonaldIslands = "heardIslandAndMcdonaldIslands",

  Iran = "iran",

  Iraq = "iraq",

  IsleOfMan = "isleOfMan",

  IvoryCoast = "ivoryCoast",

  Jamaica = "jamaica",

  Kiribati = "kiribati",

  Kyrgyzstan = "kyrgyzstan",

  Laos = "laos",

  Lebanon = "lebanon",

  Lesotho = "lesotho",

  Liberia = "liberia",

  Libya = "libya",

  Liechtenstein = "liechtenstein",

  Macau = "macau",

  Madagascar = "madagascar",

  Malawi = "malawi",

  Mali = "mali",

  MarshallIslands = "marshallIslands",

  Martinique = "martinique",

  Mauritania = "mauritania",

  Mayotte = "mayotte",

  Moldova = "moldova",

  Monaco = "monaco",

  Mongolia = "mongolia",

  Montserrat = "montserrat",

  Mozambique = "mozambique",

  Myanmar = "myanmar",

  Namibia = "namibia",

  Nauru = "nauru",

  Nepal = "nepal",

  NewCaledonia = "newCaledonia",

  Niger = "niger",

  Niue = "niue",

  NorfolkIsland = "norfolkIsland",

  NorthernCyprus = "northernCyprus",

  NorthernMarianaIslands = "northernMarianaIslands",

  NorthKorea = "northKorea",

  NorthMacedonia = "northMacedonia",

  Palau = "palau",

  Palestine = "palestine",

  PapuaNewGuinea = "papuaNewGuinea",

  Pitcairn = "pitcairn",

  Reunion = "reunion",

  Rwanda = "rwanda",

  SaintBarthelemy = "saintBarthelemy",

  SaintHelenaAscensionAndTristianDaCunha = "saintHelenaAscensionAndTristianDaCunha",

  SaintKittsAndNevis = "saintKittsAndNevis",

  SaintLucia = "saintLucia",

  SaintMartin = "saintMartin",

  SaintPierreAndMiquelon = "saintPierreAndMiquelon",

  SaintVincentAndTheGrenadines = "saintVincentAndTheGrenadines",

  Samoa = "samoa",

  SanMarino = "sanMarino",

  SaoTomeAndPrincipe = "saoTomeAndPrincipe",

  Senegal = "senegal",

  Seychelles = "seychelles",

  SierraLeone = "sierraLeone",

  SintMaarten = "sintMaarten",

  SolomonIslands = "solomonIslands",

  Somalia = "somalia",

  SouthGeorgiaAndTheSouthSandwichIslands = "southGeorgiaAndTheSouthSandwichIslands",

  SouthSudan = "southSudan",

  Sudan = "sudan",

  Suriname = "suriname",

  SvalbardAndJanMayen = "svalbardAndJanMayen",

  Eswatini = "eswatini",

  Syria = "syria",

  Tajikistan = "tajikistan",

  Tanzania = "tanzania",

  Togo = "togo",

  Tokelau = "tokelau",

  Tonga = "tonga",

  TrinidadAndTobago = "trinidadAndTobago",

  Turkmenistan = "turkmenistan",

  TurksAndCaicosIslands = "turksAndCaicosIslands",

  Tuvalu = "tuvalu",

  UnitedStatesMinorOutlyingIslands = "unitedStatesMinorOutlyingIslands",

  Uzbekistan = "uzbekistan",

  Vanuatu = "vanuatu",

  VaticanCity = "vaticanCity",

  VirginIslandsBritish = "virginIslandsBritish",

  VirginIslandsUs = "virginIslandsUs",

  WallisAndFutuna = "wallisAndFutuna",

  WesternSahara = "westernSahara",

  Yemen = "yemen",

  Yugoslavia = "yugoslavia",

  Zambia = "zambia",

  Zimbabwe = "zimbabwe",

  SchengenArea = "schengenArea",
}
/**
 * Document region.
 */
export enum Region {
  None = "none",

  Alabama = "alabama",

  Alaska = "alaska",

  Alberta = "alberta",

  Arizona = "arizona",

  Arkansas = "arkansas",

  AustralianCapitalTerritory = "australianCapitalTerritory",

  BritishColumbia = "britishColumbia",

  California = "california",

  Colorado = "colorado",

  Connecticut = "connecticut",

  Delaware = "delaware",

  DistrictOfColumbia = "districtOfColumbia",

  Florida = "florida",

  Georgia = "georgia",

  Hawaii = "hawaii",

  Idaho = "idaho",

  Illinois = "illinois",

  Indiana = "indiana",

  Iowa = "iowa",

  Kansas = "kansas",

  Kentucky = "kentucky",

  Louisiana = "louisiana",

  Maine = "maine",

  Manitoba = "manitoba",

  Maryland = "maryland",

  Massachusetts = "massachusetts",

  Michigan = "michigan",

  Minnesota = "minnesota",

  Mississippi = "mississippi",

  Missouri = "missouri",

  Montana = "montana",

  Nebraska = "nebraska",

  Nevada = "nevada",

  NewBrunswick = "newBrunswick",

  NewHampshire = "newHampshire",

  NewJersey = "newJersey",

  NewMexico = "newMexico",

  NewSouthWales = "newSouthWales",

  NewYork = "newYork",

  NorthernTerritory = "northernTerritory",

  NorthCarolina = "northCarolina",

  NorthDakota = "northDakota",

  NovaScotia = "novaScotia",

  Ohio = "ohio",

  Oklahoma = "oklahoma",

  Ontario = "ontario",

  Oregon = "oregon",

  Pennsylvania = "pennsylvania",

  Quebec = "quebec",

  Queensland = "queensland",

  RhodeIsland = "rhodeIsland",

  Saskatchewan = "saskatchewan",

  SouthAustralia = "southAustralia",

  SouthCarolina = "southCarolina",

  SouthDakota = "southDakota",

  Tasmania = "tasmania",

  Tennessee = "tennessee",

  Texas = "texas",

  Utah = "utah",

  Vermont = "vermont",

  Victoria = "victoria",

  Virginia = "virginia",

  Washington = "washington",

  WesternAustralia = "westernAustralia",

  WestVirginia = "westVirginia",

  Wisconsin = "wisconsin",

  Wyoming = "wyoming",

  Yukon = "yukon",

  CiudadDeMexico = "ciudadDeMexico",

  Jalisco = "jalisco",

  NewfoundlandAndLabrador = "newfoundlandAndLabrador",

  NuevoLeon = "nuevoLeon",

  BajaCalifornia = "bajaCalifornia",

  Chihuahua = "chihuahua",

  Guanajuato = "guanajuato",

  Guerrero = "guerrero",

  Mexico = "mexico",

  Michoacan = "michoacan",

  NewYorkCity = "newYorkCity",

  Tamaulipas = "tamaulipas",

  Veracruz = "veracruz",

  Chiapas = "chiapas",

  Coahuila = "coahuila",

  Durago = "durango",

  GuerreroCocula = "guerreroCocula",

  GuerreroJuchitan = "guerreroJuchitan",

  GuerreroTepecoacuilco = "guerreroTepecoacuilco",

  GuerreroTlacoapa = "guerreroTlacoapa",

  Gujarat = "gujarat",

  Hidalgo = "hidalgo",

  Karnataka = "karnataka",

  Kerala = "kerala",

  KhyberPakhtunkhwa = "khyberPakhtunkhwa",

  MadhyaPradesh = "madhyaPradesh",

  Maharashtra = "maharashtra",

  Morelos = "morelos",

  Nayarit = "nayarit",

  Oaxaca = "oaxaca",

  Puebla = "puebla",

  Punjab = "punjab",

  Queretaro = "queretaro",

  SanLuisPotosi = "sanLuisPotosi",

  Sinaloa = "sinaloa",

  Sonora = "sonora",

  Tabasco = "tabasco",

  TamilNadu = "tamilNadu",

  Yucatan = "yucatan",

  Zacatecas = "zacatecas",

  Aguascalientes = "aguascalientes",

  BajaCaliforniaSur = "bajaCaliforniaSur",

  Campeche = "campeche",

  Colima = "colima",

  QuintanaRooBenitoJuarez = "quintanaRooBenitoJuarez",

  QuintanaRoo = "quintanaRoo",

  QuintanaRooSolidaridad = "quintanaRooSolidaridad",

  Tlaxcala = "tlaxcala",

  QuintanaRooCozumel = "quintanaRooCozumel",

  SanPaolo = "saoPaolo",

  RioDeJaniero = "rioDeJaneiro",

  RioGrandeDoSul = "rioGrandeDoSul",

  NorthWestTerritories = "northWestTerritories",

  Nunavut = "nunavut",

  PrinceEdwardIsland = "princeEdwardIsland",

  DistritoFederal = "distritoFederal",

  Maranhao = "maranhao",

  MatoGrosso = "matoGrosso",

  MinasGerais = "minasGerais",

  Para = "para",

  Parana = "parana",

  Pernambuco = "pernambuco",

  SantaCatarina = "santaCatarina",

  AndhraPradesh = "andhraPradesh",

  Ceara = "ceara",

  Goias = "goias",

  GuerreroAcapulcoDeJuarez = "guerreroAcapulcoDeJuarez",

  Haryana = "haryana",

  Sergipe = "sergipe",

  Alagos = "alagos",

  Bangsamoro = "bangsamoro",

  Telangana = "telangana",
}

/**
 * Document type.
 *
 */
export enum DocumentType {
  None = "none",

  ConsularId = "consularId",

  Dl = "dl",

  DlPublicServicesCard = "dlPublicServicesCard",

  EmploymentPass = "employmentPass",

  FinCard = "finCard",

  Id = "id",

  MultipurposeId = "multipurposeId",

  MyKad = "myKad",

  MyKid = "myKid",

  MyPr = "myPR",

  MyTentera = "myTentera",

  PanCard = "panCard",

  ProfessionalId = "professionalId",

  PublicServicesCard = "publicServicesCard",

  ResidencePermit = "residencePermit",

  ResidentId = "residentId",

  TemporaryResidencePermit = "temporaryResidencePermit",

  VoterId = "voterId",

  WorkPermit = "workPermit",

  IKad = "iKad",

  MilitaryId = "militaryId",

  MyKas = "myKas",

  DocialSecurityCard = "docialSecurityCard",

  HealthInsuranceCard = "healthInsuranceCard",

  Passport = "passport",

  SPass = "sPass",

  AddressCard = "addressCard",

  AlienId = "alienId",

  AlienPassport = "alienPassport",

  GreenCard = "greenCard",

  MinorsId = "minorsId",

  PostalId = "postalId",

  ProfessionalDl = "professionalDl",

  TaxId = "taxId",

  WeaponPermit = "weaponPermit",

  Visa = "visa",

  BorderCrossingCard = "borderCrossingCard",

  DriverCard = "driverCard",

  GlobalEntryCard = "globalEntryCard",

  MyPolis = "mypolis",

  NexusCard = "nexusCard",

  PassportCard = "passportCard",

  ProofOfAgeCard = "proofOfAgeCard",

  RefugeeId = "refugeeId",

  TribalId = "tribalId",

  VeteranId = "veteranId",

  CitizenshipCertificate = "citizenshipCertificate",

  MyNumberCard = "myNumberCard",

  ConsularPassport = "consularPassport",

  MinorsPassport = "minorsPassport",

  MinorsPublicServicesCard = "minorsPublicServicesCard",

  DrivingPriviligeCard = "drivingPriviligeCard",

  AsylumRequest = "asylumRequest",

  DriverQualificationCard = "driverQualificationCard",

  ProvisionalDl = "provisionalDl",

  RefugeePassport = "refugeePassport",

  SpecialId = "specialId",

  UniformedServicesId = "uniformedServicesId",

  ImmigrantVisa = "immigrantVisa",

  ConsularVoterId = "consularVoterId",

  TwicCard = "twicCard",

  ExitEntryPermit = "exitEntryPermit",

  MainlandTravelPermitTaiwan = "mainlandTravelPermitTaiwan",

  NbiClearance = "nbiClearance",

  ProofOfRegistration = "proofOfRegistration",

  TemporaryProtectionPermit = "temporaryProtectionPermit",

  AfghanCitizenCard = "afghanCitizenCard",

  EId = "eId",

  Pass = "pass",

  SisId = "sisId",

  AsicCard = "asicCard",

  BidoonCard = "bidoonCard",

  InterimHealthInsuranceCard = "interimHealthInsuranceCard",

  NonVoterId = "nonVoterId",

  ReciprocalHealthInsuranceCard = "reciprocalHealthInsuranceCard",

  VehicleRegistration = "vehicleRegistration",

  EsaadCard = "esaadCard",

  RegistrationCertificate = "registrationCertificate",

  MedicalMarijuanaId = "medicalMarijuanaId",

  NonCardTribalId = "nonCardTribalId",

  DiplomaticId = "diplomaticId",

  EmergencyPassport = "emergencyPassport",

  temporaryPassport = "temporaryPassport",

  metisFederationCard = "metisFederationCard",

  adrCertificate = "adrCertificate",
}

/**
 * Represents all possible field types that can be extracted from the document.
 *
 */
export enum FieldType {
  AdditionalAddressInformation = "additionalAddressInformation",

  AdditionalNameInformation = "additionalNameInformation",

  AdditionalOptionalAddressInformation = "additionalOptionalAddressInformation",

  AdditionalPersonalIdNumber = "additionalPersonalIdNumber",

  Address = "address",

  ClassEffectiveDate = "classEffectiveDate",

  ClassExpiryDate = "classExpiryDate",

  Conditions = "conditions",

  DateOfBirth = "dateOfBirth",

  DateOfExpiry = "dateOfExpiry",

  DateOfIssue = "dateOfIssue",

  DocumentAdditionalNumber = "documentAdditionalNumber",

  DocumentOptionalAdditionalNumber = "documentOptionalAdditionalNumber",

  DocumentNumber = "documentNumber",

  Employer = "employer",

  Endorsements = "endorsements",

  FathersName = "fathersName",

  FirstName = "firstName",

  FullName = "fullName",

  IssuingAuthority = "issuingAuthority",

  LastName = "lastName",

  LicenseType = "licenceType",

  LocalizedName = "localizedName",

  MaritalStatus = "maritalStatus",

  MothersName = "mothersName",

  Mrz = "mrz",

  Nationality = "nationality",

  PersonalIdNumber = "personalIdNumber",

  PlaceOfBirth = "placeOfBirth",

  Profession = "profession",

  Race = "race",

  Religion = "religion",

  ResidentialStatus = "residentialStatus",

  Restriction = "restrictions",

  Sex = "sex",

  VehicleClass = "vehicleClass",

  BloodType = "bloodType",

  Sponsor = "sponsor",

  VisaType = "visaType",

  DocumentSubtype = "documentSubtype",

  Remarks = "remarks",

  ResidencePermitType = "residencePermitType",

  ManufacturingYear = "manufacturingYear",

  VehicleType = "vehicleType",

  DependentDateOfBirth = "dependentDateOfBirth",

  DependentSex = "dependentSex",

  DependentDocumentNumber = "dependentDocumentNumber",

  DependentFullName = "dependentFullName",

  EligibilityCategory = "eligibilityCategory",

  SpecificDocumentValidity = "specificDocumentValidity",

  VehicleOwner = "vehicleOwner",

  nationalInsuranceNumber = "nationalInsuranceNumber",

  CountryCode = "countryCode",

  CertificateNumber = "certificateNumber",

  MunicipalityOfRegistration = "municipalityOfRegistration",

  LocalityCode = "localityCode",

  MaidenName = "maidenName",

  StateCode = "stateCode",

  DateOfEntry = "dateOfEntry",

  MunicipalityCode = "municipalityCode",

  PollingStationCode = "pollingStationCode",

  SectionCode = "sectionCode",

  RegistrationCenterCode = "registrationCenterCode",

  StateName = "stateName",
}

/** An enum indicating preffered camera position for document capturing. */
export enum PreferredCamera {
  /**
   * Use the back-facing camera
   *
   * This is the default value
   */
  Back = "back",

  /**
   * Use the front-facing camera
   *
   */
  Front = "front",
}
