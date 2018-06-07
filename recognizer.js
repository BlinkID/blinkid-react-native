/**
 * Base class for all recognizers.
 * Recognizer is object that performs recognition of image
 * and updates its result with data extracted from the image.
 */
export class Recognizer {
    constructor(recognizerType) {
          /** Type of recognizer */
          this.recognizerType = recognizerType;
          /** Recognizer's result */
          this.result = null;
    }
}

/**
* Possible states of the Recognizer's result
*/
export const RecognizerResultState = Object.freeze(
    {
        /** Recognizer result is empty */
        empty : 1,
        /** Recognizer result contains some values, but is incomplete or it contains all values, but some are not uncertain */
        uncertain : 2,
        /** Recognizer resul contains all required values */
        valid : 3
    }
);

/**
 * Base class for all recognizer's result objects.
 * Recognizer result contains data extracted from the image.
 */
export class RecognizerResult {
    constructor(resultState) {
        /** 
         * State of the result. It is always one of the values represented by RecognizerResultState enum 
         */
        this.resultState = resultState;
    }
}