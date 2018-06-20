package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class MrtdRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.mrtd.MrtdRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.mrtd.MrtdRecognizer();
        if (jsonRecognizer.hasKey("allowUnparsedResults")) {
            recognizer.setAllowUnparsedResults(jsonRecognizer.getBoolean("allowUnparsedResults"));
        }
        if (jsonRecognizer.hasKey("allowUnverifiedResults")) {
            recognizer.setAllowUnverifiedResults(jsonRecognizer.getBoolean("allowUnverifiedResults"));
        }
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        if (jsonRecognizer.hasKey("returnMrzImage")) {
            recognizer.setReturnMrzImage(jsonRecognizer.getBoolean("returnMrzImage"));
        }
        if (jsonRecognizer.hasKey("saveImageDPI")) {
            recognizer.setSaveImageDPI(jsonRecognizer.getInt("saveImageDPI"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.mrtd.MrtdRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.mrtd.MrtdRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("mrzImage", SerializationUtils.encodeImageBase64(result.getMrzImage()));
        jsonResult.putMap("mrzResult", BlinkIDSerializationUtils.serializeMrzResult(result.getMrzResult()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "MrtdRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.mrtd.MrtdRecognizer.class;
    }
}