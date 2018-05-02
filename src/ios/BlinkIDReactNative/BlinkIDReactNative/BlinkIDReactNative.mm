//
//  BlinkIDReactNative.m
//  BlinkIDReactNative
//
//  Created by Jura Skrlec on 12/04/2017.
//  Copyright © 2017 Microblink. All rights reserved.
//

#import <Foundation/Foundation.h>
#import "BlinkIDReactNative.h"
#import <React/RCTConvert.h>
#import <MicroBlink/MicroBlink.h>

@interface BlinkIDReactNative () <PPScanningDelegate>

@property (nonatomic, assign) BOOL enableBeep;

@property (nonatomic) PPCameraType cameraType;

@property (nonatomic, strong) NSDictionary* options;

@property (nonatomic, strong) RCTPromiseResolveBlock promiseResolve;

@property (nonatomic, strong) RCTPromiseRejectBlock promiseReject;

@property (nonatomic, strong) NSString* licenseKey;

@property (nonatomic) UIImage *scannedImageDewarped;

@property (nonatomic) UIImage *scannedImageSuccesful;

@property (nonatomic) UIImage *scannedImageFace;

@property (nonatomic) NSData *scannedImageFaceData;

@property (nonatomic) NSData *scannedImageSignatureData;

@property (nonatomic, strong) NSArray *recognizers;

@property (nonatomic) BOOL shouldReturnCroppedImage;

@property (nonatomic) BOOL shouldReturnSuccessfulImage;

@property (nonatomic) BOOL shouldReturnFaceImage;

@property (nonatomic) BOOL shouldReturnSignatureImage;

@end

// promise reject message codes
static NSString* const kErrorLicenseKeyDoesNotExists = @"ERROR_LICENSE_KEY_DOES_NOT_EXISTS";
static NSString* const kErrorCoordniatorDoesNotExists = @"COORDINATOR_DOES_NOT_EXISTS";
static NSString* const kStatusScanCanceled = @"STATUS_SCAN_CANCELED";

// js keys for scanning options
static NSString* const kOptionEnableBeepKey = @"enableBeep";
static NSString* const kOptionUseFrontCameraJsKey = @"useFrontCamera";
static NSString* const kOptionReturnCroppedImageJsKey = @"shouldReturnCroppedImage";
static NSString* const kOptionShouldReturnSuccessfulImageJsKey = @"shouldReturnSuccessfulImage";
static NSString* const kOptionReturnFaceImageJsKey = @"shouldReturnFaceImage";
static NSString* const kOptionReturnSignatureImageJsKey = @"shouldReturnSignatureImage";
static NSString* const kRecognizersArrayJsKey = @"recognizers";

// js keys for recognizer types
static NSString* const kRecognizerMRTDJsKey = @"RECOGNIZER_MRTD";
static NSString* const kRecognizerUSDLJsKey = @"RECOGNIZER_USDL";
static NSString* const kRecognizerEUDLJsKey = @"RECOGNIZER_EUDL";
static NSString* const kRecognizerNZDLJsKey = @"RECOGNIZER_NZDL";
static NSString* const kRecognizerMyKadJsKey = @"RECOGNIZER_MYKAD";
static NSString* const kRecognizerDocumentFaceJsKey = @"RECOGNIZER_DOCUMENT_FACE";
static NSString* const kRecognizerPDF417JsKey = @"RECOGNIZER_PDF417";

// js result keys
static NSString* const kResultList = @"resultList";
static NSString* const kResultImages = @"images";
static NSString* const kResultImageCropped = @"cropped";
static NSString* const kResultImageSuccessful = @"successful";
static NSString* const kResultImageFace = @"face";
static NSString* const kResultImageSignature = @"signature";
static NSString* const kResultType = @"resultType";
static NSString* const kFields = @"fields";

// result values for resultType
static NSString* const kMRTDResultType = @"MRTD result";
static NSString* const kUSDLResultType = @"USDL result";
static NSString* const kEUDLResultType = @"EUDL result";
static NSString* const kNZDLResultType = @"NZDL result";
static NSString* const kMyKadResultType = @"MyKad result";
static NSString* const kDocumentFaceResultType = @"DocumentFace result";
static NSString* const kPDF417ResultType = @"PDF417 result";

// recognizer result keys
static NSString* const kRaw = @"raw";
static NSString* const kMRTDDateOfBirth = @"DateOfBirth";
static NSString* const kMRTDDateOExpiry = @"DateOfExpiry";
static NSString* const kMyKadBirthDate = @"ownerBirthDate";
static NSString* const kNZDLFaceImage = @"NewZealandDLFront.Face.Image";
static NSString* const kNZDLSignatureImage = @"NewZealandDLFront.Signature.Image";
static NSString* const kNZDLDateOfBirth = @"NewZealandDLDateOfBirth.DateOfBirth";
static NSString* const kNZDLDateOfExpiry = @"NewZealandDLExpiryDate.ExpiryDate";
static NSString* const kNZDLDateOfIssue = @"NewZealandDLIssueDate.IssueDate";

// NSError Domain
static NSString* const MBErrorDomain = @"microblink.error";

@implementation BlinkIDReactNative

RCT_EXPORT_MODULE();

- (instancetype)init {
    if (self = [super init]) {
    }
    return self;
}

- (NSDictionary *)constantsToExport {
    NSMutableDictionary* constants = [NSMutableDictionary dictionary];
    [constants setObject:@"RECOGNIZER_MRTD" forKey:kRecognizerMRTDJsKey];
    [constants setObject:@"RECOGNIZER_USDL" forKey:kRecognizerUSDLJsKey];
    [constants setObject:@"RECOGNIZER_EUDL" forKey:kRecognizerEUDLJsKey];
    [constants setObject:@"RECOGNIZER_NZDL" forKey:kRecognizerNZDLJsKey];
    [constants setObject:@"RECOGNIZER_DOCUMENT_FACE" forKey:kRecognizerDocumentFaceJsKey];
    [constants setObject:@"RECOGNIZER_MYKAD" forKey:kRecognizerMyKadJsKey];
    [constants setObject:@"RECOGNIZER_PDF417" forKey:kRecognizerPDF417JsKey];
    [constants setObject:@"MRTD result" forKey:kMRTDResultType];
    [constants setObject:@"USDL result" forKey:kUSDLResultType];
    [constants setObject:@"EUDL result" forKey:kEUDLResultType];
    [constants setObject:@"NZDL result" forKey:kNZDLResultType];
    [constants setObject:@"MyKad result" forKey:kMyKadResultType];
    [constants setObject:@"PDF417 result" forKey:kPDF417ResultType];
    [constants setObject:@"DocumentFace result" forKey:kDocumentFaceResultType];
    return [NSDictionary dictionaryWithDictionary:constants];
}

RCT_REMAP_METHOD(scan, scan:(NSString *)key withOptions:(NSDictionary*)scanOptions resolver:(RCTPromiseResolveBlock)resolve rejecter:(RCTPromiseRejectBlock)reject) {
    if (key.length == 0) {
        NSDictionary *userInfo = @{
                                   NSLocalizedDescriptionKey: NSLocalizedString(@"Operation was unsuccessful.", nil),
                                   NSLocalizedFailureReasonErrorKey: NSLocalizedString(@"License key missing.", nil),
                                   NSLocalizedRecoverySuggestionErrorKey: NSLocalizedString(@"Have you checked your license key?", nil)
                                   };
        NSError *error = [NSError errorWithDomain:MBErrorDomain
                                             code:-57
                                         userInfo:userInfo];
        reject(kErrorLicenseKeyDoesNotExists, @"License key does not exists", error);
        return;    }
    else {
        self.licenseKey = key;
    }
    
    BOOL isFrontCamera = [[scanOptions valueForKey:kOptionUseFrontCameraJsKey] boolValue];
    if (!isFrontCamera) {
        self.cameraType = PPCameraTypeBack;
    } else {
        self.cameraType = PPCameraTypeFront;
    }

    self.enableBeep = [[scanOptions valueForKey:kOptionEnableBeepKey] boolValue];

    self.promiseResolve = resolve;
    self.promiseReject  = reject;
    
    self.options = scanOptions;
    self.recognizers = [scanOptions valueForKey:kRecognizersArrayJsKey];
    
    /** Instantiate the scanning coordinator */
    NSError *error;
    PPCameraCoordinator *coordinator = [self coordinatorWithError:&error];
    
    /** If scanning isn't supported, present an error */
    if (coordinator == nil) {
        NSDictionary *userInfo = @{
                                   NSLocalizedDescriptionKey: NSLocalizedString(@"Operation was unsuccessful.", nil),
                                   NSLocalizedFailureReasonErrorKey: NSLocalizedString(@"Camera coordinator is nil.", nil),
                                   NSLocalizedRecoverySuggestionErrorKey: NSLocalizedString(@"Have you checked creation of camera coordinator?", nil)
                                   };
        NSError *error = [NSError errorWithDomain:MBErrorDomain
                                             code:-57
                                         userInfo:userInfo];
        reject(kErrorCoordniatorDoesNotExists, @"Coordinator does not exists", error);
        
        return;
    }
    
    /** Allocate and present the scanning view controller */
    UIViewController<PPScanningViewController>* scanningViewController = [PPViewControllerFactory cameraViewControllerWithDelegate:self coordinator:coordinator error:nil];

    // allow rotation if VC is displayed as a modal view controller
    scanningViewController.autorotate = YES;
    scanningViewController.supportedOrientations = UIInterfaceOrientationMaskAll;
    
    UIViewController *rootViewController = [[[UIApplication sharedApplication] keyWindow] rootViewController];
    dispatch_sync(dispatch_get_main_queue(), ^{
        [rootViewController presentViewController:scanningViewController animated:YES completion:nil];
    });

}

#pragma mark - BlinkID specifics

/**
 * Method allocates and initializes the Scanning coordinator object.
 * Coordinator is initialized with settings for scanning
 *
 *  @param error Error object, if scanning isn't supported
 *
 *  @return initialized coordinator
 */
- (PPCameraCoordinator *)coordinatorWithError:(NSError**)error {
    /** 0. Check if scanning is supported */
    
    if ([PPCameraCoordinator isScanningUnsupportedForCameraType:self.cameraType error:error]) {
        return nil;
    }
    
    /** 1. Initialize the Scanning settings */
    
    // Initialize the scanner settings object. This initialize settings with all default values.
    PPSettings *settings = [[PPSettings alloc] init];
    
    self.shouldReturnCroppedImage = NO;
    self.shouldReturnSuccessfulImage = NO;
    self.shouldReturnFaceImage = NO;
    self.shouldReturnSignatureImage = NO;

    if ([[self.options valueForKey:kOptionShouldReturnSuccessfulImageJsKey] boolValue]) {
        settings.metadataSettings.successfulFrame = YES;
        self.shouldReturnSuccessfulImage = YES;
    }
    
    if ([[self.options valueForKey:kOptionReturnCroppedImageJsKey] boolValue]) {
        settings.metadataSettings.dewarpedImage = YES;
        self.shouldReturnCroppedImage = YES;
    }

    if ([[self.options valueForKey:kOptionReturnFaceImageJsKey] boolValue]) {
        settings.metadataSettings.dewarpedImage = YES;
        self.shouldReturnFaceImage = YES;
    }

    if ([[self.options valueForKey:kOptionReturnSignatureImageJsKey] boolValue]) {
        self.shouldReturnSignatureImage = YES;
    }

    settings.cameraSettings.cameraType = self.cameraType;
    
    self.scannedImageDewarped = nil;
    self.scannedImageSuccesful = nil;
    self.scannedImageFace = nil;
    self.scannedImageFaceData = nil;
    self.scannedImageSignatureData = nil;

    // Do not timeout
    settings.scanSettings.partialRecognitionTimeout = 0.0f;

    /** 2. Setup the license key */

    // Visit www.microblink.com to get the license key for your app
    settings.licenseSettings.licenseKey = self.licenseKey;
    
    
    /** 3. Set up what is being scanned. See detailed guides for specific use cases. */
    
    /**
     * Add all needed recognizers
     */
    
    if ([self shouldUseUsdlRecognizer]) {
        [settings.scanSettings addRecognizerSettings:[self usdlRecognizerSettings]];
    }
    
    if ([self shouldUseMrtdRecognizer]) {
        [settings.scanSettings addRecognizerSettings:[self mrtdRecognizerSettings]];
    }
    
    if ([self shouldUseEudlRecognizer]) {
        [settings.scanSettings addRecognizerSettings:[self eudlRecognizerSettingsWithCountry:PPEudlCountryAny]];
    }

    if ([self shouldUseNzdlRecognizer]) {
        [settings.scanSettings addRecognizerSettings:[self nzdlRecognizerSettings]];
    }

    if ([self shouldUseDocumentFaceRecognizer]) {
        [settings.scanSettings addRecognizerSettings:[self documentFaceRecognizerSettings]];
    }
    
    if ([self shouldUseMyKadRecognizer]) {
        [settings.scanSettings addRecognizerSettings:[self myKadRecognizerSettings]];
    }

    if ([self shouldUsePDF417Recognizer]) {
        [settings.scanSettings addRecognizerSettings:[self pdf417RecognizerSettings]];
    }

    /** 4. Initialize the Scanning Coordinator object */
    
    PPCameraCoordinator *coordinator = [[PPCameraCoordinator alloc] initWithSettings:settings];
    
    return coordinator;
}

#pragma mark - PPScanDelegate

- (void)scanningViewControllerUnauthorizedCamera:(UIViewController<PPScanningViewController> *)scanningViewController {
    // Add any logic which handles UI when app user doesn't allow usage of the phone's camera
}

- (void)scanningViewController:(UIViewController<PPScanningViewController> *)scanningViewController
                  didFindError:(NSError *)error {
    // Can be ignored. See description of the method
}

- (void)scanningViewControllerDidClose:(UIViewController<PPScanningViewController> *)scanningViewController {
    // As scanning view controller is presented full screen and modally, dismiss it
    if (self.promiseReject) {
        NSError *error = [NSError errorWithDomain:MBErrorDomain
                                             code:-58
                                         userInfo:nil];
        self.promiseReject(kStatusScanCanceled, @"Scanning has been canceled", error);
    }

    [self dismissScanningView];
}

-(void)scanningViewController:(UIViewController<PPScanningViewController> *)scanningViewController didOutputMetadata:(PPMetadata *)metadata {
    // Check if metadata obtained is image. You can set what type of image is outputed by setting different properties of PPMetadataSettings (currently, dewarpedImage is set at line 207)
    if ([metadata isKindOfClass:[PPImageMetadata class]]) {
        PPImageMetadata *imageMetadata = (PPImageMetadata *)metadata;
        PPImageMetadataType imageMetadataType = imageMetadata.imageType;
        if (imageMetadataType == PPImageMetadataTypeDewarpedImage && self.shouldReturnFaceImage == YES && [imageMetadata.name isEqualToString:[PPDocumentFaceRecognizerSettings ID_FACE]]) {
            self.scannedImageFace = imageMetadata.image;
        }
        else if (imageMetadataType == PPImageMetadataTypeDewarpedImage && self.shouldReturnCroppedImage == YES) {
            self.scannedImageDewarped = imageMetadata.image;
        }
        else if (imageMetadataType == PPImageMetadataTypeSuccessfulFrame && self.shouldReturnSuccessfulImage == YES) {
            self.scannedImageSuccesful = imageMetadata.image;
        }
    }
}

- (void)scanningViewController:(UIViewController<PPScanningViewController> *)scanningViewController
              didOutputResults:(NSArray<PPRecognizerResult*> *)results {
    
    // Here you process scanning results. Scanning results are given in the array of PPRecognizerResult objects.
    // first, pause scanning until we process all the results
    [scanningViewController pauseScanning];

    if (self.enableBeep) {
        [scanningViewController playScanSuccesSound];
    }

    [self returnResults:results];
}

- (void)scanningViewController:(UIViewController<PPScanningViewController> *)scanningViewController didFinishDetectionWithResult:(PPDetectorResult *)result {
    if (result) {
        NSLog(@"finished with result: %@", result);
    }
}

#pragma mark - Used Recognizers


- (BOOL)shouldUseUsdlRecognizer {
    return [self.recognizers containsObject:kRecognizerUSDLJsKey];
}

- (BOOL)shouldUseMrtdRecognizer {
    return [self.recognizers containsObject:kRecognizerMRTDJsKey];
}

- (BOOL)shouldUseEudlRecognizer {
    return [self.recognizers containsObject:kRecognizerEUDLJsKey];
}

- (BOOL)shouldUseNzdlRecognizer {
    return [self.recognizers containsObject:kRecognizerNZDLJsKey];
}

- (BOOL)shouldUseDocumentFaceRecognizer {
    return [self.recognizers containsObject:kRecognizerDocumentFaceJsKey];
}

- (BOOL)shouldUseMyKadRecognizer {
    return [self.recognizers containsObject:kRecognizerMyKadJsKey];
}

- (BOOL)shouldUsePDF417Recognizer {
    return [self.recognizers containsObject:kRecognizerPDF417JsKey];
}

#pragma mark - Utils

- (void)setDictionary:(NSMutableDictionary *)dict withUsdlResult:(PPUsdlRecognizerResult *)usdlResult {
    [dict setObject:[usdlResult getAllStringElements] forKey:kFields];
    [dict setObject:kUSDLResultType forKey:kResultType];
}

- (void)setDictionary:(NSMutableDictionary *)dict withMrtdRecognizerResult:(PPMrtdRecognizerResult *)mrtdResult {
    NSMutableDictionary *stringElements = [NSMutableDictionary dictionaryWithDictionary:[mrtdResult getAllStringElements]];
    [stringElements setObject:[mrtdResult rawDateOfBirth] forKey:kMRTDDateOfBirth];
    [stringElements setObject:[mrtdResult rawDateOfExpiry] forKey:kMRTDDateOExpiry];
    [dict setObject:stringElements forKey:kFields];
    [dict setObject:[mrtdResult mrzText] forKey:kRaw];
    [dict setObject:kMRTDResultType forKey:kResultType];
}

- (void)setDictionary:(NSMutableDictionary *)dict withEudlRecognizerResult:(PPEudlRecognizerResult *)eudlResult {
    [dict setObject:[eudlResult getAllStringElements] forKey:kFields];
    [dict setObject:kEUDLResultType forKey:kResultType];
}

- (void)setDictionary:(NSMutableDictionary *)dict withNzdlRecognizerResult:(PPNewZealandDLFrontRecognizerResult *)nzdlResult {
    if (self.shouldReturnFaceImage) {
        self.scannedImageFaceData = [nzdlResult getDataElement:kNZDLFaceImage];
    }

    if (self.shouldReturnSignatureImage) {
        self.scannedImageSignatureData = [nzdlResult getDataElement:kNZDLSignatureImage];
    }

    NSMutableDictionary *tmp = [NSMutableDictionary dictionaryWithDictionary:[nzdlResult getAllStringElements]];
    [tmp removeObjectForKey:kNZDLFaceImage];
    [tmp removeObjectForKey:kNZDLSignatureImage];
    PPDateResult *dateOfBirth = [nzdlResult getDateResultElement:kNZDLDateOfBirth];
    PPDateResult *dateOfExpiry = [nzdlResult getDateResultElement:kNZDLDateOfExpiry];
    PPDateResult *dateOfIssue = [nzdlResult getDateResultElement:kNZDLDateOfIssue];

    if (dateOfBirth) {
        [tmp setValue:dateOfBirth.originalDateString forKey:kNZDLDateOfBirth];
    }

    if (dateOfExpiry) {
        [tmp setValue:dateOfExpiry.originalDateString forKey:kNZDLDateOfExpiry];
    }

    if (dateOfIssue) {
        [tmp setValue:dateOfIssue.originalDateString forKey:kNZDLDateOfIssue];
    }

    [dict setObject:[NSDictionary dictionaryWithDictionary:tmp] forKey:kFields];
    [dict setObject:kNZDLResultType forKey:kResultType];
}

- (void)setDictionary:(NSMutableDictionary *)dict withDocumentFaceResult:(PPDocumentFaceRecognizerResult *)documentFaceResult {
    [dict setObject:[documentFaceResult getAllStringElements] forKey:kFields];
    [dict setObject:kDocumentFaceResultType forKey:kResultType];
}

- (void)setDictionary:(NSMutableDictionary *)dict withMyKadRecognizerResult:(PPMyKadFrontRecognizerResult *)myKadResult {
    NSMutableDictionary *stringElements = [NSMutableDictionary dictionaryWithDictionary:[myKadResult getAllStringElements]];
    [stringElements setObject:myKadResult.rawOwnerBirthDate forKey:kMyKadBirthDate];
    [dict setObject:stringElements forKey:kFields];
    [dict setObject:kMyKadResultType forKey:kResultType];
}

- (void)setDictionary:(NSMutableDictionary *)dict withPdf417Result:(PPPdf417RecognizerResult *)pdf417Result {
    [dict setObject:[pdf417Result getAllStringElements] forKey:kFields];
    [dict setObject:kPDF417ResultType forKey:kResultType];
}

- (void)returnResults:(NSArray *)results{
    NSMutableDictionary *resultDict = [[NSMutableDictionary alloc] init];

    NSMutableArray *resultArray = [[NSMutableArray alloc] init];
    
    for (PPRecognizerResult *result in results) {
        
        if ([result isKindOfClass:[PPUsdlRecognizerResult class]]) {
            PPUsdlRecognizerResult *usdlResult = (PPUsdlRecognizerResult *)result;
            
            NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
            [self setDictionary:dict withUsdlResult:usdlResult];
            
            [resultArray addObject:dict];
        }
        
        if ([result isKindOfClass:[PPMrtdRecognizerResult class]]) {
            PPMrtdRecognizerResult *mrtdDecoderResult = (PPMrtdRecognizerResult *)result;
            
            NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
            [self setDictionary:dict withMrtdRecognizerResult:mrtdDecoderResult];
            
            [resultArray addObject:dict];
        }
        
        if ([result isKindOfClass:[PPEudlRecognizerResult class]]) {
            PPEudlRecognizerResult *eudlDecoderResult = (PPEudlRecognizerResult *)result;
            
            NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
            [self setDictionary:dict withEudlRecognizerResult:eudlDecoderResult];
            
            [resultArray addObject:dict];
        }

        if ([result isKindOfClass:[PPNewZealandDLFrontRecognizerResult class]]) {
            PPNewZealandDLFrontRecognizerResult *nzdlDecoderResult = (PPNewZealandDLFrontRecognizerResult *)result;

            NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
            [self setDictionary:dict withNzdlRecognizerResult:nzdlDecoderResult];

            [resultArray addObject:dict];
        }

        if ([result isKindOfClass:[PPDocumentFaceRecognizerResult class]]) {
            PPDocumentFaceRecognizerResult *documentFaceResult = (PPDocumentFaceRecognizerResult *)result;
            
            NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
            [self setDictionary:dict withDocumentFaceResult:documentFaceResult];
            
            [resultArray addObject:dict];
        }
        
        if ([result isKindOfClass:[PPMyKadFrontRecognizerResult class]]) {
            PPMyKadFrontRecognizerResult *myKadDecoderResult = (PPMyKadFrontRecognizerResult *)result;
            
            NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
            [self setDictionary:dict withMyKadRecognizerResult:myKadDecoderResult];
            
            [resultArray addObject:dict];
        }

        if ([result isKindOfClass:[PPPdf417RecognizerResult class]]) {
            PPPdf417RecognizerResult *pdf417Result = (PPPdf417RecognizerResult *)result;

            NSMutableDictionary *dict = [[NSMutableDictionary alloc] init];
            [self setDictionary:dict withPdf417Result:pdf417Result];

            [resultArray addObject:dict];
        }
    }
    
    if ([resultArray count] > 0) {
        [resultDict setObject:resultArray forKey:kResultList];
    }

    NSMutableDictionary* images = [NSMutableDictionary dictionary];
    if (self.scannedImageDewarped && self.shouldReturnCroppedImage) {
        [images setObject:[self exportImage:self.scannedImageDewarped] forKey:kResultImageCropped];
    }

    if (self.scannedImageSuccesful && self.shouldReturnSuccessfulImage) {
        [images setObject:[self exportImage:self.scannedImageSuccesful] forKey:kResultImageSuccessful];
    }

    if (self.shouldReturnFaceImage) {
        if (self.scannedImageFaceData) {
            [images setObject:[self exportImageData:self.scannedImageFaceData] forKey:kResultImageFace];
        } else if (self.scannedImageFace) {
            [images setObject:[self exportImage:self.scannedImageFace] forKey:kResultImageFace];
        }
    }

    if (self.scannedImageSignatureData && self.shouldReturnSignatureImage) {
        [images setObject:[self exportImageData:self.scannedImageSignatureData] forKey:kResultImageSignature];
    }

    [resultDict setObject:[NSDictionary dictionaryWithDictionary:images] forKey:kResultImages];
    [self finishWithScanningResults:resultDict];
}

- (void) reset {
    self.promiseResolve = nil;
    self.promiseReject = nil;
    self.options = nil;
}


- (void) dismissScanningView {
    [self reset];
    [[self getRootViewController] dismissViewControllerAnimated:YES completion:nil];
}

- (void) finishWithScanningResults:(NSDictionary*) results {
    if (self.promiseResolve && results) {
        self.promiseResolve(results);
    }
    
    [self dismissScanningView];
}

- (UIViewController*) getRootViewController {
    UIViewController *rootViewController = [[[UIApplication sharedApplication] keyWindow] rootViewController];
    
    return rootViewController;
}

- (PPMrtdRecognizerSettings *)mrtdRecognizerSettings {
    
    PPMrtdRecognizerSettings *mrtdRecognizerSettings = [[PPMrtdRecognizerSettings alloc] init];
    
    /********* All recognizer settings are set to their default values. Change accordingly. *********/
    
    
    // Setting this will give you the chance to parse MRZ result, if Mrtd recognizer wasn't
    // successful in parsing (this can happen since MRZ isn't always formatted accoring to ICAO Document 9303 standard.
    // @see http://www.icao.int/Security/mrtd/pages/Document9303.aspx
    mrtdRecognizerSettings.allowUnparsedResults = NO;
    
    // This property is useful if you're at the same time obtaining Dewarped image metadata, since it allows you to obtain dewarped and
    // cropped
    // images of MRTD documents. Dewarped images are returned to scanningViewController:didOutputMetadata: callback,
    // as PPImageMetadata objects with name @"MRTD"
    
    mrtdRecognizerSettings.dewarpFullDocument = self.shouldReturnCroppedImage;

    return mrtdRecognizerSettings;
}


- (PPEudlRecognizerSettings *)eudlRecognizerSettingsWithCountry:(PPEudlCountry)country {
    
    PPEudlRecognizerSettings *eudlRecognizerSettings = [[PPEudlRecognizerSettings alloc] initWithEudlCountry:country];
    
    /********* All recognizer settings are set to their default values. Change accordingly. *********/
    
    /**
     * If YES, document issue date will be extracted
     * Set this to NO if youre not interested in this data to speed up the scanning process!
     */
    eudlRecognizerSettings.extractIssueDate = YES;
    
    /**
     * If YES, document expiry date will be extracted
     * Set this to NO if youre not interested in this data to speed up the scanning process!
     */
    eudlRecognizerSettings.extractExpiryDate = YES;
    
    /**
     * If YES, owner's address will be extracted
     * Set this to NO if youre not interested in this data to speed up the scanning process!
     */
    eudlRecognizerSettings.extractAddress = YES;
    
    // This property is useful if you're at the same time obtaining Dewarped image metadata, since it allows you to obtain dewarped and
    // cropped
    // images of MRTD documents. Dewarped images are returned to scanningViewController:didOutputMetadata: callback,
    // as PPImageMetadata objects with name @"MRTD"
    
    eudlRecognizerSettings.showFullDocument = self.shouldReturnCroppedImage;
    
    return eudlRecognizerSettings;
}

- (PPNewZealandDLFrontRecognizerSettings *)nzdlRecognizerSettings {

    PPNewZealandDLFrontRecognizerSettings *nzdlRecognizerSettings = [[PPNewZealandDLFrontRecognizerSettings alloc] init];

    /********* All recognizer settings are set to their default values. Change accordingly. *********/

    /**
     * If YES, document issue date will be extracted
     * Set this to NO if youre not interested in this data to speed up the scanning process!
     */
    nzdlRecognizerSettings.extractIssueDate = YES;

    /**
     * If YES, owner's address will be extracted
     * Set this to NO if youre not interested in this data to speed up the scanning process!
     */
    nzdlRecognizerSettings.extractAddress = YES;

    /**
     * Sets whether face photo from ID card should be sent to didOutputMetadata method of scanDelegate object.
     * If you want to recieve this image, be sure to enable dewarpedImage in MetadataSettings.
     *
     * Default: NO
     */
    nzdlRecognizerSettings.displayFacePhoto = self.shouldReturnFaceImage;

    /**
     * Sets whether signature photo of ID card should be sent to didOutputMetadata method of scanDelegate object.
     * If you want to recieve this image, be sure to enable dewarpedImage in MetadataSettings.
     *
     * Default: NO
     */
    nzdlRecognizerSettings.displaySignaturePhoto = self.shouldReturnSignatureImage;

    /**
     * Sets whether full image of ID card should be sent to didOutputMetadata method of scanDelegate object.
     * If you want to recieve this image, be sure to enable dewarpedImage in MetadataSettings.
     *
     * Default: NO
     */
    nzdlRecognizerSettings.displayFullDocumentImage = self.shouldReturnSuccessfulImage;

    /**
     * If YES, document expiry date will be extracted
     * Set this to NO if youre not interested in this data to speed up the scanning process!
     */
    nzdlRecognizerSettings.extractExpiryDate = YES;
    return nzdlRecognizerSettings;
}

- (PPUsdlRecognizerSettings *)usdlRecognizerSettings {
    
    PPUsdlRecognizerSettings *usdlRecognizerSettings = [[PPUsdlRecognizerSettings alloc] init];
    
    /********* All recognizer settings are set to their default values. Change accordingly. *********/
    
    /**
     * Set this to YES to scan even barcode not compliant with standards
     * For example, malformed PDF417 barcodes which were incorrectly encoded
     * Use only if necessary because it slows down the recognition process
     */
    usdlRecognizerSettings.scanUncertain = NO;
    
    /**
     * Set this to YES to scan barcodes which don't have quiet zone (white area) around it
     * Disable if you need a slight speed boost
     */
    usdlRecognizerSettings.allowNullQuietZone = YES;
    
    return usdlRecognizerSettings;
}

- (PPDocumentFaceRecognizerSettings *)documentFaceRecognizerSettings {
    
    PPDocumentFaceRecognizerSettings *documentFaceReconizerSettings = [[PPDocumentFaceRecognizerSettings alloc] init];
    
    // This property is useful if you're at the same time obtaining Dewarped image metadata, since it allows you to obtain dewarped and
    // cropped
    // images of MRTD documents. Dewarped images are returned to scanningViewController:didOutputMetadata: callback,
    // as PPImageMetadata objects with name @"MRTD"
    
    documentFaceReconizerSettings.returnFaceImage = self.shouldReturnFaceImage;

    documentFaceReconizerSettings.returnFullDocument = self.shouldReturnCroppedImage;
    
    return documentFaceReconizerSettings;
}

- (PPMyKadFrontRecognizerSettings *)myKadRecognizerSettings {
    
    PPMyKadFrontRecognizerSettings *myKadRecognizerSettings = [[PPMyKadFrontRecognizerSettings alloc] init];
    
    myKadRecognizerSettings.showFullDocument = self.shouldReturnCroppedImage;
    
    return myKadRecognizerSettings;
}

- (PPPdf417RecognizerSettings *)pdf417RecognizerSettings {

    PPPdf417RecognizerSettings *pdf417RecognizerSettings = [[PPPdf417RecognizerSettings alloc] init];

    /********* All recognizer settings are set to their default values. Change accordingly. *********/

    /**
     * Set this to YES to scan even barcode not compliant with standards
     * For example, malformed PDF417 barcodes which were incorrectly encoded
     * Use only if necessary because it slows down the recognition process
     */
    pdf417RecognizerSettings.scanUncertain = NO;

    /**
     * Set this to YES to scan barcodes which don't have quiet zone (white area) around it
     * Disable if you need a slight speed boost
     */
    pdf417RecognizerSettings.allowNullQuietZone = YES;

    return pdf417RecognizerSettings;
}

- (NSDictionary*) exportImage:(UIImage*)image {
    NSData *imageData = UIImageJPEGRepresentation(image, 0.9f);
    NSMutableDictionary* imageInfo = [NSMutableDictionary dictionary];
    NSString *encodedImage = [self dataToBase64:imageData];
    [imageInfo setObject:@(image.size.width) forKey:@"width"];
    [imageInfo setObject:@(image.size.height) forKey:@"height"];
    [imageInfo setObject:encodedImage forKey:@"base64"];
    return [NSDictionary dictionaryWithDictionary:imageInfo];
}

- (NSDictionary*) exportImageData:(NSData*)imageData {
    NSMutableDictionary* imageInfo = [NSMutableDictionary dictionary];
    NSString *encodedImage = [self dataToBase64:imageData];
    [imageInfo setObject:encodedImage forKey:@"base64"];
    return [NSDictionary dictionaryWithDictionary:imageInfo];
}

- (NSString*) dataToBase64:(NSData*)data {
    return [data base64EncodedStringWithOptions:NSDataBase64Encoding64CharacterLineLength];
}

@end
