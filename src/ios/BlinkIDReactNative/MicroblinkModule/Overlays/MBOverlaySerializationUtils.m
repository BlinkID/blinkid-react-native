//
//  MBOverlaySerializationUtils.m
//  MicroblinkModule
//
//  Created by DoDo on 08/06/2018.
//  Copyright © 2018 Jura Skrlec. All rights reserved.
//

#import "MBOverlaySerializationUtils.h"

@implementation MBOverlaySerializationUtils

+(void) extractCommonOverlaySettings:(NSDictionary *)jsonOverlaySettings overlaySettings:(MBOverlaySettings *)overlaySettings {
    {
        id useFrontCamera = [jsonOverlaySettings objectForKey:@"useFrontCamera"];
        if (useFrontCamera != nil && [(NSNumber*)useFrontCamera boolValue]) {
            overlaySettings.cameraSettings.cameraType = PPCameraTypeFront;
        }
    }
    if ([overlaySettings isKindOfClass:[MBBaseOverlaySettings class]]) {
        MBBaseOverlaySettings *baseOverlaySettings = (MBBaseOverlaySettings*)overlaySettings;
        {
            id enableBeep = [jsonOverlaySettings objectForKey:@"enableBeep"];
            if (enableBeep != nil && [(NSNumber*)enableBeep boolValue]) {
                baseOverlaySettings.soundFilePath = @"PPBeep.wav";
            }
        }
    }
}

@end