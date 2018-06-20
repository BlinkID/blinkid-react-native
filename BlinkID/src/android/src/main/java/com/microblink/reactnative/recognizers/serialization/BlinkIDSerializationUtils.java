package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.blinkid.mrtd.MrzResult;
import com.microblink.entities.settings.image.ImageExtensionFactors;

public abstract class BlinkIDSerializationUtils {
    public static WritableMap serializeMrzResult(MrzResult mrzResult) {
        WritableMap jsonMrz = new WritableNativeMap();
        jsonMrz.putInt("documentType", mrzResult.getDocumentType().ordinal() + 1);
        jsonMrz.putString("primaryId", mrzResult.getPrimaryId());
        jsonMrz.putString("secondaryId", mrzResult.getSecondaryId());
        jsonMrz.putString("issuer", mrzResult.getIssuer());
        jsonMrz.putMap("dateOfBirth", SerializationUtils.serializeDate(mrzResult.getDateOfBirth().getDate()));
        jsonMrz.putString("documentNumber", mrzResult.getDocumentNumber());
        jsonMrz.putString("nationality", mrzResult.getNationality());
        jsonMrz.putString("gender", mrzResult.getGender());
        jsonMrz.putString("documentCode", mrzResult.getDocumentCode());
        jsonMrz.putMap("dateOfExpiry", SerializationUtils.serializeDate(mrzResult.getDateOfExpiry().getDate()));
        jsonMrz.putString("opt1", mrzResult.getOpt1());
        jsonMrz.putString("opt2", mrzResult.getOpt2());
        jsonMrz.putString("alienNumber", mrzResult.getAlienNumber());
        jsonMrz.putString("applicationReceiptNumber", mrzResult.getApplicationReceiptNumber());
        jsonMrz.putString("immigrantCaseNumber", mrzResult.getImmigrantCaseNumber());
        jsonMrz.putString("mrzText", mrzResult.getMrzText());
        jsonMrz.putBoolean("mrzParsed", mrzResult.isMrzParsed());
        jsonMrz.putBoolean("mrzVerified", mrzResult.isMrzVerified());
        return jsonMrz;
    }

    public static ImageExtensionFactors deserializeExtensionFactors(ReadableMap jsonExtensionFactors) {
        if (jsonExtensionFactors == null) {
            return new ImageExtensionFactors(0.f, 0.f, 0.f, 0.f);
        } else {
            float up = (float)jsonExtensionFactors.getDouble("upFactor");
            float right = (float)jsonExtensionFactors.getDouble("rightFactor");
            float down = (float)jsonExtensionFactors.getDouble("downFactor");
            float left = (float)jsonExtensionFactors.getDouble("leftFactor");
            return new ImageExtensionFactors(up, down, left, right);
        }
    }
}
