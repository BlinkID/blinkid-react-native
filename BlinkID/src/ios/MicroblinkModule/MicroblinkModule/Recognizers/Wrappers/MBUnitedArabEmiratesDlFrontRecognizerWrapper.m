#import "MBUnitedArabEmiratesDlFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBUnitedArabEmiratesDlFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"UnitedArabEmiratesDlFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBUnitedArabEmiratesDlFrontRecognizer *recognizer = [[MBUnitedArabEmiratesDlFrontRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractDateOfBirth = [jsonRecognizer valueForKey:@"extractDateOfBirth"];
        if (extractDateOfBirth != nil) {
            recognizer.extractDateOfBirth = [(NSNumber *)extractDateOfBirth boolValue];
        }
    }
    {
        id extractIssueDate = [jsonRecognizer valueForKey:@"extractIssueDate"];
        if (extractIssueDate != nil) {
            recognizer.extractIssueDate = [(NSNumber *)extractIssueDate boolValue];
        }
    }
    {
        id extractLicenseNumber = [jsonRecognizer valueForKey:@"extractLicenseNumber"];
        if (extractLicenseNumber != nil) {
            recognizer.extractLicenseNumber = [(NSNumber *)extractLicenseNumber boolValue];
        }
    }
    {
        id extractLicensingAuthority = [jsonRecognizer valueForKey:@"extractLicensingAuthority"];
        if (extractLicensingAuthority != nil) {
            recognizer.extractLicensingAuthority = [(NSNumber *)extractLicensingAuthority boolValue];
        }
    }
    {
        id extractName = [jsonRecognizer valueForKey:@"extractName"];
        if (extractName != nil) {
            recognizer.extractName = [(NSNumber *)extractName boolValue];
        }
    }
    {
        id extractNationality = [jsonRecognizer valueForKey:@"extractNationality"];
        if (extractNationality != nil) {
            recognizer.extractNationality = [(NSNumber *)extractNationality boolValue];
        }
    }
    {
        id extractPlaceOfIssue = [jsonRecognizer valueForKey:@"extractPlaceOfIssue"];
        if (extractPlaceOfIssue != nil) {
            recognizer.extractPlaceOfIssue = [(NSNumber *)extractPlaceOfIssue boolValue];
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

@interface MBUnitedArabEmiratesDlFrontRecognizer (JsonSerialization)
@end

@implementation MBUnitedArabEmiratesDlFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.expiryDate] forKey:@"expiryDate"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:[MBSerializationUtils serializeMBDateResult:self.result.issueDate] forKey:@"issueDate"];
    [jsonResult setValue:self.result.licenseNumber forKey:@"licenseNumber"];
    [jsonResult setValue:self.result.licensingAuthority forKey:@"licensingAuthority"];
    [jsonResult setValue:self.result.name forKey:@"name"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.placeOfIssue forKey:@"placeOfIssue"];

    return jsonResult;
}

@end