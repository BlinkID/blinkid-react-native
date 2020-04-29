//
//  MBOverlayViewControllerDelegate.h
//
//  Created by DoDo on 01/06/2018.
//

#pragma once

#import <MicroBlink/MicroBlink.h>

@protocol MBOverlayViewControllerDelegate<NSObject>
@required

- (void)overlayViewControllerDidFinishScanning:(MBOverlayViewController *)overlayViewController state:(MBRecognizerResultState)state;
- (void)overlayDidTapClose:(MBOverlayViewController *)overlayViewController;

@optional
- (void)overlayViewControllerDidFinishScanning:(MBOverlayViewController *)overlayViewController highResImage:(MBImage *)highResImage state:(MBRecognizerResultState)state;

@end
