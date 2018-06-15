#import "MBPdf417RecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBPdf417RecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"Pdf417Recognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBPdf417Recognizer *recognizer = [[MBPdf417Recognizer alloc] init];
    {
        id nullQuietZoneAllowed = [jsonRecognizer valueForKey:@"nullQuietZoneAllowed"];
        if (nullQuietZoneAllowed != nil) {
            recognizer.nullQuietZoneAllowed = [(NSNumber *)nullQuietZoneAllowed boolValue];
        }
    }
    {
        id scanInverse = [jsonRecognizer valueForKey:@"scanInverse"];
        if (scanInverse != nil) {
            recognizer.scanInverse = [(NSNumber *)scanInverse boolValue];
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

@interface MBPdf417Recognizer (JsonSerialization)
@end

@implementation MBPdf417Recognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[NSNumber numberWithInteger:(self.result.barcodeType + 1)] forKey:@"barcodeType"];
    [jsonResult setValue:[self.result.rawData base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed] forKey:@"rawData"];
    [jsonResult setValue:self.result.stringData forKey:@"stringData"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.uncertain] forKey:@"uncertain"];

    return jsonResult;
}

@end