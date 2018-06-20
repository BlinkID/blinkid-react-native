#import "MBRomaniaIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBRomaniaIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"RomaniaIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBRomaniaIdFrontRecognizer *recognizer = [[MBRomaniaIdFrontRecognizer alloc] init];
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
        id extractFirstName = [jsonRecognizer valueForKey:@"extractFirstName"];
        if (extractFirstName != nil) {
            recognizer.extractFirstName = [(NSNumber *)extractFirstName boolValue];
        }
    }
    {
        id extractIssuedBy = [jsonRecognizer valueForKey:@"extractIssuedBy"];
        if (extractIssuedBy != nil) {
            recognizer.extractIssuedBy = [(NSNumber *)extractIssuedBy boolValue];
        }
    }
    {
        id extractLastName = [jsonRecognizer valueForKey:@"extractLastName"];
        if (extractLastName != nil) {
            recognizer.extractLastName = [(NSNumber *)extractLastName boolValue];
        }
    }
    {
        id extractNonMRZSex = [jsonRecognizer valueForKey:@"extractNonMRZSex"];
        if (extractNonMRZSex != nil) {
            recognizer.extractNonMRZSex = [(NSNumber *)extractNonMRZSex boolValue];
        }
    }
    {
        id extractPlaceOfBirth = [jsonRecognizer valueForKey:@"extractPlaceOfBirth"];
        if (extractPlaceOfBirth != nil) {
            recognizer.extractPlaceOfBirth = [(NSNumber *)extractPlaceOfBirth boolValue];
        }
    }
    {
        id extractValidFrom = [jsonRecognizer valueForKey:@"extractValidFrom"];
        if (extractValidFrom != nil) {
            recognizer.extractValidFrom = [(NSNumber *)extractValidFrom boolValue];
        }
    }
    {
        id extractValidUntil = [jsonRecognizer valueForKey:@"extractValidUntil"];
        if (extractValidUntil != nil) {
            recognizer.extractValidUntil = [(NSNumber *)extractValidUntil boolValue];
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

@interface MBRomaniaIdFrontRecognizer (JsonSerialization)
@end

@implementation MBRomaniaIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.cardNumber forKey:@"cardNumber"];
    [jsonResult setValue:self.result.cnp forKey:@"cnp"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:self.result.documentCode forKey:@"documentCode"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.idSeries forKey:@"idSeries"];
    [jsonResult setValue:self.result.issuedBy forKey:@"issuedBy"];
    [jsonResult setValue:self.result.issuer forKey:@"issuer"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzParsed] forKey:@"mrzParsed"];
    [jsonResult setValue:self.result.mrzText forKey:@"mrzText"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzVerified] forKey:@"mrzVerified"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.nonMRZNationality forKey:@"nonMRZNationality"];
    [jsonResult setValue:self.result.nonMRZSex forKey:@"nonMRZSex"];
    [jsonResult setValue:self.result.opt1 forKey:@"opt1"];
    [jsonResult setValue:self.result.opt2 forKey:@"opt2"];
    [jsonResult setValue:self.result.parentNames forKey:@"parentNames"];
    [jsonResult setValue:self.result.placeOfBirth forKey:@"placeOfBirth"];
    [jsonResult setValue:self.result.primaryId forKey:@"primaryId"];
    [jsonResult setValue:self.result.secondaryId forKey:@"secondaryId"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.validFrom] forKey:@"validFrom"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.validUntil] forKey:@"validUntil"];

    return jsonResult;
}

@end