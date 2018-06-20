package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class MalaysiaDlFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaDlFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaDlFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractDlClass")) {
            recognizer.setExtractDlClass(jsonRecognizer.getBoolean("extractDlClass"));
        }
        if (jsonRecognizer.hasKey("extractFullAddress")) {
            recognizer.setExtractFullAddress(jsonRecognizer.getBoolean("extractFullAddress"));
        }
        if (jsonRecognizer.hasKey("extractName")) {
            recognizer.setExtractName(jsonRecognizer.getBoolean("extractName"));
        }
        if (jsonRecognizer.hasKey("extractNationality")) {
            recognizer.setExtractNationality(jsonRecognizer.getBoolean("extractNationality"));
        }
        if (jsonRecognizer.hasKey("extractValidFrom")) {
            recognizer.setExtractValidFrom(jsonRecognizer.getBoolean("extractValidFrom"));
        }
        if (jsonRecognizer.hasKey("extractValidUntil")) {
            recognizer.setExtractValidUntil(jsonRecognizer.getBoolean("extractValidUntil"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonRecognizer.getInt("fullDocumentImageDpi"));
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
        com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaDlFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaDlFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("city", result.getCity());
        jsonResult.putString("dlClass", result.getDlClass());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullAddress", result.getFullAddress());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("identityNumber", result.getIdentityNumber());
        jsonResult.putString("name", result.getName());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("state", result.getState());
        jsonResult.putString("street", result.getStreet());
        jsonResult.putMap("validFrom", SerializationUtils.serializeDate(result.getValidFrom()));
        jsonResult.putMap("validUntil", SerializationUtils.serializeDate(result.getValidUntil()));
        jsonResult.putString("zipCode", result.getZipCode());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "MalaysiaDlFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaDlFrontRecognizer.class;
    }
}