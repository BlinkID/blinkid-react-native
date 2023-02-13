//
//  MBOverlayVCCreator.h
//
//  Created by DoDo on 08/06/2018.
//  Copyright © 2018 Microblink. All rights reserved.
//

#pragma once

#import "MBOverlayViewControllerDelegate.h"

#import <BlinkID/BlinkID.h>
#import <Foundation/Foundation.h>

@protocol MBOverlayVCCreator
@required

- (MBOverlayViewController * _Nullable)createOverlayViewController:(NSDictionary * _Nullable)jsonOverlaySettings recognizerCollection:(MBRecognizerCollection * _Nullable)recognizerCollection delegate:(id<MBOverlayViewControllerDelegate> _Nullable) delegate;

@property (nonatomic, nonnull, readonly) NSString *jsonName;

@end