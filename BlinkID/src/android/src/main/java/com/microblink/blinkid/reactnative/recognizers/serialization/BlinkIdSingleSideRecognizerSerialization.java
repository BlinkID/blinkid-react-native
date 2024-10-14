package com.microblink.blinkid.reactnative.recognizers.serialization;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.bridge.WritableNativeMap;
import com.microblink.blinkid.entities.recognizers.Recognizer;
import com.microblink.blinkid.reactnative.recognizers.RecognizerSerialization;
import com.microblink.blinkid.reactnative.SerializationUtils;

public final class BlinkIdSingleSideRecognizerSerialization implements RecognizerSerialization {
    @Override
    public Recognizer<?> createRecognizer(ReadableMap jsonMap) {
        com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdSingleSideRecognizer recognizer = new com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdSingleSideRecognizer();
        if (jsonMap.hasKey("additionalAnonymization")) {
            recognizer.setAdditionalAnonymization(BlinkIDSerializationUtils.deserializeClassAnonymizationSettings(jsonMap.getArray("additionalAnonymization")));
        }
        if (jsonMap.hasKey("allowBarcodeScanOnly")) {
            recognizer.setAllowBarcodeScanOnly(jsonMap.getBoolean("allowBarcodeScanOnly"));
        }
        if (jsonMap.hasKey("allowUnparsedMrzResults")) {
            recognizer.setAllowUnparsedMrzResults(jsonMap.getBoolean("allowUnparsedMrzResults"));
        }
        if (jsonMap.hasKey("allowUnverifiedMrzResults")) {
            recognizer.setAllowUnverifiedMrzResults(jsonMap.getBoolean("allowUnverifiedMrzResults"));
        }
        if (jsonMap.hasKey("anonymizationMode")) {
            recognizer.setAnonymizationMode(com.microblink.blinkid.entities.recognizers.blinkid.generic.AnonymizationMode.values()[jsonMap.getInt("anonymizationMode")]);
        }
        if (jsonMap.hasKey("blurStrictnessLevel")) {
            recognizer.setBlurStrictnessLevel(com.microblink.blinkid.entities.recognizers.blinkid.generic.imageanalysis.StrictnessLevel.values()[jsonMap.getInt("blurStrictnessLevel")]);
        }
        if (jsonMap.hasKey("combineFrameResults")) {
            recognizer.setCombineFrameResults(jsonMap.getBoolean("combineFrameResults"));
        }
        if (jsonMap.hasKey("customClassRules")) {
            recognizer.setCustomClassRules(BlinkIDSerializationUtils.deserializeCustomClassRules(jsonMap.getArray("customClassRules")));
        }
        if (jsonMap.hasKey("enableBlurFilter")) {
            recognizer.setEnableBlurFilter(jsonMap.getBoolean("enableBlurFilter"));
        }
        if (jsonMap.hasKey("enableGlareFilter")) {
            recognizer.setEnableGlareFilter(jsonMap.getBoolean("enableGlareFilter"));
        }
        if (jsonMap.hasKey("faceImageDpi")) {
            recognizer.setFaceImageDpi(jsonMap.getInt("faceImageDpi"));
        }
        if (jsonMap.hasKey("fullDocumentImageDpi")) {
            recognizer.setFullDocumentImageDpi(jsonMap.getInt("fullDocumentImageDpi"));
        }
        if (jsonMap.hasKey("fullDocumentImageExtensionFactors")) {
            recognizer.setFullDocumentImageExtensionFactors(SerializationUtils.deserializeExtensionFactors(jsonMap.getMap("fullDocumentImageExtensionFactors")));
        }
        if (jsonMap.hasKey("glareStrictnessLevel")) {
            recognizer.setGlareStrictnessLevel(com.microblink.blinkid.entities.recognizers.blinkid.generic.imageanalysis.StrictnessLevel.values()[jsonMap.getInt("glareStrictnessLevel")]);
        }
        if (jsonMap.hasKey("paddingEdge")) {
            recognizer.setPaddingEdge((float)jsonMap.getDouble("paddingEdge"));
        }
        if (jsonMap.hasKey("recognitionModeFilter")) {
            recognizer.setRecognitionModeFilter(BlinkIDSerializationUtils.deserializeRecognitionModeFilter(jsonMap.getMap("recognitionModeFilter")));
        }
        if (jsonMap.hasKey("returnFaceImage")) {
            recognizer.setReturnFaceImage(jsonMap.getBoolean("returnFaceImage"));
        }
        if (jsonMap.hasKey("returnFullDocumentImage")) {
            recognizer.setReturnFullDocumentImage(jsonMap.getBoolean("returnFullDocumentImage"));
        }
        if (jsonMap.hasKey("returnSignatureImage")) {
            recognizer.setReturnSignatureImage(jsonMap.getBoolean("returnSignatureImage"));
        }
        if (jsonMap.hasKey("saveCameraFrames")) {
            recognizer.setSaveCameraFrames(jsonMap.getBoolean("saveCameraFrames"));
        }
        if (jsonMap.hasKey("scanCroppedDocumentImage")) {
            recognizer.setScanCroppedDocumentImage(jsonMap.getBoolean("scanCroppedDocumentImage"));
        }
        if (jsonMap.hasKey("signatureImageDpi")) {
            recognizer.setSignatureImageDpi(jsonMap.getInt("signatureImageDpi"));
        }
        if (jsonMap.hasKey("validateResultCharacters")) {
            recognizer.setValidateResultCharacters(jsonMap.getBoolean("validateResultCharacters"));
        }
        return recognizer;
    }

    @Override
    public WritableMap serializeResult(Recognizer<?> recognizer) {
        com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdSingleSideRecognizer.Result result = ((com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdSingleSideRecognizer)recognizer).getResult();
        WritableMap jsonResult = new WritableNativeMap();
        SerializationUtils.addCommonRecognizerResultData(jsonResult, result);
        jsonResult.putMap("additionalAddressInformation", BlinkIDSerializationUtils.serializeStringResult(result.getAdditionalAddressInformation()));
        jsonResult.putMap("additionalNameInformation", BlinkIDSerializationUtils.serializeStringResult(result.getAdditionalNameInformation()));
        jsonResult.putMap("additionalOptionalAddressInformation", BlinkIDSerializationUtils.serializeStringResult(result.getAdditionalOptionalAddressInformation()));
        jsonResult.putMap("additionalProcessingInfo", BlinkIDSerializationUtils.serializeAdditionalProcessingInfo(result.getAdditionalProcessingInfo()));
        jsonResult.putMap("address", BlinkIDSerializationUtils.serializeStringResult(result.getAddress()));
        jsonResult.putInt("age", result.getAge());
        jsonResult.putString("barcodeCameraFrame", SerializationUtils.encodeImageBase64(result.getBarcodeCameraFrame()));
        jsonResult.putMap("barcodeResult", BlinkIDSerializationUtils.serializeBarcodeResult(result.getBarcodeResult()));
        jsonResult.putBoolean("barcodeStepUsed", result.isBarcodeStepUsed());
        jsonResult.putMap("bloodType", BlinkIDSerializationUtils.serializeStringResult(result.getBloodType()));
        jsonResult.putString("cameraFrame", SerializationUtils.encodeImageBase64(result.getCameraFrame()));
        jsonResult.putMap("classInfo", BlinkIDSerializationUtils.serializeClassInfo(result.getClassInfo()));
        jsonResult.putMap("dateOfBirth", BlinkIDSerializationUtils.serializeDateResult(result.getDateOfBirth()));
        jsonResult.putMap("dateOfExpiry", BlinkIDSerializationUtils.serializeDateResult(result.getDateOfExpiry()));
        jsonResult.putBoolean("dateOfExpiryPermanent", result.isDateOfExpiryPermanent());
        jsonResult.putMap("dateOfIssue", BlinkIDSerializationUtils.serializeDateResult(result.getDateOfIssue()));
        jsonResult.putArray("dependentsInfo", BlinkIDSerializationUtils.serializeDependentInfo(result.getDependentsInfo()));
        jsonResult.putMap("documentAdditionalNumber", BlinkIDSerializationUtils.serializeStringResult(result.getDocumentAdditionalNumber()));
        jsonResult.putMap("documentNumber", BlinkIDSerializationUtils.serializeStringResult(result.getDocumentNumber()));
        jsonResult.putMap("documentOptionalAdditionalNumber", BlinkIDSerializationUtils.serializeStringResult(result.getDocumentOptionalAdditionalNumber()));
        jsonResult.putMap("documentSubtype", BlinkIDSerializationUtils.serializeStringResult(result.getDocumentSubtype()));
        jsonResult.putMap("driverLicenseDetailedInfo", BlinkIDSerializationUtils.serializeDriverLicenseDetailedInfo(result.getDriverLicenseDetailedInfo()));
        jsonResult.putMap("eligibilityCategory", BlinkIDSerializationUtils.serializeStringResult(result.getEligibilityCategory()));
        jsonResult.putMap("employer", BlinkIDSerializationUtils.serializeStringResult(result.getEmployer()));
        jsonResult.putBoolean("expired", result.isExpired());
        jsonResult.putString("faceImage", SerializationUtils.encodeImageBase64(result.getFaceImage()));
        jsonResult.putMap("faceImageLocation", SerializationUtils.serializeRectangle(result.getFaceImageLocation()));
        jsonResult.putInt("faceImageSide", BlinkIDSerializationUtils.serializeSide(result.getFaceImageSide()));
        jsonResult.putMap("fathersName", BlinkIDSerializationUtils.serializeStringResult(result.getFathersName()));
        jsonResult.putMap("firstName", BlinkIDSerializationUtils.serializeStringResult(result.getFirstName()));
        jsonResult.putString("fullDocumentImage", SerializationUtils.encodeImageBase64(result.getFullDocumentImage()));
        jsonResult.putMap("fullName", BlinkIDSerializationUtils.serializeStringResult(result.getFullName()));
        jsonResult.putMap("imageAnalysisResult", BlinkIDSerializationUtils.serializeImageAnalysisResult(result.getImageAnalysisResult()));
        jsonResult.putMap("issuingAuthority", BlinkIDSerializationUtils.serializeStringResult(result.getIssuingAuthority()));
        jsonResult.putMap("lastName", BlinkIDSerializationUtils.serializeStringResult(result.getLastName()));
        jsonResult.putMap("localizedName", BlinkIDSerializationUtils.serializeStringResult(result.getLocalizedName()));
        jsonResult.putMap("manufacturingYear", BlinkIDSerializationUtils.serializeStringResult(result.getManufacturingYear()));
        jsonResult.putMap("maritalStatus", BlinkIDSerializationUtils.serializeStringResult(result.getMaritalStatus()));
        jsonResult.putMap("mothersName", BlinkIDSerializationUtils.serializeStringResult(result.getMothersName()));
        jsonResult.putMap("mrzResult", BlinkIDSerializationUtils.serializeMrzResult(result.getMrzResult()));
        jsonResult.putMap("nationality", BlinkIDSerializationUtils.serializeStringResult(result.getNationality()));
        jsonResult.putMap("personalIdNumber", BlinkIDSerializationUtils.serializeStringResult(result.getPersonalIdNumber()));
        jsonResult.putMap("placeOfBirth", BlinkIDSerializationUtils.serializeStringResult(result.getPlaceOfBirth()));
        jsonResult.putInt("processingStatus", SerializationUtils.serializeEnum(result.getProcessingStatus()));
        jsonResult.putMap("profession", BlinkIDSerializationUtils.serializeStringResult(result.getProfession()));
        jsonResult.putMap("race", BlinkIDSerializationUtils.serializeStringResult(result.getRace()));
        jsonResult.putInt("recognitionMode", SerializationUtils.serializeEnum(result.getRecognitionMode()));
        jsonResult.putMap("religion", BlinkIDSerializationUtils.serializeStringResult(result.getReligion()));
        jsonResult.putMap("remarks", BlinkIDSerializationUtils.serializeStringResult(result.getRemarks()));
        jsonResult.putMap("residencePermitType", BlinkIDSerializationUtils.serializeStringResult(result.getResidencePermitType()));
        jsonResult.putMap("residentialStatus", BlinkIDSerializationUtils.serializeStringResult(result.getResidentialStatus()));
        jsonResult.putMap("sex", BlinkIDSerializationUtils.serializeStringResult(result.getSex()));
        jsonResult.putString("signatureImage", SerializationUtils.encodeImageBase64(result.getSignatureImage()));
        jsonResult.putMap("specificDocumentValidity", BlinkIDSerializationUtils.serializeStringResult(result.getSpecificDocumentValidity()));
        jsonResult.putMap("sponsor", BlinkIDSerializationUtils.serializeStringResult(result.getSponsor()));
        jsonResult.putMap("vehicleType", BlinkIDSerializationUtils.serializeStringResult(result.getVehicleType()));
        jsonResult.putMap("visaType", BlinkIDSerializationUtils.serializeStringResult(result.getVisaType()));
        jsonResult.putMap("vizResult", BlinkIDSerializationUtils.serializeVizResult(result.getVizResult()));
        return jsonResult;
    }

    @Override
    public String getJsonName() {
        return "BlinkIdSingleSideRecognizer";
    }

    @Override
    public Class<?> getRecognizerClass() {
        return com.microblink.blinkid.entities.recognizers.blinkid.generic.BlinkIdSingleSideRecognizer.class;
    }
}