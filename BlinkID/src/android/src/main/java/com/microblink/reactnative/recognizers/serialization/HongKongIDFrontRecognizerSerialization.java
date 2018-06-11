package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class HongKongIDFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.hongkong.HongKongIDFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.hongkong.HongKongIDFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractCommercialCode")) {
            recognizer.setExtractCommercialCode(jsonRecognizer.getBoolean("extractCommercialCode"));
        }
        if (jsonRecognizer.hasKey("extractDateOfBirth")) {
            recognizer.setExtractDateOfBirth(jsonRecognizer.getBoolean("extractDateOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssue")) {
            recognizer.setExtractDateOfIssue(jsonRecognizer.getBoolean("extractDateOfIssue"));
        }
        if (jsonRecognizer.hasKey("extractFullName")) {
            recognizer.setExtractFullName(jsonRecognizer.getBoolean("extractFullName"));
        }
        if (jsonRecognizer.hasKey("extractSex")) {
            recognizer.setExtractSex(jsonRecognizer.getBoolean("extractSex"));
        }
        if (jsonRecognizer.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonRecognizer.getBoolean("returnFaceImage"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.hongkong.HongKongIDFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.hongkong.HongKongIDFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putMap("ownerBirthDate", SerializationUtils.serializeDate(result.getOwnerBirthDate()));
        jsonResult.putString("ownerCommercialCode", result.getOwnerCommercialCode());
        jsonResult.putString("ownerFullName", result.getOwnerFullName());
        jsonResult.putString("ownerSex", result.getOwnerSex());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "HongKongIDFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.hongkong.HongKongIDFrontRecognizer.class;
    }
}