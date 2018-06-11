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
        registerMapping(new AustraliaDLBackSideRecognizerSerialization());
        registerMapping(new AustraliaDLFrontSideRecognizerSerialization());
        registerMapping(new AustriaCombinedRecognizerSerialization());
        registerMapping(new AustriaIDBackSideRecognizerSerialization());
        registerMapping(new AustriaIDFrontSideRecognizerSerialization());
        registerMapping(new AustriaPassportRecognizerSerialization());
        registerMapping(new BarcodeRecognizerSerialization());
        registerMapping(new ColombiaIDBackSideRecognizerSerialization());
        registerMapping(new ColombiaIDFrontSideRecognizerSerialization());
        registerMapping(new CroatiaCombinedRecognizerSerialization());
        registerMapping(new CroatiaIDBackSideRecognizerSerialization());
        registerMapping(new CroatiaIDFrontSideRecognizerSerialization());
        registerMapping(new CzechiaCombinedRecognizerSerialization());
        registerMapping(new CzechiaIDBackSideRecognizerSerialization());
        registerMapping(new CzechiaIDFrontSideRecognizerSerialization());
        registerMapping(new DocumentFaceRecognizerSerialization());
        registerMapping(new EUDLRecognizerSerialization());
        registerMapping(new EgyptIDFrontRecognizerSerialization());
        registerMapping(new GermanyCombinedRecognizerSerialization());
        registerMapping(new GermanyIDBackSideRecognizerSerialization());
        registerMapping(new GermanyIDFrontSideRecognizerSerialization());
        registerMapping(new GermanyOldIDRecognizerSerialization());
        registerMapping(new GermanyPassportRecognizerSerialization());
        registerMapping(new HongKongIDFrontRecognizerSerialization());
        registerMapping(new IKadRecognizerSerialization());
        registerMapping(new IndonesiaIDFrontRecognizerSerialization());
        registerMapping(new JordanCombinedRecognizerSerialization());
        registerMapping(new JordanIDBackRecognizerSerialization());
        registerMapping(new JordanIDFrontRecognizerSerialization());
        registerMapping(new MRTDCombinedRecognizerSerialization());
        registerMapping(new MRTDRecognizerSerialization());
        registerMapping(new MalaysiaDLFrontRecognizerSerialization());
        registerMapping(new MyKadBackRecognizerSerialization());
        registerMapping(new MyKadFrontRecognizerSerialization());
        registerMapping(new MyTenteraRecognizerSerialization());
        registerMapping(new NewZealandDLFrontRecognizerSerialization());
        registerMapping(new Pdf417RecognizerSerialization());
        registerMapping(new PolandCombinedRecognizerSerialization());
        registerMapping(new PolandIDBackSideRecognizerSerialization());
        registerMapping(new PolandIDFrontSideRecognizerSerialization());
        registerMapping(new RomaniaIDFrontRecognizerSerialization());
        registerMapping(new SerbiaCombinedRecognizerSerialization());
        registerMapping(new SerbiaIDBackRecognizerSerialization());
        registerMapping(new SerbiaIDFrontRecognizerSerialization());
        registerMapping(new SimNumberRecognizerSerialization());
        registerMapping(new SingaporeCombinedRecognizerSerialization());
        registerMapping(new SingaporeIDBackRecognizerSerialization());
        registerMapping(new SingaporeIDFrontRecognizerSerialization());
        registerMapping(new SlovakiaCombinedRecognizerSerialization());
        registerMapping(new SlovakiaIDBackRecognizerSerialization());
        registerMapping(new SlovakiaIDFrontRecognizerSerialization());
        registerMapping(new SloveniaCombinedRecognizerSerialization());
        registerMapping(new SloveniaIDBackRecognizerSerialization());
        registerMapping(new SloveniaIDFrontRecognizerSerialization());
        registerMapping(new SwitzerlandIDBackRecognizerSerialization());
        registerMapping(new SwitzerlandIDFrontRecognizerSerialization());
        registerMapping(new SwitzerlandPassportRecognizerSerialization());
        registerMapping(new UnitedArabEmiratesIDBackRecognizerSerialization());
        registerMapping(new UnitedArabEmiratesIDFrontRecognizerSerialization());
        registerMapping(new VinRecognizerSerialization());
        registerMapping(new USDLRecognizerSerialization());
        
    }

    private RecognizerSerialization getRecognizerSerialization(ReadableMap jsonRecognizer) {
        return mByJSONName.get(jsonRecognizer.getString("recognizerType"));
    }

    private RecognizerSerialization getRecognizerSerialization(Recognizer<?,?> recognizer) {
        return mByClass.get(recognizer.getClass());
    }

    public RecognizerBundle deserializeRecognizerCollection(ReadableMap jsonRecognizerCollection) {
        ReadableArray recognizerArray = jsonRecognizerCollection.getArray("recognizerArray");
        int numRecognizers = recognizerArray.size();
        Recognizer<?,?>[] recognizers = new Recognizer[numRecognizers];
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

    public WritableArray serializeRecognizerResults(Recognizer<?,?>[] recognizers) {
        WritableArray jsonArray = new WritableNativeArray();

        for (Recognizer<?, ?> recognizer : recognizers) {
            jsonArray.pushMap(getRecognizerSerialization(recognizer).serializeResult(recognizer));
        }

        return jsonArray;
    }
}