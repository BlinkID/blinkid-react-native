package com.microblink.reactnative.recognizers;

import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.blinkid.mrtd.MRZResult;

public abstract class BlinkIDSerializationUtils {
    public static WritableMap serializeMRZResult(MRZResult mrzResult) {
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
        jsonMrz.putString("mrzText", mrzResult.getMRZText());
        jsonMrz.putBoolean("mrzParsed", mrzResult.isMRZParsed());
        jsonMrz.putBoolean("mrzVerified", mrzResult.isMRZVerified());
        return jsonMrz;

    }
}
