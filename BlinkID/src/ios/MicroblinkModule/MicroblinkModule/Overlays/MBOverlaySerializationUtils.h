//
//  MBOverlaySerializationUtils.h
//  MicroblinkModule
//
//  Created by DoDo on 08/06/2018.
//  Copyright © 2018 Jura Skrlec. All rights reserved.
//

#import <MicroBlink/MicroBlink.h>
#import <Foundation/Foundation.h>

@interface MBOverlaySerializationUtils : NSObject

+(void) extractCommonOverlaySettings:(NSDictionary *)jsonOverlaySettings overlaySettings:(MBOverlaySettings *)overlaySettings;

@end
