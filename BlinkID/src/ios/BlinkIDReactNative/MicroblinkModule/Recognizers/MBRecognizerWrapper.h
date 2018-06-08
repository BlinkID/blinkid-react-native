//
//  MBRecognizerWrapper.h
//  BlinkIdDevDemo
//
//  Created by DoDo on 01/06/2018.
//

#pragma once

#import <MicroBlink/MicroBlink.h>

/** Object that knows how to create recognizer from JSON */
@protocol MBRecognizerCreator
@required

-(MBRecognizer *) createRecognizer:(NSDictionary*) jsonRecognizer;

@property (nonatomic, nonnull, readonly) NSString* jsonName;

@end

/** Category on MBRecognizer that adds support writing its result to JSON */

@interface MBRecognizer (JsonSerialization)

-(NSDictionary *) serializeResult;

@end
