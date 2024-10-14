'use strict';

import { Platform, NativeModules } from 'react-native';

import { RecognizerResultState } from './recognizer'

const BlinkIDNative = Platform.select({
      ios: NativeModules.BlinkIDIos,
      android: NativeModules.BlinkIDAndroid
})

/**
 * This exposes the appropriate native BlinkID module module as a JS module, based on
 * detected platform: Android or iOS. This has functions:
 * -> 'scanWithCamera' which takes the following parameters:
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
 *               - optional flag 'showTrialLicenseKeyWarning' which indicates
 *                  whether warning for trial license key will be shown
 *        in format
 *  {
 *      licenseKey: '<base64iOSLicense or base64AndroidLicense>',
 *      licensee: String,
 *      showTrialLicenseKeyWarning: Boolean
 *  }
 * 
 * -> 'scanWithDirectApi' takes the following parameters:
 * 1. RecognizerCollection recognizerCollection: object containing recognizers to use for scanning
 * 2. String frontImage: a Base64 format string that represents the front image of the document that will be used for processing with DirectAPI
 * 3. String backImage: a Base64 format string that represents the back image of the document that will be used for processing with DirectAPI
 *     - backImage parameter is optional with the BlinkIdSingleSide recognizer, as only one side of the document is required. Pass 'null' or an empty string "" for this parameter in this case
 * 4. String license: BlinkID base64 license key bound to application ID for Android or iOS. To obtain
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
 *               - optional flag 'showTrialLicenseKeyWarning' which indicates
 *                  whether warning for trial license key will be shown
 *        in format
 *  {
 *      licenseKey: '<base64iOSLicense or base64AndroidLicense>',
 *      licensee: String,
 *      showTrialLicenseKeyWarning: Boolean
 *  }
 */
class BlinkIDWrapper {
      async scanWithCamera(overlaySettings, recognizerCollection, license) {
            try {
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
      
      async scanWithDirectApi(recognizerCollection, frontImage, backImage, license) {
            try {
                  var licenseObject = license;
                  if (typeof license === 'string' || license instanceof String) {
                      licenseObject = { licenseKey: license };
                  }

                  var frontImageObject = frontImage;
                  if (typeof frontImage === 'string' || frontImage instanceof String) {
                      frontImageObject = { frontImage: frontImage };
                  }

                  var backImageObject = backImage;
                  if (typeof backImage === 'string' || backImage instanceof String) {
                      backImageObject = { backImage: backImage };
                  }

                  const nativeResults = await BlinkIDNative.scanWithDirectApi(recognizerCollection, frontImageObject, backImageObject, licenseObject);
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
            this.milisecondsBeforeTimeout = 0;

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
export * from './overlays/blinkidOverlays'

// export recognizers that can be used and their results
export * from './recognizers/successFrameGrabberRecognizer'
export * from './recognizers/blinkIdMultiSideRecognizer'
export * from './recognizers/blinkIdSingleSideRecognizer'
export * from './recognizers/documentFaceRecognizer'
export * from './recognizers/idBarcodeRecognizer'
export * from './recognizers/mrtdCombinedRecognizer'
export * from './recognizers/mrtdRecognizer'
export * from './recognizers/passportRecognizer'
export * from './recognizers/visaRecognizer'
export * from './recognizers/usdlRecognizer'
export * from './recognizers/usdlCombinedRecognizer'
