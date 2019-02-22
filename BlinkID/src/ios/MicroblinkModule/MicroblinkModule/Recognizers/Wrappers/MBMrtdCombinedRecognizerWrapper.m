#import "MBMrtdCombinedRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBMrtdCombinedRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"MrtdCombinedRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBMrtdCombinedRecognizer *recognizer = [[MBMrtdCombinedRecognizer alloc] init];
    {
        id allowSpecialCharacters = [jsonRecognizer valueForKey:@"allowSpecialCharacters"];
        if (allowSpecialCharacters != nil) {
            recognizer.allowSpecialCharacters = [(NSNumber *)allowSpecialCharacters boolValue];
        }
    }
    {
        id allowUnparsedResults = [jsonRecognizer valueForKey:@"allowUnparsedResults"];
        if (allowUnparsedResults != nil) {
            recognizer.allowUnparsedResults = [(NSNumber *)allowUnparsedResults boolValue];
        }
    }
    {
        id allowUnverifiedResults = [jsonRecognizer valueForKey:@"allowUnverifiedResults"];
        if (allowUnverifiedResults != nil) {
            recognizer.allowUnverifiedResults = [(NSNumber *)allowUnverifiedResults boolValue];
        }
    }
    {
        id detectorType = [jsonRecognizer valueForKey:@"detectorType"];
        if (detectorType != nil) {
            recognizer.detectorType = (MBDocumentFaceDetectorType)([(NSNumber *)detectorType unsignedIntegerValue] - 1);
        }
    }
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
        id fullDocumentImageExtensionFactors = [jsonRecognizer valueForKey:@"fullDocumentImageExtensionFactors"];
        if (fullDocumentImageExtensionFactors != nil) {
            recognizer.fullDocumentImageExtensionFactors = [MBBlinkIDSerializationUtils deserializeMBImageExtensionFactors:(NSDictionary*)fullDocumentImageExtensionFactors];
        }
    }
    {
        id numStableDetectionsThreshold = [jsonRecognizer valueForKey:@"numStableDetectionsThreshold"];
        if (numStableDetectionsThreshold != nil) {
            recognizer.numStableDetectionsThreshold = [(NSNumber *)numStableDetectionsThreshold unsignedIntegerValue];
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

@interface MBMrtdCombinedRecognizer (JsonSerialization)
@end

@implementation MBMrtdCombinedRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[self.result.digitalSignature base64EncodedStringWithOptions:0] forKey:@"digitalSignature"];
    [jsonResult setValue:[NSNumber numberWithUnsignedInteger:self.result.digitalSignatureVersion] forKey:@"digitalSignatureVersion"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.documentDataMatch] forKey:@"documentDataMatch"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentBackImage] forKey:@"fullDocumentBackImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentFrontImage] forKey:@"fullDocumentFrontImage"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.scanningFirstSideDone] forKey:@"scanningFirstSideDone"];

    return jsonResult;
}

@end