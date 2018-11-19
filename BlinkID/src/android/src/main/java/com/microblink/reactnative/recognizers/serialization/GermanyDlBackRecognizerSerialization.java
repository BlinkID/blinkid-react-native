package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class GermanyDlBackRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.germany.GermanyDlBackRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.germany.GermanyDlBackRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
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
        com.microblink.entities.recognizers.blinkid.germany.GermanyDlBackRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.germany.GermanyDlBackRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putMap("dateOfIssueB10", SerializationUtils.serializeDate(result.getDateOfIssueB10()));
        jsonResult.putBoolean("dateOfIssueB10NotSpecified", result.isDateOfIssueB10NotSpecified());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "GermanyDlBackRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.germany.GermanyDlBackRecognizer.class;
    }
}