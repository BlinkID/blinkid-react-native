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

    return recognizer;
}

@end

@interface MBUsdlRecognizer (JsonSerialization)
@end

@implementation MBUsdlRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];

    [jsonResult setValue:[self.result optionalElements] forKey:@"optionalElements"];
    [jsonResult setValue:[[self.result data] base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed] forKey:@"rawData"];
    [jsonResult setValue:[[NSString alloc] initWithData:[self.result data] encoding:NSUTF8StringEncoding] forKey:@"rawStringData"];
    [jsonResult setValue:[NSNumber numberWithBool:[self.result isUncertain]] forKey:@"uncertain"];
    [jsonResult setValue:[self serializeFields] forKey:@"fields"];

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
