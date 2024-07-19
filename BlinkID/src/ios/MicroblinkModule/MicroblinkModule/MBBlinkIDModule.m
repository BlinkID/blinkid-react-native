#import "MBOverlayViewControllerDelegate.h"
#import "MBRecognizerSerializers.h"
#import "MBOverlaySettingsSerializers.h"
#import "MBRecognizerWrapper.h"
#import "MBSerializationUtils.h"

#import <Foundation/Foundation.h>
#import "MBBlinkIDModule.h"
#import <React/RCTConvert.h>
#import <BlinkID/BlinkID.h>

typedef NS_ENUM(NSUInteger, PPImageType) {
    PPImageTypeFace,
    PPImageTypeDocument,
    PPImageTypeSuccessful,
};

// NSError Domain
static NSString* const MBErrorDomain = @"microblink.error";
static NSString* const RESULT_CAPTURED_FULL_IMAGE = @"capturedFullImage";
static NSString* const RESULT_DOCUMENT_CAPTURE_RECOGNIZER_RESULT = @"documentCaptureRecognizerResult";

@interface MBBlinkIDModule () <MBOverlayViewControllerDelegate, MBScanningRecognizerRunnerDelegate, MBFirstSideFinishedRecognizerRunnerDelegate>

@property (nonatomic, strong) MBRecognizerCollection *recognizerCollection;
@property (nonatomic) id<MBRecognizerRunnerViewController> scanningViewController;
@property (nonatomic, strong) MBRecognizerRunner *recognizerRunner;
@property (nonatomic, strong) NSDictionary *backImageBase64Image;

@property (class, nonatomic, readonly) NSString *STATUS_SCAN_CANCELED;
@property (class, nonatomic, readonly) NSString *STATUS_FRONTSIDE_EMPTY;
@property (class, nonatomic, readonly) NSString *STATUS_BASE64_ERROR;
@property (class, nonatomic, readonly) NSString *STATUS_NO_DATA;
@property (class, nonatomic, readonly) NSString *STATUS_INVALID_LICENSE_KEY;


@property (nonatomic, strong) RCTPromiseResolveBlock promiseResolve;
@property (nonatomic, strong) RCTPromiseRejectBlock promiseReject;

@end

@implementation MBBlinkIDModule

RCT_EXPORT_MODULE(BlinkIDIos);

- (instancetype)init {
    if (self = [super init]) {
    }
    return self;
}

+ (BOOL)requiresMainQueueSetup {
    return YES;
}

/**
 Method  sanitizes the dictionary replaces all occurances of NSNull with nil

 @param dictionary JSON objects
 @return new dictionary with NSNull values replaced with nil
 */
- (NSDictionary *)sanitizeDictionary:(NSDictionary *)dictionary {
    NSMutableDictionary *mutableDictionary = [[NSMutableDictionary alloc] initWithDictionary:dictionary];
    for (NSString* key in dictionary.allKeys) {
        if (mutableDictionary[key] == [NSNull null]) {
            [mutableDictionary removeObjectForKey:key];
        }
    }
    return mutableDictionary;
}

RCT_REMAP_METHOD(scanWithCamera, scanWithCamera:(NSDictionary *)jsonOverlaySettings recognizerCollection:(NSDictionary *)jsonRecognizerCollection license:(NSDictionary *)jsonLicense resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {

    // Sanitize the dictionaries
    jsonOverlaySettings = [self sanitizeDictionary:jsonOverlaySettings];
    jsonRecognizerCollection = [self sanitizeDictionary:jsonRecognizerCollection];
    jsonLicense = [self sanitizeDictionary:jsonLicense];
    
    self.promiseResolve = resolve;
    self.promiseReject = reject;
    
    if([self setupLicense:jsonLicense]) {
        [self setupLanguage:jsonOverlaySettings];

        self.recognizerCollection = [[MBRecognizerSerializers sharedInstance] deserializeRecognizerCollection:jsonRecognizerCollection];

        dispatch_sync(dispatch_get_main_queue(), ^{
            MBOverlayViewController *overlayVC = [[MBOverlaySettingsSerializers sharedInstance] createOverlayViewController:jsonOverlaySettings recognizerCollection:self.recognizerCollection delegate:self];

            UIViewController<MBRecognizerRunnerViewController>* recognizerRunnerViewController = [MBViewControllerFactory recognizerRunnerViewControllerWithOverlayViewController:overlayVC];
            self.scanningViewController = recognizerRunnerViewController;

            UIViewController *rootViewController = [[[UIApplication sharedApplication] keyWindow] rootViewController];
            [rootViewController presentViewController:self.scanningViewController animated:YES completion:nil];
        });
    }
}

RCT_REMAP_METHOD(scanWithDirectApi, recognizerCollection:(NSDictionary *)jsonRecognizerCollection frontImage:(NSDictionary *)jsonFrontImage backImage:(NSDictionary*)jsonBackImage license:(NSDictionary *)jsonLicense resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    // Sanitize the dictionaries
    jsonRecognizerCollection = [self sanitizeDictionary:jsonRecognizerCollection];
    jsonLicense = [self sanitizeDictionary:jsonLicense];
    jsonFrontImage = [self sanitizeDictionary: jsonFrontImage];
    self.backImageBase64Image = [self sanitizeDictionary:jsonBackImage];
    
    self.promiseResolve = resolve;
    self.promiseReject = reject;
    
    if( [self setupLicense:jsonLicense]) {
        [self setupRecognizerRunner:jsonRecognizerCollection];
        if (jsonFrontImage[@"frontImage"] != nil) {
            UIImage *frontImage = [self convertbase64ToImage:jsonFrontImage[@"frontImage"]];
            if (!CGSizeEqualToSize(frontImage.size, CGSizeZero)) {
                [self processImage:frontImage];
            } else {
                [self handleDirectApiError:MBBlinkIDModule.STATUS_BASE64_ERROR errorMessaege:@"Could not decode Base64 image!"];
            }
        } else {
            [self handleDirectApiError:MBBlinkIDModule.STATUS_FRONTSIDE_EMPTY errorMessaege:@"The provided image for the 'frontImage' parameter is empty!"];
        }
    }
}

- (void)overlayViewControllerDidFinishScanning:(MBOverlayViewController *)overlayViewController state:(MBRecognizerResultState)state {
    if (state != MBRecognizerResultStateEmpty) {
        [overlayViewController.recognizerRunnerViewController pauseScanning];
        // recognizers within self.recognizerCollection now have their results filled

        BOOL isDocumentCaptureRecognizer = NO;

        NSMutableArray *jsonResults = [[NSMutableArray alloc] initWithCapacity:self.recognizerCollection.recognizerList.count];

        for (NSUInteger i = 0; i < self.recognizerCollection.recognizerList.count; ++i) {
            [jsonResults addObject:[[self.recognizerCollection.recognizerList objectAtIndex:i] serializeResult]];

        if (!isDocumentCaptureRecognizer) {
            self.promiseResolve(jsonResults);
        }
        // dismiss recognizer runner view controller
        dispatch_async(dispatch_get_main_queue(), ^{
            UIViewController *rootViewController = [[[UIApplication sharedApplication] keyWindow] rootViewController];
            [rootViewController dismissViewControllerAnimated:YES completion:nil];
            self.recognizerCollection = nil;
            self.scanningViewController = nil;
            self.promiseResolve = nil;
            self.promiseReject = nil;
            });
        }
    }
}

- (void)overlayDidTapClose:(MBOverlayViewController *)overlayViewController {
    UIViewController *rootViewController = [[[UIApplication sharedApplication] keyWindow] rootViewController];
    [rootViewController dismissViewControllerAnimated:YES completion:nil];
    self.recognizerCollection = nil;
    self.scanningViewController = nil;
    NSError *error = [NSError errorWithDomain:MBErrorDomain
                                         code:-58
                                     userInfo:nil];
    self.promiseReject(MBBlinkIDModule.STATUS_SCAN_CANCELED, @"Scanning has been canceled", error);

    self.promiseResolve = nil;
    self.promiseReject = nil;
}

- (void)recognizerRunnerDidFinishRecognitionOfFirstSide:(MBRecognizerRunner *)recognizerRunner {
    if (self.backImageBase64Image[@"backImage"] != nil) {
        UIImage *backImage = [self convertbase64ToImage:self.backImageBase64Image[@"backImage"]];
        if (!CGSizeEqualToSize(backImage.size, CGSizeZero)) {
            [self processImage:backImage];
        } else {
            [self handleJsonResult];
            self.recognizerCollection = nil;
            self.recognizerRunner = nil;
        }
    } else {
        [self handleJsonResult];
        self.recognizerCollection = nil;
        self.recognizerRunner = nil;
    }
}

- (void)recognizerRunner:(nonnull MBRecognizerRunner *)recognizerRunner didFinishScanningWithState:(MBRecognizerResultState)state {
    dispatch_async(dispatch_get_main_queue(), ^{
        if (state == MBRecognizerResultStateValid || state == MBRecognizerResultStateUncertain) {
            [self handleJsonResult];
            self.recognizerCollection = nil;
            self.recognizerRunner = nil;
        } else if (state == MBRecognizerResultStateEmpty) {
            [self handleDirectApiError:MBBlinkIDModule.STATUS_NO_DATA errorMessaege:@"Could not extract the information with DirectAPI!"];
            self.recognizerCollection = nil;
            self.recognizerRunner = nil;
        }
    });
}

//setup the recognizer runner
- (void) setupRecognizerRunner:(NSDictionary *)jsonRecognizerCollection {
    self.recognizerCollection = [[MBRecognizerSerializers sharedInstance] deserializeRecognizerCollection:jsonRecognizerCollection];
    self.recognizerRunner = [[MBRecognizerRunner alloc] initWithRecognizerCollection:self.recognizerCollection];
    self.recognizerRunner.scanningRecognizerRunnerDelegate = self;
    self.recognizerRunner.metadataDelegates.firstSideFinishedRecognizerRunnerDelegate = self;
}

//convert the image to MBImage and process it
- (void)processImage:(UIImage *)originalImage {
    MBImage *image = [MBImage imageWithUIImage:originalImage];
    image.cameraFrame = NO;
    image.orientation = MBProcessingOrientationLeft;
    dispatch_queue_t _serialQueue = dispatch_queue_create("com.microblink.DirectAPI", DISPATCH_QUEUE_SERIAL);
    dispatch_async(_serialQueue, ^{
        [self.recognizerRunner processImage:image];
    });
}

//convert image from base64 to UIImage
-(UIImage*)convertbase64ToImage:(NSString *)base64Image {
    NSData *imageData = [[NSData alloc] initWithBase64EncodedString:base64Image options:NSDataBase64DecodingIgnoreUnknownCharacters];
    if (imageData) {
        UIImage *image = [UIImage imageWithData:imageData];
        return image;
    } else {
        return [UIImage new];
    }
}

//Handle JSON results
- (void) handleJsonResult {
    BOOL isDocumentCaptureRecognizer = NO;
    
    NSMutableArray *jsonResults = [[NSMutableArray alloc] initWithCapacity:self.recognizerCollection.recognizerList.count];
    
    for (NSUInteger i = 0; i < self.recognizerCollection.recognizerList.count; ++i) {
        [jsonResults addObject:[[self.recognizerCollection.recognizerList objectAtIndex:i] serializeResult]];
        
        if (!isDocumentCaptureRecognizer) {
            self.promiseResolve(jsonResults);
        }
    }
}

- (void) handleDirectApiError:(NSString*)status errorMessaege:(NSString *)errorMessage {
    self.recognizerCollection = nil;
    self.recognizerRunner = nil;
    NSError *error = [NSError errorWithDomain:MBErrorDomain
                                         code:-58
                                     userInfo:nil];
    self.promiseReject(status, errorMessage, error);
    self.promiseResolve = nil;
    self.promiseReject = nil;
}

- (BOOL) setupLicense:(NSDictionary *)jsonLicense {
    __block BOOL isLicenseKeyValid = YES;
    if ([jsonLicense objectForKey:@"showTrialLicenseWarning"] != nil) {
        BOOL showTrialLicenseWarning = [[jsonLicense objectForKey:@"showTrialLicenseWarning"] boolValue];
        [MBMicroblinkSDK sharedInstance].showTrialLicenseWarning = showTrialLicenseWarning;
    }
    
    NSString* iosLicense = [jsonLicense objectForKey:@"licenseKey"];
    if ([jsonLicense objectForKey:@"licensee"] != nil) {
        NSString *licensee = [jsonLicense objectForKey:@"licensee"];
        [[MBMicroblinkSDK sharedInstance] setLicenseKey:iosLicense andLicensee:licensee errorCallback:^(MBLicenseError licenseError) {
            NSError *error = [NSError errorWithDomain:MBErrorDomain
                                                 code:-58
                                             userInfo:nil];
            self.promiseReject(MBBlinkIDModule.STATUS_INVALID_LICENSE_KEY, [self licenseErrorToString:licenseError], error);
            isLicenseKeyValid = NO;
        }];
    }
    else {
        [[MBMicroblinkSDK sharedInstance] setLicenseKey:iosLicense errorCallback:^(MBLicenseError licenseError) {
            NSError *error = [NSError errorWithDomain:MBErrorDomain
                                                 code:-58
                                             userInfo:nil];
            self.promiseReject(MBBlinkIDModule.STATUS_INVALID_LICENSE_KEY, [self licenseErrorToString:licenseError], error);
            isLicenseKeyValid = NO;
        }];
    }
    return isLicenseKeyValid;
}

- (void) setupLanguage:(NSDictionary *)jsonOverlaySettings {
    if (jsonOverlaySettings[@"language"] != nil) {
        if (jsonOverlaySettings[@"country"] != nil && ![jsonOverlaySettings[@"country"]  isEqual: @""]) {
            MBMicroblinkApp.sharedInstance.language = [[(NSString *)jsonOverlaySettings[@"language"] stringByAppendingString:@"-" ] stringByAppendingString:(NSString *)jsonOverlaySettings[@"country"]];
        } else {
            MBMicroblinkApp.sharedInstance.language = jsonOverlaySettings[@"language"];
        }
    }
}

- (NSString *)licenseErrorToString:(MBLicenseError)licenseError {
    switch(licenseError) {
        case MBLicenseErrorNetworkRequired:
            return @"License error network required";
            break;
        case MBLicenseErrorUnableToDoRemoteLicenceCheck:
            return @"License error unable to do remote licence check";
            break;
        case MBLicenseErrorLicenseIsLocked:
            return @"License error license is locked";
            break;
        case MBLicenseErrorLicenseCheckFailed:
            return @"License error license check failed";
            break;
        case MBLicenseErrorInvalidLicense:
            return @"License error invalid license";
            break;
        case MBLicenseErrorPermissionExpired:
            return @"License error permission expired";
            break;
        case MBLicenseErrorPayloadCorrupted:
            return @"License error payload corrupted";
            break;
        case MBLicenseErrorPayloadSignatureVerificationFailed:
            return @"License error payload signature verification failed";
            break;
        case MBLicenseErrorIncorrectTokenState:
            return @"License error incorrect token state";
            break;
    }
}

+ (NSString *)STATUS_FRONTSIDE_EMPTY {
    return @"STATUS_FRONTSIDE_EMPTY";
}

+ (NSString *)STATUS_BASE64_ERROR {
    return @"STATUS_BASE64_ERROR";
}

+ (NSString *)STATUS_NO_DATA {
    return @"STATUS_NO_DATA";
}

+ (NSString *)STATUS_SCAN_CANCELED {
    return @"STATUS_SCAN_CANCELED";
}

+ (NSString *)STATUS_INVALID_LICENSE_KEY {
    return @"STATUS_INVALID_LICENSE_KEY";
}

@end