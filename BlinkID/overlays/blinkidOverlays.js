import { OverlaySettings } from '../overlaySettings'

/**
 * Class for setting up document overlay.
 * Document overlay is best suited for recognizers that perform ID document scanning.
 */
export class DocumentOverlaySettings extends OverlaySettings {
    constructor() {
        super('DocumentOverlaySettings');
    }
}

/**
 * Class for setting up BlinkId overlay.
 * BlinkId overlay is best suited for recognizers that perform ID document scanning.
 */
export class BlinkIdOverlaySettings extends OverlaySettings {
    constructor() {
        super('BlinkIdOverlaySettings');
        /**
        * String: message that is shown while scanning first side of the document.
        * If null, default value will be used.
        */
        this.firstSideInstructionsText = null;
        /**
        * String: instructions to flip document, shown when scanning of the first side is done, before scanning the second
        * side of the document.
        * If null, default value will be used.
        */
        this.flipInstructions = null;
        /**
        * String: instructions for the user to move the document closer.
        * If null, default value will be used.
        */
        this.errorMoveCloser = null;
        /**
        * String: instructions for the user to move the document farther.
        * If null, default value will be used.
        */
        this.errorMoveFarther = null;
        /**
        * String: title of the dialog, which is shown when scanned document sides are not from the same document.
        * If null, default value will be used.
        */
        this.sidesNotMatchingTitle = null;
        /**
        * String: message inside dialog, which is shown when scanned document sides are not from the same document.
        * If null, default value will be used.
        */
        this.sidesNotMatchingMessage = null;
        /**
        * String: title of the dialog, which is shown when unsupported document is scanned.
        * If null, default value will be used.
        */
        this.unsupportedDocumentTitle = null;
        /**
        * String: message inside dialog, which is shown when unsupported document is scanned.
        * If null, default value will be used.
        */
        this.unsupportedDocumentMessage = null;
        /**
        * String: title of the dialog, which is shown on timeout when scanning is stuck on the back document side.
        * If null, default value will be used.
        */
        this.recognitionTimeoutTitle = null;
        /**
        * String: message inside dialog, which is shown on timeout when scanning is stuck on the back document side.
        * If null, default value will be used.
        */
        this.recognitionTimeoutMessage = null;
        /**
        * String: text of the "retry" button inside dialog, which is shown on timeout when scanning is stuck on the back
        * document side.
        */
        this.retryButtonText = null;

        /**
         * If true, BlinkIdCombinedRecognizer will check if sides do match when scanning is finished
         * Default: true
         */
        this.requireDocumentSidesDataMatch = true;

        /**
         * Defines whether Document Not Supported dialog will be displayed in UI.
         *
         * Default: true
        */
        this.showNotSupportedDialog = true;

        /**
         * Option to configure back side scanning timeout.
         *
         * Default: 17000
        */
        this.backSideScanningTimeoutMilliseconds = 17000;

       /**
        * Message that is shown while scanning the barcode.
        * If null, default value will be used.
       */
       this.scanBarcodeText = null;

        /**
         * Instructions for the user to move the document from the edge.
         * If null, default value will be used.
        */
        this.errorDocumentTooCloseToEdge = null;

    }
}

/**
 * Class for setting up document verification overlay.
 * Document verification overlay is best suited for combined recognizers - recognizer that perform scanning of both sides of ID documents.
 */
export class DocumentVerificationOverlaySettings extends OverlaySettings {
    constructor() {
        super('DocumentVerificationOverlaySettings');
        /** 
         * String: splash message that is shown before scanning the first side of the document, while starting camera.
         * If null, default value will be used.
         */
        this.firstSideSplashMessage = null;
        /** 
         * String: splash message that is shown before scanning the second side of the document, while starting camera.
         * If null, default value will be used.
         */
        this.secondSideSplashMessage = null;
        /** 
        * String: splash message that is shown after scanning the document.
        * If null, default value will be used.
        */
        this.scanningDoneSplashMessage = null;
        /** 
         * String: user instructions that are shown above camera preview while the first side of the
         * document is being scanned.
         * If null, default value will be used.
         */
        this.firstSideInstructions = null;
        /** 
         * String: user instructions that are shown above camera preview while the second side of the
         * document is being scanned.
         * If null, default value will be used.
         */
        this.secondSideInstructions = null;
        /**
         * String: glare message that is shown if glare was detected while scanning document.
         * If null, default value will be used.
         */
        this.glareMessage = null;
    }
}