#import "MBBlinkIdMultiSideRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"
#import "MBCommonSerializationUtils.h"

@implementation MBBlinkIdMultiSideRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"BlinkIdMultiSideRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBBlinkIdMultiSideRecognizer *recognizer = [[MBBlinkIdMultiSideRecognizer alloc] init];
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
        id allowBarcodeScanOnly = [jsonRecognizer valueForKey:@"allowBarcodeScanOnly"];
        if (allowBarcodeScanOnly != nil) {
            recognizer.allowBarcodeScanOnly = [(NSNumber *)allowBarcodeScanOnly boolValue];
        }
    }
    {
        id allowUncertainFrontSideScan = [jsonRecognizer valueForKey:@"allowUncertainFrontSideScan"];
        if (allowUncertainFrontSideScan != nil) {
            recognizer.allowUncertainFrontSideScan = [(NSNumber *)allowUncertainFrontSideScan boolValue];
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
        id blurStrictnessLevel = [jsonRecognizer valueForKey:@"blurStrictnessLevel"];
        if (blurStrictnessLevel != nil) {
            recognizer.blurStrictnessLevel = (MBStrictnessLevel)[(NSNumber *)blurStrictnessLevel unsignedIntegerValue];
        }
    }
    {
        id combineFrameResults = [jsonRecognizer valueForKey:@"combineFrameResults"];
        if (combineFrameResults != nil) {
            recognizer.combineFrameResults = [(NSNumber *)combineFrameResults boolValue];
        }
    }
    {
        id customClassRules = [jsonRecognizer valueForKey:@"customClassRules"];
        if (customClassRules != nil) {
         NSArray<NSDictionary *> *ruleClasses = customClassRules;
            for (NSDictionary *class in ruleClasses) {
                MBCustomClassRules *rule = [MBBlinkIDSerializationUtils deserializeMBCustomClassRules:(NSDictionary*)class];
                [recognizer recognizerAddClassRulesToCustomClassRules:rule];
            }
        }
    }
    {
        id enableBlurFilter = [jsonRecognizer valueForKey:@"enableBlurFilter"];
        if (enableBlurFilter != nil) {
            recognizer.enableBlurFilter = [(NSNumber *)enableBlurFilter boolValue];
        }
    }
    {
        id enableGlareFilter = [jsonRecognizer valueForKey:@"enableGlareFilter"];
        if (enableGlareFilter != nil) {
            recognizer.enableGlareFilter = [(NSNumber *)enableGlareFilter boolValue];
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
        id glareStrictnessLevel = [jsonRecognizer valueForKey:@"glareStrictnessLevel"];
        if (glareStrictnessLevel != nil) {
            recognizer.glareStrictnessLevel = (MBStrictnessLevel)[(NSNumber *)glareStrictnessLevel unsignedIntegerValue];
        }
    }
    {
        id maxAllowedMismatchesPerField = [jsonRecognizer valueForKey:@"maxAllowedMismatchesPerField"];
        if (maxAllowedMismatchesPerField != nil) {
            recognizer.maxAllowedMismatchesPerField = [(NSNumber *)maxAllowedMismatchesPerField integerValue];
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
        id scanPassportDataPageOnly = [jsonRecognizer valueForKey:@"scanPassportDataPageOnly"];
        if (scanPassportDataPageOnly != nil) {
            recognizer.scanPassportDataPageOnly = [(NSNumber *)scanPassportDataPageOnly boolValue];
        }
    }
    {
        id signatureImageDpi = [jsonRecognizer valueForKey:@"signatureImageDpi"];
        if (signatureImageDpi != nil) {
            recognizer.signatureImageDpi = [(NSNumber *)signatureImageDpi integerValue];
        }
    }
    {
        id skipUnsupportedBack = [jsonRecognizer valueForKey:@"skipUnsupportedBack"];
        if (skipUnsupportedBack != nil) {
            recognizer.skipUnsupportedBack = [(NSNumber *)skipUnsupportedBack boolValue];
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

@interface MBBlinkIdMultiSideRecognizer (JsonSerialization)
@end

@implementation MBBlinkIdMultiSideRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.additionalAddressInformation] forKey:@"additionalAddressInformation"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.additionalNameInformation] forKey:@"additionalNameInformation"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.additionalOptionalAddressInformation] forKey:@"additionalOptionalAddressInformation"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.address] forKey:@"address"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.age] forKey:@"age"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeAdditionalProcessingInfo:self.result.backAdditionalProcessingInfo] forKey:@"backAdditionalProcessingInfo"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.backCameraFrame] forKey:@"backCameraFrame"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeImageAnalysisResult:self.result.backImageAnalysisResult] forKey:@"backImageAnalysisResult"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.backProcessingStatus] forKey:@"backProcessingStatus"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeVizResult:self.result.backVizResult] forKey:@"backVizResult"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.barcodeCameraFrame] forKey:@"barcodeCameraFrame"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeBarcodeResult:self.result.barcodeResult] forKey:@"barcodeResult"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.barcodeStepUsed] forKey:@"barcodeStepUsed"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.bloodType] forKey:@"bloodType"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeClassInfo:self.result.classInfo] forKey:@"classInfo"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeDataMatchResult:self.result.dataMatchResult] forKey:@"dataMatch"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBDateResult:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBDateResult:self.result.dateOfExpiry] forKey:@"dateOfExpiry"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.dateOfExpiryPermanent] forKey:@"dateOfExpiryPermanent"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBDateResult:self.result.dateOfIssue] forKey:@"dateOfIssue"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.documentAdditionalNumber] forKey:@"documentAdditionalNumber"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.documentDataMatch] forKey:@"documentDataMatch"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.documentNumber] forKey:@"documentNumber"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.documentOptionalAdditionalNumber] forKey:@"documentOptionalAdditionalNumber"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.documentSubtype] forKey:@"documentSubtype"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeDriverLicenseDetailedInfo:self.result.driverLicenseDetailedInfo] forKey:@"driverLicenseDetailedInfo"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.eligibilityCategory] forKey:@"eligibilityCategory"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.employer] forKey:@"employer"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.expired] forKey:@"expired"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils serializeCGRect:self.result.faceImageLocation] forKey:@"faceImageLocation"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.faceImageSide] forKey:@"faceImageSide"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.fathersName] forKey:@"fathersName"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.firstName] forKey:@"firstName"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeAdditionalProcessingInfo:self.result.frontAdditionalProcessingInfo] forKey:@"frontAdditionalProcessingInfo"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.frontCameraFrame] forKey:@"frontCameraFrame"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeImageAnalysisResult:self.result.frontImageAnalysisResult] forKey:@"frontImageAnalysisResult"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.frontProcessingStatus] forKey:@"frontProcessingStatus"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeVizResult:self.result.frontVizResult] forKey:@"frontVizResult"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentBackImage] forKey:@"fullDocumentBackImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentFrontImage] forKey:@"fullDocumentFrontImage"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.fullName] forKey:@"fullName"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.issuingAuthority] forKey:@"issuingAuthority"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.lastName] forKey:@"lastName"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.localizedName] forKey:@"localizedName"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.manufacturingYear] forKey:@"manufacturingYear"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.maritalStatus] forKey:@"maritalStatus"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.mothersName] forKey:@"mothersName"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMrzResult:self.result.mrzResult] forKey:@"mrzResult"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.nationality] forKey:@"nationality"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.personalIdNumber] forKey:@"personalIdNumber"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.placeOfBirth] forKey:@"placeOfBirth"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.processingStatus] forKey:@"processingStatus"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.profession] forKey:@"profession"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.race] forKey:@"race"];
    [jsonResult setValue:[NSNumber numberWithInteger:self.result.recognitionMode] forKey:@"recognitionMode"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.religion] forKey:@"religion"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.remarks] forKey:@"remarks"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.residencePermitType] forKey:@"residencePermitType"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.residentialStatus] forKey:@"residentialStatus"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.scanningFirstSideDone] forKey:@"scanningFirstSideDone"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.sex] forKey:@"sex"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.specificDocumentValidity] forKey:@"specificDocumentValidity"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.sponsor] forKey:@"sponsor"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.vehicleOwner] forKey:@"vehicleOwner"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.vehicleType] forKey:@"vehicleType"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMBStringResult:self.result.visaType] forKey:@"visaType"];
    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeDependentInfo:self.result.dependentInfos] forKey:@"dependentsInfo"];

    return jsonResult;
}

@end