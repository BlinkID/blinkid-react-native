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
    return [[MBDocumentVerificationOverlayViewController alloc] initWithSettings:sett recognizerCollection:recognizerCollection delegate:self];
}


- (void)documentVerificationOverlayViewControllerDidFinishScanning:(nonnull MBDocumentVerificationOverlayViewController *)documentVerificationOverlayViewController state:(MBRecognizerResultState)state {
    [self.delegate overlayViewControllerDidFinishScanning:documentVerificationOverlayViewController state:state];
}

- (void)documentVerificationOverlayViewControllerDidTapClose:(nonnull MBDocumentVerificationOverlayViewController *)documentVerificationOverlayViewController {
    [self.delegate overlayDidTapClose:documentVerificationOverlayViewController];
}

@end
