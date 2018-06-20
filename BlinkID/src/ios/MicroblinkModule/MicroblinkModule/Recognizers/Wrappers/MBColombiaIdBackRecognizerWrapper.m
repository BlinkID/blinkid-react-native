#import "MBColombiaIdBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBColombiaIdBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"ColombiaIdBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBColombiaIdBackRecognizer *recognizer = [[MBColombiaIdBackRecognizer alloc] init];
    {
        id nullQuietZoneAllowed = [jsonRecognizer valueForKey:@"nullQuietZoneAllowed"];
        if (nullQuietZoneAllowed != nil) {
            recognizer.nullQuietZoneAllowed = [(NSNumber *)nullQuietZoneAllowed boolValue];
        }
    }
    {
        id scanUncertain = [jsonRecognizer valueForKey:@"scanUncertain"];
        if (scanUncertain != nil) {
            recognizer.scanUncertain = [(NSNumber *)scanUncertain boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBColombiaIdBackRecognizer (JsonSerialization)
@end

@implementation MBColombiaIdBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.bloodGroup forKey:@"bloodGroup"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[self.result.fingerprint base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed] forKey:@"fingerprint"];
    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];

    return jsonResult;
}

@end