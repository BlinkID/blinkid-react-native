#import "MBRecognizerSerializers.h"

#import "MBRecognizerWrapper.h"
#import "MBSuccessFrameGrabberRecognizerWrapper.h"
#import "MBBlinkIdMultiSideRecognizerWrapper.h"
#import "MBBlinkIdSingleSideRecognizerWrapper.h"
#import "MBDocumentFaceRecognizerWrapper.h"
#import "MBIdBarcodeRecognizerWrapper.h"
#import "MBMrtdCombinedRecognizerWrapper.h"
#import "MBMrtdRecognizerWrapper.h"
#import "MBPassportRecognizerWrapper.h"
#import "MBVisaRecognizerWrapper.h"
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
        [self registerCreator:[[MBBlinkIdMultiSideRecognizerCreator alloc] init]];
        [self registerCreator:[[MBBlinkIdSingleSideRecognizerCreator alloc] init]];
        [self registerCreator:[[MBDocumentFaceRecognizerCreator alloc] init]];
        [self registerCreator:[[MBIdBarcodeRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMrtdCombinedRecognizerCreator alloc] init]];
        [self registerCreator:[[MBMrtdRecognizerCreator alloc] init]];
        [self registerCreator:[[MBPassportRecognizerCreator alloc] init]];
        [self registerCreator:[[MBVisaRecognizerCreator alloc] init]];
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