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

+ (NSDictionary *)serializeMBDateResult:(MBDateResult *) value {
    NSMutableDictionary *dict = [MBSerializationUtils serializeDay:value.day month:value.month year:value.year].mutableCopy;
    [dict setValue:[MBSerializationUtils serializeMBStringResult:value.originalDateStringResult] forKey:@"originalDateStringResult"];
    [dict setValue:[NSNumber numberWithBool:value.isFilledByDomainKnowledge] forKey:@"isFilledByDomainKnowledge"];

    return dict;
}

+ (NSDictionary *)serializeMBStringResult:(MBStringResult *) value {
    NSMutableDictionary *dict = [NSMutableDictionary dictionary];
    [dict setValue:[value valueForAlphabetType:MBAlphabetTypeLatin] forKey:@"latin"];
    [dict setValue:[value valueForAlphabetType:MBAlphabetTypeArabic] forKey:@"arabic"];
    [dict setValue:[value valueForAlphabetType:MBAlphabetTypeCyrillic] forKey:@"cyrillic"];
    [dict setValue:value.description forKey:@"description"];
    
    NSMutableDictionary *location = [NSMutableDictionary dictionary];
    [location setValue:[MBSerializationUtils serializeCGRect:[value locationForAlphabetType:MBAlphabetTypeLatin]] forKey:@"latin"];
    [location setValue:[MBSerializationUtils serializeCGRect:[value locationForAlphabetType:MBAlphabetTypeArabic]] forKey:@"arabic"];
    [location setValue:[MBSerializationUtils serializeCGRect:[value locationForAlphabetType:MBAlphabetTypeCyrillic]] forKey:@"cyrillic"];
    [dict setValue:location forKey:@"location"];
    
    NSMutableDictionary *side = [NSMutableDictionary dictionary];
    [side setValue:[NSNumber numberWithInteger:[value sideForAlphabetType:MBAlphabetTypeLatin]] forKey:@"latin"];
    [side setValue:[NSNumber numberWithInteger:[value sideForAlphabetType:MBAlphabetTypeArabic]] forKey:@"arabic"];
    [side setValue:[NSNumber numberWithInteger:[value sideForAlphabetType:MBAlphabetTypeCyrillic]] forKey:@"cyrillic"];
    [dict setValue:side forKey:@"side"];
    
    return dict;
}

+(NSNumber *)serializeMBSide:(MBSide) value {
    if (value == MBSideNone) {
        return nil;
    }
    return [NSNumber numberWithLong:value - 1];
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