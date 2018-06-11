package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class SingaporeIDBackRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.singapore.SingaporeIDBackRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.singapore.SingaporeIDBackRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractBloodGroup")) {
            recognizer.setExtractBloodGroup(jsonRecognizer.getBoolean("extractBloodGroup"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssue")) {
            recognizer.setExtractDateOfIssue(jsonRecognizer.getBoolean("extractDateOfIssue"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.singapore.SingaporeIDBackRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.singapore.SingaporeIDBackRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("address", result.getAddress());
        jsonResult.putString("bloodGroup", result.getBloodGroup());
        jsonResult.putString("cardNumber", result.getCardNumber());
        jsonResult.putMap("documentDateOfIssue", SerializationUtils.serializeDate(result.getDocumentDateOfIssue()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "SingaporeIDBackRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.singapore.SingaporeIDBackRecognizer.class;
    }
}