#import "MBSingaporeDlFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBSingaporeDlFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SingaporeDlFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBSingaporeDlFrontRecognizer *recognizer = [[MBSingaporeDlFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractBirthDate = [jsonRecognizer valueForKey:@"extractBirthDate"];
        if (extractBirthDate != nil) {
            recognizer.extractBirthDate = [(NSNumber *)extractBirthDate boolValue];
        }
    }
    {
        id extractIssueDate = [jsonRecognizer valueForKey:@"extractIssueDate"];
        if (extractIssueDate != nil) {
            recognizer.extractIssueDate = [(NSNumber *)extractIssueDate boolValue];
        }
    }
    {
        id extractName = [jsonRecognizer valueForKey:@"extractName"];
        if (extractName != nil) {
            recognizer.extractName = [(NSNumber *)extractName boolValue];
        }
    }
    {
        id extractValidTill = [jsonRecognizer valueForKey:@"extractValidTill"];
        if (extractValidTill != nil) {
            recognizer.extractValidTill = [(NSNumber *)extractValidTill boolValue];
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

@interface MBSingaporeDlFrontRecognizer (JsonSerialization)
@end

@implementation MBSingaporeDlFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.birthDate] forKey:@"birthDate"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.issueDate] forKey:@"issueDate"];
    [jsonResult setValue:self.result.licenceNumber forKey:@"licenceNumber"];
    [jsonResult setValue:self.result.name forKey:@"name"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.validTill] forKey:@"validTill"];

    return jsonResult;
}

@end