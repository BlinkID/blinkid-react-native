#import "MBCroatiaIdBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBCroatiaIdBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"CroatiaIdBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBCroatiaIdBackRecognizer *recognizer = [[MBCroatiaIdBackRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
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
        id returnFullDocumentImage = [jsonRecognizer valueForKey:@"returnFullDocumentImage"];
        if (returnFullDocumentImage != nil) {
            recognizer.returnFullDocumentImage = [(NSNumber *)returnFullDocumentImage boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBCroatiaIdBackRecognizer (JsonSerialization)
@end

@implementation MBCroatiaIdBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.dateOfExpiryPermanent] forKey:@"dateOfExpiryPermanent"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:self.result.documentCode forKey:@"documentCode"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.issuer forKey:@"issuer"];
    [jsonResult setValue:self.result.issuingAuthority forKey:@"issuingAuthority"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzParsed] forKey:@"mrzParsed"];
    [jsonResult setValue:self.result.mrzText forKey:@"mrzText"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzVerified] forKey:@"mrzVerified"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.opt1 forKey:@"opt1"];
    [jsonResult setValue:self.result.opt2 forKey:@"opt2"];
    [jsonResult setValue:self.result.primaryId forKey:@"primaryId"];
    [jsonResult setValue:self.result.secondaryId forKey:@"secondaryId"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];

    return jsonResult;
}

@end