import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  performScan(blinkIdSdkSettings: string, blinkIdSessionSettings: string, classFilter?: string): Promise<string>
  performDirectApiScan(blinkIdSdkSettings: string, blinkIdSessionSettings: string, firstImage: string, secondImage?: string): Promise<string>
}

export default TurboModuleRegistry.getEnforcing<Spec>('BlinkidReactNative');