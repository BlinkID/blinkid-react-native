package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.blinkid.mrtd.MrzResult;
import com.microblink.entities.recognizers.blinkid.generic.DriverLicenseDetailedInfo;
import com.microblink.entities.recognizers.blinkid.generic.classinfo.ClassInfo;
import com.microblink.reactnative.SerializationUtils;
import com.microblink.entities.recognizers.blinkid.generic.imageanalysis.ImageAnalysisResult;
import com.microblink.entities.recognizers.blinkid.generic.viz.VizResult;
import com.microblink.entities.recognizers.blinkid.generic.barcode.BarcodeResult;

public abstract class BlinkIDSerializationUtils {
    public static WritableMap serializeMrzResult(MrzResult mrzResult) {
        WritableMap jsonMrz = new WritableNativeMap();
        jsonMrz.putInt("documentType", mrzResult.getDocumentType().ordinal() + 1);
        jsonMrz.putString("primaryId", mrzResult.getPrimaryId());
        jsonMrz.putString("secondaryId", mrzResult.getSecondaryId());
        jsonMrz.putString("issuer", mrzResult.getIssuer());
        jsonMrz.putMap("dateOfBirth", SerializationUtils.serializeDate(mrzResult.getDateOfBirth().getDate()));
        jsonMrz.putString("documentNumber", mrzResult.getDocumentNumber());
        jsonMrz.putString("nationality", mrzResult.getNationality());
        jsonMrz.putString("gender", mrzResult.getGender());
        jsonMrz.putString("documentCode", mrzResult.getDocumentCode());
        jsonMrz.putMap("dateOfExpiry", SerializationUtils.serializeDate(mrzResult.getDateOfExpiry().getDate()));
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
        jsonDriverLicenseDetailedInfo.putString("restrictions", dlDetailedInfo.getRestrictions());
        jsonDriverLicenseDetailedInfo.putString("endorsements", dlDetailedInfo.getEndorsements());
        jsonDriverLicenseDetailedInfo.putString("vehicleClass", dlDetailedInfo.getVehicleClass());
        return jsonDriverLicenseDetailedInfo;
    }

    public static WritableMap serializeClassInfo(ClassInfo classInfo) {
        WritableMap jsonClassInfo = new WritableNativeMap();
        jsonClassInfo.putInt("country", SerializationUtils.serializeEnum(classInfo.getCountry()));
        jsonClassInfo.putInt("region", SerializationUtils.serializeEnum(classInfo.getRegion()));
        jsonClassInfo.putInt("type", SerializationUtils.serializeEnum(classInfo.getType()));
        return jsonClassInfo;
    }

    public static WritableMap serializeImageAnalysisResult(ImageAnalysisResult imageAnalysisResult) {
        WritableMap jsonImageAnalysis = new WritableNativeMap();
        jsonImageAnalysis.putBoolean("blurred", imageAnalysisResult.isBlurred());
        jsonImageAnalysis.putInt("documentImageColorStatus", SerializationUtils.serializeEnum(imageAnalysisResult.getDocumentImageColorStatus()));
        jsonImageAnalysis.putInt("documentImageMoireStatus", SerializationUtils.serializeEnum(imageAnalysisResult.getDocumentImageMoireStatus()));
        return jsonImageAnalysis;
    }

    public static WritableMap serializeVizResult(VizResult vizResult) {
        WritableMap jsonViz = new WritableNativeMap();
        jsonViz.putString("firstName", vizResult.getFirstName());
        jsonViz.putString("lastName", vizResult.getLastName());
        jsonViz.putString("fullName", vizResult.getFullName());
        jsonViz.putString("additionalNameInformation", vizResult.getAdditionalNameInformation());
        jsonViz.putString("localizedName", vizResult.getLocalizedName());
        jsonViz.putString("address", vizResult.getAddress());
        jsonViz.putString("additionalAddressInformation", vizResult.getAdditionalAddressInformation());
        jsonViz.putString("placeOfBirth", vizResult.getPlaceOfBirth());
        jsonViz.putString("nationality", vizResult.getNationality());
        jsonViz.putString("race", vizResult.getRace());
        jsonViz.putString("religion", vizResult.getReligion());
        jsonViz.putString("profession", vizResult.getProfession());
        jsonViz.putString("maritalStatus", vizResult.getMaritalStatus());
        jsonViz.putString("residentialStatus", vizResult.getResidentialStatus());
        jsonViz.putString("employer", vizResult.getEmployer());
        jsonViz.putString("sex", vizResult.getSex());
        jsonViz.putMap("dateOfBirth", SerializationUtils.serializeDate(vizResult.getDateOfBirth().getDate()));
        jsonViz.putMap("dateOfIssue", SerializationUtils.serializeDate(vizResult.getDateOfIssue().getDate()));
        jsonViz.putMap("dateOfExpiry", SerializationUtils.serializeDate(vizResult.getDateOfExpiry().getDate()));
        jsonViz.putString("documentNumber", vizResult.getDocumentNumber());
        jsonViz.putString("personalIdNumber", vizResult.getPersonalIdNumber());
        jsonViz.putString("documentAdditionalNumber", vizResult.getDocumentAdditionalNumber());
        jsonViz.putString("additionalPersonalIdNumber", vizResult.getAdditionalPersonalIdNumber());
        jsonViz.putString("issuingAuthority", vizResult.getIssuingAuthority());
        jsonViz.putMap("driverLicenseDetailedInfo", serializeDriverLicenseDetailedInfo(vizResult.getDriverLicenseDetailedInfo()));
        jsonViz.putString("conditions", vizResult.getConditions());
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
        jsonBarcode.putMap("dateOfBirth", SerializationUtils.serializeDate(barcodeResult.getDateOfBirth().getDate()));
        jsonBarcode.putMap("dateOfIssue", SerializationUtils.serializeDate(barcodeResult.getDateOfIssue().getDate()));
        jsonBarcode.putMap("dateOfExpiry", SerializationUtils.serializeDate(barcodeResult.getDateOfExpiry().getDate()));
        jsonBarcode.putString("documentNumber", barcodeResult.getDocumentNumber());
        jsonBarcode.putString("personalIdNumber", barcodeResult.getPersonalIdNumber());
        jsonBarcode.putString("documentAdditionalNumber", barcodeResult.getDocumentAdditionalNumber());
        jsonBarcode.putString("issuingAuthority", barcodeResult.getIssuingAuthority());
        jsonBarcode.putString("street", barcodeResult.getStreet());
        jsonBarcode.putString("postalCode", barcodeResult.getPostalCode());
        jsonBarcode.putString("city", barcodeResult.getCity());
        jsonBarcode.putString("jurisdiction", barcodeResult.getJurisdiction());
        jsonBarcode.putMap("driverLicenseDetailedInfo", serializeDriverLicenseDetailedInfo(barcodeResult.getDriverLicenseDetailedInfo()));
        jsonBarcode.putBoolean("empty", barcodeResult.isEmpty());
        return jsonBarcode;
    }

}
