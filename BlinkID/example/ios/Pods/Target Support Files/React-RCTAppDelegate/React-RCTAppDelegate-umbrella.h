#ifdef __OBJC__
#import <UIKit/UIKit.h>
#else
#ifndef FOUNDATION_EXPORT
#if defined(__cplusplus)
#define FOUNDATION_EXPORT extern "C"
#else
#define FOUNDATION_EXPORT extern
#endif
#endif
#endif

#import "RCTAppDelegate.h"
#import "RCTAppSetupUtils.h"
#import "RCTArchConfiguratorProtocol.h"
#import "RCTDefaultReactNativeFactoryDelegate.h"
#import "RCTDependencyProvider.h"
#import "RCTJSRuntimeConfiguratorProtocol.h"
#import "RCTReactNativeFactory.h"
#import "RCTRootViewFactory.h"
#import "RCTUIConfiguratorProtocol.h"

FOUNDATION_EXPORT double React_RCTAppDelegateVersionNumber;
FOUNDATION_EXPORT const unsigned char React_RCTAppDelegateVersionString[];

