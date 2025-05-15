import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';
import type { BlinkIdScanningResult } from './blinkIdResult';

export interface Spec extends TurboModule {
  performScan(): BlinkIdScanningResult;
  performDirectApiScan(): BlinkIdScanningResult;
}

export default TurboModuleRegistry.getEnforcing<Spec>('BlinkidReactNative');
