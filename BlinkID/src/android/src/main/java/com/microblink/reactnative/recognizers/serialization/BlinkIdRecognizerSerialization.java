package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class BlinkIdRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.generic.BlinkIdRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.generic.BlinkIdRecognizer();
        if (jsonRecognizer.hasKey("allowBlurFilter")) {
            recognizer.setAllowBlurFilter(jsonRecognizer.getBoolean("allowBlurFilter"));
        }
        if (jsonRecognizer.hasKey("allowUnparsedMrzResults")) {
            recognizer.setAllowUnparsedMrzResults(jsonRecognizer.getBoolean("allowUnparsedMrzResults"));
        }
        if (jsonRecognizer.hasKey("allowUnverifiedMrzResults")) {
            recognizer.setAllowUnverifiedMrzResults(jsonRecognizer.getBoolean("allowUnverifiedMrzResults"));
        }
        if (jsonRecognizer.hasKey("faceImageDpi")) {
            recognizer.setFaceImageDpi(jsonRecognizer.getInt("faceImageDpi"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonRecognizer.getInt("fullDocumentImageDpi"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageExtensionFactors")) {
            recognizer.setFullDocumentImageExtensionFactors(BlinkIDSerializationUtils.deserializeExtensionFactors(jsonRecognizer.getMap("fullDocumentImageExtensionFactors")));
        }
        if (jsonRecognizer.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonRecognizer.getBoolean("returnFaceImage"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?> recognizer) {
        com.microblink.entities.recognizers.blinkid.generic.BlinkIdRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.generic.BlinkIdRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("additionalAddressInformation", result.getAdditionalAddressInformation());
        jsonResult.putString("additionalNameInformation", result.getAdditionalNameInformation());
        jsonResult.putString("address", result.getAddress());
        jsonResult.putString("conditions", result.getConditions());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putBoolean("dateOfExpiryPermanent", result.isDateOfExpiryPermanent());
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("documentAdditionalNumber", result.getDocumentAdditionalNumber());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putMap("driverLicenseDetailedInfo", BlinkIDSerializationUtils.serializeDriverLicenseDetailedInfo(result.getDriverLicenseDetailedInfo()));
        jsonResult.putString("employer", result.getEmployer());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("fullName", result.getFullName());
        jsonResult.putString("issuingAuthority", result.getIssuingAuthority());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("localizedName", result.getLocalizedName());
        jsonResult.putString("maritalStatus", result.getMaritalStatus());
        jsonResult.putMap("mrzResult", BlinkIDSerializationUtils.serializeMrzResult(result.getMrzResult()));
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("personalIdNumber", result.getPersonalIdNumber());
        jsonResult.putString("placeOfBirth", result.getPlaceOfBirth());
        jsonResult.putString("profession", result.getProfession());
        jsonResult.putString("race", result.getRace());
        jsonResult.putString("religion", result.getReligion());
        jsonResult.putString("residentialStatus", result.getResidentialStatus());
        jsonResult.putString("sex", result.getSex());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "BlinkIdRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.generic.BlinkIdRecognizer.class;
    }
}