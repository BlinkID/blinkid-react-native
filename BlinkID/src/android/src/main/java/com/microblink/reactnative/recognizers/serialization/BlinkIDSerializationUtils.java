package com.microblink.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.entities.recognizers.blinkid.mrtd.MrzResult;
import com.microblink.entities.recognizers.blinkid.imageoptions.extension.ImageExtensionFactors;
import com.microblink.entities.recognizers.blinkid.generic.DriverLicenseDetailedInfo;
import com.microblink.entities.recognizers.blinkid.generic.classinfo.ClassInfo;

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
        jsonMrz.putString("sanitizedOpt1", mrzResult.getSanitizedOpt1());
        jsonMrz.putString("sanitizedOpt2", mrzResult.getSanitizedOpt2());
        jsonMrz.putString("sanitizedNationality", mrzResult.getSanitizedNationality());
        jsonMrz.putString("sanitizedIssuer", mrzResult.getSanitizedIssuer());
        jsonMrz.putString("sanitizedDocumentCode", mrzResult.getSanitizedDocumentCode());
        jsonMrz.putString("sanitizedDocumentNumber", mrzResult.getSanitizedDocumentNumber());
        jsonMrz.putBoolean("mrzParsed", mrzResult.isMrzParsed());
        jsonMrz.putBoolean("mrzVerified", mrzResult.isMrzVerified());
        return jsonMrz;
    }

    public static WritableMap serializeDriverLicenseDetailedInfo(DriverLicenseDetailedInfo dlDetailedInfo) {
        WritableMap jsonDriverLicenseDetailedInfo = new WritableNativeMap();
        jsonDriverLicenseDetailedInfo.putString("restrictions", dlDetailedInfo.getRestrictions());
        jsonDriverLicenseDetailedInfo.putString("endorsements", dlDetailedInfo.getEndorsements());
        jsonDriverLicenseDetailedInfo.putString("vehicleClass", dlDetailedInfo.getVehicleClass());
        return jsonDriverLicenseDetailedInfo;
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

    public static WritableMap serializeClassInfo(ClassInfo classInfo) {
        WritableMap jsonClassInfo = new WritableNativeMap();
        jsonClassInfo.putInt("country", SerializationUtils.serializeEnum(classInfo.getCountry()));
        jsonClassInfo.putInt("region", SerializationUtils.serializeEnum(classInfo.getRegion()));
        jsonClassInfo.putInt("type", SerializationUtils.serializeEnum(classInfo.getType()));
        return jsonClassInfo;
    }

}
