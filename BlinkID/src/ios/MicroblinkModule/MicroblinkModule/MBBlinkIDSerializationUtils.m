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
        @"dateOfBirth" : [MBSerializationUtils serializeMBDate:mrzResult.dateOfBirth],
        @"documentNumber" : mrzResult.documentNumber,
        @"nationality" : mrzResult.nationality,
        @"gender" : mrzResult.gender,
        @"documentCode" : mrzResult.documentCode,
        @"dateOfExpiry" : [MBSerializationUtils serializeMBDate:mrzResult.dateOfExpiry],
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
        @"restrictions" : [MBBlinkIDSerializationUtils serializeMBStringResult:driverLicenseDetailedInfo.restrictions],
        @"endorsements" : [MBBlinkIDSerializationUtils serializeMBStringResult:driverLicenseDetailedInfo.endorsements],
        @"vehicleClass" : [MBBlinkIDSerializationUtils serializeMBStringResult:driverLicenseDetailedInfo.vehicleClass],
        @"conditions" : [MBBlinkIDSerializationUtils serializeMBStringResult:driverLicenseDetailedInfo.conditions],
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
        @"vehicleClass" : [MBBlinkIDSerializationUtils serializeMBStringResult:vehicleClassInfo.vehicleClass],
        @"licenceType" : [MBBlinkIDSerializationUtils serializeMBStringResult:vehicleClassInfo.licenceType],
        @"effectiveDate" : [MBBlinkIDSerializationUtils serializeMBDateResult:vehicleClassInfo.effectiveDate],
        @"expiryDate" : [MBBlinkIDSerializationUtils serializeMBDateResult:vehicleClassInfo.expiryDate]
    };
}

+ (NSDictionary *)serializeBarcodeVehicleClassInfo:(MBBarcodeVehicleClassInfo *)vehicleClassInfo {
    return @{
        @"vehicleClass" : vehicleClassInfo.vehicleClass,
        @"licenceType" : vehicleClassInfo.licenceType,
        @"effectiveDate" : [MBSerializationUtils serializeMBDate :vehicleClassInfo.effectiveDate],
        @"expiryDate" : [MBSerializationUtils serializeMBDate:vehicleClassInfo.expiryDate]
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
        @"firstName" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.firstName],
        @"lastName" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.lastName],
        @"fullName" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.fullName],
        @"additionalNameInformation" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.additionalNameInformation],
        @"localizedName" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.localizedName],
        @"address" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.address],
        @"additionalAddressInformation" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.additionalAddressInformation],
        @"additionalOptionalAddressInformation" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.additionalOptionalAddressInformation],
        @"placeOfBirth" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.placeOfBirth],
        @"nationality" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.nationality],
        @"race" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.race],
        @"religion" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.religion],
        @"profession" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.profession],
        @"maritalStatus" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.maritalStatus],
        @"residentialStatus" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.residentialStatus],
        @"employer" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.employer],
        @"sex" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.sex],
        @"dateOfBirth" : [MBBlinkIDSerializationUtils serializeMBDateResult:vizResult.dateOfBirth],
        @"dateOfIssue" : [MBBlinkIDSerializationUtils serializeMBDateResult:vizResult.dateOfIssue],
        @"dateOfExpiry" : [MBBlinkIDSerializationUtils serializeMBDateResult:vizResult.dateOfExpiry],
        @"documentNumber" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.documentNumber],
        @"personalIdNumber" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.personalIdNumber],
        @"documentAdditionalNumber" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.documentAdditionalNumber],
        @"additionalPersonalIdNumber" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.additionalPersonalIdNumber],
        @"issuingAuthority" : [MBBlinkIDSerializationUtils serializeMBStringResult:vizResult.issuingAuthority],
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
        @"dateOfBirth" : [MBSerializationUtils serializeMBDate:barcodeResult.dateOfBirth],
        @"dateOfIssue" : [MBSerializationUtils serializeMBDate:barcodeResult.dateOfIssue],
        @"dateOfExpiry" : [MBSerializationUtils serializeMBDate:barcodeResult.dateOfExpiry],
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
             @"barcodeDetectionStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.barcodeDetectionStatus)],
             @"cardRotation" : [NSNumber numberWithInteger:(imageAnalysisResult.cardRotation)],
             @"cardOrientation" : [NSNumber numberWithInteger:(imageAnalysisResult.cardOrientation)],
             @"realIdDetectionStatus" : [NSNumber numberWithInteger:(imageAnalysisResult.realIDDetectionStatus)]
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

+(MBClassAnonymizationSettings *) deserializeMBClassAnonymizationSettings:(NSDictionary *)jsonClassAnonymizationSettings {
    if (jsonClassAnonymizationSettings == nil) {
        return [[MBClassAnonymizationSettings alloc] init];
    } else {
        NSArray<NSNumber *> *fields = [jsonClassAnonymizationSettings objectForKey:@"fields"];
        NSMutableArray<NSNumber *> *newFields = [[NSMutableArray alloc] init];

        for (NSNumber *field in fields) {
            [newFields addObject:field];
        }

        NSNumber *country = [jsonClassAnonymizationSettings valueForKey:@"country"];
        NSNumber *region = [jsonClassAnonymizationSettings valueForKey:@"region"];
        NSNumber *type = [jsonClassAnonymizationSettings valueForKey:@"type"];
        NSDictionary *jsonDocumentNumberAnonymizationSettings = [jsonClassAnonymizationSettings valueForKey:@"documentNumberAnonymizationSettings"];
        
        if (![jsonDocumentNumberAnonymizationSettings isEqual:[NSNull null]] && jsonDocumentNumberAnonymizationSettings != nil) {
            MBDocumentNumberAnonymizationSettings *documentNumberAnonymizationSettings = [[MBDocumentNumberAnonymizationSettings alloc] initWithPrefixDigitsVisible:[[jsonDocumentNumberAnonymizationSettings valueForKey:@"prefixDigitsVisible"] integerValue] suffixDigitsVisible:[[jsonDocumentNumberAnonymizationSettings valueForKey:@"suffixDigitsVisible"] integerValue]];
                                                                                          
            if (![country isEqual:[NSNull null]] && country.integerValue != nil && ![region isEqual:[NSNull null]] && region.integerValue != nil && ![type isEqual:[NSNull null]] && type.integerValue != nil) {
                return [[MBClassAnonymizationSettings alloc] initWithCountry:country.integerValue region:region.integerValue type:type.integerValue fields:fields documentNumberAnonymizationSettings:documentNumberAnonymizationSettings];
            } else if (![country isEqual:[NSNull null]] && country.integerValue != nil && ![type isEqual:[NSNull null]] && type.integerValue != nil){
                return [[MBClassAnonymizationSettings alloc] initWithCountry:country.integerValue type:type.integerValue fields:fields documentNumberAnonymizationSettings:documentNumberAnonymizationSettings];
            } else if (![country isEqual:[NSNull null]] && country.integerValue != nil && ![region isEqual:[NSNull null]] && region.integerValue != nil ) {
                return [[MBClassAnonymizationSettings alloc] initWithCountry:country.integerValue region:region.integerValue fields:fields documentNumberAnonymizationSettings:documentNumberAnonymizationSettings];
           } else if (![region isEqual:[NSNull null]] && region.integerValue != nil && ![type isEqual:[NSNull null]] && type.integerValue != nil ) {
               return [[MBClassAnonymizationSettings alloc] initWithRegion:region.integerValue type:type.integerValue fields:fields documentNumberAnonymizationSettings:documentNumberAnonymizationSettings];
            } else if (![country isEqual:[NSNull null]] && country.integerValue != nil ) {
                return [[MBClassAnonymizationSettings alloc] initWithCountry:country.integerValue fields:fields documentNumberAnonymizationSettings:documentNumberAnonymizationSettings];
            } else if (![region isEqual:[NSNull null]] && region.integerValue != nil) {
                return [[MBClassAnonymizationSettings alloc] initWithRegion:region.integerValue fields:fields documentNumberAnonymizationSettings:documentNumberAnonymizationSettings];
            } else if (![type isEqual:[NSNull null]] && type.integerValue != nil ) {
                return [[MBClassAnonymizationSettings alloc] initWithType:type.integerValue fields:fields documentNumberAnonymizationSettings:documentNumberAnonymizationSettings];
            }
            return [[MBClassAnonymizationSettings alloc] initWithFields:fields documentNumberAnonymizationSettings:documentNumberAnonymizationSettings];
        } else {
            if (![country isEqual:[NSNull null]] && country.integerValue != nil && ![region isEqual:[NSNull null]] && region.integerValue != nil && ![type isEqual:[NSNull null]] && type.integerValue != nil) {
                return [[MBClassAnonymizationSettings alloc] initWithCountry:country.integerValue region:region.integerValue type:type.integerValue fields:fields];
            } else if (![country isEqual:[NSNull null]] && country.integerValue != nil && ![type isEqual:[NSNull null]] && type.integerValue != nil){
                return [[MBClassAnonymizationSettings alloc] initWithCountry:country.integerValue type:type.integerValue fields:fields];
            } else if (![country isEqual:[NSNull null]] && country.integerValue != nil && ![region isEqual:[NSNull null]] && region.integerValue != nil ) {
                return [[MBClassAnonymizationSettings alloc] initWithCountry:country.integerValue region:region.integerValue fields:fields];
           } else if (![region isEqual:[NSNull null]] && region.integerValue != nil && ![type isEqual:[NSNull null]] && type.integerValue != nil ) {
               return [[MBClassAnonymizationSettings alloc] initWithRegion:region.integerValue type:type.integerValue fields:fields];
            } else if (![country isEqual:[NSNull null]] && country.integerValue != nil ) {
                return [[MBClassAnonymizationSettings alloc] initWithCountry:country.integerValue fields:fields];
            } else if (![region isEqual:[NSNull null]] && region.integerValue != nil) {
                return [[MBClassAnonymizationSettings alloc] initWithRegion:region.integerValue fields:fields];
            } else if (![type isEqual:[NSNull null]] && type.integerValue != nil ) {
                return [[MBClassAnonymizationSettings alloc] initWithType:type.integerValue fields:fields];
            }
        }
        return [[MBClassAnonymizationSettings alloc] initWithFields:fields];
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

+ (NSDictionary *)serializeMBDateResult:(MBDateResult *) value {
    NSMutableDictionary *dict = [MBBlinkIDSerializationUtils serializeDay:value.day month:value.month year:value.year].mutableCopy;
    [dict setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:value.originalDateStringResult] forKey:@"originalDateStringResult"];
    [dict setValue:[NSNumber numberWithBool:value.isFilledByDomainKnowledge] forKey:@"isFilledByDomainKnowledge"];
    return dict;
}

+(NSDictionary *) serializeDay:(NSInteger)day month:(NSInteger)month year:(NSInteger)year {
    return @{
      @"day" : [NSNumber numberWithInteger:day],
      @"month" : [NSNumber numberWithInteger:month],
      @"year" : [NSNumber numberWithInteger:year]
    };
}

+(NSDictionary *) serializeNSDate:(NSDate*) value {
    NSDateComponents *components = [[NSCalendar currentCalendar] components:NSCalendarUnitDay | NSCalendarUnitMonth | NSCalendarUnitYear fromDate:value];
    return [MBBlinkIDSerializationUtils serializeDay:components.day month:components.month year:components.year];
}

+ (NSDictionary *)serializeMBStringResult:(MBStringResult *) value {
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    [dict setValue:[value valueForAlphabetType:MBAlphabetTypeLatin] forKey:@"latin"];
    [dict setValue:[value valueForAlphabetType:MBAlphabetTypeArabic] forKey:@"arabic"];
    [dict setValue:[value valueForAlphabetType:MBAlphabetTypeCyrillic] forKey:@"cyrillic"];
    [dict setValue:value.description forKey:@"description"];
    
    NSMutableDictionary *location = [NSMutableDictionary dictionary];
    [location setValue:[MBSerializationUtils serializeCGRect:[value locationForAlphabetType:MBAlphabetTypeLatin]] forKey:@"latin"];
    [location setValue:[MBSerializationUtils serializeCGRect:[value locationForAlphabetType:MBAlphabetTypeArabic]] forKey:@"arabic"];
    [location setValue:[MBSerializationUtils serializeCGRect:[value locationForAlphabetType:MBAlphabetTypeCyrillic]] forKey:@"cyrillic"];
    [dict setValue:location forKey:@"location"];
    
    NSMutableDictionary *side = [NSMutableDictionary dictionary];
    [side setValue:[NSNumber numberWithInteger:[value sideForAlphabetType:MBAlphabetTypeLatin]] forKey:@"latin"];
    [side setValue:[NSNumber numberWithInteger:[value sideForAlphabetType:MBAlphabetTypeArabic]] forKey:@"arabic"];
    [side setValue:[NSNumber numberWithInteger:[value sideForAlphabetType:MBAlphabetTypeCyrillic]] forKey:@"cyrillic"];
    [dict setValue:side forKey:@"side"];
    
    return dict;
}

+(NSNumber *)serializeMBSide:(MBSide) value {
    if (value == MBSideNone) {
        return nil;
    }
    return [NSNumber numberWithLong:value - 1];
}

@end