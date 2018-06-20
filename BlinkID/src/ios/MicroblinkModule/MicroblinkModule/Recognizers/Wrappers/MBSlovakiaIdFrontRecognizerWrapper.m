#import "MBSlovakiaIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBSlovakiaIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SlovakiaIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBSlovakiaIdFrontRecognizer *recognizer = [[MBSlovakiaIdFrontRecognizer alloc] init];
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
        id extractDocumentNumber = [jsonRecognizer valueForKey:@"extractDocumentNumber"];
        if (extractDocumentNumber != nil) {
            recognizer.extractDocumentNumber = [(NSNumber *)extractDocumentNumber boolValue];
        }
    }
    {
        id extractIssuedBy = [jsonRecognizer valueForKey:@"extractIssuedBy"];
        if (extractIssuedBy != nil) {
            recognizer.extractIssuedBy = [(NSNumber *)extractIssuedBy boolValue];
        }
    }
    {
        id extractNationality = [jsonRecognizer valueForKey:@"extractNationality"];
        if (extractNationality != nil) {
            recognizer.extractNationality = [(NSNumber *)extractNationality boolValue];
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
    {
        id returnSignatureImage = [jsonRecognizer valueForKey:@"returnSignatureImage"];
        if (returnSignatureImage != nil) {
            recognizer.returnSignatureImage = [(NSNumber *)returnSignatureImage boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBSlovakiaIdFrontRecognizer (JsonSerialization)
@end

@implementation MBSlovakiaIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.issuedBy forKey:@"issuedBy"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.personalNumber forKey:@"personalNumber"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];

    return jsonResult;
}

@end