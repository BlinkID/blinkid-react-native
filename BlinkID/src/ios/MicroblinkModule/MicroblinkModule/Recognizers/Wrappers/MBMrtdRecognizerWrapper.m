#import "MBMrtdRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBMrtdRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"MrtdRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBMrtdRecognizer *recognizer = [[MBMrtdRecognizer alloc] init];
    {
        id allowSpecialCharacters = [jsonRecognizer valueForKey:@"allowSpecialCharacters"];
        if (allowSpecialCharacters != nil) {
            recognizer.allowSpecialCharacters = [(NSNumber *)allowSpecialCharacters boolValue];
        }
    }
    {
        id allowUnparsedResults = [jsonRecognizer valueForKey:@"allowUnparsedResults"];
        if (allowUnparsedResults != nil) {
            recognizer.allowUnparsedResults = [(NSNumber *)allowUnparsedResults boolValue];
        }
    }
    {
        id allowUnverifiedResults = [jsonRecognizer valueForKey:@"allowUnverifiedResults"];
        if (allowUnverifiedResults != nil) {
            recognizer.allowUnverifiedResults = [(NSNumber *)allowUnverifiedResults boolValue];
        }
    }
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id fullDocumentImageDpi = [jsonRecognizer valueForKey:@"fullDocumentImageDpi"];
        if (fullDocumentImageDpi != nil) {
            recognizer.fullDocumentImageDpi = [(NSNumber *)fullDocumentImageDpi unsignedIntegerValue];
        }
    }
    {
        id fullDocumentImageExtensionFactors = [jsonRecognizer valueForKey:@"fullDocumentImageExtensionFactors"];
        if (fullDocumentImageExtensionFactors != nil) {
            recognizer.fullDocumentImageExtensionFactors = [MBBlinkIDSerializationUtils deserializeMBImageExtensionFactors:(NSDictionary*)fullDocumentImageExtensionFactors];
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

@interface MBMrtdRecognizer (JsonSerialization)
@end

@implementation MBMrtdRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];

    return jsonResult;
}

@end