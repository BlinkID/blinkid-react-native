package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class PolandIDFrontSideRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.poland.PolandIDFrontSideRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.poland.PolandIDFrontSideRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractDateOfBirth")) {
            recognizer.setExtractDateOfBirth(jsonRecognizer.getBoolean("extractDateOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractFamilyName")) {
            recognizer.setExtractFamilyName(jsonRecognizer.getBoolean("extractFamilyName"));
        }
        if (jsonRecognizer.hasKey("extractFirstName")) {
            recognizer.setExtractFirstName(jsonRecognizer.getBoolean("extractFirstName"));
        }
        if (jsonRecognizer.hasKey("extractLastName")) {
            recognizer.setExtractLastName(jsonRecognizer.getBoolean("extractLastName"));
        }
        if (jsonRecognizer.hasKey("extractParentsName")) {
            recognizer.setExtractParentsName(jsonRecognizer.getBoolean("extractParentsName"));
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
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.poland.PolandIDFrontSideRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.poland.PolandIDFrontSideRecognizer)recognizer).getResult();
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
        return "PolandIDFrontSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.poland.PolandIDFrontSideRecognizer.class;
    }
}