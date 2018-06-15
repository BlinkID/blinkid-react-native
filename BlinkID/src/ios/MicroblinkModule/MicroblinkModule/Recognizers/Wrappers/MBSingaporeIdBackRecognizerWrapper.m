#import "MBSingaporeIdBackRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBSingaporeIdBackRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SingaporeIdBackRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBSingaporeIdBackRecognizer *recognizer = [[MBSingaporeIdBackRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractBloodGroup = [jsonRecognizer valueForKey:@"extractBloodGroup"];
        if (extractBloodGroup != nil) {
            recognizer.extractBloodGroup = [(NSNumber *)extractBloodGroup boolValue];
        }
    }
    {
        id extractDateOfIssue = [jsonRecognizer valueForKey:@"extractDateOfIssue"];
        if (extractDateOfIssue != nil) {
            recognizer.extractDateOfIssue = [(NSNumber *)extractDateOfIssue boolValue];
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

@interface MBSingaporeIdBackRecognizer (JsonSerialization)
@end

@implementation MBSingaporeIdBackRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.bloodGroup forKey:@"bloodGroup"];
    [jsonResult setValue:self.result.cardNumber forKey:@"cardNumber"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];

    return jsonResult;
}

@end