#import "MBMyTenteraRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBMyTenteraRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"MyTenteraRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBMyTenteraRecognizer *recognizer = [[MBMyTenteraRecognizer alloc] init];
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

@interface MBMyTenteraRecognizer (JsonSerialization)
@end

@implementation MBMyTenteraRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.armyNumber forKey:@"armyNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.nricNumber forKey:@"nricNumber"];
    [jsonResult setValue:self.result.ownerAddress forKey:@"ownerAddress"];
    [jsonResult setValue:self.result.ownerAddressCity forKey:@"ownerAddressCity"];
    [jsonResult setValue:self.result.ownerAddressState forKey:@"ownerAddressState"];
    [jsonResult setValue:self.result.ownerAddressStreet forKey:@"ownerAddressStreet"];
    [jsonResult setValue:self.result.ownerAddressZipCode forKey:@"ownerAddressZipCode"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.ownerBirthDate] forKey:@"ownerBirthDate"];
    [jsonResult setValue:self.result.ownerFullName forKey:@"ownerFullName"];
    [jsonResult setValue:self.result.ownerReligion forKey:@"ownerReligion"];
    [jsonResult setValue:self.result.ownerSex forKey:@"ownerSex"];

    return jsonResult;
}

@end