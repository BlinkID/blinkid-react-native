#import "MBRecognizerSerializers.h"

#import "MBRecognizerWrapper.h"
#import "MBSuccessFrameGrabberRecognizerWrapper.h"
#import "MBAustraliaDlBackRecognizerWrapper.h"
#import "MBAustraliaDlFrontRecognizerWrapper.h"
#import "MBAustriaCombinedRecognizerWrapper.h"
#import "MBAustriaIdBackRecognizerWrapper.h"
#import "MBAustriaIdFrontRecognizerWrapper.h"
#import "MBAustriaPassportRecognizerWrapper.h"
#import "MBBarcodeRecognizerWrapper.h"
#import "MBColombiaIdBackRecognizerWrapper.h"
#import "MBColombiaIdFrontRecognizerWrapper.h"
#import "MBCroatiaCombinedRecognizerWrapper.h"
#import "MBCroatiaIdBackRecognizerWrapper.h"
#import "MBCroatiaIdFrontRecognizerWrapper.h"
#import "MBCzechiaCombinedRecognizerWrapper.h"
#import "MBCzechiaIdBackRecognizerWrapper.h"
#import "MBCzechiaIdFrontRecognizerWrapper.h"
#import "MBDocumentFaceRecognizerWrapper.h"
#import "MBEgyptIdFrontRecognizerWrapper.h"
#import "MBEudlRecognizerWrapper.h"
#import "MBGermanyCombinedRecognizerWrapper.h"
#import "MBGermanyIdBackRecognizerWrapper.h"
#import "MBGermanyIdFrontRecognizerWrapper.h"
#import "MBGermanyOldIdRecognizerWrapper.h"
#import "MBGermanyPassportRecognizerWrapper.h"
#import "MBHongKongIdFrontRecognizerWrapper.h"
#import "MBIkadRecognizerWrapper.h"
#import "MBIndonesiaIdFrontRecognizerWrapper.h"
#import "MBJordanCombinedRecognizerWrapper.h"
#import "MBJordanIdBackRecognizerWrapper.h"
#import "MBJordanIdFrontRecognizerWrapper.h"
#import "MBMalaysiaDlFrontRecognizerWrapper.h"
#import "MBMoroccoIdBackRecognizerWrapper.h"
#import "MBMoroccoIdFrontRecognizerWrapper.h"
#import "MBMrtdCombinedRecognizerWrapper.h"
#import "MBMrtdRecognizerWrapper.h"
#import "MBMyKadBackRecognizerWrapper.h"
#import "MBMyKadFrontRecognizerWrapper.h"
#import "MBMyTenteraRecognizerWrapper.h"
#import "MBNewZealandDlFrontRecognizerWrapper.h"
#import "MBPdf417RecognizerWrapper.h"
#import "MBPolandCombinedRecognizerWrapper.h"
#import "MBPolandIdBackRecognizerWrapper.h"
#import "MBPolandIdFrontRecognizerWrapper.h"
#import "MBRomaniaIdFrontRecognizerWrapper.h"
#import "MBSerbiaCombinedRecognizerWrapper.h"
#import "MBSerbiaIdBackRecognizerWrapper.h"
#import "MBSerbiaIdFrontRecognizerWrapper.h"
#import "MBSimNumberRecognizerWrapper.h"
#import "MBSingaporeChangiEmployeeIdRecognizerWrapper.h"
#import "MBSingaporeCombinedRecognizerWrapper.h"
#import "MBSingaporeDlFrontRecognizerWrapper.h"
#import "MBSingaporeIdBackRecognizerWrapper.h"
#import "MBSingaporeIdFrontRecognizerWrapper.h"
#import "MBSlovakiaCombinedRecognizerWrapper.h"
#import "MBSlovakiaIdBackRecognizerWrapper.h"
#import "MBSlovakiaIdFrontRecognizerWrapper.h"
#import "MBSloveniaCombinedRecognizerWrapper.h"
#import "MBSloveniaIdBackRecognizerWrapper.h"
#import "MBSloveniaIdFrontRecognizerWrapper.h"
#import "MBSwedenDlFrontRecognizerWrapper.h"
#import "MBSwitzerlandDlFrontRecognizerWrapper.h"
#import "MBSwitzerlandIdBackRecognizerWrapper.h"
#import "MBSwitzerlandIdFrontRecognizerWrapper.h"
#import "MBSwitzerlandPassportRecognizerWrapper.h"
#import "MBUnitedArabEmiratesIdBackRecognizerWrapper.h"
#import "MBUnitedArabEmiratesIdFrontRecognizerWrapper.h"
#import "MBVinRecognizerWrapper.h"
#import "MBUsdlRecognizerWrapper.h"
#import "MBUsdlCombinedRecognizerWrapper.h"


@interface MBRecognizerSerializers ()

@property (nonatomic, strong) NSDictionary<NSString*, id<MBRecognizerCreator>> *recognizerSerializers;

@end

@implementation MBRecognizerSerializers

- (void)registerCreator:(id<MBRecognizerCreator>)recognizerCreator {
    [self.recognizerSerializers setValue:recognizerCreator forKey:recognizerCreator.jsonName];
}

- (instancetype)init {
    self = [super init];
    if (self) {
        _recognizerSerializers = [[NSMutableDictionary alloc] init];
        [self registerCreator:[[MBSuccessFrameGrabberRecognizerCreator alloc] init]];
        [self registerCreator:[[MBAustraliaDlBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBAustraliaDlFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBAustriaCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBAustriaIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBAustriaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBAustriaPassportRecognizerCreator alloc] init]];
        [self registerCreator:[[MBBarcodeRecognizerCreator alloc] init]];
        [self registerCreator:[[MBColombiaIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBColombiaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBCroatiaCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBCroatiaIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBCroatiaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBCzechiaCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBCzechiaIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBCzechiaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBDocumentFaceRecognizerCreator alloc] init]];
        [self registerCreator:[[MBEgyptIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBEudlRecognizerCreator alloc] init]];
        [self registerCreator:[[MBGermanyCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBGermanyIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBGermanyIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBGermanyOldIdRecognizerCreator alloc] init]];
        [self registerCreator:[[MBGermanyPassportRecognizerCreator alloc] init]];
        [self registerCreator:[[MBHongKongIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBIkadRecognizerCreator alloc] init]];
        [self registerCreator:[[MBIndonesiaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBJordanCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBJordanIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBJordanIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMalaysiaDlFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMoroccoIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMoroccoIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMrtdCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMrtdRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMyKadBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMyKadFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMyTenteraRecognizerCreator alloc] init]];
        [self registerCreator:[[MBNewZealandDlFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBPdf417RecognizerCreator alloc] init]];
        [self registerCreator:[[MBPolandCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBPolandIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBPolandIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBRomaniaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSerbiaCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSerbiaIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSerbiaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSimNumberRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSingaporeChangiEmployeeIdRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSingaporeCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSingaporeDlFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSingaporeIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSingaporeIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSlovakiaCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSlovakiaIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSlovakiaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSloveniaCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSloveniaIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSloveniaIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSwedenDlFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSwitzerlandDlFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSwitzerlandIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSwitzerlandIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBSwitzerlandPassportRecognizerCreator alloc] init]];
        [self registerCreator:[[MBUnitedArabEmiratesIdBackRecognizerCreator alloc] init]];
        [self registerCreator:[[MBUnitedArabEmiratesIdFrontRecognizerCreator alloc] init]];
        [self registerCreator:[[MBVinRecognizerCreator alloc] init]];
        [self registerCreator:[[MBUsdlRecognizerCreator alloc] init]];
        [self registerCreator:[[MBUsdlCombinedRecognizerCreator alloc] init]];
        
    }
    return self;
}

+ (instancetype)sharedInstance {
    static MBRecognizerSerializers *sharedInstance = nil;
    static dispatch_once_t onceToken;
    dispatch_once(&onceToken, ^{
        sharedInstance = [[self alloc] init];

    });
    return sharedInstance;
}

-(id<MBRecognizerCreator>) recognizerCreatorForJson:(NSDictionary *)recognizerJson {
    NSString* recognizerType = [recognizerJson objectForKey:@"recognizerType"];
    return [self.recognizerSerializers objectForKey:recognizerType];
}

-(MBRecognizerCollection *) deserializeRecognizerCollection:(NSDictionary *)jsonRecognizerCollection {
    NSArray *recognizerArray = [jsonRecognizerCollection valueForKey:@"recognizerArray"];
    NSUInteger numRecognizers = recognizerArray.count;

    NSMutableArray<MBRecognizer*> *recognizers = [[NSMutableArray alloc] initWithCapacity:numRecognizers];
    for (NSUInteger i = 0; i < numRecognizers; ++i) {
        NSDictionary* recognizerJson = [recognizerArray objectAtIndex:i];
        [recognizers addObject:[[self recognizerCreatorForJson:recognizerJson] createRecognizer:recognizerArray[i]]];
    }

    MBRecognizerCollection* recognizerCollection = [[MBRecognizerCollection alloc] initWithRecognizers:recognizers];
    {
        id allowMultipleResults = [jsonRecognizerCollection objectForKey:@"allowMultipleResults"];
        if (allowMultipleResults != nil) {
            recognizerCollection.allowMultipleResults = [(NSNumber*)allowMultipleResults boolValue];
        }
    }
    {
        id milisecondsBeforeTimeout = [jsonRecognizerCollection objectForKey:@"milisecondsBeforeTimeout"];
        if (milisecondsBeforeTimeout != nil) {
            recognizerCollection.partialRecognitionTimeout = (NSTimeInterval)[(NSNumber*)milisecondsBeforeTimeout integerValue] / 1000.0;
        }
    }
    return recognizerCollection;
}

@end