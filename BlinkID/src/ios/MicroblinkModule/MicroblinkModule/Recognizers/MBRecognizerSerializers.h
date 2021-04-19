#import "MBRecognizerWrapper.h"

#import <Microblink/Microblink.h>

#import <Foundation/Foundation.h>

@interface MBRecognizerSerializers : NSObject

+(instancetype) sharedInstance;

-(MBRecognizerCollection *) deserializeRecognizerCollection:(NSDictionary *)jsonRecognizerCollection;
-(id<MBRecognizerCreator>) recognizerCreatorForJson:(NSDictionary *)recognizerJson;

@end