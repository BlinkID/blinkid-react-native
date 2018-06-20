#import "MBSingaporeCombinedRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBSingaporeCombinedRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SingaporeCombinedRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBSingaporeCombinedRecognizer *recognizer = [[MBSingaporeCombinedRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
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
        id signResult = [jsonRecognizer valueForKey:@"signResult"];
        if (signResult != nil) {
            recognizer.signResult = [(NSNumber *)signResult boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBSingaporeCombinedRecognizer (JsonSerialization)
@end

@implementation MBSingaporeCombinedRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.bloodGroup forKey:@"bloodGroup"];
    [jsonResult setValue:self.result.cardNumber forKey:@"cardNumber"];
    [jsonResult setValue:self.result.countryOfBirth forKey:@"countryOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:[self.result.digitalSignature base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed] forKey:@"digitalSignature"];
    [jsonResult setValue:[NSNumber numberWithUnsignedInteger:self.result.digitalSignatureVersion] forKey:@"digitalSignatureVersion"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.documentDataMatch] forKey:@"documentDataMatch"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentBackImage] forKey:@"fullDocumentBackImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentFrontImage] forKey:@"fullDocumentFrontImage"];
    [jsonResult setValue:self.result.name forKey:@"name"];
    [jsonResult setValue:self.result.race forKey:@"race"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.scanningFirstSideDone] forKey:@"scanningFirstSideDone"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];

    return jsonResult;
}

@end