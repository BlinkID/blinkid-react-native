import { Recognizer, RecognizerResult } from '../recognizer'

/**
 * Result object for SuccessFrameGrabberRecognizer.
 */
export class SuccessFrameGrabberRecognizerResult extends RecognizerResult {
    constructor(nativeResult, slaveRecognizerResult) {
        super(nativeResult.resultState);

        /** Camera frame at the time slave recognizer finished recognition */
        this.successFrame = nativeResult.successFrame;

        /** RecognizerResult of the slave recognizer */
        this.slaveRecognizerResult = slaveRecognizerResult;
    }
}

/**
 * SuccessFrameGrabberRecognizer can wrap any other recognizer and obtain camera
 * frame on which the other recognizer finished recognition.
 */
export class SuccessFrameGrabberRecognizer extends Recognizer {
    constructor(slaveRecognizer) {
        super('SuccessFrameGrabberRecognizer');
        /** Slave recognizer that SuccessFrameGrabberRecognizer will watch */
        this.slaveRecognizer = slaveRecognizer;

        if (!this.slaveRecognizer instanceof Recognizer) {
            throw new Error("Slave recognizer must be Recognizer!");
        }

        this.createResultFromNative = (function (nativeResult) { return new SuccessFrameGrabberRecognizerResult(nativeResult, this.slaveRecognizer.createResultFromNative(nativeResult.slaveRecognizerResult)); }).bind(this);
    }
}