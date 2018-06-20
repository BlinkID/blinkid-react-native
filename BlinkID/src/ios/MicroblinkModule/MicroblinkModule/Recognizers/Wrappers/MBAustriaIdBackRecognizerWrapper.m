#import "MBAustriaIdBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBAustriaIdBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"AustriaIdBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBAustriaIdBackRecognizer *recognizer = [[MBAustriaIdBackRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractDateOfIssuance = [jsonRecognizer valueForKey:@"extractDateOfIssuance"];
        if (extractDateOfIssuance != nil) {
            recognizer.extractDateOfIssuance = [(NSNumber *)extractDateOfIssuance boolValue];
        }
    }
    {
        id extractHeight = [jsonRecognizer valueForKey:@"extractHeight"];
        if (extractHeight != nil) {
            recognizer.extractHeight = [(NSNumber *)extractHeight boolValue];
        }
    }
    {
        id extractIssuingAuthority = [jsonRecognizer valueForKey:@"extractIssuingAuthority"];
        if (extractIssuingAuthority != nil) {
            recognizer.extractIssuingAuthority = [(NSNumber *)extractIssuingAuthority boolValue];
        }
    }
    {
        id extractPlaceOfBirth = [jsonRecognizer valueForKey:@"extractPlaceOfBirth"];
        if (extractPlaceOfBirth != nil) {
            recognizer.extractPlaceOfBirth = [(NSNumber *)extractPlaceOfBirth boolValue];
        }
    }
    {
        id extractPrincipalResidence = [jsonRecognizer valueForKey:@"extractPrincipalResidence"];
        if (extractPrincipalResidence != nil) {
            recognizer.extractPrincipalResidence = [(NSNumber *)extractPrincipalResidence boolValue];
        }
    }
    {
        id fullDocumentImageDpi = [jsonRecognizer valueForKey:@"fullDocumentImageDpi"];
        if (fullDocumentImageDpi != nil) {
            recognizer.fullDocumentImageDpi = [(NSNumber *)fullDocumentImageDpi unsignedIntegerValue];
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

@interface MBAustriaIdBackRecognizer (JsonSerialization)
@end

@implementation MBAustriaIdBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfIssuance] forKey:@"dateOfIssuance"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:self.result.eyeColour forKey:@"eyeColour"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.height forKey:@"height"];
    [jsonResult setValue:self.result.issuingAuthority forKey:@"issuingAuthority"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];
    [jsonResult setValue:self.result.placeOfBirth forKey:@"placeOfBirth"];
    [jsonResult setValue:self.result.principalResidence forKey:@"principalResidence"];

    return jsonResult;
}

@end