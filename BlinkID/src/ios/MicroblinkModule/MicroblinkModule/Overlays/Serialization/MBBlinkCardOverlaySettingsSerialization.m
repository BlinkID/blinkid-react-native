//
//  MBBlinkCardOverlaySettingsSerialization.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import "MBBlinkCardOverlaySettingsSerialization.h"

@interface MBBlinkCardOverlaySettingsSerialization ()

@property (nonatomic, weak) id<MBOverlayViewControllerDelegate> delegate;

@end

@implementation MBBlinkCardOverlaySettingsSerialization

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"BlinkCardOverlaySettings";
    }
    return self;
}

-(MBOverlayViewController *) createOverlayViewController:(NSDictionary *)jsonOverlaySettings recognizerCollection:(MBRecognizerCollection*)recognizerCollection delegate:(id<MBOverlayViewControllerDelegate>) delegate {
    // no settings deserialized at the moment
    MBBlinkCardOverlaySettings *sett = [[MBBlinkCardOverlaySettings alloc] init];
    self.delegate = delegate;

    {
        id glareMessage = [jsonOverlaySettings valueForKey:@"glareMessage"];
        if (glareMessage != nil) {
            sett.glareStatusMessage = (NSString *)glareMessage;
        }
    }

    return [[MBBlinkCardOverlayViewController alloc] initWithSettings:sett recognizerCollection:recognizerCollection delegate:self];
}


- (void)blinkCardOverlayViewControllerDidFinishScanning:(nonnull MBBlinkCardOverlayViewController *)blinkCardOverlayViewController state:(MBRecognizerResultState)state {
    [self.delegate overlayViewControllerDidFinishScanning:blinkCardOverlayViewController state:state];
}

- (void)blinkCardOverlayViewControllerDidTapClose:(nonnull MBBlinkCardOverlayViewController *)blinkCardOverlayViewController {
    [self.delegate overlayDidTapClose:blinkCardOverlayViewController];
}

@end
