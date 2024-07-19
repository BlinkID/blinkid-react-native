//
//  MBBlinkIdOverlaySettingsSerialization.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import "MBBlinkIdOverlaySettingsSerialization.h"
#import "MBOverlaySerializationUtils.h"

@interface MBBlinkIdOverlaySettingsSerialization ()

@property (nonatomic, weak) id<MBOverlayViewControllerDelegate> delegate;

@end

@implementation MBBlinkIdOverlaySettingsSerialization

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"BlinkIdOverlaySettings";
    }
    return self;
}

-(MBOverlayViewController *) createOverlayViewController:(NSDictionary *)jsonOverlaySettings recognizerCollection:(MBRecognizerCollection*)recognizerCollection delegate:(id<MBOverlayViewControllerDelegate>) delegate {
    // no settings deserialized at the moment
    MBBlinkIdOverlaySettings *sett = [[MBBlinkIdOverlaySettings alloc] init];
    self.delegate = delegate;
    [MBOverlaySerializationUtils extractCommonOverlaySettings:jsonOverlaySettings overlaySettings:sett];

    {
        id requireDocumentSidesDataMatch = [jsonOverlaySettings valueForKey:@"requireDocumentSidesDataMatch"];
        if (requireDocumentSidesDataMatch != nil) {
            sett.requireDocumentSidesDataMatch = [requireDocumentSidesDataMatch boolValue];
        }
    }

    {
        id showNotSupportedDialog = [jsonOverlaySettings valueForKey:@"showNotSupportedDialog"];
        if (showNotSupportedDialog != nil) {
            sett.showNotSupportedDialog = [showNotSupportedDialog boolValue];
        }
    }

    {
        id showFlashlightWarning = [jsonOverlaySettings valueForKey:@"showFlashlightWarning"];
        if (showFlashlightWarning != nil) {
            sett.showFlashlightWarning = [showFlashlightWarning boolValue];
        }
    }

    {
        id backSideScanningTimeoutMilliseconds = [jsonOverlaySettings valueForKey:@"backSideScanningTimeoutMilliseconds"];
        if (backSideScanningTimeoutMilliseconds != nil) {
            sett.backSideScanningTimeout = [backSideScanningTimeoutMilliseconds doubleValue] / 1000.0;
        }
    }
    
    {
        id firstSideInstructionsText = [jsonOverlaySettings valueForKey:@"firstSideInstructionsText"];
        if (firstSideInstructionsText != nil) {
            sett.firstSideInstructionsText = (NSString *)firstSideInstructionsText;
        }
    }

    {
        id flipInstructions = [jsonOverlaySettings valueForKey:@"flipInstructions"];
        if (flipInstructions != nil) {
            sett.flipInstructions = (NSString *)flipInstructions;
        }
    }

    {
        id errorMoveCloser = [jsonOverlaySettings valueForKey:@"errorMoveCloser"];
        if (errorMoveCloser != nil) {
            sett.errorMoveCloser = (NSString *)errorMoveCloser;
        }
    }

    {
        id errorMoveFarther = [jsonOverlaySettings valueForKey:@"errorMoveFarther"];
        if (errorMoveFarther != nil) {
            sett.errorMoveFarther = (NSString *)errorMoveFarther;
        }
    }

    {
        id sidesNotMatchingTitle = [jsonOverlaySettings valueForKey:@"sidesNotMatchingTitle"];
        if (sidesNotMatchingTitle != nil) {
            sett.sidesNotMatchingTitle = (NSString *)sidesNotMatchingTitle;
        }
    }

    {
        id sidesNotMatchingMessage = [jsonOverlaySettings valueForKey:@"sidesNotMatchingMessage"];
        if (sidesNotMatchingMessage != nil) {
            sett.sidesNotMatchingMessage = (NSString *)sidesNotMatchingMessage;
        }
    }
    
    {
        id dataMismatchTitle = [jsonOverlaySettings valueForKey:@"dataMismatchTitle"];
        if (dataMismatchTitle != nil) {
            sett.dataMismatchTitle = (NSString *)dataMismatchTitle;
        }
    }

    {
        id dataMismatchMessage = [jsonOverlaySettings valueForKey:@"dataMismatchMessage"];
        if (dataMismatchMessage != nil) {
            sett.dataMismatchMessage = (NSString *)dataMismatchMessage;
        }
    }

    {
        id unsupportedDocumentTitle = [jsonOverlaySettings valueForKey:@"unsupportedDocumentTitle"];
        if (unsupportedDocumentTitle != nil) {
            sett.unsupportedDocumentTitle = (NSString *)unsupportedDocumentTitle;
        }
    }

    {
        id unsupportedDocumentMessage = [jsonOverlaySettings valueForKey:@"unsupportedDocumentMessage"];
        if (unsupportedDocumentMessage != nil) {
            sett.unsupportedDocumentMessage = (NSString *)unsupportedDocumentMessage;
        }
    }

    {
        id recognitionTimeoutTitle = [jsonOverlaySettings valueForKey:@"recognitionTimeoutTitle"];
        if (recognitionTimeoutTitle != nil) {
            sett.recognitionTimeoutTitle = (NSString *)recognitionTimeoutTitle;
        }
    }

    {
        id recognitionTimeoutMessage = [jsonOverlaySettings valueForKey:@"recognitionTimeoutMessage"];
        if (recognitionTimeoutMessage != nil) {
            sett.recognitionTimeoutMessage = (NSString *)recognitionTimeoutMessage;
        }
    }

    {
        id retryButtonText = [jsonOverlaySettings valueForKey:@"retryButtonText"];
        if (retryButtonText != nil) {
            sett.retryButtonText = (NSString *)retryButtonText;
        }
    }

    {
        id errorDocumentTooCloseToEdge = [jsonOverlaySettings valueForKey:@"errorDocumentTooCloseToEdge"];
        if (errorDocumentTooCloseToEdge != nil) {
            sett.errorDocumentTooCloseToEdge = (NSString *)errorDocumentTooCloseToEdge;
        }
    }
    
    {
        id scanBarcodeText = [jsonOverlaySettings valueForKey:@"scanBarcodeText"];
        if (scanBarcodeText != nil) {
            sett.scanBarcodeText = (NSString *)scanBarcodeText;
        }
    }
    
    {
        id errorMandatoryFieldMissing = [jsonOverlaySettings valueForKey:@"errorDocumentNotFullyVisible"];
        if (errorMandatoryFieldMissing != nil) {
            sett.errorMandatoryFieldMissing = (NSString *)errorMandatoryFieldMissing;
        }
    }
    
    {
        id showOnboardingInfo = [jsonOverlaySettings valueForKey:@"showOnboardingInfo"];
        if (showOnboardingInfo != nil) {
            sett.showOnboardingInfo = [showOnboardingInfo boolValue];
        }
    }
    
    {
        id showIntroductionDialog = [jsonOverlaySettings valueForKey:@"showIntroductionDialog"];
        if (showIntroductionDialog != nil) {
            sett.showIntroductionDialog = [showIntroductionDialog boolValue];
        }
    }
    
    {
        id onboardingButtonTooltipDelay = [jsonOverlaySettings valueForKey:@"onboardingButtonTooltipDelay"];
        if (onboardingButtonTooltipDelay != nil) {
            sett.onboardingButtonTooltipDelay = [onboardingButtonTooltipDelay doubleValue] / 1000.0;
        }
    }
    
    {
        id showMandatoryFieldsMissing = [jsonOverlaySettings valueForKey: @"showMandatoryFieldsMissing"];
        if (showMandatoryFieldsMissing != nil) {
            sett.defineSpecificMissingMandatoryFields = [showMandatoryFieldsMissing boolValue];
        }
    }
    
    {
        id showTorchButton = [jsonOverlaySettings valueForKey: @"showTorchButton"];
        if (showTorchButton != nil) {
            sett.displayTorchButton = [showTorchButton boolValue];
        }
    }
    
    {
        id showCancelButton = [jsonOverlaySettings valueForKey: @"showCancelButton"];
        if (showCancelButton != nil) {
            sett.displayCancelButton = [showCancelButton boolValue];
        }
    }
    
    {
        id iOSCameraResolutionPreset = [jsonOverlaySettings valueForKey: @"iosCameraResolutionPreset"];
        if (iOSCameraResolutionPreset != nil) {
            sett.cameraSettings.cameraPreset = [iOSCameraResolutionPreset integerValue];
        }
    }
    
    {
        id errorBlurDetected = [jsonOverlaySettings valueForKey:@"errorBlurDetected"];
        if (errorBlurDetected != nil) {
            sett.blurDetectedMessage = (NSString *)errorBlurDetected;
        }
    }
    
    {
        id errorGlareDetected = [jsonOverlaySettings valueForKey:@"errorGlareDetected"];
        if (errorGlareDetected != nil) {
            sett.glareDetectedMessage = (NSString *)errorGlareDetected;
        }
    }

    return [[MBBlinkIdOverlayViewController alloc] initWithSettings:sett recognizerCollection:recognizerCollection delegate:self];
}


- (void)blinkIdOverlayViewControllerDidFinishScanning:(nonnull MBBlinkIdOverlayViewController *)blinkIdOverlayViewController state:(MBRecognizerResultState)state {
    [self.delegate overlayViewControllerDidFinishScanning:blinkIdOverlayViewController state:state];
}

- (void)blinkIdOverlayViewControllerDidTapClose:(nonnull MBBlinkIdOverlayViewController *)blinkIdOverlayViewController {
    [self.delegate overlayDidTapClose:blinkIdOverlayViewController];
}

@end