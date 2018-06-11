package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class GermanyIDBackSideRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.germany.GermanyIDBackSideRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.germany.GermanyIDBackSideRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.germany.GermanyIDBackSideRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.germany.GermanyIDBackSideRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putBoolean("MRZParsed", result.isMRZParsed());
        jsonResult.putString("MRZText", result.getMRZText());
        jsonResult.putBoolean("MRZVerified", result.isMRZVerified());
        jsonResult.putString("address", result.getAddress());
        jsonResult.putString("addressCity", result.getAddressCity());
        jsonResult.putString("addressHouseNumber", result.getAddressHouseNumber());
        jsonResult.putString("addressStreet", result.getAddressStreet());
        jsonResult.putString("addressZipCode", result.getAddressZipCode());
        jsonResult.putString("alienNumber", result.getAlienNumber());
        jsonResult.putString("applicationReceiptNumber", result.getApplicationReceiptNumber());
        jsonResult.putString("authority", result.getAuthority());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("documentCode", result.getDocumentCode());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putInt("documentType", SerializationUtils.serializeEnum(result.getDocumentType()));
        jsonResult.putString("eyeColour", result.getEyeColour());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putInt("height", result.getHeight());
        jsonResult.putString("immigrantCaseNumber", result.getImmigrantCaseNumber());
        jsonResult.putString("issuer", result.getIssuer());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("opt1", result.getOpt1());
        jsonResult.putString("opt2", result.getOpt2());
        jsonResult.putString("primaryId", result.getPrimaryId());
        jsonResult.putString("secondaryId", result.getSecondaryId());
        jsonResult.putString("sex", result.getSex());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "GermanyIDBackSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.germany.GermanyIDBackSideRecognizer.class;
    }
}