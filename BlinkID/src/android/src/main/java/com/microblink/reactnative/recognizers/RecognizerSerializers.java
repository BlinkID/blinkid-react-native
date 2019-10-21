package com.microblink.reactnative.recognizers;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableArray;
import com.facebook.react.bridge.WritableNativeArray;
import com.microblink.entities.recognizers.Recognizer;
import com.microblink.entities.recognizers.RecognizerBundle;
import com.microblink.reactnative.recognizers.serialization.*;

import java.util.HashMap;

public enum RecognizerSerializers {
    INSTANCE;

    private HashMap<String, RecognizerSerialization> mByJSONName = new HashMap<>();
    private HashMap<Class<?>, RecognizerSerialization> mByClass = new HashMap<>();

    private void registerMapping( RecognizerSerialization recognizerSerialization ) {
        mByJSONName.put(recognizerSerialization.getJsonName(), recognizerSerialization);
        mByClass.put(recognizerSerialization.getRecognizerClass(), recognizerSerialization);
    }

    RecognizerSerializers() {
        registerMapping(new SuccessFrameGrabberRecognizerSerialization());
        registerMapping(new BlinkIdCombinedRecognizerSerialization());
        registerMapping(new BlinkIdRecognizerSerialization());
        registerMapping(new DocumentFaceRecognizerSerialization());
        registerMapping(new MrtdCombinedRecognizerSerialization());
        registerMapping(new MrtdRecognizerSerialization());
        registerMapping(new PassportRecognizerSerialization());
        registerMapping(new VisaRecognizerSerialization());
        registerMapping(new UsdlRecognizerSerialization());
        registerMapping(new UsdlCombinedRecognizerSerialization());
        
    }

    public RecognizerSerialization getRecognizerSerialization(ReadableMap jsonRecognizer) {
        return mByJSONName.get(jsonRecognizer.getString("recognizerType"));
    }

    public RecognizerSerialization getRecognizerSerialization(Recognizer<?> recognizer) {
        return mByClass.get(recognizer.getClass());
    }

    public RecognizerBundle deserializeRecognizerCollection(ReadableMap jsonRecognizerCollection) {
        ReadableArray recognizerArray = jsonRecognizerCollection.getArray("recognizerArray");
        int numRecognizers = recognizerArray.size();
        Recognizer<?>[] recognizers = new Recognizer[numRecognizers];
        for (int i = 0; i < numRecognizers; ++i) {
            recognizers[ i ] = getRecognizerSerialization(recognizerArray.getMap(i)).createRecognizer(recognizerArray.getMap(i));
        }
        RecognizerBundle recognizerBundle = new RecognizerBundle(recognizers);

        if (jsonRecognizerCollection.hasKey("allowMultipleResults")) {
            recognizerBundle.setAllowMultipleScanResultsOnSingleImage(jsonRecognizerCollection.getBoolean("allowMultipleResults"));
        }
        if (jsonRecognizerCollection.hasKey("milisecondsBeforeTimeout")) {
            recognizerBundle.setNumMsBeforeTimeout(jsonRecognizerCollection.getInt("milisecondsBeforeTimeout"));
        }
        return recognizerBundle;
    }

    public WritableArray serializeRecognizerResults(Recognizer<?>[] recognizers) {
        WritableArray jsonArray = new WritableNativeArray();

        for (Recognizer<?> recognizer : recognizers) {
            jsonArray.pushMap(getRecognizerSerialization(recognizer).serializeResult(recognizer));
        }

        return jsonArray;
    }
}