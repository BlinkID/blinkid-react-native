/** Base class for all overlay settings objects */
export class OverlaySettings {
    constructor(overlaySettingsType) {
        /** type of the overlay settings object */
        this.overlaySettingsType = overlaySettingsType;
        /** whether front camera should be used instead of the default camera */
        this.useFrontCamera = false;
        /** whether beep sound will be played on successful scan */
        this.enableBeep = false;
    }      
}