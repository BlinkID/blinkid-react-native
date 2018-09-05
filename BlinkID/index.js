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
 * 3. String license: BlinkID base64 license key bound to application ID for Android or iOS. To obtain
 *                       valid license key, please visit http://microblink.com/login or
 *                       contact us at http://help.microblink.com
 *
 *    OR
 *
 *    Object license: containing:
 *               - mandatory parameter 'licenseKey': base64 license key bound to application ID
 *                       for Android or iOS. To obtain valid license key, please visit
 *                       http://microblink.com/login or contact us at http://help.microblink.com
 *               - optioanl parameter 'licensee' when license for multiple apps is used
 *               - optional flag 'showTimeLimitedLicenseKeyWarning' which indicates
 *                  whether warning for time limited license key will be shown
 *        in format
 *  {
 *      licenseKey: '<base64iOSLicense or base64AndroidLicense>',
 *      licensee: String,
 *      showTimeLimitedLicenseKeyWarning: Boolean
 *  }
 */
class BlinkIDWrapper {
      async scanWithCamera(overlaySettings, recognizerCollection, license) {
            try {
                  var bla = NativeModules;
                  console.log(bla);
                  var licenseObject = license;
                  if (typeof license === 'string' || license instanceof String) {
                      licenseObject = { licenseKey: license };
                  }
                  const nativeResults = await BlinkIDNative.scanWithCamera(overlaySettings, recognizerCollection, licenseObject);
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
export * from './recognizers/successFrameGrabberRecognizer'
export * from './recognizers/australiaDlBackRecognizer'
export * from './recognizers/australiaDlFrontRecognizer'
export * from './recognizers/austriaCombinedRecognizer'
export * from './recognizers/austriaIdBackRecognizer'
export * from './recognizers/austriaIdFrontRecognizer'
export * from './recognizers/austriaPassportRecognizer'
export * from './recognizers/barcodeRecognizer'
export * from './recognizers/colombiaIdBackRecognizer'
export * from './recognizers/colombiaIdFrontRecognizer'
export * from './recognizers/croatiaCombinedRecognizer'
export * from './recognizers/croatiaIdBackRecognizer'
export * from './recognizers/croatiaIdFrontRecognizer'
export * from './recognizers/cyprusIdBackRecognizer'
export * from './recognizers/cyprusIdFrontRecognizer'
export * from './recognizers/czechiaCombinedRecognizer'
export * from './recognizers/czechiaIdBackRecognizer'
export * from './recognizers/czechiaIdFrontRecognizer'
export * from './recognizers/documentFaceRecognizer'
export * from './recognizers/egyptIdFrontRecognizer'
export * from './recognizers/eudlRecognizer'
export * from './recognizers/germanyCombinedRecognizer'
export * from './recognizers/germanyIdBackRecognizer'
export * from './recognizers/germanyIdFrontRecognizer'
export * from './recognizers/germanyOldIdRecognizer'
export * from './recognizers/germanyPassportRecognizer'
export * from './recognizers/hongKongIdFrontRecognizer'
export * from './recognizers/ikadRecognizer'
export * from './recognizers/indonesiaIdFrontRecognizer'
export * from './recognizers/jordanCombinedRecognizer'
export * from './recognizers/jordanIdBackRecognizer'
export * from './recognizers/jordanIdFrontRecognizer'
export * from './recognizers/kuwaitIdBackRecognizer'
export * from './recognizers/kuwaitIdFrontRecognizer'
export * from './recognizers/malaysiaDlFrontRecognizer'
export * from './recognizers/moroccoIdBackRecognizer'
export * from './recognizers/moroccoIdFrontRecognizer'
export * from './recognizers/mrtdCombinedRecognizer'
export * from './recognizers/mrtdRecognizer'
export * from './recognizers/myKadBackRecognizer'
export * from './recognizers/myKadFrontRecognizer'
export * from './recognizers/myTenteraRecognizer'
export * from './recognizers/newZealandDlFrontRecognizer'
export * from './recognizers/paymentCardBackRecognizer'
export * from './recognizers/paymentCardCombinedRecognizer'
export * from './recognizers/paymentCardFrontRecognizer'
export * from './recognizers/pdf417Recognizer'
export * from './recognizers/polandCombinedRecognizer'
export * from './recognizers/polandIdBackRecognizer'
export * from './recognizers/polandIdFrontRecognizer'
export * from './recognizers/romaniaIdFrontRecognizer'
export * from './recognizers/serbiaCombinedRecognizer'
export * from './recognizers/serbiaIdBackRecognizer'
export * from './recognizers/serbiaIdFrontRecognizer'
export * from './recognizers/simNumberRecognizer'
export * from './recognizers/singaporeChangiEmployeeIdRecognizer'
export * from './recognizers/singaporeCombinedRecognizer'
export * from './recognizers/singaporeDlFrontRecognizer'
export * from './recognizers/singaporeIdBackRecognizer'
export * from './recognizers/singaporeIdFrontRecognizer'
export * from './recognizers/slovakiaCombinedRecognizer'
export * from './recognizers/slovakiaIdBackRecognizer'
export * from './recognizers/slovakiaIdFrontRecognizer'
export * from './recognizers/sloveniaCombinedRecognizer'
export * from './recognizers/sloveniaIdBackRecognizer'
export * from './recognizers/sloveniaIdFrontRecognizer'
export * from './recognizers/spainDlFrontRecognizer'
export * from './recognizers/swedenDlFrontRecognizer'
export * from './recognizers/switzerlandDlFrontRecognizer'
export * from './recognizers/switzerlandIdBackRecognizer'
export * from './recognizers/switzerlandIdFrontRecognizer'
export * from './recognizers/switzerlandPassportRecognizer'
export * from './recognizers/unitedArabEmiratesDlFrontRecognizer'
export * from './recognizers/unitedArabEmiratesIdBackRecognizer'
export * from './recognizers/unitedArabEmiratesIdFrontRecognizer'
export * from './recognizers/vinRecognizer'
export * from './recognizers/usdlRecognizer'
export * from './recognizers/usdlCombinedRecognizer'
