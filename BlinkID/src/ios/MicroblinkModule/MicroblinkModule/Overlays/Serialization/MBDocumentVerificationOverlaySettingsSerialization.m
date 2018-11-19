//
//  MBDocumentVerificationOverlaySettingsSerialization.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import "MBDocumentVerificationOverlaySettingsSerialization.h"
#import "MBOverlaySerializationUtils.h"

@interface MBDocumentVerificationOverlaySettingsSerialization ()

@property (nonatomic, weak) id<MBOverlayViewControllerDelegate> delegate;

@end

@implementation MBDocumentVerificationOverlaySettingsSerialization

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"DocumentVerificationOverlaySettings";
    }
    return self;
}

-(MBOverlayViewController *) createOverlayViewController:(NSDictionary *)jsonOverlaySettings recognizerCollection:(MBRecognizerCollection*)recognizerCollection delegate:(id<MBOverlayViewControllerDelegate>) delegate {
    // no settings deserialized at the moment
    MBDocumentVerificationOverlaySettings *sett = [[MBDocumentVerificationOverlaySettings alloc] init];
    self.delegate = delegate;
    [MBOverlaySerializationUtils extractCommonOverlaySettings:jsonOverlaySettings overlaySettings:sett];
    
    {
        id firstSideSplashMessage = [jsonOverlaySettings valueForKey:@"firstSideSplashMessage"];
        if (firstSideSplashMessage != nil) {
            sett.firstSideSplashMessage = (NSString *)firstSideSplashMessage;
        }
    }
    
    {
        id secondSideSplashMessage = [jsonOverlaySettings valueForKey:@"secondSideSplashMessage"];
        if (secondSideSplashMessage != nil) {
            sett.secondSideSplashMessage = (NSString *)secondSideSplashMessage;
        }
    }
    
    {
        id scanningDoneSplashMessage = [jsonOverlaySettings valueForKey:@"scanningDoneSplashMessage"];
        if (scanningDoneSplashMessage != nil) {
            sett.scanningDoneSplashMessage = (NSString *)scanningDoneSplashMessage;
        }
    }
    
    {
        id firstSideInstructions = [jsonOverlaySettings valueForKey:@"firstSideInstructions"];
        if (firstSideInstructions != nil) {
            sett.firstSideInstructions = (NSString *)firstSideInstructions;
        }
    }
    
    {
        id secondSideInstructions = [jsonOverlaySettings valueForKey:@"secondSideInstructions"];
        if (secondSideInstructions != nil) {
            sett.secondSideInstructions = (NSString *)secondSideInstructions;
        }
    }
    
    {
        id glareMessage = [jsonOverlaySettings valueForKey:@"glareMessage"];
        if (glareMessage != nil) {
            sett.glareMessage = (NSString *)glareMessage;
        }
    }
    
    return [[MBDocumentVerificationOverlayViewController alloc] initWithSettings:sett recognizerCollection:recognizerCollection delegate:self];
}


- (void)documentVerificationOverlayViewControllerDidFinishScanning:(nonnull MBDocumentVerificationOverlayViewController *)documentVerificationOverlayViewController state:(MBRecognizerResultState)state {
    [self.delegate overlayViewControllerDidFinishScanning:documentVerificationOverlayViewController state:state];
}

- (void)documentVerificationOverlayViewControllerDidTapClose:(nonnull MBDocumentVerificationOverlayViewController *)documentVerificationOverlayViewController {
    [self.delegate overlayDidTapClose:documentVerificationOverlayViewController];
}

@end
