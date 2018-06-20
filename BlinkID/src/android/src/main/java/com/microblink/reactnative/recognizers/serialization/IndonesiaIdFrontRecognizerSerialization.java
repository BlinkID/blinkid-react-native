package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class IndonesiaIdFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.indonesia.IndonesiaIdFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.indonesia.IndonesiaIdFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractAddress")) {
            recognizer.setExtractAddress(jsonRecognizer.getBoolean("extractAddress"));
        }
        if (jsonRecognizer.hasKey("extractBloodType")) {
            recognizer.setExtractBloodType(jsonRecognizer.getBoolean("extractBloodType"));
        }
        if (jsonRecognizer.hasKey("extractCitizenship")) {
            recognizer.setExtractCitizenship(jsonRecognizer.getBoolean("extractCitizenship"));
        }
        if (jsonRecognizer.hasKey("extractCity")) {
            recognizer.setExtractCity(jsonRecognizer.getBoolean("extractCity"));
        }
        if (jsonRecognizer.hasKey("extractDistrict")) {
            recognizer.setExtractDistrict(jsonRecognizer.getBoolean("extractDistrict"));
        }
        if (jsonRecognizer.hasKey("extractKelDesa")) {
            recognizer.setExtractKelDesa(jsonRecognizer.getBoolean("extractKelDesa"));
        }
        if (jsonRecognizer.hasKey("extractMaritalStatus")) {
            recognizer.setExtractMaritalStatus(jsonRecognizer.getBoolean("extractMaritalStatus"));
        }
        if (jsonRecognizer.hasKey("extractName")) {
            recognizer.setExtractName(jsonRecognizer.getBoolean("extractName"));
        }
        if (jsonRecognizer.hasKey("extractOccupation")) {
            recognizer.setExtractOccupation(jsonRecognizer.getBoolean("extractOccupation"));
        }
        if (jsonRecognizer.hasKey("extractPlaceOfBirth")) {
            recognizer.setExtractPlaceOfBirth(jsonRecognizer.getBoolean("extractPlaceOfBirth"));
        }
        if (jsonRecognizer.hasKey("extractReligion")) {
            recognizer.setExtractReligion(jsonRecognizer.getBoolean("extractReligion"));
        }
        if (jsonRecognizer.hasKey("extractRt")) {
            recognizer.setExtractRt(jsonRecognizer.getBoolean("extractRt"));
        }
        if (jsonRecognizer.hasKey("extractRw")) {
            recognizer.setExtractRw(jsonRecognizer.getBoolean("extractRw"));
        }
        if (jsonRecognizer.hasKey("extractValidUntil")) {
            recognizer.setExtractValidUntil(jsonRecognizer.getBoolean("extractValidUntil"));
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
        com.microblink.entities.recognizers.blinkid.indonesia.IndonesiaIdFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.indonesia.IndonesiaIdFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("address", result.getAddress());
        jsonResult.putString("bloodType", result.getBloodType());
        jsonResult.putString("citizenship", result.getCitizenship());
        jsonResult.putString("city", result.getCity());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putString("district", result.getDistrict());
        jsonResult.putString("documentClassifier", result.getDocumentClassifier());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("kelDesa", result.getKelDesa());
        jsonResult.putString("maritalStatus", result.getMaritalStatus());
        jsonResult.putString("name", result.getName());
        jsonResult.putString("occupation", result.getOccupation());
        jsonResult.putString("placeOfBirth", result.getPlaceOfBirth());
        jsonResult.putString("province", result.getProvince());
        jsonResult.putString("religion", result.getReligion());
        jsonResult.putString("rt", result.getRt());
        jsonResult.putString("rw", result.getRw());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putString("signatureImage", SerializationUtils.encodeImageBase64(result.getSignatureImage()));
        jsonResult.putMap("validUntil", SerializationUtils.serializeDate(result.getValidUntil()));
        jsonResult.putBoolean("validUntilPermanent", result.getValidUntilPermanent());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "IndonesiaIdFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.indonesia.IndonesiaIdFrontRecognizer.class;
    }
}