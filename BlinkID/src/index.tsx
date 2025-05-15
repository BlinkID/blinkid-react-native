import type { BlinkIdScanningResult } from './blinkIdResult';
import BlinkidReactNative from './NativeBlinkidReactNative';

/**
 * Just a random class
 * @returns STH
 * 
 */
export function performScan(): BlinkIdScanningResult {
  return BlinkidReactNative.performScan();
}

export function performDirectApiScan(): BlinkIdScanningResult {
  return BlinkidReactNative.performDirectApiScan();
}
