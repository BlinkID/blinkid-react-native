package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class ColombiaIDFrontSideRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDFrontSideRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDFrontSideRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractFirstName")) {
            recognizer.setExtractFirstName(jsonRecognizer.getBoolean("extractFirstName"));
        }
        if (jsonRecognizer.hasKey("extractLastName")) {
            recognizer.setExtractLastName(jsonRecognizer.getBoolean("extractLastName"));
        }
        if (jsonRecognizer.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonRecognizer.getBoolean("returnFaceImage"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        if (jsonRecognizer.hasKey("returnSignatureImage")) {
            recognizer.setReturnSignatureImage(jsonRecognizer.getBoolean("returnSignatureImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDFrontSideRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDFrontSideRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("ownerFirsName", result.getOwnerFirsName());
        jsonResult.putString("ownerLastName", result.getOwnerLastName());
        jsonResult.putString("signatureImage", SerializationUtils.encodeImageBase64(result.getSignatureImage()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "ColombiaIDFrontSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.colombia.ColombiaIDFrontSideRecognizer.class;
    }
}