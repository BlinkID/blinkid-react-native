//
//  MBRecognizerSerializers.h
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import <MicroBlink/MicroBlink.h>

#import <Foundation/Foundation.h>

@interface MBRecognizerSerializers : NSObject

+(instancetype) sharedInstance;

-(MBRecognizerCollection *) deserializeRecognizerCollection:(NSDictionary *)jsonRecognizerCollection;

@end
