#import "MBIkadRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBIkadRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"IkadRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBIkadRecognizer *recognizer = [[MBIkadRecognizer alloc] init];
    {
        id detectGlare = [jsonRecognizer valueForKey:@"detectGlare"];
        if (detectGlare != nil) {
            recognizer.detectGlare = [(NSNumber *)detectGlare boolValue];
        }
    }
    {
        id extractAddress = [jsonRecognizer valueForKey:@"extractAddress"];
        if (extractAddress != nil) {
            recognizer.extractAddress = [(NSNumber *)extractAddress boolValue];
        }
    }
    {
        id extractEmployer = [jsonRecognizer valueForKey:@"extractEmployer"];
        if (extractEmployer != nil) {
            recognizer.extractEmployer = [(NSNumber *)extractEmployer boolValue];
        }
    }
    {
        id extractExpiryDate = [jsonRecognizer valueForKey:@"extractExpiryDate"];
        if (extractExpiryDate != nil) {
            recognizer.extractExpiryDate = [(NSNumber *)extractExpiryDate boolValue];
        }
    }
    {
        id extractFacultyAddress = [jsonRecognizer valueForKey:@"extractFacultyAddress"];
        if (extractFacultyAddress != nil) {
            recognizer.extractFacultyAddress = [(NSNumber *)extractFacultyAddress boolValue];
        }
    }
    {
        id extractNationality = [jsonRecognizer valueForKey:@"extractNationality"];
        if (extractNationality != nil) {
            recognizer.extractNationality = [(NSNumber *)extractNationality boolValue];
        }
    }
    {
        id extractPassportNumber = [jsonRecognizer valueForKey:@"extractPassportNumber"];
        if (extractPassportNumber != nil) {
            recognizer.extractPassportNumber = [(NSNumber *)extractPassportNumber boolValue];
        }
    }
    {
        id extractSector = [jsonRecognizer valueForKey:@"extractSector"];
        if (extractSector != nil) {
            recognizer.extractSector = [(NSNumber *)extractSector boolValue];
        }
    }
    {
        id extractSex = [jsonRecognizer valueForKey:@"extractSex"];
        if (extractSex != nil) {
            recognizer.extractSex = [(NSNumber *)extractSex boolValue];
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

@interface MBIkadRecognizer (JsonSerialization)
@end

@implementation MBIkadRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:self.result.employer forKey:@"employer"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.expiryDate] forKey:@"expiryDate"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:self.result.facultyAddress forKey:@"facultyAddress"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.name forKey:@"name"];
    [jsonResult setValue:self.result.nationality forKey:@"nationality"];
    [jsonResult setValue:self.result.passportNumber forKey:@"passportNumber"];
    [jsonResult setValue:self.result.sector forKey:@"sector"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];

    return jsonResult;
}

@end