//
//  MBBlinkIDSerializationUtils.h
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import <MicroBlink/MicroBlink.h>

#import <Foundation/Foundation.h>

@interface MBBlinkIDSerializationUtils : NSObject

+(NSDictionary *) serializeMrzResult:(MBMrzResult *)mrzResult;

@end
