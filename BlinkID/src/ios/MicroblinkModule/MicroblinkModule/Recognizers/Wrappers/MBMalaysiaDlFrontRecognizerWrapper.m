#import "MBMalaysiaDlFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBMalaysiaDlFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"MalaysiaDlFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBMalaysiaDlFrontRecognizer *recognizer = [[MBMalaysiaDlFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractDlClass = [jsonRecognizer valueForKey:@"extractDlClass"];
        if (extractDlClass != nil) {
            recognizer.extractDlClass = [(NSNumber *)extractDlClass boolValue];
        }
    }
    {
        id extractFullAddress = [jsonRecognizer valueForKey:@"extractFullAddress"];
        if (extractFullAddress != nil) {
            recognizer.extractFullAddress = [(NSNumber *)extractFullAddress boolValue];
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

@interface MBMalaysiaDlFrontRecognizer (JsonSerialization)
@end

@implementation MBMalaysiaDlFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.city forKey:@"city"];
    [jsonResult setValue:self.result.dlClass forKey:@"dlClass"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.fullAddress forKey:@"fullAddress"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.identityNumber forKey:@"identityNumber"];
    [jsonResult setValue:self.result.name forKey:@"name"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.state forKey:@"state"];
    [jsonResult setValue:self.result.street forKey:@"street"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.validFrom] forKey:@"validFrom"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.validUntil] forKey:@"validUntil"];
    [jsonResult setValue:self.result.zipCode forKey:@"zipCode"];

    return jsonResult;
}

@end