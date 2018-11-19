#import "MBMexicoVoterIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBMexicoVoterIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"MexicoVoterIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBMexicoVoterIdFrontRecognizer *recognizer = [[MBMexicoVoterIdFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractAddress = [jsonRecognizer valueForKey:@"extractAddress"];
        if (extractAddress != nil) {
            recognizer.extractAddress = [(NSNumber *)extractAddress boolValue];
        }
    }
    {
        id extractCurp = [jsonRecognizer valueForKey:@"extractCurp"];
        if (extractCurp != nil) {
            recognizer.extractCurp = [(NSNumber *)extractCurp boolValue];
        }
    }
    {
        id extractFullName = [jsonRecognizer valueForKey:@"extractFullName"];
        if (extractFullName != nil) {
            recognizer.extractFullName = [(NSNumber *)extractFullName boolValue];
        }
    }
    {
        id faceImageDpi = [jsonRecognizer valueForKey:@"faceImageDpi"];
        if (faceImageDpi != nil) {
            recognizer.faceImageDpi = [(NSNumber *)faceImageDpi unsignedIntegerValue];
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
    {
        id returnSignatureImage = [jsonRecognizer valueForKey:@"returnSignatureImage"];
        if (returnSignatureImage != nil) {
            recognizer.returnSignatureImage = [(NSNumber *)returnSignatureImage boolValue];
        }
    }
    {
        id signatureImageDpi = [jsonRecognizer valueForKey:@"signatureImageDpi"];
        if (signatureImageDpi != nil) {
            recognizer.signatureImageDpi = [(NSNumber *)signatureImageDpi unsignedIntegerValue];
        }
    }

    return recognizer;
}

@end

@interface MBMexicoVoterIdFrontRecognizer (JsonSerialization)
@end

@implementation MBMexicoVoterIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.curp forKey:@"curp"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:self.result.electorKey forKey:@"electorKey"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.fullName forKey:@"fullName"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];

    return jsonResult;
}

@end