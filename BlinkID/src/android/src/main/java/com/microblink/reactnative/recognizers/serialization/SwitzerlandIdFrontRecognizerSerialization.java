package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class SwitzerlandIdFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIdFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIdFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractGivenName")) {
            recognizer.setExtractGivenName(jsonRecognizer.getBoolean("extractGivenName"));
        }
        if (jsonRecognizer.hasKey("extractSurname")) {
            recognizer.setExtractSurname(jsonRecognizer.getBoolean("extractSurname"));
        }
        if (jsonRecognizer.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonRecognizer.getBoolean("returnFaceImage"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        if (jsonRecognizer.hasKey("returnSignatureImage")) {
            recognizer.setReturnSignatureImage(jsonRecognizer.getBoolean("returnSignatureImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIdFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIdFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("givenName", result.getGivenName());
        jsonResult.putString("signatureImage", SerializationUtils.encodeImageBase64(result.getSignatureImage()));
        jsonResult.putString("surname", result.getSurname());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "SwitzerlandIdFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIdFrontRecognizer.class;
    }
}