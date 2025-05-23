import { BlinkIdScanningResult } from './blinkIdResult';
import type { BlinkIdSdkSettings, BlinkIdSessionSettings } from './blinkIdSettings';
import BlinkidReactNative from './NativeBlinkidReactNative';
import type { ClassFilter } from './types';

/**
 * Just a random class
 * @returns STH
 * 
 */
export async function performScan(blinkIdSdkSettings: BlinkIdSdkSettings, blinkIdSessionSettings: BlinkIdSessionSettings, classFilter?: ClassFilter): Promise<BlinkIdScanningResult> {
  const stringResult = await BlinkidReactNative.performScan(JSON.stringify(blinkIdSdkSettings), JSON.stringify(blinkIdSessionSettings), JSON.stringify(classFilter));
  console.log('string result: ' + stringResult);
  const result = JSON.parse(stringResult);
  console.log('JSON result: ', result);
 return new BlinkIdScanningResult(result);
}

export function performDirectApiScan(blinkIdSdkSettings: BlinkIdSdkSettings, blinkIdSessionSettings: BlinkIdSessionSettings, firstImage: string, secondImage?: string): Promise<BlinkIdScanningResult>  {
  return BlinkidReactNative.performDirectApiScan(blinkIdSdkSettings.toPlainObject(), blinkIdSessionSettings.toPlainObject(), firstImage, secondImage);
}
