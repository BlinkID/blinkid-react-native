package com.blinkidreactnative

import android.graphics.Bitmap
import com.microblink.blinkid.core.result.AddressDetailedInfo
import com.microblink.blinkid.core.result.AlphabetType
import com.microblink.blinkid.core.result.DataMatchFieldState
import com.microblink.blinkid.core.result.DataMatchResult
import com.microblink.blinkid.core.result.DateResult
import com.microblink.blinkid.core.result.DependentInfo
import com.microblink.blinkid.core.result.DriverLicenseDetailedInfo
import com.microblink.blinkid.core.result.Rectangle
import com.microblink.blinkid.core.result.SingleSideScanningResult
import com.microblink.blinkid.core.result.StringResult
import com.microblink.blinkid.core.result.VehicleClassInfo
import com.microblink.blinkid.core.result.barcode.BarcodeData
import com.microblink.blinkid.core.result.barcode.BarcodeResult
import com.microblink.blinkid.core.result.classinfo.DocumentClassInfo
import com.microblink.blinkid.core.result.image.DetailedCroppedImageResult
import com.microblink.blinkid.core.result.mrz.MrzResult
import com.microblink.blinkid.core.result.viz.VizResult
import com.microblink.blinkid.core.session.BlinkIdScanningResult
import org.json.JSONObject
import java.io.ByteArrayOutputStream
import android.util.Base64
import com.microblink.blinkid.core.result.ScanningSide
import com.microblink.blinkid.core.result.barcode.BarcodeElement
import kotlinx.serialization.json.Json
import org.json.JSONArray

object BlinkIdSerializationUtils {
  fun serializeBlinkIdScanningResult(scanningResult: BlinkIdScanningResult?): String? {
    val scanningResultJson: JSONObject = JSONObject()

    scanningResult?.mode.let {
      scanningResultJson.put("recognitionMode", it?.name)
    }
    scanningResult?.documentClassInfo?.let {
      scanningResultJson.put("documentClassInfo", serializeDocumentClassInfo(it))
    }
    scanningResult?.dataMatchResult?.let {
      scanningResultJson.put("dataMatchResult", serializeDataMatchResult(it))
    }
    scanningResult?.firstName?.let {
      scanningResultJson.put("firstName", serializeStringResult(it))
    }
    scanningResult?.lastName?.let {
      scanningResultJson.put("lastName", serializeStringResult(it))
    }
    scanningResult?.fullName?.let {
      scanningResultJson.put("fullName", serializeStringResult(it))
    }
    scanningResult?.additionalNameInformation?.let {
      scanningResultJson.put("additionalNameInformation", serializeStringResult(it))
    }
    scanningResult?.localizedName?.let {
      scanningResultJson.put("localizedName", serializeStringResult(it))
    }
    scanningResult?.fathersName?.let {
      scanningResultJson.put("fathersName", serializeStringResult(it))
    }
    scanningResult?.mothersName?.let {
      scanningResultJson.put("mothersName", serializeStringResult(it))
    }
    scanningResult?.address?.let {
      scanningResultJson.put("address", serializeStringResult(it))
    }
    scanningResult?.additionalAddressInformation?.let {
      scanningResultJson.put("additionalAddressInformation", serializeStringResult(it))
    }
    scanningResult?.additionalOptionalAddressInformation?.let {
      scanningResultJson.put("additionalOptionalAddressInformation", serializeStringResult(it))
    }
    scanningResult?.placeOfBirth?.let {
      scanningResultJson.put("placeOfBirth", serializeStringResult(it))
    }
    scanningResult?.nationality?.let {
      scanningResultJson.put("nationality", serializeStringResult(it))
    }
    scanningResult?.race?.let {
      scanningResultJson.put("race", serializeStringResult(it))
    }
    scanningResult?.religion?.let {
      scanningResultJson.put("religion", serializeStringResult(it))
    }
    scanningResult?.profession?.let {
      scanningResultJson.put("profession", serializeStringResult(it))
    }
    scanningResult?.maritalStatus?.let {
      scanningResultJson.put("maritalStatus", serializeStringResult(it))
    }
    scanningResult?.residentialStatus?.let {
      scanningResultJson.put("residentialStatus", serializeStringResult(it))
    }
    scanningResult?.employer?.let {
      scanningResultJson.put("employer", serializeStringResult(it))
    }
    scanningResult?.sex?.let {
      scanningResultJson.put("sex", serializeStringResult(it))
    }
    scanningResult?.sponsor?.let {
      scanningResultJson.put("sponsor", serializeStringResult(it))
    }
    scanningResult?.bloodType?.let {
      scanningResultJson.put("bloodType", serializeStringResult(it))
    }
    scanningResult?.documentNumber?.let {
      scanningResultJson.put("documentNumber", serializeStringResult(it))
    }
    scanningResult?.personalIdNumber?.let {
      scanningResultJson.put("personalIdNumber", serializeStringResult(it))
    }
    scanningResult?.documentAdditionalNumber?.let {
      scanningResultJson.put("documentAdditionalNumber", serializeStringResult(it))
    }
    scanningResult?.documentOptionalAdditionalNumber?.let {
      scanningResultJson.put("documentOptionalAdditionalNumber", serializeStringResult(it))
    }
    scanningResult?.additionalPersonalIdNumber?.let {
      scanningResultJson.put("additionalPersonalIdNumber", serializeStringResult(it))
    }
    scanningResult?.issuingAuthority?.let {
      scanningResultJson.put("issuingAuthority", serializeStringResult(it))
    }
    scanningResult?.documentSubtype?.let {
      scanningResultJson.put("documentSubtype", serializeStringResult(it))
    }
    scanningResult?.remarks?.let {
      scanningResultJson.put("remarks", serializeStringResult(it))
    }
    scanningResult?.residencePermitType?.let {
      scanningResultJson.put("residencePermitType", serializeStringResult(it))
    }
    scanningResult?.manufacturingYear?.let {
      scanningResultJson.put("manufacturingYear", serializeStringResult(it))
    }
    scanningResult?.vehicleType?.let {
      scanningResultJson.put("vehicleType", serializeStringResult(it))
    }
    scanningResult?.eligibilityCategory?.let {
      scanningResultJson.put("eligibilityCategory", serializeStringResult(it))
    }
    scanningResult?.specificDocumentValidity?.let {
      scanningResultJson.put("specificDocumentValidity", serializeStringResult(it))
    }
    scanningResult?.visaType?.let {
      scanningResultJson.put("visaType", serializeStringResult(it))
    }

    scanningResult?.dateOfBirth?.let {
      scanningResultJson.put("dateOfBirth", serializeDateResult(it))
    }
    scanningResult?.dateOfIssue?.let {
      scanningResultJson.put("dateOfIssue", serializeDateResult(it))
    }
    scanningResult?.dateOfExpiry?.let {
      scanningResultJson.put("dateOfExpiry", serializeDateResult(it))
    }
    scanningResult?.dateOfExpiryPermanent?.let {
      scanningResultJson.put("dateOfExpiryPermanent", it)
    }
    scanningResult?.driverLicenseDetailedInfo?.let {
      scanningResultJson.put("driverLicenseDetailedInfo", serializeDriverLicenseDetailedInfo(it))
    }
    scanningResult?.dependentsInfo?.let {
      scanningResultJson.put(
        "dependentsInfo",
        JSONArray(it.map { dependentInfo -> serializeDependentInfo(dependentInfo) })
      )
    }
    scanningResult?.subResults?.let {
      scanningResultJson.put(
        "subResults",
        JSONArray(it.map { subResult -> serializeSubResult(subResult) })
      )
    }

    scanningResult?.inputImage(ScanningSide.First)?.let {
      scanningResultJson.put("firstInputImage", encodeBase64Image(it.bitmap))
    }
    scanningResult?.inputImage(ScanningSide.Second)?.let {
      scanningResultJson.put("secondInputImage", encodeBase64Image(it.bitmap))
    }
    scanningResult?.barcodeInputImage()?.let {
      scanningResultJson.put("barcodeInputImage", encodeBase64Image(it.bitmap))
    }
    scanningResult?.documentImage(ScanningSide.First)?.let {
      scanningResultJson.put("firstDocumentImage", encodeBase64Image(it.bitmap))
    }
    scanningResult?.documentImage(ScanningSide.Second)?.let {
      scanningResultJson.put("secondDocumentImage", encodeBase64Image(it.bitmap))
    }
    scanningResult?.faceImage()?.let {
      scanningResultJson.put("faceImage", serializeDetailedCroppedImageResult(it))
    }
    scanningResult?.signatureImage()?.let {
      scanningResultJson.put("signatureImage", serializeDetailedCroppedImageResult(it))
    }

    return scanningResultJson.toString()
  }

  private fun <T> serializeDateResult(dateResult: DateResult<T>?): JSONObject? {
    val dateResultJson= JSONObject()
    dateResult?.day?.let {
      dateResultJson.put("day", it)
    }
    dateResult?.month?.let {
      dateResultJson.put("month", it)
    }
    dateResult?.year?.let {
      dateResultJson.put("year", it)
    }
    dateResultJson.put("filledByDomainKnowledge", dateResult?.filledByDomainKnowledge)
    dateResultJson.put("successfullyParsed", dateResult?.successfullyParsed)
    dateResultJson.put("originalString", dateResult?.originalString)
    return dateResultJson
  }

  private fun serializeDocumentClassInfo(documentClassInfo: DocumentClassInfo): JSONObject? {
    val documentClassInfoJson = JSONObject()
    documentClassInfo.country?.name?.let {
      documentClassInfoJson.put("country", it.replaceFirstChar { char -> char.lowercase() })
    }
    documentClassInfo.region?.name?.let {
      documentClassInfoJson.put("region", it.replaceFirstChar { char -> char.lowercase() })
    }
    documentClassInfo.type?.name?.let {
      documentClassInfoJson.put("documentType", it.replaceFirstChar { char -> char.lowercase() })
    }
    documentClassInfo.countryName?.let {
      documentClassInfoJson.put("countryName", it)
    }
    documentClassInfo.isoAlpha2CountryCode?.let {
      documentClassInfoJson.put("isoAlpha2CountryCode", it)
    }
    documentClassInfo.isoAlpha3CountryCode?.let {
      documentClassInfoJson.put("isoAlpha3CountryCode", it)
    }
    return documentClassInfoJson
  }

  private fun serializeDataMatchResult(dataMatchResult: DataMatchResult): JSONObject {
    val dataMatchResultJson = JSONObject()

    val statesArray = JSONArray()
    dataMatchResult.statePerField.forEach {
      statesArray.put(serializeDataMatchFiled(it))
    }

    dataMatchResultJson.put("states", statesArray)
    dataMatchResultJson.put("overallState", dataMatchResult.overallState.ordinal)

    return dataMatchResultJson
  }

  private fun serializeDataMatchFiled(dataMatchField: DataMatchFieldState): JSONObject {
    val dataMatchFieldJson = JSONObject()
    dataMatchFieldJson.put("field", dataMatchField.fieldType.ordinal)
    dataMatchFieldJson.put("state", dataMatchField.state.ordinal)
    return dataMatchFieldJson
  }

  private fun serializeStringResult(stringResult: StringResult): JSONObject? {
    val stringResultJson = JSONObject()
    stringResultJson.put("value", stringResult.value(AlphabetType.Latin))
    stringResultJson.put("latin", stringResult.value(AlphabetType.Latin))
    stringResultJson.put("arabic", stringResult.value(AlphabetType.Arabic))
    stringResultJson.put("cyrillic", stringResult.value(AlphabetType.Cyrillic))
    stringResultJson.put("greek", stringResult.value(AlphabetType.Greek))

    val locationJson = JSONObject()
    stringResult.location(AlphabetType.Latin)?.let {
      locationJson.put("latin", serializeLocation(it))
    }
    stringResult.location(AlphabetType.Arabic)?.let {
      locationJson.put("arabic", serializeLocation(it))
    }
    stringResult.location(AlphabetType.Cyrillic)?.let {
      locationJson.put("cyrillic", serializeLocation(it))
    }
    stringResult.location(AlphabetType.Greek)?.let {
      locationJson.put("greek", serializeLocation(it))
    }
    stringResultJson.put("location", locationJson)

    val sideJson = JSONObject()
    stringResult.side(AlphabetType.Latin)?.let {
      sideJson.put("latin", it.ordinal)
    }
    stringResult.side(AlphabetType.Arabic)?.let {
      sideJson.put("arabic", it.ordinal)
    }
    stringResult.side(AlphabetType.Cyrillic)?.let {
      sideJson.put("cyrillic", it.ordinal)
    }
    stringResult.side(AlphabetType.Greek)?.let {
      sideJson.put("greek", it.ordinal)
    }
    stringResultJson.put("side", sideJson)

    return stringResultJson
  }

  private fun serializeLocation(rectangle: Rectangle): JSONObject? {
    val locationJson = JSONObject()
    locationJson.put("x", rectangle.x.toDouble())
    locationJson.put("y", rectangle.y.toDouble())
    locationJson.put("width", rectangle.width.toDouble())
    locationJson.put("height", rectangle.height.toDouble())
    return locationJson
  }

  private fun <T> serializeDriverLicenseDetailedInfo(
    driverLicenseDetailedInfo: DriverLicenseDetailedInfo<T>?
  ): JSONObject {
    val json = JSONObject()

    json.put("conditions", serializeStringType(driverLicenseDetailedInfo?.conditions))
    json.put("endorsements", serializeStringType(driverLicenseDetailedInfo?.endorsements))
    json.put("restrictions", serializeStringType(driverLicenseDetailedInfo?.restrictions))
    json.put("vehicleClass", serializeStringType(driverLicenseDetailedInfo?.vehicleClass))

    driverLicenseDetailedInfo?.vehicleClassesInfo?.let { vehicleClasses ->
      val array = JSONArray()
      for (info in vehicleClasses) {
        array.put(serializeVehicleClassInfo(info))
      }
      json.put("vehicleClassesInfo", array)
    }

    return json
  }

  private fun <T> serializeVehicleClassInfo(vehicleClassInfo: VehicleClassInfo<T>): JSONObject {
    val vehicleClassInfoJson = JSONObject()
    vehicleClassInfoJson.put("effectiveDate", serializeStringType(vehicleClassInfo.effectiveDate))
    vehicleClassInfoJson.put("expiryDate", serializeStringType(vehicleClassInfo.expiryDate))
    vehicleClassInfoJson.put("licenceType", serializeStringType(vehicleClassInfo.licenceType))
    vehicleClassInfoJson.put("vehicleClass", serializeStringType(vehicleClassInfo.vehicleClass))
    return vehicleClassInfoJson
  }

  private fun serializeDependentInfo(dependentInfo: DependentInfo): JSONObject {
    val dependentInfoJson = JSONObject()

    dependentInfo.fullName?.let {
      dependentInfoJson.put("fullName", serializeStringResult(it))
    }
    dependentInfo.sex?.let {
      dependentInfoJson.put("sex", serializeStringResult(it))
    }
    dependentInfo.dateOfBirth?.let {
      dependentInfoJson.put("dateOfBirth", serializeDateResult(it))
    }

    dependentInfo.documentNumber?.let {
      dependentInfoJson.put("documentNumber", serializeStringResult(it))
    }

    return dependentInfoJson
  }

  private fun serializeSubResult(subResult: SingleSideScanningResult): JSONObject {
    val subResultJson = JSONObject()
    subResultJson.put("barcode", serializeBarcodeResult(subResult.barcode))
    subResultJson.put("barcodeInputImage", encodeBase64Image(subResult.barcodeInputImage?.bitmap))
    subResultJson.put("documentImage", encodeBase64Image(subResult.documentImage?.bitmap))
    subResultJson.put("faceImage", serializeDetailedCroppedImageResult(subResult.faceImage))
    subResultJson.put("inputImage", encodeBase64Image(subResult.inputImage?.bitmap))
    subResultJson.put("mrz", serializeMrzResult(subResult.mrz))
    subResultJson.put("signatureImage", serializeDetailedCroppedImageResult(subResult.signatureImage))
    subResultJson.put("viz", serializeVizResult(subResult.viz))
    return subResultJson
  }

  private fun serializeBarcodeResult(barcodeResult: BarcodeResult?): JSONObject {
    val barcodeResultJson = JSONObject()
    barcodeResultJson.put("additionalNameInformation", barcodeResult?.additionalNameInformation)
    barcodeResultJson.put("address", barcodeResult?.address)
    barcodeResultJson.put("addressDetailedInfo", serializeAddressDetailedInfo(barcodeResult?.addressDetailedInfo))
    barcodeResultJson.put("barcodeData", serializeBarcodeData(barcodeResult?.barcodeData))
    barcodeResultJson.put("dateOfBirth", serializeDateResult(barcodeResult?.dateOfBirth))
    barcodeResultJson.put("dateOfExpiry", serializeDateResult(barcodeResult?.dateOfExpiry))
    barcodeResultJson.put("dateOfIssue", serializeDateResult(barcodeResult?.dateOfIssue))
    barcodeResultJson.put("documentAdditionalNumber", barcodeResult?.documentAdditionalNumber)
    barcodeResultJson.put("documentNumber", barcodeResult?.documentNumber)
    barcodeResultJson.put("driverLicenseDetailedInfo", serializeDriverLicenseDetailedInfo(barcodeResult?.driverLicenseDetailedInfo))
    barcodeResultJson.put("employer", barcodeResult?.employer)
    barcodeResultJson.put("firstName",  barcodeResult?.firstName)
    barcodeResultJson.put("fullName", barcodeResult?.fullName)
    barcodeResultJson.put("issuingAuthority", barcodeResult?.issuingAuthority)
    barcodeResultJson.put("lastName", barcodeResult?.lastName)
    barcodeResultJson.put("maritalStatus", barcodeResult?.maritalStatus)
    barcodeResultJson.put("middleName", barcodeResult?.middleName)
    barcodeResultJson.put("nationality", barcodeResult?.nationality)
    barcodeResultJson.put("personalIdNumber", barcodeResult?.personalIdNumber)
    barcodeResultJson.put("placeOfBirth", barcodeResult?.placeOfBirth)
    barcodeResultJson.put("profession", barcodeResult?.profession)
    barcodeResultJson.put("race", barcodeResult?.race)
    barcodeResultJson.put("religion", barcodeResult?.religion)
    barcodeResultJson.put("residentialStatus", barcodeResult?.residentialStatus)
    barcodeResultJson.put("sex", barcodeResult?.sex)
    barcodeResultJson.put("extendedElements", serializeBarcodeExtendedElements(barcodeResult?.extendedElements?.barcodeElements))

   return barcodeResultJson
  }

  private fun serializeAddressDetailedInfo(addressDetailedInfo: AddressDetailedInfo?): JSONObject {
    val addressDetailedInfoJson = JSONObject()
    addressDetailedInfoJson.put("city", addressDetailedInfo?.city)
    addressDetailedInfoJson.put("postalCode", addressDetailedInfo?.postalCode)
    addressDetailedInfoJson.put("jurisdiction", addressDetailedInfo?.jurisdiction)
    addressDetailedInfoJson.put("street", addressDetailedInfo?.street)

    return addressDetailedInfoJson
  }

  private fun serializeBarcodeData(barcodeData: BarcodeData?): JSONObject {
    val barcodeDataJson = JSONObject()
    barcodeDataJson.put("barcodeType", barcodeData?.barcodeType?.ordinal)
    barcodeDataJson.put("rawData", barcodeData?.rawData.toString())
    barcodeDataJson.put("stringData", barcodeData?.stringData)
    barcodeDataJson.put("uncertain", barcodeData?.uncertain)

    return barcodeDataJson
  }

  private fun serializeMrzResult(mrzResult: MrzResult?): JSONObject {
    val mrzResultJson = JSONObject()
    mrzResultJson.put("dateOfBirth", serializeDateResult(mrzResult?.dateOfBirth))
    mrzResultJson.put("dateOfExpiry", serializeDateResult(mrzResult?.dateOfExpiry))
    mrzResultJson.put("documentCode", mrzResult?.documentCode)
    mrzResultJson.put("documentNumber", mrzResult?.documentNumber)
    mrzResultJson.put("documentType", mrzResult?.documentType?.ordinal)
    mrzResultJson.put("gender", mrzResult?.gender)
    mrzResultJson.put("issuer", mrzResult?.issuer)
    mrzResultJson.put("issuerName", mrzResult?.issuerName)
    mrzResultJson.put("nationality", mrzResult?.nationality)
    mrzResultJson.put("nationalityName", mrzResult?.nationalityName)
    mrzResultJson.put("opt1", mrzResult?.opt1)
    mrzResultJson.put("opt2", mrzResult?.opt2)
    mrzResultJson.put("primaryID", mrzResult?.primaryID)
    mrzResultJson.put("rawMrzString", mrzResult?.rawMRZString)
    mrzResultJson.put("sanitizedDocumentCode", mrzResult?.sanitizedDocumentCode)
    mrzResultJson.put("sanitizedDocumentNumber", mrzResult?.sanitizedDocumentNumber)
    mrzResultJson.put("sanitizedIssuer", mrzResult?.sanitizedIssuer)
    mrzResultJson.put("sanitizedNationality", mrzResult?.sanitizedNationality)
    mrzResultJson.put("sanitizedOpt1", mrzResult?.sanitizedOpt1)
    mrzResultJson.put("sanitizedOpt2", mrzResult?.sanitizedOpt2)
    mrzResultJson.put("secondaryID", mrzResult?.secondaryID)
    mrzResultJson.put("verified", mrzResult?.verified)

    return mrzResultJson
  }

  private fun serializeVizResult(vizResult: VizResult?): JSONObject {
    val vizResultJson = JSONObject()

    vizResult?.additionalAddressInformation?.let {
      vizResultJson.put("additionalAddressInformation", serializeStringResult(it))
    }
    vizResult?.additionalNameInformation?.let {
      vizResultJson.put("additionalNameInformation", serializeStringResult(it))
    }
    vizResult?.additionalOptionalAddressInformation?.let {
      vizResultJson.put("additionalOptionalAddressInformation", serializeStringResult(it))
    }
    vizResult?.additionalPersonalIdNumber?.let {
      vizResultJson.put("additionalPersonalIdNumber", serializeStringResult(it))
    }
    vizResult?.address?.let {
      vizResultJson.put("address", serializeStringResult(it))
    }
    vizResult?.bloodType?.let {
      vizResultJson.put("bloodType", serializeStringResult(it))
    }
    vizResult?.dateOfBirth?.let {
      vizResultJson.put("dateOfBirth", serializeDateResult(it))
    }
    vizResult?.dateOfExpiry?.let {
      vizResultJson.put("dateOfExpiry", serializeDateResult(it))
    }
    vizResult?.dateOfIssue?.let {
      vizResultJson.put("dateOfIssue", serializeDateResult(it))
    }
    vizResult?.dateOfExpiryPermanent?.let {
      vizResultJson.put("dateOfExpiryPermanent", it)
    }
    vizResult?.documentAdditionalNumber?.let {
      vizResultJson.put("documentAdditionalNumber", serializeStringResult(it))
    }
    vizResult?.dependentsInfo.let {
      vizResultJson.put(
        "dependentsInfo",
        JSONArray(it?.map { dependentInfo -> serializeDependentInfo(dependentInfo) })
      )
    }
    vizResult?.documentNumber?.let {
      vizResultJson.put("documentNumber", serializeStringResult(it))
    }
    vizResult?.documentOptionalAdditionalNumber?.let {
      vizResultJson.put("documentOptionalAdditionalNumber", serializeStringResult(it))
    }
    vizResult?.documentSubtype?.let {
      vizResultJson.put("documentSubtype", serializeStringResult(it))
    }
    vizResult?.driverLicenseDetailedInfo?.let {
      vizResultJson.put("driverLicenseDetailedInfo", serializeDriverLicenseDetailedInfo(it))
    }
    vizResult?.eligibilityCategory?.let {
      vizResultJson.put("eligibilityCategory", serializeStringResult(it))
    }
    vizResult?.employer?.let {
      vizResultJson.put("employer", serializeStringResult(it))
    }
    vizResult?.fathersName?.let {
      vizResultJson.put("fathersName", serializeStringResult(it))
    }
    vizResult?.firstName?.let {
      vizResultJson.put("firstName", serializeStringResult(it))
    }
    vizResult?.fullName?.let {
      vizResultJson.put("fullName", serializeStringResult(it))
    }
    vizResult?.issuingAuthority?.let {
      vizResultJson.put("issuingAuthority", serializeStringResult(it))
    }
    vizResult?.lastName?.let {
      vizResultJson.put("lastName", serializeStringResult(it))
    }
    vizResult?.localizedName?.let {
      vizResultJson.put("localizedName", serializeStringResult(it))
    }
    vizResult?.profession?.let {
      vizResultJson.put("profession", serializeStringResult(it))
    }
    vizResult?.placeOfBirth?.let {
      vizResultJson.put("placeOfBirth", serializeStringResult(it))
    }
    vizResult?.personalIdNumber?.let {
      vizResultJson.put("personalIdNumber", serializeStringResult(it))
    }
    vizResult?.nationality?.let {
      vizResultJson.put("nationality", serializeStringResult(it))
    }
    vizResult?.mothersName?.let {
      vizResultJson.put("mothersName", serializeStringResult(it))
    }
    vizResult?.maritalStatus?.let {
      vizResultJson.put("maritalStatus", serializeStringResult(it))
    }
    vizResult?.manufacturingYear?.let {
      vizResultJson.put("manufacturingYear", serializeStringResult(it))
    }
    vizResult?.race?.let {
      vizResultJson.put("race", serializeStringResult(it))
    }
    vizResult?.religion?.let {
      vizResultJson.put("religion", serializeStringResult(it))
    }
    vizResult?.remarks?.let {
      vizResultJson.put("remarks", serializeStringResult(it))
    }
    vizResult?.residencePermitType?.let {
      vizResultJson.put("residencePermitType", serializeStringResult(it))
    }
    vizResult?.residentialStatus?.let {
      vizResultJson.put("residentialStatus", serializeStringResult(it))
    }
    vizResult?.sex?.let {
      vizResultJson.put("sex", serializeStringResult(it))
    }
    vizResult?.specificDocumentValidity?.let {
      vizResultJson.put("specificDocumentValidity", serializeStringResult(it))
    }
    vizResult?.sponsor?.let {
      vizResultJson.put("sponsor", serializeStringResult(it))
    }
    vizResult?.vehicleOwner?.let {
      vizResultJson.put("vehicleOwner", serializeStringResult(it))
    }
    vizResult?.vehicleType?.let {
      vizResultJson.put("vehicleType", serializeStringResult(it))
    }
    vizResult?.visaType?.let {
      vizResultJson.put("visaType", serializeStringResult(it))
    }
    return vizResultJson
  }

  private fun serializeDetailedCroppedImageResult(detailedCroppedImageResult: DetailedCroppedImageResult?): JSONObject {
    val detailedCroppedImageResultJson = JSONObject()

    detailedCroppedImageResult?.bitmap?.let {
      encodeBase64Image(it)?.let { image ->
        detailedCroppedImageResultJson.put("image", image)
      }
    }
    detailedCroppedImageResult?.location?.let {
      detailedCroppedImageResultJson.put("location", serializeLocation(it))
    }
    detailedCroppedImageResult?.side?.let {
      detailedCroppedImageResultJson.put("side", it.ordinal)

    }
    return detailedCroppedImageResultJson
  }

  private fun serializeBarcodeExtendedElements(barcodeExtendedElements: Array<BarcodeElement>?): JSONObject {
    val barcodeExtendedElementsJson = JSONObject()

    barcodeExtendedElements?.let {
      it.map { element ->
        barcodeExtendedElementsJson.put(element.key.name.replaceFirstChar { char -> char.lowercase() }, element.value)
      }
    }
    return barcodeExtendedElementsJson
  }

  private fun serializeStringType(value: Any?): Any? {
    return when (value) {
      is StringResult -> serializeStringResult(value)
      is String -> value
      else -> null
    }
  }

  private fun encodeBase64Image(image: Bitmap?): String? {
    return image?.let { bmp ->
      val outputStream = ByteArrayOutputStream()
      outputStream.use { stream ->
        bmp.compress(Bitmap.CompressFormat.JPEG, 95, stream)
        Base64.encodeToString(
          stream.toByteArray(),
          Base64.NO_WRAP
        )
      }
    }
  }
}
