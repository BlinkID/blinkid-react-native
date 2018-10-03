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
            overlaySettings.cameraSettings.cameraType = MBCameraTypeFront;
        }
    }
    {
        id language = [jsonOverlaySettings objectForKey:@"language"];
        if (language != nil && language != NSNull.null) {
            id country = [jsonOverlaySettings objectForKey:@"country"];
            if (country && country != NSNull.null) {
                overlaySettings.language = [[(NSString *)language stringByAppendingString:@"-" ] stringByAppendingString:(NSString *)country];
            } else {
                overlaySettings.language = (NSString *)language;
            }
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

    if ([overlaySettings isKindOfClass:[MBDocumentOverlaySettings class]]) {
        MBDocumentOverlaySettings *docOverlaySettings = (MBDocumentOverlaySettings*)overlaySettings;
        {
            id tooltipText = [jsonOverlaySettings objectForKey:@"tooltipText"];
            if (tooltipText != nil && tooltipText != NSNull.null) {
                docOverlaySettings.tooltipText = (NSString *)tooltipText;
            }
        }
    }

    if ([overlaySettings isKindOfClass:[MBDocumentVerificationOverlaySettings class]]) {
        MBDocumentVerificationOverlaySettings *docVerOverlaySettings = (MBDocumentVerificationOverlaySettings*)overlaySettings;
        {
            id firstSideInstructions = [jsonOverlaySettings objectForKey:@"firstSideInstructions"];
            if (firstSideInstructions != nil && firstSideInstructions != NSNull.null) {
                docVerOverlaySettings.firstSideInstructions = (NSString *)firstSideInstructions;
            }
        }

        {
            id secondSideInstructions = [jsonOverlaySettings objectForKey:@"secondSideInstructions"];
            if (secondSideInstructions != nil && secondSideInstructions != NSNull.null) {
                docVerOverlaySettings.secondSideInstructions = (NSString *)secondSideInstructions;
            }
        }

        {
            id firstSideSplashMessage = [jsonOverlaySettings objectForKey:@"firstSideSplashMessage"];
            if (firstSideSplashMessage != nil && firstSideSplashMessage != NSNull.null) {
                docVerOverlaySettings.firstSideSplashMessage = (NSString *)firstSideSplashMessage;
            }
        }

        {
            id secondSideSplashMessage = [jsonOverlaySettings objectForKey:@"secondSideSplashMessage"];
            if (secondSideSplashMessage != nil && secondSideSplashMessage != NSNull.null) {
                docVerOverlaySettings.secondSideSplashMessage = (NSString *)secondSideSplashMessage;
            }
        }
    }
}

@end
