//
//  MBSerializationUtils.h
//  BlinkIdDevDemo
//
//  Created by DoDo on 01/06/2018.
//

#import <BlinkID/BlinkID.h>
#import <Foundation/Foundation.h>

@interface MBSerializationUtils : NSObject

+(NSDictionary * _Nonnull) serializeMBDate:(MBDate * _Nonnull) date;
+(NSString * _Nullable) encodeMBImage:(MBImage * _Nullable) image;
+(NSDictionary * _Nonnull)serializeCGPoint:(CGPoint) point;
+(NSDictionary * _Nonnull) serializeMBQuadrangle:(MBQuadrangle * _Nonnull) quad;
+(NSDictionary * _Nonnull)serializeCGRect:(CGRect) rect;
@end