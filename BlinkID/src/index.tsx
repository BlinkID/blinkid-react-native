import { BlinkIdScanningResult } from './blinkIdResult';
import type { BlinkIdSdkSettings, BlinkIdSessionSettings, BlinkIdUiSettings } from './blinkIdSettings';
import BlinkidReactNative from './NativeBlinkidReactNative';
import type { ClassFilter } from './types';

// Configuration classes
export {
  BlinkIdScanningSettings,
  BlinkIdSdkSettings,
  BlinkIdSessionSettings,
  BlinkIdUiSettings,
  CroppedImageSettings,
} from './blinkIdSettings';

export {
  BlinkIdScanningResult
} from './blinkIdResult'

// Types & enums
export * from './types';

/**
 * The `performScan` method launches the BlinkID scanning process with the default UX properties.
 * 
 * It takes the following parameters: {@link BlinkIdSdkSettings}, {@link BlinkIdSessionSettings} and the optional {@link BlinkIdUiSettings} and {@link ClassFilter} settings.
 * 
 * It returns the {@link BlinkIdScanningResult}.
 * 
 * @param blinkIdSdkSettings - BlinkID SDK Settings - the class that contains all of the available SDK settings. It contains settings for the license key, and how the models, that the SDK
 * needs for the scanning process, should be obtained.
 * To obtain a valid license key, please visit https://developer.microblink.com/ or contact us directly at https://help.microblink.com.
 * 
 * @param blinkIdSessionSettings - BlinkID Session Settings - the class that contains various settings for the scanning session. It contains the settings for the {@link ScanningMode} and
 * {@link BlinkIdScanningSettings}, which define various parameters that control the scanning process.
 * 
 * @param blinkIdUiSettings - BlinkID UI Settings - the class that allows customization of various aspects of the UI used during the scanning process.
 * 
 * @param classFilter - The optional `ClassFilter` class - the class which controls which documents will be accepted or reject for information extraction during the scanning session. 
 * See {@link ClassFilter} for more implementation information.
 * 
 * @returns `BlinkIdScanningResult` - BlinkID scanning result - Represents the results of scanning a document. 
 * This class contains the results of scanning a document, including the extracted data and images from the document.
 * 
 */
export async function performScan(blinkIdSdkSettings: BlinkIdSdkSettings, blinkIdSessionSettings: BlinkIdSessionSettings, blinkIdUiSettings?: BlinkIdUiSettings, classFilter?: ClassFilter): Promise<BlinkIdScanningResult> {
  const jsonResult = await BlinkidReactNative.performScan(JSON.stringify(blinkIdSdkSettings), JSON.stringify(blinkIdSessionSettings), JSON.stringify(blinkIdUiSettings), JSON.stringify(classFilter));
 return new BlinkIdScanningResult(JSON.parse(jsonResult));
}
/**
 * The `performDirectApiScan` platform channel method launches the BlinkID scanning process inteded for information extraction from static images.
 * 
 * It takes the following parameters: {@link BlinkIdSdkSettings}, {@link BlinkIdSessionSettings}, `firstImage` string in the Base64 format and the optional `secondImage` string in the Base64 format.
 * 
 * It returns the {@link BlinkIdScanningResult}.
 * 
 * @param blinkIdSdkSettings - BlinkID SDK Settings - the class that contains all of the available SDK settings. It contains settings for the license key, and how the models, that the SDK needs for the scanning process, should be obtained.
 * 
 * @param blinkIdSessionSettings - BlinkID Session Settings - the class that contains various settings for the scanning session. It contains the settings for the `ScanningMode` and `BlinkIdScanningSettings`, which define various parameters that control the scanning process.
 * 
 * @param firstImage - The `firstImage` Base64 string - image that represents one side of the document. 
 * If the document contains two sides and the `ScanningMode` is set to `automatic`, this should contain the image of the front side of the document. In case the [ScanningMode] is set to `single`, it can
 * be either the front or the back side of the document.
 * 
 * @param secondImage - The optional `secondImage` Base64 string: needed if the information from back side of the document is required and the `ScanningMode` is set to `automatic`.
 * 
 * @returns `BlinkIdScanningResult` - BlinkID scanning result - Represents the results of scanning a document. 
 * This class contains the results of scanning a document, including the extracted data and images from the document.
 */
export async function performDirectApiScan(blinkIdSdkSettings: BlinkIdSdkSettings, blinkIdSessionSettings: BlinkIdSessionSettings, firstImage: string, secondImage?: string): Promise<BlinkIdScanningResult>  {
  const jsonResult = await BlinkidReactNative.performDirectApiScan(JSON.stringify(blinkIdSdkSettings), JSON.stringify(blinkIdSessionSettings), firstImage, secondImage);
  return new BlinkIdScanningResult(JSON.parse(jsonResult));
}