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
        id autoScaleDetection = [jsonRecognizer valueForKey:@"autoScaleDetection"];
        if (autoScaleDetection != nil) {
            recognizer.autoScaleDetection = [(NSNumber *)autoScaleDetection boolValue];
        }
    }
    {
        id nullQuietZoneAllowed = [jsonRecognizer valueForKey:@"nullQuietZoneAllowed"];
        if (nullQuietZoneAllowed != nil) {
            recognizer.nullQuietZoneAllowed = [(NSNumber *)nullQuietZoneAllowed boolValue];
        }
    }
    {
        id readCode39AsExtendedData = [jsonRecognizer valueForKey:@"readCode39AsExtendedData"];
        if (readCode39AsExtendedData != nil) {
            recognizer.readCode39AsExtendedData = [(NSNumber *)readCode39AsExtendedData boolValue];
        }
    }
    {
        id scanAztecCode = [jsonRecognizer valueForKey:@"scanAztecCode"];
        if (scanAztecCode != nil) {
            recognizer.scanAztecCode = [(NSNumber *)scanAztecCode boolValue];
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
        id scanEan13 = [jsonRecognizer valueForKey:@"scanEan13"];
        if (scanEan13 != nil) {
            recognizer.scanEan13 = [(NSNumber *)scanEan13 boolValue];
        }
    }
    {
        id scanEan8 = [jsonRecognizer valueForKey:@"scanEan8"];
        if (scanEan8 != nil) {
            recognizer.scanEan8 = [(NSNumber *)scanEan8 boolValue];
        }
    }
    {
        id scanInverse = [jsonRecognizer valueForKey:@"scanInverse"];
        if (scanInverse != nil) {
            recognizer.scanInverse = [(NSNumber *)scanInverse boolValue];
        }
    }
    {
        id scanItf = [jsonRecognizer valueForKey:@"scanItf"];
        if (scanItf != nil) {
            recognizer.scanItf = [(NSNumber *)scanItf boolValue];
        }
    }
    {
        id scanPdf417 = [jsonRecognizer valueForKey:@"scanPdf417"];
        if (scanPdf417 != nil) {
            recognizer.scanPdf417 = [(NSNumber *)scanPdf417 boolValue];
        }
    }
    {
        id scanQrCode = [jsonRecognizer valueForKey:@"scanQrCode"];
        if (scanQrCode != nil) {
            recognizer.scanQrCode = [(NSNumber *)scanQrCode boolValue];
        }
    }
    {
        id scanUncertain = [jsonRecognizer valueForKey:@"scanUncertain"];
        if (scanUncertain != nil) {
            recognizer.scanUncertain = [(NSNumber *)scanUncertain boolValue];
        }
    }
    {
        id scanUpca = [jsonRecognizer valueForKey:@"scanUpca"];
        if (scanUpca != nil) {
            recognizer.scanUpca = [(NSNumber *)scanUpca boolValue];
        }
    }
    {
        id scanUpce = [jsonRecognizer valueForKey:@"scanUpce"];
        if (scanUpce != nil) {
            recognizer.scanUpce = [(NSNumber *)scanUpce boolValue];
        }
    }
    {
        id slowerThoroughScan = [jsonRecognizer valueForKey:@"slowerThoroughScan"];
        if (slowerThoroughScan != nil) {
            recognizer.slowerThoroughScan = [(NSNumber *)slowerThoroughScan boolValue];
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