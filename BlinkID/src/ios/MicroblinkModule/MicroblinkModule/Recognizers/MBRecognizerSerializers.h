#import "MBRecognizerWrapper.h"

#import <BlinkID/BlinkID.h>

#import <Foundation/Foundation.h>

@interface MBRecognizerSerializers : NSObject

+(instancetype) sharedInstance;

-(MBRecognizerCollection *) deserializeRecognizerCollection:(NSDictionary *)jsonRecognizerCollection;
-(id<MBRecognizerCreator>) recognizerCreatorForJson:(NSDictionary *)recognizerJson;

@end