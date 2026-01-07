#import <React/RCTBridgeModule.h>
#import <React/RCTEventEmitter.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <BlinkidReactNativeSpec/BlinkidReactNativeSpec.h>
#endif

@interface BlinkidReactNative : RCTEventEmitter <RCTBridgeModule>
@end

#ifdef RCT_NEW_ARCH_ENABLED
@interface BlinkidReactNative () <NativeBlinkidReactNativeSpec>
@end
#endif
