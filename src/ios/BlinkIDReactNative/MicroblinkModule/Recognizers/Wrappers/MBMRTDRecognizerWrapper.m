//
//  MBCroatiaIDFrontRecognizerWrapper.m
//  BlinkIdDevDemo
//
//  Created by DoDo on 01/06/2018.
//

#import "MBMRTDRecognizerWrapper.h"
#import "MBSerializationUtils.h"
#import "MBBlinkIDSerializationUtils.h"

@implementation MBMRTDRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"MRTDRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    MBMrtdRecognizer *recognizer = [[MBMrtdRecognizer alloc] init];

    {
        id returnFullDocumentImage = [jsonRecognizer valueForKey:@"returnFullDocumentImage"];
        if (returnFullDocumentImage != nil) {
            recognizer.saveFullDocumentImage = [(NSNumber *)returnFullDocumentImage boolValue];
        }
    }

    return recognizer;
}

@end

@interface MBMrtdRecognizer (JsonSerialization)
@end

@implementation MBMrtdRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];

    [jsonResult setValue:[MBBlinkIDSerializationUtils serializeMRZResult:self.result.mrzResult] forKey:@"MRZResult"];
    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.fullDocumentImage] forKey:@"fullDocumentImage"];

    return jsonResult;
}

@end
