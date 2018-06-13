#import "MBMyKadBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBMyKadBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"MyKadBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBMyKadBackRecognizer *recognizer = [[MBMyKadBackRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id fullDocumentImageDpi = [jsonRecognizer valueForKey:@"fullDocumentImageDpi"];
        if (fullDocumentImageDpi != nil) {
            recognizer.fullDocumentImageDpi = [(NSNumber *)fullDocumentImageDpi boolValue];
        }
    }
    {
        id returnFullDocumentImage = [jsonRecognizer valueForKey:@"returnFullDocumentImage"];
        if (returnFullDocumentImage != nil) {
            recognizer.returnFullDocumentImage = [(NSNumber *)returnFullDocumentImage boolValue];
        }
    }
    {
        id returnSignatureImage = [jsonRecognizer valueForKey:@"returnSignatureImage"];
        if (returnSignatureImage != nil) {
            recognizer.returnSignatureImage = [(NSNumber *)returnSignatureImage boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBMyKadBackRecognizer (JsonSerialization)
@end

@implementation MBMyKadBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.extendedNricNumber forKey:@"extendedNricNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.nricNumber forKey:@"nricNumber"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.ownerBirthDate] forKey:@"ownerBirthDate"];
    [jsonResult setValue:self.result.ownerSex forKey:@"ownerSex"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];

    return jsonResult;
}

@end