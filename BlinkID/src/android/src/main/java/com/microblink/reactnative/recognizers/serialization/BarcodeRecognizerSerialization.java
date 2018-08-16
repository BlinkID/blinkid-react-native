package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.reactnative.recognizers.RecognizerSerialization;

public final class BarcodeRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?, ?> createRecognizer(ReadableMap jsonRecognizer) {
        com.microblink.entities.recognizers.blinkbarcode.barcode.BarcodeRecognizer recognizer = new com.microblink.entities.recognizers.blinkbarcode.barcode.BarcodeRecognizer();
        if (jsonRecognizer.hasKey("autoScaleDetection")) {
            recognizer.setAutoScaleDetection(jsonRecognizer.getBoolean("autoScaleDetection"));
        }
        if (jsonRecognizer.hasKey("nullQuietZoneAllowed")) {
            recognizer.setNullQuietZoneAllowed(jsonRecognizer.getBoolean("nullQuietZoneAllowed"));
        }
        if (jsonRecognizer.hasKey("readCode39AsExtendedData")) {
            recognizer.setReadCode39AsExtendedData(jsonRecognizer.getBoolean("readCode39AsExtendedData"));
        }
        if (jsonRecognizer.hasKey("scanAztecCode")) {
            recognizer.setScanAztecCode(jsonRecognizer.getBoolean("scanAztecCode"));
        }
        if (jsonRecognizer.hasKey("scanCode128")) {
            recognizer.setScanCode128(jsonRecognizer.getBoolean("scanCode128"));
        }
        if (jsonRecognizer.hasKey("scanCode39")) {
            recognizer.setScanCode39(jsonRecognizer.getBoolean("scanCode39"));
        }
        if (jsonRecognizer.hasKey("scanDataMatrix")) {
            recognizer.setScanDataMatrix(jsonRecognizer.getBoolean("scanDataMatrix"));
        }
        if (jsonRecognizer.hasKey("scanEan13")) {
            recognizer.setScanEan13(jsonRecognizer.getBoolean("scanEan13"));
        }
        if (jsonRecognizer.hasKey("scanEan8")) {
            recognizer.setScanEan8(jsonRecognizer.getBoolean("scanEan8"));
        }
        if (jsonRecognizer.hasKey("scanInverse")) {
            recognizer.setScanInverse(jsonRecognizer.getBoolean("scanInverse"));
        }
        if (jsonRecognizer.hasKey("scanItf")) {
            recognizer.setScanItf(jsonRecognizer.getBoolean("scanItf"));
        }
        if (jsonRecognizer.hasKey("scanPdf417")) {
            recognizer.setScanPdf417(jsonRecognizer.getBoolean("scanPdf417"));
        }
        if (jsonRecognizer.hasKey("scanQrCode")) {
            recognizer.setScanQrCode(jsonRecognizer.getBoolean("scanQrCode"));
        }
        if (jsonRecognizer.hasKey("scanUncertain")) {
            recognizer.setScanUncertain(jsonRecognizer.getBoolean("scanUncertain"));
        }
        if (jsonRecognizer.hasKey("scanUpca")) {
            recognizer.setScanUpca(jsonRecognizer.getBoolean("scanUpca"));
        }
        if (jsonRecognizer.hasKey("scanUpce")) {
            recognizer.setScanUpce(jsonRecognizer.getBoolean("scanUpce"));
        }
        if (jsonRecognizer.hasKey("slowerThoroughScan")) {
            recognizer.setSlowerThoroughScan(jsonRecognizer.getBoolean("slowerThoroughScan"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkbarcode.barcode.BarcodeRecognizer.Result result = ((com.microblink.entities.recognizers.blinkbarcode.barcode.BarcodeRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putInt("barcodeType", SerializationUtils.serializeEnum(result.getBarcodeType()));
        jsonResult.putString("rawData", SerializationUtils.encodeByteArrayToBase64(result.getRawData()));
        jsonResult.putString("stringData", result.getStringData());
        jsonResult.putBoolean("uncertain", result.isUncertain());
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "BarcodeRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.entities.recognizers.blinkbarcode.barcode.BarcodeRecognizer.class;
    }
}