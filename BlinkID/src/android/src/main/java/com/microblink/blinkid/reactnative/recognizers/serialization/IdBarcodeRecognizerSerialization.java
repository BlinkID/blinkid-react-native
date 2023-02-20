package com.microblink.blinkid.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.blinkid.entities.recognizers.Recognizer;
import com.microblink.blinkid.reactnative.recognizers.RecognizerSerialization;
import com.microblink.blinkid.reactnative.SerializationUtils;

public final class IdBarcodeRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?> createRecognizer(ReadableMap jsonMap) {
        com.microblink.blinkid.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer recognizer = new com.microblink.blinkid.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer();
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?> recognizer) {
        com.microblink.blinkid.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer.Result result = ((com.microblink.blinkid.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonRecognizerResultData(jsonResult, result);
        jsonResult.putString("additionalNameInformation", result.getAdditionalNameInformation());
        jsonResult.putString("address", result.getAddress());
        jsonResult.putInt("age", result.getAge());
        jsonResult.putInt("barcodeType", SerializationUtils.serializeEnum(result.getBarcodeType()));
        jsonResult.putString("city", result.getCity());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("documentAdditionalNumber", result.getDocumentAdditionalNumber());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putInt("documentType", SerializationUtils.serializeEnum(result.getDocumentType()));
        jsonResult.putString("employer", result.getEmployer());
        jsonResult.putString("endorsements", result.getEndorsements());
        jsonResult.putBoolean("expired", result.isExpired());
        jsonResult.putMap("extendedElements", BlinkIDSerializationUtils.serializeBarcodeElements(result.getExtendedElements()));
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("fullName", result.getFullName());
        jsonResult.putString("issuingAuthority", result.getIssuingAuthority());
        jsonResult.putString("jurisdiction", result.getJurisdiction());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("maritalStatus", result.getMaritalStatus());
        jsonResult.putString("middleName", result.getMiddleName());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("personalIdNumber", result.getPersonalIdNumber());
        jsonResult.putString("placeOfBirth", result.getPlaceOfBirth());
        jsonResult.putString("postalCode", result.getPostalCode());
        jsonResult.putString("profession", result.getProfession());
        jsonResult.putString("race", result.getRace());
        jsonResult.putString("rawData", SerializationUtils.encodeByteArrayToBase64(result.getRawData()));
        jsonResult.putString("religion", result.getReligion());
        jsonResult.putString("residentialStatus", result.getResidentialStatus());
        jsonResult.putString("restrictions", result.getRestrictions());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putString("street", result.getStreet());
        jsonResult.putString("stringData", result.getStringData());
        jsonResult.putBoolean("uncertain", result.isUncertain());
        jsonResult.putString("vehicleClass", result.getVehicleClass());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "IdBarcodeRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.blinkid.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer.class;
    }
}