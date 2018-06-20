//
//  MBSerializationUtils.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 01/06/2018.
//

#import "MBSerializationUtils.h"

@implementation MBSerializationUtils

+(NSDictionary *) serializeDay:(NSInteger)day month:(NSInteger)month year:(NSInteger)year {
    return @{
      @"day" : [NSNumber numberWithInteger:day],
      @"month" : [NSNumber numberWithInteger:month],
      @"year" : [NSNumber numberWithInteger:year]
    };
}

+(NSDictionary *) serializeNSDate:(NSDate*) value {
    NSDateComponents *components = [[NSCalendar currentCalendar] components:NSCalendarUnitDay | NSCalendarUnitMonth | NSCalendarUnitYear fromDate:value];
    return [MBSerializationUtils serializeDay:components.day month:components.month year:components.year];
}

+(NSDictionary *) serializeMBDateResult:(MBDateResult *) value {
    return [MBSerializationUtils serializeDay:value.day month:value.month year:value.year];
}

+(NSString *) encodeMBImage:(MBImage * _Nullable) image {
    const int COMPRESSED_IMAGE_QUALITY = 90;

    if (image != nil) {
        NSData *imageData = UIImageJPEGRepresentation(image.image, COMPRESSED_IMAGE_QUALITY / 100.f);
        return [imageData base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed];
    } else {
        return nil;
    }
}

+(NSDictionary *)serializeCGPoint:(CGPoint) point {
    return @{
        @"x" : [NSNumber numberWithFloat:point.x],
        @"y" : [NSNumber numberWithFloat:point.y]
    };
}

+(NSDictionary *) serializeMBQuadrangle:(MBQuadrangle *) quad {
    return @{
        @"upperLeft" : [MBSerializationUtils serializeCGPoint:quad.upperLeft],
        @"upperRight" : [MBSerializationUtils serializeCGPoint:quad.upperRight],
        @"lowerLeft" : [MBSerializationUtils serializeCGPoint:quad.lowerLeft],
        @"lowerRight" : [MBSerializationUtils serializeCGPoint:quad.lowerRight]
    };
}

@end
