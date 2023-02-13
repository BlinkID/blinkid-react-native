//
//  MBBlinkIDSerializationUtils.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import "MBBlinkIDSerializationUtils.h"
#import "MBSerializationUtils.h"

@implementation MBBlinkIDSerializationUtils

+(NSDictionary *) serializeMrzResult:(MBMrzResult *)mrzResult {
    return @{
        @"documentType" : [NSNumber numberWithInteger:(mrzResult.documentType)],
        @"primaryId" : mrzResult.primaryID,
        @"secondaryId" : mrzResult.secondaryID,
        @"issuer" : mrzResult.issuer,
        @"dateOfBirth" : [MBBlinkIDSerializationUtils serializeMBDate:mrzResult.dateOfBirth],
        @"documentNumber" : mrzResult.documentNumber,
        @"nationality" : mrzResult.nationality,
        @"gender" : mrzResult.gender,
        @"documentCode" : mrzResult.documentCode,
        @"dateOfExpiry" : [MBBlinkIDSerializationUtils serializeMBDate:mrzResult.dateOfExpiry],
        @"opt1" : mrzResult.opt1,
        @"opt2" : mrzResult.opt2,
        @"alienNumber" : mrzResult.alienNumber,
        @"applicationReceiptNumber" : mrzResult.applicationReceiptNumber,
        @"immigrantCaseNumber" : mrzResult.immigrantCaseNumber,
        @"mrzText" : mrzResult.mrzText,
        @"mrzParsed" : [NSNumber numberWithBool:mrzResult.isParsed],
        @"mrzVerified" : [NSNumber numberWithBool:mrzResult.isVerified],
        @"sanitizedOpt1" : mrzResult.sanitizedOpt1,
        @"sanitizedOpt2" : mrzResult.sanitizedOpt2,
        @"sanitizedNationality" : mrzResult.sanitizedNationality,
        @"sanitizedIssuer" : mrzResult.sanitizedIssuer,
        @"sanitizedDocumentCode" : mrzResult.sanitizedDocumentCode,
        @"sanitizedDocumentNumber" : mrzResult.sanitizedDocumentNumber,
        @"age" : [NSNumber numberWithInteger:mrzResult.age]
     };
}

+(MBImageExtensionFactors) deserializeMBImageExtensionFactors:(NSDictionary *)jsonExtensionFactors {
    if (jsonExtensionFactors == nil) {
        return MBMakeImageExtensionFactors(0.f, 0.f, 0.f, 0.f);
    } else {
        return MBMakeImageExtensionFactors(
            [(NSNumber*)[jsonExtensionFactors valueForKey:@"upFactor"] floatValue],
            [(NSNumber*)[jsonExtensionFactors valueForKey:@"rightFactor"] floatValue],
            [(NSNumber*)[jsonExtensionFactors valueForKey:@"downFactor"] floatValue],
            [(NSNumber*)[jsonExtensionFactors valueForKey:@"leftFactor"] floatValue]
        );
    }
}

+(NSDictionary *) serializeDriverLicenseDetailedInfo:(MBDriverLicenseDetailedInfo *)driverLicenseDetailedInfo {
    NSMutableArray *vehicleClassesInfo = [NSMutableArray array];

    for (MBVehicleClassInfo *info in driverLicenseDetailedInfo.vehicleClassesInfo) {
        [vehicleClassesInfo addObject:[MBBlinkIDSerializationUtils serializeVehicleClassInfo:info]];
    }
    
    return @{
        @"restrictions" : [MBSerializationUtils serializeMBStringResult:driverLicenseDetailedInfo.restrictions],
        @"endorsements" : [MBSerializationUtils serializeMBStringResult:driverLicenseDetailedInfo.endorsements],
        @"vehicleClass" : [MBSerializationUtils serializeMBStringResult:driverLicenseDetailedInfo.vehicleClass],
        @"conditions" : [MBSerializationUtils serializeMBStringResult:driverLicenseDetailedInfo.conditions],
        @"vehicleClassesInfo" : vehicleClassesInfo
    };
}

+ (NSDictionary *)serializeBarcodeDriverLicenseDetailedInfo:(MBBarcodeDriverLicenseDetailedInfo *)driverLicenseDetailedInfo {
    NSMutableArray *vehicleClassesInfo = [NSMutableArray array];

    for (MBBarcodeVehicleClassInfo *info in driverLicenseDetailedInfo.vehicleClassesInfo) {
        [vehicleClassesInfo addObject:[MBBlinkIDSerializationUtils serializeBarcodeVehicleClassInfo:info]];
    }
    
    return @{
        @"restrictions" : driverLicenseDetailedInfo.restrictions,
        @"endorsements" : driverLicenseDetailedInfo.endorsements,
        @"vehicleClass" : driverLicenseDetailedInfo.vehicleClass,
        @"conditions" : driverLicenseDetailedInfo.conditions,
        @"vehicleClassesInfo" : vehicleClassesInfo
    };
}

+(NSDictionary *) serializeVehicleClassInfo:(MBVehicleClassInfo *)vehicleClassInfo {
    return @{
        @"vehicleClass" : [MBSerializationUtils serializeMBStringResult:vehicleClassInfo.vehicleClass],
        @"licenceType" : [MBSerializationUtils serializeMBStringResult:vehicleClassInfo.licenceType],
        @"effectiveDate" : [MBSerializationUtils serializeMBDateResult:vehicleClassInfo.effectiveDate],
        @"expiryDate" : [MBSerializationUtils serializeMBDateResult:vehicleClassInfo.expiryDate]
    };
}

+ (NSDictionary *)serializeBarcodeVehicleClassInfo:(MBBarcodeVehicleClassInfo *)vehicleClassInfo {
    return @{
        @"vehicleClass" : vehicleClassInfo.vehicleClass,
        @"licenceType" : vehicleClassInfo.licenceType,
        @"effectiveDate" : [MBBlinkIDSerializationUtils serializeMBDate:vehicleClassInfo.effectiveDate],
        @"expiryDate" : [MBBlinkIDSerializationUtils serializeMBDate:vehicleClassInfo.expiryDate]
    };
}

+ (NSDictionary *)serializeDataMatchResult:(MBDataMatchResult *)dataMatchResult {
    NSMutableArray *states = [NSMutableArray array];

    for (MBFieldState *state in dataMatchResult.states) {
        [states addObject:[MBBlinkIDSerializationUtils serializeFieldState: state]];
    }
    
    return @{
        @"states": states,
        @"stateForWholeDocument": @(dataMatchResult.stateForWholeDocument)
    };
}

+ (NSDictionary *)serializeFieldState:(MBFieldState *)fieldState {
    return @{
        @"field": @(fieldState.field),
        @"state": @(fieldState.state)
    };
}

+(NSDictionary *) serializeClassInfo:(MBClassInfo *)classInfo {
    return @{
             @"country" : [NSNumber numberWithInteger:(classInfo.country)],
             @"region" : [NSNumber numberWithInteger:(classInfo.region)],
             @"type" : [NSNumber numberWithInteger:(classInfo.type)],
             @"empty" : [NSNumber numberWithBool:classInfo.empty],
             @"countryName" : classInfo.countryName,
             @"isoNumericCountryCode" : classInfo.isoNumericCountryCode,
             @"isoAlpha2CountryCode" : classInfo.isoAlpha2CountryCode,
             @"isoAlpha3CountryCode" : classInfo.isoAlpha3CountryCode
             };
}

+(NSDictionary *) serializeVizResult:(MBVizResult *)vizResult {
    return @{
        @"firstName" : [MBSerializationUtils serializeMBStringResult:vizResult.firstName],
        @"lastName" : [MBSerializationUtils serializeMBStringResult:vizResult.lastName],
        @"fullName" : [MBSerializationUtils serializeMBStringResult:vizResult.fullName],
        @"additionalNameInformation" : [MBSerializationUtils serializeMBStringResult:vizResult.additionalNameInformation],
        @"localizedName" : [MBSerializationUtils serializeMBStringResult:vizResult.localizedName],
        @"address" : [MBSerializationUtils serializeMBStringResult:vizResult.address],
        @"additionalAddressInformation" : [MBSerializationUtils serializeMBStringResult:vizResult.additionalAddressInformation],
        @"additionalOptionalAddressInformation" : [MBSerializationUtils serializeMBStringResult:vizResult.additionalOptionalAddressInformation],
        @"placeOfBirth" : [MBSerializationUtils serializeMBStringResult:vizResult.placeOfBirth],
        @"nationality" : [MBSerializationUtils serializeMBStringResult:vizResult.nationality],
        @"race" : [MBSerializationUtils serializeMBStringResult:vizResult.race],
        @"religion" : [MBSerializationUtils serializeMBStringResult:vizResult.religion],
        @"profession" : [MBSerializationUtils serializeMBStringResult:vizResult.profession],
        @"maritalStatus" : [MBSerializationUtils serializeMBStringResult:vizResult.maritalStatus],
        @"residentialStatus" : [MBSerializationUtils serializeMBStringResult:vizResult.residentialStatus],
        @"employer" : [MBSerializationUtils serializeMBStringResult:vizResult.employer],
        @"sex" : [MBSerializationUtils serializeMBStringResult:vizResult.sex],
        @"dateOfBirth" : [MBSerializationUtils serializeMBDateResult:vizResult.dateOfBirth],
        @"dateOfIssue" : [MBSerializationUtils serializeMBDateResult:vizResult.dateOfIssue],
        @"dateOfExpiry" : [MBSerializationUtils serializeMBDateResult:vizResult.dateOfExpiry],
        @"documentNumber" : [MBSerializationUtils serializeMBStringResult:vizResult.documentNumber],
        @"personalIdNumber" : [MBSerializationUtils serializeMBStringResult:vizResult.personalIdNumber],
        @"documentAdditionalNumber" : [MBSerializationUtils serializeMBStringResult:vizResult.documentAdditionalNumber],
        @"additionalPersonalIdNumber" : [MBSerializationUtils serializeMBStringResult:vizResult.additionalPersonalIdNumber],
        @"issuingAuthority" : [MBSerializationUtils serializeMBStringResult:vizResult.issuingAuthority],
        @"driverLicenseDetailedInfo" : [MBBlinkIDSerializationUtils serializeDriverLicenseDetailedInfo:vizResult.driverLicenseDetailedInfo],
        @"empty" : [NSNumber numberWithBool:vizResult.empty]
    };
}

+(NSDictionary *) serializeBarcodeResult:(MBBarcodeResult *)barcodeResult {
    return @{
        @"rawData" : [barcodeResult.rawData base64EncodedStringWithOptions:0],
        @"stringData" : barcodeResult.stringData,
        @"uncertain" : [NSNumber numberWithBool:barcodeResult.uncertain],
        @"barcodeType" : [NSNumber numberWithInteger:(barcodeResult.barcodeType)],
        @"firstName" : barcodeResult.firstName,
        @"middleName" : barcodeResult.middleName,
        @"lastName" : barcodeResult.lastName,
        @"fullName" : barcodeResult.fullName,
        @"additionalNameInformation" : barcodeResult.additionalNameInformation,
        @"address" : barcodeResult.address,
        @"placeOfBirth" : barcodeResult.placeOfBirth,
        @"nationality" : barcodeResult.nationality,
        @"race" : barcodeResult.race,
        @"religion" : barcodeResult.religion,
        @"profession" : barcodeResult.profession,
        @"maritalStatus" : barcodeResult.maritalStatus,
        @"residentialStatus" : barcodeResult.residentialStatus,
        @"employer" : barcodeResult.employer,
        @"sex" : barcodeResult.sex,
        @"dateOfBirth" : [MBBlinkIDSerializationUtils serializeMBDate:barcodeResult.dateOfBirth],
        @"dateOfIssue" : [MBBlinkIDSerializationUtils serializeMBDate:barcodeResult.dateOfIssue],
        @"dateOfExpiry" : [MBBlinkIDSerializationUtils serializeMBDate:barcodeResult.dateOfExpiry],
        @"documentNumber" : barcodeResult.documentNumber,
        @"personalIdNumber" : barcodeResult.personalIdNumber,
        @"documentAdditionalNumber" : barcodeResult.documentAdditionalNumber,
        @"issuingAuthority" : barcodeResult.issuingAuthority,
        @"street" : barcodeResult.street,
        @"postalCode" : barcodeResult.postalCode,
        @"city" : barcodeResult.city,
        @"jurisdiction" : barcodeResult.jurisdiction,
        @"driverLicenseDetailedInfo" : [MBBlinkIDSerializationUtils serializeBarcodeDriverLicenseDetailedInfo:barcodeResult.driverLicenseDetailedInfo],
        @"empty" : [NSNumber numberWithBool:barcodeResult.empty],
        @"extendedElements" : [MBBlinkIDSerializationUtils serializeBarcodeElements:barcodeResult.extendedElements]
    };
}

+(NSDictionary *) serializeImageAnalysisResult:(MBImageAnalysisResult *)imageAnalysisResult {
    return @{
             @"blurred" : [NSNumber numberWithBool:imageAnalysisResult.blurred],
             @"documentImageColorStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.documentImageColorStatus)],
             @"documentImageMoireStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.documentImageMoireStatus)],
             @"faceDetectionStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.faceDetectionStatus)],
             @"mrzDetectionStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.mrzDetectionStatus)],
             @"barcodeDetectionStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.barcodeDetectionStatus)]
        };
}

+(MBRecognitionModeFilter *) deserializeMBRecognitionModeFilter:(NSDictionary *)jsonRecognitionModeFilter {
    if (jsonRecognitionModeFilter == nil) {
        return [[MBRecognitionModeFilter alloc] init];
    } else {
        MBRecognitionModeFilter *recognitionModeFilter = [[MBRecognitionModeFilter alloc] init];
        recognitionModeFilter.enableMrzId = [[jsonRecognitionModeFilter valueForKey:@"enableMrzId"] boolValue];
        recognitionModeFilter.enableMrzVisa = [[jsonRecognitionModeFilter valueForKey:@"enableMrzVisa"] boolValue];
        recognitionModeFilter.enableMrzPassport = [[jsonRecognitionModeFilter valueForKey:@"enableMrzPassport"] boolValue];
        recognitionModeFilter.enablePhotoId = [[jsonRecognitionModeFilter valueForKey:@"enablePhotoId"] boolValue];
        recognitionModeFilter.enableBarcodeId = [[jsonRecognitionModeFilter valueForKey:@"enableBarcodeId"] boolValue];
        recognitionModeFilter.enableFullDocumentRecognition = [[jsonRecognitionModeFilter valueForKey:@"enableFullDocumentRecognition"] boolValue];

        return recognitionModeFilter;
    }
}

+(NSDictionary * _Nonnull) serializeBarcodeElements:(MBBarcodeElements * _Nonnull)extendedElements {
    return @{
        @"empty" : [NSNumber numberWithBool:extendedElements.empty],
        @"values": [MBBlinkIDSerializationUtils serializeBarcodeElementsValues: extendedElements]
    };
}

+(NSArray<NSString *> *) serializeBarcodeElementsValues:(MBBarcodeElements *)extendedElements {
    NSMutableArray<NSString *> *fieldsArr = [[NSMutableArray alloc] init];
    for (NSUInteger i = 0; i <= SecurityVersion; ++i) {
        [fieldsArr addObject:[extendedElements getValue:(MBBarcodeElementKey)i]];
    }
    return fieldsArr;
}

+(NSDictionary *)serializeAdditionalProcessingInfo:(MBAdditionalProcessingInfo *)additionalProcessingInfo {
    return @{
        @"missingMandatoryFields": additionalProcessingInfo.missingMandatoryFields,
        @"invalidCharacterFields" : additionalProcessingInfo.invalidCharacterFields,
        @"extraPresentFields": additionalProcessingInfo.extraPresentFields
    };
}

+ (NSDictionary *)serializeMBDate:(MBDate *)date {
    return @{
        @"day" : @(date.day),
        @"month" : @(date.month),
        @"year" : @(date.year),
        @"originalDateString" : date.originalDateString
    };
}

@end