/** Base class for all overlay settings objects */
export class OverlaySettings {
    constructor(overlaySettingsType) {
        /** type of the overlay settings object */
        this.overlaySettingsType = overlaySettingsType;
        /** whether front camera should be used instead of the default camera */
        this.useFrontCamera = false;
        /** whether beep sound will be played on successful scan */
        this.enableBeep = false;
        /** (optional) if default overlay contains textual information, text will be localized to this language. Otherwise device langauge will be used */
        /** example: "en" */
        this.language = null;
        /** (optional) to be used with language variable, it defines the country locale */
        /** example: "US" to use "en_US" on Android and en-US on iOS */
        this.country = null;
    }      
}