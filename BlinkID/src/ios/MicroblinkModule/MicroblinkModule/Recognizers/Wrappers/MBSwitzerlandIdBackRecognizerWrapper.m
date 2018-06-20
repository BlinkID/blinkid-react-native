#import "MBSwitzerlandIdBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBSwitzerlandIdBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SwitzerlandIdBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBSwitzerlandIdBackRecognizer *recognizer = [[MBSwitzerlandIdBackRecognizer alloc] init];
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
        id extractHeight = [jsonRecognizer valueForKey:@"extractHeight"];
        if (extractHeight != nil) {
            recognizer.extractHeight = [(NSNumber *)extractHeight boolValue];
        }
    }
    {
        id extractPlaceOfOrigin = [jsonRecognizer valueForKey:@"extractPlaceOfOrigin"];
        if (extractPlaceOfOrigin != nil) {
            recognizer.extractPlaceOfOrigin = [(NSNumber *)extractPlaceOfOrigin boolValue];
        }
    }
    {
        id extractSex = [jsonRecognizer valueForKey:@"extractSex"];
        if (extractSex != nil) {
            recognizer.extractSex = [(NSNumber *)extractSex boolValue];
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

@interface MBSwitzerlandIdBackRecognizer (JsonSerialization)
@end

@implementation MBSwitzerlandIdBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.authority forKey:@"authority"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:self.result.documentCode forKey:@"documentCode"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.height forKey:@"height"];
    [jsonResult setValue:self.result.issuer forKey:@"issuer"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzParsed] forKey:@"mrzParsed"];
    [jsonResult setValue:self.result.mrzText forKey:@"mrzText"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzVerified] forKey:@"mrzVerified"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.nonMrzDateOfExpiry] forKey:@"nonMrzDateOfExpiry"];
    [jsonResult setValue:self.result.nonMrzSex forKey:@"nonMrzSex"];
    [jsonResult setValue:self.result.opt1 forKey:@"opt1"];
    [jsonResult setValue:self.result.opt2 forKey:@"opt2"];
    [jsonResult setValue:self.result.placeOfOrigin forKey:@"placeOfOrigin"];
    [jsonResult setValue:self.result.primaryId forKey:@"primaryId"];
    [jsonResult setValue:self.result.secondaryId forKey:@"secondaryId"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];

    return jsonResult;
}

@end