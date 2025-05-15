import  './types.ts'
import type { RecognitionMode } from './types.ts'

export class BlinkIdScanningResult {
    recognitionMode: RecognitionMode;

    constructor(recognitionMode: RecognitionMode) {
        this.recognitionMode = recognitionMode;
    }
}