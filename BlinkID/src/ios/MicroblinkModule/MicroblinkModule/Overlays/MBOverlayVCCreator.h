//
//  MBOverlayVCCreator.h
//  MicroblinkModule
//
//  Created by DoDo on 08/06/2018.
//  Copyright © 2018 Microblink. All rights reserved.
//

#pragma once

#import "MBOverlayViewControllerDelegate.h"

#import <MicroBlink/MicroBlink.h>
#import <Foundation/Foundation.h>

@protocol MBOverlayVCCreator
@required

-(MBOverlayViewController *) createOverlayViewController:(NSDictionary *)jsonOverlaySettings recognizerCollection:(MBRecognizerCollection*)recognizerCollection delegate:(id<MBOverlayViewControllerDelegate>) delegate;

@property (nonatomic, nonnull, readonly) NSString *jsonName;

@end
