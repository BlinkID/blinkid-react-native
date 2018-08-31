package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class PaymentCardCombinedRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardCombinedRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardCombinedRecognizer();
        if (jsonRecognizer.hasKey("detectGlare")) {
            recognizer.setDetectGlare(jsonRecognizer.getBoolean("detectGlare"));
        }
        if (jsonRecognizer.hasKey("extractInventoryNumber")) {
            recognizer.setExtractInventoryNumber(jsonRecognizer.getBoolean("extractInventoryNumber"));
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
        if (jsonRecognizer.hasKey("signResult")) {
            recognizer.setSignResult(jsonRecognizer.getBoolean("signResult"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardCombinedRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardCombinedRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putString("cardNumber", result.getCardNumber());
        jsonResult.putString("cvv", result.getCvv());
        jsonResult.putString("digitalSignature", SerializationUtils.encodeByteArrayToBase64(result.getDigitalSignature()));
        jsonResult.putInt("digitalSignatureVersion", result.getDigitalSignatureVersion());
        jsonResult.putBoolean("documentDataMatch", result.isDocumentDataMatch());
        jsonResult.putString("fullDocumentBackImage", SerializationUtils.encodeImageBase64(result.getFullDocumentBackImage()));
        jsonResult.putString("fullDocumentFrontImage", SerializationUtils.encodeImageBase64(result.getFullDocumentFrontImage()));
        jsonResult.putString("inventoryNumber", result.getInventoryNumber());
        jsonResult.putString("owner", result.getOwner());
        jsonResult.putBoolean("scanningFirstSideDone", result.isScanningFirstSideDone());
        jsonResult.putMap("validThru", SerializationUtils.serializeDate(result.getValidThru()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "PaymentCardCombinedRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.paymentcard.PaymentCardCombinedRecognizer.class;
    }
}