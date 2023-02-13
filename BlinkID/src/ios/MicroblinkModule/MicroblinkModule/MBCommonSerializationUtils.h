//
//  MBBlinkIDSerializationUtils.h
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import <BlinkID/BlinkID.h>

#import <Foundation/Foundation.h>

@interface MBCommonSerializationUtils : NSObject

+(MBImageExtensionFactors) deserializeMBImageExtensionFactors:(NSDictionary * _Nullable)jsonExtensionFactors;

@end