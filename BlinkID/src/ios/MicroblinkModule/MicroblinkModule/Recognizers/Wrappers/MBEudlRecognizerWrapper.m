#import "MBEudlRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBEudlRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"EudlRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBEudlRecognizer *recognizer = [[MBEudlRecognizer alloc] init];
    {
        id country = [jsonRecognizer valueForKey:@"country"];
        if (country != nil) {
            recognizer.country = (MBEudlCountry)([(NSNumber *)country unsignedIntegerValue] - 1);
        }
    }
    {
        id extractAddress = [jsonRecognizer valueForKey:@"extractAddress"];
        if (extractAddress != nil) {
            recognizer.extractAddress = [(NSNumber *)extractAddress boolValue];
        }
    }
    {
        id extractDateOfExpiry = [jsonRecognizer valueForKey:@"extractDateOfExpiry"];
        if (extractDateOfExpiry != nil) {
            recognizer.extractDateOfExpiry = [(NSNumber *)extractDateOfExpiry boolValue];
        }
    }
    {
        id extractDateOfIssue = [jsonRecognizer valueForKey:@"extractDateOfIssue"];
        if (extractDateOfIssue != nil) {
            recognizer.extractDateOfIssue = [(NSNumber *)extractDateOfIssue boolValue];
        }
    }
    {
        id extractIssuingAuthority = [jsonRecognizer valueForKey:@"extractIssuingAuthority"];
        if (extractIssuingAuthority != nil) {
            recognizer.extractIssuingAuthority = [(NSNumber *)extractIssuingAuthority boolValue];
        }
    }
    {
        id extractPersonalNumber = [jsonRecognizer valueForKey:@"extractPersonalNumber"];
        if (extractPersonalNumber != nil) {
            recognizer.extractPersonalNumber = [(NSNumber *)extractPersonalNumber boolValue];
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

@interface MBEudlRecognizer (JsonSerialization)
@end

@implementation MBEudlRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.birthData forKey:@"birthData"];
    [jsonResult setValue:[NSNumber numberWithInteger:(self.result.country + 1)] forKey:@"country"];
    [jsonResult setValue:self.result.driverNumber forKey:@"driverNumber"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.expiryDate] forKey:@"expiryDate"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.issueDate] forKey:@"issueDate"];
    [jsonResult setValue:self.result.issuingAuthority forKey:@"issuingAuthority"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:self.result.personalNumber forKey:@"personalNumber"];

    return jsonResult;
}

@end