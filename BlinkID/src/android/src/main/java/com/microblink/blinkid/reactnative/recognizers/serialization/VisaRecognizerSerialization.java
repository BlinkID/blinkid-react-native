package com.microblink.blinkid.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.blinkid.entities.recognizers.Recognizer;
import com.microblink.blinkid.reactnative.recognizers.RecognizerSerialization;
import com.microblink.blinkid.reactnative.SerializationUtils;

public final class VisaRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?> createRecognizer(ReadableMap jsonMap) {
        com.microblink.blinkid.entities.recognizers.blinkid.visa.VisaRecognizer recognizer = new com.microblink.blinkid.entities.recognizers.blinkid.visa.VisaRecognizer();
        if (jsonMap.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonMap.getBoolean("detectGlare"));
        }
        if (jsonMap.hasKey("faceImageDpi")) {
            recognizer.setFaceImageDpi(jsonMap.getInt("faceImageDpi"));
        }
        if (jsonMap.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonMap.getInt("fullDocumentImageDpi"));
        }
        if (jsonMap.hasKey("fullDocumentImageExtensionFactors")) {
            recognizer.setFullDocumentImageExtensionFactors(SerializationUtils.deserializeExtensionFactors(jsonMap.getMap("fullDocumentImageExtensionFactors")));
        }
        if (jsonMap.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonMap.getBoolean("returnFaceImage"));
        }
        if (jsonMap.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonMap.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?> recognizer) {
        com.microblink.blinkid.entities.recognizers.blinkid.visa.VisaRecognizer.Result result = ((com.microblink.blinkid.entities.recognizers.blinkid.visa.VisaRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonRecognizerResultData(jsonResult, result);
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putMap("mrzResult", BlinkIDSerializationUtils.serializeMrzResult(result.getMrzResult()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "VisaRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.blinkid.entities.recognizers.blinkid.visa.VisaRecognizer.class;
    }
}