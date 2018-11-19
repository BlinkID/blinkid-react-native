#import "MBGermanyDlBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBGermanyDlBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"GermanyDlBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBGermanyDlBackRecognizer *recognizer = [[MBGermanyDlBackRecognizer alloc] init];
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

@interface MBGermanyDlBackRecognizer (JsonSerialization)
@end

@implementation MBGermanyDlBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfIssueB10] forKey:@"dateOfIssueB10"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.dateOfIssueB10NotSpecified] forKey:@"dateOfIssueB10NotSpecified"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];

    return jsonResult;
}

@end