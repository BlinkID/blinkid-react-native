#import "MBAustraliaDlBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBAustraliaDlBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"AustraliaDlBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBAustraliaDlBackRecognizer *recognizer = [[MBAustraliaDlBackRecognizer alloc] init];
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
        id extractLastName = [jsonRecognizer valueForKey:@"extractLastName"];
        if (extractLastName != nil) {
            recognizer.extractLastName = [(NSNumber *)extractLastName boolValue];
        }
    }
    {
        id extractLicenceNumber = [jsonRecognizer valueForKey:@"extractLicenceNumber"];
        if (extractLicenceNumber != nil) {
            recognizer.extractLicenceNumber = [(NSNumber *)extractLicenceNumber boolValue];
        }
    }
    {
        id extractLicenseExpiry = [jsonRecognizer valueForKey:@"extractLicenseExpiry"];
        if (extractLicenseExpiry != nil) {
            recognizer.extractLicenseExpiry = [(NSNumber *)extractLicenseExpiry boolValue];
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

@interface MBAustraliaDlBackRecognizer (JsonSerialization)
@end

@implementation MBAustraliaDlBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.licenceExpiry] forKey:@"licenceExpiry"];
    [jsonResult setValue:self.result.licenceNumber forKey:@"licenceNumber"];

    return jsonResult;
}

@end