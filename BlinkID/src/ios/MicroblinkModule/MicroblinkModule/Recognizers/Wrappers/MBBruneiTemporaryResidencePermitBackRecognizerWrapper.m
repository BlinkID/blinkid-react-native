#import "MBBruneiTemporaryResidencePermitBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBBruneiTemporaryResidencePermitBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"BruneiTemporaryResidencePermitBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBBruneiTemporaryResidencePermitBackRecognizer *recognizer = [[MBBruneiTemporaryResidencePermitBackRecognizer alloc] init];
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
        id extractDateOfIssue = [jsonRecognizer valueForKey:@"extractDateOfIssue"];
        if (extractDateOfIssue != nil) {
            recognizer.extractDateOfIssue = [(NSNumber *)extractDateOfIssue boolValue];
        }
    }
    {
        id extractPassportNumber = [jsonRecognizer valueForKey:@"extractPassportNumber"];
        if (extractPassportNumber != nil) {
            recognizer.extractPassportNumber = [(NSNumber *)extractPassportNumber boolValue];
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

@interface MBBruneiTemporaryResidencePermitBackRecognizer (JsonSerialization)
@end

@implementation MBBruneiTemporaryResidencePermitBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];
    [jsonResult setValue:self.result.passportNumber forKey:@"passportNumber"];

    return jsonResult;
}

@end