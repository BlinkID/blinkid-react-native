package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class GermanyCombinedRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.germany.GermanyCombinedRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.germany.GermanyCombinedRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
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
        if (jsonRecognizer.hasKey("signResult")) {
            recognizer.setSignResult(jsonRecognizer.getBoolean("signResult"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.germany.GermanyCombinedRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.germany.GermanyCombinedRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putBoolean("MRZVerified", result.isMRZVerified());
        jsonResult.putString("address", result.getAddress());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putString("digitalSignature", SerializationUtils.encodeByteArrayToBase64(result.getDigitalSignature()));
        jsonResult.putInt("digitalSignatureVersion", result.getDigitalSignatureVersion());
        jsonResult.putBoolean("documentDataMatch", result.isDocumentDataMatch());
        jsonResult.putMap("documentDateOfExpiry", SerializationUtils.serializeDate(result.getDocumentDateOfExpiry()));
        jsonResult.putMap("documentDateOfIssue", SerializationUtils.serializeDate(result.getDocumentDateOfIssue()));
        jsonResult.putString("eyeColor", result.getEyeColor());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("fullDocumentBackImage", SerializationUtils.encodeImageBase64(result.getFullDocumentBackImage()));
        jsonResult.putString("fullDocumentFrontImage", SerializationUtils.encodeImageBase64(result.getFullDocumentFrontImage()));
        jsonResult.putString("height", result.getHeight());
        jsonResult.putString("identityCardNumber", result.getIdentityCardNumber());
        jsonResult.putString("issuingAuthority", result.getIssuingAuthority());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("placeOfBirth", result.getPlaceOfBirth());
        jsonResult.putBoolean("scanningFirstSideDone", result.isScanningFirstSideDone());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putString("signatureImage", SerializationUtils.encodeImageBase64(result.getSignatureImage()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "GermanyCombinedRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.germany.GermanyCombinedRecognizer.class;
    }
}