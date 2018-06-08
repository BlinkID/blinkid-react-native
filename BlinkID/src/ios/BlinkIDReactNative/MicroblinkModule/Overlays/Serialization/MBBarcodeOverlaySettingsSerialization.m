//
//  MBBarcodeOverlaySettingsSerialization.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import "MBBarcodeOverlaySettingsSerialization.h"
#import "MBOverlaySerializationUtils.h"

@interface MBBarcodeOverlaySettingsSerialization ()

@property (nonatomic, weak) id<MBOverlayViewControllerDelegate> delegate;

@end

@implementation MBBarcodeOverlaySettingsSerialization

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"BarcodeOverlaySettings";
    }
    return self;
}

-(MBOverlayViewController *) createOverlayViewController:(NSDictionary *)jsonOverlaySettings recognizerCollection:(MBRecognizerCollection*)recognizerCollection delegate:(id<MBOverlayViewControllerDelegate>) delegate {
    // no settings deserialized at the moment
    MBBarcodeOverlaySettings *sett = [[MBBarcodeOverlaySettings alloc] init];
    self.delegate = delegate;
    [MBOverlaySerializationUtils extractCommonOverlaySettings:jsonOverlaySettings overlaySettings:sett];
    return [[MBBarcodeOverlayViewController alloc] initWithSettings:sett recognizerCollection:recognizerCollection delegate:self];
}

- (void)barcodeOverlayViewControllerDidFinishScanning:(nonnull MBBarcodeOverlayViewController *)barcodeOverlayViewController state:(MBRecognizerResultState)state {
    [self.delegate overlayViewControllerDidFinishScanning:barcodeOverlayViewController state:state];
}

- (void)barcodeOverlayViewControllerDidTapClose:(nonnull MBBarcodeOverlayViewController *)barcodeOverlayViewController {
    [self.delegate overlayDidTapClose:barcodeOverlayViewController];
}

@end
