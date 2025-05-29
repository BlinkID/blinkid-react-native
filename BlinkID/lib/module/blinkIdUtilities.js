"use strict";

import { StringResult } from "./types.js";
export class BlinkIdUtilities {
  /**
   * Helper method for handling different string types,
   * based on the document information source.
   */
  static handleStringType(raw) {
    if (typeof raw === 'string') {
      return raw;
    }

    // Heuristically assume it's a StringResult if it's an object and matches expected shape
    if (typeof raw === 'object' && raw !== null && 'value' in raw) {
      return new StringResult(raw);
    }
    return undefined;
  }
}
//# sourceMappingURL=blinkIdUtilities.js.map