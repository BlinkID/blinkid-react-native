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

#import "jsinspector-modern/tracing/CdpTracing.h"
#import "jsinspector-modern/tracing/EventLoopTaskReporter.h"
#import "jsinspector-modern/tracing/InstanceTracingProfile.h"
#import "jsinspector-modern/tracing/PerformanceTracer.h"
#import "jsinspector-modern/tracing/ProfileTreeNode.h"
#import "jsinspector-modern/tracing/RuntimeSamplingProfile.h"
#import "jsinspector-modern/tracing/RuntimeSamplingProfileTraceEventSerializer.h"
#import "jsinspector-modern/tracing/TraceEvent.h"
#import "jsinspector-modern/tracing/TraceEventProfile.h"

FOUNDATION_EXPORT double jsinspector_modern_tracingVersionNumber;
FOUNDATION_EXPORT const unsigned char jsinspector_modern_tracingVersionString[];

