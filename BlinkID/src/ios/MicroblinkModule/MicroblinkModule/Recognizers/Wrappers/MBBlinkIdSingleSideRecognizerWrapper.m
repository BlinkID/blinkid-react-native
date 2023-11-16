#import "MBBlinkIdSingleSideRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"
#import "MBCommonSerializationUtils.h"

@implementation MBBlinkIdSingleSideRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"BlinkIdSingleSideRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBBlinkIdSingleSideRecognizer *recognizer = [[MBBlinkIdSingleSideRecognizer alloc] init];
    {
        id additionalAnonymization = [jsonRecognizer valueForKey:@"additionalAnonymization"];
        if (additionalAnonymization != nil) {
            NSArray<NSDictionary *> *anonClasses = additionalAnonymization;
            for (NSDictionary *class in anonClasses) {
                MBClassAnonymizationSettings *settings = [MBBlinkIDSerializationUtils deserializeMBClassAnonymizationSettings:(NSDictionary*)class];
                [recognizer recognizerAddClassToAdditionalAnonymization:settings];
            }
        }
    }
    {
        id allowBlurFilter = [jsonRecognizer valueForKey:@"allowBlurFilter"];
        if (allowBlurFilter != nil) {
            recognizer.allowBlurFilter = [(NSNumber *)allowBlurFilter boolValue];
        }
    }
    {
        id allowUnparsedMrzResults = [jsonRecognizer valueForKey:@"allowUnparsedMrzResults"];
        if (allowUnparsedMrzResults != nil) {
            recognizer.allowUnparsedMrzResults = [(NSNumber *)allowUnparsedMrzResults boolValue];
        }
    }
    {
        id allowUnverifiedMrzResults = [jsonRecognizer valueForKey:@"allowUnverifiedMrzResults"];
        if (allowUnverifiedMrzResults != nil) {
            recognizer.allowUnverifiedMrzResults = [(NSNumber *)allowUnverifiedMrzResults boolValue];
        }
    }
    {
        id anonymizationMode = [jsonRecognizer valueForKey:@"anonymizationMode"];
        if (anonymizationMode != nil) {
            recognizer.anonymizationMode = (MBAnonymizationMode)[(NSNumber *)anonymizationMode unsignedIntegerValue];
        }
    }
    {
        id faceImageDpi = [jsonRecognizer valueForKey:@"faceImageDpi"];
        if (faceImageDpi != nil) {
            recognizer.faceImageDpi = [(NSNumber *)faceImageDpi integerValue];
        }
    }
    {
        id fullDocumentImageDpi = [jsonRecognizer valueForKey:@"fullDocumentImageDpi"];
        if (fullDocumentImageDpi != nil) {
            recognizer.fullDocumentImageDpi = [(NSNumber *)fullDocumentImageDpi integerValue];
        }
    }
    {
        id fullDocumentImageExtensionFactors = [jsonRecognizer valueForKey:@"fullDocumentImageExtensionFactors"];
        if (fullDocumentImageExtensionFactors != nil) {
            recognizer.fullDocumentImageExtensionFactors = [MBCommonSerializationUtils deserializeMBImageExtensionFactors:(NSDictionary*)fullDocumentImageExtensionFactors];
        }
    }
    {
        id paddingEdge = [jsonRecognizer valueForKey:@"paddingEdge"];
        if (paddingEdge != nil) {
            recognizer.paddingEdge = [(NSNumber *)paddingEdge floatValue];
        }
    }
    {
        id recognitionModeFilter = [jsonRecognizer valueForKey:@"recognitionModeFilter"];
        if (recognitionModeFilter != nil) {
            recognizer.recognitionModeFilter = [MBBlinkIDSerializationUtils deserializeMBRecognitionModeFilter:(NSDictionary*)recognitionModeFilter];
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
        id returnSignatureImage = [jsonRecognizer valueForKey:@"returnSignatureImage"];
        if (returnSignatureImage != nil) {
            recognizer.returnSignatureImage = [(NSNumber *)returnSignatureImage boolValue];
        }
    }
    {
        id saveCameraFrames = [jsonRecognizer valueForKey:@"saveCameraFrames"];
        if (saveCameraFrames != nil) {
            recognizer.saveCameraFrames = [(NSNumber *)saveCameraFrames boolValue];
        }
    }
    {
        id scanCroppedDocumentImage = [jsonRecognizer valueForKey:@"scanCroppedDocumentImage"];
        if (scanCroppedDocumentImage != nil) {
            recognizer.scanCroppedDocumentImage = [(NSNumber *)scanCroppedDocumentImage boolValue];
        }
    }
    {
        id signatureImageDpi = [jsonRecognizer valueForKey:@"signatureImageDpi"];
        if (signatureImageDpi != nil) {
            recognizer.signatureImageDpi = [(NSNumber *)signatureImageDpi integerValue];
        }
    }
    {
        id validateResultCharacters = [jsonRecognizer valueForKey:@"validateResultCharacters"];
        if (validateResultCharacters != nil) {
            recognizer.validateResultCharacters = [(NSNumber *)validateResultCharacters boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBBlinkIdSingleSideRecognizer (JsonSerialization)
@end

@implementation MBBlinkIdSingleSideRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.additionalAddressInformation] forKey:@"additionalAddressInformation"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.additionalNameInformation] forKey:@"additionalNameInformation"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.additionalOptionalAddressInformation] forKey:@"additionalOptionalAddressInformation"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeAdditionalProcessingInfo:self.result.additionalProcessingInfo] forKey:@"additionalProcessingInfo"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.address] forKey:@"address"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.age] forKey:@"age"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.barcodeCameraFrame] forKey:@"barcodeCameraFrame"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeBarcodeResult:self.result.barcodeResult] forKey:@"barcodeResult"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.cameraFrame] forKey:@"cameraFrame"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeClassInfo:self.result.classInfo] forKey:@"classInfo"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.dateOfExpiryPermanent] forKey:@"dateOfExpiryPermanent"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.documentAdditionalNumber] forKey:@"documentAdditionalNumber"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.documentNumber] forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.documentOptionalAdditionalNumber] forKey:@"documentOptionalAdditionalNumber"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeDriverLicenseDetailedInfo:self.result.driverLicenseDetailedInfo] forKey:@"driverLicenseDetailedInfo"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.employer] forKey:@"employer"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.expired] forKey:@"expired"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils serializeCGRect:self.result.faceImageLocation] forKey:@"faceImageLocation"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.faceImageSide] forKey:@"faceImageSide"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.fathersName] forKey:@"fathersName"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.firstName] forKey:@"firstName"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.fullName] forKey:@"fullName"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeImageAnalysisResult:self.result.imageAnalysisResult] forKey:@"imageAnalysisResult"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.issuingAuthority] forKey:@"issuingAuthority"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.lastName] forKey:@"lastName"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.localizedName] forKey:@"localizedName"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.maritalStatus] forKey:@"maritalStatus"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.mothersName] forKey:@"mothersName"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.nationality] forKey:@"nationality"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.personalIdNumber] forKey:@"personalIdNumber"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.placeOfBirth] forKey:@"placeOfBirth"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.processingStatus] forKey:@"processingStatus"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.profession] forKey:@"profession"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.race] forKey:@"race"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.recognitionMode] forKey:@"recognitionMode"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.religion] forKey:@"religion"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.residentialStatus] forKey:@"residentialStatus"];
    [jsonResult setValue:[MBSerializationUtils serializeMBStringResult:self.result.sex] forKey:@"sex"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeVizResult:self.result.vizResult] forKey:@"vizResult"];

    return jsonResult;
}

@end