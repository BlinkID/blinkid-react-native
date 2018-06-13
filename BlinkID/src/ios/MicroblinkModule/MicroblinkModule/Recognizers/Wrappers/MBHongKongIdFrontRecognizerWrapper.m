#import "MBHongKongIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBHongKongIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"HongKongIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBHongKongIdFrontRecognizer *recognizer = [[MBHongKongIdFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractCommercialCode = [jsonRecognizer valueForKey:@"extractCommercialCode"];
        if (extractCommercialCode != nil) {
            recognizer.extractCommercialCode = [(NSNumber *)extractCommercialCode boolValue];
        }
    }
    {
        id extractDateOfBirth = [jsonRecognizer valueForKey:@"extractDateOfBirth"];
        if (extractDateOfBirth != nil) {
            recognizer.extractDateOfBirth = [(NSNumber *)extractDateOfBirth boolValue];
        }
    }
    {
        id extractFullName = [jsonRecognizer valueForKey:@"extractFullName"];
        if (extractFullName != nil) {
            recognizer.extractFullName = [(NSNumber *)extractFullName boolValue];
        }
    }
    {
        id extractIssueDate = [jsonRecognizer valueForKey:@"extractIssueDate"];
        if (extractIssueDate != nil) {
            recognizer.extractIssueDate = [(NSNumber *)extractIssueDate boolValue];
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

@interface MBHongKongIdFrontRecognizer (JsonSerialization)
@end

@implementation MBHongKongIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.commercialCode forKey:@"commercialCode"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.fullName forKey:@"fullName"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.issueDate] forKey:@"issueDate"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];

    return jsonResult;
}

@end