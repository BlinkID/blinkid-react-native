package com.microblink.blinkid.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.blinkid.entities.recognizers.blinkid.mrtd.MrzResult;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.DriverLicenseDetailedInfo;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.barcode.BarcodeDriverLicenseDetailedInfo;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.datamatch.DataMatchResult;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.datamatch.DataMatchField;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.datamatch.FieldState;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.DateResult;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.AdditionalProcessingInfo;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.VehicleClassInfo;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.barcode.BarcodeVehicleClassInfo;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.StringResult;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.AlphabetType;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.classinfo.ClassInfo;
import com.microblink.blinkid.reactnative.SerializationUtils;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.imageanalysis.ImageAnalysisResult;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.viz.VizResult;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.barcode.BarcodeResult;
import com.microblink.blinkid.entities.recognizers.blinkid.idbarcode.BarcodeElements;
import com.microblink.blinkid.entities.recognizers.blinkid.idbarcode.BarcodeElementKey;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.RecognitionModeFilter;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.ClassAnonymizationSettings;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.FieldType;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.classinfo.Country;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.classinfo.Region;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.classinfo.Type;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.Side;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.imageanalysis.CardRotation;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.DocumentNumberAnonymizationSettings;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.CustomClassRules;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.DetailedFieldType;
import com.microblink.blinkid.entities.recognizers.blinkid.generic.DependentInfo;

public abstract class BlinkIDSerializationUtils {
    public static WritableMap serializeMrzResult(MrzResult mrzResult) {
        WritableMap jsonMrz = new WritableNativeMap();
        jsonMrz.putInt("documentType", mrzResult.getDocumentType().ordinal());
        jsonMrz.putString("primaryId", mrzResult.getPrimaryId());
        jsonMrz.putString("secondaryId", mrzResult.getSecondaryId());
        jsonMrz.putString("issuer", mrzResult.getIssuer());
        jsonMrz.putMap("dateOfBirth", SerializationUtils.serializeSimpleDate(mrzResult.getDateOfBirth().getDate()));
        jsonMrz.putString("documentNumber", mrzResult.getDocumentNumber());
        jsonMrz.putString("nationality", mrzResult.getNationality());
        jsonMrz.putString("gender", mrzResult.getGender());
        jsonMrz.putString("documentCode", mrzResult.getDocumentCode());
        jsonMrz.putMap("dateOfExpiry", SerializationUtils.serializeSimpleDate(mrzResult.getDateOfExpiry().getDate()));
        jsonMrz.putString("opt1", mrzResult.getOpt1());
        jsonMrz.putString("opt2", mrzResult.getOpt2());
        jsonMrz.putString("alienNumber", mrzResult.getAlienNumber());
        jsonMrz.putString("applicationReceiptNumber", mrzResult.getApplicationReceiptNumber());
        jsonMrz.putString("immigrantCaseNumber", mrzResult.getImmigrantCaseNumber());
        jsonMrz.putString("mrzText", mrzResult.getMrzText());
        jsonMrz.putString("sanitizedOpt1", mrzResult.getSanitizedOpt1());
        jsonMrz.putString("sanitizedOpt2", mrzResult.getSanitizedOpt2());
        jsonMrz.putString("sanitizedNationality", mrzResult.getSanitizedNationality());
        jsonMrz.putString("sanitizedIssuer", mrzResult.getSanitizedIssuer());
        jsonMrz.putString("sanitizedDocumentCode", mrzResult.getSanitizedDocumentCode());
        jsonMrz.putString("sanitizedDocumentNumber", mrzResult.getSanitizedDocumentNumber());
        jsonMrz.putBoolean("mrzParsed", mrzResult.isMrzParsed());
        jsonMrz.putBoolean("mrzVerified", mrzResult.isMrzVerified());
        return jsonMrz;
    }

    public static WritableMap serializeDriverLicenseDetailedInfo(DriverLicenseDetailedInfo dlDetailedInfo) {
        WritableMap jsonDriverLicenseDetailedInfo = new WritableNativeMap();
        jsonDriverLicenseDetailedInfo.putMap("restrictions", serializeStringResult(dlDetailedInfo.getRestrictions()));
        jsonDriverLicenseDetailedInfo.putMap("endorsements", serializeStringResult(dlDetailedInfo.getEndorsements()));
        jsonDriverLicenseDetailedInfo.putMap("vehicleClass", serializeStringResult(dlDetailedInfo.getVehicleClass()));
        jsonDriverLicenseDetailedInfo.putMap("conditions", serializeStringResult(dlDetailedInfo.getConditions()));
        WritableArray vehicleClassesInfo = new WritableNativeArray();
        for (int i = 0; i < dlDetailedInfo.getVehicleClassesInfo().length; ++i) {
            vehicleClassesInfo.pushMap(serializeVehicleClassInfo(dlDetailedInfo.getVehicleClassesInfo()[i]));
        }
        jsonDriverLicenseDetailedInfo.putArray("vehicleClassesInfo", vehicleClassesInfo);
        return jsonDriverLicenseDetailedInfo;
    }

    public static WritableMap serializeVehicleClassInfo(VehicleClassInfo vehicleClassInfo) {
        WritableMap jsonVehicleClassInfo = new WritableNativeMap();
        jsonVehicleClassInfo.putMap("vehicleClass", serializeStringResult(vehicleClassInfo.getVehicleClass()));
        jsonVehicleClassInfo.putMap("licenceType", serializeStringResult(vehicleClassInfo.getLicenceType()));
        jsonVehicleClassInfo.putMap("effectiveDate", serializeDateResult(vehicleClassInfo.getEffectiveDate()));
        jsonVehicleClassInfo.putMap("expiryDate", serializeDateResult(vehicleClassInfo.getExpiryDate()));
        return jsonVehicleClassInfo;
    }

    public static WritableMap serializeBarcodeDriverLicenseDetailedInfo(BarcodeDriverLicenseDetailedInfo dlDetailedInfo) {
        WritableMap jsonDriverLicenseDetailedInfo = new WritableNativeMap();
        jsonDriverLicenseDetailedInfo.putString("restrictions", dlDetailedInfo.getRestrictions());
        jsonDriverLicenseDetailedInfo.putString("endorsements", dlDetailedInfo.getEndorsements());
        jsonDriverLicenseDetailedInfo.putString("vehicleClass", dlDetailedInfo.getVehicleClass());
        jsonDriverLicenseDetailedInfo.putString("conditions", dlDetailedInfo.getConditions());
        WritableArray vehicleClassesInfo = new WritableNativeArray();
        for (int i = 0; i < dlDetailedInfo.getVehicleClassesInfo().length; ++i) {
            vehicleClassesInfo.pushMap(serializeBarcodeVehicleClassInfo(dlDetailedInfo.getVehicleClassesInfo()[i]));
        }
        jsonDriverLicenseDetailedInfo.putArray("vehicleClassesInfo", vehicleClassesInfo);
        return jsonDriverLicenseDetailedInfo;
    }

    public static WritableMap serializeBarcodeVehicleClassInfo(BarcodeVehicleClassInfo vehicleClassInfo) {
        WritableMap jsonVehicleClassInfo = new WritableNativeMap();
        jsonVehicleClassInfo.putString("vehicleClass", vehicleClassInfo.getVehicleClass());
        jsonVehicleClassInfo.putString("licenceType", vehicleClassInfo.getLicenceType());
        jsonVehicleClassInfo.putMap("effectiveDate", SerializationUtils.serializeSimpleDate(vehicleClassInfo.getEffectiveDate().getDate()));
        jsonVehicleClassInfo.putMap("expiryDate", SerializationUtils.serializeSimpleDate(vehicleClassInfo.getExpiryDate().getDate()));
        return jsonVehicleClassInfo;
    }

    public static WritableMap serializeDataMatchResult(DataMatchResult dataMatchResult) {
        WritableMap jsonDataMatchResult = new WritableNativeMap();
        jsonDataMatchResult.putInt("stateForWholeDocument", SerializationUtils.serializeEnum(dataMatchResult.getStateForWholeDocument()));
        WritableArray fieldStatesArr = new WritableNativeArray();
        for (int i = 0; i < dataMatchResult.getStates().length; ++i) {
            fieldStatesArr.pushMap(serializeFieldState(dataMatchResult.getStates()[i]));
        }
        jsonDataMatchResult.putArray("states", fieldStatesArr);
        return jsonDataMatchResult;
    }

    public static WritableMap serializeFieldState(FieldState fieldState) {
        WritableMap jsonFieldState = new WritableNativeMap();
        jsonFieldState.putInt("field", SerializationUtils.serializeEnum(fieldState.getFieldType()));
        jsonFieldState.putInt("state", SerializationUtils.serializeEnum(fieldState.getState()));
        return jsonFieldState;
    }

    public static WritableMap serializeDateResult(DateResult dateResult) {
        WritableMap jsonDateResult = new WritableNativeMap();
        if (dateResult != null && dateResult.getDate() != null) {
            jsonDateResult.putMap("originalDateStringResult", serializeStringResult(dateResult.getOriginalDateString()));
            jsonDateResult.putBoolean("isFilledByDomainKnowledge", dateResult.isFilledByDomainKnowledge());
            jsonDateResult.putInt("day", dateResult.getDate().getDay());
            jsonDateResult.putInt("month", dateResult.getDate().getMonth());
            jsonDateResult.putInt("year", dateResult.getDate().getYear());
        }
        return jsonDateResult;
    }

    public static WritableMap serializeStringResult(StringResult stringResult) {
        WritableMap jsonStringResult = new WritableNativeMap();
        if (stringResult != null) {
            jsonStringResult.putBoolean("empty", stringResult.isEmpty());
            jsonStringResult.putString("latin", stringResult.value(AlphabetType.Latin));
            jsonStringResult.putString("arabic", stringResult.value(AlphabetType.Arabic));
            jsonStringResult.putString("cyrillic", stringResult.value(AlphabetType.Cyrillic));
            jsonStringResult.putString("greek", stringResult.value(AlphabetType.Greek));
            jsonStringResult.putString("description", stringResult.toString());

            WritableMap jsonFieldLocations = new WritableNativeMap();
            jsonFieldLocations.putMap("latin",SerializationUtils.serializeRectangle(stringResult.location(AlphabetType.Latin)));
            jsonFieldLocations.putMap("arabic",SerializationUtils.serializeRectangle(stringResult.location(AlphabetType.Arabic)));
            jsonFieldLocations.putMap("cyrillic",SerializationUtils.serializeRectangle(stringResult.location(AlphabetType.Cyrillic)));
            jsonFieldLocations.putMap("greek",SerializationUtils.serializeRectangle(stringResult.location(AlphabetType.Greek)));
            jsonStringResult.putMap("location", jsonFieldLocations);

            WritableMap jsonDocumentSides = new WritableNativeMap();
            jsonDocumentSides.putInt("latin",serializeSide(stringResult.side(AlphabetType.Latin)));
            jsonDocumentSides.putInt("arabic",serializeSide(stringResult.side(AlphabetType.Arabic)));
            jsonDocumentSides.putInt("cyrillic",serializeSide(stringResult.side(AlphabetType.Cyrillic)));
            jsonDocumentSides.putInt("greek",serializeSide(stringResult.side(AlphabetType.Greek)));
            jsonStringResult.putMap("side", jsonDocumentSides);
        }
        return jsonStringResult;
    }

    public static WritableMap serializeAdditionalProcessingInfo(AdditionalProcessingInfo additionalProcessingInfo) {
        WritableMap jsonAdditionalProcessingInfo = new WritableNativeMap();
        WritableArray missingMandatoryFieldsArr = new WritableNativeArray();
        for (int i = 0; i < additionalProcessingInfo.getMissingMandatoryFields().length; ++i) {
            missingMandatoryFieldsArr.pushInt(SerializationUtils.serializeEnum(additionalProcessingInfo.getMissingMandatoryFields()[i]));
        }
        WritableArray invalidCharacterFieldsArr = new WritableNativeArray();
        for (int i = 0; i < additionalProcessingInfo.getInvalidCharacterFields().length; ++i) {
            invalidCharacterFieldsArr.pushInt(SerializationUtils.serializeEnum(additionalProcessingInfo.getInvalidCharacterFields()[i]));
        }
        WritableArray extraPresentFieldsArr = new WritableNativeArray();
        for (int i = 0; i < additionalProcessingInfo.getExtraPresentFields().length; ++i) {
            extraPresentFieldsArr.pushInt(SerializationUtils.serializeEnum(additionalProcessingInfo.getExtraPresentFields()[i]));
        }
        WritableArray imageExtractionFailuresArr = new WritableNativeArray();
        for (int i = 0; i < additionalProcessingInfo.getImageExtractionFailures().length; ++i) {
            imageExtractionFailuresArr.pushInt(SerializationUtils.serializeEnum(additionalProcessingInfo.getImageExtractionFailures()[i]));
        }
        jsonAdditionalProcessingInfo.putArray("missingMandatoryFields", missingMandatoryFieldsArr);
        jsonAdditionalProcessingInfo.putArray("invalidCharacterFields", invalidCharacterFieldsArr);
        jsonAdditionalProcessingInfo.putArray("extraPresentFields", extraPresentFieldsArr);
        jsonAdditionalProcessingInfo.putArray("imageExtractionFailures", imageExtractionFailuresArr);
        return jsonAdditionalProcessingInfo;
    }

    public static WritableMap serializeClassInfo(ClassInfo classInfo) {
        WritableMap jsonClassInfo = new WritableNativeMap();
        jsonClassInfo.putInt("country", SerializationUtils.serializeEnum(classInfo.getCountry()));
        jsonClassInfo.putInt("region", SerializationUtils.serializeEnum(classInfo.getRegion()));
        jsonClassInfo.putInt("type", SerializationUtils.serializeEnum(classInfo.getType()));
        jsonClassInfo.putString("countryName", classInfo.getCountryName());
        jsonClassInfo.putString("isoNumericCountryCode", classInfo.getIsoNumericCountryCode());
        jsonClassInfo.putString("isoAlpha2CountryCode", classInfo.getIsoAlpha2CountryCode());
        jsonClassInfo.putString("isoAlpha3CountryCode", classInfo.getIsoAlpha3CountryCode());
        jsonClassInfo.putBoolean("empty", classInfo.isEmpty());
        return jsonClassInfo;
    }

    public static WritableMap serializeImageAnalysisResult(ImageAnalysisResult imageAnalysisResult) {
        WritableMap jsonImageAnalysis = new WritableNativeMap();
        jsonImageAnalysis.putInt("documentImageColorStatus", SerializationUtils.serializeEnum(imageAnalysisResult.getDocumentImageColorStatus()));
        jsonImageAnalysis.putInt("documentImageMoireStatus", SerializationUtils.serializeEnum(imageAnalysisResult.getDocumentImageMoireStatus()));
        jsonImageAnalysis.putInt("faceDetectionStatus", SerializationUtils.serializeEnum(imageAnalysisResult.getFaceDetectionStatus()));
        jsonImageAnalysis.putInt("mrzDetectionStatus", SerializationUtils.serializeEnum(imageAnalysisResult.getMrzDetectionStatus()));
        jsonImageAnalysis.putInt("barcodeDetectionStatus", SerializationUtils.serializeEnum(imageAnalysisResult.getBarcodeDetectionStatus()));
        jsonImageAnalysis.putInt("cardRotation", BlinkIDSerializationUtils.serializeCardRotation(imageAnalysisResult.getCardRotation()));
        jsonImageAnalysis.putInt("cardOrientation", SerializationUtils.serializeEnum(imageAnalysisResult.getCardOrientation()));
        jsonImageAnalysis.putInt("realIdDetectionStatus", SerializationUtils.serializeEnum(imageAnalysisResult.getRealIdDetectionStatus()));
        jsonImageAnalysis.putBoolean("blurDetected", imageAnalysisResult.isBlurDetected());
        jsonImageAnalysis.putBoolean("glareDetected", imageAnalysisResult.isGlareDetected());
        return jsonImageAnalysis;
    }

    public static WritableMap serializeVizResult(VizResult vizResult) {
        WritableMap jsonViz = new WritableNativeMap();
        jsonViz.putMap("firstName", serializeStringResult(vizResult.getFirstName()));
        jsonViz.putMap("lastName", serializeStringResult(vizResult.getLastName()));
        jsonViz.putMap("fullName", serializeStringResult(vizResult.getFullName()));
        jsonViz.putMap("additionalNameInformation", serializeStringResult(vizResult.getAdditionalNameInformation()));
        jsonViz.putMap("localizedName", serializeStringResult(vizResult.getLocalizedName()));
        jsonViz.putMap("address", serializeStringResult(vizResult.getAddress()));
        jsonViz.putMap("additionalAddressInformation", serializeStringResult(vizResult.getAdditionalAddressInformation()));
        jsonViz.putMap("additionalOptionalAddressInformation", serializeStringResult(vizResult.getAdditionalOptionalAddressInformation()));
        jsonViz.putMap("placeOfBirth", serializeStringResult(vizResult.getPlaceOfBirth()));
        jsonViz.putMap("nationality", serializeStringResult(vizResult.getNationality()));
        jsonViz.putMap("race", serializeStringResult(vizResult.getRace()));
        jsonViz.putMap("religion", serializeStringResult(vizResult.getReligion()));
        jsonViz.putMap("profession", serializeStringResult(vizResult.getProfession()));
        jsonViz.putMap("maritalStatus", serializeStringResult(vizResult.getMaritalStatus()));
        jsonViz.putMap("residentialStatus", serializeStringResult(vizResult.getResidentialStatus()));
        jsonViz.putMap("employer", serializeStringResult(vizResult.getEmployer()));
        jsonViz.putMap("sex", serializeStringResult(vizResult.getSex()));
        jsonViz.putMap("documentNumber", serializeStringResult(vizResult.getDocumentNumber()));
        jsonViz.putMap("personalIdNumber", serializeStringResult(vizResult.getPersonalIdNumber()));
        jsonViz.putMap("documentAdditionalNumber", serializeStringResult(vizResult.getDocumentAdditionalNumber()));
        jsonViz.putMap("additionalPersonalIdNumber", serializeStringResult(vizResult.getAdditionalPersonalIdNumber()));
        jsonViz.putMap("issuingAuthority", serializeStringResult(vizResult.getIssuingAuthority()));
        jsonViz.putMap("dateOfBirth", serializeDateResult(vizResult.getDateOfBirth()));
        jsonViz.putMap("dateOfIssue", serializeDateResult(vizResult.getDateOfIssue()));
        jsonViz.putMap("dateOfExpiry", serializeDateResult(vizResult.getDateOfExpiry()));
        jsonViz.putMap("driverLicenseDetailedInfo", serializeDriverLicenseDetailedInfo(vizResult.getDriverLicenseDetailedInfo()));
        jsonViz.putBoolean("empty", vizResult.isEmpty());
        return jsonViz;
    }

    public static WritableMap serializeBarcodeResult(BarcodeResult barcodeResult) {
        WritableMap jsonBarcode = new WritableNativeMap();
        jsonBarcode.putInt("barcodeType", SerializationUtils.serializeEnum(barcodeResult.getBarcodeType()));
        jsonBarcode.putString("rawData", SerializationUtils.encodeByteArrayToBase64(barcodeResult.getRawData()));
        jsonBarcode.putString("stringData", barcodeResult.getStringData());
        jsonBarcode.putBoolean("uncertain", barcodeResult.isUncertain());
        jsonBarcode.putString("firstName", barcodeResult.getFirstName());
        jsonBarcode.putString("lastName", barcodeResult.getLastName());
        jsonBarcode.putString("fullName", barcodeResult.getFullName());
        jsonBarcode.putString("middleName", barcodeResult.getMiddleName());
        jsonBarcode.putString("additionalNameInformation", barcodeResult.getAdditionalNameInformation());
        jsonBarcode.putString("address", barcodeResult.getAddress());
        jsonBarcode.putString("placeOfBirth", barcodeResult.getPlaceOfBirth());
        jsonBarcode.putString("nationality", barcodeResult.getNationality());
        jsonBarcode.putString("race", barcodeResult.getRace());
        jsonBarcode.putString("religion", barcodeResult.getReligion());
        jsonBarcode.putString("profession", barcodeResult.getProfession());
        jsonBarcode.putString("maritalStatus", barcodeResult.getMaritalStatus());
        jsonBarcode.putString("residentialStatus", barcodeResult.getResidentialStatus());
        jsonBarcode.putString("employer", barcodeResult.getEmployer());
        jsonBarcode.putString("sex", barcodeResult.getSex());
        jsonBarcode.putMap("dateOfBirth", SerializationUtils.serializeSimpleDate(barcodeResult.getDateOfBirth().getDate()));
        jsonBarcode.putMap("dateOfIssue", SerializationUtils.serializeSimpleDate(barcodeResult.getDateOfIssue().getDate()));
        jsonBarcode.putMap("dateOfExpiry", SerializationUtils.serializeSimpleDate(barcodeResult.getDateOfExpiry().getDate()));
        jsonBarcode.putString("documentNumber", barcodeResult.getDocumentNumber());
        jsonBarcode.putString("personalIdNumber", barcodeResult.getPersonalIdNumber());
        jsonBarcode.putString("documentAdditionalNumber", barcodeResult.getDocumentAdditionalNumber());
        jsonBarcode.putString("issuingAuthority", barcodeResult.getIssuingAuthority());
        jsonBarcode.putString("street", barcodeResult.getStreet());
        jsonBarcode.putString("postalCode", barcodeResult.getPostalCode());
        jsonBarcode.putString("city", barcodeResult.getCity());
        jsonBarcode.putString("jurisdiction", barcodeResult.getJurisdiction());
        jsonBarcode.putMap("driverLicenseDetailedInfo", serializeBarcodeDriverLicenseDetailedInfo(barcodeResult.getDriverLicenseDetailedInfo()));
        jsonBarcode.putMap("extendedElements", serializeBarcodeElements(barcodeResult.getExtendedElements()));
        jsonBarcode.putBoolean("empty", barcodeResult.isEmpty());
        return jsonBarcode;
    }

     public static WritableMap serializeBarcodeElements(BarcodeElements barcodeElements) {
        WritableMap jsonBarcodeElements = new WritableNativeMap();
        jsonBarcodeElements.putBoolean("empty", barcodeElements.isEmpty());
        WritableArray valuesArr = new WritableNativeArray();
        for (int i = 0; i < BarcodeElementKey.values().length; ++i) {
            valuesArr.pushString(barcodeElements.getValue(BarcodeElementKey.values()[i]));
        }
        jsonBarcodeElements.putArray("values", valuesArr);
        return jsonBarcodeElements;
    }

     public static RecognitionModeFilter deserializeRecognitionModeFilter(ReadableMap json) {
        if (json != null) {
            boolean enableMrzId = (boolean)json.getBoolean("enableMrzId");
            boolean enableMrzVisa = (boolean)json.getBoolean("enableMrzVisa");
            boolean enableMrzPassport = (boolean)json.getBoolean("enableMrzPassport");
            boolean enablePhotoId = (boolean)json.getBoolean("enablePhotoId");
            boolean enableBarcodeId = (boolean)json.getBoolean("enableBarcodeId");
            boolean enableFullDocumentRecognition = (boolean)json.getBoolean("enableFullDocumentRecognition");
            return new RecognitionModeFilter(enableMrzId, enableMrzVisa, enableMrzPassport, enablePhotoId, enableBarcodeId, enableFullDocumentRecognition);
        } else {
            return new RecognitionModeFilter();
        }
    }

    public static int serializeSide(Side side) {
        if (side != null) {
        return side.ordinal() + 1;
        }
        return 0;
    }

    public static int serializeCardRotation(CardRotation rotation) {
        if (rotation != null) {
            return rotation.ordinal();
        }
        return 4;
    }
    
    public static ClassAnonymizationSettings[] deserializeClassAnonymizationSettings(ReadableArray jsonArray) {

        if (jsonArray != null && jsonArray.size() > 0) {
            ClassAnonymizationSettings[] classAnonymizationSettingsArray = new ClassAnonymizationSettings[jsonArray.size()];

            for (int i = 0; i < jsonArray.size(); i++) {

                FieldType[] fieldTypes = new FieldType[0];
                Country country = Country.NONE;
                Region region = Region.NONE;
                Type type = Type.NONE;
                DocumentNumberAnonymizationSettings documentNumberAnonymizationSettings = null;
                try {
                    ReadableMap jsonClassAnonymizationSettings = jsonArray.getMap(i);
                    ReadableArray fieldTypeJsonArray = jsonClassAnonymizationSettings.getArray("fields");
                    fieldTypes = new FieldType[fieldTypeJsonArray.size()];
                    for (int x = 0; x < fieldTypeJsonArray.size(); x++) {
                        fieldTypes[x] = FieldType.values()[fieldTypeJsonArray.getInt(x)];
                    }
                    try {
                        country = Country.values()[jsonClassAnonymizationSettings.getInt("country")];
                    } catch (Exception e) {
                        country = null;
                    }
                    try {
                        region = Region.values()[jsonClassAnonymizationSettings.getInt("region")];
                    } catch (Exception e) {
                        region = null;
                    }
                    try {
                        type = Type.values()[jsonClassAnonymizationSettings.getInt("type")];
                    } catch (Exception e) {
                        type = null;
                    }
                    try {
                       ReadableMap jsonDocumentNumberAnonymizationSettings = jsonClassAnonymizationSettings.getMap("documentNumberAnonymizationSettings");
                       if (jsonDocumentNumberAnonymizationSettings != null) {
                           documentNumberAnonymizationSettings = deserializeDocumentNumberAnonymizationSettings(jsonDocumentNumberAnonymizationSettings);
                       }
                    } catch (Exception e) {
                        documentNumberAnonymizationSettings = null;
                    }
                    ClassAnonymizationSettings classAnonymizationSettings = new ClassAnonymizationSettings(country, region, type, fieldTypes, documentNumberAnonymizationSettings);
                    classAnonymizationSettingsArray[i] = classAnonymizationSettings;
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
            return classAnonymizationSettingsArray;
        } else {
            return new ClassAnonymizationSettings[]{};
        }
    }
    private static DocumentNumberAnonymizationSettings deserializeDocumentNumberAnonymizationSettings (ReadableMap jsonDocumentNumberAnonymizationSettings) {
        return new DocumentNumberAnonymizationSettings(jsonDocumentNumberAnonymizationSettings.getInt("prefixDigitsVisible"),jsonDocumentNumberAnonymizationSettings.getInt("suffixDigitsVisible"));
    }

    public static CustomClassRules[] deserializeCustomClassRules(ReadableArray jsonArray) {
        if (jsonArray != null && jsonArray.size() > 0) {
            CustomClassRules[] customClassRulesArray = new CustomClassRules[jsonArray.size()];

            for (int i = 0; i < jsonArray.size(); i++) {

                DetailedFieldType[] detailedFieldTypes = new DetailedFieldType[0];
                Country country = Country.NONE;
                Region region = Region.NONE;
                Type type = Type.NONE;

                try {
                    ReadableMap jsonCustomClassRulesArray = jsonArray.getMap(i);
                    ReadableArray detailedFieldTypeJsonArray = jsonCustomClassRulesArray.getArray("detailedFieldTypes");
                    detailedFieldTypes = new DetailedFieldType[detailedFieldTypeJsonArray.size()];
                    for (int x = 0; x < detailedFieldTypeJsonArray.size(); x++) {
                        FieldType fieldType = FieldType.values()[detailedFieldTypeJsonArray.getMap(x).getInt("fieldType")];
                        AlphabetType alphabetType = AlphabetType.values()[detailedFieldTypeJsonArray.getMap(x).getInt("alphabetType")];
                        detailedFieldTypes[x] = new DetailedFieldType(fieldType, alphabetType);
                    }

                    try {
                        country = Country.values()[jsonCustomClassRulesArray.getInt("country")];
                    } catch (Exception e) {
                        country = null;
                    }
                    try {
                        region = Region.values()[jsonCustomClassRulesArray.getInt("region")];
                    } catch (Exception e) {
                        region = null;
                    }
                    try {
                        type = Type.values()[jsonCustomClassRulesArray.getInt("type")];
                    } catch (Exception e) {
                        type = null;
                    }

                    CustomClassRules customClassRules = new CustomClassRules(country, region, type, detailedFieldTypes);
                    customClassRulesArray[i] = customClassRules;
                } catch (Exception e) {
                    throw new RuntimeException(e);
                }
            }
            return customClassRulesArray;
        } else {
            return new CustomClassRules[]{};
        }
    }

    public static WritableArray serializeDependentInfo (DependentInfo[] dependentInfos) {
        WritableArray jsonDependentInfos = new WritableNativeArray();
        for (int i = 0; i < dependentInfos.length; ++i) {
            WritableMap jsonDependetsInfo = new WritableNativeMap();
            jsonDependetsInfo.putMap("dateOfBirth", BlinkIDSerializationUtils.serializeDateResult(dependentInfos[i].getDateOfBirth()));
            jsonDependetsInfo.putMap("documentNumber",BlinkIDSerializationUtils.serializeStringResult(dependentInfos[i].getDocumentNumber()));
            jsonDependetsInfo.putMap("sex",BlinkIDSerializationUtils.serializeStringResult(dependentInfos[i].getSex()));
            jsonDependetsInfo.putMap("fullName",BlinkIDSerializationUtils.serializeStringResult(dependentInfos[i].getFullName()));
            jsonDependetsInfo.putBoolean("empty", dependentInfos[i].isEmpty());
            jsonDependentInfos.pushMap(jsonDependetsInfo);
        }
        return jsonDependentInfos;
    }
}