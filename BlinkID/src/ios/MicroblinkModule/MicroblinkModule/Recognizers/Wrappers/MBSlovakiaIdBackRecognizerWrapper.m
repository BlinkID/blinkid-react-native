#import "MBSlovakiaIdBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBSlovakiaIdBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SlovakiaIdBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBSlovakiaIdBackRecognizer *recognizer = [[MBSlovakiaIdBackRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractPlaceOfBirth = [jsonRecognizer valueForKey:@"extractPlaceOfBirth"];
        if (extractPlaceOfBirth != nil) {
            recognizer.extractPlaceOfBirth = [(NSNumber *)extractPlaceOfBirth boolValue];
        }
    }
    {
        id extractSpecialRemarks = [jsonRecognizer valueForKey:@"extractSpecialRemarks"];
        if (extractSpecialRemarks != nil) {
            recognizer.extractSpecialRemarks = [(NSNumber *)extractSpecialRemarks boolValue];
        }
    }
    {
        id extractSurnameAtBirth = [jsonRecognizer valueForKey:@"extractSurnameAtBirth"];
        if (extractSurnameAtBirth != nil) {
            recognizer.extractSurnameAtBirth = [(NSNumber *)extractSurnameAtBirth boolValue];
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

@interface MBSlovakiaIdBackRecognizer (JsonSerialization)
@end

@implementation MBSlovakiaIdBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:self.result.documentCode forKey:@"documentCode"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.issuer forKey:@"issuer"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzParsed] forKey:@"mrzParsed"];
    [jsonResult setValue:self.result.mrzText forKey:@"mrzText"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.mrzVerified] forKey:@"mrzVerified"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.opt1 forKey:@"opt1"];
    [jsonResult setValue:self.result.opt2 forKey:@"opt2"];
    [jsonResult setValue:self.result.placeOfBirth forKey:@"placeOfBirth"];
    [jsonResult setValue:self.result.primaryId forKey:@"primaryId"];
    [jsonResult setValue:self.result.secondaryId forKey:@"secondaryId"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:self.result.specialRemarks forKey:@"specialRemarks"];
    [jsonResult setValue:self.result.surnameAtBirth forKey:@"surnameAtBirth"];

    return jsonResult;
}

@end