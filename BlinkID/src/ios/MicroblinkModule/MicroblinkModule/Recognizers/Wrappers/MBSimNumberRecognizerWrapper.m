#import "MBSimNumberRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBSimNumberRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SimNumberRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBSimNumberRecognizer *recognizer = [[MBSimNumberRecognizer alloc] init];

    return recognizer;
}

@end

@interface MBSimNumberRecognizer (JsonSerialization)
@end

@implementation MBSimNumberRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.simNumber forKey:@"simNumber"];

    return jsonResult;
}

@end