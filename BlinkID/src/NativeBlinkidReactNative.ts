import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

/**
 * The implementation of `blinkid-react-native` that uses method channels.
 * 
 * Here, the {@link TurboModule} exposes the appropriate native BlinkID module as a React-Native module,
 * based on the detected platform: Android or iOS.
 * 
 * The Turbo Module contains the functions `performScan` and `performDirectApiScan` which enable the BlinkID scanning process, with the default UX properties, and with static images.
 */
export interface Spec extends TurboModule {
  /**
   * The `performScan` Turbo Module method launches the BlinkID scanning process with the default UX properties.
   * 
   * It takes the following parameters: `BlinkIdSdkSettings`, `BlinkIdSessionSettings` and the optional `ClassFilter` class.
   * 
   * @param blinkIdSdkSettings - BlinkID SDK Settings - the class that contains all of the available SDK settings. It contains settings for the license key, and how the models, that the SDK
   * needs for the scanning process, should be obtained.
   * To obtain a valid license key, please visit https://developer.microblink.com/ or contact us directly at https://help.microblink.com
   * @param blinkIdSessionSettings - BlinkID Session Settings - the class that contains various settings for the scanning session. It contains the settings for the `ScanningMode` and `BlinkIdScanningSettings`, which define various parameters that control the scanning process.
   * @param classFilter - The optional `ClassFilter` class - the class which controls which documents will be accepted or reject for information extraction during the scanning session. See [ClassFilter] for more implementation information.
   */
  performScan(blinkIdSdkSettings: string, blinkIdSessionSettings: string, classFilter?: string): Promise<string>

  /**
   * The `performDirectApiScan` platform channel method launches the BlinkID scanning process inteded for information extraction from static images.
   * 
   * It takes the following parameters: `BlinkIdSdkSettings`, `BlinkIdSessionSettings`, `firstImage` string in the Base64 format and the optional `secondImage` string in the Base64 format.
   * 
   * @param blinkIdSdkSettings - BlinkID SDK Settings - the class that contains all of the available SDK settings. It contains settings for the license key, and how the models, that the SDK needs for the scanning process, should be obtained.
   * @param blinkIdSessionSettings - BlinkID Session Settings - the class that contains various settings for the scanning session. It contains the settings for the `ScanningMode` and `BlinkIdScanningSettings`, which define various parameters that control the scanning process.
   * @param firstImage - The `firstImage` Base64 string - image that represents one side of the document. 
   * If the document contains two sides and the `ScanningMode` is set to `automatic`, this should contain the image of the front side of the document. In case the [ScanningMode] is set to `single`, it can
   * be either the front or the back side of the document.
   * @param secondImage - The optional `secondImage` Base64 string: needed if the information from back side of the document is required and the `ScanningMode` is set to `automatic`.
   */
  performDirectApiScan(blinkIdSdkSettings: string, blinkIdSessionSettings: string, firstImage: string, secondImage?: string): Promise<string>
}

export default TurboModuleRegistry.getEnforcing<Spec>('BlinkidReactNative');