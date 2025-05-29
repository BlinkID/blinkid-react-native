"use strict";

import { BlinkIdUtilities } from "./blinkIdUtilities.js";

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

  /**
   *
   * @param includeDocuments - specifies which document classes that will be explicitly accepted by this filter.
   * @param excludeDocuments - specifies which document classes that will be explicitly rejected by this filter.
   */
  constructor(includeDocuments, excludeDocuments) {
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

  /**
   * If set, only specified country will pass the filter criteria.
   * Otherwise, issuing region will not be taken into account.
   */

  /**
   * If set, only specified type will pass the filter criteria.
   * Otherwise, issuing type will not be taken into account.
   */

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
  constructor(country, region, documentType) {
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

  /**
   * Fields to overrule our class field rules.
   *
   * See {@link DetailedFieldType} for more information.
   */

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
  constructor(fields, documentFilter) {
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

  /**
   * The alphabet type.
   *
   * See {@link AlphabetType} for more information.
   */

  /**
   *
   * @param fieldType - specifies the {@link FieldType}.
   * @param alphabetType - specifies the {@link AlphabetType}.
   *
   * Both parameters are mandatory.
   */
  constructor(fieldType, alphabetType) {
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

  /**
   * Specified fields will be anonymized if filter conditions are met.
   *
   */

  /**
   * Document number anonymization settings.
   *
   */

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
  constructor(fields, documentFilter, documentNumberAnonymizationSettings) {
    this.fields = fields;
    this.documentFilter = documentFilter;
    this.documentNumberAnonymizationSettings = documentNumberAnonymizationSettings;
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

  /**
   * Defines how many digits at the end of the document number remain visible after anonymization.
   *
   */

  constructor(prefixDigitsVisible = 0, suffixDigitsVisible = 0) {
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

  /**
   * Enable scanning of visa MRZ.
   *
   */

  /**
   * Enable scanning of Passport MRZ.
   *
   */

  /**
   * Enable scanning of Photo ID.
   *
   */

  /**
   * Enable scanning of barcode IDs.
   *
   */

  /**
   * Enable full document recognition.
   *
   */

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
 * Represents possible recognition modes.
 *
 */
export let RecognitionMode = /*#__PURE__*/function (RecognitionMode) {
  /**
   * No recognition performed.
   *
   */
  RecognitionMode["None"] = "none";
  /**
   * Recognition of mrz document (does not include visa and passport).
   *
   */
  RecognitionMode["MrzId"] = "mrzId";
  /**
   * Recognition of visa mrz.
   *
   */
  RecognitionMode["MrzVisa"] = "mrzVisa";
  /**
   * Recognition of passport mrz.
   *
   */
  RecognitionMode["MrzPassport"] = "mrzPassport";
  /*
   * Recognition of documents that have face photo on the front.
   *
   */
  RecognitionMode["PhotoId"] = "photoId";
  /**
   * Detailed document recognition.
   *
   */
  RecognitionMode["FullRecognition"] = "fullRecognition";
  /**
   * Recognition of barcode document.
   *
   */
  RecognitionMode["BarcodeId"] = "barcodeId";
  return RecognitionMode;
}({});

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

  /**
   * The document region.
   *
   * See {@link Region} for more information.
   */

  /**
   * The type of the scanned document.
   *
   * See {@link DocumentType} for more information.
   */

  /**
   * Flag that indicates if the document class information is empty
   *
   */

  /**
   * The name of the country that issued the scanned document.
   *
   */

  /**
   * The ISO numeric code of the country that issued the scanned document.
   *
   */

  /**
   * The 2 letter ISO code of the country that issued the scanned document.
   *
   */

  /**
   * The 3 letter ISO code of the country that issued the scanned document.
   *
   */

  /**
   *
   * @param nativeDocumentClassInfo
   *
   */
  constructor(nativeDocumentClassInfo) {
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

  /**
   * The data match state of each field.
   *
   * See {@link DataMatchResultField} for more information.
   */

  /**
   *
   * @param nativeDataMatchResult
   */
  constructor(nativeDataMatchResult) {
    this.overallState = nativeDataMatchResult.overallState != undefined ? nativeDataMatchResult.overallState : undefined;
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

  /**
   * The state of the field.
   *
   * See {@link DataMatchState} for more information.
   */

  /**
   *
   * @param nativeDataMatchResultField
   *
   */
  constructor(nativeDataMatchResultField) {
    this.field = nativeDataMatchResultField.field;
    this.state = nativeDataMatchResultField.state;
  }
}

/**
 * Represents the type of the field used in data match.
 *
 */
export let DataMatchField = /*#__PURE__*/function (DataMatchField) {
  /**
   * The date of birth field.
   *
   */
  DataMatchField[DataMatchField["DateOfBirth"] = 0] = "DateOfBirth";
  /**
   * The date of expiry field.
   *
   */
  DataMatchField[DataMatchField["DateOfExpiry"] = 1] = "DateOfExpiry";
  /**
   * The document number field.
   *
   */
  DataMatchField[DataMatchField["DocumentNumber"] = 2] = "DocumentNumber";
  /**
   * The document additional number field.
   *
   */
  DataMatchField[DataMatchField["DocumentAdditionalNumber"] = 3] = "DocumentAdditionalNumber";
  /**
   * The document optional additional number field.
   *
   */
  DataMatchField[DataMatchField["DocumentOptionalAdditionalNumber"] = 4] = "DocumentOptionalAdditionalNumber";
  /**
   * The personal ID number field.
   *
   */
  DataMatchField[DataMatchField["PersonalIdNumber"] = 5] = "PersonalIdNumber";
  return DataMatchField;
}({});

/**
 * Represents the state of the data match.
 *
 */
export let DataMatchState = /*#__PURE__*/function (DataMatchState) {
  /**
   * Data matching has not been performed.
   *
   */
  DataMatchState[DataMatchState["NotPerformed"] = 0] = "NotPerformed";
  /**
   * Data does not match.
   *
   */
  DataMatchState[DataMatchState["Failed"] = 1] = "Failed";
  /**
   * Data does match.
   *
   */
  DataMatchState[DataMatchState["Success"] = 2] = "Success";
  return DataMatchState;
}({});

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

  /**
   * String for field in latin alphabet
   *
   */

  /**
   * String for field in arabic alphabet
   *
   */

  /**
   * String for field in cyrillic alphabet
   *
   */

  /**
   * String for field in greek alphabet
   *
   */

  /**
   * Document field location.
   *
   * See {@link Location} for more information.
   */

  /**
   * The document side where the field is located.
   *
   * See {@link Side} for more information.
   */

  /**
   *
   * @param nativeStringResult
   *
   */
  constructor(nativeStringResult) {
    this.value = nativeStringResult.value;
    this.latin = nativeStringResult.latin;
    this.cyrillic = nativeStringResult.cyrillic;
    this.arabic = nativeStringResult.arabic;
    this.greek = nativeStringResult.greek;
    this.location = nativeStringResult.location != undefined ? new Location(nativeStringResult.location) : undefined;
    this.side = nativeStringResult.side != undefined ? new Side(nativeStringResult.side) : undefined;
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

  /**
   * Y location
   *
   */

  /**
   * Rectangle width
   *
   */

  /**
   * Rectangle height.
   *
   */

  /**
   *
   * @param nativeRectangle
   *
   */
  constructor(nativeRectangle) {
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

  /**
   * Rectangle location of the result extracted from the OCR in the arabic alphabet.
   *
   */

  /**
   * Rectangle location of the result extracted from the OCR in the cyrillic alphabet.
   *
   */

  /**
   * Rectangle location of the result extracted from the OCR in the greek alphabet.
   *
   */

  /**
   *
   * @param nativeLocation
   *
   */
  constructor(nativeLocation) {
    this.latin = nativeLocation.latin != undefined ? new Rectangle(nativeLocation.latin) : undefined;
    this.arabic = nativeLocation.arabic != undefined ? new Rectangle(nativeLocation.arabic) : undefined;
    this.cyrillic = nativeLocation.cyrillic != undefined ? new Rectangle(nativeLocation.cyrillic) : undefined;
    this.greek = nativeLocation.greek != undefined ? new Rectangle(nativeLocation.greek) : undefined;
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

  /**
   * Document side of the result extracted from the OCR in the arabic alphabet.
   *
   */

  /**
   * Document side of the result extracted from the OCR in the cyrillic alphabet.
   *
   */

  /**
   * Document side of the result extracted from the OCR in the cyrillic alphabet.
   *
   */

  /**
   *
   * @param nativeSide
   *
   */
  constructor(nativeSide) {
    this.latin = nativeSide.latin;
    this.arabic = nativeSide.arabic;
    this.cyrillic = nativeSide.cyrillic;
    this.greek = nativeSide.greek;
  }
}

/**
 * Define document side where the document field is located.
 *
 */
export let DocumentSide = /*#__PURE__*/function (DocumentSide) {
  /**
   * The field was not detected.
   *
   */
  DocumentSide["None"] = "none";
  /**
   * The field is located on the front side of the document
   *
   */
  DocumentSide["Front"] = "front";
  /**
   * The field is located on the back side of the document
   *
   */
  DocumentSide["Back"] = "back";
  return DocumentSide;
}({});

/**
 * Represents the result of the date extraction.
 *
 * Contains the extracted date, along with additional date information.
 */
export class DateResult {
  /**
   * The extracted date information.
   *
   * See {@link Date} for more information.
   */

  /**
   * Original string representation of the date which has been extracted.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `string`.
   */

  /**
   * Indicates that date does not appear on the document
   * but is filled by our internal domain knowledge.
   */

  /**
   * Indicates whether date was successfully parsed.
   *
   */

  constructor(nativeDateResult) {
    this.date = nativeDateResult.date;
    this.originalString = BlinkIdUtilities.handleStringType(nativeDateResult.originalString);
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

  /**
   * Month of the year.
   *
   * The first month of the year has value 1.
   */

  /**
   * Full year.
   *
   */

  /**
   *
   * @param nativeDate
   */
  constructor(nativeDate) {
    this.day = nativeDate.day;
    this.month = nativeDate.month;
    this.year = nativeDate.year;
  }
}

/**
 * Represents detailed extracted information about the driver license.
 *
 */
export class DriverLicenseDetailedInfo {
  /**
   * The restrictions to driving privileges for the United States driver license owner.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */

  /**
   * The additional privileges granted to the US driver license owner.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */

  /**
   * The type of vehicle the driver license owner has privilege to drive.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */

  /**
   * The driver license conditions.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */

  /**
   * The additional information on vehicle class.
   *
   * See {@link VehicleClassInfo} for more information.
   */

  constructor(nativeDriverLicenseDetailedInfo) {
    this.restrictions = BlinkIdUtilities.handleStringType(nativeDriverLicenseDetailedInfo.restrictions);
    this.endorsements = BlinkIdUtilities.handleStringType(nativeDriverLicenseDetailedInfo.endorsements);
    this.vehicleClass = BlinkIdUtilities.handleStringType(nativeDriverLicenseDetailedInfo.vehicleClass);
    this.vehicleClassesInfo = nativeDriverLicenseDetailedInfo.vehicleClassesInfo != undefined ? new VehicleClassInfo(nativeDriverLicenseDetailedInfo.vehicleClassesInfo) : undefined;
  }
}

/**
 * Represents the information about the vehicle class extraction.
 *
 */
export class VehicleClassInfo {
  /**
   * The type of driver licence.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `string`.
   */

  /**
   * The type of vehicle the driver license owner has privilege to drive.
   *
   * Depending of the information source, it can either be of type {@link StringResult} or `String`.
   */

  /**
   * The date since licence is effective.
   *
   * See {@link DateResult} for more information.
   */

  /**
   * The date of expiry of licence.
   *
   * See {@link DateResult} for more information.
   */

  constructor(nativeVehicleClassInfo) {
    this.licenceType = BlinkIdUtilities.handleStringType(nativeVehicleClassInfo.licenceType);
    this.vehicleClass = BlinkIdUtilities.handleStringType(nativeVehicleClassInfo.vehicleClass);
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

  /**
   * The sex or gender of the dependent.
   *
   */

  /**
   * The document number of the dependent.
   *
   */

  /**
   * The full name of the dependent.
   *
   */

  /**
   * Checks if the dependent's information is empty.
   *
   */

  constructor(nativeDependentInfo) {
    this.dateOfBirth = nativeDependentInfo.dateOfBirth;
    this.sex = nativeDependentInfo.sex;
    this.documentNumber = nativeDependentInfo.documentNumber;
    this.fullName = nativeDependentInfo.fullName;
    this.empty = nativeDependentInfo.empty;
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

  /**
   * The data extracted from the Machine Readable Zone.
   *
   */

  /**
   * The data extracted from the barcode.
   *
   */

  /**
   * The input image in the Base64 format.
   *
   */

  /**
   * The input image containing parsable barcode in the Base64 format.
   *
   */

  /**
   * The cropped document image in the Base64 format.
   *
   */

  /**
   * The cropped face image with additional info.
   *
   */

  /**
   * The cropped signature image with additional info.
   *
   */

  /**
   *
   * @param nativeSingleSideScanningResult - specifies the single side scanning result obtained from the native SDK.
   *
   */
  constructor(nativeSingleSideScanningResult) {
    this.viz = nativeSingleSideScanningResult.viz;
    this.mrz = nativeSingleSideScanningResult.mrz;
    ;
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

  /**
   * The last name of the document owner.
   *
   */

  /**
   * The full name of the document owner.
   *
   */

  /**
   * The additional name information of the document owner.
   *
   */

  /**
   * The localized name of the document owner.
   *
   */

  /**
   * The fathers name of the document owner.
   *
   */

  /**
   * The mothers name of the document owner.
   *
   */

  /**
   * The address of the document owner.
   *
   */

  /**
   * The additional address information of the document owner.
   *
   */

  /**
   * The one more additional address information of the document owner.
   *
   */

  /**
   * The place of birth of the document owner.
   *
   */

  /**
   * The nationality of the document owner.
   *
   */

  /**
   * The race of the document owner.
   *
   */

  /**
   * The religion of the document owner.
   *
   */

  /**
   * The profession of the document owner.
   *
   */

  /**
   * The marital status of the document owner.
   *
   */

  /**
   * The residential status of the document owner.
   *
   */

  /**
   * The employer of the document owner.
   *
   */

  /**
   * The sex of the document owner.
   *
   */

  /**
   * The sponsor of the document owner.
   *
   */

  /**
   * The blood type of the document owner.
   *
   */

  /**
   * The date of birth of the document owner.
   *
   */

  /**
   * The date of issue of the document.
   *
   */

  /**
   * The date of expiry of the document.
   *
   */

  /**
   * Determines if date of expiry is permanent.
   *
   */

  /**
   * The document number.
   *
   */

  /**
   * The personal identification number.
   *
   */

  /**
   * The additional number of the document.
   *
   */

  /**
   * The one more additional number of the document.
   *
   */

  /**
   * The additional personal identification number.
   *
   */

  /**
   * The issuing authority of the document.
   *
   */

  /**
   * The visa type of the document.
   *
   */

  /**
   * The driver license detailed info.
   *
   */

  /**
   * The transcription of the document subtype.
   *
   */

  /**
   * The remarks on the residence permit.
   *
   */

  /**
   * The residence permit type.
   */

  /**
   * The manufacturing year.
   *
   */

  /**
   * The vehicle type.
   *
   */

  /**
   * The eligibility category.
   *
   */

  /**
   * The specific document validity.
   *
   */

  /**
   * The dependents info.
   *
   */

  /**
   * The vehicle owner.
   *
   */

  /**
   *
   * @param nativeVizResult
   *
   */
  constructor(nativeVizResult) {
    this.firstName = nativeVizResult.firstName;
    this.lastName = nativeVizResult.lastName;
    this.fullName = nativeVizResult.fullName;
    ;
    this.additionalNameInformation = nativeVizResult.additionalNameInformation;
    this.localizedName = nativeVizResult.localizedName;
    this.fathersName = nativeVizResult.fathersName;
    this.mothersName = nativeVizResult.mothersName;
    this.address = nativeVizResult.address;
    this.additionalAddressInformation = nativeVizResult.additionalAddressInformation;
    this.additionalOptionalAddressInformation = nativeVizResult.additionalOptionalAddressInformation;
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
    this.dateOfExpiryPermanent = nativeVizResult.dateOfExpiryPermanent;
    this.documentNumber = nativeVizResult.documentNumber;
    this.personalIdNumber = nativeVizResult.personalIdNumber;
    this.documentAdditionalNumber = nativeVizResult.documentAdditionalNumber;
    this.documentOptionalAdditionalNumber = nativeVizResult.documentOptionalAdditionalNumber;
    this.additionalPersonalIdNumber = nativeVizResult.additionalPersonalIdNumber;
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

  /**
   * Three-letter or two-letter code which indicate the issuing State. Three-letter codes are based
   * on Aplha-3 codes for entities specified in ISO 3166-1, with extensions for certain States.
   *
   * Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
   */

  /**
   * The document number.
   *
   */

  /**
   * The first optional data. Empty string if not available.
   *
   */

  /**
   * The second optional data. Empty string if not available.
   *
   */

  /**
   * The gender of the document holder.
   *
   * Gender is specified by use of the single initial.
   */

  /**
   * The nationality of the document holder represented by a three-letter or two-letter code.
   *
   * Three-letter codes are based on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain States.
   *
   * Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
   */

  /**
   * The primary indentifier.
   *
   * If there is more than one component, they are separated with space.
   */

  /**
   * The secondary identifier.
   *
   * If there is more than one component, they are separated with space.
   */

  /**
   * The full issuer name that is expanded from the three-letter or two-letter code which indicate
   * the issuing State.
   *
   */

  /**
   * The full nationality of the document holder, which is expanded from the three-letter or two-letter
   * nationality code.
   */

  /**
   * Whether the MRZ is verified.
   *
   * If the MRZ is verified, it means that all check digits are correct.
   */

  /**
   * The date of birth of the document holder.
   *
   */

  /**
   * The date of expiry of the document.
   *
   */

  /**
   * The type of the document.
   *
   */

  /**
   * The sanitized first optional data.
   *
   * Result without additional '<' characters if they exist.
   */

  /**
   * The sanitized second optional data.
   *
   * Result without additional '<' characters if they exist.
   */

  /**
   * The sanitized nationality.
   *
   * Result without additional '<' characters if they exist.
   */

  /**
   * The sanitized issuer.
   *
   * Result without additional '<' characters if they exist.
   */

  /**
   * The sanitized document code.
   *
   * Result without additional '<' characters if they exist.
   */

  /**
   * The sanitized document number.
   *
   * Result without additional '<' characters if they exist.
   */

  /**
   *
   * @param nativeMrzResult
   *
   */
  constructor(nativeMrzResult) {
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

  /**
   * The first name of the document owner.
   *
   */

  /**
   * The middle name of the document owner.
   *
   */

  /**
   * The last name of the document owner.
   *
   */

  /**
   * The full name of the document owner.
   *
   */

  /**
   * The additional name information of the document owner.
   *
   */

  /**
   * The address of the document owner.
   *
   */

  /**
   * The place of birth of the document owner.
   *
   */

  /**
   * The nationality of the document owner.
   *
   */

  /**
   * The race of the document owner.
   *
   */

  /**
   * The religion of the document owner.
   *
   */

  /**
   * The profession of the document owner.
   *
   */

  /**
   * The marital status of the document owner.
   *
   */

  /**
   * The residential status of the document owner.
   *
   */

  /**
   * The employer of the document owner.
   *
   */

  /**
   * The sex of the document owner.
   *
   */

  /**
   * The date of birth of the document owner.
   *
   */

  /**
   * The date of issue of the document.
   *
   */

  /**
   * The date of expiry of the document.
   *
   */

  /**
   * The document number.
   *
   */

  /**
   * The personal identification number.
   *
   */

  /**
   * The additional number of the document.
   *
   */

  /**
   * The issuing authority of the document.
   *
   */

  /**
   * The details about the address of the document owner.
   *
   */

  /**
   * The driver license detailed info.
   *
   */

  /**
   * Document specific extended elements that contain all barcode fields in their original form.
   *
   * Currently this is only filled for AAMVACompliant documents.
   */

  /**
   *
   * @param nativeBarcodeResult
   */
  constructor(nativeBarcodeResult) {
    this.barcodeData = nativeBarcodeResult.barcodeData;
    this.firstName = nativeBarcodeResult.firstName;
    this.middleName = nativeBarcodeResult.middleName;
    this.lastName = nativeBarcodeResult.lastName;
    this.fullName = nativeBarcodeResult.fullName;
    this.additionalNameInformation = nativeBarcodeResult.additionalNameInformation;
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
    this.documentAdditionalNumber = nativeBarcodeResult.documentAdditionalNumber;
    this.issuingAuthority = nativeBarcodeResult.issuingAuthority;
    this.addressDetailedInfo = nativeBarcodeResult.addressDetailedInfo;
    this.driverLicenseDetailedInfo = nativeBarcodeResult.driverLicenseDetailedInfo;
    this.extendedElements = nativeBarcodeResult.extendedElements;
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

  /**
   * Raw bytes of the barcode content.
   *
   */

  /**
   * String representation of the barcode content.
   *
   */

  /**
   * Whether the barcode data is uncertain, i.e. if scanned barcode was incomplete or has parts of it missing.
   *
   */

  /**
   *
   * @param nativeBarcodeData - specifies the barcode data obtained from the native SDK.
   */
  constructor(nativeBarcodeData) {
    this.barcodeType = nativeBarcodeData.barcodeType;
    this.rawData = nativeBarcodeData.rawData;
    this.stringData = nativeBarcodeData.stringData;
    this.uncertain = nativeBarcodeData.uncertain;
  }
}

/**
 * Represents the type of scanned barcode
 *
 */
export let BarcodeType = /*#__PURE__*/function (BarcodeType) {
  /**
   * No barcode was scanned
   *
   */
  BarcodeType[BarcodeType["None"] = 0] = "None";
  /**
   * QR code was scanned
   *
   */
  BarcodeType[BarcodeType["QrCode"] = 1] = "QrCode";
  /**
   * Data Matrix 2D barcode was scanned
   *
   */
  BarcodeType[BarcodeType["DataMatrix"] = 2] = "DataMatrix";
  /**
   * UPC E barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Upce"] = 3] = "Upce";
  /**
   * UPC A barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Upca"] = 4] = "Upca";
  /**
   * EAN 8 barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Ean8"] = 5] = "Ean8";
  /**
   * EAN 13 barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Ean13"] = 6] = "Ean13";
  /**
   * Code 128 barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Code128"] = 7] = "Code128";
  /**
   * Code 39 barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Code39"] = 8] = "Code39";
  /**
   * ITF barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Itf"] = 9] = "Itf";
  /**
   * Aztec 2D barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Aztec"] = 10] = "Aztec";
  /**
   * PDF417 2D barcode was scanned
   *
   */
  BarcodeType[BarcodeType["Pdf417"] = 11] = "Pdf417";
  return BarcodeType;
}({});

/**
 * Detailed information about the address.
 *
 */
export class AddressDetailedInfo {
  /**
   * he address street portion of the document owner.
   *
   */

  /**
   * The address postal code portion of the document owner.
   *
   */

  /**
   * The address city portion of the document owner.
   *
   */

  /**
   * The address jurisdiction code portion of the document owner.
   *
   */

  /**
   *
   * @param nativeAddressDetailedInfo - specificies the address detailed info obtained from the native SDK.
   *
   */
  constructor(nativeAddressDetailedInfo) {
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

  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   * On compact barcodes, use kFullAddress.
   *
   * State portion of the cardholder address.
   */

  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   * On compact barcodes, use kFullAddress.
   *
   * Postal code portion of the cardholder address in the U.S. and Canada.
   * If the trailing portion of the postal code in the U.S. is not known, zeros can be used
   * to fill the trailing set of numbers up to nine (9) digits.
   */

  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   * On compact barcodes, use kFullAddress.
   *
   * Street portion of the cardholder address.
   * The place where the registered driver of a vehicle (individual or corporation)
   * may be contacted such as a house number, street address, etc.
   */

  /**
   * Optional on all AAMVA barcodes.
   * On Compact barcodes, use kFullAddress.
   *
   * Second line of street portion of the cardholder address.
   */

  /**
   * Optional on AAMVA 01. (MMDDCCYY format)
   *
   * ALTERNATIVE DATES(S) given as date of birth.
   */

  /**
   * Optional on all AAMVA and Compact barcodes.
   * Other family name by which the cardholder is known.
   */

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

  /**
   * Optional on all AAMVA and Compact barcodes.
   *
   * Other given name by which the cardholder is known
   */

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * ALTERNATIVE MIDDLE NAME(s) or INITIALS of the individual holding the Driver License or ID.
   * Hyphenated names acceptable, spaces between names acceptable, but no other
   * use of special symbols.
   */

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * ALTERNATIVE PREFIX to Driver Name. Freeform as defined by issuing jurisdiction.
   */

  /**
   * Optional on AAMVA version 01.
   *
   * Driver "AKA" Social Security Number. FORMAT SAME AS DRIVER SOC SEC NUM. ALTERNATIVE NUMBERS(S) used as SS NUM.
   */

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

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * A string of letters and/or numbers that identifies when, where, and by whom a driver's
   * license/ID card was made. If audit information is not used on the card or the MRT, it
   * must be included in the driver record.
   */

  /**
   * Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * DHS required field that indicates date of the most recent version change or
   *  modification to the visible format of the DL/ID. (MMDDCCYY format)
   */

  /**
   * Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * DHS required field that indicates compliance: "M" = materially compliant,
   * "F" = fully compliant, and, "N" = non-compliant.
   */

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Country in which DL/ID is issued. U.S. = USA, Canada = CAN.
   */

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * Family name of the cardholder. (Family name is sometimes also called "last name" or "surname.")
   * Collect full name for record, print as many characters as possible on portrait side of DL/ID.
   */

  /**
   * Mandatory on all AAMVA and Compact barcodes.
   *
   * The number assigned or calculated by the issuing authority.
   */

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * First name of the cardholder.
   */

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

  /**
   * Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
   * Optional on AAMVA 01, 02, 03, Magnetic and Compcat barcodes.
   *
   * Middle name(s) of the cardholder. In the case of multiple middle names they
   * shall be separated by space " ".
   */

  /**
   * Optional on compact barcodes.
   *
   * Document discriminator.
   */

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * Date on which the cardholder was born. (MMDDCCYY format)
   */

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Magnetic barcodes.
   * Optional on Compact barcodes.
   *
   * Number must uniquely identify a particular document issued to that customer
   * from others that may have been issued in the past. This number may serve
   * multiple purposes of document discrimination, audit info, and/or inventory control.
   */

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * Date on which the document expires. (MMDDCCYY format)
   * If the document is non expiring then "Non expiring" is written in this field.
   */

  /**
   * Optional on Magnetic barcodes.
   *
   * Month on which the driving and identification privileges granted by the document are no longer valid.
   */

  /**
   * Mandatory on all AAMVA and Compact barcodes.
   *
   * Date on which the document was issued. (MMDDCCYY format)
   */

  /**
   * Optional on Magnetic barcodes.
   *
   * Field that indicates that the driving and identification privileges granted by the
   * document are nonexpiring = "1".
   */

  /**
   * Mandatory on all driver's licenses.
   * All barcodes which are using 3-track magnetic stripe encoding used in the interest of smoothing a transition from legacy documents
   * shall be designated as "Magnetic". All barcodes which are using compact encoding
   * compliant with ISO/IEC 18013-2 shall be designated as "Compact". All barcodes (majority)
   * compliant with Mandatory PDF417 Bar Code of the American Association of Motor Vehicle
   * Administrators (AAMVA) Card Design Standard from AAMVA DL/ID-2000 standard to DL/ID-2013
   * shall be designated as "AAMVA".
   */

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

  /**
   * Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
   * Optional on Compact barcodes.
   * A code that indicates whether a field has been truncated (T), has not been
   * truncated (N), or – unknown whether truncated (U).
   */

  /**
   * Mandatory on AAMVA versions 02 and 03.
   *
   * Federally established codes for vehicle categories, endorsements, and restrictions
   * that are generally applicable to commercial motor vehicles. If the vehicle is not a
   * commercial vehicle, "NONE" is to be entered.
   */

  /**
   * Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
   * Optional on Compact barcodes.
   *
   * A code that indicates whether a field has been truncated (T), has not been
   * truncated (N), or – unknown whether truncated (U).
   */

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

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   * Optional on AAMVA 01 and Magnetic barcodes.
   *
   * Height of cardholder in Inches.
   * Example: 5'9'' = "69".
   *
   */

  /**
   * Mandatory on AAMVA 02, 03, 04, 05, 06, 07, 08 Compact barcodes.
   * Optional on AAMVA 01 and Magnetic barcodes.
   *
   * Height of cardholder in Centimeters.
   * Example: 180 Centimeters = "180".
   */

  /**
   * Mandatory on all AAMVA, Magnetic and Compact barcodes.
   *
   * This number uniquely identifies the issuing jurisdiction and can
   * be obtained by contacting the ISO Issuing Authority (AAMVA)
   */

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

  /**
   * Optional on all AAMVA and Magnetic barcodes.
   *
   * Name of issuing jurisdiction, for example: Alabama, Alaska ...
   */

  /**
   * Mandatory on all AAMVA barcodes.
   * Optional on Magnetic barcodes.
   *
   * Jurisdiction-specific codes that represent additional privileges
   * granted to the cardholder beyond the vehicle class (such as transportation of
   * passengers, hazardous materials, operation of motorcycles, etc.).
   */

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Text that explains the jurisdiction-specific code(s) that indicates additional
   * driving privileges granted to the cardholder beyond the vehicle class.
   */

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Text describing the jurisdiction-specific restriction code(s) that curtail driving privileges.
   */

  /**
   * Mandatory on all AAMVA barcodes.
   * Optional on Magnetic barcodes.
   *
   * Jurisdiction-specific codes that represent additional privileges
   * granted to the cardholder beyond the vehicle class (such as transportation of
   * passengers, hazardous materials, operation of motorcycles, etc.).
   */

  /**
   * Mandatory on all AAMVA and Magnetic barcodes.
   *
   * Jurisdiction-specific vehicle class / group code, designating the type
   * of vehicle the cardholder has privilege to drive.
   */

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Text that explains the jurisdiction-specific code(s) for classifications
   * of vehicles cardholder is authorized to drive.
   */

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

  /**
   * Optional on AAMVA 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * DHS required field that indicates that the cardholder has temporary lawful status = "1".
   */

  /**
   * Optional on AAMVA version 01.
   *
   * Medical Indicator/Codes.
   * STATE SPECIFIC. Freeform, Standard "TBD"
   */

  /**
   * Mandatory on AAMVA 04, 05, 06, 07, 08 barcodes.
   *
   * A code that indicates whether a field has been truncated (T), has not been
   * truncated (N), or – unknown whether truncated (U).
   */

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * PREFIX to Driver Name. Freeform as defined by issuing jurisdiction.
   */

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

  /**
   * Optional on AAMVA version 01.
   *
   * Non-Resident Indicator. "Y". Used by some jurisdictions to indicate holder of the document is a non-resident.
   */

  /**
   * Optional on AAMVA version 01.
   *
   * Number of duplicate cards issued for a license or ID if any.
   */

  /**
   * Optional on AAMVA 01, 06, 07, 08 barcodes.
   *
   * Field that indicates that the cardholder is an organ donor = "1".
   */

  /**
   * Optional on AAMVA version 01 barcodes.
   *
   * Driver Permit Expiration Date. MMDDCCYY format. Date permit expires.
   */

  /**
   * Optional on AAMVA version 01 barcodes..
   *
   * Type of permit.
   */

  /**
   * Optional on AAMVA version 01 barcodes..
   *
   * Driver Permit Issue Date. MMDDCCYY format. Date permit was issued.
   */

  /**
   * Optional on AAMVA 02, 03, 04, 05, 06, 07, 08 and Compact barcodes.
   *
   * Country and municipality and/or state/province.
   */

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

  /**
   * Optional on AAMVA version 01.
   *
   * Driver Residence City
   */

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

  /**
   * Optional on AAMVA version 01.
   *
   * Driver Residence Jurisdiction Code.
   */

  /**
   * Optional on AAMVA 01 barcodes.
   *
   * Driver Residence Postal Code.
   */

  /**
   * Optional on AAMVA version 01.
   *
   * Driver Residence Street Address 1.
   */

  /**
   * Optional on AAMVA version 01.
   *
   * Driver Residence Street Address 2.
   */

  /**
   * Optional on Magnetic barcodes.
   *
   * Security version being used.
   */

  /**
   * Mandatory on all AAMVA, Magnetic barcodes.
   * Optional on Compact barcodes.
   *
   * Gender of the cardholder. 1 = male, 2 = female.
   */

  /**
   * Optional on AAMVA version 01.
   *
   * The number assigned to the individual by the Social Security Administration.
   */

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

  /**
   * Optional on all AAMVA barcodes.
   * Mandatory on Compact barcodes.
   *
   * Standard vehicle classification code(s) for cardholder. This data element is a
   * placeholder for future efforts to standardize vehicle classifications.
   */

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

  /**
   * Optional on AAMVA 05, 06, 07, 08 barcodes.
   * Date on which the cardholder turns 18 years old. (MMDDCCYY format)
   */

  /**
   * Optional on AAMVA 05, 06, 07, 08 barcodes.
   *
   * Date on which the cardholder turns 19 years old. (MMDDCCYY format)
   */

  /**
   * Optional on AAMVA 05, 06, 07, 08 barcodes.
   *
   * Date on which the cardholder turns 21 years old. (MMDDCCYY format)
   */

  /**
   * Optional on AAMVA version 01.
   *
   *  A number or alphanumeric string used by some jurisdictions to identify a "customer" across multiple data bases.
   */

  /**
   * Optional on AAMVA 07, 08 barcodes.
   *
   * Field that indicates that the cardholder is a veteran = "1"
   */

  /**
   * Mandatory on AAMVA 02 barcodes.
   * Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.
   *
   * Cardholder weight in kilograms Example: 84 kg = "084"
   */

  /**
   * Mandatory on AAMVA 02 barcodes.
   * Optional on AAMVA 01, 03, 04, 05, 06, 07, 08, Magnetic and Compact barcodes.
   *
   * Cardholder weight in pounds Example: 185 lb = "185"
   */

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

  /**
   * 
   * @param nativeBarcodeExtendedElements - specifies the extended barcode elements obtained from the native SDK.
   */
  constructor(nativeBarcodeExtendedElements) {
    this.addressCity = nativeBarcodeExtendedElements.addressCity;
    this.addressJurisdictionCode = nativeBarcodeExtendedElements.addressJurisdictionCode;
    this.addressPostalCode = nativeBarcodeExtendedElements.addressPostalCode;
    this.addressStreet = nativeBarcodeExtendedElements.addressStreet;
    this.addressStreet2 = nativeBarcodeExtendedElements.addressStreet2;
    this.akaDateOfBirth = nativeBarcodeExtendedElements.akaDateOfBirth;
    this.akaFamilyName = nativeBarcodeExtendedElements.akaFamilyName;
    this.akaFullName = nativeBarcodeExtendedElements.akaFullName;
    this.akaGivenName = nativeBarcodeExtendedElements.akaGivenName;
    this.akaMiddleName = nativeBarcodeExtendedElements.akaMiddleName;
    this.akaPrefixName = nativeBarcodeExtendedElements.akaPrefixName;
    this.akaSocialSecurityNumber = nativeBarcodeExtendedElements.akaSocialSecurityNumber;
    this.akaSuffixName = nativeBarcodeExtendedElements.akaSuffixName;
    this.auditInformation = nativeBarcodeExtendedElements.auditInformation;
    this.cardRevisionDate = nativeBarcodeExtendedElements.cardRevisionDate;
    this.complianceType = nativeBarcodeExtendedElements.complianceType;
    this.countryIdentification = nativeBarcodeExtendedElements.countryIdentification;
    this.customerFamilyName = nativeBarcodeExtendedElements.customerFamilyName;
    this.customerIdNumber = nativeBarcodeExtendedElements.customerIdNumber;
    this.customerFirstName = nativeBarcodeExtendedElements.customerFirstName;
    this.customerFullName = nativeBarcodeExtendedElements.customerFullName;
    this.customerMiddleName = nativeBarcodeExtendedElements.customerMiddleName;
    this.dataDiscriminator = nativeBarcodeExtendedElements.dataDiscriminator;
    this.dateOfBirth = nativeBarcodeExtendedElements.dateOfBirth;
    this.documentDiscriminator = nativeBarcodeExtendedElements.documentDiscriminator;
    this.documentExpirationDate = nativeBarcodeExtendedElements.documentExpirationDate;
    this.documentExpirationMonth = nativeBarcodeExtendedElements.documentExpirationMonth;
    this.documentIssueDate = nativeBarcodeExtendedElements.documentIssueDate;
    this.documentNonexpiring = nativeBarcodeExtendedElements.documentNonexpiring;
    this.documentType = nativeBarcodeExtendedElements.documentType;
    this.eyeColor = nativeBarcodeExtendedElements.eyeColor;
    this.familyNameTruncation = nativeBarcodeExtendedElements.familyNameTruncation;
    this.federalCommercialVehicleCodes = nativeBarcodeExtendedElements.federalCommercialVehicleCodes;
    this.firstNameTruncation = nativeBarcodeExtendedElements.firstNameTruncation;
    this.fullAddress = nativeBarcodeExtendedElements.fullAddress;
    this.hairColor = nativeBarcodeExtendedElements.hairColor;
    this.height = nativeBarcodeExtendedElements.height;
    this.heightIn = nativeBarcodeExtendedElements.heightIn;
    this.heightCm = nativeBarcodeExtendedElements.heightCm;
    this.issuerIdentificationNumber = nativeBarcodeExtendedElements.issuerIdentificationNumber;
    this.issuingJurisdiction = nativeBarcodeExtendedElements.issuingJurisdiction;
    this.issuingJurisdictionName = nativeBarcodeExtendedElements.issuingJurisdictionName;
    this.jurisdictionEndorsementCodes = nativeBarcodeExtendedElements.jurisdictionEndorsementCodes;
    this.jurisdictionEndorsmentCodeDescription = nativeBarcodeExtendedElements.jurisdictionEndorsmentCodeDescription;
    this.jurisdictionRestrictionCodeDescription = nativeBarcodeExtendedElements.jurisdictionRestrictionCodeDescription;
    this.jurisdictionRestrictionCodes = nativeBarcodeExtendedElements.jurisdictionRestrictionCodes;
    this.jurisdictionVehicleClass = nativeBarcodeExtendedElements.jurisdictionVehicleClass;
    this.jurisdictionVehicleClassificationDescription = nativeBarcodeExtendedElements.jurisdictionVehicleClassificationDescription;
    this.jurisdictionVersionNumber = nativeBarcodeExtendedElements.jurisdictionVersionNumber;
    this.limitedDurationDocument = nativeBarcodeExtendedElements.limitedDurationDocument;
    this.medicalIndicator = nativeBarcodeExtendedElements.medicalIndicator;
    this.middleNameTruncation = nativeBarcodeExtendedElements.middleNameTruncation;
    this.namePrefix = nativeBarcodeExtendedElements.namePrefix;
    this.nameSuffix = nativeBarcodeExtendedElements.nameSuffix;
    this.nonResident = nativeBarcodeExtendedElements.nonResident;
    this.numberOfDuplicates = nativeBarcodeExtendedElements.numberOfDuplicates;
    this.organDonor = nativeBarcodeExtendedElements.organDonor;
    this.permitExpirationDate = nativeBarcodeExtendedElements.permitExpirationDate;
    this.permitIdentifier = nativeBarcodeExtendedElements.permitIdentifier;
    this.permitIssueDate = nativeBarcodeExtendedElements.permitIssueDate;
    this.placeOfBirth = nativeBarcodeExtendedElements.placeOfBirth;
    this.raceEthnicity = nativeBarcodeExtendedElements.raceEthnicity;
    this.residenceCity = nativeBarcodeExtendedElements.residenceCity;
    this.residenceFullAddress = nativeBarcodeExtendedElements.residenceFullAddress;
    this.residenceJurisdictionCode = nativeBarcodeExtendedElements.residenceJurisdictionCode;
    this.residencePostalCode = nativeBarcodeExtendedElements.residencePostalCode;
    this.residenceStreetAddress = nativeBarcodeExtendedElements.residenceStreetAddress;
    this.residenceStreetAddress2 = nativeBarcodeExtendedElements.residenceStreetAddress2;
    this.securityVersion = nativeBarcodeExtendedElements.securityVersion;
    this.sex = nativeBarcodeExtendedElements.sex;
    this.socialSecurityNumber = nativeBarcodeExtendedElements.socialSecurityNumber;
    this.standardEndorsementCode = nativeBarcodeExtendedElements.standardEndorsementCode;
    this.standardRestrictionCode = nativeBarcodeExtendedElements.standardRestrictionCode;
    this.standardVehicleClassification = nativeBarcodeExtendedElements.standardVehicleClassification;
    this.standardVersionNumber = nativeBarcodeExtendedElements.standardVersionNumber;
    this.under18 = nativeBarcodeExtendedElements.under18;
    this.under19 = nativeBarcodeExtendedElements.under19;
    this.under21 = nativeBarcodeExtendedElements.under21;
    this.uniqueCustomerId = nativeBarcodeExtendedElements.uniqueCustomerId;
    this.veteran = nativeBarcodeExtendedElements.veteran;
    this.weightKilograms = nativeBarcodeExtendedElements.weightKilograms;
    this.weightPounds = nativeBarcodeExtendedElements.weightPounds;
    this.weightRange = nativeBarcodeExtendedElements.weightRange;
  }
}

/**
 * Represents the mode of document scanning.
 *
 * This enum class defines whether the scanning process is limited to a single
 * side of the document or includes multiple sides, automatically identifying how many sides need to be scanned.
 */
export let ScanningMode = /*#__PURE__*/function (ScanningMode) {
  /**
   * Specifies the scanning process to be for single side only.
   *
   */
  ScanningMode["Single"] = "single";
  /**
   * The default `ScanningMode`.
   *
   * Automatically determines the number of sides to scan.
   */
  ScanningMode["Automatic"] = "automatic";
  return ScanningMode;
}({});

/**
 * Represents the type of the alphabet used in the document.
 *
 */
export let AlphabetType = /*#__PURE__*/function (AlphabetType) {
  /**
   * The Latin alphabet type
   *
   */
  AlphabetType["Latin"] = "latin";
  /**
   * The Arabic alphabet type
   *
   */
  AlphabetType["Arabic"] = "arabic";
  /**
   * The Cyrillic alphabet type
   *
   */
  AlphabetType["Cyrillic"] = "cyrillic";
  /**
   * The Greek alphabet type
   *
   */
  AlphabetType["Greek"] = "greek";
  return AlphabetType;
}({});

/**
 * Represents the different levels of detection sensitivity.
 *
 * This enum class is used to configure detection thresholds and enable or
 * disable detection functionality.
 *
 * The levels range from turning detection
 * off completely to setting various levels of sensitivity (`Low`, `Mid`, `High`).
 */
export let DetectionLevel = /*#__PURE__*/function (DetectionLevel) {
  /**
   * Disables the `DetectionLevel`
   *
   */
  DetectionLevel["Off"] = "off";
  /**
   * Sets the `DetectionLevel` to be less sensitive.
   *
   */
  DetectionLevel["Low"] = "low";
  /**
   * The default `DetectionLevel` sensitivity.
   *
   */
  DetectionLevel["Mid"] = "mid";
  /**
   * Sets the `DetectionLevel` to be highly sensitive.
   *
   */
  DetectionLevel["High"] = "high";
  return DetectionLevel;
}({});

/**
 * Represents level of anonymization performed on the scanning result.
 * 
 */
export let AnonymizationMode = /*#__PURE__*/function (AnonymizationMode) {
  /**
   * Anonymization will not be performed.
   * 
   */
  AnonymizationMode["None"] = "none";
  /**
   * Full document image is anonymized with black boxes covering sensitive data.
   * 
   */
  AnonymizationMode["ImageOnly"] = "imageOnly";
  /**
   * Result fields containing sensitive data are removed from result.
   * 
   */
  AnonymizationMode["ResultFieldsOnly"] = "resultFieldsOnly";
  /**
   * This mode is combination of `imageOnly` and `resultFieldsOnly` modes.
   * 
   */
  AnonymizationMode["FullResult"] = "fullResult";
  return AnonymizationMode;
}({});

/**
 * Represents the document type found on the Machine Readable Zone
 *
 */
export let MRZDocumentType = /*#__PURE__*/function (MRZDocumentType) {
  /**
   * Document type was not identified.
   *
   */
  MRZDocumentType[MRZDocumentType["Unknown"] = 0] = "Unknown";
  /**
   * Identity card
   *
   */
  MRZDocumentType[MRZDocumentType["IdentityCard"] = 1] = "IdentityCard";
  /**
   * Passport
   *
   */
  MRZDocumentType[MRZDocumentType["Passport"] = 2] = "Passport";
  /**
   * VISA
   *
   */
  MRZDocumentType[MRZDocumentType["Visa"] = 3] = "Visa";
  /**
   * Green card
   *
   */
  MRZDocumentType[MRZDocumentType["GreenCard"] = 4] = "GreenCard";
  /**
   * IIM13P Pass
   *
   */
  MRZDocumentType[MRZDocumentType["MysPassIMM13P"] = 5] = "MysPassIMM13P";
  /**
   * Driver license
   *
   */
  MRZDocumentType[MRZDocumentType["DriverLicense"] = 6] = "DriverLicense";
  /**
   * Internal travel document
   *
   */
  MRZDocumentType[MRZDocumentType["InternalTravelDocument"] = 7] = "InternalTravelDocument";
  /**
   * Border crossing card
   *
   */
  MRZDocumentType[MRZDocumentType["BorderCrossingCard"] = 8] = "BorderCrossingCard";
  return MRZDocumentType;
}({});

/**
 * Represents the result of the image crop transformation with additional details.
 *
 */
export class DetailedCroppedImageResult {
  /**
   * The cropped image in the Base64 format
   *
   */

  /**
   * The document side that was cropped.
   *
   */

  /**
   * The location of the cropped image in the transformed image of the document.
   *
   */

  /**
   *
   * @param nativeDetailedCroppedImageResult
   *
   */
  constructor(nativeDetailedCroppedImageResult) {
    this.image = nativeDetailedCroppedImageResult.image;
    this.side = nativeDetailedCroppedImageResult.side != undefined ? nativeDetailedCroppedImageResult.side : undefined;
    this.location = nativeDetailedCroppedImageResult.location != undefined ? new Rectangle(nativeDetailedCroppedImageResult.location) : undefined;
  }
}

/**
 * Represents the side of the document being scanned.
 *
 */
var ScanningSide = /*#__PURE__*/function (ScanningSide) {
  /**
   * The first side of the scanned document
   *
   */
  ScanningSide[ScanningSide["First"] = 0] = "First";
  /**
   * The second side of the scanned document
   *
   */
  ScanningSide[ScanningSide["Second"] = 1] = "Second";
  return ScanningSide;
}(ScanningSide || {});
/**
 * Document country.
 *
 */
export let Country = /*#__PURE__*/function (Country) {
  Country["None"] = "none";
  Country["Albania"] = "albania";
  Country["Algeria"] = "algeria";
  Country["Argentina"] = "argentina";
  Country["Australia"] = "australia";
  Country["Austria"] = "austria";
  Country["Azerbaijan"] = "azerbaijan";
  Country["Bahrain"] = "bahrain";
  Country["Bangladesh"] = "bangladesh";
  Country["Belgium"] = "belgium";
  Country["BosniaAndHerzegovina"] = "bosniaAndHerzegovina";
  Country["Brunei"] = "brunei";
  Country["Bulgaria"] = "bulgaria";
  Country["Bambodia"] = "bambodia";
  Country["Canada"] = "canada";
  Country["Chile"] = "chile";
  Country["Colombia"] = "colombia";
  Country["CostaRica"] = "costaRica";
  Country["Croatia"] = "croatia";
  Country["Cyprus"] = "cyprus";
  Country["Czechia"] = "czechia";
  Country["Denmark"] = "denmark";
  Country["DominicanRepublic"] = "dominicanRepublic";
  Country["Egypt"] = "egypt";
  Country["Estonia"] = "estonia";
  Country["Finland"] = "finland";
  Country["France"] = "france";
  Country["Georgia"] = "georgia";
  Country["Germany"] = "germany";
  Country["Ghana"] = "ghana";
  Country["Greece"] = "greece";
  Country["Guatemala"] = "guatemala";
  Country["HongKong"] = "hongKong";
  Country["Hungary"] = "hungary";
  Country["India"] = "india";
  Country["Indonesia"] = "indonesia";
  Country["Ireland"] = "ireland";
  Country["Israel"] = "israel";
  Country["Italy"] = "italy";
  Country["Jordan"] = "jordan";
  Country["Kazakhstan"] = "kazakhstan";
  Country["Kenya"] = "kenya";
  Country["Kosovo"] = "kosovo";
  Country["Kuwait"] = "kuwait";
  Country["Latvia"] = "latvia";
  Country["Lithuania"] = "lithuania";
  Country["Malaysia"] = "malaysia";
  Country["Maldives"] = "maldives";
  Country["Malta"] = "malta";
  Country["Mauritius"] = "mauritius";
  Country["Mexico"] = "mexico";
  Country["Morocco"] = "morocco";
  Country["Netherlands"] = "netherlands";
  Country["NewZealand"] = "newZealand";
  Country["Nigeria"] = "nigeria";
  Country["Pakistan"] = "pakistan";
  Country["Panama"] = "panama";
  Country["Paraguay"] = "paraguay";
  Country["Philippines"] = "philippines";
  Country["Poland"] = "poland";
  Country["Portugal"] = "portugal";
  Country["PuertoRico"] = "puertoRico";
  Country["Qatar"] = "qatar";
  Country["Romania"] = "romania";
  Country["Russia"] = "russia";
  Country["SaudiArabia"] = "saudiArabia";
  Country["Serbia"] = "serbia";
  Country["Singapore"] = "singapore";
  Country["Slovakia"] = "slovakia";
  Country["Slovenia"] = "slovenia";
  Country["SouthAfrica"] = "southAfrica";
  Country["Spain"] = "spain";
  Country["Sweden"] = "sweden";
  Country["Switzerland"] = "switzerland";
  Country["Taiwan"] = "taiwan";
  Country["Thailand"] = "thailand";
  Country["Tunisia"] = "tunisia";
  Country["Turkey"] = "turkey";
  Country["UAE"] = "uae";
  Country["Ganda"] = "gganda";
  Country["UK"] = "uk";
  Country["Ukraine"] = "ukraine";
  Country["USA"] = "usa";
  Country["Vietnam"] = "vietnam";
  Country["Brazil"] = "brazil";
  Country["Norway"] = "norway";
  Country["Oman"] = "oman";
  Country["Ecuador"] = "ecuador";
  Country["ElSalvador"] = "elSalvador";
  Country["SriLanka"] = "sriLanka";
  Country["Peru"] = "peru";
  Country["Uruguay"] = "uruguay";
  Country["Bahamas"] = "bahamas";
  Country["Bermuda"] = "bermuda";
  Country["Bolivia"] = "bolivia";
  Country["China"] = "china";
  Country["EuropeanUnion"] = "europeanUnion";
  Country["Haiti"] = "haiti";
  Country["Honduras"] = "honduras";
  Country["Iceland"] = "iceland";
  Country["Japan"] = "japan";
  Country["Luxembourg"] = "luxembourg";
  Country["Montenegro"] = "montenegro";
  Country["Nicaragua"] = "nicaragua";
  Country["SouthKorea"] = "southKorea";
  Country["Venezuela"] = "venezuela";
  Country["Afghanistan"] = "afghanistan";
  Country["AlandIslands"] = "alandIslands";
  Country["AmericanSamoa"] = "americanSamoa";
  Country["Andorra"] = "andorra";
  Country["Angola"] = "angola";
  Country["Anguilla"] = "anguilla";
  Country["Antartica"] = "antarctica";
  Country["AntiguaAndBarbuda"] = "antiguaAndBarbuda";
  Country["Armenia"] = "armenia";
  Country["Aruba"] = "aruba";
  Country["BailiwickOfGuernsey"] = "bailiwickOfGuernsey";
  Country["BailiwickOfJersey"] = "bailiwickOfJersey";
  Country["Barbados"] = "barbados";
  Country["Belarus"] = "belarus";
  Country["Belize"] = "belize";
  Country["Benin"] = "benin";
  Country["Bhutan"] = "bhutan";
  Country["BonaireSaintEustatiusAndSaba"] = "bonaireSaintEustatiusAndSaba";
  Country["Botswana"] = "botswana";
  Country["BouvetIsland"] = "bouvetIsland";
  Country["BritishIndianOceanTerritory"] = "britishIndianOceanTerritory";
  Country["BurkinaFaso"] = "burkinaFaso";
  Country["Burundi"] = "burundi";
  Country["Cameroon"] = "cameroon";
  Country["CapeVerde"] = "capeVerde";
  Country["CaribbeanNetherlands"] = "caribbeanNetherlands";
  Country["CaymanIslands"] = "caymanIslands";
  Country["CentralAfricanRepublic"] = "centralAfricanRepublic";
  Country["Chad"] = "chad";
  Country["ChristmasIsland"] = "christmasIsland";
  Country["CocosIslands"] = "cocosIslands";
  Country["Comoros"] = "comoros";
  Country["Congo"] = "congo";
  Country["CookIslands"] = "cookIslands";
  Country["Cuba"] = "cuba";
  Country["Curacao"] = "curacao";
  Country["DemocraticRepublicOfTheCongo"] = "democraticRepublicOfTheCongo";
  Country["Djibouti"] = "djibouti";
  Country["Dominica"] = "dominica";
  Country["EastTimor"] = "eastTimor";
  Country["EquatorialGuinea"] = "equatorialGuinea";
  Country["Eritrea"] = "eritrea";
  Country["Ethiopia"] = "ethiopia";
  Country["FalklandIslands"] = "falklandIslands";
  Country["FaroeIslands"] = "faroeIslands";
  Country["FederatedStatesOfMicronesia"] = "federatedStatesOfMicronesia";
  Country["Fiji"] = "fiji";
  Country["FrenchGuiana"] = "frenchGuiana";
  Country["FrenchPolynesia"] = "frenchPolynesia";
  Country["FrenchSouthernTerritories"] = "frenchSouthernTerritories";
  Country["Gabon"] = "gabon";
  Country["Gambia"] = "gambia";
  Country["Gibraltar"] = "gibraltar";
  Country["Greenland"] = "greenland";
  Country["Grenada"] = "grenada";
  Country["Guadeloupe"] = "guadeloupe";
  Country["Guam"] = "guam";
  Country["Guinea"] = "guinea";
  Country["GuineaBissau"] = "guineaBissau";
  Country["Guyana"] = "guyana";
  Country["HeardIslandAndMcdonaldIslands"] = "heardIslandAndMcdonaldIslands";
  Country["Iran"] = "iran";
  Country["Iraq"] = "iraq";
  Country["IsleOfMan"] = "isleOfMan";
  Country["IvoryCoast"] = "ivoryCoast";
  Country["Jamaica"] = "jamaica";
  Country["Kiribati"] = "kiribati";
  Country["Kyrgyzstan"] = "kyrgyzstan";
  Country["Laos"] = "laos";
  Country["Lebanon"] = "lebanon";
  Country["Lesotho"] = "lesotho";
  Country["Liberia"] = "liberia";
  Country["Libya"] = "libya";
  Country["Liechtenstein"] = "liechtenstein";
  Country["Macau"] = "macau";
  Country["Madagascar"] = "madagascar";
  Country["Malawi"] = "malawi";
  Country["Mali"] = "mali";
  Country["MarshallIslands"] = "marshallIslands";
  Country["Martinique"] = "martinique";
  Country["Mauritania"] = "mauritania";
  Country["Mayotte"] = "mayotte";
  Country["Moldova"] = "moldova";
  Country["Monaco"] = "monaco";
  Country["Mongolia"] = "mongolia";
  Country["Montserrat"] = "montserrat";
  Country["Mozambique"] = "mozambique";
  Country["Myanmar"] = "myanmar";
  Country["Namibia"] = "namibia";
  Country["Nauru"] = "nauru";
  Country["Nepal"] = "nepal";
  Country["NewCaledonia"] = "newCaledonia";
  Country["Niger"] = "niger";
  Country["Niue"] = "niue";
  Country["NorfolkIsland"] = "norfolkIsland";
  Country["NorthernCyprus"] = "northernCyprus";
  Country["NorthernMarianaIslands"] = "northernMarianaIslands";
  Country["NorthKorea"] = "northKorea";
  Country["NorthMacedonia"] = "northMacedonia";
  Country["Palau"] = "palau";
  Country["Palestine"] = "palestine";
  Country["PapuaNewGuinea"] = "papuaNewGuinea";
  Country["Pitcairn"] = "pitcairn";
  Country["Reunion"] = "reunion";
  Country["Rwanda"] = "rwanda";
  Country["SaintBarthelemy"] = "saintBarthelemy";
  Country["SaintHelenaAscensionAndTristianDaCunha"] = "saintHelenaAscensionAndTristianDaCunha";
  Country["SaintKittsAndNevis"] = "saintKittsAndNevis";
  Country["SaintLucia"] = "saintLucia";
  Country["SaintMartin"] = "saintMartin";
  Country["SaintPierreAndMiquelon"] = "saintPierreAndMiquelon";
  Country["SaintVincentAndTheGrenadines"] = "saintVincentAndTheGrenadines";
  Country["Samoa"] = "samoa";
  Country["SanMarino"] = "sanMarino";
  Country["SaoTomeAndPrincipe"] = "saoTomeAndPrincipe";
  Country["Senegal"] = "senegal";
  Country["Seychelles"] = "seychelles";
  Country["SierraLeone"] = "sierraLeone";
  Country["SintMaarten"] = "sintMaarten";
  Country["SolomonIslands"] = "solomonIslands";
  Country["Somalia"] = "somalia";
  Country["SouthGeorgiaAndTheSouthSandwichIslands"] = "southGeorgiaAndTheSouthSandwichIslands";
  Country["SouthSudan"] = "southSudan";
  Country["Sudan"] = "sudan";
  Country["Suriname"] = "suriname";
  Country["SvalbardAndJanMayen"] = "svalbardAndJanMayen";
  Country["Eswatini"] = "eswatini";
  Country["Syria"] = "syria";
  Country["Tajikistan"] = "tajikistan";
  Country["Tanzania"] = "tanzania";
  Country["Togo"] = "togo";
  Country["Tokelau"] = "tokelau";
  Country["Tonga"] = "tonga";
  Country["TrinidadAndTobago"] = "trinidadAndTobago";
  Country["Turkmenistan"] = "turkmenistan";
  Country["TurksAndCaicosIslands"] = "turksAndCaicosIslands";
  Country["Tuvalu"] = "tuvalu";
  Country["UnitedStatesMinorOutlyingIslands"] = "unitedStatesMinorOutlyingIslands";
  Country["Uzbekistan"] = "uzbekistan";
  Country["Vanuatu"] = "vanuatu";
  Country["VaticanCity"] = "vaticanCity";
  Country["VirginIslandsBritish"] = "virginIslandsBritish";
  Country["VirginIslandsUs"] = "virginIslandsUs";
  Country["WallisAndFutuna"] = "wallisAndFutuna";
  Country["WesternSahara"] = "westernSahara";
  Country["Yemen"] = "yemen";
  Country["Yugoslavia"] = "yugoslavia";
  Country["Zambia"] = "zambia";
  Country["Zimbabwe"] = "zimbabwe";
  Country["SchengenArea"] = "schengenArea";
  return Country;
}({});
/**
 * Document region.
 */
export let Region = /*#__PURE__*/function (Region) {
  Region["None"] = "none";
  Region["Alabama"] = "alabama";
  Region["Alaska"] = "alaska";
  Region["Alberta"] = "alberta";
  Region["Arizona"] = "arizona";
  Region["Arkansas"] = "arkansas";
  Region["AustralianCapitalTerritory"] = "australianCapitalTerritory";
  Region["BritishColumbia"] = "britishColumbia";
  Region["California"] = "california";
  Region["Colorado"] = "colorado";
  Region["Connecticut"] = "connecticut";
  Region["Delaware"] = "delaware";
  Region["DistrictOfColumbia"] = "districtOfColumbia";
  Region["Florida"] = "florida";
  Region["Georgia"] = "georgia";
  Region["Hawaii"] = "hawaii";
  Region["Idaho"] = "idaho";
  Region["Illinois"] = "illinois";
  Region["Indiana"] = "indiana";
  Region["Iowa"] = "iowa";
  Region["Kansas"] = "kansas";
  Region["Kentucky"] = "kentucky";
  Region["Louisiana"] = "louisiana";
  Region["Maine"] = "maine";
  Region["Manitoba"] = "manitoba";
  Region["Maryland"] = "maryland";
  Region["Massachusetts"] = "massachusetts";
  Region["Michigan"] = "michigan";
  Region["Minnesota"] = "minnesota";
  Region["Mississippi"] = "mississippi";
  Region["Missouri"] = "missouri";
  Region["Montana"] = "montana";
  Region["Nebraska"] = "nebraska";
  Region["Nevada"] = "nevada";
  Region["NewBrunswick"] = "newBrunswick";
  Region["NewHampshire"] = "newHampshire";
  Region["NewJersey"] = "newJersey";
  Region["NewMexico"] = "newMexico";
  Region["NewSouthWales"] = "newSouthWales";
  Region["NewYork"] = "newYork";
  Region["NorthernTerritory"] = "northernTerritory";
  Region["NorthCarolina"] = "northCarolina";
  Region["NorthDakota"] = "northDakota";
  Region["NovaScotia"] = "novaScotia";
  Region["Ohio"] = "ohio";
  Region["Oklahoma"] = "oklahoma";
  Region["Ontario"] = "ontario";
  Region["Oregon"] = "oregon";
  Region["Pennsylvania"] = "pennsylvania";
  Region["Quebec"] = "quebec";
  Region["Queensland"] = "queensland";
  Region["RhodeIsland"] = "rhodeIsland";
  Region["Saskatchewan"] = "saskatchewan";
  Region["SouthAustralia"] = "southAustralia";
  Region["SouthCarolina"] = "southCarolina";
  Region["SouthDakota"] = "southDakota";
  Region["Tasmania"] = "tasmania";
  Region["Tennessee"] = "tennessee";
  Region["Texas"] = "texas";
  Region["Utah"] = "utah";
  Region["Vermont"] = "vermont";
  Region["Victoria"] = "victoria";
  Region["Virginia"] = "virginia";
  Region["Washington"] = "washington";
  Region["WesternAustralia"] = "westernAustralia";
  Region["WestVirginia"] = "westVirginia";
  Region["Wisconsin"] = "wisconsin";
  Region["Wyoming"] = "wyoming";
  Region["Yukon"] = "yukon";
  Region["CiudadDeMexico"] = "ciudadDeMexico";
  Region["Jalisco"] = "jalisco";
  Region["NewfoundlandAndLabrador"] = "newfoundlandAndLabrador";
  Region["NuevoLeon"] = "nuevoLeon";
  Region["BajaCalifornia"] = "bajaCalifornia";
  Region["Chihuahua"] = "chihuahua";
  Region["Guanajuato"] = "guanajuato";
  Region["Guerrero"] = "guerrero";
  Region["Mexico"] = "mexico";
  Region["Michoacan"] = "michoacan";
  Region["NewYorkCity"] = "newYorkCity";
  Region["Tamaulipas"] = "tamaulipas";
  Region["Veracruz"] = "veracruz";
  Region["Chiapas"] = "chiapas";
  Region["Coahuila"] = "coahuila";
  Region["Durago"] = "durango";
  Region["GuerreroCocula"] = "guerreroCocula";
  Region["GuerreroJuchitan"] = "guerreroJuchitan";
  Region["GuerreroTepecoacuilco"] = "guerreroTepecoacuilco";
  Region["GuerreroTlacoapa"] = "guerreroTlacoapa";
  Region["Gujarat"] = "gujarat";
  Region["Hidalgo"] = "hidalgo";
  Region["Karnataka"] = "karnataka";
  Region["Kerala"] = "kerala";
  Region["KhyberPakhtunkhwa"] = "khyberPakhtunkhwa";
  Region["MadhyaPradesh"] = "madhyaPradesh";
  Region["Maharashtra"] = "maharashtra";
  Region["Morelos"] = "morelos";
  Region["Nayarit"] = "nayarit";
  Region["Oaxaca"] = "oaxaca";
  Region["Puebla"] = "puebla";
  Region["Punjab"] = "punjab";
  Region["Queretaro"] = "queretaro";
  Region["SanLuisPotosi"] = "sanLuisPotosi";
  Region["Sinaloa"] = "sinaloa";
  Region["Sonora"] = "sonora";
  Region["Tabasco"] = "tabasco";
  Region["TamilNadu"] = "tamilNadu";
  Region["Yucatan"] = "yucatan";
  Region["Zacatecas"] = "zacatecas";
  Region["Aguascalientes"] = "aguascalientes";
  Region["BajaCaliforniaSur"] = "bajaCaliforniaSur";
  Region["Campeche"] = "campeche";
  Region["Colima"] = "colima";
  Region["QuintanaRooBenitoJuarez"] = "quintanaRooBenitoJuarez";
  Region["QuintanaRoo"] = "quintanaRoo";
  Region["QuintanaRooSolidaridad"] = "quintanaRooSolidaridad";
  Region["Tlaxcala"] = "tlaxcala";
  Region["QuintanaRooCozumel"] = "quintanaRooCozumel";
  Region["SanPaolo"] = "saoPaolo";
  Region["RioDeJaniero"] = "rioDeJaneiro";
  Region["RioGrandeDoSul"] = "rioGrandeDoSul";
  Region["NorthWestTerritories"] = "northWestTerritories";
  Region["Nunavut"] = "nunavut";
  Region["PrinceEdwardIsland"] = "princeEdwardIsland";
  Region["DistritoFederal"] = "distritoFederal";
  Region["Maranhao"] = "maranhao";
  Region["MatoGrosso"] = "matoGrosso";
  Region["MinasGerais"] = "minasGerais";
  Region["Para"] = "para";
  Region["Parana"] = "parana";
  Region["Pernambuco"] = "pernambuco";
  Region["SantaCatarina"] = "santaCatarina";
  Region["AndhraPradesh"] = "andhraPradesh";
  Region["Ceara"] = "ceara";
  Region["Goias"] = "goias";
  Region["GuerreroAcapulcoDeJuarez"] = "guerreroAcapulcoDeJuarez";
  Region["Haryana"] = "haryana";
  Region["Sergipe"] = "sergipe";
  Region["Alagos"] = "alagos";
  Region["Bangsamoro"] = "bangsamoro";
  return Region;
}({});

/**
 * Document type.
 *
 */
export let DocumentType = /*#__PURE__*/function (DocumentType) {
  DocumentType["None"] = "none";
  DocumentType["ConsularId"] = "consularId";
  DocumentType["Dl"] = "dl";
  DocumentType["DlPublicServicesCard"] = "dlPublicServicesCard";
  DocumentType["EmploymentPass"] = "employmentPass";
  DocumentType["FinCard"] = "finCard";
  DocumentType["Id"] = "id";
  DocumentType["MultipurposeId"] = "multipurposeId";
  DocumentType["MyKad"] = "myKad";
  DocumentType["MyKid"] = "myKid";
  DocumentType["MyPr"] = "myPR";
  DocumentType["MyTentera"] = "myTentera";
  DocumentType["PanCard"] = "panCard";
  DocumentType["ProfessionalId"] = "professionalId";
  DocumentType["PublicServicesCard"] = "publicServicesCard";
  DocumentType["ResidencePermit"] = "residencePermit";
  DocumentType["ResidentId"] = "residentId";
  DocumentType["TemporaryResidencePermit"] = "temporaryResidencePermit";
  DocumentType["VoterId"] = "voterId";
  DocumentType["WorkPermit"] = "workPermit";
  DocumentType["IKad"] = "iKad";
  DocumentType["MilitaryId"] = "militaryId";
  DocumentType["MyKas"] = "myKas";
  DocumentType["DocialSecurityCard"] = "docialSecurityCard";
  DocumentType["HealthInsuranceCard"] = "healthInsuranceCard";
  DocumentType["Passport"] = "passport";
  DocumentType["SPass"] = "sPass";
  DocumentType["AddressCard"] = "addressCard";
  DocumentType["AlienId"] = "alienId";
  DocumentType["AlienPassport"] = "alienPassport";
  DocumentType["GreenCard"] = "greenCard";
  DocumentType["MinorsId"] = "minorsId";
  DocumentType["PostalId"] = "postalId";
  DocumentType["ProfessionalDl"] = "professionalDl";
  DocumentType["TaxId"] = "taxId";
  DocumentType["WeaponPermit"] = "weaponPermit";
  DocumentType["Visa"] = "visa";
  DocumentType["BorderCrossingCard"] = "borderCrossingCard";
  DocumentType["DriverCard"] = "driverCard";
  DocumentType["GlobalEntryCard"] = "globalEntryCard";
  DocumentType["MyPolis"] = "mypolis";
  DocumentType["NexusCard"] = "nexusCard";
  DocumentType["PassportCard"] = "passportCard";
  DocumentType["ProofOfAgeCard"] = "proofOfAgeCard";
  DocumentType["RefugeeId"] = "refugeeId";
  DocumentType["TribalId"] = "tribalId";
  DocumentType["VeteranId"] = "veteranId";
  DocumentType["CitizenshipCertificate"] = "citizenshipCertificate";
  DocumentType["MyNumberCard"] = "myNumberCard";
  DocumentType["ConsularPassport"] = "consularPassport";
  DocumentType["MinorsPassport"] = "minorsPassport";
  DocumentType["MinorsPublicServicesCard"] = "minorsPublicServicesCard";
  DocumentType["DrivingPriviligeCard"] = "drivingPriviligeCard";
  DocumentType["AsylumRequest"] = "asylumRequest";
  DocumentType["DriverQualificationCard"] = "driverQualificationCard";
  DocumentType["ProvisionalDl"] = "provisionalDl";
  DocumentType["RefugeePassport"] = "refugeePassport";
  DocumentType["SpecialId"] = "specialId";
  DocumentType["UniformedServicesId"] = "uniformedServicesId";
  DocumentType["ImmigrantVisa"] = "immigrantVisa";
  DocumentType["ConsularVoterId"] = "consularVoterId";
  DocumentType["TwicCard"] = "twicCard";
  DocumentType["ExitEntryPermit"] = "exitEntryPermit";
  DocumentType["MainlandTravelPermitTaiwan"] = "mainlandTravelPermitTaiwan";
  DocumentType["NbiClearance"] = "nbiClearance";
  DocumentType["ProofOfRegistration"] = "proofOfRegistration";
  DocumentType["TemporaryProtectionPermit"] = "temporaryProtectionPermit";
  DocumentType["AfghanCitizenCard"] = "afghanCitizenCard";
  DocumentType["EId"] = "eId";
  DocumentType["Pass"] = "pass";
  DocumentType["SisId"] = "sisId";
  DocumentType["AsicCard"] = "asicCard";
  DocumentType["BidoonCard"] = "bidoonCard";
  DocumentType["InterimHealthInsuranceCard"] = "interimHealthInsuranceCard";
  DocumentType["NonVoterId"] = "nonVoterId";
  DocumentType["ReciprocalHealthInsuranceCard"] = "reciprocalHealthInsuranceCard";
  DocumentType["VehicleRegistration"] = "vehicleRegistration";
  DocumentType["EsaadCard"] = "esaadCard";
  DocumentType["RegistrationCertificate"] = "registrationCertificate";
  DocumentType["MedicalMarijuanaId"] = "medicalMarijuanaId";
  return DocumentType;
}({});

/**
 * Represents all possible field types that can be extracted from the document.
 *
 */
export let FieldType = /*#__PURE__*/function (FieldType) {
  FieldType["AdditionalAddressInformation"] = "additionalAddressInformation";
  FieldType["AdditionalNameInformation"] = "additionalNameInformation";
  FieldType["AdditionalOptionalAddressInformation"] = "additionalOptionalAddressInformation";
  FieldType["AdditionalPersonalIdNumber"] = "additionalPersonalIdNumber";
  FieldType["Address"] = "address";
  FieldType["ClassEffectiveDate"] = "classEffectiveDate";
  FieldType["ClassExpiryDate"] = "classExpiryDate";
  FieldType["Conditions"] = "conditions";
  FieldType["DateOfBirth"] = "dateOfBirth";
  FieldType["DateOfExpiry"] = "dateOfExpiry";
  FieldType["DateOfIssue"] = "dateOfIssue";
  FieldType["DocumentAdditionalNumber"] = "documentAdditionalNumber";
  FieldType["DocumentOptionalAdditionalNumber"] = "documentOptionalAdditionalNumber";
  FieldType["DocumentNumber"] = "documentNumber";
  FieldType["Employer"] = "employer";
  FieldType["Endorsements"] = "endorsements";
  FieldType["FathersName"] = "fathersName";
  FieldType["FirstName"] = "firstName";
  FieldType["FullName"] = "fullName";
  FieldType["IssuingAuthority"] = "issuingAuthority";
  FieldType["LastName"] = "lastName";
  FieldType["LicenseType"] = "licenceType";
  FieldType["LocalizedName"] = "localizedName";
  FieldType["MaritalStatus"] = "maritalStatus";
  FieldType["MothersName"] = "mothersName";
  FieldType["Mrz"] = "mrz";
  FieldType["Nationality"] = "nationality";
  FieldType["PersonalIdNumber"] = "personalIdNumber";
  FieldType["PlaceOfBirth"] = "placeOfBirth";
  FieldType["Profession"] = "profession";
  FieldType["Race"] = "race";
  FieldType["Religion"] = "religion";
  FieldType["ResidentialStatus"] = "residentialStatus";
  FieldType["Restriction"] = "restrictions";
  FieldType["Sex"] = "sex";
  FieldType["VehicleClass"] = "vehicleClass";
  FieldType["BloodType"] = "bloodType";
  FieldType["Sponsor"] = "sponsor";
  FieldType["VisaType"] = "visaType";
  FieldType["DocumentSubtype"] = "documentSubtype";
  FieldType["Remarks"] = "remarks";
  FieldType["ResidencePermitType"] = "residencePermitType";
  FieldType["ManufacturingYear"] = "manufacturingYear";
  FieldType["VehicleType"] = "vehicleType";
  FieldType["DependentDateOfBirth"] = "dependentDateOfBirth";
  FieldType["DependentSex"] = "dependentSex";
  FieldType["DependentDocumentNumber"] = "dependentDocumentNumber";
  FieldType["DependentFullName"] = "dependentFullName";
  FieldType["EligibilityCategory"] = "eligibilityCategory";
  FieldType["SpecificDocumentValidity"] = "specificDocumentValidity";
  FieldType["VehnicleOwner"] = "vehicleOwner";
  return FieldType;
}({});
//# sourceMappingURL=types.js.map