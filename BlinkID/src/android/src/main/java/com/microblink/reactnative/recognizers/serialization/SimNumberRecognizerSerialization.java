package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class SimNumberRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkbarcode.simnumber.SimNumberRecognizer recognizer = new com.microblink.entities.recognizers.blinkbarcode.simnumber.SimNumberRecognizer();
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkbarcode.simnumber.SimNumberRecognizer.Result result = ((com.microblink.entities.recognizers.blinkbarcode.simnumber.SimNumberRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("simNumber", result.getSimNumber());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "SimNumberRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkbarcode.simnumber.SimNumberRecognizer.class;
    }
}