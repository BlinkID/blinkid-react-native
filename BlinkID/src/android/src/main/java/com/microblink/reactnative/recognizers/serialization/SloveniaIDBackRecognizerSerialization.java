package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class SloveniaIDBackRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.slovenia.SloveniaIDBackRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.slovenia.SloveniaIDBackRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractAuthority")) {
            recognizer.setExtractAuthority(jsonRecognizer.getBoolean("extractAuthority"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssue")) {
            recognizer.setExtractDateOfIssue(jsonRecognizer.getBoolean("extractDateOfIssue"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.slovenia.SloveniaIDBackRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.slovenia.SloveniaIDBackRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putBoolean("MRZParsed", result.isMRZParsed());
        jsonResult.putString("MRZText", result.getMRZText());
        jsonResult.putBoolean("MRZVerified", result.isMRZVerified());
        jsonResult.putString("address", result.getAddress());
        jsonResult.putString("alienNumber", result.getAlienNumber());
        jsonResult.putString("applicationReceiptNumber", result.getApplicationReceiptNumber());
        jsonResult.putString("authority", result.getAuthority());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("documentCode", result.getDocumentCode());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putInt("documentType", SerializationUtils.serializeEnum(result.getDocumentType()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
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
        return "SloveniaIDBackRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.slovenia.SloveniaIDBackRecognizer.class;
    }
}