import { BlinkIdScanningResult } from './blinkIdResult';
import type { BlinkIdSdkSettings, BlinkIdSessionSettings } from './blinkIdSettings';
import BlinkidReactNative from './NativeBlinkidReactNative';
import type { ClassFilter } from './types';

// Configuration classes
export {
  BlinkIdScanningSettings,
  BlinkIdSdkSettings,
  BlinkIdSessionSettings,
  CroppedImageSettings,
} from './blinkIdSettings';

export {
  BlinkIdScanningResult
} from './blinkIdResult'

// Types & enums
export * from './types';

/**
 * Just a random class
 * @returns STH
 * 
 */
export async function performScan(blinkIdSdkSettings: BlinkIdSdkSettings, blinkIdSessionSettings: BlinkIdSessionSettings, classFilter?: ClassFilter): Promise<BlinkIdScanningResult> {
  const jsonResult = await BlinkidReactNative.performScan(JSON.stringify(blinkIdSdkSettings), JSON.stringify(blinkIdSessionSettings), JSON.stringify(classFilter));
 return new BlinkIdScanningResult(JSON.parse(jsonResult));
}

export async function performDirectApiScan(blinkIdSdkSettings: BlinkIdSdkSettings, blinkIdSessionSettings: BlinkIdSessionSettings, firstImage: string, secondImage?: string): Promise<BlinkIdScanningResult>  {
  const jsonResult = await BlinkidReactNative.performDirectApiScan(JSON.stringify(blinkIdSdkSettings), JSON.stringify(blinkIdSessionSettings), firstImage, secondImage);
  return new BlinkIdScanningResult(JSON.parse(jsonResult));
}
