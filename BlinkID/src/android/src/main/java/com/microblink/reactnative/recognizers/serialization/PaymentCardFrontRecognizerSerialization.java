package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class PaymentCardFrontRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardFrontRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardFrontRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractOwner")) {
            recognizer.setExtractOwner(jsonRecognizer.getBoolean("extractOwner"));
        }
        if (jsonRecognizer.hasKey("extractValidThru")) {
            recognizer.setExtractValidThru(jsonRecognizer.getBoolean("extractValidThru"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonRecognizer.getInt("fullDocumentImageDpi"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardFrontRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardFrontRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("cardNumber", result.getCardNumber());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("owner", result.getOwner());
        jsonResult.putMap("validThru", SerializationUtils.serializeDate(result.getValidThru()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "PaymentCardFrontRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardFrontRecognizer.class;
    }
}