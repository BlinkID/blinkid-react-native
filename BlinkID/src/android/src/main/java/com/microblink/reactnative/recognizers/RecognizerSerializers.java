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
        registerMapping(new AustraliaDlBackRecognizerSerialization());
        registerMapping(new AustraliaDlFrontRecognizerSerialization());
        registerMapping(new AustriaCombinedRecognizerSerialization());
        registerMapping(new AustriaIdBackRecognizerSerialization());
        registerMapping(new AustriaIdFrontRecognizerSerialization());
        registerMapping(new AustriaPassportRecognizerSerialization());
        registerMapping(new BarcodeRecognizerSerialization());
        registerMapping(new ColombiaIdBackRecognizerSerialization());
        registerMapping(new ColombiaIdFrontRecognizerSerialization());
        registerMapping(new CroatiaCombinedRecognizerSerialization());
        registerMapping(new CroatiaIdBackRecognizerSerialization());
        registerMapping(new CroatiaIdFrontRecognizerSerialization());
        registerMapping(new CzechiaCombinedRecognizerSerialization());
        registerMapping(new CzechiaIdBackRecognizerSerialization());
        registerMapping(new CzechiaIdFrontRecognizerSerialization());
        registerMapping(new DocumentFaceRecognizerSerialization());
        registerMapping(new EgyptIdFrontRecognizerSerialization());
        registerMapping(new EudlRecognizerSerialization());
        registerMapping(new GermanyCombinedRecognizerSerialization());
        registerMapping(new GermanyIdBackRecognizerSerialization());
        registerMapping(new GermanyIdFrontRecognizerSerialization());
        registerMapping(new GermanyOldIdRecognizerSerialization());
        registerMapping(new GermanyPassportRecognizerSerialization());
        registerMapping(new HongKongIdFrontRecognizerSerialization());
        registerMapping(new IkadRecognizerSerialization());
        registerMapping(new IndonesiaIdFrontRecognizerSerialization());
        registerMapping(new JordanCombinedRecognizerSerialization());
        registerMapping(new JordanIdBackRecognizerSerialization());
        registerMapping(new JordanIdFrontRecognizerSerialization());
        registerMapping(new MalaysiaDlFrontRecognizerSerialization());
        registerMapping(new MoroccoIdBackRecognizerSerialization());
        registerMapping(new MoroccoIdFrontRecognizerSerialization());
        registerMapping(new MrtdCombinedRecognizerSerialization());
        registerMapping(new MrtdRecognizerSerialization());
        registerMapping(new MyKadBackRecognizerSerialization());
        registerMapping(new MyKadFrontRecognizerSerialization());
        registerMapping(new MyTenteraRecognizerSerialization());
        registerMapping(new NewZealandDlFrontRecognizerSerialization());
        registerMapping(new Pdf417RecognizerSerialization());
        registerMapping(new PolandCombinedRecognizerSerialization());
        registerMapping(new PolandIdBackRecognizerSerialization());
        registerMapping(new PolandIdFrontRecognizerSerialization());
        registerMapping(new RomaniaIdFrontRecognizerSerialization());
        registerMapping(new SerbiaCombinedRecognizerSerialization());
        registerMapping(new SerbiaIdBackRecognizerSerialization());
        registerMapping(new SerbiaIdFrontRecognizerSerialization());
        registerMapping(new SimNumberRecognizerSerialization());
        registerMapping(new SingaporeChangiEmployeeIdRecognizerSerialization());
        registerMapping(new SingaporeCombinedRecognizerSerialization());
        registerMapping(new SingaporeDlFrontRecognizerSerialization());
        registerMapping(new SingaporeIdBackRecognizerSerialization());
        registerMapping(new SingaporeIdFrontRecognizerSerialization());
        registerMapping(new SlovakiaCombinedRecognizerSerialization());
        registerMapping(new SlovakiaIdBackRecognizerSerialization());
        registerMapping(new SlovakiaIdFrontRecognizerSerialization());
        registerMapping(new SloveniaCombinedRecognizerSerialization());
        registerMapping(new SloveniaIdBackRecognizerSerialization());
        registerMapping(new SloveniaIdFrontRecognizerSerialization());
        registerMapping(new SwedenDlFrontRecognizerSerialization());
        registerMapping(new SwitzerlandDlFrontRecognizerSerialization());
        registerMapping(new SwitzerlandIdBackRecognizerSerialization());
        registerMapping(new SwitzerlandIdFrontRecognizerSerialization());
        registerMapping(new SwitzerlandPassportRecognizerSerialization());
        registerMapping(new UnitedArabEmiratesIdBackRecognizerSerialization());
        registerMapping(new UnitedArabEmiratesIdFrontRecognizerSerialization());
        registerMapping(new VinRecognizerSerialization());
        registerMapping(new UsdlRecognizerSerialization());
        registerMapping(new UsdlCombinedRecognizerSerialization());
        
    }

    public RecognizerSerialization getRecognizerSerialization(ReadableMap jsonRecognizer) {
        return mByJSONName.get(jsonRecognizer.getString("recognizerType"));
    }

    public RecognizerSerialization getRecognizerSerialization(Recognizer<?,?> recognizer) {
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