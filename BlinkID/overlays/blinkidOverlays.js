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
    }    
}