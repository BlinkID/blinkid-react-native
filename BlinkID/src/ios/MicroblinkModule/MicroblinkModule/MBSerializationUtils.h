//
//  MBSerializationUtils.h
//  BlinkIdDevDemo
//
//  Created by DoDo on 01/06/2018.
//

#import <MicroBlink/MicroBlink.h>
#import <Foundation/Foundation.h>

@interface MBSerializationUtils : NSObject

+(NSDictionary * _Nonnull) serializeNSDate:(NSDate * _Nullable) value;
+(NSDictionary * _Nonnull) serializeMBDateResult:(MBDateResult * _Nonnull) value;
+(NSString * _Nullable) encodeMBImage:(MBImage * _Nullable) image;
+(NSDictionary * _Nonnull)serializeCGPoint:(CGPoint) point;
+(NSDictionary * _Nonnull) serializeMBQuadrangle:(MBQuadrangle * _Nonnull) quad;

@end
