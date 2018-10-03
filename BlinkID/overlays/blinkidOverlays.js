import { OverlaySettings } from '../overlaySettings'

/**
 * Class for setting up document overlay.
 * Document overlay is best suited for recognizers that perform ID document scanning.
 */
export class DocumentOverlaySettings extends OverlaySettings {
    constructor(opts={}) {
        super('DocumentOverlaySettings');
        /** tootlip text that is defined under document view finder. */
        this.tooltipText = opts.tooltipText;;
    }
}

/**
 * Class for setting up document verification overlay.
 * Document verification overlay is best suited for combined recognizers - recognizer that perform scanning of both sides of ID documents.
 */
export class DocumentVerificationOverlaySettings extends OverlaySettings {
    constructor(opts={}) {
        super('DocumentVerificationOverlaySettings');

        /**
         * Returns/sets user instructions that are shown above camera preview while the first side of the
         * document is being scanned.
         *
         * Default: string defined by "photopay_front_verification_document"
         * key in strings file in Microblink.bundle
         */
        this.firstSideInstructions = opts.firstSideInstructions;

        /**
         * Returns/sets user instructions that are shown above camera preview while the second side of the
         * document is being scanned.
         *
         * Default: string defined by "photopay_back_verification_document"
         * key in strings file in Microblink.bundle
         */
        this.secondSideInstructions = opts.secondSideInstructions;

        /**
         * Returns/sets splash message that is shown before scanning the first side of the document,
         * while starting camera.
         *
         * Default: string defined by "photopay_front_splash_verification_document"
         * key in strings file in Microblink.bundle
         */
        this.firstSideSplashMessage = opts.firstSideSplashMessage;

        /**
         * Returns/sets splash message that is shown before scanning the second side of the document,
         * while starting camera.
         *
         * Default: string defined by "photopay_back_splash_verification_document"
         * key in strings file in Microblink.bundle
         */
        this.secondSideSplashMessage = opts.secondSideSplashMessage;

        /**
         * Returns/sets glare status message that is shown if glare detection is turned on
         * and it is shown if glare is detected.
         *
         * Default: string defined by "photopay_glare_status"
         * key in strings file in Microblink.bundle
         */
        this.glareStatusMessage = opts.glareStatusMessage;
    }
}
