package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class EudlRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.eudl.EudlRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.eudl.EudlRecognizer();
        if (jsonRecognizer.hasKey("country")) {
            recognizer.setCountry(com.microblink.entities.recognizers.blinkid.eudl.EudlCountry.values()[jsonRecognizer.getInt("country") - 1]);
        }
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
        if (jsonRecognizer.hasKey("faceImageDpi")) {
            recognizer.setFaceImageDpi(jsonRecognizer.getInt("faceImageDpi"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonRecognizer.getInt("fullDocumentImageDpi"));
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
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.eudl.EudlRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.eudl.EudlRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("address", result.getAddress());
        jsonResult.putString("birthData", result.getBirthData());
        jsonResult.putInt("country", SerializationUtils.serializeEnum(result.getCountry()));
        jsonResult.putString("driverNumber", result.getDriverNumber());
        jsonResult.putMap("expiryDate", SerializationUtils.serializeDate(result.getExpiryDate()));
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putMap("issueDate", SerializationUtils.serializeDate(result.getIssueDate()));
        jsonResult.putString("issuingAuthority", result.getIssuingAuthority());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("personalNumber", result.getPersonalNumber());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "EudlRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.eudl.EudlRecognizer.class;
    }
}