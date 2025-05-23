#import "BlinkidReactNative.h"
#import "BlinkidReactNative-Swift.h"

@implementation BlinkidReactNative {
  BlinkidReactNativeModule *moduleImplementation;
}

-(instancetype) init {
  self = [super init];
  if (self) {
    moduleImplementation = [BlinkidReactNativeModule new];
  }
  return self;
}

RCT_EXPORT_MODULE()

- (std::shared_ptr<facebook::react::TurboModule>)getTurboModule:
    (const facebook::react::ObjCTurboModule::InitParams &)params
{
    return std::make_shared<facebook::react::NativeBlinkidReactNativeSpecJSI>(params);
}


+ (NSDictionary *)dictionaryFromBlinkIdObject:(NSString *)jsonString {
    NSError *jsonError;
    NSData *data = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
    if (!data) return nil;

    NSDictionary *dict = [NSJSONSerialization JSONObjectWithData:data
                                                         options:NSJSONReadingMutableContainers
                                                           error:&jsonError];
    return dict;
}

- (void)performScan:(nonnull NSString *)blinkIdSdkSettings blinkIdSessionSettings:(nonnull NSString *)blinkIdSessionSettings classFilter:(nonnull NSString *)classFilter resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject {
  
    dispatch_async(dispatch_get_main_queue(), ^{
    UIViewController *rootViewController = [[[UIApplication sharedApplication] keyWindow] rootViewController];
      
      [self->moduleImplementation
       performScan: rootViewController
       blinkIdSdkSettings: [self createDictionaryFromBlinkIdObject: blinkIdSdkSettings]
       blinkIdSessionSettings: [self createDictionaryFromBlinkIdObject: blinkIdSessionSettings]
       classFilterSettings: [self createDictionaryFromBlinkIdObject: classFilter]
       onResolve:^(NSString * _Nonnull result) {
        resolve(@[result]);
      }
       onReject:^(NSString * _Nonnull error) {
        NSLog(@"Error obtained: %@", error);
        reject(@"BlinkIdIosError", error, nil);
      }];
    });
}

- (void)performDirectApiScan:(nonnull NSString *)blinkIdSdkSettings blinkIdSessionSettings:(nonnull NSString *)blinkIdSessionSettings firstImage:(nonnull NSString *)firstImage secondImage:(nonnull NSString *)secondImage resolve:(nonnull RCTPromiseResolveBlock)resolve reject:(nonnull RCTPromiseRejectBlock)reject { 
  [self->moduleImplementation
   performDirectApiScanWithBlinkIdSdkSettings: [self createDictionaryFromBlinkIdObject: blinkIdSdkSettings]
   blinkIdSessionSettings: [self createDictionaryFromBlinkIdObject: blinkIdSessionSettings]
   firstImage:firstImage
   secondImage:secondImage
   onResolve:^(NSString * _Nonnull result) {
    resolve(@[result]);
  } onReject:^(NSString * _Nonnull error) {
    NSLog(@"DirectAPI error obtained: %@", error);
    reject(@"BlinkIdIosError", error, nil);
  }];
}



- (NSDictionary *)createDictionaryFromBlinkIdObject:(NSString *)jsonString {
  NSError *jsonError;
  NSData *data = [jsonString dataUsingEncoding:NSUTF8StringEncoding];
  if (!data) return nil;

  NSDictionary *dict = [NSJSONSerialization JSONObjectWithData:data
                                                       options:NSJSONReadingMutableContainers
                                                         error:&jsonError];
  return dict;
}

@end
