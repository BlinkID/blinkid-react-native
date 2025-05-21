import {
  RecognitionMode,
  StringResult,
  DataMatchResult,
  DocumentClassInfo,
  DependentInfo,
  SingleSideScanningResult,
  DriverLicenseDetailedInfo,
  DateResult
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
      nativeBlinkIdResult.recognitionMode != undefined
        ? (nativeBlinkIdResult.recognitionMode as RecognitionMode)
        : undefined;
    /**
     * The document class information.
     *
     * See {@link DocumentClassInfo} for more information.
     */
    this.documentClassInfo =
      nativeBlinkIdResult.documentClassInfo != undefined
        ? new DocumentClassInfo(nativeBlinkIdResult.documentClassInfo)
        : undefined;

    /**
     * Info on whether the data extracted from multiple sides matches.
     *
     * See {@link DataMatchResult} for more information.
     */
    this.dataMatchResult =
      nativeBlinkIdResult.dataMatchResult != undefined
        ? new DataMatchResult(nativeBlinkIdResult.dataMatchResult)
        : undefined;

    /**
     * The first name of the document owner.
     *
     */
    this.firstName =
      nativeBlinkIdResult.firstName != undefined
        ? new StringResult(nativeBlinkIdResult.firstName)
        : undefined;

    /**
     * The last name of the document owner.
     *
     */
    this.lastName =
      nativeBlinkIdResult.lastName != undefined
        ? new StringResult(nativeBlinkIdResult.lastName)
        : undefined;

    /**
     * The full name of the document owner.
     *
     */
    this.fullName =
      nativeBlinkIdResult.firstName != undefined
        ? new StringResult(nativeBlinkIdResult.fullName)
        : undefined;

    /**
     * The additional name information of the document owner.
     *
     */
    this.additionalNameInformation =
      nativeBlinkIdResult.additionalNameInformation != undefined
        ? new StringResult(nativeBlinkIdResult.additionalNameInformation)
        : undefined;

    /**
     * The localized name of the document owner.
     *
     */
    this.localizedName =
      nativeBlinkIdResult.localizedName != undefined
        ? new StringResult(nativeBlinkIdResult.localizedName)
        : undefined;
    /**
     * The fathers name of the document owner.
     *
     */
    this.fathersName =
      nativeBlinkIdResult.fathersName != undefined
        ? new StringResult(nativeBlinkIdResult.fathersName)
        : undefined;

    /**
     * The mothers name of the document owner.
     *
     */
    this.mothersName =
      nativeBlinkIdResult.mothersName != undefined
        ? new StringResult(nativeBlinkIdResult.mothersName)
        : undefined;

    /**
     * The address of the doicument owner.
     *
     */
    this.address =
      nativeBlinkIdResult.address != undefined
        ? new StringResult(nativeBlinkIdResult.address)
        : undefined;

    /**
     * The additional address information of the document owner.
     *
     */
    this.additionalAddressInformation =
      nativeBlinkIdResult.additionalAddressInformation != undefined
        ? new StringResult(nativeBlinkIdResult.additionalAddressInformation)
        : undefined;

    /**
     * The one more additional address information of the document owner.
     *
     */
    this.additionalOptionalAddressInformation =
      nativeBlinkIdResult.additionalOptionalAddressInformation != undefined
        ? new StringResult(
            nativeBlinkIdResult.additionalOptionalAddressInformation
          )
        : undefined;

    /**
     * The place of birth of the document owner.
     *
     */
    this.placeOfBirth =
      nativeBlinkIdResult.placeOfBirth != undefined
        ? new StringResult(nativeBlinkIdResult.placeOfBirth)
        : undefined;

    /**
     * The nationality of the document owner.
     *
     */
    this.nationality =
      nativeBlinkIdResult.nationality != undefined
        ? new StringResult(nativeBlinkIdResult.nationality)
        : undefined;

    /**
     * The race of the document owner.
     *
     */
    this.race =
      nativeBlinkIdResult.race != undefined
        ? new StringResult(nativeBlinkIdResult.race)
        : undefined;

    /**
     * The religion of the document owner.
     *
     */
    this.religion =
      nativeBlinkIdResult.religion != undefined
        ? new StringResult(nativeBlinkIdResult.religion)
        : undefined;

    /**
     * The profession of the document owner.
     *
     */
    this.profession =
      nativeBlinkIdResult.profession != undefined
        ? new StringResult(nativeBlinkIdResult.profession)
        : undefined;

    /**
     * The marital status of the document owner.
     *
     */
    this.maritalStatus =
      nativeBlinkIdResult.maritalStatus != undefined
        ? new StringResult(nativeBlinkIdResult.maritalStatus)
        : undefined;

    /**
     * The residential status of the document owner.
     *
     */
    this.residentialStatus =
      nativeBlinkIdResult.residentialStatus != undefined
        ? new StringResult(nativeBlinkIdResult.residentialStatus)
        : undefined;

    /**
     * The employer of the document owner.
     *
     */
    this.employer =
      nativeBlinkIdResult.employer != undefined
        ? new StringResult(nativeBlinkIdResult.employer)
        : undefined;

    /**
     * The sex of the document owner.
     *
     */
    this.sex =
      nativeBlinkIdResult.sex != undefined
        ? new StringResult(nativeBlinkIdResult.sex)
        : undefined;

    /**
     * The sponsor of the document owner.
     *
     */
    this.sponsor =
      nativeBlinkIdResult.sponsor != undefined
        ? new StringResult(nativeBlinkIdResult.sponsor)
        : undefined;

    /**
     * The blood type of the document owner.
     *
     */
    this.bloodType =
      nativeBlinkIdResult.bloodType != undefined
        ? new StringResult(nativeBlinkIdResult.bloodType)
        : undefined;

    /**
     * The document number.
     *
     */
    this.documentNumber =
      nativeBlinkIdResult.documentNumber != undefined
        ? new StringResult(nativeBlinkIdResult.documentNumber)
        : undefined;

    /**
     * The personal identification number.
     *
     */
    this.personalIdNumber =
      nativeBlinkIdResult.personalIdNumber != undefined
        ? new StringResult(nativeBlinkIdResult.personalIdNumber)
        : undefined;

    /**
     * The additional number of the document.
     *
     */
    this.documentAdditionalNumber =
      nativeBlinkIdResult.documentAdditionalNumber != undefined
        ? new StringResult(nativeBlinkIdResult.documentAdditionalNumber)
        : undefined;

    /**
     * The one more additional number of the document.
     *
     */
    this.documentOptionalAdditionalNumber =
      nativeBlinkIdResult.documentOptionalAdditionalNumber != undefined
        ? new StringResult(nativeBlinkIdResult.documentOptionalAdditionalNumber)
        : undefined;

    /**
     * The additional personal identification number.
     *
     */
    this.additionalPersonalIdNumber =
      nativeBlinkIdResult.additionalPersonalIdNumber != undefined
        ? new StringResult(nativeBlinkIdResult.additionalPersonalIdNumber)
        : undefined;

    /**
     * The issuing authority of the document.
     *
     */
    this.issuingAuthority =
      nativeBlinkIdResult.issuingAuthority != undefined
        ? new StringResult(nativeBlinkIdResult.issuingAuthority)
        : undefined;

    /**
     * The transcription of the document subtype.
     *
     */
    this.documentSubtype =
      nativeBlinkIdResult.documentSubtype != undefined
        ? new StringResult(nativeBlinkIdResult.documentSubtype)
        : undefined;

    /**
     * The remarks on the residence permit.
     *
     */
    this.remarks =
      nativeBlinkIdResult.remarks != undefined
        ? new StringResult(nativeBlinkIdResult.remarks)
        : undefined;

    /**
     * The residence permit type.
     *
     */
    this.residencePermitType =
      nativeBlinkIdResult.residencePermitType != undefined
        ? new StringResult(nativeBlinkIdResult.residencePermitType)
        : undefined;

    /**
     * The manufacturing year.
     *
     */
    this.manufacturingYear =
      nativeBlinkIdResult.manufacturingYear != undefined
        ? new StringResult(nativeBlinkIdResult.manufacturingYear)
        : undefined;

    /**
     * The vehicle type.
     *
     */
    this.vehicleType =
      nativeBlinkIdResult.vehicleType != undefined
        ? new StringResult(nativeBlinkIdResult.vehicleType)
        : undefined;

    /**
     * The eligibility category.
     *
     */
    this.eligibilityCategory =
      nativeBlinkIdResult.eligibilityCategory != undefined
        ? new StringResult(nativeBlinkIdResult.eligibilityCategory)
        : undefined;

    /**
     * The specific document validity.
     *
     */
    this.specificDocumentValidity =
      nativeBlinkIdResult.specificDocumentValidity != undefined
        ? new StringResult(nativeBlinkIdResult.specificDocumentValidity)
        : undefined;

    /**
     * The visa type of the document.
     *
     */
    this.visaType =
      nativeBlinkIdResult.visaType != undefined
        ? new StringResult(nativeBlinkIdResult.visaType)
        : undefined;

    /**
     * The date of birth of the document owner.
     *
     */
    this.dateOfBirth =
      nativeBlinkIdResult.dateOfBirth != undefined
        ? new DateResult<StringResult>(nativeBlinkIdResult.dateOfBirth)
        : undefined;

    /**
     * The date of issue of the document.
     *
     */
    this.dateOfIssue =
      nativeBlinkIdResult.dateOfIssue != undefined
        ? new DateResult<StringResult>(nativeBlinkIdResult.dateOfIssue)
        : undefined;

    /**
     * The date of expiry of the document.
     *
     */
    this.dateOfExpiry =
      nativeBlinkIdResult.dateOfExpiry != undefined
        ? new DateResult<StringResult>(nativeBlinkIdResult.dateOfExpiry)
        : undefined;

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
      nativeBlinkIdResult.driverLicenseDetailedInfo != undefined
        ? new DriverLicenseDetailedInfo<StringResult>(
            nativeBlinkIdResult.driverLicenseDetailedInfo
          )
        : undefined;
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
      nativeBlinkIdResult.faceImage != undefined
        ? new DetailedCroppedImageResult(nativeBlinkIdResult.faceImage)
        : undefined;

    /**
     * Returns the cropped signature image with additional info.
     * Or `null` if the signature image is not available.
     *
     * See {@link DetailedCroppedImageResult} for more information.
     */
    this.signatureImage =
      nativeBlinkIdResult.signatureImage != undefined
        ? new DetailedCroppedImageResult(nativeBlinkIdResult.signatureImage)
        : undefined;
  }
}
