package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.entities.recognizers.blinkbarcode.usdl.UsdlKeys;
import com.microblink.entities.recognizers.blinkbarcode.usdl.UsdlRecognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class UsdlRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkbarcode.usdl.UsdlRecognizer recognizer = new com.microblink.entities.recognizers.blinkbarcode.usdl.UsdlRecognizer();
        if (jsonRecognizer.hasKey("nullQuietZoneAllowed")) {
            recognizer.setNullQuietZoneAllowed(jsonRecognizer.getBoolean("nullQuietZoneAllowed"));
        }
        if (jsonRecognizer.hasKey("uncertainDecoding")) {
            recognizer.setUncertainDecoding(jsonRecognizer.getBoolean("uncertainDecoding"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        UsdlRecognizer.Result result = ((UsdlRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putArray("optionalElements", SerializationUtils.serializeStringArray(result.getOptionalElements()));
        jsonResult.putString("rawData", SerializationUtils.encodeByteArrayToBase64(result.getRawData()));
        jsonResult.putString("rawStringData", result.getRawStringData());
        jsonResult.putBoolean("uncertain", result.isUncertain());
        jsonResult.putArray("fields", serializeFields(result));
        return jsonResult;
    }

    private WritableArray serializeFields(UsdlRecognizer.Result result) {
        WritableArray fieldsArr = new WritableNativeArray();
        for (int i = 0; i < UsdlKeys.values().length; ++i) {
            fieldsArr.pushString(result.getField(UsdlKeys.values()[i]));
        }
        return fieldsArr;
    }

    @Override
    public String getJsonName() {
        return "UsdlRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkbarcode.usdl.UsdlRecognizer.class;
    }
}
