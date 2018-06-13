#import "MBBarcodeRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBBarcodeRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"BarcodeRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBBarcodeRecognizer *recognizer = [[MBBarcodeRecognizer alloc] init];
    {
        id allowNullQuietZone = [jsonRecognizer valueForKey:@"allowNullQuietZone"];
        if (allowNullQuietZone != nil) {
            recognizer.allowNullQuietZone = [(NSNumber *)allowNullQuietZone boolValue];
        }
    }
    {
        id autoScaleDetection = [jsonRecognizer valueForKey:@"autoScaleDetection"];
        if (autoScaleDetection != nil) {
            recognizer.autoScaleDetection = [(NSNumber *)autoScaleDetection boolValue];
        }
    }
    {
        id readCode39AsExtendedData = [jsonRecognizer valueForKey:@"readCode39AsExtendedData"];
        if (readCode39AsExtendedData != nil) {
            recognizer.readCode39AsExtendedData = [(NSNumber *)readCode39AsExtendedData boolValue];
        }
    }
    {
        id scanAztec = [jsonRecognizer valueForKey:@"scanAztec"];
        if (scanAztec != nil) {
            recognizer.scanAztec = [(NSNumber *)scanAztec boolValue];
        }
    }
    {
        id scanCode128 = [jsonRecognizer valueForKey:@"scanCode128"];
        if (scanCode128 != nil) {
            recognizer.scanCode128 = [(NSNumber *)scanCode128 boolValue];
        }
    }
    {
        id scanCode39 = [jsonRecognizer valueForKey:@"scanCode39"];
        if (scanCode39 != nil) {
            recognizer.scanCode39 = [(NSNumber *)scanCode39 boolValue];
        }
    }
    {
        id scanDataMatrix = [jsonRecognizer valueForKey:@"scanDataMatrix"];
        if (scanDataMatrix != nil) {
            recognizer.scanDataMatrix = [(NSNumber *)scanDataMatrix boolValue];
        }
    }
    {
        id scanEAN13 = [jsonRecognizer valueForKey:@"scanEAN13"];
        if (scanEAN13 != nil) {
            recognizer.scanEAN13 = [(NSNumber *)scanEAN13 boolValue];
        }
    }
    {
        id scanEAN8 = [jsonRecognizer valueForKey:@"scanEAN8"];
        if (scanEAN8 != nil) {
            recognizer.scanEAN8 = [(NSNumber *)scanEAN8 boolValue];
        }
    }
    {
        id scanITF = [jsonRecognizer valueForKey:@"scanITF"];
        if (scanITF != nil) {
            recognizer.scanITF = [(NSNumber *)scanITF boolValue];
        }
    }
    {
        id scanInverse = [jsonRecognizer valueForKey:@"scanInverse"];
        if (scanInverse != nil) {
            recognizer.scanInverse = [(NSNumber *)scanInverse boolValue];
        }
    }
    {
        id scanPdf417 = [jsonRecognizer valueForKey:@"scanPdf417"];
        if (scanPdf417 != nil) {
            recognizer.scanPdf417 = [(NSNumber *)scanPdf417 boolValue];
        }
    }
    {
        id scanQR = [jsonRecognizer valueForKey:@"scanQR"];
        if (scanQR != nil) {
            recognizer.scanQR = [(NSNumber *)scanQR boolValue];
        }
    }
    {
        id scanUPCA = [jsonRecognizer valueForKey:@"scanUPCA"];
        if (scanUPCA != nil) {
            recognizer.scanUPCA = [(NSNumber *)scanUPCA boolValue];
        }
    }
    {
        id scanUPCE = [jsonRecognizer valueForKey:@"scanUPCE"];
        if (scanUPCE != nil) {
            recognizer.scanUPCE = [(NSNumber *)scanUPCE boolValue];
        }
    }
    {
        id scanUncertain = [jsonRecognizer valueForKey:@"scanUncertain"];
        if (scanUncertain != nil) {
            recognizer.scanUncertain = [(NSNumber *)scanUncertain boolValue];
        }
    }
    {
        id useSlowerThoroughScan = [jsonRecognizer valueForKey:@"useSlowerThoroughScan"];
        if (useSlowerThoroughScan != nil) {
            recognizer.useSlowerThoroughScan = [(NSNumber *)useSlowerThoroughScan boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBBarcodeRecognizer (JsonSerialization)
@end

@implementation MBBarcodeRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];
    [jsonResult setValue:[NSNumber numberWithInteger:(self.result.barcodeType + 1)] forKey:@"barcodeType"];
    [jsonResult setValue:[self.result.rawData base64EncodedStringWithOptions:NSDataBase64EncodingEndLineWithLineFeed] forKey:@"rawData"];
    [jsonResult setValue:self.result.stringData forKey:@"stringData"];
    [jsonResult setValue:[NSNumber numberWithBool:self.result.uncertain] forKey:@"uncertain"];

    return jsonResult;
}

@end