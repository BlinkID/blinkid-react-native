//
//  BlinkIdSerializationUtilities.swift
//  BlinkidReactNative
//
//  Created by Milan Parađina on 22.05.2025..
//

import Foundation
import BlinkID

class BlinkIdSerializationUtilities {
  static func serializeBlinkIdScanningResult(_ scanningResult: BlinkIDScanningResult?) -> String? {
      var scanningResultDict = Dictionary<String, Any>()
      
      if let recognitionMode = scanningResult?.recognitionMode {
        scanningResultDict["recognitionMode"] = recognitionMode.rawValue
      }
      if let documentClassInfo = scanningResult?.documentClassInfo {
          scanningResultDict["documentClassInfo"] = serializeDocumentClassInfo(documentClassInfo)
      }
      if let dataMatchResult = scanningResult?.dataMatchResult {
          scanningResultDict["dataMatchResult"] = serializeDataMatchResult(dataMatchResult)
      }
      if let firstName = scanningResult?.firstName {
          scanningResultDict["firstName"] = serializeStringResult(firstName)
      }
      if let lastName = scanningResult?.lastName {
          scanningResultDict["lastName"] = serializeStringResult(lastName)
      }
      if let fullName = scanningResult?.fullName {
          scanningResultDict["fullName"] = serializeStringResult(fullName)
      }
      if let additionalNameInformation = scanningResult?.additionalNameInformation {
          scanningResultDict["additionalNameInformation"] = serializeStringResult(additionalNameInformation)
      }
      if let localizedName = scanningResult?.localizedName {
          scanningResultDict["localizedName"] = serializeStringResult(localizedName)
      }
      if let fathersName = scanningResult?.fathersName {
          scanningResultDict["fathersName"] = serializeStringResult(fathersName)
      }
      if let mothersName = scanningResult?.mothersName {
          scanningResultDict["mothersName"] = serializeStringResult(mothersName)
      }
      if let address = scanningResult?.address {
          scanningResultDict["address"] = serializeStringResult(address)
      }
      if let additionalAddressInformation = scanningResult?.additionalAddressInformation {
          scanningResultDict["additionalAddressInformation"] = serializeStringResult(additionalAddressInformation)
      }
      if let additionalOptionalAddressInformation = scanningResult?.additionalOptionalAddressInformation {
          scanningResultDict["additionalOptionalAddressInformation"] = serializeStringResult(additionalOptionalAddressInformation)
      }
      if let placeOfBirth = scanningResult?.placeOfBirth {
          scanningResultDict["placeOfBirth"] = serializeStringResult(placeOfBirth)
      }
      if let nationality = scanningResult?.nationality {
          scanningResultDict["nationality"] = serializeStringResult(nationality)
      }
      if let race = scanningResult?.race {
          scanningResultDict["race"] = serializeStringResult(race)
      }
      if let religion = scanningResult?.religion {
          scanningResultDict["religion"] = serializeStringResult(religion)
      }
      if let profession = scanningResult?.profession {
          scanningResultDict["profession"] = serializeStringResult(profession)
      }
      if let maritalStatus = scanningResult?.maritalStatus {
          scanningResultDict["maritalStatus"] = serializeStringResult(maritalStatus)
      }
      if let residentialStatus = scanningResult?.residentialStatus {
          scanningResultDict["residentialStatus"] = serializeStringResult(residentialStatus)
      }
      if let employer = scanningResult?.employer {
          scanningResultDict["employer"] = serializeStringResult(employer)
      }
      if let sex = scanningResult?.sex {
          scanningResultDict["sex"] = serializeStringResult(sex)
      }
      if let sponsor = scanningResult?.sponsor {
          scanningResultDict["sponsor"] = serializeStringResult(sponsor)
      }
      if let bloodType = scanningResult?.bloodType {
          scanningResultDict["bloodType"] = serializeStringResult(bloodType)
      }
      if let documentNumber = scanningResult?.documentNumber {
          scanningResultDict["documentNumber"] = serializeStringResult(documentNumber)
      }
      if let personalIdNumber = scanningResult?.personalIdNumber {
          scanningResultDict["personalIdNumber"] = serializeStringResult(personalIdNumber)
      }
      if let documentAdditionalNumber = scanningResult?.documentAdditionalNumber {
          scanningResultDict["documentAdditionalNumber"] = serializeStringResult(documentAdditionalNumber)
      }
      if let documentOptionalAdditionalNumber = scanningResult?.documentOptionalAdditionalNumber {
          scanningResultDict["documentOptionalAdditionalNumber"] = serializeStringResult(documentOptionalAdditionalNumber)
      }
      if let additionalPersonalIdNumber = scanningResult?.additionalPersonalIdNumber {
          scanningResultDict["additionalPersonalIdNumber"] = serializeStringResult(additionalPersonalIdNumber)
      }
      if let issuingAuthority = scanningResult?.issuingAuthority {
          scanningResultDict["issuingAuthority"] = serializeStringResult(issuingAuthority)
      }
      if let documentSubtype = scanningResult?.documentSubtype {
          scanningResultDict["documentSubtype"] = serializeStringResult(documentSubtype)
      }
      if let remarks = scanningResult?.remarks {
          scanningResultDict["remarks"] = serializeStringResult(remarks)
      }
      if let residencePermitType = scanningResult?.residencePermitType {
          scanningResultDict["residencePermitType"] = serializeStringResult(residencePermitType)
      }
      if let manufacturingYear = scanningResult?.manufacturingYear {
          scanningResultDict["manufacturingYear"] = serializeStringResult(manufacturingYear)
      }
      if let vehicleType = scanningResult?.vehicleType {
          scanningResultDict["vehicleType"] = serializeStringResult(vehicleType)
      }
      if let eligibilityCategory = scanningResult?.eligibilityCategory {
          scanningResultDict["eligibilityCategory"] = serializeStringResult(eligibilityCategory)
      }
      if let specificDocumentValidity = scanningResult?.specificDocumentValidity {
          scanningResultDict["specificDocumentValidity"] = serializeStringResult(specificDocumentValidity)
      }
      if let visaType = scanningResult?.visaType {
          scanningResultDict["visaType"] = serializeStringResult(visaType)
      }
      if let dateOfExpiryPermanent = scanningResult?.dateOfExpiryPermanent {
          scanningResultDict["dateOfExpiryPermanent"] = dateOfExpiryPermanent
      }
      if let dateOfBirth = scanningResult?.dateOfBirth {
          scanningResultDict["dateOfBirth"] = serializeDateResult(dateOfBirth)
      }
      if let dateOfIssue = scanningResult?.dateOfIssue {
          scanningResultDict["dateOfIssue"] = serializeDateResult(dateOfIssue)
      }
      if let dateOfExpiry = scanningResult?.dateOfExpiry {
          scanningResultDict["dateOfExpiry"] = serializeDateResult(dateOfExpiry)
      }
      if let driverLicenseDetailedInfo = scanningResult?.driverLicenseDetailedInfo {
          scanningResultDict["driverLicenseDetailedInfo"] = serializeDriverLicenseDetailedInfo(driverLicenseDetailedInfo)
      }
      if let dependentsInfo = scanningResult?.dependentsInfo {
          scanningResultDict["dependentsInfo"] = dependentsInfo.map(serializeDependentInfo(_:))
      }
      if let subResults = scanningResult?.subResults {
          scanningResultDict["subResults"] = subResults.map(serializeSingleSideScanningResult(_:))
      }
      if let firstInputImage = scanningResult?.getInputImage(scanningSide: .first) {
          scanningResultDict["firstInputImage"] = encodeImage(firstInputImage.uiImage)
      }
      if let secondInputImage = scanningResult?.getInputImage(scanningSide: .second) {
          scanningResultDict["secondInputImage"] = encodeImage(secondInputImage.uiImage)
      }
      if let barcodeInputImage = scanningResult?.getBarcodeInputImage() {
          scanningResultDict["barcodeInputImage"] = encodeImage(barcodeInputImage.uiImage)
      }
      if let firstDocumentImage = scanningResult?.getDocumentImage(scanningSide: .first) {
          scanningResultDict["firstDocumentImage"] = encodeImage(firstDocumentImage.uiImage)
      }
      if let secondDocumentImage = scanningResult?.getDocumentImage(scanningSide: .second) {
          scanningResultDict["secondDocumentImage"] = encodeImage(secondDocumentImage.uiImage)
      }
      if let faceImage = scanningResult?.getFaceImage() {
          scanningResultDict["faceImage"] = serializeDetailedCroppedImageResult(faceImage)
      }
      if let signatureImage = scanningResult?.getSignatureImage() {
          scanningResultDict["signatureImage"] = serializeDetailedCroppedImageResult(signatureImage)
      }
      return encodeToJson(scanningResultDict)
  }
  
  static func serializeDocumentClassInfo(_ documentClassInfo: BlinkIDSDK.DocumentClassInfo?) -> Dictionary<String, Any> {
      return
      [
          "country": documentClassInfo?.country.rawValue,
          "region": documentClassInfo?.region.rawValue,
          "documentType": documentClassInfo?.documentType.rawValue,
          "countryName": documentClassInfo?.countryName,
          "isoNumericCountryCode": documentClassInfo?.isoNumericCountryCode,
          "isoAlpha2CountryCode": documentClassInfo?.isoAlpha2CountryCode,
          "isoAlpha3CountryCode": documentClassInfo?.isoAlpha3CountryCode,
          "isEmpty": documentClassInfo?.isEmpty()
      ]
  }
  
  static func serializeDataMatchResult(_ dataMatchResult: DataMatchResult?) -> Dictionary<String, Any> {
      return [
          "states": dataMatchResult?.states.map(serializeDataMatchState(_:)),
          "overallState": deserializeDataMatchState(dataMatchResult?.overallState)
      ]
  }
  
  static func serializeDataMatchState(_ dataMatchState: FieldState?) -> Dictionary<String, Any> {
      return [
        "field": deserializeDataMatchField(dataMatchState?.fieldType),
          "state": deserializeDataMatchState(dataMatchState?.state)
      ]
  }
  
  static func serializeStringResult(_ stringResult: BlinkIDSDK.StringResult?) -> Dictionary<String, Any>{
      var stringResultDict: Dictionary<String, Any> = [
          "value": stringResult?.value,
          "latin": stringResult?.value(for: .latin),
          "arabic": stringResult?.value(for: .arabic),
          "cyrillic": stringResult?.value(for: .cyrillic),
          "greek": stringResult?.value(for: .greek)
      ]
              
      stringResultDict["location"] = [
          "latin": serializeRect(stringResult?.location(for: .latin)),
          "arabic": serializeRect(stringResult?.location(for: .arabic)),
          "cyrillic": serializeRect(stringResult?.location(for: .cyrillic)),
          "greek": serializeRect(stringResult?.location(for: .greek))
      ]
      
      var sideDict: Dictionary<String, Any> = [
        "latin": serializeScanningSide(stringResult?.side(for: .latin)),
          "arabic": serializeScanningSide(stringResult?.side(for: .arabic)),
          "cyrillic": serializeScanningSide(stringResult?.side(for: .cyrillic)),
          "greek": serializeScanningSide(stringResult?.side(for: .greek))
      ]
      stringResultDict["side"] = sideDict
      
      return stringResultDict
  }
  
  static func serializeRect(_ rectangle:  BlinkID.RectangleF?) -> Dictionary<String, Any> {
      return [
        "x": rectangle?.origin.x,
        "y": rectangle?.origin.y,
        "width": rectangle?.width,
        "height": rectangle?.height
      ]
  }
  
  
  
  static func serializeDateResult<T>(_ dateResult: DateResult<T>?) -> Dictionary<String, Any>? {
      return [
        "date": serializeSimpleDate(dateResult),
          "filledByDomainKnowledge": dateResult?.filledByDomainKnowledge,
          "successfullyParsed": dateResult?.successfullyParsed,
          "originalString": serializeStringType(dateResult?.originalString)
      ]
  }
  static func serializeSimpleDate<T>(_ dateResult: DateResult<T>?) -> Dictionary<String, Any>? {
    return [
      "day": dateResult?.day,
      "month": dateResult?.month,
      "year": dateResult?.year,
    ]
  }
  
  static func serializeDriverLicenseDetailedInfo<T>(_ driverLicenseDetailedInfo:  DriverLicenseDetailedInfo<T>?) -> Dictionary<String, Any>? {
      return [
          "conditions": serializeStringType(driverLicenseDetailedInfo?.conditions),
          "endorsements": serializeStringType(driverLicenseDetailedInfo?.endorsements),
          "restrictions": serializeStringType(driverLicenseDetailedInfo?.restrictions),
          "vehicleClass": serializeStringType(driverLicenseDetailedInfo?.vehicleClass),
          "vehicleClassesInfo": driverLicenseDetailedInfo?.vehicleClassesInfo?.map(serializeVehicleClassInfo(_:)),
      ]
  }
  
  static func serializeVehicleClassInfo<T>(_ vehicleClassInfo: VehicleClassInfo<T>?) -> Dictionary<String, Any> {
      return [
          "effectiveDate": serializeStringType(vehicleClassInfo?.effectiveDate),
          "expiryDate":  serializeStringType(vehicleClassInfo?.expiryDate),
          "licenceType": serializeStringType(vehicleClassInfo?.licenceType),
          "vehicleClass": serializeStringType(vehicleClassInfo?.vehicleClass as? String)
      ]
  }
  static func serializeDependentInfo(_ dependentInfo: DependentInfo?) -> Dictionary<String, Any> {
      return [
          "dateOfBirth": serializeDateResult(dependentInfo?.dateOfBirth),
          "documentNumber": serializeStringResult(dependentInfo?.documentNumber),
          "fullName": serializeStringResult(dependentInfo?.fullName),
          "sex": serializeStringResult(dependentInfo?.sex)
      ]
  }
  
  static func serializeSingleSideScanningResult(_ singleSideScanningResult: SingleSideScanningResult?) -> Dictionary<String, Any> {
      return [
              "barcode": serializeBarcodeResult(singleSideScanningResult?.barcode),
              "barcodeInputImage": encodeImage(singleSideScanningResult?.barcodeInputImage?.uiImage),
              "documentImage": encodeImage(singleSideScanningResult?.documentImage?.uiImage),
              "faceImage": serializeDetailedCroppedImageResult(singleSideScanningResult?.faceImage),
              "inputImage": encodeImage(singleSideScanningResult?.inputImage?.uiImage),
              "mrz": serializeMrzResult(singleSideScanningResult?.mrz),
              "signatureImage": serializeDetailedCroppedImageResult(singleSideScanningResult?.signatureImage),
              "viz": serializeVizResult(singleSideScanningResult?.viz)
          ]
  }
  
  static func serializeBarcodeResult(_ barcodeResult: BarcodeResult?) -> Dictionary<String, Any> {
      return [
          "additionalNameInformation": barcodeResult?.additionalNameInformation,
          "address": barcodeResult?.address,
          "addressDetailedInfo": serializeAddressDetailedInfo(barcodeResult?.addressDetailedInfo),
          "barcodeData": serializeBarcodeData(barcodeResult?.barcodeData),
          "dateOfBirth": serializeDateResult(barcodeResult?.dateOfBirth),
          "dateOfExpiry": serializeDateResult(barcodeResult?.dateOfExpiry),
          "dateOfIssue": serializeDateResult(barcodeResult?.dateOfIssue),
          "documentAdditionalNumber": barcodeResult?.documentAdditionalNumber,
          "documentNumber": barcodeResult?.documentNumber,
          "driverLicenseDetailedInfo": serializeDriverLicenseDetailedInfo(barcodeResult?.driverLicenseDetailedInfo),
          "employer": barcodeResult?.employer,
          "extendedElements": serializeBarcodeExtendedElements(barcodeResult?.extendedElements),
          "firstName": barcodeResult?.firstName,
          "fullName": barcodeResult?.fullName,
          "issuingAuthority": barcodeResult?.issuingAuthority,
          "lastName": barcodeResult?.lastName,
          "maritalStatus": barcodeResult?.maritalStatus,
          "middleName": barcodeResult?.middleName,
          "nationality": barcodeResult?.nationality,
          "personalIdNumber": barcodeResult?.personalIdNumber,
          "placeOfBirth": barcodeResult?.placeOfBirth,
          "profession": barcodeResult?.profession,
          "race": barcodeResult?.race,
          "religion": barcodeResult?.religion,
          "residentialStatus": barcodeResult?.residentialStatus,
          "sex": barcodeResult?.sex
      ]
  }
  
  static func serializeAddressDetailedInfo(_ addressDetailedInfo: AddressDetailedInfo?) -> Dictionary<String, Any> {
      return [
          "city": addressDetailedInfo?.city,
          "postalCode": addressDetailedInfo?.postalCode,
          "jurisdiction": addressDetailedInfo?.jurisdiction,
          "street": addressDetailedInfo?.street
      ]
  }
  static func serializeBarcodeData(_ barcodeData: BarcodeData?) -> Dictionary<String, Any> {
      return [
        "barcodeType": serializeBarcodeType(barcodeData?.barcodeType),
          "rawData": barcodeData?.rawData.base64EncodedString(),
          "stringData": barcodeData?.stringData,
          "uncertain": barcodeData?.uncertain
      ]
  }
  
  static func serializeBarcodeExtendedElements(_ barcodeExtendedElements: BarcodeElements?) -> [String: Any] {
      var elements = barcodeExtendedElements
      return [
          "addressCity": elements?.getValue(for: .addressCity),
          "addressJurisdictionCode": elements?.getValue(for: .addressJurisdictionCode),
          "addressPostalCode": elements?.getValue(for: .addressPostalCode),
          "addressStreet": elements?.getValue(for: .addressStreet),
          "addressStreet2": elements?.getValue(for: .addressStreet2),
          "akaDateOfBirth": elements?.getValue(for: .akaDateOfBirth),
          "akaFamilyName": elements?.getValue(for: .akaFamilyName),
          "akaFullName": elements?.getValue(for: .akaFullName),
          "akaGivenName": elements?.getValue(for: .akaGivenName),
          "akaMiddleName": elements?.getValue(for: .akaMiddleName),
          "akaPrefixName": elements?.getValue(for: .akaPrefixName),
          "akaSocialSecurityNumber": elements?.getValue(for: .akaSocialSecurityNumber),
          "akaSuffixName": elements?.getValue(for: .akaSuffixName),
          "auditInformation": elements?.getValue(for: .auditInformation),
          "cardRevisionDate": elements?.getValue(for: .cardRevisionDate),
          "complianceType": elements?.getValue(for: .complianceType),
          "countryIdentification": elements?.getValue(for: .countryIdentification),
          "customerFamilyName": elements?.getValue(for: .customerFamilyName),
          "customerIdNumber": elements?.getValue(for: .customerIdNumber),
          "customerFirstName": elements?.getValue(for: .customerFirstName),
          "customerFullName": elements?.getValue(for: .customerFullName),
          "customerMiddleName": elements?.getValue(for: .customerMiddleName),
          "dataDiscriminator": elements?.getValue(for: .dataDiscriminator),
          "dateOfBirth": elements?.getValue(for: .dateOfBirth),
          "documentDiscriminator": elements?.getValue(for: .documentDiscriminator),
          "documentExpirationDate": elements?.getValue(for: .documentExpirationDate),
          "documentExpirationMonth": elements?.getValue(for: .documentExpirationMonth),
          "documentIssueDate": elements?.getValue(for: .documentIssueDate),
          "documentNonexpiring": elements?.getValue(for: .documentNonexpiring),
          "documentType": elements?.getValue(for: .documentType),
          "eyeColor": elements?.getValue(for: .eyeColor),
          "familyNameTruncation": elements?.getValue(for: .familyNameTruncation),
          "federalCommercialVehicleCodes": elements?.getValue(for: .federalCommercialVehicleCodes),
          "firstNameTruncation": elements?.getValue(for: .firstNameTruncation),
          "fullAddress": elements?.getValue(for: .fullAddress),
          "hairColor": elements?.getValue(for: .hairColor),
          "height": elements?.getValue(for: .height),
          "heightIn": elements?.getValue(for: .heightIn),
          "heightCm": elements?.getValue(for: .heightCm),
          "issuerIdentificationNumber": elements?.getValue(for: .issuerIdentificationNumber),
          "issuingJurisdiction": elements?.getValue(for: .issuingJurisdiction),
          "issuingJurisdictionName": elements?.getValue(for: .issuingJurisdictionName),
          "jurisdictionEndorsementCodes": elements?.getValue(for: .jurisdictionEndorsementCodes),
          "jurisdictionEndorsmentCodeDescription": elements?.getValue(for: .jurisdictionEndorsmentCodeDescription),
          "jurisdictionRestrictionCodeDescription": elements?.getValue(for: .jurisdictionRestrictionCodeDescription),
          "jurisdictionRestrictionCodes": elements?.getValue(for: .jurisdictionRestrictionCodes),
          "jurisdictionVehicleClass": elements?.getValue(for: .jurisdictionVehicleClass),
          "jurisdictionVehicleClassificationDescription": elements?.getValue(for: .jurisdictionVehicleClassificationDescription),
          "jurisdictionVersionNumber": elements?.getValue(for: .jurisdictionVersionNumber),
          "limitedDurationDocument": elements?.getValue(for: .limitedDurationDocument),
          "medicalIndicator": elements?.getValue(for: .medicalIndicator),
          "middleNameTruncation": elements?.getValue(for: .middleNameTruncation),
          "namePrefix": elements?.getValue(for: .namePrefix),
          "nameSuffix": elements?.getValue(for: .nameSuffix),
          "nonResident": elements?.getValue(for: .nonResident),
          "numberOfDuplicates": elements?.getValue(for: .numberOfDuplicates),
          "organDonor": elements?.getValue(for: .organDonor),
          "permitExpirationDate": elements?.getValue(for: .permitExpirationDate),
          "permitIdentifier": elements?.getValue(for: .permitIdentifier),
          "permitIssueDate": elements?.getValue(for: .permitIssueDate),
          "placeOfBirth": elements?.getValue(for: .placeOfBirth),
          "raceEthnicity": elements?.getValue(for: .raceEthnicity),
          "residenceCity": elements?.getValue(for: .residenceCity),
          "residenceFullAddress": elements?.getValue(for: .residenceFullAddress),
          "residenceJurisdictionCode": elements?.getValue(for: .residenceJurisdictionCode),
          "residencePostalCode": elements?.getValue(for: .residencePostalCode),
          "residenceStreetAddress": elements?.getValue(for: .residenceStreetAddress),
          "residenceStreetAddress2": elements?.getValue(for: .residenceStreetAddress2),
          "securityVersion": elements?.getValue(for: .securityVersion),
          "sex": elements?.getValue(for: .sex),
          "socialSecurityNumber": elements?.getValue(for: .socialSecurityNumber),
          "standardEndorsementCode": elements?.getValue(for: .standardEndorsementCode),
          "standardRestrictionCode": elements?.getValue(for: .standardRestrictionCode),
          "standardVehicleClassification": elements?.getValue(for: .standardVehicleClassification),
          "standardVersionNumber": elements?.getValue(for: .standardVersionNumber),
          "under18": elements?.getValue(for: .under18),
          "under19": elements?.getValue(for: .under19),
          "under21": elements?.getValue(for: .under21),
          "uniqueCustomerId": elements?.getValue(for: .uniqueCustomerId),
          "veteran": elements?.getValue(for: .veteran),
          "weightKilograms": elements?.getValue(for: .weightKilograms),
          "weightPounds": elements?.getValue(for: .weightPounds),
          "weightRange": elements?.getValue(for: .weightRange),
      ]
  }

  
  static func serializeStringType<T>(_ value: T) -> Any? {
      if let stringResult = value as? BlinkID.BlinkIDSDK.StringResult {
          return serializeStringResult(stringResult)
      } else if let str = value as? Swift.String {
          return str
      }
      return nil
  }
  
  static func encodeImage(_ image: UIImage?) -> String? {
      return image?.jpegData(compressionQuality: 1.0)?.base64EncodedString()
  }
  static func serializeMrzResult(_ mrzResult: MRZResult?) -> Dictionary<String, Any> {
      return [
          "dateOfBirth": serializeDateResult(mrzResult?.dateOfBirth),
          "dateOfExpiry": serializeDateResult(mrzResult?.dateOfExpiry),
          "documentCode": mrzResult?.documentCode,
          "documentNumber": mrzResult?.documentNumber,
          "documentType": serializeMrzDocumentType(mrzResult?.documentType),
          "gender": mrzResult?.gender,
          "issuer": mrzResult?.issuer,
          "issuerName": mrzResult?.issuerName,
          "nationality": mrzResult?.nationality,
          "nationalityName": mrzResult?.nationalityName,
          "opt1": mrzResult?.opt1,
          "opt2": mrzResult?.opt2,
          "primaryID": mrzResult?.primaryID,
          "rawMRZString": mrzResult?.rawMRZString,
          "sanitizedDocumentCode": mrzResult?.sanitizedDocumentCode,
          "sanitizedDocumentNumber": mrzResult?.sanitizedDocumentNumber,
          "sanitizedIssuer": mrzResult?.sanitizedIssuer,
          "sanitizedNationality": mrzResult?.sanitizedNationality,
          "sanitizedOpt1": mrzResult?.sanitizedOpt1,
          "sanitizedOpt2": mrzResult?.sanitizedOpt2,
          "secondaryID": mrzResult?.secondaryID,
          "verified": mrzResult?.verified
      ]
  }
  
  static func serializeVizResult(_ vizResult: VIZResult?) -> Dictionary<String, Any> {
      
      return
       [
          "additionalAddressInformation": serializeStringResult(vizResult?.additionalAddressInformation),
          "additionalNameInformation": serializeStringResult(vizResult?.additionalNameInformation),
          "additionalOptionalAddressInformation": serializeStringResult(vizResult?.additionalOptionalAddressInformation),
          "additionalPersonalIdNumber": serializeStringResult(vizResult?.additionalPersonalIdNumber),
          "address": serializeStringResult(vizResult?.address),
          "bloodType": serializeStringResult(vizResult?.bloodType),
          "dateOfBirth": serializeDateResult(vizResult?.dateOfBirth),
          "dateOfExpiry": serializeDateResult(vizResult?.dateOfExpiry),
          "dateOfExpiryPermanent": vizResult?.dateOfExpiryPermanent,
          "dateOfIssue": serializeDateResult(vizResult?.dateOfIssue),
          "dependentsInfo": vizResult?.dependentsInfo.compactMap(serializeDependentInfo(_:)),
          "documentAdditionalNumber": serializeStringResult(vizResult?.documentAdditionalNumber),
          "documentNumber": serializeStringResult(vizResult?.documentNumber),
          "documentOptionalAdditionalNumber": serializeStringResult(vizResult?.documentOptionalAdditionalNumber),
          "documentSubtype": serializeStringResult(vizResult?.documentSubtype),
          "driverLicenseDetailedInfo": serializeDriverLicenseDetailedInfo(vizResult?.driverLicenseDetailedInfo),
          "eligibilityCategory": serializeStringResult(vizResult?.eligibilityCategory),
          "employer": serializeStringResult(vizResult?.employer),
          "fathersName": serializeStringResult(vizResult?.fathersName),
          "firstName": serializeStringResult(vizResult?.firstName),
          "fullName": serializeStringResult(vizResult?.fullName),
          "issuingAuthority": serializeStringResult(vizResult?.issuingAuthority),
          "lastName": serializeStringResult(vizResult?.lastName),
          "localizedName": serializeStringResult(vizResult?.localizedName),
          "manufacturingYear": serializeStringResult(vizResult?.manufacturingYear),
          "maritalStatus": serializeStringResult(vizResult?.maritalStatus),
          "mothersName": serializeStringResult(vizResult?.mothersName),
          "nationality": serializeStringResult(vizResult?.nationality),
          "personalIdNumber": serializeStringResult(vizResult?.personalIdNumber),
          "placeOfBirth": serializeStringResult(vizResult?.placeOfBirth),
          "profession": serializeStringResult(vizResult?.profession),
          "race": serializeStringResult(vizResult?.race),
          "religion": serializeStringResult(vizResult?.religion),
          "remarks": serializeStringResult(vizResult?.remarks),
          "residencePermitType": serializeStringResult(vizResult?.residencePermitType),
          "residentialStatus": serializeStringResult(vizResult?.residentialStatus),
          "sex": serializeStringResult(vizResult?.sex),
          "specificDocumentValidity": serializeStringResult(vizResult?.specificDocumentValidity),
          "sponsor": serializeStringResult(vizResult?.sponsor),
          "vehicleOwner": serializeStringResult(vizResult?.vehicleOwner),
          "vehicleType": serializeStringResult(vizResult?.vehicleType),
          "visaType": serializeStringResult(vizResult?.visaType)
      ]
  }
  
  static func serializeDetailedCroppedImageResult(_ detailedcroppedImageResult: DetailedCroppedImageResult?) -> Dictionary<String, Any> {
      return [
          "location": serializeRect(detailedcroppedImageResult?.location),
          "side": serializeScanningSide(detailedcroppedImageResult?.side),
          "image": encodeImage(detailedcroppedImageResult?.uiImage)
      ]
  }
  
  static func deserializeDataMatchState(_ state: DataMatchState?) -> Int {
      switch state {
      case .notPerformed:
          return 0
      case .failed:
          return 1
      case .success:
          return 2
      @unknown default:
          return 0
      }
  }
  
  static func deserializeDataMatchField(_ field: DataMatchFieldType?) -> Int? {
      switch field {
      case .dateOfBirth:
          return 0
      case .dateOfExpiry:
          return 1
      case .documentNumber:
          return 2
      case .documentAdditionalNumber:
          return 3
      case .documentOptionalAdditionalNumber:
          return 4
      case .personalIdNumber:
          return 5
      @unknown default:
          return nil
      }
  }
  
  static func serializeScanningSide(_ side: ScanningSide?) -> Int? {
      switch side {
      case .first:
          return 0
      case .second:
          return 1
      @unknown default:
          return nil
      }
  }
  
  static func serializeBarcodeType(_ barcodeType: BarcodeType?) -> Int? {
      switch barcodeType {
      case .none:
          return 0
      case .qrCode:
          return 1
      case .dataMatrix:
          return 2
      case .upce:
          return 3
      case .upca:
          return 4
      case .ean8:
          return 5
      case .ean13:
          return 6
      case .code128:
          return 7
      case .code39:
          return 8
      case .itf:
          return 9
      case .aztec:
          return 10
      case .pdf417:
          return 11
      @unknown default:
          return 0
      }
  }
  
  static func serializeMrzDocumentType(_ documentType: MRZDocumentType?) -> Int? {
      switch documentType {
      case .unknown:
          return 0
      case .identityCard:
          return 1
      case .passport:
          return 2
      case .visa:
          return 3
      case .greenCard:
          return 4
      case .mysPassIMM13P:
          return 5
      case .driverLicense:
          return 6
      case .internalTravelDocument:
          return 7
      case .borderCrossingCard:
          return 8
      @unknown default:
          return nil
      }
  }
  
  static func encodeToJson(_ dict: Dictionary<String, Any>) -> String? {
      do {
          let jsonData = try JSONSerialization.data(withJSONObject: dict, options: .prettyPrinted)
          let resultForJson = String(data: jsonData, encoding: .utf8)
          return resultForJson
      } catch {
          return ""
      }
  }
}
