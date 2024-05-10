#import "MBUsdlRecognizerWrapper.h"

#import "MBSerializationUtils.h"

@implementation MBUsdlRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"UsdlRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBUsdlRecognizer *recognizer = [[MBUsdlRecognizer alloc] init];

    {
        id nullQuietZoneAllowed = [jsonRecognizer valueForKey:@"nullQuietZoneAllowed"];
        if (nullQuietZoneAllowed != nil) {
            recognizer.allowNullQuietZone = [(NSNumber*)nullQuietZoneAllowed boolValue];
        }
    }
    {
        id uncertainDecoding = [jsonRecognizer valueForKey:@"uncertainDecoding"];
        if (uncertainDecoding != nil) {
            recognizer.scanUncertain = [(NSNumber*)uncertainDecoding boolValue];
        }
    }
    {
        id enableCompactParser = [jsonRecognizer valueForKey:@"enableCompactParser"];
        if (enableCompactParser != nil) {
            recognizer.enableCompactParser = [(NSNumber*)enableCompactParser boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBUsdlRecognizer (JsonSerialization)
@end

@implementation MBUsdlRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];

    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:self.result.middleName forKey:@"middleName"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:self.result.fullName forKey:@"fullName"];
    [jsonResult setValue:self.result.nameSuffix forKey:@"nameSuffix"];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:self.result.restrictions forKey:@"restrictions"];
    [jsonResult setValue:self.result.endorsements forKey:@"endorsements"];
    [jsonResult setValue:self.result.vehicleClass forKey:@"vehicleClass"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDate:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDate:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.age] forKey:@"age"];

    [jsonResult setValue:[self.result optionalElements] forKey:@"optionalElements"];
    [jsonResult setValue:[[self.result data] base64EncodedStringWithOptions:0] forKey:@"rawData"];
    [jsonResult setValue:[[NSString alloc] initWithData:[self.result data] encoding:NSUTF8StringEncoding] forKey:@"rawStringData"];
    [jsonResult setValue:[NSNumber numberWithBool:[self.result isUncertain]] forKey:@"uncertain"];
    [jsonResult setValue:[self serializeFields] forKey:@"fields"];

    [jsonResult setValue:self.result.street forKey:@"street"];
    [jsonResult setValue:self.result.postalCode forKey:@"postalCode"];
    [jsonResult setValue:self.result.city forKey:@"city"];
    [jsonResult setValue:self.result.jurisdiction forKey:@"jurisdiction"];

    return jsonResult;
}

-(NSArray<NSString *> *) serializeFields {
    NSMutableArray<NSString *> *fieldsArr = [[NSMutableArray alloc] init];
    for (NSUInteger i = 0; i <= SecurityVersion; ++i) {
        [fieldsArr addObject:[self.result getField:(MBUsdlKeys)i]];
    }
    return fieldsArr;
}

@end