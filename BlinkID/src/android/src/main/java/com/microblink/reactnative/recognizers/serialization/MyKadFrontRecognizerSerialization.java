package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class MyKadFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.malaysia.MyKadFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.malaysia.MyKadFrontRecognizer();
        if (jsonRecognizer.hasKey("extractArmyNumber")) {
            recognizer.setExtractArmyNumber(jsonRecognizer.getBoolean("extractArmyNumber"));
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
        com.microblink.entities.recognizers.blinkid.malaysia.MyKadFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.malaysia.MyKadFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("armyNumber", result.getArmyNumber());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("nricNumber", result.getNricNumber());
        jsonResult.putString("ownerAddress", result.getOwnerAddress());
        jsonResult.putString("ownerAddressCity", result.getOwnerAddressCity());
        jsonResult.putString("ownerAddressState", result.getOwnerAddressState());
        jsonResult.putString("ownerAddressStreet", result.getOwnerAddressStreet());
        jsonResult.putString("ownerAddressZipCode", result.getOwnerAddressZipCode());
        jsonResult.putMap("ownerBirthDate", SerializationUtils.serializeDate(result.getOwnerBirthDate()));
        jsonResult.putString("ownerFullName", result.getOwnerFullName());
        jsonResult.putString("ownerReligion", result.getOwnerReligion());
        jsonResult.putString("ownerSex", result.getOwnerSex());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "MyKadFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.malaysia.MyKadFrontRecognizer.class;
    }
}