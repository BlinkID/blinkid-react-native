package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class SwitzerlandIDBackRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIDBackRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIDBackRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractAuthority")) {
            recognizer.setExtractAuthority(jsonRecognizer.getBoolean("extractAuthority"));
        }
        if (jsonRecognizer.hasKey("extractDateOfExpiry")) {
            recognizer.setExtractDateOfExpiry(jsonRecognizer.getBoolean("extractDateOfExpiry"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssue")) {
            recognizer.setExtractDateOfIssue(jsonRecognizer.getBoolean("extractDateOfIssue"));
        }
        if (jsonRecognizer.hasKey("extractHeight")) {
            recognizer.setExtractHeight(jsonRecognizer.getBoolean("extractHeight"));
        }
        if (jsonRecognizer.hasKey("extractPlaceOfOrigin")) {
            recognizer.setExtractPlaceOfOrigin(jsonRecognizer.getBoolean("extractPlaceOfOrigin"));
        }
        if (jsonRecognizer.hasKey("extractSex")) {
            recognizer.setExtractSex(jsonRecognizer.getBoolean("extractSex"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIDBackRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIDBackRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putBoolean("MRZParsed", result.isMRZParsed());
        jsonResult.putString("MRZText", result.getMRZText());
        jsonResult.putBoolean("MRZVerified", result.isMRZVerified());
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
        jsonResult.putString("height", result.getHeight());
        jsonResult.putString("immigrantCaseNumber", result.getImmigrantCaseNumber());
        jsonResult.putString("issuer", result.getIssuer());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putMap("nonMRZDateOfExpiry", SerializationUtils.serializeDate(result.getNonMRZDateOfExpiry()));
        jsonResult.putString("nonMRZSex", result.getNonMRZSex());
        jsonResult.putString("opt1", result.getOpt1());
        jsonResult.putString("opt2", result.getOpt2());
        jsonResult.putString("placeOfOrigin", result.getPlaceOfOrigin());
        jsonResult.putString("primaryId", result.getPrimaryId());
        jsonResult.putString("secondaryId", result.getSecondaryId());
        jsonResult.putString("sex", result.getSex());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "SwitzerlandIDBackRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.switzerland.SwitzerlandIDBackRecognizer.class;
    }
}