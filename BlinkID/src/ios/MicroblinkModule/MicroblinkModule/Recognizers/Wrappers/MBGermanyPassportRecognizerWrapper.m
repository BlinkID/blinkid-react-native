#import "MBGermanyPassportRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBGermanyPassportRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"GermanyPassportRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBGermanyPassportRecognizer *recognizer = [[MBGermanyPassportRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractAuthority = [jsonRecognizer valueForKey:@"extractAuthority"];
        if (extractAuthority != nil) {
            recognizer.extractAuthority = [(NSNumber *)extractAuthority boolValue];
        }
    }
    {
        id extractDateOfIssue = [jsonRecognizer valueForKey:@"extractDateOfIssue"];
        if (extractDateOfIssue != nil) {
            recognizer.extractDateOfIssue = [(NSNumber *)extractDateOfIssue boolValue];
        }
    }
    {
        id extractName = [jsonRecognizer valueForKey:@"extractName"];
        if (extractName != nil) {
            recognizer.extractName = [(NSNumber *)extractName boolValue];
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
        id extractSurname = [jsonRecognizer valueForKey:@"extractSurname"];
        if (extractSurname != nil) {
            recognizer.extractSurname = [(NSNumber *)extractSurname boolValue];
        }
    }
    {
        id fullDocumentImageExtensionFactors = [jsonRecognizer valueForKey:@"fullDocumentImageExtensionFactors"];
        if (fullDocumentImageExtensionFactors != nil) {
            recognizer.fullDocumentImageExtensionFactors = [MBBlinkIDSerializationUtils deserializeMBImageExtensionFactors:(NSDictionary*)fullDocumentImageExtensionFactors];
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

@interface MBGermanyPassportRecognizer (JsonSerialization)
@end

@implementation MBGermanyPassportRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.authority forKey:@"authority"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:self.result.documentCode forKey:@"documentCode"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.issuer forKey:@"issuer"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzParsed] forKey:@"mrzParsed"];
    [jsonResult setValue:self.result.mrzText forKey:@"mrzText"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzVerified] forKey:@"mrzVerified"];
    [jsonResult setValue:self.result.name forKey:@"name"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.opt1 forKey:@"opt1"];
    [jsonResult setValue:self.result.opt2 forKey:@"opt2"];
    [jsonResult setValue:self.result.placeOfBirth forKey:@"placeOfBirth"];
    [jsonResult setValue:self.result.primaryId forKey:@"primaryId"];
    [jsonResult setValue:self.result.secondaryId forKey:@"secondaryId"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];
    [jsonResult setValue:self.result.surname forKey:@"surname"];

    return jsonResult;
}

@end