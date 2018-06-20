package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class PolandIdFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.poland.PolandIdFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.poland.PolandIdFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractDateOfBirth")) {
            recognizer.setExtractDateOfBirth(jsonRecognizer.getBoolean("extractDateOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractFamilyName")) {
            recognizer.setExtractFamilyName(jsonRecognizer.getBoolean("extractFamilyName"));
        }
        if (jsonRecognizer.hasKey("extractGivenNames")) {
            recognizer.setExtractGivenNames(jsonRecognizer.getBoolean("extractGivenNames"));
        }
        if (jsonRecognizer.hasKey("extractParentsGivenNames")) {
            recognizer.setExtractParentsGivenNames(jsonRecognizer.getBoolean("extractParentsGivenNames"));
        }
        if (jsonRecognizer.hasKey("extractSex")) {
            recognizer.setExtractSex(jsonRecognizer.getBoolean("extractSex"));
        }
        if (jsonRecognizer.hasKey("extractSurname")) {
            recognizer.setExtractSurname(jsonRecognizer.getBoolean("extractSurname"));
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
        com.microblink.entities.recognizers.blinkid.poland.PolandIdFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.poland.PolandIdFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("familyName", result.getFamilyName());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("givenNames", result.getGivenNames());
        jsonResult.putString("parentsGivenNames", result.getParentsGivenNames());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putString("surname", result.getSurname());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "PolandIdFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.poland.PolandIdFrontRecognizer.class;
    }
}