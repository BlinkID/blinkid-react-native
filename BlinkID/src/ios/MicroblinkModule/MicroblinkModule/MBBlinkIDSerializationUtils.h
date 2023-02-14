//
//  MBBlinkIDSerializationUtils.h
//  BlinkIdDevDemo
//
//  Created by DoDo on 04/06/2018.
//

#import <BlinkID/BlinkID.h>

#import <Foundation/Foundation.h>

@interface MBBlinkIDSerializationUtils : NSObject

+(NSDictionary * _Nonnull) serializeMrzResult:(MBMrzResult * _Nonnull)mrzResult;
+(MBImageExtensionFactors) deserializeMBImageExtensionFactors:(NSDictionary * _Nullable)jsonExtensionFactors;
+(NSDictionary * _Nonnull) serializeDriverLicenseDetailedInfo:(MBDriverLicenseDetailedInfo * _Nonnull)driverLicenseDetailedInfo;
+(NSDictionary * _Nonnull) serializeBarcodeDriverLicenseDetailedInfo:(MBBarcodeDriverLicenseDetailedInfo * _Nonnull)driverLicenseDetailedInfo;
+(NSDictionary * _Nonnull) serializeDataMatchResult:(MBDataMatchResult * _Nonnull)dataMatchResult;
+(NSDictionary * _Nonnull) serializeFieldState:(MBFieldState * _Nonnull)fieldState;
+(NSDictionary * _Nonnull) serializeClassInfo:(MBClassInfo * _Nonnull)classInfo;
+(NSDictionary * _Nonnull) serializeVizResult:(MBVizResult * _Nonnull)vizResult;
+(NSDictionary * _Nonnull) serializeBarcodeResult:(MBBarcodeResult * _Nonnull)barcodeResult;
+(NSDictionary * _Nonnull) serializeImageAnalysisResult:(MBImageAnalysisResult * _Nonnull)imageAnalysisResult;
+(MBRecognitionModeFilter * _Nonnull) deserializeMBRecognitionModeFilter:(NSDictionary * _Nullable)jsonRecognitionModeFilter;
+(NSDictionary * _Nonnull) serializeBarcodeElements:(MBBarcodeElements * _Nonnull)extendedElements;
+(NSArray<NSString *> * _Nonnull) serializeBarcodeElementsValues:(MBBarcodeElements * _Nonnull)extendedElements;
+ (NSDictionary * _Nonnull)serializeAdditionalProcessingInfo:(MBAdditionalProcessingInfo * _Nullable)additionalProcessingInfo;
+ (NSDictionary * _Nonnull)serializeMBDate:(MBDate * _Nonnull)date;

@end