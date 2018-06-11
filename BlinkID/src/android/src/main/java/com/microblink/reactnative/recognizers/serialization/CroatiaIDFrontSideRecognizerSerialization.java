package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class CroatiaIDFrontSideRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.croatia.CroatiaIDFrontSideRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.croatia.CroatiaIDFrontSideRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractCitizenship")) {
            recognizer.setExtractCitizenship(jsonRecognizer.getBoolean("extractCitizenship"));
        }
        if (jsonRecognizer.hasKey("extractDateOfBirth")) {
            recognizer.setExtractDateOfBirth(jsonRecognizer.getBoolean("extractDateOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractDateOfExpiry")) {
            recognizer.setExtractDateOfExpiry(jsonRecognizer.getBoolean("extractDateOfExpiry"));
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
        if (jsonRecognizer.hasKey("returnSignatureImage")) {
            recognizer.setReturnSignatureImage(jsonRecognizer.getBoolean("returnSignatureImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.croatia.CroatiaIDFrontSideRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.croatia.CroatiaIDFrontSideRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("citizenship", result.getCitizenship());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putBoolean("documentBilingual", result.isDocumentBilingual());
        jsonResult.putMap("documentDateOfExpiry", SerializationUtils.serializeDate(result.getDocumentDateOfExpiry()));
        jsonResult.putBoolean("documentDateOfExpiryPermanent", result.getDocumentDateOfExpiryPermanent());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("identityCardNumber", result.getIdentityCardNumber());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putString("signatureImage", SerializationUtils.encodeImageBase64(result.getSignatureImage()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "CroatiaIDFrontSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.croatia.CroatiaIDFrontSideRecognizer.class;
    }
}