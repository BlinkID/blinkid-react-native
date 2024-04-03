//
//  MBSerializationUtils.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 01/06/2018.
//

#import "MBSerializationUtils.h"

@implementation MBSerializationUtils

+ (NSDictionary *)serializeMBDate:(MBDate *) date {
    return @{
        @"day" : @(date.day),
        @"month" : @(date.month),
        @"year" : @(date.year),
        @"originalDateString" : date.originalDateString,
        @"isFilledByDomainKnowledge" : [NSNumber numberWithBool:date.isFilledByDomainKnowledge],
    };
}

+(NSString *) encodeMBImage:(MBImage * _Nullable) image {
    const int COMPRESSED_IMAGE_QUALITY = 90;

    if (image != nil) {
        NSData *imageData = UIImageJPEGRepresentation(image.image, COMPRESSED_IMAGE_QUALITY / 100.f);
        return [imageData base64EncodedStringWithOptions:0];
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

+(NSDictionary *)serializeCGRect:(CGRect) rect {
    NSDictionary *rectDictionaty = [NSDictionary new];
    if (!CGRectIsNull(rect)) {
      rectDictionaty =  @{
            @"x" : [NSNumber numberWithFloat:rect.origin.x],
            @"y" : [NSNumber numberWithFloat:rect.origin.y],
            @"height": [NSNumber numberWithFloat:rect.size.height],
            @"width": [NSNumber numberWithFloat:rect.size.width],
        };
    }
    return rectDictionaty;
}

@end