import type {
  BarcodeModuleSettings,
  BlinkIdScanningUxSettings,
  BlinkIdSessionSettings,
  BlinkIdScanningSettings,
  DocumentCaptureModuleSettings,
  MrzModuleSettings,
  ScanningMode,
  SensitivityLevel,
  VizModuleSettings,
} from "@microblink/blinkid-react-native";

/** UI-driven scanning configuration for the BlinkID sample app. */
export class ScanningModulesConfig {
  scanningMode: ScanningMode = "automatic";
  stepTimeoutDuration = 60000;
  inactivityTimeoutDuration = 10000;
  showOnboardingDialog = true;

  barcodeEnabled = true;
  barcode: BarcodeModuleSettings =
    ScanningModulesConfig.defaultBarcodeModule();

  documentCaptureEnabled = true;
  documentCapture: DocumentCaptureModuleSettings =
    ScanningModulesConfig.defaultDocumentCaptureModule();

  mrzEnabled = true;
  mrz: MrzModuleSettings = ScanningModulesConfig.defaultMrzModule();

  vizEnabled = true;
  viz: VizModuleSettings = ScanningModulesConfig.defaultVizModule();

  static defaultBarcodeModule(): BarcodeModuleSettings {
    return {
      presenceMandatory: false,
      barcodeImageReturnEnabled: false,
      pdf417ScanningEnabled: true,
      qrScanningEnabled: true,
      upceScanningEnabled: false,
      upcaScanningEnabled: false,
      code128ScanningEnabled: false,
      code39ScanningEnabled: false,
      ean8ScanningEnabled: false,
      ean13ScanningEnabled: false,
      itfScanningEnabled: false,
      dataMatrixScanningEnabled: false,
    };
  }

  static defaultDocumentCaptureModule(): DocumentCaptureModuleSettings {
    return {
      inputImageCropped: false,
      unsupportedDocumentsAllowed: false,
      secondSideWithNoExtractableDataSkipped: true,
      passportDataPageScanOnly: true,
      faceImageExtractionEnabled: false,
      faceImagePresenceMandatory: false,
      inputImageReturnEnabled: false,
      documentImageReturnEnabled: false,
      inputImageMargin: 0.02,
      dotsPerInch: 250,
      extensionFactor: 0,
      blurSensitivityLevel: "mid",
      imageWithBlurRejected: true,
      glareSensitivityLevel: "mid",
      imageWithGlareRejected: true,
      tiltSensitivityLevel: "mid",
      imageWithPoorLightingRejected: true,
      imageWithHandOcclusionRejected: true,
    };
  }

  static defaultMrzModule(): MrzModuleSettings {
    return { presenceMandatory: false };
  }

  static defaultVizModule(): VizModuleSettings {
    return {
      presenceMandatory: false,
      signatureImageExtractionEnabled: false,
      characterValidationEnabled: true,
      resultAggregationEnabled: true,
    };
  }

  toScanningSettings(): BlinkIdScanningSettings {
    const settings: BlinkIdScanningSettings = {};
    if (this.barcodeEnabled) {
      settings.barcodeModule = { ...this.barcode };
    }
    if (this.documentCaptureEnabled) {
      settings.documentCaptureModule = { ...this.documentCapture };
    }
    if (this.mrzEnabled) {
      settings.mrzModule = { ...this.mrz };
    }
    if (this.vizEnabled) {
      settings.vizModule = { ...this.viz };
    }
    return settings;
  }

  toSessionSettings(): BlinkIdSessionSettings {
    return {
      scanningMode: this.scanningMode,
      scanningSettings: this.toScanningSettings(),
      stepTimeoutDuration: this.stepTimeoutDuration,
      inactivityTimeoutDuration: this.inactivityTimeoutDuration,
    };
  }

  toUxSettings(): BlinkIdScanningUxSettings {
    return {
      showHelpButton: true,
      showOnboardingDialog: this.showOnboardingDialog,
      allowHapticFeedback: true,
      preferredCamera: "back",
    };
  }

  resetToDefaults(): void {
    this.scanningMode = "automatic";
    this.stepTimeoutDuration = 60000;
    this.inactivityTimeoutDuration = 10000;
    this.showOnboardingDialog = true;
    this.barcodeEnabled = true;
    this.barcode = ScanningModulesConfig.defaultBarcodeModule();
    this.documentCaptureEnabled = true;
    this.documentCapture =
      ScanningModulesConfig.defaultDocumentCaptureModule();
    this.mrzEnabled = true;
    this.mrz = ScanningModulesConfig.defaultMrzModule();
    this.vizEnabled = true;
    this.viz = ScanningModulesConfig.defaultVizModule();
  }
}

export const SCANNING_MODES: ScanningMode[] = ["automatic", "single"];

export const SENSITIVITY_LEVELS: SensitivityLevel[] = [
  "off",
  "low",
  "mid",
  "high",
];
