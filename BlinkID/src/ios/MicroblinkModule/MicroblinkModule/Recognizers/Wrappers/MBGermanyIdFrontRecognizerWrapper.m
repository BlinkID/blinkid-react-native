#import "MBGermanyIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBGermanyIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"GermanyIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBGermanyIdFrontRecognizer *recognizer = [[MBGermanyIdFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractDateOfExpiry = [jsonRecognizer valueForKey:@"extractDateOfExpiry"];
        if (extractDateOfExpiry != nil) {
            recognizer.extractDateOfExpiry = [(NSNumber *)extractDateOfExpiry boolValue];
        }
    }
    {
        id extractFirstName = [jsonRecognizer valueForKey:@"extractFirstName"];
        if (extractFirstName != nil) {
            recognizer.extractFirstName = [(NSNumber *)extractFirstName boolValue];
        }
    }
    {
        id extractLastName = [jsonRecognizer valueForKey:@"extractLastName"];
        if (extractLastName != nil) {
            recognizer.extractLastName = [(NSNumber *)extractLastName boolValue];
        }
    }
    {
        id extractNationality = [jsonRecognizer valueForKey:@"extractNationality"];
        if (extractNationality != nil) {
            recognizer.extractNationality = [(NSNumber *)extractNationality boolValue];
        }
    }
    {
        id extractPlaceOfBirth = [jsonRecognizer valueForKey:@"extractPlaceOfBirth"];
        if (extractPlaceOfBirth != nil) {
            recognizer.extractPlaceOfBirth = [(NSNumber *)extractPlaceOfBirth boolValue];
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

    return recognizer;
}

@end

@interface MBGermanyIdFrontRecognizer (JsonSerialization)
@end

@implementation MBGermanyIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.placeOfBirth forKey:@"placeOfBirth"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];

    return jsonResult;
}

@end