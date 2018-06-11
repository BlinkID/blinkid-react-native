'use strict';

import { Platform, NativeModules } from 'react-native';

import { RecognizerResultState } from './recognizer'

const BlinkIDNative = Platform.select({
      ios: NativeModules.BlinkIDIos,
      android: NativeModules.BlinkIDAndroid
})

/**
 * This exposes the appropriate native BlinkID module module as a JS module, based on 
 * detected platvorm: Android or iOS. This has a
 * function 'scan' which takes the following parameters:
 * 1. Object overlaySettings: instance of OverlaySettings, contains settings for desired camera overlay
 * 2. RecognizerCollection recognizerCollection: object containing recognizers to use for scanning
 * 3. String licenseKey: BlinkID license key bount to application ID for Android or iOS. To obtain
 *                       valid license key, please visit http://microblink.com/login or
 *                       contact us at http://help.microblink.com
 */
class BlinkIDWrapper {
      async scanWithCamera(overlaySettings, recognizerCollection, licenseKey) {
            try {
                  var bla = NativeModules;
                  console.log(bla);
                  const nativeResults = await BlinkIDNative.scanWithCamera(overlaySettings, recognizerCollection, licenseKey);
                  if (nativeResults.length != recognizerCollection.recognizerArray.length) {
                        console.log("INTERNAL ERROR: native plugin returned wrong number of results!");
                        return [];
                  } else {
                        let results = [];
                        for (let i = 0; i < nativeResults.length; ++i) {
                              // native plugin must ensure types match
                              // recognizerCollection.recognizerArray[i].result = recognizerCollection.recognizerArray[i].createResultFromNative(nativeResults[i]);

                              // unlike Cordova, ReactNative does not allow mutation of user-provided recognizers, so we need to 
                              // return results and let user handle them manually.
                              let result = recognizerCollection.recognizerArray[i].createResultFromNative(nativeResults[i]);
                              if (result.resultState != RecognizerResultState.empty) {
                                    results.push(result);
                              }      
                        }
                        return results;
                  }
            } catch (error) {
                  console.log(error);
                  return [];
            }
      }
}

export var BlinkID = new BlinkIDWrapper();

import { Recognizer } from './recognizer'

/**
 * Represents a collection of recognizer objects.
 */
export class RecognizerCollection {
      /**
       * 
       * @param recognizerArray Array of recognizer objects that will be used for recognition. Must not be empty!
       */
      constructor(recognizerArray) {
            /** Array of recognizer objects that will be used for recognition */
            this.recognizerArray = recognizerArray;
            /** 
             * Whether or not it is allowed for multiple recognizers to process the same image.
             * If not, then first recognizer that will be successful in processing the image will
             * end the processing chain and other recognizers will not get the chance to process 
             * that image.
             */
            this.allowMultipleResults = false;
            /** Number of miliseconds after first non-empty result becomes available to end scanning with a timeout */
            this.milisecondsBeforeTimeout = 10000;

            if (!(this.recognizerArray instanceof Array)) {
                  throw new Error("recognizerArray must be array of Recognizer objects!");
            }
            // ensure every element in array is Recognizer
            for (var i = 0; i < this.recognizerArray.length; ++i) {
                  if (!(this.recognizerArray[i] instanceof Recognizer )) {
                        throw new Error( "Each element in recognizerArray must be instance of Recognizer" );
                  }
            }
      }
}

export { RecognizerResultState } from './recognizer'
export * from './types'

// export overlays that can be used
export * from './overlays/barcodeOverlays'
export * from './overlays/blinkidOverlays'

// export recognizers that can be used and their results
export * from './recognizers/australiaDLBackSideRecognizer'
export * from './recognizers/australiaDLFrontSideRecognizer'
export * from './recognizers/austriaCombinedRecognizer'
export * from './recognizers/austriaIDBackSideRecognizer'
export * from './recognizers/austriaIDFrontSideRecognizer'
export * from './recognizers/austriaPassportRecognizer'
export * from './recognizers/barcodeRecognizer'
export * from './recognizers/colombiaIDBackSideRecognizer'
export * from './recognizers/colombiaIDFrontSideRecognizer'
export * from './recognizers/croatiaCombinedRecognizer'
export * from './recognizers/croatiaIDBackSideRecognizer'
export * from './recognizers/croatiaIDFrontSideRecognizer'
export * from './recognizers/czechiaCombinedRecognizer'
export * from './recognizers/czechiaIDBackSideRecognizer'
export * from './recognizers/czechiaIDFrontSideRecognizer'
export * from './recognizers/documentFaceRecognizer'
export * from './recognizers/eUDLRecognizer'
export * from './recognizers/egyptIDFrontRecognizer'
export * from './recognizers/germanyCombinedRecognizer'
export * from './recognizers/germanyIDBackSideRecognizer'
export * from './recognizers/germanyIDFrontSideRecognizer'
export * from './recognizers/germanyOldIDRecognizer'
export * from './recognizers/germanyPassportRecognizer'
export * from './recognizers/hongKongIDFrontRecognizer'
export * from './recognizers/iKadRecognizer'
export * from './recognizers/indonesiaIDFrontRecognizer'
export * from './recognizers/jordanCombinedRecognizer'
export * from './recognizers/jordanIDBackRecognizer'
export * from './recognizers/jordanIDFrontRecognizer'
export * from './recognizers/mRTDCombinedRecognizer'
export * from './recognizers/mRTDRecognizer'
export * from './recognizers/malaysiaDLFrontRecognizer'
export * from './recognizers/myKadBackRecognizer'
export * from './recognizers/myKadFrontRecognizer'
export * from './recognizers/myTenteraRecognizer'
export * from './recognizers/newZealandDLFrontRecognizer'
export * from './recognizers/pdf417Recognizer'
export * from './recognizers/polandCombinedRecognizer'
export * from './recognizers/polandIDBackSideRecognizer'
export * from './recognizers/polandIDFrontSideRecognizer'
export * from './recognizers/romaniaIDFrontRecognizer'
export * from './recognizers/serbiaCombinedRecognizer'
export * from './recognizers/serbiaIDBackRecognizer'
export * from './recognizers/serbiaIDFrontRecognizer'
export * from './recognizers/simNumberRecognizer'
export * from './recognizers/singaporeCombinedRecognizer'
export * from './recognizers/singaporeIDBackRecognizer'
export * from './recognizers/singaporeIDFrontRecognizer'
export * from './recognizers/slovakiaCombinedRecognizer'
export * from './recognizers/slovakiaIDBackRecognizer'
export * from './recognizers/slovakiaIDFrontRecognizer'
export * from './recognizers/sloveniaCombinedRecognizer'
export * from './recognizers/sloveniaIDBackRecognizer'
export * from './recognizers/sloveniaIDFrontRecognizer'
export * from './recognizers/switzerlandIDBackRecognizer'
export * from './recognizers/switzerlandIDFrontRecognizer'
export * from './recognizers/switzerlandPassportRecognizer'
export * from './recognizers/unitedArabEmiratesIDBackRecognizer'
export * from './recognizers/unitedArabEmiratesIDFrontRecognizer'
export * from './recognizers/vinRecognizer'
export * from './recognizers/usdlRecognizer'
