#import "MBNewZealandDlFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBNewZealandDlFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"NewZealandDlFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBNewZealandDlFrontRecognizer *recognizer = [[MBNewZealandDlFrontRecognizer alloc] init];
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
        id extractDateOfBirth = [jsonRecognizer valueForKey:@"extractDateOfBirth"];
        if (extractDateOfBirth != nil) {
            recognizer.extractDateOfBirth = [(NSNumber *)extractDateOfBirth boolValue];
        }
    }
    {
        id extractDonorIndicator = [jsonRecognizer valueForKey:@"extractDonorIndicator"];
        if (extractDonorIndicator != nil) {
            recognizer.extractDonorIndicator = [(NSNumber *)extractDonorIndicator boolValue];
        }
    }
    {
        id extractExpiryDate = [jsonRecognizer valueForKey:@"extractExpiryDate"];
        if (extractExpiryDate != nil) {
            recognizer.extractExpiryDate = [(NSNumber *)extractExpiryDate boolValue];
        }
    }
    {
        id extractFirstName = [jsonRecognizer valueForKey:@"extractFirstName"];
        if (extractFirstName != nil) {
            recognizer.extractFirstName = [(NSNumber *)extractFirstName boolValue];
        }
    }
    {
        id extractIssueDate = [jsonRecognizer valueForKey:@"extractIssueDate"];
        if (extractIssueDate != nil) {
            recognizer.extractIssueDate = [(NSNumber *)extractIssueDate boolValue];
        }
    }
    {
        id extractLastName = [jsonRecognizer valueForKey:@"extractLastName"];
        if (extractLastName != nil) {
            recognizer.extractLastName = [(NSNumber *)extractLastName boolValue];
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

@interface MBNewZealandDlFrontRecognizer (JsonSerialization)
@end

@implementation MBNewZealandDlFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.cardVersion forKey:@"cardVersion"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.donorIndicator] forKey:@"donorIndicator"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.expiryDate] forKey:@"expiryDate"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.issueDate] forKey:@"issueDate"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:self.result.licenseNumber forKey:@"licenseNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];

    return jsonResult;
}

@end