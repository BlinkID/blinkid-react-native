package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class ElitePaymentCardFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractOwner")) {
            recognizer.setExtractOwner(jsonRecognizer.getBoolean("extractOwner"));
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
        com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("owner", result.getOwner());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "ElitePaymentCardFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardFrontRecognizer.class;
    }
}