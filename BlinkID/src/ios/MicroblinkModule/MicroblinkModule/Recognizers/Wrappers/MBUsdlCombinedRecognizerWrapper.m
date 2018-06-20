#import "MBUsdlCombinedRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBUsdlCombinedRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"UsdlCombinedRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBUsdlCombinedRecognizer *recognizer = [[MBUsdlCombinedRecognizer alloc] init];
    {
        id faceImageDpi = [jsonRecognizer valueForKey:@"faceImageDpi"];
        if (faceImageDpi != nil) {
            recognizer.faceImageDpi = [(NSNumber *)faceImageDpi unsignedIntegerValue];
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
    {
        id signResult = [jsonRecognizer valueForKey:@"signResult"];
        if (signResult != nil) {
            recognizer.signResult = [(NSNumber *)signResult boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBUsdlCombinedRecognizer (JsonSerialization)
@end

@implementation MBUsdlCombinedRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[self.result.digitalSignature base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed] forKey:@"digitalSignature"];
    [jsonResult setValue:[NSNumber numberWithUnsignedInteger:self.result.digitalSignatureVersion] forKey:@"digitalSignatureVersion"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.documentDataMatch] forKey:@"documentDataMatch"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.scanningFirstSideDone] forKey:@"scanningFirstSideDone"];

    [jsonResult setValue:[self.result optionalElements] forKey:@"optionalElements"];
    [jsonResult setValue:[[self.result data] base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed] forKey:@"rawData"];
    [jsonResult setValue:[[NSString alloc] initWithData:[self.result data] encoding:NSUTF8StringEncoding] forKey:@"rawStringData"];
    [jsonResult setValue:[NSNumber numberWithBool:[self.result isUncertain]] forKey:@"uncertain"];
    [jsonResult setValue:[self serializeFields] forKey:@"fields"];

    return jsonResult;
}

-(NSArray<NSString *> *) serializeFields {
    NSMutableArray<NSString *> *fieldsArr = [[NSMutableArray alloc] init];
    for (NSUInteger i = 0; i <= SecurityVersion; ++i) {
        [fieldsArr addObject:[self.result getField:(MBUsdlKeys)i]];
    }
    return fieldsArr;
}

@end