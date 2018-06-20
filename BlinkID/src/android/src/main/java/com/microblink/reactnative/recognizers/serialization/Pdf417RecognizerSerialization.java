package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class Pdf417RecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkbarcode.pdf417.Pdf417Recognizer recognizer = new com.microblink.entities.recognizers.blinkbarcode.pdf417.Pdf417Recognizer();
        if (jsonRecognizer.hasKey("nullQuietZoneAllowed")) {
            recognizer.setNullQuietZoneAllowed(jsonRecognizer.getBoolean("nullQuietZoneAllowed"));
        }
        if (jsonRecognizer.hasKey("scanInverse")) {
            recognizer.setScanInverse(jsonRecognizer.getBoolean("scanInverse"));
        }
        if (jsonRecognizer.hasKey("scanUncertain")) {
            recognizer.setScanUncertain(jsonRecognizer.getBoolean("scanUncertain"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkbarcode.pdf417.Pdf417Recognizer.Result result = ((com.microblink.entities.recognizers.blinkbarcode.pdf417.Pdf417Recognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putInt("barcodeType", SerializationUtils.serializeEnum(result.getBarcodeType()));
        jsonResult.putString("rawData", SerializationUtils.encodeByteArrayToBase64(result.getRawData()));
        jsonResult.putString("stringData", result.getStringData());
        jsonResult.putBoolean("uncertain", result.isUncertain());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "Pdf417Recognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkbarcode.pdf417.Pdf417Recognizer.class;
    }
}