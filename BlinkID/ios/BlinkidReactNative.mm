#import "BlinkidReactNative.h"
#import "BlinkidReactNative-Swift.h"

#ifdef RCT_NEW_ARCH_ENABLED
#import <BlinkidReactNativeSpec/BlinkidReactNativeSpec.h>
#endif

@implementation BlinkidReactNative {
  BlinkidReactNativeModule *moduleImplementation;
}

- (instancetype)init
{
  if (self = [super init]) {
    moduleImplementation = [BlinkidReactNativeModule new];
  }
  return self;
}

RCT_EXPORT_MODULE(BlinkidReactNative);

RCT_EXPORT_METHOD(loadBlinkIdSdk:(NSString *)blinkIdSdkSettings
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    [self->moduleImplementation loadSdk: [self createDictionaryFromBlinkIdObject:blinkIdSdkSettings] onResolve:^(NSString * _Nonnull) {
        resolve(@"");
    } onReject:^(NSString * _Nonnull error) {
        reject(@"BlinkIdIosError", error, nil);
    }];
}

RCT_EXPORT_METHOD(unloadBlinkIdSdk:(BOOL)deleteCachedResources
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    [self->moduleImplementation
     unloadSdk:deleteCachedResources
     onResolve:^(NSString * _Nonnull) {
        resolve(@"");
    } onReject:^(NSString * _Nonnull error) {
        reject(@"BlinkIdIosError", error, nil);
    }];
}

RCT_EXPORT_METHOD(performScan:(NSString *)blinkIdSdkSettings
                  blinkIdSessionSettings:(NSString *)blinkIdSessionSettings
                  blinkIdScanningUxSettings:(NSString *)blinkIdScanningUxSettings
                  classFilter:(NSString *)classFilter
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    dispatch_async(dispatch_get_main_queue(), ^{
        UIWindow *keyWindow = nil;
        
        for (UIWindowScene *scene in [UIApplication sharedApplication].connectedScenes) {
            if (scene.activationState == UISceneActivationStateForegroundActive &&
                [scene isKindOfClass:[UIWindowScene class]]) {
                for (UIWindow *window in scene.windows) {
                    if (window.isKeyWindow) {
                        keyWindow = window;
                        break;
                    }
                }
            }
            if (keyWindow) {
                break;
            }
        }
        
        [self->moduleImplementation
         performScan:keyWindow.rootViewController
         blinkIdSdkSettings:[self createDictionaryFromBlinkIdObject:blinkIdSdkSettings]
         blinkIdSessionSettings:[self createDictionaryFromBlinkIdObject:blinkIdSessionSettings]
         blinkIdScanningUxSettings:[self createDictionaryFromBlinkIdObject:blinkIdScanningUxSettings]
         classFilterSettings:[self createDictionaryFromBlinkIdObject:classFilter]
         onResolve:^(NSString * _Nonnull result) {
            resolve(@[result]);
        } onReject:^(NSString * _Nonnull error) {
            reject(@"BlinkIdIosError", error, nil);
        }];
    });
}

RCT_EXPORT_METHOD(performDirectApiScan:(NSString *)blinkIdSdkSettings
                  blinkIdSessionSettings:(NSString *)blinkIdSessionSettings
                  firstImage:(NSString *)firstImage
                  secondImage:(NSString *)secondImage
                  resolve:(RCTPromiseResolveBlock)resolve
                  reject:(RCTPromiseRejectBlock)reject)
{
    [self->moduleImplementation
     performDirectApiScanWithBlinkIdSdkSettings: [self createDictionaryFromBlinkIdObject: blinkIdSdkSettings]
     blinkIdSessionSettings: [self createDictionaryFromBlinkIdObject: blinkIdSessionSettings]
     firstImage:firstImage
     secondImage:secondImage
     onResolve:^(NSString * _Nonnull result) {
        resolve(@[result]);
    } onReject:^(NSString * _Nonnull error) {
        reject(@"BlinkIdIosError", error, nil);
    }];
}

#ifdef RCT_NEW_ARCH_ENABLED
- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
  return std::make_shared<facebook::react::NativeBlinkidReactNativeSpecJSI>(params);
}
#endif // RCT_NEW_ARCH_ENABLED

- (NSDictionary *)createDictionaryFromBlinkIdObject:(NSString *)jsonString
{
  NSError *jsonError;
  NSData *data = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
  if (!data) {
    return nil;
  }

  NSDictionary *dict = [NSJSONSerialization JSONObjectWithData:data
                                                       options:NSJSONReadingMutableContainers
                                                         error:&jsonError];
  return dict;
}

@end
