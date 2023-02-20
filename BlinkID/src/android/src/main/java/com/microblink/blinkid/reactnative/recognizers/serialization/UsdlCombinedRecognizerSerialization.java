package com.microblink.blinkid.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeArray;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.blinkid.entities.recognizers.Recognizer;
import com.microblink.blinkid.entities.recognizers.blinkid.usdl.UsdlCombinedRecognizer;
import com.microblink.blinkid.entities.recognizers.blinkbarcode.usdl.UsdlKeys;
import com.microblink.blinkid.reactnative.recognizers.RecognizerSerialization;
import com.microblink.blinkid.reactnative.SerializationUtils;

public final class UsdlCombinedRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?> createRecognizer(ReadableMap jsonRecognizer) {
        UsdlCombinedRecognizer recognizer = new UsdlCombinedRecognizer();
        if (jsonRecognizer.hasKey("faceImageDpi")) {
            recognizer.setFaceImageDpi(jsonRecognizer.getInt("faceImageDpi"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonRecognizer.getInt("fullDocumentImageDpi"));
        }
        if (jsonRecognizer.hasKey("fullDocumentImageExtensionFactors")) {
            recognizer.setFullDocumentImageExtensionFactors(SerializationUtils.deserializeExtensionFactors(jsonRecognizer.getMap("fullDocumentImageExtensionFactors")));
        }
        if (jsonRecognizer.hasKey("numStableDetectionsThreshold")) {
            recognizer.setNumStableDetectionsThreshold(jsonRecognizer.getInt("numStableDetectionsThreshold"));
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
    public WritableMap serializeResult(Recognizer<?> recognizer) {
        UsdlCombinedRecognizer.Result result = ((UsdlCombinedRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonRecognizerResultData(jsonResult, result);
        jsonResult.putInt("documentDataMatch", SerializationUtils.serializeEnum(result.getDocumentDataMatch()));
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putBoolean("scanningFirstSideDone", result.isScanningFirstSideDone());

        jsonResult.putArray("optionalElements", SerializationUtils.serializeStringArray(result.getOptionalElements()));
        jsonResult.putString("rawData", SerializationUtils.encodeByteArrayToBase64(result.getRawData()));
        jsonResult.putString("rawStringData", result.getRawStringData());
        jsonResult.putBoolean("uncertain", result.isUncertain());
        jsonResult.putArray("fields", serializeFields(result));
        jsonResult.putString("firstName", result.getFirstName());
        jsonResult.putString("lastName", result.getLastName());
        jsonResult.putString("fullName", result.getFullName());
        jsonResult.putString("middleName", result.getMiddleName());
        jsonResult.putString("nameSuffix", result.getNameSuffix());
        jsonResult.putString("address", result.getAddress());
        jsonResult.putString("documentNumber", result.getDocumentNumber());
        jsonResult.putString("sex", result.getSex());
        jsonResult.putInt("age", result.getAge());
        jsonResult.putString("restrictions", result.getRestrictions());
        jsonResult.putString("endorsements", result.getEndorsements());
        jsonResult.putString("vehicleClass", result.getVehicleClass());
        jsonResult.putMap("dateOfBirth", SerializationUtils.serializeDate(result.getDateOfBirth()));
        jsonResult.putMap("dateOfIssue", SerializationUtils.serializeDate(result.getDateOfIssue()));
        jsonResult.putMap("dateOfExpiry", SerializationUtils.serializeDate(result.getDateOfExpiry()));
        
        return jsonResult;
    }

    private WritableArray serializeFields(UsdlCombinedRecognizer.Result result) {
        WritableArray fieldsArr = new WritableNativeArray();
        for (int i = 0; i < UsdlKeys.values().length; ++i) {
            fieldsArr.pushString(result.getField(UsdlKeys.values()[i]));
        }
        return fieldsArr;
    }

    @Override
    public String getJsonName() {
        return "UsdlCombinedRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.blinkid.entities.recognizers.blinkid.usdl.UsdlCombinedRecognizer.class;
    }
}