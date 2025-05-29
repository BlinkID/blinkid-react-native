"use strict";

import { TurboModuleRegistry } from 'react-native';

/**
 * The implementation of `blinkid-react-native` that uses method channels.
 * 
 * Here, the {@link TurboModule} exposes the appropriate native BlinkID module as a React-Native module,
 * based on the detected platform: Android or iOS.
 * 
 * The Turbo Module contains the functions `performScan` and `performDirectApiScan` which enable the BlinkID scanning process, with the default UX properties, and with static images.
 */

export default TurboModuleRegistry.getEnforcing('BlinkidReactNative');
//# sourceMappingURL=NativeBlinkidReactNative.js.map