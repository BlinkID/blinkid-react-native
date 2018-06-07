package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.entities.recognizers.blinkbarcode.usdl.USDLKeys;
import com.microblink.entities.recognizers.blinkbarcode.usdl.USDLRecognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;
import com.microblink.reactnative.recognizers.SerializationUtils;

public final class USDLRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        return null;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        USDLRecognizer.Result result = ((USDLRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putArray("optionalElements", SerializationUtils.serializeStringArray(result.getOptionalElements()));
        jsonResult.putString("rawData", SerializationUtils.encodeByteArrayToBase64(result.getRawData()));
        jsonResult.putString("rawStringData", result.getRawStringData());
        jsonResult.putBoolean("uncertain", result.isUncertain());
        jsonResult.putArray("fields", serializeFields(result));
        return jsonResult;
    }

    private WritableArray serializeFields(USDLRecognizer.Result result) {
        WritableArray fieldsArr = new WritableNativeArray();
        for (int i = 0; i < USDLKeys.values().length; ++i) {
            fieldsArr.pushString(result.getField(USDLKeys.values()[i]));
        }
        return fieldsArr;
    }

    @Override
    public String getJsonName() {
        return "USDLRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkbarcode.usdl.USDLRecognizer.class;
    }
}
