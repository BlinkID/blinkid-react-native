package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class SlovakiaIdBackRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.slovakia.SlovakiaIdBackRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.slovakia.SlovakiaIdBackRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractPlaceOfBirth")) {
            recognizer.setExtractPlaceOfBirth(jsonRecognizer.getBoolean("extractPlaceOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractSpecialRemarks")) {
            recognizer.setExtractSpecialRemarks(jsonRecognizer.getBoolean("extractSpecialRemarks"));
        }
        if (jsonRecognizer.hasKey("extractSurnameAtBirth")) {
            recognizer.setExtractSurnameAtBirth(jsonRecognizer.getBoolean("extractSurnameAtBirth"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.slovakia.SlovakiaIdBackRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.slovakia.SlovakiaIdBackRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("address", result.getAddress());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putString("documentCode", result.getDocumentCode());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("issuer", result.getIssuer());
        jsonResult.putBoolean("mrzParsed", result.isMrzParsed());
        jsonResult.putString("mrzText", result.getMrzText());
        jsonResult.putBoolean("mrzVerified", result.isMrzVerified());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("opt1", result.getOpt1());
        jsonResult.putString("opt2", result.getOpt2());
        jsonResult.putString("placeOfBirth", result.getPlaceOfBirth());
        jsonResult.putString("primaryId", result.getPrimaryId());
        jsonResult.putString("secondaryId", result.getSecondaryId());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putString("specialRemarks", result.getSpecialRemarks());
        jsonResult.putString("surnameAtBirth", result.getSurnameAtBirth());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "SlovakiaIdBackRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.slovakia.SlovakiaIdBackRecognizer.class;
    }
}