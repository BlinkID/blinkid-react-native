package com.microblink.blinkid.reactnative.recognizers;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.microblink.blinkid.entities.recognizers.Recognizer;

public interface RecognizerSerialization {
    Recognizer<?> createRecognizer(ReadableMap jsonRecognizer);
    WritableMap serializeResult(Recognizer<?> recognizer);

    String getJsonName();
    Class<?> getRecognizerClass();
}