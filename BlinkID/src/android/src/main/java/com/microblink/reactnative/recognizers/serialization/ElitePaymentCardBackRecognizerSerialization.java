package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class ElitePaymentCardBackRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardBackRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardBackRecognizer();
        if (jsonRecognizer.hasKey("anonymizeCardNumber")) {
            recognizer.setAnonymizeCardNumber(jsonRecognizer.getBoolean("anonymizeCardNumber"));
        }
        if (jsonRecognizer.hasKey("anonymizeCvv")) {
            recognizer.setAnonymizeCvv(jsonRecognizer.getBoolean("anonymizeCvv"));
        }
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractInventoryNumber")) {
            recognizer.setExtractInventoryNumber(jsonRecognizer.getBoolean("extractInventoryNumber"));
        }
        if (jsonRecognizer.hasKey("extractValidThru")) {
            recognizer.setExtractValidThru(jsonRecognizer.getBoolean("extractValidThru"));
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
        com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardBackRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardBackRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("cardNumber", result.getCardNumber());
        jsonResult.putString("cvv", result.getCvv());
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putString("inventoryNumber", result.getInventoryNumber());
        jsonResult.putMap("validThru", SerializationUtils.serializeDate(result.getValidThru()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "ElitePaymentCardBackRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.elitepaymentcard.ElitePaymentCardBackRecognizer.class;
    }
}