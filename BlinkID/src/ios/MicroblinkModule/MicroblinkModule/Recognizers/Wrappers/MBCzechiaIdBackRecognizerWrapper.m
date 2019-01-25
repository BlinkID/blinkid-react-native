#import "MBCzechiaIdBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBCzechiaIdBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"CzechiaIdBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBCzechiaIdBackRecognizer *recognizer = [[MBCzechiaIdBackRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractAuthority = [jsonRecognizer valueForKey:@"extractAuthority"];
        if (extractAuthority != nil) {
            recognizer.extractAuthority = [(NSNumber *)extractAuthority boolValue];
        }
    }
    {
        id extractPermanentStay = [jsonRecognizer valueForKey:@"extractPermanentStay"];
        if (extractPermanentStay != nil) {
            recognizer.extractPermanentStay = [(NSNumber *)extractPermanentStay boolValue];
        }
    }
    {
        id extractPersonalNumber = [jsonRecognizer valueForKey:@"extractPersonalNumber"];
        if (extractPersonalNumber != nil) {
            recognizer.extractPersonalNumber = [(NSNumber *)extractPersonalNumber boolValue];
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

@interface MBCzechiaIdBackRecognizer (JsonSerialization)
@end

@implementation MBCzechiaIdBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.authority forKey:@"authority"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];
    [jsonResult setValue:self.result.permanentStay forKey:@"permanentStay"];
    [jsonResult setValue:self.result.personalNumber forKey:@"personalNumber"];

    return jsonResult;
}

@end