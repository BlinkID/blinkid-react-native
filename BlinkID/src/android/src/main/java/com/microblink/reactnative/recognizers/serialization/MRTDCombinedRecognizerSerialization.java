package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class MRTDCombinedRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkid.mrtd.MRTDCombinedRecognizer recognizer = new com.microblink.entities.recognizers.blinkid.mrtd.MRTDCombinedRecognizer();
        if (jsonRecognizer.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonRecognizer.getBoolean("returnFaceImage"));
        }
        if (jsonRecognizer.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonRecognizer.getBoolean("returnFullDocumentImage"));
        }
        if (jsonRecognizer.hasKey("returnMRZImage")) {
            recognizer.setReturnMRZImage(jsonRecognizer.getBoolean("returnMRZImage"));
        }
        if (jsonRecognizer.hasKey("signResult")) {
            recognizer.setSignResult(jsonRecognizer.getBoolean("signResult"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkid.mrtd.MRTDCombinedRecognizer.Result result = ((com.microblink.entities.recognizers.blinkid.mrtd.MRTDCombinedRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putBoolean("MRZParsed", result.isMRZParsed());
        jsonResult.putString("MRZText", result.getMRZText());
        jsonResult.putBoolean("MRZVerified", result.isMRZVerified());
        jsonResult.putString("alienNumber", result.getAlienNumber());
        jsonResult.putString("applicationReceiptNumber", result.getApplicationReceiptNumber());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        jsonResult.putString("digitalSignature", SerializationUtils.encodeByteArrayToBase64(result.getDigitalSignature()));
        jsonResult.putString("digitalSignatureVersion", result.getDigitalSignatureVersion());
        jsonResult.putString("documentCode", result.getDocumentCode());
        jsonResult.putBoolean("documentDataMatch", result.isDocumentDataMatch());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putInt("documentType", SerializationUtils.serializeEnum(result.getDocumentType()));
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentBackImage", SerializationUtils.encodeImageBase64(result.getFullDocumentBackImage()));
        jsonResult.putString("fullDocumentFrontImage", SerializationUtils.encodeImageBase64(result.getFullDocumentFrontImage()));
        jsonResult.putString("immigrantCaseNumber", result.getImmigrantCaseNumber());
        jsonResult.putString("issuer", result.getIssuer());
        jsonResult.putString("mrzImage", SerializationUtils.encodeImageBase64(result.getMrzImage()));
        jsonResult.putString("nationality", result.getNationality());
        jsonResult.putString("opt1", result.getOpt1());
        jsonResult.putString("opt2", result.getOpt2());
        jsonResult.putString("primaryId", result.getPrimaryId());
        jsonResult.putBoolean("scanningFirstSideDone", result.isScanningFirstSideDone());
        jsonResult.putString("secondaryId", result.getSecondaryId());
        jsonResult.putString("sex", result.getSex());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "MRTDCombinedRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkid.mrtd.MRTDCombinedRecognizer.class;
    }
}