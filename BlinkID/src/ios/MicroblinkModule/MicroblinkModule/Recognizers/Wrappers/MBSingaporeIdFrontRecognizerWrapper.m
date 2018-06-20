#import "MBSingaporeIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBSingaporeIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SingaporeIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBSingaporeIdFrontRecognizer *recognizer = [[MBSingaporeIdFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractCountryOfBirth = [jsonRecognizer valueForKey:@"extractCountryOfBirth"];
        if (extractCountryOfBirth != nil) {
            recognizer.extractCountryOfBirth = [(NSNumber *)extractCountryOfBirth boolValue];
        }
    }
    {
        id extractDateOfBirth = [jsonRecognizer valueForKey:@"extractDateOfBirth"];
        if (extractDateOfBirth != nil) {
            recognizer.extractDateOfBirth = [(NSNumber *)extractDateOfBirth boolValue];
        }
    }
    {
        id extractRace = [jsonRecognizer valueForKey:@"extractRace"];
        if (extractRace != nil) {
            recognizer.extractRace = [(NSNumber *)extractRace boolValue];
        }
    }
    {
        id extractSex = [jsonRecognizer valueForKey:@"extractSex"];
        if (extractSex != nil) {
            recognizer.extractSex = [(NSNumber *)extractSex boolValue];
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

@interface MBSingaporeIdFrontRecognizer (JsonSerialization)
@end

@implementation MBSingaporeIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.cardNumber forKey:@"cardNumber"];
    [jsonResult setValue:self.result.countryOfBirth forKey:@"countryOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.name forKey:@"name"];
    [jsonResult setValue:self.result.race forKey:@"race"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];

    return jsonResult;
}

@end