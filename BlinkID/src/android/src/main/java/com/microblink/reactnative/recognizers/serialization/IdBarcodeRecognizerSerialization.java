package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class IdBarcodeRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer();
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?> recognizer) {
        com.microblink.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("additionalAddressInformation", result.getAdditionalAddressInformation());
        jsonResult.putString("additionalNameInformation", result.getAdditionalNameInformation());
        jsonResult.putString("address", result.getAddress());
        jsonResult.putInt("barcodeType", SerializationUtils.serializeEnum(result.getBarcodeType()));
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("documentAdditionalNumber", result.getDocumentAdditionalNumber());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putInt("documentType", SerializationUtils.serializeEnum(result.getDocumentType()));
        jsonResult.putString("employer", result.getEmployer());
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("fullName", result.getFullName());
        jsonResult.putString("issuingAuthority", result.getIssuingAuthority());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("maritalStatus", result.getMaritalStatus());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("personalIdNumber", result.getPersonalIdNumber());
        jsonResult.putString("placeOfBirth", result.getPlaceOfBirth());
        jsonResult.putString("profession", result.getProfession());
        jsonResult.putString("race", result.getRace());
        jsonResult.putString("rawData", SerializationUtils.encodeByteArrayToBase64(result.getRawData()));
        jsonResult.putString("religion", result.getReligion());
        jsonResult.putString("residentialStatus", result.getResidentialStatus());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putString("stringData", result.getStringData());
        jsonResult.putBoolean("uncertain", result.isUncertain());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "IdBarcodeRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.idbarcode.IdBarcodeRecognizer.class;
    }
}