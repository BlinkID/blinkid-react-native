#import "MBDocumentFaceRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBDocumentFaceRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"DocumentFaceRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBDocumentFaceRecognizer *recognizer = [[MBDocumentFaceRecognizer alloc] init];
    {
        id returnFaceImage = [jsonRecognizer valueForKey:@"returnFaceImage"];
        if (returnFaceImage != nil) {
            recognizer.returnFaceImage = [(NSNumber *)returnFaceImage boolValue];
        }
    }
    {
        id returnFullDocumentImage = [jsonRecognizer valueForKey:@"returnFullDocumentImage"];
        if (returnFullDocumentImage != nil) {
            recognizer.returnFullDocumentImage = [(NSNumber *)returnFullDocumentImage boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBDocumentFaceRecognizer (JsonSerialization)
@end

@implementation MBDocumentFaceRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];

    return jsonResult;
}

@end