"use strict";

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

  /**
   * The document class information.
   *
   * See {@link DocumentClassInfo} for more information.
   */

  /**
   * Info on whether the data extracted from multiple sides matches.
   *
   * See {@link DataMatchResult} for more information.
   */

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
   * The address of the doicument owner.
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
   * The transcription of the document subtype.
   *
   */

  /**
   * The remarks on the residence permit.
   *
   */

  /**
   * The residence permit type.
   *
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
   * The visa type of the document.
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
   * The driver license detailed info.
   *
   * See {@link DriverLicenseDetailedInfo} for more information.
   */

  /**
   * The dependents info.
   *
   * See {@link DependentInfo} for more information.
   */

  /**
   * The results of scanning each side of the document.
   *
   * See {@link SingleSideScanningResult} for more information.
   */

  /**
   * Returns the input image for the first scanning side in the Base64 format.
   *
   * Or `null` if the input image is not available.
   */

  /**
   * Returns the input image for the second scanning side in the Base64 format.
   *
   * Or `null` if the input image is not available.
   */

  /**
   * Returns the input image containing parsable barcode.
   *
   * Or `null` if the barcode input image is not available.
   */

  /**
   * Returns the cropped document image for the first scanning side.
   *
   * Or `null` if the document image is not available.
   */

  /**
   * Returns the cropped document image for the second scanning side.
   *
   * Or `null` if the document image is not available.
   */

  /**
   * Returns the cropped face image with additional info.
   * Or `null` if the face image is not available.
   *
   * See {@link DetailedCroppedImageResult} for more information.
   */

  /**
   * Returns the cropped signature image with additional info.
   * Or `null` if the signature image is not available.
   *
   * See {@link DetailedCroppedImageResult} for more information.
   */

  /**
   * Represents the results of scanning a document.
   *
   * This class contains the results of scanning a document, including the extracted data
   * and images from the document.
   *
   */
  constructor(nativeBlinkIdResult) {
    /**
     * Scanning mode used to scan the current document.
     *
     * See {@link RecognitionMode} for more information.
     */
    this.recognitionMode = nativeBlinkIdResult.recognitionMode;
    /**
     * The document class information.
     *
     * See {@link DocumentClassInfo} for more information.
     */
    this.documentClassInfo = nativeBlinkIdResult.documentClassInfo;
    /**
     * Info on whether the data extracted from multiple sides matches.
     *
     * See {@link DataMatchResult} for more information.
     */
    this.dataMatchResult = nativeBlinkIdResult.dataMatchResult;

    /**
     * The first name of the document owner.
     *
     */
    this.firstName = nativeBlinkIdResult.firstName;

    /**
     * The last name of the document owner.
     *
     */
    this.lastName = nativeBlinkIdResult.lastName;

    /**
     * The full name of the document owner.
     *
     */
    this.fullName = nativeBlinkIdResult.firstName;

    /**
     * The additional name information of the document owner.
     *
     */
    this.additionalNameInformation = nativeBlinkIdResult.additionalNameInformation;

    /**
     * The localized name of the document owner.
     *
     */
    this.localizedName = nativeBlinkIdResult.localizedName;
    /**
     * The fathers name of the document owner.
     *
     */
    this.fathersName = nativeBlinkIdResult.fathersName;

    /**
     * The mothers name of the document owner.
     *
     */
    this.mothersName = nativeBlinkIdResult.mothersName;

    /**
     * The address of the doicument owner.
     *
     */
    this.address = nativeBlinkIdResult.address;

    /**
     * The additional address information of the document owner.
     *
     */
    this.additionalAddressInformation = nativeBlinkIdResult.additionalAddressInformation;

    /**
     * The one more additional address information of the document owner.
     *
     */
    this.additionalOptionalAddressInformation = nativeBlinkIdResult.additionalOptionalAddressInformation;

    /**
     * The place of birth of the document owner.
     *
     */
    this.placeOfBirth = nativeBlinkIdResult.placeOfBirth;

    /**
     * The nationality of the document owner.
     *
     */
    this.nationality = nativeBlinkIdResult.nationality;

    /**
     * The race of the document owner.
     *
     */
    this.race = nativeBlinkIdResult.race;

    /**
     * The religion of the document owner.
     *
     */
    this.religion = nativeBlinkIdResult.religion;

    /**
     * The profession of the document owner.
     *
     */
    this.profession = nativeBlinkIdResult.profession;

    /**
     * The marital status of the document owner.
     *
     */
    this.maritalStatus = nativeBlinkIdResult.maritalStatus;

    /**
     * The residential status of the document owner.
     *
     */
    this.residentialStatus = nativeBlinkIdResult.residentialStatus;
    /**
     * The employer of the document owner.
     *
     */
    this.employer = nativeBlinkIdResult.employer;

    /**
     * The sex of the document owner.
     *
     */
    this.sex = nativeBlinkIdResult.sex;

    /**
     * The sponsor of the document owner.
     *
     */
    this.sponsor = nativeBlinkIdResult.sponsor;

    /**
     * The blood type of the document owner.
     *
     */
    this.bloodType = nativeBlinkIdResult.bloodType;

    /**
     * The document number.
     *
     */
    this.documentNumber = nativeBlinkIdResult.documentNumber;

    /**
     * The personal identification number.
     *
     */
    this.personalIdNumber = nativeBlinkIdResult.personalIdNumber;

    /**
     * The additional number of the document.
     *
     */
    this.documentAdditionalNumber = nativeBlinkIdResult.documentAdditionalNumber;

    /**
     * The one more additional number of the document.
     *
     */
    this.documentOptionalAdditionalNumber = nativeBlinkIdResult.documentOptionalAdditionalNumber;

    /**
     * The additional personal identification number.
     *
     */
    this.additionalPersonalIdNumber = nativeBlinkIdResult.additionalPersonalIdNumber;

    /**
     * The issuing authority of the document.
     *
     */
    this.issuingAuthority = nativeBlinkIdResult.issuingAuthority;

    /**
     * The transcription of the document subtype.
     *
     */
    this.documentSubtype = nativeBlinkIdResult.documentSubtype;

    /**
     * The remarks on the residence permit.
     *
     */
    this.remarks = nativeBlinkIdResult.remarks;

    /**
     * The residence permit type.
     *
     */
    this.residencePermitType = nativeBlinkIdResult.residencePermitType;

    /**
     * The manufacturing year.
     *
     */
    this.manufacturingYear = nativeBlinkIdResult.manufacturingYear;
    /**
     * The vehicle type.
     *
     */
    this.vehicleType = nativeBlinkIdResult.vehicleType;

    /**
     * The eligibility category.
     *
     */
    this.eligibilityCategory = nativeBlinkIdResult.eligibilityCategory;

    /**
     * The specific document validity.
     *
     */
    this.specificDocumentValidity = nativeBlinkIdResult.specificDocumentValidity;

    /**
     * The visa type of the document.
     *
     */
    this.visaType = nativeBlinkIdResult.visaType;

    /**
     * The date of birth of the document owner.
     *
     */
    this.dateOfBirth = nativeBlinkIdResult.dateOfBirth;

    /**
     * The date of issue of the document.
     *
     */
    this.dateOfIssue = nativeBlinkIdResult.dateOfIssue;

    /**
     * The date of expiry of the document.
     *
     */
    this.dateOfExpiry = nativeBlinkIdResult.dateOfExpiry;

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
    this.driverLicenseDetailedInfo = nativeBlinkIdResult.driverLicenseDetailedInfo;
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
    this.faceImage = nativeBlinkIdResult.faceImage;

    /**
     * Returns the cropped signature image with additional info.
     * Or `null` if the signature image is not available.
     *
     * See {@link DetailedCroppedImageResult} for more information.
     */
    this.signatureImage = nativeBlinkIdResult.signatureImage;
  }
}
//# sourceMappingURL=blinkIdResult.js.map