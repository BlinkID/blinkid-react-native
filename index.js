'use strict';
/**
 * This exposes the appropriate native BlinkID module module as a JS module, based on 
 * detected platvorm: Android or iOS. This has a
 * function 'scan' which takes the following parameters:
 *
 * 1. String licenseKey: BlinkID license key bount to application ID for Android or iOS. To obtain
 *                       valid license key, please visit http://microblink.com/login or
 *                       contact us at http://help.microblink.com
 * 2. Object scanningOptions: key-value pairs which contains scanning options map with following key-value pairs:
 *                            useFrontCamera -> boolean
 *                            shouldReturnCroppedImage -> boolean
 *                            shouldReturnSuccessfulImage -> boolean
 *                            recognizers -> array of enabled recognizers
 * 3. Promise promise: promise for returning scan results
 */
import { Platform, NativeModules } from 'react-native';

export const BlinkID = Platform.select({
      ios: NativeModules.BlinkIDReactNative,
      android: NativeModules.BlinkIDAndroid
})

/**
 * Following exports expose the keys (string constants) for obtaining result values for
 * corresponding result types.
 */
export const MRTDKeys = require('./keys/mrtd_keys')
export const USDLKeys = require('./keys/usdl_keys')
export const EUDLKeys = require('./keys/eudl_keys')
export const MYKADKeys = require('./keys/mykad_keys')
export const PDF417Keys = require('./keys/pdf417_keys')