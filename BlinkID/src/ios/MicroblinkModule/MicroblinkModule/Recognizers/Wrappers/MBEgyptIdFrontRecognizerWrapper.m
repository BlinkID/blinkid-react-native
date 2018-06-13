#import "MBEgyptIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBEgyptIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"EgyptIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBEgyptIdFrontRecognizer *recognizer = [[MBEgyptIdFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractNationalNumber = [jsonRecognizer valueForKey:@"extractNationalNumber"];
        if (extractNationalNumber != nil) {
            recognizer.extractNationalNumber = [(NSNumber *)extractNationalNumber boolValue];
        }
    }
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

@interface MBEgyptIdFrontRecognizer (JsonSerialization)
@end

@implementation MBEgyptIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.nationalNumber forKey:@"nationalNumber"];

    return jsonResult;
}

@end