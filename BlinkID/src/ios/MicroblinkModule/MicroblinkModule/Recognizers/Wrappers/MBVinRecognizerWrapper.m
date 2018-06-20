#import "MBVinRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBVinRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"VinRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBVinRecognizer *recognizer = [[MBVinRecognizer alloc] init];

    return recognizer;
}

@end

@interface MBVinRecognizer (JsonSerialization)
@end

@implementation MBVinRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.vin forKey:@"vin"];

    return jsonResult;
}

@end