//
//  MBSuccessFrameGrabberRecognizerWrapper.m
//  MicroblinkModule
//
//  Created by DoDo on 15/06/2018.
//  Copyright © 2018 Jura Skrlec. All rights reserved.
//

#import "MBSuccessFrameGrabberRecognizerWrapper.h"

#import "MBRecognizerSerializers.h"
#import "MBSerializationUtils.h"

@implementation MBSuccessFrameGrabberRecognizerCreator

@synthesize jsonName = _jsonName;

-(instancetype) init {
    self = [super init];
    if (self) {
        _jsonName = @"SuccessFrameGrabberRecognizer";
    }
    return self;
}

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer {
    // first obtain slave recognizer
    NSDictionary *jsonSlaveRecognizer = [jsonRecognizer valueForKey:@"slaveRecognizer"];
    MBRecognizer *slaveRecognizer = [[[MBRecognizerSerializers sharedInstance] recognizerCreatorForJson:jsonSlaveRecognizer] createRecognizer:jsonSlaveRecognizer];

    return [[MBSuccessFrameGrabberRecognizer alloc] initWithRecognizer:slaveRecognizer];
}

@end

@interface MBSuccessFrameGrabberRecognizer (JsonSerialization)
@end

@implementation MBSuccessFrameGrabberRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult {
    NSMutableDictionary* jsonResult = (NSMutableDictionary*)[super serializeResult];

    [jsonResult setValue:[MBSerializationUtils encodeMBImage:self.result.successFrame] forKey:@"successFrame"];
    [jsonResult setValue:[self.slaveRecognizer serializeResult] forKey:@"slaveRecognizerResult"];

    return jsonResult;
}

@end
