package com.microblink.blinkid.reactnative

import android.graphics.BitmapFactory
import android.os.Parcelable
import com.microblink.blinkid.core.BlinkIdSdkSettings
import com.microblink.blinkid.core.result.AlphabetType
import com.microblink.blinkid.core.result.FieldType
import com.microblink.blinkid.core.result.classinfo.Country
import com.microblink.blinkid.core.result.classinfo.DocumentClassInfo
import com.microblink.blinkid.core.result.classinfo.Region
import com.microblink.blinkid.core.result.classinfo.Type
import com.microblink.blinkid.core.session.BlinkIdSessionSettings
import com.microblink.blinkid.core.session.ScanningMode
import com.microblink.blinkid.core.settings.AnonymizationMode
import com.microblink.blinkid.core.settings.CroppedImageSettings
import com.microblink.blinkid.core.settings.DetailedFieldType
import com.microblink.blinkid.core.settings.DetectionLevel
import com.microblink.blinkid.core.settings.DocumentFilter
import com.microblink.blinkid.core.settings.DocumentRules
import com.microblink.blinkid.core.settings.RecognitionModeFilter
import com.microblink.blinkid.core.settings.ScanningSettings
import com.microblink.blinkid.ux.settings.BlinkIdUxSettings
import com.microblink.blinkid.core.settings.DocumentAnonymizationSettings
import com.microblink.blinkid.ux.settings.ClassFilter
import com.microblink.core.utils.defaultResourceDownloadUrl
import com.microblink.core.utils.defaultResourcesLocalFolder
import kotlin.time.Duration.Companion.milliseconds
import kotlinx.parcelize.Parcelize
import kotlinx.parcelize.RawValue
import android.graphics.Bitmap
import android.util.Base64
import com.microblink.blinkid.core.session.InputImageSource
import com.microblink.blinkid.core.settings.DocumentNumberAnonymizationSettings
import com.microblink.core.network.RequestTimeout
import com.microblink.ux.UiSettings
import org.json.JSONArray
import org.json.JSONObject

object BlinkIdDeserializationUtilities {

  fun deserializeBlinkIdSdkSettings(blinkIdSdkSettingsMap: JSONObject?): BlinkIdSdkSettings? {
    val licenseKey = blinkIdSdkSettingsMap?.get("licenseKey") as? String ?: return null

    return BlinkIdSdkSettings(
      licenseKey = licenseKey,
      licensee = if (blinkIdSdkSettingsMap.has("licensee")) blinkIdSdkSettingsMap.getString("licensee") else null,
      downloadResources = blinkIdSdkSettingsMap.optBoolean("downloadResources", true),
      resourceDownloadUrl = blinkIdSdkSettingsMap.optString(
        "resourceDownloadUrl",
        defaultResourceDownloadUrl
      ),
      resourceLocalFolder = blinkIdSdkSettingsMap.optString(
        "resourceLocalFolder",
        defaultResourcesLocalFolder
      ),
      resourceRequestTimeout = deserializeResourceRequestTimeout(
        blinkIdSdkSettingsMap.optJSONObject(
          "resourceRequestTimeout"
        )
      )
    )
  }

  fun deserializeBlinkIdSessionSettings(
    blinkIdSdkSessionSettingsMap: JSONObject?,
    isDirectApi: Boolean
  ): BlinkIdSessionSettings {
    if (blinkIdSdkSessionSettingsMap == null) return BlinkIdSessionSettings()

    return BlinkIdSessionSettings(
      inputImageSource = if (isDirectApi) InputImageSource.Photo else InputImageSource.Video,
      scanningMode = ScanningMode.entries[blinkIdSdkSessionSettingsMap.optInt("scanningMode", ScanningMode.Automatic.ordinal)],
      scanningSettings = deserializeScanningSettings(blinkIdSdkSessionSettingsMap.optJSONObject("scanningSettings")),
    )
  }

  private fun deserializeScanningSettings(scanningSettingsMap: JSONObject?): ScanningSettings {
    if (scanningSettingsMap == null) return ScanningSettings()
    return ScanningSettings(
      blurDetectionLevel = DetectionLevel.entries[scanningSettingsMap.optInt("blurDetectionLevel", DetectionLevel.Mid.ordinal)],
      skipImagesWithBlur = scanningSettingsMap.optBoolean("skipImagesWithBlur", true),
      glareDetectionLevel = DetectionLevel.entries[scanningSettingsMap.optInt("glareDetectionLevel", DetectionLevel.Mid.ordinal)],
      skipImagesWithGlare = scanningSettingsMap["skipImagesWithGlare"] as? Boolean ?: true,
      tiltDetectionLevel = DetectionLevel.entries[scanningSettingsMap.optInt("tiltDetectionLevel", DetectionLevel.Off.ordinal)],
      skipImagesWithInadequateLightingConditions = scanningSettingsMap.optBoolean(
        "skipImagesWithInadequateLightingConditions",
        true
      ),
      skipImagesOccludedByHand = scanningSettingsMap.optBoolean("skipImagesOccludedByHand", true),
      combineResultsFromMultipleInputImages = scanningSettingsMap.optBoolean(
        "combineResultsFromMultipleInputImages",
        true
      ),
      enableBarcodeScanOnly = scanningSettingsMap.optBoolean("enableBarcodeScanOnly", false),
      customDocumentRules = deserializeDocumentRules(scanningSettingsMap.optJSONArray("customDocumentRules")),
      anonymizationMode = enumValueOf<AnonymizationMode>(
        scanningSettingsMap.optString(
          "anonymizationMode",
          AnonymizationMode.FullResult.name
        ).replaceFirstChar { char -> char.uppercase() }),
      customDocumentAnonymizationSettings = deserializeCustomAnonymizationSettings(
        scanningSettingsMap.optJSONArray("customDocumentAnonymizationSettings")
      ),
      returnInputImages = scanningSettingsMap.optBoolean("returnInputImages", false),
      scanCroppedDocumentImage = scanningSettingsMap.optBoolean("scanCroppedDocumentImage", false),
      recognitionModeFilter = deserializeRecognitionModeFilter(scanningSettingsMap.optJSONObject("recognitionModeFilter")),
      enableCharacterValidation = scanningSettingsMap.optBoolean("enableCharacterValidation", true),
      inputImageMargin = (scanningSettingsMap.optDouble("inputImageMargin", 0.02)).toFloat(),
      scanUnsupportedBack = scanningSettingsMap.optBoolean("scanUnsupportedBack", false),
      allowUncertainFrontSideScan = scanningSettingsMap.optBoolean(
        "allowUncertainFrontSideScan",
        false
      ),
      maxAllowedMismatchesPerField = (scanningSettingsMap.optInt(
        "maxAllowedMismatchesPerField",
        0
      )).toUInt(),
      scanPassportDataPageOnly = scanningSettingsMap.optBoolean("scanPassportDataPageOnly", true),
      croppedImageSettings = deserializeCroppedImageSettings(scanningSettingsMap.optJSONObject("croppedImageSettings")),
    )
  }
  
  private fun deserializeCroppedImageSettings(croppedImageSettingsMap: JSONObject?): CroppedImageSettings {
    if (croppedImageSettingsMap == null) return CroppedImageSettings()
    return CroppedImageSettings(
      dotsPerInch = (croppedImageSettingsMap.optInt("dotsPerInch", 250)).toUShort(),
      extensionFactor = croppedImageSettingsMap.optDouble("extensionFactor", 0.0).toFloat(),
      returnDocumentImage = croppedImageSettingsMap.optBoolean("returnDocumentImage", false),
      returnFaceImage = croppedImageSettingsMap.optBoolean("returnFaceImage", false),
      returnSignatureImage = croppedImageSettingsMap.optBoolean("returnSignatureImage", false)
    )
  }

  private fun deserializeResourceRequestTimeout(resourceRequestTimeoutMap: JSONObject?): RequestTimeout {
    if (resourceRequestTimeoutMap == null) return RequestTimeout.DEFAULT
    return RequestTimeout(
      connectionTimeoutMillis = resourceRequestTimeoutMap.optInt(
        "connectionTimeoutMilliseconds",
        10000
      ),
      writeTimeoutMillis = resourceRequestTimeoutMap.optInt("writeTimeoutMilliseconds", 10000),
      readTimeoutMillis = resourceRequestTimeoutMap.optInt("readTimeoutMilliseconds", 10000)
    )
  }

  private fun deserializeDocumentRules(documentRulesJsonArray: JSONArray?): List<DocumentRules> {
    if (documentRulesJsonArray == null) return emptyList()

    val documentRulesList = mutableListOf<DocumentRules>()

    for (i in 0 until documentRulesJsonArray.length()) {
      val documentRuleJson = documentRulesJsonArray.optJSONObject(i) ?: continue

      val documentFilterJson = documentRuleJson.optJSONObject("documentFilter")
      val fieldsJsonArray = documentRuleJson.optJSONArray("fields")

      if (fieldsJsonArray != null) {
        val fields = mutableListOf<DetailedFieldType>()
        for (j in 0 until fieldsJsonArray.length()) {
          val fieldTypeJson = fieldsJsonArray.optJSONObject(j)
          deserializeDetailedFieldType(fieldTypeJson)?.let { deserialized ->
            fields.add(deserialized)
          }
        }

        val documentFilter = documentFilterJson?.let { deserializeDocumentFilter(it) }
        documentFilter?.let {
          documentRulesList.add(DocumentRules(documentFilter, fields))
        }
      }
    }
    return documentRulesList
  }


  private fun deserializeDetailedFieldType(detailedFieldTypeMap: JSONObject?): DetailedFieldType? {
    val fieldTypeName = detailedFieldTypeMap?.optString("fieldType")
    val alphabetTypeName = detailedFieldTypeMap?.optString("alphabetType")

    return if (fieldTypeName != null && alphabetTypeName != null) {
      DetailedFieldType(
        enumValueOf<FieldType>(fieldTypeName.replaceFirstChar { char -> char.uppercase() }),
        enumValueOf<AlphabetType>(alphabetTypeName.replaceFirstChar { char -> char.uppercase() })
      )
    } else {
      null
    }
  }

  private fun deserializeDocumentFilter(documentFilterMap: JSONObject?): DocumentFilter {
    return if (documentFilterMap != null) {
      val filter = DocumentFilter()

      if (!documentFilterMap.optString("country").isNullOrEmpty()) {
        filter.country = enumValueOf<Country>(documentFilterMap.optString("country").replaceFirstChar { char -> char.uppercase() })
      }
      if (!documentFilterMap.optString("region").isNullOrEmpty()) {
        println("Region fam: ${documentFilterMap.optString("region")}")
        filter.region = enumValueOf<Region>(documentFilterMap.optString("region").replaceFirstChar { char -> char.uppercase() })
      }
      if (!documentFilterMap.optString("documentType").isNullOrEmpty()) {
        filter.type = enumValueOf<Type>(documentFilterMap.optString("documentType").replaceFirstChar { char -> char.uppercase() })
      }
      filter
    } else {
      DocumentFilter()
    }
  }

  private fun deserializeCustomAnonymizationSettings(
    customAnonymizationSettingsMapArray: JSONArray?
  ): List<DocumentAnonymizationSettings> {
    if (customAnonymizationSettingsMapArray == null) return emptyList()

    val customAnonymizationList = mutableListOf<DocumentAnonymizationSettings>()

    for (i in 0 until customAnonymizationSettingsMapArray.length()) {
      val item = customAnonymizationSettingsMapArray.optJSONObject(i) ?: continue

      val fieldsJsonArray = item.optJSONArray("fields") ?: continue
      val deserializedFields = mutableListOf<FieldType>()
      for (j in 0 until fieldsJsonArray.length()) {
        val raw = fieldsJsonArray.optString(j, null)
        if (!raw.isNullOrBlank()) {
          val enumName = raw.replaceFirstChar { it.uppercase() }
          runCatching { enumValueOf<FieldType>(enumName) }
            .onSuccess { deserializedFields.add(it) }
        }
      }

      val documentFilter = deserializeDocumentFilter(item.optJSONObject("documentFilter"))
      val documentNumberAnonymizationSettings = item
        .optJSONObject("documentNumberAnonymizationSettings")
        ?.let { deserializeDocumentNumberAnonymizationSettings(it) }

        customAnonymizationList.add(
          DocumentAnonymizationSettings(
            documentFilter,
            deserializedFields,
            documentNumberAnonymizationSettings
          )
        )
    }

    return customAnonymizationList
  }


  private fun deserializeDocumentNumberAnonymizationSettings(documentNumberAnonymizationSettingsMap: JSONObject?): DocumentNumberAnonymizationSettings? {
    if (documentNumberAnonymizationSettingsMap == null) return null
    return DocumentNumberAnonymizationSettings(
      prefixDigitsVisible = (documentNumberAnonymizationSettingsMap.optInt(
        "prefixDigitsVisible",
        0
      )).toUByte(),
      suffixDigitsVisible = (documentNumberAnonymizationSettingsMap.optInt(
        "suffixDigitsVisible",
        0
      )).toUByte()
    )
  }

  private fun deserializeRecognitionModeFilter(recognitionModeFilterMap: JSONObject?): RecognitionModeFilter {
    if (recognitionModeFilterMap == null) return RecognitionModeFilter()
    val filter = RecognitionModeFilter()
    filter.enableMrzId = recognitionModeFilterMap.optBoolean("enableMrzId", true)
    filter.enableMrzVisa = recognitionModeFilterMap.optBoolean("enableMrzVisa", true)
    filter.enablePhotoId = recognitionModeFilterMap.optBoolean("enablePhotoId", true)
    filter.enableBarcodeId = recognitionModeFilterMap.optBoolean("enableBarcodeId", true)
    filter.enableMrzPassport = recognitionModeFilterMap.optBoolean("enableMrzPassport", true)
    filter.enableFullDocumentRecognition =
      recognitionModeFilterMap.optBoolean("enableFullDocumentRecognition", true)
    return filter
  }


  fun deserializeBlinkIdUxSettings(
    blinkidUxSettingsMap: JSONObject?,
    classFilterMap: JSONObject?
  ): BlinkIdUxSettings {
    if (blinkidUxSettingsMap == null) return BlinkIdUxSettings()
    return BlinkIdUxSettings(
      stepTimeoutDuration = (blinkidUxSettingsMap.optInt(
        "stepTimeoutDuration",
        15000
      ).milliseconds),
      classFilter = classFilterMap?.let { CustomClassFilter(it.toString()) },
    )
  }

  fun deserializeClassFilter(
    classFilterMap: JSONObject?,
    classInfo: DocumentClassInfo
  ): Boolean {
    if (classFilterMap == null) return true

    var includeClass = false
    var excludeClass = true

    val includedClasses = classFilterMap.optJSONArray("includeDocuments")
    if (includedClasses != null) {
      for (i in 0 until includedClasses.length()) {
        includeClass = includeClass || matchClassFilter(includedClasses.optJSONObject(i), classInfo)
      }
    } else {
      includeClass = true
    }

    val excludedClasses = classFilterMap.optJSONArray("excludeDocuments")
    if (excludedClasses != null) {
      for (i in 0 until excludedClasses.length()) {
        excludeClass =
          excludeClass && !matchClassFilter(excludedClasses.optJSONObject(i), classInfo)
      }
    }

    return includeClass && excludeClass
  }

  private fun matchClassFilter(
    filteredClass: JSONObject?,
    classInfo: DocumentClassInfo
  ): Boolean {
    val country = filteredClass?.optString("country")
    val region = filteredClass?.optString("region")
    val documentType = filteredClass?.optString("documentType")

    return (country.isNullOrEmpty() || enumValueOf<Country>(country.replaceFirstChar { char -> char.uppercase() }) == classInfo.country) &&
      (region.isNullOrEmpty() || enumValueOf<Region>(region.replaceFirstChar { char -> char.uppercase() }) == classInfo.region) &&
      (documentType.isNullOrEmpty() || enumValueOf<Type>(documentType.replaceFirstChar { char -> char.uppercase() }) == classInfo.type)
  }

  fun base64ToBitmap(base64Str: String?): Bitmap? {
    return try {
      val decodedBytes = Base64.decode(base64Str, Base64.DEFAULT)
      BitmapFactory.decodeByteArray(decodedBytes, 0, decodedBytes.size)
    } catch (e: IllegalArgumentException) {
      null
    }
  }
}

@Parcelize
private class CustomClassFilter(
  private val classFilterMap: @RawValue String
) : ClassFilter, Parcelable {

  override fun classAllowed(documentClass: DocumentClassInfo): Boolean {
    return BlinkIdDeserializationUtilities.deserializeClassFilter(
      JSONObject(classFilterMap),
      documentClass
    )
  }
}
