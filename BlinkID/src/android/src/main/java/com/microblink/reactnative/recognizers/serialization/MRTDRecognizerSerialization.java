package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;
import com.microblink.reactnative.recognizers.SerializationUtils;

public final class MRTDRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.mrtd.MRTDRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.mrtd.MRTDRecognizer();
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
        if (jsonRecognizer.hasKey("returnMRZImage")) {
            recognizer.setReturnMRZImage(jsonRecognizer.getBoolean("returnMRZImage"));
        }
        if (jsonRecognizer.hasKey("saveImageDPI")) {
            recognizer.setSaveImageDPI(jsonRecognizer.getInt("saveImageDPI"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.mrtd.MRTDRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.mrtd.MRTDRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putMap("MRZResult", com.microblink.reactnative.recognizers.BlinkIDSerializationUtils.serializeMRZResult(result.getMRZResult()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("mrzImage", SerializationUtils.encodeImageBase64(result.getMrzImage()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "MRTDRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.mrtd.MRTDRecognizer.class;
    }
}
