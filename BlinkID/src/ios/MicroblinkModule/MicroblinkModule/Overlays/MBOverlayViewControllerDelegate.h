//
//  MBOverlayViewControllerDelegate.h
//
//  Created by DoDo on 01/06/2018.
//

#pragma once

#import <BlinkID/BlinkID.h>

@protocol MBOverlayViewControllerDelegate<NSObject>
@required

- (void)overlayViewControllerDidFinishScanning:(MBOverlayViewController *)overlayViewController state:(MBRecognizerResultState)state;
- (void)overlayDidTapClose:(MBOverlayViewController *)overlayViewController;

@end