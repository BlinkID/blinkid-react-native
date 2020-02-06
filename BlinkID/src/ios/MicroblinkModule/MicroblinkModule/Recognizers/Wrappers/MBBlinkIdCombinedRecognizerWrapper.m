#import "MBBlinkIdCombinedRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBBlinkIdCombinedRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"BlinkIdCombinedRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBBlinkIdCombinedRecognizer *recognizer = [[MBBlinkIdCombinedRecognizer alloc] init];
    {
        id allowBlurFilter = [jsonRecognizer valueForKey:@"allowBlurFilter"];
        if (allowBlurFilter != nil) {
            recognizer.allowBlurFilter = [(NSNumber *)allowBlurFilter boolValue];
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
    {
        id signResult = [jsonRecognizer valueForKey:@"signResult"];
        if (signResult != nil) {
            recognizer.signResult = [(NSNumber *)signResult boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBBlinkIdCombinedRecognizer (JsonSerialization)
@end

@implementation MBBlinkIdCombinedRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.additionalAddressInformation forKey:@"additionalAddressInformation"];
    [jsonResult setValue:self.result.additionalNameInformation forKey:@"additionalNameInformation"];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.conditions forKey:@"conditions"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:[self.result.digitalSignature base64EncodedStringWithOptions:0] forKey:@"digitalSignature"];
    [jsonResult setValue:[NSNumber numberWithUnsignedInteger:self.result.digitalSignatureVersion] forKey:@"digitalSignatureVersion"];
    [jsonResult setValue:self.result.documentAdditionalNumber forKey:@"documentAdditionalNumber"];
    [jsonResult setValue:[NSNumber numberWithInteger:(self.result.documentDataMatch + 1)] forKey:@"documentDataMatch"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeDriverLicenseDetailedInfo:self.result.driverLicenseDetailedInfo] forKey:@"driverLicenseDetailedInfo"];
    [jsonResult setValue:self.result.employer forKey:@"employer"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.firstName forKey:@"firstName"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentBackImage] forKey:@"fullDocumentBackImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentFrontImage] forKey:@"fullDocumentFrontImage"];
    [jsonResult setValue:self.result.fullName forKey:@"fullName"];
    [jsonResult setValue:self.result.issuingAuthority forKey:@"issuingAuthority"];
    [jsonResult setValue:self.result.lastName forKey:@"lastName"];
    [jsonResult setValue:self.result.localizedName forKey:@"localizedName"];
    [jsonResult setValue:self.result.maritalStatus forKey:@"maritalStatus"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.personalIdNumber forKey:@"personalIdNumber"];
    [jsonResult setValue:self.result.placeOfBirth forKey:@"placeOfBirth"];
    [jsonResult setValue:self.result.profession forKey:@"profession"];
    [jsonResult setValue:self.result.race forKey:@"race"];
    [jsonResult setValue:self.result.religion forKey:@"religion"];
    [jsonResult setValue:self.result.residentialStatus forKey:@"residentialStatus"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.scanningFirstSideDone] forKey:@"scanningFirstSideDone"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];

    return jsonResult;
}

@end