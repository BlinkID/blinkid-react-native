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
        @"documentType" : [NSNumber numberWithInteger:(mrzResult.documentType + 1)],
        @"primaryId" : mrzResult.primaryID,
        @"secondaryId" : mrzResult.secondaryID,
        @"issuer" : mrzResult.issuer,
        @"dateOfBirth" : [MBSerializationUtils serializeMBDateResult:mrzResult.dateOfBirth],
        @"documentNumber" : mrzResult.documentNumber,
        @"nationality" : mrzResult.nationality,
        @"gender" : mrzResult.gender,
        @"documentCode" : mrzResult.documentCode,
        @"dateOfExpiry" : [MBSerializationUtils serializeMBDateResult:mrzResult.dateOfExpiry],
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
    return @{
             @"restrictions" : driverLicenseDetailedInfo.restrictions,
             @"endorsements" : driverLicenseDetailedInfo.endorsements,
             @"vehicleClass" : driverLicenseDetailedInfo.vehicleClass,
             };
}

+(NSDictionary *) serializeClassInfo:(MBClassInfo *)classInfo {
    return @{
             @"country" : [NSNumber numberWithInteger:(classInfo.country + 1)],
             @"region" : [NSNumber numberWithInteger:(classInfo.region + 1)],
             @"type" : [NSNumber numberWithInteger:(classInfo.type + 1)],
             };
}

+(NSDictionary *) serializeVizResult:(MBVizResult *)vizResult {
    return @{
        @"firstName" : vizResult.firstName,
        @"lastName" : vizResult.lastName,
        @"fullName" : vizResult.fullName,
        @"additionalNameInformation" : vizResult.additionalNameInformation,
        @"localizedName" : vizResult.localizedName,
        @"address" : vizResult.address,
        @"additionalAddressInformation" : vizResult.additionalAddressInformation,
        @"placeOfBirth" : vizResult.placeOfBirth,
        @"nationality" : vizResult.nationality,
        @"race" : vizResult.race,
        @"religion" : vizResult.religion,
        @"profession" : vizResult.profession,
        @"maritalStatus" : vizResult.maritalStatus,
        @"residentialStatus" : vizResult.residentialStatus,
        @"employer" : vizResult.employer,
        @"sex" : vizResult.sex,
        @"dateOfBirth" : [MBSerializationUtils serializeMBDateResult:vizResult.dateOfBirth],
        @"dateOfIssue" : [MBSerializationUtils serializeMBDateResult:vizResult.dateOfIssue],
        @"dateOfExpiry" : [MBSerializationUtils serializeMBDateResult:vizResult.dateOfExpiry],
        @"documentNumber" : vizResult.documentNumber,
        @"personalIdNumber" : vizResult.personalIdNumber,
        @"documentAdditionalNumber" : vizResult.documentAdditionalNumber,
        @"additionalPersonalIdNumber" : vizResult.additionalPersonalIdNumber,
        @"issuingAuthority" : vizResult.issuingAuthority,
        @"driverLicenseDetailedInfo" : [MBBlinkIDSerializationUtils serializeDriverLicenseDetailedInfo:vizResult.driverLicenseDetailedInfo],
        @"conditions" : vizResult.conditions,
        @"empty" : [NSNumber numberWithBool:vizResult.empty]
    };
}

+(NSDictionary *) serializeBarcodeResult:(MBBarcodeResult *)barcodeResult {
    return @{
        @"rawData" : [barcodeResult.rawData base64EncodedStringWithOptions:0],
        @"stringData" : barcodeResult.stringData,
        @"uncertain" : [NSNumber numberWithBool:barcodeResult.uncertain],
        @"barcodeType" : [NSNumber numberWithInteger:(barcodeResult.barcodeType + 1)],
        @"firstName" : barcodeResult.firstName,
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
        @"dateOfBirth" : [MBSerializationUtils serializeMBDateResult:barcodeResult.dateOfBirth],
        @"dateOfIssue" : [MBSerializationUtils serializeMBDateResult:barcodeResult.dateOfIssue],
        @"dateOfExpiry" : [MBSerializationUtils serializeMBDateResult:barcodeResult.dateOfExpiry],
        @"documentNumber" : barcodeResult.documentNumber,
        @"personalIdNumber" : barcodeResult.personalIdNumber,
        @"documentAdditionalNumber" : barcodeResult.documentAdditionalNumber,
        @"issuingAuthority" : barcodeResult.issuingAuthority,
        @"street" : barcodeResult.street,
        @"postalCode" : barcodeResult.postalCode,
        @"city" : barcodeResult.city,
        @"jurisdiction" : barcodeResult.jurisdiction,
        @"driverLicenseDetailedInfo" : [MBBlinkIDSerializationUtils serializeDriverLicenseDetailedInfo:barcodeResult.driverLicenseDetailedInfo],
        @"empty" : [NSNumber numberWithBool:barcodeResult.empty]
    };
}

+(NSDictionary *) serializeImageAnalysisResult:(MBImageAnalysisResult *)imageAnalysisResult {
    return @{
             @"blurred" : [NSNumber numberWithBool:imageAnalysisResult.blurred],
             @"documentImageColorStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.documentImageColorStatus + 1)],
             @"documentImageMoireStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.documentImageMoireStatus + 1)]
        };
}

@end
