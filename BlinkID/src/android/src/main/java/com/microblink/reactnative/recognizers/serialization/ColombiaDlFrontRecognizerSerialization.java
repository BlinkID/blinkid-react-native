package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class ColombiaDlFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.colombia.ColombiaDlFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.colombia.ColombiaDlFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractDateOfBirth")) {
            recognizer.setExtractDateOfBirth(jsonRecognizer.getBoolean("extractDateOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractDriverRestrictions")) {
            recognizer.setExtractDriverRestrictions(jsonRecognizer.getBoolean("extractDriverRestrictions"));
        }
        if (jsonRecognizer.hasKey("extractIssuingAgency")) {
            recognizer.setExtractIssuingAgency(jsonRecognizer.getBoolean("extractIssuingAgency"));
        }
        if (jsonRecognizer.hasKey("extractName")) {
            recognizer.setExtractName(jsonRecognizer.getBoolean("extractName"));
        }
        if (jsonRecognizer.hasKey("faceImageDpi")) {
            recognizer.setFaceImageDpi(jsonRecognizer.getInt("faceImageDpi"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonRecognizer.getInt("fullDocumentImageDpi"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageExtensionFactors")) {
            recognizer.setFullDocumentImageExtensionFactors(BlinkIDSerializationUtils.deserializeExtensionFactors(jsonRecognizer.getMap("fullDocumentImageExtensionFactors")));
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
        com.microblink.entities.recognizers.blinkid.colombia.ColombiaDlFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.colombia.ColombiaDlFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("driverRestrictions", result.getDriverRestrictions());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("issuingAgency", result.getIssuingAgency());
        jsonResult.putString("licenceNumber", result.getLicenceNumber());
        jsonResult.putString("name", result.getName());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "ColombiaDlFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.colombia.ColombiaDlFrontRecognizer.class;
    }
}