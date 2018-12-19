package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class MalaysiaIkadFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaIkadFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaIkadFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractAddress")) {
            recognizer.setExtractAddress(jsonRecognizer.getBoolean("extractAddress"));
        }
        if (jsonRecognizer.hasKey("extractDateOfExpiry")) {
            recognizer.setExtractDateOfExpiry(jsonRecognizer.getBoolean("extractDateOfExpiry"));
        }
        if (jsonRecognizer.hasKey("extractEmployer")) {
            recognizer.setExtractEmployer(jsonRecognizer.getBoolean("extractEmployer"));
        }
        if (jsonRecognizer.hasKey("extractFacultyAddress")) {
            recognizer.setExtractFacultyAddress(jsonRecognizer.getBoolean("extractFacultyAddress"));
        }
        if (jsonRecognizer.hasKey("extractGender")) {
            recognizer.setExtractGender(jsonRecognizer.getBoolean("extractGender"));
        }
        if (jsonRecognizer.hasKey("extractName")) {
            recognizer.setExtractName(jsonRecognizer.getBoolean("extractName"));
        }
        if (jsonRecognizer.hasKey("extractNationality")) {
            recognizer.setExtractNationality(jsonRecognizer.getBoolean("extractNationality"));
        }
        if (jsonRecognizer.hasKey("extractPassportNumber")) {
            recognizer.setExtractPassportNumber(jsonRecognizer.getBoolean("extractPassportNumber"));
        }
        if (jsonRecognizer.hasKey("extractSector")) {
            recognizer.setExtractSector(jsonRecognizer.getBoolean("extractSector"));
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
        com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaIkadFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaIkadFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("address", result.getAddress());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putString("employer", result.getEmployer());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("facultyAddress", result.getFacultyAddress());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("gender", result.getGender());
        jsonResult.putString("name", result.getName());
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("passportNumber", result.getPassportNumber());
        jsonResult.putString("sector", result.getSector());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "MalaysiaIkadFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.malaysia.MalaysiaIkadFrontRecognizer.class;
    }
}