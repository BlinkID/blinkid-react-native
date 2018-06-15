#import "MBPolandIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBPolandIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"PolandIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBPolandIdFrontRecognizer *recognizer = [[MBPolandIdFrontRecognizer alloc] init];
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
        id extractFamilyName = [jsonRecognizer valueForKey:@"extractFamilyName"];
        if (extractFamilyName != nil) {
            recognizer.extractFamilyName = [(NSNumber *)extractFamilyName boolValue];
        }
    }
    {
        id extractGivenNames = [jsonRecognizer valueForKey:@"extractGivenNames"];
        if (extractGivenNames != nil) {
            recognizer.extractGivenNames = [(NSNumber *)extractGivenNames boolValue];
        }
    }
    {
        id extractParentsGivenNames = [jsonRecognizer valueForKey:@"extractParentsGivenNames"];
        if (extractParentsGivenNames != nil) {
            recognizer.extractParentsGivenNames = [(NSNumber *)extractParentsGivenNames boolValue];
        }
    }
    {
        id extractSex = [jsonRecognizer valueForKey:@"extractSex"];
        if (extractSex != nil) {
            recognizer.extractSex = [(NSNumber *)extractSex boolValue];
        }
    }
    {
        id extractSurname = [jsonRecognizer valueForKey:@"extractSurname"];
        if (extractSurname != nil) {
            recognizer.extractSurname = [(NSNumber *)extractSurname boolValue];
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

@interface MBPolandIdFrontRecognizer (JsonSerialization)
@end

@implementation MBPolandIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.familyName forKey:@"familyName"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.givenNames forKey:@"givenNames"];
    [jsonResult setValue:self.result.parentsGivenNames forKey:@"parentsGivenNames"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:self.result.surname forKey:@"surname"];

    return jsonResult;
}

@end