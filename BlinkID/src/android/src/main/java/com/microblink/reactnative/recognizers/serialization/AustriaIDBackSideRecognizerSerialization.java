package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class AustriaIDBackSideRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.austria.AustriaIDBackSideRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.austria.AustriaIDBackSideRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssuance")) {
            recognizer.setExtractDateOfIssuance(jsonRecognizer.getBoolean("extractDateOfIssuance"));
        }
        if (jsonRecognizer.hasKey("extractHeight")) {
            recognizer.setExtractHeight(jsonRecognizer.getBoolean("extractHeight"));
        }
        if (jsonRecognizer.hasKey("extractIssuingAuthority")) {
            recognizer.setExtractIssuingAuthority(jsonRecognizer.getBoolean("extractIssuingAuthority"));
        }
        if (jsonRecognizer.hasKey("extractPlaceOfBirth")) {
            recognizer.setExtractPlaceOfBirth(jsonRecognizer.getBoolean("extractPlaceOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractPrincipalResidence")) {
            recognizer.setExtractPrincipalResidence(jsonRecognizer.getBoolean("extractPrincipalResidence"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.austria.AustriaIDBackSideRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.austria.AustriaIDBackSideRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putMap("MRZResult", BlinkIDSerializationUtils.serializeMRZResult(result.getMRZResult()));
        jsonResult.putMap("dateOfIssuance", SerializationUtils.serializeDate(result.getDateOfIssuance().getDate()));
        jsonResult.putString("eyeColour", result.getEyeColour());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("issuingAuthority", result.getIssuingAuthority());
        jsonResult.putString("placeOfBirth", result.getPlaceOfBirth());
        jsonResult.putString("principalResidence", result.getPrincipalResidence());
        jsonResult.putInt("height", result.getHeight());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "AustriaIDBackSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.austria.AustriaIDBackSideRecognizer.class;
    }
}