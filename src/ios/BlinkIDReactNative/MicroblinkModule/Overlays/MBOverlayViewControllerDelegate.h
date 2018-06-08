//
//  MBOverlayViewControllerDelegate.h
//
//  Created by DoDo on 01/06/2018.
//

#pragma once

#import <MicroBlink/MicroBlink.h>

@protocol MBOverlayViewControllerDelegate
@required

- (void)overlayViewControllerDidFinishScanning:(MBOverlayViewController *)overlayViewController state:(MBRecognizerResultState)state;
- (void)overlayDidTapClose:(MBOverlayViewController *)overlayViewController;

@end
