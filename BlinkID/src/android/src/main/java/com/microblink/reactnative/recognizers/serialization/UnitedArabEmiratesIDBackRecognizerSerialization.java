package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class UnitedArabEmiratesIDBackRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.unitedArabEmirates.UnitedArabEmiratesIDBackRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.unitedArabEmirates.UnitedArabEmiratesIDBackRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.unitedArabEmirates.UnitedArabEmiratesIDBackRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.unitedArabEmirates.UnitedArabEmiratesIDBackRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putMap("MRZResult", BlinkIDSerializationUtils.serializeMRZResult(result.getMRZResult()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "UnitedArabEmiratesIDBackRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.unitedArabEmirates.UnitedArabEmiratesIDBackRecognizer.class;
    }
}