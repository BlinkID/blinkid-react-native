#import "MBIdBarcodeRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"
#import "MBCommonSerializationUtils.h"

@implementation MBIdBarcodeRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"IdBarcodeRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBIdBarcodeRecognizer *recognizer = [[MBIdBarcodeRecognizer alloc] init];

    return recognizer;
}

@end

@interface MBIdBarcodeRecognizer (JsonSerialization)
@end

@implementation MBIdBarcodeRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.additionalAddressInformation forKey:@"additionalAddressInformation"];
    [jsonResult setValue:self.result.additionalNameInformation forKey:@"additionalNameInformation"];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.age] forKey:@"age"];
    [jsonResult setValue:[NSNumber numberWithInteger:(self.result.barcodeType + 1)] forKey:@"barcodeType"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:self.result.documentAdditionalNumber forKey:@"documentAdditionalNumber"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[NSNumber numberWithInteger:(self.result.documentType + 1)] forKey:@"documentType"];
    [jsonResult setValue:self.result.employer forKey:@"employer"];
    [jsonResult setValue:self.result.endorsements forKey:@"endorsements"];
    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:self.result.fullName forKey:@"fullName"];
    [jsonResult setValue:self.result.issuingAuthority forKey:@"issuingAuthority"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:self.result.maritalStatus forKey:@"maritalStatus"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.personalIdNumber forKey:@"personalIdNumber"];
    [jsonResult setValue:self.result.placeOfBirth forKey:@"placeOfBirth"];
    [jsonResult setValue:self.result.profession forKey:@"profession"];
    [jsonResult setValue:self.result.race forKey:@"race"];
    [jsonResult setValue:[self.result.rawData base64EncodedStringWithOptions:0] forKey:@"rawData"];
    [jsonResult setValue:self.result.religion forKey:@"religion"];
    [jsonResult setValue:self.result.residentialStatus forKey:@"residentialStatus"];
    [jsonResult setValue:self.result.restrictions forKey:@"restrictions"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:self.result.stringData forKey:@"stringData"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.uncertain] forKey:@"uncertain"];
    [jsonResult setValue:self.result.vehicleClass forKey:@"vehicleClass"];

    return jsonResult;
}

@end