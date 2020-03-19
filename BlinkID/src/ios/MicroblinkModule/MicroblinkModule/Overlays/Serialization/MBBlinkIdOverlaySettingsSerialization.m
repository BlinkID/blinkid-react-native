//
//  MBBlinkIdOverlaySettingsSerialization.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import "MBBlinkIdOverlaySettingsSerialization.h"

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
        id backSideScanningTimeoutMilliseconds = [jsonOverlaySettings valueForKey:@"backSideScanningTimeoutMilliseconds"];
        if (backSideScanningTimeoutMilliseconds != nil) {
            sett.backSideScanningTimeout = [backSideScanningTimeoutMilliseconds doubleValue] / 1000.0;
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
