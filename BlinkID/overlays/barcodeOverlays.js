import { OverlaySettings } from '../overlaySettings'

/** 
 * Class for setting up barcode overlay.
 * Barcode overlay is best suited for recognizers that perform barcode scanning.
 */
export class BarcodeOverlaySettings extends OverlaySettings {
    constructor() {
        super('BarcodeOverlaySettings');
    }
}