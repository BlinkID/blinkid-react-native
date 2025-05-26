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

object BlinkIdSerializationUtils {
  fun serializeBlinkIdScanningResult(scanningResult: BlinkIdScanningResult?): String? {
    val scanningResultDict: MutableMap<String, Any?> = mutableMapOf()

    scanningResult?.mode.let {
      scanningResultDict["recognitionMode"] = it?.ordinal
    }
    scanningResult?.documentClassInfo?.let {
      scanningResultDict["documentClassInfo"] = serializeDocumentClassInfo(it)
    }
    scanningResult?.dataMatchResult?.let {
      scanningResultDict["dataMatchResult"] = serializeDataMatchResult(it)
    }
    scanningResult?.firstName?.let {
      scanningResultDict["firstName"] = serializeStringResult(it)
    }
    scanningResult?.lastName?.let {
      scanningResultDict["lastName"] = serializeStringResult(it)
    }
    scanningResult?.fullName?.let {
      scanningResultDict["fullName"] = serializeStringResult(it)
    }
    scanningResult?.additionalNameInformation?.let {
      scanningResultDict["additionalNameInformation"] = serializeStringResult(it)
    }
    scanningResult?.localizedName?.let {
      scanningResultDict["localizedName"] = serializeStringResult(it)
    }
    scanningResult?.fathersName?.let {
      scanningResultDict["fathersName"] = serializeStringResult(it)
    }
    scanningResult?.mothersName?.let {
      scanningResultDict["mothersName"] = serializeStringResult(it)
    }
    scanningResult?.address?.let {
      scanningResultDict["address"] = serializeStringResult(it)
    }
    scanningResult?.additionalAddressInformation?.let {
      scanningResultDict["additionalAddressInformation"] = serializeStringResult(it)
    }
    scanningResult?.additionalOptionalAddressInformation?.let {
      scanningResultDict["additionalOptionalAddressInformation"] = serializeStringResult(it)
    }
    scanningResult?.placeOfBirth?.let {
      scanningResultDict["placeOfBirth"] = serializeStringResult(it)
    }
    scanningResult?.nationality?.let {
      scanningResultDict["nationality"] = serializeStringResult(it)
    }
    scanningResult?.race?.let {
      scanningResultDict["race"] = serializeStringResult(it)
    }
    scanningResult?.religion?.let {
      scanningResultDict["religion"] = serializeStringResult(it)
    }
    scanningResult?.profession?.let {
      scanningResultDict["profession"] = serializeStringResult(it)
    }
    scanningResult?.maritalStatus?.let {
      scanningResultDict["maritalStatus"] = serializeStringResult(it)
    }
    scanningResult?.residentialStatus?.let {
      scanningResultDict["residentialStatus"] = serializeStringResult(it)
    }
    scanningResult?.employer?.let {
      scanningResultDict["employer"] = serializeStringResult(it)
    }
    scanningResult?.sex?.let {
      scanningResultDict["sex"] = serializeStringResult(it)
    }
    scanningResult?.sponsor?.let {
      scanningResultDict["sponsor"] = serializeStringResult(it)
    }
    scanningResult?.bloodType?.let {
      scanningResultDict["bloodType"] = serializeStringResult(it)
    }
    scanningResult?.documentNumber?.let {
      scanningResultDict["documentNumber"] = serializeStringResult(it)
    }
    scanningResult?.personalIdNumber?.let {
      scanningResultDict["personalIdNumber"] = serializeStringResult(it)
    }
    scanningResult?.documentAdditionalNumber?.let {
      scanningResultDict["documentAdditionalNumber"] = serializeStringResult(it)
    }
    scanningResult?.documentOptionalAdditionalNumber?.let {
      scanningResultDict["documentOptionalAdditionalNumber"] = serializeStringResult(it)
    }
    scanningResult?.additionalPersonalIdNumber?.let {
      scanningResultDict["additionalPersonalIdNumber"] = serializeStringResult(it)
    }
    scanningResult?.issuingAuthority?.let {
      scanningResultDict["issuingAuthority"] = serializeStringResult(it)
    }
    scanningResult?.documentSubtype?.let {
      scanningResultDict["documentSubtype"] = serializeStringResult(it)
    }
    scanningResult?.remarks?.let {
      scanningResultDict["remarks"] = serializeStringResult(it)
    }
    scanningResult?.residencePermitType?.let {
      scanningResultDict["residencePermitType"] = serializeStringResult(it)
    }
    scanningResult?.manufacturingYear?.let {
      scanningResultDict["manufacturingYear"] = serializeStringResult(it)
    }
    scanningResult?.vehicleType?.let {
      scanningResultDict["vehicleType"] = serializeStringResult(it)
    }
    scanningResult?.eligibilityCategory?.let {
      scanningResultDict["eligibilityCategory"] = serializeStringResult(it)
    }
    scanningResult?.specificDocumentValidity?.let {
      scanningResultDict["specificDocumentValidity"] = serializeStringResult(it)
    }
    scanningResult?.visaType?.let {
      scanningResultDict["visaType"] = serializeStringResult(it)
    }

    scanningResult?.dateOfBirth?.let {
      scanningResultDict["dateOfBirth"] = serializeDateResult(it)
    }
    scanningResult?.dateOfIssue?.let {
      scanningResultDict["dateOfIssue"] = serializeDateResult(it)
    }
    scanningResult?.dateOfExpiry?.let {
      scanningResultDict["dateOfExpiry"] = serializeDateResult(it)
    }
    scanningResult?.dateOfExpiryPermanent?.let {
      scanningResultDict["dateOfExpiryPermanent"] = it
    }
    scanningResult?.driverLicenseDetailedInfo?.let {
      scanningResultDict["driverLicenseDetailedInfo"] = serializeDriverLicenseDetailedInfo(it)
    }
    scanningResult?.dependentsInfo?.let {
      scanningResultDict["dependentsInfo"] =
        it.map { dependentInfo -> serializeDependentInfo(dependentInfo) }
    }
    scanningResult?.subResults?.let {
      scanningResultDict["subResults"] = it.map { subResult -> serializeSubResult(subResult) }
    }

    scanningResult?.inputImage(ScanningSide.First)?.let {
      scanningResultDict["firstInputImage"] = encodeBase64Image(it.bitmap)
    }
    scanningResult?.inputImage(ScanningSide.Second)?.let {
      scanningResultDict["secondInputImage"] = encodeBase64Image(it.bitmap)
    }
    scanningResult?.barcodeInputImage()?.let {
      scanningResultDict["barcodeInputImage"] = encodeBase64Image(it.bitmap)
    }
    scanningResult?.documentImage(ScanningSide.First)?.let {
      scanningResultDict["firstDocumentImage"] = encodeBase64Image(it.bitmap)
    }
    scanningResult?.documentImage(ScanningSide.Second)?.let {
      scanningResultDict["secondDocumentImage"] = encodeBase64Image(it.bitmap)
    }
    scanningResult?.faceImage()?.let {
      scanningResultDict["faceImage"] = serializeDetailedCroppedImageResult(it)
    }
    scanningResult?.signatureImage()?.let {
      scanningResultDict["signatureImage"] = serializeDetailedCroppedImageResult(it)
    }


    return JSONObject(scanningResultDict).toString()
  }

  private fun <T> serializeDateResult(dateResult: DateResult<T>?): Map<String, Any?> {
    val dateResultDict: MutableMap<String, Any?> = mutableMapOf()
    dateResult?.day?.let {
      dateResultDict["day"] = it
    }
    dateResult?.month?.let {
      dateResultDict["month"] = it
    }
    dateResult?.year?.let {
      dateResultDict["year"] = it
    }
    dateResultDict["filledByDomainKnowledge"] = dateResult?.filledByDomainKnowledge
    dateResultDict["successfullyParsed"] = dateResult?.successfullyParsed
    dateResultDict["originalString"] = serializeStringType(dateResult?.originalString)
    return dateResultDict
  }

  private fun serializeDocumentClassInfo(documentClassInfo: DocumentClassInfo): Map<String, Any> {
    val documentClassInfoDict: MutableMap<String, Any> = mutableMapOf()
    documentClassInfo.country?.name?.let {
      documentClassInfoDict["country"] = it.replaceFirstChar { char -> char.lowercase() }
    }
    documentClassInfo.region?.name?.let {
      documentClassInfoDict["region"] = it.replaceFirstChar { char -> char.lowercase() }
    }
    documentClassInfo.type?.name?.let {
      documentClassInfoDict["documentType"] = it.replaceFirstChar { char -> char.lowercase() }
    }
    documentClassInfo.countryName?.let {
      documentClassInfoDict["countryName"] = it
    }
    documentClassInfo.isoAlpha2CountryCode?.let {
      documentClassInfoDict["isoAlpha2CountryCode"] = it
    }
    documentClassInfo.isoAlpha3CountryCode?.let {
      documentClassInfoDict["isoAlpha3CountryCode"] = it
    }
    return documentClassInfoDict
  }

  private fun serializeDataMatchResult(dataMatchResult: DataMatchResult): Map<String, Any> {
    return mapOf(
      "states" to dataMatchResult.statePerField.map { serializeDataMatchFiled(it) },
      "overallState" to dataMatchResult.overallState.ordinal
    )
  }

  private fun serializeDataMatchFiled(dataMatchField: DataMatchFieldState): Map<String, Any> {
    return mapOf(
      "field" to dataMatchField.fieldType.ordinal,
      "state" to dataMatchField.state.ordinal
    )
  }

  private fun serializeStringResult(stringResult: StringResult): Map<String, Any> {
    val stringResultDict: MutableMap<String, Any> = mutableMapOf()

    stringResultDict["value"] = stringResult.value(AlphabetType.Latin)
    stringResultDict["latin"] = stringResult.value(AlphabetType.Latin)
    stringResultDict["arabic"] = stringResult.value(AlphabetType.Arabic)
    stringResultDict["cyrillic"] = stringResult.value(AlphabetType.Cyrillic)
    stringResultDict["greek"] = stringResult.value(AlphabetType.Greek)

    val locationDict: MutableMap<String, Any?> = mutableMapOf()
    stringResult.location(AlphabetType.Latin)?.let {
      locationDict["latin"] = serializeLocation(it)
    }
    stringResult.location(AlphabetType.Arabic)?.let {
      locationDict["arabic"] = serializeLocation(it)
    }
    stringResult.location(AlphabetType.Cyrillic)?.let {
      locationDict["cyrillic"] = serializeLocation(it)
    }
    stringResult.location(AlphabetType.Greek)?.let {
      locationDict["greek"] = serializeLocation(it)
    }

    val sideDict: MutableMap<String, Any?> = mutableMapOf()
    stringResult.side(AlphabetType.Latin)?.let {
      sideDict["latin"] = it.ordinal
    }
    stringResult.side(AlphabetType.Arabic)?.let {
      sideDict["arabic"] = it.ordinal
    }
    stringResult.side(AlphabetType.Cyrillic)?.let {
      sideDict["cyrillic"] = it.ordinal
    }
    stringResult.side(AlphabetType.Greek)?.let {
      sideDict["greek"] = it.ordinal
    }
    stringResultDict["side"] = sideDict

    return stringResultDict
  }

  private fun serializeLocation(rectangle: Rectangle): Map<String, Any?> {
    return mapOf(
      "x" to rectangle.x.toDouble(),
      "y" to rectangle.y.toDouble(),
      "width" to rectangle.width.toDouble(),
      "height" to rectangle.height.toDouble()
    )
  }

  private fun <T> serializeDriverLicenseDetailedInfo(driverLicenseDetailedInfo: DriverLicenseDetailedInfo<T>?): Map<String, Any?> {
    return mapOf(
      "conditions" to serializeStringType(driverLicenseDetailedInfo?.conditions),
      "endorsements" to serializeStringType(driverLicenseDetailedInfo?.endorsements),
      "restrictions" to serializeStringType(driverLicenseDetailedInfo?.restrictions),
      "vehicleClass" to serializeStringType(driverLicenseDetailedInfo?.vehicleClass),
      "vehicleClassesInfo" to driverLicenseDetailedInfo?.vehicleClassesInfo?.map {
        serializeVehicleClassInfo(
          it
        )
      }
    )
  }

  private fun <T> serializeVehicleClassInfo(vehicleClassInfo: VehicleClassInfo<T>): Map<String, Any?> {
    return mapOf(
      "effectiveDate" to serializeStringType(vehicleClassInfo.effectiveDate),
      "expiryDate" to serializeStringType(vehicleClassInfo.expiryDate),
      "licenceType" to serializeStringType(vehicleClassInfo.licenceType),
      "vehicleClass" to serializeStringType(vehicleClassInfo.vehicleClass)
    )
  }

  private fun serializeDependentInfo(dependentInfo: DependentInfo): Map<String, Any?> {
    val dependentInfoDict: MutableMap<String, Any?> = mutableMapOf()

    dependentInfo.fullName?.let {
      dependentInfoDict["fullName"] = serializeStringResult(it)
    }
    dependentInfo.sex?.let {
      dependentInfoDict["sex"] = serializeStringResult(it)
    }
    dependentInfo.dateOfBirth?.let {
      dependentInfoDict["dateOfBirth"] = serializeDateResult(it)
    }
    dependentInfo.documentNumber?.let {
      dependentInfoDict["documentNumber"] = serializeStringResult(it)
    }
    return dependentInfoDict
  }

  private fun serializeSubResult(subResult: SingleSideScanningResult): Map<String, Any?> {
    return mapOf(
      "barcode" to serializeBarcodeResult(subResult.barcode),
      "barcodeInputImage" to encodeBase64Image(subResult.barcodeInputImage?.bitmap),
      "documentImage" to encodeBase64Image(subResult.documentImage?.bitmap),
      "faceImage" to serializeDetailedCroppedImageResult(subResult.faceImage),
      "inputImage" to encodeBase64Image(subResult.inputImage?.bitmap),
      "mrz" to serializeMrzResult(subResult.mrz),
      "signatureImage" to serializeDetailedCroppedImageResult(subResult.signatureImage),
      "viz" to serializeVizResult(subResult.viz)
    )
  }

  private fun serializeBarcodeResult(barcodeResult: BarcodeResult?): Map<String, Any?> {
    return mapOf(
      "additionalNameInformation" to barcodeResult?.additionalNameInformation,
      "address" to barcodeResult?.address,
      "addressDetailedInfo" to serializeAddressDetailedInfo(barcodeResult?.addressDetailedInfo),
      "barcodeData" to serializeBarcodeData(barcodeResult?.barcodeData),
      "dateOfBirth" to serializeDateResult(barcodeResult?.dateOfBirth),
      "dateOfExpiry" to serializeDateResult(barcodeResult?.dateOfExpiry),
      "dateOfIssue" to serializeDateResult(barcodeResult?.dateOfIssue),
      "documentAdditionalNumber" to barcodeResult?.documentAdditionalNumber,
      "documentNumber" to barcodeResult?.documentNumber,
      "driverLicenseDetailedInfo" to serializeDriverLicenseDetailedInfo(barcodeResult?.driverLicenseDetailedInfo),
      "employer" to barcodeResult?.employer,
      "extendedElements" to serializeBarcodeExtendedElements(barcodeResult?.extendedElements?.barcodeElements),
      "firstName" to barcodeResult?.firstName,
      "fullName" to barcodeResult?.fullName,
      "issuingAuthority" to barcodeResult?.issuingAuthority,
      "lastName" to barcodeResult?.lastName,
      "maritalStatus" to barcodeResult?.maritalStatus,
      "middleName" to barcodeResult?.middleName,
      "nationality" to barcodeResult?.nationality,
      "personalIdNumber" to barcodeResult?.personalIdNumber,
      "placeOfBirth" to barcodeResult?.placeOfBirth,
      "profession" to barcodeResult?.profession,
      "race" to barcodeResult?.race,
      "religion" to barcodeResult?.religion,
      "residentialStatus" to barcodeResult?.residentialStatus,
      "sex" to barcodeResult?.sex
    )
  }

  private fun serializeAddressDetailedInfo(addressDetailedInfo: AddressDetailedInfo?): Map<String, Any?> {
    return mapOf(
      "city" to addressDetailedInfo?.city,
      "postalCode" to addressDetailedInfo?.postalCode,
      "jurisdiction" to addressDetailedInfo?.jurisdiction,
      "street" to addressDetailedInfo?.street
    )
  }

  private fun serializeBarcodeData(barcodeData: BarcodeData?): Map<String, Any?> {
    return mapOf(
      "barcodeType" to barcodeData?.barcodeType?.ordinal,
      "rawData" to barcodeData?.rawData.toString(),
      "stringData" to barcodeData?.stringData,
      "uncertain" to barcodeData?.uncertain
    )
  }

  private fun serializeMrzResult(mrzResult: MrzResult?): Map<String, Any?> {
    return mapOf(
      "dateOfBirth" to serializeDateResult(mrzResult?.dateOfBirth),
      "dateOfExpiry" to serializeDateResult(mrzResult?.dateOfExpiry),
      "documentCode" to mrzResult?.documentCode,
      "documentNumber" to mrzResult?.documentNumber,
      "documentType" to mrzResult?.documentType?.ordinal,
      "gender" to mrzResult?.gender,
      "issuer" to mrzResult?.issuer,
      "issuerName" to mrzResult?.issuerName,
      "nationality" to mrzResult?.nationality,
      "nationalityName" to mrzResult?.nationalityName,
      "opt1" to mrzResult?.opt1,
      "opt2" to mrzResult?.opt2,
      "primaryID" to mrzResult?.primaryID,
      "rawMRZString" to mrzResult?.rawMRZString,
      "sanitizedDocumentCode" to mrzResult?.sanitizedDocumentCode,
      "sanitizedDocumentNumber" to mrzResult?.sanitizedDocumentNumber,
      "sanitizedIssuer" to mrzResult?.sanitizedIssuer,
      "sanitizedNationality" to mrzResult?.sanitizedNationality,
      "sanitizedOpt1" to mrzResult?.sanitizedOpt1,
      "sanitizedOpt2" to mrzResult?.sanitizedOpt2,
      "secondaryID" to mrzResult?.secondaryID,
      "verified" to mrzResult?.verified
    )
  }

  private fun serializeVizResult(vizResult: VizResult?): Map<String, Any?> {
    val vizResultDict: MutableMap<String, Any> = mutableMapOf()

    vizResult?.additionalAddressInformation?.let {
      vizResultDict["additionalAddressInformation"] = serializeStringResult(it)
    }
    vizResult?.additionalNameInformation?.let {
      vizResultDict["additionalNameInformation"] = serializeStringResult(it)
    }
    vizResult?.additionalOptionalAddressInformation?.let {
      vizResultDict["additionalOptionalAddressInformation"] = serializeStringResult(it)
    }
    vizResult?.additionalPersonalIdNumber?.let {
      vizResultDict["additionalPersonalIdNumber"] = serializeStringResult(it)
    }
    vizResult?.address?.let {
      vizResultDict["address"] = serializeStringResult(it)
    }
    vizResult?.bloodType?.let {
      vizResultDict["bloodType"] = serializeStringResult(it)
    }
    vizResult?.dateOfBirth?.let {
      vizResultDict["dateOfBirth"] = serializeDateResult(it)
    }
    vizResult?.dateOfExpiry?.let {
      vizResultDict["dateOfExpiry"] = serializeDateResult(it)
    }
    vizResult?.dateOfIssue?.let {
      vizResultDict["dateOfIssue"] = serializeDateResult(it)
    }
    vizResult?.dateOfExpiryPermanent?.let {
      vizResultDict["dateOfExpiryPermanent"] = it
    }
    vizResult?.documentAdditionalNumber?.let {
      vizResultDict["documentAdditionalNumber"] = serializeStringResult(it)
    }
    vizResult?.dependentsInfo.let {
      it?.let {
        vizResultDict["dependentsInfo"] =
          it.map { dependentInfo -> serializeDependentInfo(dependentInfo) }
      }
    }
    vizResult?.documentNumber?.let {
      vizResultDict["documentNumber"] = serializeStringResult(it)
    }
    vizResult?.documentOptionalAdditionalNumber?.let {
      vizResultDict["documentOptionalAdditionalNumber"] = serializeStringResult(it)
    }
    vizResult?.documentSubtype?.let {
      vizResultDict["documentSubtype"] = serializeStringResult(it)
    }
    vizResult?.driverLicenseDetailedInfo?.let {
      vizResultDict["driverLicenseDetailedInfo"] = serializeDriverLicenseDetailedInfo(it)
    }
    vizResult?.eligibilityCategory?.let {
      vizResultDict["eligibilityCategory"] = serializeStringResult(it)
    }
    vizResult?.employer?.let {
      vizResultDict["employer"] = serializeStringResult(it)
    }
    vizResult?.fathersName?.let {
      vizResultDict["fathersName"] = serializeStringResult(it)
    }
    vizResult?.firstName?.let {
      vizResultDict["firstName"] = serializeStringResult(it)
    }
    vizResult?.fullName?.let {
      vizResultDict["fullName"] = serializeStringResult(it)
    }
    vizResult?.issuingAuthority?.let {
      vizResultDict["issuingAuthority"] = serializeStringResult(it)
    }
    vizResult?.lastName?.let {
      vizResultDict["lastName"] = serializeStringResult(it)
    }
    vizResult?.localizedName?.let {
      vizResultDict["localizedName"] = serializeStringResult(it)
    }
    vizResult?.profession?.let {
      vizResultDict["profession"] = serializeStringResult(it)
    }
    vizResult?.placeOfBirth?.let {
      vizResultDict["placeOfBirth"] = serializeStringResult(it)
    }
    vizResult?.personalIdNumber?.let {
      vizResultDict["personalIdNumber"] = serializeStringResult(it)
    }
    vizResult?.nationality?.let {
      vizResultDict["nationality"] = serializeStringResult(it)
    }
    vizResult?.mothersName?.let {
      vizResultDict["mothersName"] = serializeStringResult(it)
    }
    vizResult?.maritalStatus?.let {
      vizResultDict["maritalStatus"] = serializeStringResult(it)
    }
    vizResult?.manufacturingYear?.let {
      vizResultDict["manufacturingYear"] = serializeStringResult(it)
    }
    vizResult?.race?.let {
      vizResultDict["race"] = serializeStringResult(it)
    }
    vizResult?.religion?.let {
      vizResultDict["religion"] = serializeStringResult(it)
    }
    vizResult?.remarks?.let {
      vizResultDict["remarks"] = serializeStringResult(it)
    }
    vizResult?.residencePermitType?.let {
      vizResultDict["residencePermitType"] = serializeStringResult(it)
    }
    vizResult?.residentialStatus?.let {
      vizResultDict["residentialStatus"] = serializeStringResult(it)
    }
    vizResult?.sex?.let {
      vizResultDict["sex"] = serializeStringResult(it)
    }
    vizResult?.specificDocumentValidity?.let {
      vizResultDict["specificDocumentValidity"] = serializeStringResult(it)
    }
    vizResult?.sponsor?.let {
      vizResultDict["sponsor"] = serializeStringResult(it)
    }
    vizResult?.vehicleOwner?.let {
      vizResultDict["vehicleOwner"] = serializeStringResult(it)
    }
    vizResult?.vehicleType?.let {
      vizResultDict["vehicleType"] = serializeStringResult(it)
    }
    vizResult?.visaType?.let {
      vizResultDict["visaType"] = serializeStringResult(it)
    }
    return vizResultDict
  }

  private fun serializeDetailedCroppedImageResult(detailedCroppedImageResult: DetailedCroppedImageResult?): Map<String, Any> {
    val detailedCroppedImageResultDict: MutableMap<String, Any> = mutableMapOf()
    detailedCroppedImageResult?.bitmap?.let {
      encodeBase64Image(it)?.let { image ->
        detailedCroppedImageResultDict["image"] = image
      }
    }
    detailedCroppedImageResult?.location?.let {
      detailedCroppedImageResultDict["location"] = serializeLocation(it)
    }
    detailedCroppedImageResult?.side?.let {
      detailedCroppedImageResultDict["side"] = it.ordinal
    }
    return detailedCroppedImageResultDict
  }

  private fun serializeBarcodeExtendedElements(barcodeExtendedElements: Array<BarcodeElement>?): Map<String, Any?> {
    val barcodeExtendedElementsDict: MutableMap<String, Any?> = mutableMapOf()
    barcodeExtendedElements?.let {
      it.map { element ->
        barcodeExtendedElementsDict[element.key.name.replaceFirstChar { char -> char.lowercase() }] =
          element.value
      }
    }
    return barcodeExtendedElementsDict
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
