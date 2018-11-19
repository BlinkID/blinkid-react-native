#import "MBMalaysiaMyTenteraFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBMalaysiaMyTenteraFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"MalaysiaMyTenteraFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBMalaysiaMyTenteraFrontRecognizer *recognizer = [[MBMalaysiaMyTenteraFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractFullNameAndAddress = [jsonRecognizer valueForKey:@"extractFullNameAndAddress"];
        if (extractFullNameAndAddress != nil) {
            recognizer.extractFullNameAndAddress = [(NSNumber *)extractFullNameAndAddress boolValue];
        }
    }
    {
        id extractReligion = [jsonRecognizer valueForKey:@"extractReligion"];
        if (extractReligion != nil) {
            recognizer.extractReligion = [(NSNumber *)extractReligion boolValue];
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

@interface MBMalaysiaMyTenteraFrontRecognizer (JsonSerialization)
@end

@implementation MBMalaysiaMyTenteraFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.armyNumber forKey:@"armyNumber"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.birthDate] forKey:@"birthDate"];
    [jsonResult setValue:self.result.city forKey:@"city"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.fullAddress forKey:@"fullAddress"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.fullName forKey:@"fullName"];
    [jsonResult setValue:self.result.nric forKey:@"nric"];
    [jsonResult setValue:self.result.ownerState forKey:@"ownerState"];
    [jsonResult setValue:self.result.religion forKey:@"religion"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:self.result.street forKey:@"street"];
    [jsonResult setValue:self.result.zipcode forKey:@"zipcode"];

    return jsonResult;
}

@end