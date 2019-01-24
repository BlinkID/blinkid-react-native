package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class GermanyIdBackRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.germany.GermanyIdBackRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.germany.GermanyIdBackRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractAddress")) {
            recognizer.setExtractAddress(jsonRecognizer.getBoolean("extractAddress"));
        }
        if (jsonRecognizer.hasKey("extractAuthority")) {
            recognizer.setExtractAuthority(jsonRecognizer.getBoolean("extractAuthority"));
        }
        if (jsonRecognizer.hasKey("extractColourOfEyes")) {
            recognizer.setExtractColourOfEyes(jsonRecognizer.getBoolean("extractColourOfEyes"));
        }
        if (jsonRecognizer.hasKey("extractDateOfIssue")) {
            recognizer.setExtractDateOfIssue(jsonRecognizer.getBoolean("extractDateOfIssue"));
        }
        if (jsonRecognizer.hasKey("extractHeight")) {
            recognizer.setExtractHeight(jsonRecognizer.getBoolean("extractHeight"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonRecognizer.getInt("fullDocumentImageDpi"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageExtensionFactors")) {
            recognizer.setFullDocumentImageExtensionFactors(BlinkIDSerializationUtils.deserializeExtensionFactors(jsonRecognizer.getMap("fullDocumentImageExtensionFactors")));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.germany.GermanyIdBackRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.germany.GermanyIdBackRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("addressCity", result.getAddressCity());
        jsonResult.putString("addressHouseNumber", result.getAddressHouseNumber());
        jsonResult.putString("addressStreet", result.getAddressStreet());
        jsonResult.putString("addressZipCode", result.getAddressZipCode());
        jsonResult.putString("authority", result.getAuthority());
        jsonResult.putString("colourOfEyes", result.getColourOfEyes());
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putString("fullAddress", result.getFullAddress());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("height", result.getHeight());
        jsonResult.putMap("mrzResult", BlinkIDSerializationUtils.serializeMrzResult(result.getMrzResult()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "GermanyIdBackRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.germany.GermanyIdBackRecognizer.class;
    }
}