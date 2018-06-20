#import "MBIndonesiaIdFrontRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBIndonesiaIdFrontRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"IndonesiaIdFrontRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBIndonesiaIdFrontRecognizer *recognizer = [[MBIndonesiaIdFrontRecognizer alloc] init];
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
        id extractBloodType = [jsonRecognizer valueForKey:@"extractBloodType"];
        if (extractBloodType != nil) {
            recognizer.extractBloodType = [(NSNumber *)extractBloodType boolValue];
        }
    }
    {
        id extractCitizenship = [jsonRecognizer valueForKey:@"extractCitizenship"];
        if (extractCitizenship != nil) {
            recognizer.extractCitizenship = [(NSNumber *)extractCitizenship boolValue];
        }
    }
    {
        id extractCity = [jsonRecognizer valueForKey:@"extractCity"];
        if (extractCity != nil) {
            recognizer.extractCity = [(NSNumber *)extractCity boolValue];
        }
    }
    {
        id extractDistrict = [jsonRecognizer valueForKey:@"extractDistrict"];
        if (extractDistrict != nil) {
            recognizer.extractDistrict = [(NSNumber *)extractDistrict boolValue];
        }
    }
    {
        id extractKelDesa = [jsonRecognizer valueForKey:@"extractKelDesa"];
        if (extractKelDesa != nil) {
            recognizer.extractKelDesa = [(NSNumber *)extractKelDesa boolValue];
        }
    }
    {
        id extractMaritalStatus = [jsonRecognizer valueForKey:@"extractMaritalStatus"];
        if (extractMaritalStatus != nil) {
            recognizer.extractMaritalStatus = [(NSNumber *)extractMaritalStatus boolValue];
        }
    }
    {
        id extractName = [jsonRecognizer valueForKey:@"extractName"];
        if (extractName != nil) {
            recognizer.extractName = [(NSNumber *)extractName boolValue];
        }
    }
    {
        id extractOccupation = [jsonRecognizer valueForKey:@"extractOccupation"];
        if (extractOccupation != nil) {
            recognizer.extractOccupation = [(NSNumber *)extractOccupation boolValue];
        }
    }
    {
        id extractPlaceOfBirth = [jsonRecognizer valueForKey:@"extractPlaceOfBirth"];
        if (extractPlaceOfBirth != nil) {
            recognizer.extractPlaceOfBirth = [(NSNumber *)extractPlaceOfBirth boolValue];
        }
    }
    {
        id extractReligion = [jsonRecognizer valueForKey:@"extractReligion"];
        if (extractReligion != nil) {
            recognizer.extractReligion = [(NSNumber *)extractReligion boolValue];
        }
    }
    {
        id extractRt = [jsonRecognizer valueForKey:@"extractRt"];
        if (extractRt != nil) {
            recognizer.extractRt = [(NSNumber *)extractRt boolValue];
        }
    }
    {
        id extractRw = [jsonRecognizer valueForKey:@"extractRw"];
        if (extractRw != nil) {
            recognizer.extractRw = [(NSNumber *)extractRw boolValue];
        }
    }
    {
        id extractValidUntil = [jsonRecognizer valueForKey:@"extractValidUntil"];
        if (extractValidUntil != nil) {
            recognizer.extractValidUntil = [(NSNumber *)extractValidUntil boolValue];
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

    return recognizer;
}

@end

@interface MBIndonesiaIdFrontRecognizer (JsonSerialization)
@end

@implementation MBIndonesiaIdFrontRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:self.result.address forKey:@"address"];
    [jsonResult setValue:self.result.bloodType forKey:@"bloodType"];
    [jsonResult setValue:self.result.citizenship forKey:@"citizenship"];
    [jsonResult setValue:self.result.city forKey:@"city"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.dateOfBirth] forKey:@"dateOfBirth"];
    [jsonResult setValue:self.result.district forKey:@"district"];
    [jsonResult setValue:self.result.documentClassifier forKey:@"documentClassifier"];
    [jsonResult setValue:self.result.documentNumber forKey:@"documentNumber"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.faceImage] forKey:@"faceImage"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];
    [jsonResult setValue:self.result.kelDesa forKey:@"kelDesa"];
    [jsonResult setValue:self.result.maritalStatus forKey:@"maritalStatus"];
    [jsonResult setValue:self.result.name forKey:@"name"];
    [jsonResult setValue:self.result.occupation forKey:@"occupation"];
    [jsonResult setValue:self.result.placeOfBirth forKey:@"placeOfBirth"];
    [jsonResult setValue:self.result.province forKey:@"province"];
    [jsonResult setValue:self.result.religion forKey:@"religion"];
    [jsonResult setValue:self.result.rt forKey:@"rt"];
    [jsonResult setValue:self.result.rw forKey:@"rw"];
    [jsonResult setValue:self.result.sex forKey:@"sex"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.signatureImage] forKey:@"signatureImage"];
    [jsonResult setValue:[MBSerializationUtils serializeNSDate:self.result.validUntil] forKey:@"validUntil"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.validUntilPermanent] forKey:@"validUntilPermanent"];

    return jsonResult;
}

@end