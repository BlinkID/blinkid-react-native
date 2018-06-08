//
//  MBBlinkIDSerializationUtils.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import "MBBlinkIDSerializationUtils.h"
#import "MBSerializationUtils.h"

@implementation MBBlinkIDSerializationUtils

+(NSDictionary *) serializeMRZResult:(MBMRZResult *)mrzResult {
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
        @"mrzVerified" : [NSNumber numberWithBool:mrzResult.isVerified]
     };
}

@end
