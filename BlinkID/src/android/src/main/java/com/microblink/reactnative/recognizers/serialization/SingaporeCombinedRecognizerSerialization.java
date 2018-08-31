package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class SingaporeCombinedRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.singapore.SingaporeCombinedRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.singapore.SingaporeCombinedRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractAddress")) {
            recognizer.setExtractAddress(jsonRecognizer.getBoolean("extractAddress"));
        }
        if (jsonRecognizer.hasKey("extractAddressChangeDate")) {
            recognizer.setExtractAddressChangeDate(jsonRecognizer.getBoolean("extractAddressChangeDate"));
        }
        if (jsonRecognizer.hasKey("extractBloodType")) {
            recognizer.setExtractBloodType(jsonRecognizer.getBoolean("extractBloodType"));
        }
        if (jsonRecognizer.hasKey("extractCountryOfBirth")) {
            recognizer.setExtractCountryOfBirth(jsonRecognizer.getBoolean("extractCountryOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractDateOfBirth")) {
            recognizer.setExtractDateOfBirth(jsonRecognizer.getBoolean("extractDateOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssue")) {
            recognizer.setExtractDateOfIssue(jsonRecognizer.getBoolean("extractDateOfIssue"));
        }
        if (jsonRecognizer.hasKey("extractName")) {
            recognizer.setExtractName(jsonRecognizer.getBoolean("extractName"));
        }
        if (jsonRecognizer.hasKey("extractRace")) {
            recognizer.setExtractRace(jsonRecognizer.getBoolean("extractRace"));
        }
        if (jsonRecognizer.hasKey("extractSex")) {
            recognizer.setExtractSex(jsonRecognizer.getBoolean("extractSex"));
        }
        if (jsonRecognizer.hasKey("faceImageDpi")) {
            recognizer.setFaceImageDpi(jsonRecognizer.getInt("faceImageDpi"));
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
        if (jsonRecognizer.hasKey("signResult")) {
            recognizer.setSignResult(jsonRecognizer.getBoolean("signResult"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.singapore.SingaporeCombinedRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.singapore.SingaporeCombinedRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("address", result.getAddress());
        jsonResult.putMap("addressChangeDate", SerializationUtils.serializeDate(result.getAddressChangeDate()));
        jsonResult.putString("bloodType", result.getBloodType());
        jsonResult.putString("countryOfBirth", result.getCountryOfBirth());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("digitalSignature", SerializationUtils.encodeByteArrayToBase64(result.getDigitalSignature()));
        jsonResult.putInt("digitalSignatureVersion", result.getDigitalSignatureVersion());
        jsonResult.putBoolean("documentDataMatch", result.isDocumentDataMatch());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentBackImage", SerializationUtils.encodeImageBase64(result.getFullDocumentBackImage()));
        jsonResult.putString("fullDocumentFrontImage", SerializationUtils.encodeImageBase64(result.getFullDocumentFrontImage()));
        jsonResult.putString("identityCardNumber", result.getIdentityCardNumber());
        jsonResult.putString("name", result.getName());
        jsonResult.putString("race", result.getRace());
        jsonResult.putBoolean("scanningFirstSideDone", result.isScanningFirstSideDone());
        jsonResult.putString("sex", result.getSex());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "SingaporeCombinedRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.singapore.SingaporeCombinedRecognizer.class;
    }
}