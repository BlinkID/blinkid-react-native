package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class EUDLRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.eudl.EUDLRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.eudl.EUDLRecognizer();
        if (jsonRecognizer.hasKey("extractAddress")) {
            recognizer.setExtractAddress(jsonRecognizer.getBoolean("extractAddress"));
        }
        if (jsonRecognizer.hasKey("extractDateOfExpiry")) {
            recognizer.setExtractDateOfExpiry(jsonRecognizer.getBoolean("extractDateOfExpiry"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssue")) {
            recognizer.setExtractDateOfIssue(jsonRecognizer.getBoolean("extractDateOfIssue"));
        }
        if (jsonRecognizer.hasKey("extractIssuingAuthority")) {
            recognizer.setExtractIssuingAuthority(jsonRecognizer.getBoolean("extractIssuingAuthority"));
        }
        if (jsonRecognizer.hasKey("extractPersonalNumber")) {
            recognizer.setExtractPersonalNumber(jsonRecognizer.getBoolean("extractPersonalNumber"));
        }
        if (jsonRecognizer.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonRecognizer.getBoolean("returnFaceImage"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        if (jsonRecognizer.hasKey("country")) {
            recognizer.setCountry(com.microblink.entities.recognizers.blinkid.eudl.EUDLCountry.values()[jsonRecognizer.getInt("country") - 1]);
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.eudl.EUDLRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.eudl.EUDLRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("address", result.getAddress());
        jsonResult.putString("driverNumber", result.getDriverNumber());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("issuingAuthority", result.getIssuingAuthority());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("personalNumber", result.getPersonalNumber());
        jsonResult.putString("birthPlace", result.getBirthPlace());
        jsonResult.putInt("country", SerializationUtils.serializeEnum(result.getCountry()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "EUDLRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.eudl.EUDLRecognizer.class;
    }
}