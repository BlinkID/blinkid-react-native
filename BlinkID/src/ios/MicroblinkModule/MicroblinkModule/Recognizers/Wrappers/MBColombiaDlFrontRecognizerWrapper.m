#import "MBColombiaDlFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBColombiaDlFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"ColombiaDlFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBColombiaDlFrontRecognizer *recognizer = [[MBColombiaDlFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractDateOfBirth = [jsonRecognizer valueForKey:@"extractDateOfBirth"];
        if (extractDateOfBirth != nil) {
            recognizer.extractDateOfBirth = [(NSNumber *)extractDateOfBirth boolValue];
        }
    }
    {
        id extractDriverRestrictions = [jsonRecognizer valueForKey:@"extractDriverRestrictions"];
        if (extractDriverRestrictions != nil) {
            recognizer.extractDriverRestrictions = [(NSNumber *)extractDriverRestrictions boolValue];
        }
    }
    {
        id extractIssuingAgency = [jsonRecognizer valueForKey:@"extractIssuingAgency"];
        if (extractIssuingAgency != nil) {
            recognizer.extractIssuingAgency = [(NSNumber *)extractIssuingAgency boolValue];
        }
    }
    {
        id extractName = [jsonRecognizer valueForKey:@"extractName"];
        if (extractName != nil) {
            recognizer.extractName = [(NSNumber *)extractName boolValue];
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

    return recognizer;
}

@end

@interface MBColombiaDlFrontRecognizer (JsonSerialization)
@end

@implementation MBColombiaDlFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:self.result.driverRestrictions forKey:@"driverRestrictions"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.issuingAgency forKey:@"issuingAgency"];
    [jsonResult setValue:self.result.licenceNumber forKey:@"licenceNumber"];
    [jsonResult setValue:self.result.name forKey:@"name"];

    return jsonResult;
}

@end