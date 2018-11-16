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