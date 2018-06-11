package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class ColombiaIDBackSideRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDBackSideRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDBackSideRecognizer();
        if (jsonRecognizer.hasKey("nullQuietZoneAllowed")) {
            recognizer.setNullQuietZoneAllowed(jsonRecognizer.getBoolean("nullQuietZoneAllowed"));
        }
        if (jsonRecognizer.hasKey("scanUncertain")) {
            recognizer.setScanUncertain(jsonRecognizer.getBoolean("scanUncertain"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDBackSideRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDBackSideRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putString("ownerBloodGroup", result.getOwnerBloodGroup());
        jsonResult.putMap("ownerDateOfBirth", SerializationUtils.serializeDate(result.getOwnerDateOfBirth()));
        jsonResult.putString("ownerFingerprint", SerializationUtils.encodeByteArrayToBase64(result.getOwnerFingerprint()));
        jsonResult.putString("ownerFirsName", result.getOwnerFirsName());
        jsonResult.putString("ownerLastName", result.getOwnerLastName());
        jsonResult.putString("ownerSex", result.getOwnerSex());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "ColombiaIDBackSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDBackSideRecognizer.class;
    }
}