package com.microblink.blinkid.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.blinkid.entities.recognizers.Recognizer;
import com.microblink.blinkid.reactnative.recognizers.RecognizerSerialization;
import com.microblink.blinkid.reactnative.SerializationUtils;

public final class MrtdCombinedRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?> createRecognizer(ReadableMap jsonMap) {
        com.microblink.blinkid.entities.recognizers.blinkid.mrtd.MrtdCombinedRecognizer recognizer = new com.microblink.blinkid.entities.recognizers.blinkid.mrtd.MrtdCombinedRecognizer();
        if (jsonMap.hasKey("allowSpecialCharacters")) {
            recognizer.setAllowSpecialCharacters(jsonMap.getBoolean("allowSpecialCharacters"));
        }
        if (jsonMap.hasKey("allowUnparsedResults")) {
            recognizer.setAllowUnparsedResults(jsonMap.getBoolean("allowUnparsedResults"));
        }
        if (jsonMap.hasKey("allowUnverifiedResults")) {
            recognizer.setAllowUnverifiedResults(jsonMap.getBoolean("allowUnverifiedResults"));
        }
        if (jsonMap.hasKey("detectorType")) {
            recognizer.setDetectorType(com.microblink.blinkid.entities.recognizers.blinkid.documentface.DocumentFaceDetectorType.values()[jsonMap.getInt("detectorType")]);
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
        if (jsonMap.hasKey("numStableDetectionsThreshold")) {
            recognizer.setNumStableDetectionsThreshold(jsonMap.getInt("numStableDetectionsThreshold"));
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
        com.microblink.blinkid.entities.recognizers.blinkid.mrtd.MrtdCombinedRecognizer.Result result = ((com.microblink.blinkid.entities.recognizers.blinkid.mrtd.MrtdCombinedRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonRecognizerResultData(jsonResult, result);
        jsonResult.putInt("documentDataMatch", SerializationUtils.serializeEnum(result.getDocumentDataMatch()));
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentBackImage", SerializationUtils.encodeImageBase64(result.getFullDocumentBackImage()));
        jsonResult.putString("fullDocumentFrontImage", SerializationUtils.encodeImageBase64(result.getFullDocumentFrontImage()));
        jsonResult.putMap("mrzResult", BlinkIDSerializationUtils.serializeMrzResult(result.getMrzResult()));
        jsonResult.putBoolean("scanningFirstSideDone", result.isScanningFirstSideDone());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "MrtdCombinedRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.blinkid.entities.recognizers.blinkid.mrtd.MrtdCombinedRecognizer.class;
    }
}