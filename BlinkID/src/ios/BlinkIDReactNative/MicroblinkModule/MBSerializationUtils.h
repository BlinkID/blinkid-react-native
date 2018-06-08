//
//  MBSerializationUtils.h
//  BlinkIdDevDemo
//
//  Created by DoDo on 01/06/2018.
//

#import <MicroBlink/MicroBlink.h>
#import <Foundation/Foundation.h>

@interface MBSerializationUtils : NSObject

+(NSDictionary *) serializeNSDate:(NSDate*) value;
+(NSDictionary *) serializeMBDateResult:(MBDateResult *) value;
+(NSString *) encodeMBImage:(MBImage * _Nullable) image;

@end
