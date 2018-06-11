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
        if (jsonRecognizer.hasKey("inverseScanning")) {
            recognizer.setInverseScanning(jsonRecognizer.getBoolean("inverseScanning"));
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
        if (jsonRecognizer.hasKey("scanDataMatrixCode")) {
            recognizer.setScanDataMatrixCode(jsonRecognizer.getBoolean("scanDataMatrixCode"));
        }
        if (jsonRecognizer.hasKey("scanEAN13Code")) {
            recognizer.setScanEAN13Code(jsonRecognizer.getBoolean("scanEAN13Code"));
        }
        if (jsonRecognizer.hasKey("scanEAN8Code")) {
            recognizer.setScanEAN8Code(jsonRecognizer.getBoolean("scanEAN8Code"));
        }
        if (jsonRecognizer.hasKey("scanITFCode")) {
            recognizer.setScanITFCode(jsonRecognizer.getBoolean("scanITFCode"));
        }
        if (jsonRecognizer.hasKey("scanPDF417")) {
            recognizer.setScanPDF417(jsonRecognizer.getBoolean("scanPDF417"));
        }
        if (jsonRecognizer.hasKey("scanQRCode")) {
            recognizer.setScanQRCode(jsonRecognizer.getBoolean("scanQRCode"));
        }
        if (jsonRecognizer.hasKey("scanUPCACode")) {
            recognizer.setScanUPCACode(jsonRecognizer.getBoolean("scanUPCACode"));
        }
        if (jsonRecognizer.hasKey("scanUPCECode")) {
            recognizer.setScanUPCECode(jsonRecognizer.getBoolean("scanUPCECode"));
        }
        if (jsonRecognizer.hasKey("slowerThoroughScan")) {
            recognizer.setSlowerThoroughScan(jsonRecognizer.getBoolean("slowerThoroughScan"));
        }
        if (jsonRecognizer.hasKey("uncertainDecoding")) {
            recognizer.setUncertainDecoding(jsonRecognizer.getBoolean("uncertainDecoding"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?, ?> recognizer) {
        com.microblink.entities.recognizers.blinkbarcode.barcode.BarcodeRecognizer.Result result = ((com.microblink.entities.recognizers.blinkbarcode.barcode.BarcodeRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonResultData(jsonResult, result);
        jsonResult.putInt("barcodeFormat", SerializationUtils.serializeEnum(result.getBarcodeFormat()));
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