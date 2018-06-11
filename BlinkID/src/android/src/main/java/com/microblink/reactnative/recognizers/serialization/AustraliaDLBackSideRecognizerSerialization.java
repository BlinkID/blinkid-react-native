package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class AustraliaDLBackSideRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.australia.AustraliaDLBackSideRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.australia.AustraliaDLBackSideRecognizer();
        if (jsonRecognizer.hasKey("extractAddress")) {
            recognizer.setExtractAddress(jsonRecognizer.getBoolean("extractAddress"));
        }
        if (jsonRecognizer.hasKey("extractDateOfExpiry")) {
            recognizer.setExtractDateOfExpiry(jsonRecognizer.getBoolean("extractDateOfExpiry"));
        }
        if (jsonRecognizer.hasKey("extractLastName")) {
            recognizer.setExtractLastName(jsonRecognizer.getBoolean("extractLastName"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageDPI")) {
            recognizer.setFullDocumentImageDPI(jsonRecognizer.getInt("fullDocumentImageDPI"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.australia.AustraliaDLBackSideRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.australia.AustraliaDLBackSideRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("address", result.getAddress());
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("licenceNumber", result.getLicenceNumber());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "AustraliaDLBackSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.australia.AustraliaDLBackSideRecognizer.class;
    }
}