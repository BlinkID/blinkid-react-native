#import "MBPaymentCardFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBPaymentCardFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"PaymentCardFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBPaymentCardFrontRecognizer *recognizer = [[MBPaymentCardFrontRecognizer alloc] init];
    {
        id anonymizeCardNumber = [jsonRecognizer valueForKey:@"anonymizeCardNumber"];
        if (anonymizeCardNumber != nil) {
            recognizer.anonymizeCardNumber = [(NSNumber *)anonymizeCardNumber boolValue];
        }
    }
    {
        id anonymizeOwner = [jsonRecognizer valueForKey:@"anonymizeOwner"];
        if (anonymizeOwner != nil) {
            recognizer.anonymizeOwner = [(NSNumber *)anonymizeOwner boolValue];
        }
    }
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractOwner = [jsonRecognizer valueForKey:@"extractOwner"];
        if (extractOwner != nil) {
            recognizer.extractOwner = [(NSNumber *)extractOwner boolValue];
        }
    }
    {
        id extractValidThru = [jsonRecognizer valueForKey:@"extractValidThru"];
        if (extractValidThru != nil) {
            recognizer.extractValidThru = [(NSNumber *)extractValidThru boolValue];
        }
    }
    {
        id fullDocumentImageDpi = [jsonRecognizer valueForKey:@"fullDocumentImageDpi"];
        if (fullDocumentImageDpi != nil) {
            recognizer.fullDocumentImageDpi = [(NSNumber *)fullDocumentImageDpi unsignedIntegerValue];
        }
    }
    {
        id fullDocumentImageExtensionFactors = [jsonRecognizer valueForKey:@"fullDocumentImageExtensionFactors"];
        if (fullDocumentImageExtensionFactors != nil) {
            recognizer.fullDocumentImageExtensionFactors = [MBBlinkIDSerializationUtils deserializeMBImageExtensionFactors:(NSDictionary*)fullDocumentImageExtensionFactors];
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

@interface MBPaymentCardFrontRecognizer (JsonSerialization)
@end

@implementation MBPaymentCardFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.cardNumber forKey:@"cardNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.owner forKey:@"owner"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.validThru] forKey:@"validThru"];

    return jsonResult;
}

@end