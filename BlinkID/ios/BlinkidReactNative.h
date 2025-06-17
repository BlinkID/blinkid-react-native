#import <BlinkidReactNativeSpec/BlinkidReactNativeSpec.h>

@interface BlinkidReactNative : NSObject <NativeBlinkidReactNativeSpec>
- (NSDictionary *)createDictionaryFromBlinkIdObject:(NSString *)jsonString;

@end
