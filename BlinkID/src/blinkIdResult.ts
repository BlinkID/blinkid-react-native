import {
  RecognitionMode,
  StringResult,
  DataMatchResult,
  DocumentClassInfo,
  DependentInfo,
  SingleSideScanningResult,
  DriverLicenseDetailedInfo,
  DateResult,
  DetailedCroppedImageResult
} from './types';

/**
 * Represents the results of scanning a document.
 *
 * This class contains the results of scanning a document, including the extracted data
 * and images from the document.
 *
 **/
export class BlinkIdScanningResult {
  /**
   * Scanning mode used to scan the current document.
   *
   * See {@link RecognitionMode} for more information.
   */
  recognitionMode?: RecognitionMode;

  /**
   * The document class information.
   *
   * See {@link DocumentClassInfo} for more information.
   */
  documentClassInfo?: DocumentClassInfo;

  /**
   * Info on whether the data extracted from multiple sides matches.
   *
   * See {@link DataMatchResult} for more information.
   */
  dataMatchResult?: DataMatchResult;

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
   * The address of the doicument owner.
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
   *
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
   * The visa type of the document.
   *
   */
  visaType?: StringResult;

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
   * Determines if date of expiry is permanent.
   *
   */
  dateOfExpiryPermanent?: boolean;

  /**
   * The driver license detailed info.
   *
   * See {@link DriverLicenseDetailedInfo} for more information.
   */
  driverLicenseDetailedInfo?: DriverLicenseDetailedInfo<StringResult>;
  /**
   * The dependents info.
   *
   * See {@link DependentInfo} for more information.
   */
  dependentsInfo?: DependentInfo[];

  /**
   * The results of scanning each side of the document.
   *
   * See {@link SingleSideScanningResult} for more information.
   */
  subResults?: SingleSideScanningResult[];
  /**
   * Returns the input image for the first scanning side in the Base64 format.
   *
   * Or `null` if the input image is not available.
   */
  firstInputImage?: string;
  /**
   * Returns the input image for the second scanning side in the Base64 format.
   *
   * Or `null` if the input image is not available.
   */
  secondInputImage?: string;

  /**
   * Returns the input image containing parsable barcode.
   *
   * Or `null` if the barcode input image is not available.
   */
  barcodeInputImage?: string;
  /**
   * Returns the cropped document image for the first scanning side.
   *
   * Or `null` if the document image is not available.
   */
  firstDocumentImage?: string;

  /**
   * Returns the cropped document image for the second scanning side.
   *
   * Or `null` if the document image is not available.
   */
  secondDocumentImage?: string;
  /**
   * Returns the cropped face image with additional info.
   * Or `null` if the face image is not available.
   *
   * See {@link DetailedCroppedImageResult} for more information.
   */
  faceImage?: DetailedCroppedImageResult;

  /**
   * Returns the cropped signature image with additional info.
   * Or `null` if the signature image is not available.
   *
   * See {@link DetailedCroppedImageResult} for more information.
   */
  signatureImage?: DetailedCroppedImageResult;

  /**
   * Represents the results of scanning a document.
   *
   * This class contains the results of scanning a document, including the extracted data
   * and images from the document.
   *
   */
  constructor(nativeBlinkIdResult: any) {
    /**
     * Scanning mode used to scan the current document.
     *
     * See {@link RecognitionMode} for more information.
     */
    this.recognitionMode =
      nativeBlinkIdResult.recognitionMode;
    /**
     * The document class information.
     *
     * See {@link DocumentClassInfo} for more information.
     */
    this.documentClassInfo =
      nativeBlinkIdResult.documentClassInfo;
    /**
     * Info on whether the data extracted from multiple sides matches.
     *
     * See {@link DataMatchResult} for more information.
     */
    this.dataMatchResult =
      nativeBlinkIdResult.dataMatchResult;

    /**
     * The first name of the document owner.
     *
     */
    this.firstName =
      nativeBlinkIdResult.firstName;

    /**
     * The last name of the document owner.
     *
     */
    this.lastName =
      nativeBlinkIdResult.lastName;

    /**
     * The full name of the document owner.
     *
     */
    this.fullName =
      nativeBlinkIdResult.firstName;

    /**
     * The additional name information of the document owner.
     *
     */
    this.additionalNameInformation =
      nativeBlinkIdResult.additionalNameInformation;

    /**
     * The localized name of the document owner.
     *
     */
    this.localizedName =
      nativeBlinkIdResult.localizedName;
    /**
     * The fathers name of the document owner.
     *
     */
    this.fathersName =
      nativeBlinkIdResult.fathersName;

    /**
     * The mothers name of the document owner.
     *
     */
    this.mothersName =
      nativeBlinkIdResult.mothersName;

    /**
     * The address of the doicument owner.
     *
     */
    this.address =
      nativeBlinkIdResult.address;

    /**
     * The additional address information of the document owner.
     *
     */
    this.additionalAddressInformation =
      nativeBlinkIdResult.additionalAddressInformation;

    /**
     * The one more additional address information of the document owner.
     *
     */
    this.additionalOptionalAddressInformation =
      nativeBlinkIdResult.additionalOptionalAddressInformation;

    /**
     * The place of birth of the document owner.
     *
     */
    this.placeOfBirth =
      nativeBlinkIdResult.placeOfBirth;

    /**
     * The nationality of the document owner.
     *
     */
    this.nationality =
      nativeBlinkIdResult.nationality;

    /**
     * The race of the document owner.
     *
     */
    this.race =
      nativeBlinkIdResult.race;

    /**
     * The religion of the document owner.
     *
     */
    this.religion =
      nativeBlinkIdResult.religion;

    /**
     * The profession of the document owner.
     *
     */
    this.profession =
      nativeBlinkIdResult.profession;

    /**
     * The marital status of the document owner.
     *
     */
    this.maritalStatus =
      nativeBlinkIdResult.maritalStatus;

    /**
     * The residential status of the document owner.
     *
     */
    this.residentialStatus =
      nativeBlinkIdResult.residentialStatus;
    /**
     * The employer of the document owner.
     *
     */
    this.employer =
      nativeBlinkIdResult.employer;

    /**
     * The sex of the document owner.
     *
     */
    this.sex =
      nativeBlinkIdResult.sex;

    /**
     * The sponsor of the document owner.
     *
     */
    this.sponsor =
      nativeBlinkIdResult.sponsor;

    /**
     * The blood type of the document owner.
     *
     */
    this.bloodType =
      nativeBlinkIdResult.bloodType;

    /**
     * The document number.
     *
     */
    this.documentNumber =
      nativeBlinkIdResult.documentNumber;

    /**
     * The personal identification number.
     *
     */
    this.personalIdNumber =
      nativeBlinkIdResult.personalIdNumber;

    /**
     * The additional number of the document.
     *
     */
    this.documentAdditionalNumber =
      nativeBlinkIdResult.documentAdditionalNumber;

    /**
     * The one more additional number of the document.
     *
     */
    this.documentOptionalAdditionalNumber =
      nativeBlinkIdResult.documentOptionalAdditionalNumber;

    /**
     * The additional personal identification number.
     *
     */
    this.additionalPersonalIdNumber =
      nativeBlinkIdResult.additionalPersonalIdNumber;

    /**
     * The issuing authority of the document.
     *
     */
    this.issuingAuthority =
      nativeBlinkIdResult.issuingAuthority;

    /**
     * The transcription of the document subtype.
     *
     */
    this.documentSubtype =
      nativeBlinkIdResult.documentSubtype;

    /**
     * The remarks on the residence permit.
     *
     */
    this.remarks =
      nativeBlinkIdResult.remarks;

    /**
     * The residence permit type.
     *
     */
    this.residencePermitType =
      nativeBlinkIdResult.residencePermitType;

    /**
     * The manufacturing year.
     *
     */
    this.manufacturingYear =
      nativeBlinkIdResult.manufacturingYear;
    /**
     * The vehicle type.
     *
     */
    this.vehicleType =
      nativeBlinkIdResult.vehicleType;

    /**
     * The eligibility category.
     *
     */
    this.eligibilityCategory =
      nativeBlinkIdResult.eligibilityCategory;

    /**
     * The specific document validity.
     *
     */
    this.specificDocumentValidity =
      nativeBlinkIdResult.specificDocumentValidity;

    /**
     * The visa type of the document.
     *
     */
    this.visaType =
      nativeBlinkIdResult.visaType;

    /**
    * The country code of the document owner.
    *
    */
    this.countryCode = nativeBlinkIdResult.countryCode;

    /**
    * The certificate number of the document owner.
    *
    */
    this.certificateNumber = nativeBlinkIdResult.certificateNumber;

    /**
    * The national insurance number of the document owner.
    *
    */
    this.nationalInsuranceNumber = nativeBlinkIdResult.nationalInsuranceNumber;

    /**
     * The date of birth of the document owner.
     *
     */
    this.dateOfBirth =
      nativeBlinkIdResult.dateOfBirth;

    /**
     * The date of issue of the document.
     *
     */
    this.dateOfIssue =
      nativeBlinkIdResult.dateOfIssue;

    /**
     * The date of expiry of the document.
     *
     */
    this.dateOfExpiry =
      nativeBlinkIdResult.dateOfExpiry;

    /**
     * Determines if date of expiry is permanent.
     *
     */
    this.dateOfExpiryPermanent = nativeBlinkIdResult.dateOfExpiryPermanent;

    /**
     * The driver license detailed info.
     *
     * See {@link DriverLicenseDetailedInfo} for more information.
     */
    this.driverLicenseDetailedInfo =
      nativeBlinkIdResult.driverLicenseDetailedInfo;
    /**
     * The dependents info.
     *
     * See {@link DependentInfo} for more information.
     */
    this.dependentsInfo = nativeBlinkIdResult.dependentsInfo;

    /**
     * The results of scanning each side of the document.
     *
     * See {@link SingleSideScanningResult} for more information.
     */
    this.subResults = nativeBlinkIdResult.subResults;
    /**
     * Returns the input image for the first scanning side in the Base64 format.
     *
     * Or `null` if the input image is not available.
     */
    this.firstInputImage = nativeBlinkIdResult.firstInputImage;
    /**
     * Returns the input image for the second scanning side in the Base64 format.
     *
     * Or `null` if the input image is not available.
     */
    this.secondInputImage = nativeBlinkIdResult.secondInputImage;

    /**
     * Returns the input image containing parsable barcode.
     *
     * Or `null` if the barcode input image is not available.
     */
    this.barcodeInputImage = nativeBlinkIdResult.barcodeInputImage;
    /**
     * Returns the cropped document image for the first scanning side.
     *
     * Or `null` if the document image is not available.
     */
    this.firstDocumentImage = nativeBlinkIdResult.firstDocumentImage;

    /**
     * Returns the cropped document image for the second scanning side.
     *
     * Or `null` if the document image is not available.
     */
    this.secondDocumentImage = nativeBlinkIdResult.secondDocumentImage;
    /**
     * Returns the cropped face image with additional info.
     * Or `null` if the face image is not available.
     *
     * See {@link DetailedCroppedImageResult} for more information.
     */
    this.faceImage =
      nativeBlinkIdResult.faceImage;

    /**
     * Returns the cropped signature image with additional info.
     * Or `null` if the signature image is not available.
     *
     * See {@link DetailedCroppedImageResult} for more information.
     */
    this.signatureImage =
      nativeBlinkIdResult.signatureImage;
  }
}
