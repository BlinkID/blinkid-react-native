import {
  DetectionLevel,
  AnonymizationMode,
  ScanningMode,
  DocumentRules,
  DocumentAnonymizationSettings,
  RecognitionModeFilter,
} from "./types";

/**
 *  Settings for the initialization of the BlinkID SDK.
 *
 */
export class BlinkIdSdkSettings {
  /**
   * License key for the native SDK.
   *
   */
  licenseKey: string;

  /**
   * Optional licensee string if the provided license key is not tied to the single application ID.
   */
  licensee?: string;

  /**
   * Whether resources required for on-device image processing should be downloaded and cached
   * on first initialization of the SDK.
   *
   * If set to false, you need to package all the required
   * resources in your application's assets.
   *
   */
  downloadResources?: boolean;

  /**
   * If resources are to be downloaded, the following is the URL where the resources are hosted.
   *
   * URL: `"https://models.cdn.microblink.com/resources"`
   */
  resourceDownloadUrl?: string;

  /**
   * Local folder name where resources will be downloaded and cached.
   *
   * If resources are being downloaded, this defines the name of the folder within your
   * application's cache folder where resources will be cached.
   */
  resourceLocalFolder?: string;

  /**
   * If resources downloading is disabled, this defines the bundle of your app where the resources reside.
   *
   */
  bundleURL?: string;

  /**
   * Timeout settings for resource downloads.
   *
   */
  resourceRequestTimeout?: number;
  /**
   * Set a custom HTTPS URL to be used as a proxy for Ping and license checks.
   * The proxy URL will be applied only if the license has the appropriate rights.
   *
   * The URL must use the HTTPS protocol. Example: https://your-proxy.com/
   *
   * If this value is defined, SDK initialization will not be successful in the following cases:
   *    - if the URL does not use HTTPS or if the URL is invalid
   *    - if the license does not allow proxy usage
   *
   */
  microblinkProxyURL?: string;

  /**
   *
   * Settings for the initialization of the BlinkID SDK.
   */
  constructor(
    licenseKey: string,
    licensee?: string,
    downloadResources?: boolean,
    resourceDownloadUrl?: string,
    resourceLocalFolder?: string,
    bundleURL?: string,
    resourceRequestTimeout?: number,
    microblinkProxyURL?: string
  ) {
    this.licenseKey = licenseKey;
    this.licensee = licensee;
    this.downloadResources = downloadResources;
    this.resourceDownloadUrl = resourceDownloadUrl;
    this.resourceLocalFolder = resourceLocalFolder;
    this.bundleURL = bundleURL;
    this.resourceRequestTimeout = resourceRequestTimeout;
    this.microblinkProxyURL = microblinkProxyURL;
  }
}

/**
 * Represents the configuration settings for a scanning session.
 *
 * This class holds the settings related to the resources initialization,
 * scanning mode, and specific scanning configurations that define how the scanning
 * session should behave.
 */
export class BlinkIdSessionSettings {
  /**
   * The scanning mode to be used during the scanning session.
   *
   * Specifies whether the scanning is for a single side of a document or multiple
   * sides, as defined in {@link ScanningMode}. The default is set to `automatic`, which
   * automatically determines the number of sides to scan.
   *
   */
  scanningMode: ScanningMode;

  /**
   * The specific scanning settings for the scanning session.
   *
   * Defines various parameters that control the scanning process.
   */
  scanningSettings: BlinkIdScanningSettings;

  /**
   * Duration in seconds before scanning step times out and is cancelled.
   *
   * If less than zero, scanning will not time out.
   * Defaults to 15000 (miliseconds)
   */
  stepTimeoutDuration: number;

  /**
   *
   * Represents the configuration settings for a scanning session.
   *
   * This class holds the settings related to the resources initialization,
   * scanning mode, and specific scanning configurations that define how the scanning
   * session should behave.
   */
  constructor() {
    this.scanningMode = ScanningMode.Automatic;
    this.scanningSettings = new BlinkIdScanningSettings();
    this.stepTimeoutDuration = 15000;
  }
}

/**
 * Represents the configurable settings for scanning a document.
 *
 * This class defines various parameters and policies related to the scanning
 * process, including image quality handling, data extraction and anonymization,
 * along with options for frame processing and image extraction.
 *
 *  */
export class BlinkIdScanningSettings {
  /**
   * The level of blur detection in the document image.
   *
   * Defines the severity of blur detected in the document image, as defined
   * in [DetectionLevel]. Values range from `off` (detection NotAvailable) to higher
   * levels of blur detection.
   *
   * `low` – less sensitive to blur; if something is detected as blur, it is almost certainly actual blur,
   * but some amount of blur may not be detected at all.
   * `high` – highly sensitive to blur; it may detect as blur even something that only resembles blur.
   *
   * Default: {@link DetectionLevel.Mid}
   *  */
  blurDetectionLevel: DetectionLevel;

  /**
   * Indicates whether images with blur in the document image should be skipped.
   *
   * A value of `true` means images with detected blur will be excluded from further processing to prevent blurred images from being used
   *     - If blurDetectionLevel = `off` - blurred images will be processed
   *     - If blur is detected `ProcessingStatus` will be `ImagePreprocessingFailed` and blur will be reported in the `ProcessResult`
   * A value of `false` means images with detected blur will not be excluded from further processing
   *     - If blurDetectionLevel != `off` - even if blur is detected, the image will be processed and blur will be reported in the `ProcessResult`.
   *
   * Default: `true`
   */
  skipImagesWithBlur: boolean;

  /**
   * The level of glare detection in the document image.
   *
   * Defines the severity of glare detected in the document image, as defined in [DetectionLevel].
   * Values range from `off` (detection NotAvailable) to higher levels of glare detection.
   * `low` – less sensitive to glare; if something is detected as glare, it is almost certainly actual glare,
   *     but some amount of glare may not be detected at all.
   * `high` – highly sensitive to glare; it may detect as glare even something that only resembles glare.
   *
   * Default: {@link DetectionLevel.Mid}
   */
  glareDetectionLevel: DetectionLevel;

  /**
   * Indicates whether images with glare in the document image should be skipped.
   *
   * A value of `true` means images with detected glare will be excluded from further processing to prevent glared images from being used
   *     - If glareDetectionLevel = `off` - glared images will be processed
   *     - If glare is detected `ProcessingStatus` will be `ImagePreprocessingFailed` and glare will be reported in the `ProcessResult`
   * A value of `false` means images with detected glare will not be excluded from further processing
   *     - If glareDetectionLevel != `off` - even if glare is detected, the image will be processed and glare will be reported in the `ProcessResult`
   *
   * Default: `true`
   */
  skipImagesWithGlare: boolean;

  /**
   * The level of allowed detected tilt of the document in the image.
   *
   * Defines the severity of allowed detected tilt of the document in the image, as defined in [DetectionLevel].
   * Values range from `off` (detection NotAvailable) to higher levels of allowed tilt.
   * `low` – less sensitive to tilt.
   * `high` – highly sensitive to tilt.
   *
   * Default: {@link DetectionLevel.off}
   */
  tiltDetectionLevel: DetectionLevel;

  /**
   * Indicates whether images with inadequate lighting conditions should be rejected.
   *
   * Inadequate lighting conditions are represented as either `TooBright` or `TooDark` document images,
   *     as defined in the `ImageAnalysisLightingStatus` enum.
   * A value of `true` means images with inadequate lighting conditions will be excluded from further processing to prevent images with
   * inadequate lighting from being used
   *     - If inadequate light conditions are detected `ProcessingStatus` will be `ImagePreprocessingFailed` and lighting status will be
   *       reported in the `ProcessResult`.
   *
   * Default: `true`
   */
  skipImagesWithInadequateLightingConditions: boolean;

  /**
   * Indicates whether images occluded by hand should be rejected.
   *
   * A value of `true` means images occluded by hand will be excluded from further processing to prevent occluded images from being used
   *     - If hand occlusion is detected `ProcessingStatus` will be `ImagePreprocessingFailed` and hand occlusion status will be reported
   *       in the `ProcessResult`
   * This setting is applicable only if `scanCroppedDocumentImage` = false.
   *
   * Default: `true`
   */
  skipImagesOccludedByHand: boolean;

  /**
   * Indicates whether the aggregation of data from multiple images is enabled.
   *
   *  Disabling this setting will yield higher-quality captured images, but it may slow down the scanning process due to the additional
   *      effort required to find the optimal image.
   *  Enabling this setting will simplify the extraction process, but the extracted data will be aggregated from multiple images instead
   *      of being sourced from a single image.
   *  This only applies to images from Video input image source - for images from Photo source, setting will be ignored.
   *
   * Default: `true`
   */
  combineResultsFromMultipleInputImages: boolean;

  /**
   * Enables barcode recognition to proceed even if the initial VIZ extraction fails.
   *
   * If the barcode recognition is successful, recognition will still end in a valid state.
   * This setting is applicable only to images from Photo source.
   * For multi-side scanning, it is permitted only for the back side.
   *
   * Default: `false`
   */
  enableBarcodeScanOnly: boolean;

  /**
   * Defines custom rules for specific document class.
   *
   * When defining [DocumentRules], [DocumentFilter] is optionally set to specify the document to which the rule applies, and a `fields` with
   *     the appropriate `alphabetType` should be specified as mandatory for that document.
   * If a `fields` is set to a field that is optional for that document or does not exist on it, all fields on the document become optional.
   * If a `fields` is set to a field with an incorrect alphabetType, all fields on the document become optional.
   * If a `fields` is set to a field that doesn’t exist in the internal rules, that rule is ignored.
   * When adding multiple `fields`, any field that does not match our rules is ignored. Only fields that comply with our rules are set as mandatory.
   * If the documentFilter fields `country`, `region`, or `type` are set to `null`, all supported values for those fields will be considered.
   *     For example, if `country = null`, the rule will apply to all supported countries in BlinkID.
   *
   * By default, document fields are validated using internal rules that define mandatory fields for the scanned document class. This setting allows
   *     users to narrow down our internal rules on mandatory fields. All undefined fields will become optional. It is not possible to mark fields as
   *     mandatory if they cannot theoretically appear on the document.
   * The more detailed document filter will have priority over the other.
   *
   * See {@link DocumentRules} for more detailed information.
   */
  customDocumentRules?: DocumentRules[];

  /**
   * The mode of anonymization applied to the document.
   *
   * Redact specific fields based on requirements or laws regarding a specific document.
   * Data can be redacted from the image, the result or both.
   *
   * Default: {@link AnonymizationMode.fullResult}
   */
  anonymizationMode: AnonymizationMode;

  /**
   * Redact fields for specific document class.
   *
   * Fields specified by requirements or laws for a specific document will be redacted regardless of this setting.
   * Based on anonymizationMode setting, data will be redacted from the image, the result or both.
   *
   * See {@link DocumentAnonymizationSettings} for more information.
   */
  customDocumentAnonymizationSettings?: DocumentAnonymizationSettings[];
  /**
   * Indicates whether input images should be returned.
   *
   * Save the input images at the moment of the data extraction or timeout.
   * This significantly increases memory consumption. The scanning performance is not affected.
   *
   * Default: `false`
   */
  returnInputImages: boolean;

  /**
   * Process only cropped document images.
   * Requires the input image to consist solely of the cropped document image with perspective correction applied.
   * This only applies to images from Photo input image source - for images from Video input image source, setting will be ignored.
   *
   * Default: `false`
   */
  scanCroppedDocumentImage: boolean;

  /**
   * The filter for recognition modes.
   *
   * Specifies which recognition modes are enabled during the scanning process, with a default value of true to enable all modes.
   * [RecognitionModeFilter] is used to enable/disable recognition of specific document groups.
   *
   * This setting is experimental and it will be removed in upcoming releases.
   *
   * By default all modes are enabled (set to `true`).
   */
  recognitionModeFilter: RecognitionModeFilter;

  /**
   * Indicates whether character validation is enabled.
   *
   * Allow only results containing expected characters for a given field.
   * Each field is validated against a set of rules.
   * All fields have to be successfully validated in order to successfully scan a document.
   * Setting is used to improve scanning accuracy.
   * If set to `true`, when an invalid character is detected `ProcessingStatus.InvalidCharactersFound` is returned.
   *
   * Default: `true`
   */
  enableCharacterValidation: boolean;

  /**
   * Defines the minimum required margin (in percentage) between the edge of the input image and the document.
   *
   * The setting is applicable only when using images from Video source.
   * The setting is not applicable if `scanCroppedDocumentImage = true` (it will be ignored).
   * This setting is implemented to comply with regulations in certain countries that mandate documents
   * to be stored with adequate margins in the image.
   *
   * Default: `0.02` (also recommended value)
   */
  inputImageMargin: number;

  /**
   * Indicates whether backside of unsupported document should be scanned also.
   *
   * By default, back side of the document will not be scanned if only the front side is supported for a specific
   * document.
   *
   * Default: `false`
   */
  scanUnsupportedBack: boolean;

  /**
   * Indicates whether scanning can continue to the next side despite an uncertain front-side scan.
   *
   * This only applies to images from Photo input image source - for images from Video source, setting will be
   * ignored.
   *
   * Default: `false`
   */
  allowUncertainFrontSideScan: boolean;

  /**
   * The maximum allowed mismatches per field during data matching.
   *
   * Configures the maximum number of characters per field that can be inconsistent during data matching.
   * By defualt, no mismatches are allowed.
   *
   * Default: `0`
   */
  maxAllowedMismatchesPerField: number;

  /**
   * Indicates whether only the passport data page should be scanned.
   *
   * Scan only the data page ( page containing MRZ ) of the passport.
   * If set to `false`, it will be required to scan the second page of certain passports.
   *
   * Default: `true`
   */
  scanPassportDataPageOnly: boolean;

  /**
   * Configures the image processing settings during the scanning process.
   *
   * Allows customization of cropped image handling, such as dotsPerInch, extensions, and
   * whether images should be returned for the document, face or signature regions.
   *
   * See {@link CroppedImageSettings} for more information.
   */
  croppedImageSettings: CroppedImageSettings;

  /**
   * Represents the configurable settings for scanning a document.
   *
   * This class defines various parameters and policies related to the scanning
   * process, including image quality handling, data extraction and anonymization,
   * along with options for frame processing and image extraction.
   */
  constructor() {
    this.blurDetectionLevel = DetectionLevel.Mid;
    this.skipImagesWithBlur = true;
    this.glareDetectionLevel = DetectionLevel.Mid;
    this.skipImagesWithGlare = true;
    this.tiltDetectionLevel = DetectionLevel.Off;
    this.skipImagesWithInadequateLightingConditions = true;
    this.skipImagesOccludedByHand = true;
    this.combineResultsFromMultipleInputImages = true;
    this.enableBarcodeScanOnly = false;
    this.anonymizationMode = AnonymizationMode.FullResult;
    this.returnInputImages = false;
    this.scanCroppedDocumentImage = false;
    this.recognitionModeFilter = new RecognitionModeFilter();
    this.enableCharacterValidation = true;
    this.inputImageMargin = 0.02;
    this.scanUnsupportedBack = false;
    this.allowUncertainFrontSideScan = false;
    this.maxAllowedMismatchesPerField = 0;
    this.scanPassportDataPageOnly = true;
    this.croppedImageSettings = new CroppedImageSettings();
  }
}

/**
 * Allows customization of various aspects of the UI
 * used during the scanning process.
 *
 */
export class BlinkIdUiSettings {
  /**
   * A boolean indicating whether to show a help button
   * and enable help screens during the scanning session.
   *
   * Default: `true`
   */
  showHelpButton: boolean;

  /**
   * A boolean indicating whether to show an onboarding dialog
   * at the beginning of the scanning session.
   *
   * Default: `true`
   */
  showOnboardingDialog: boolean;

  constructor() {
    this.showHelpButton = true;
    this.showOnboardingDialog = true;
  }
}

/**
 * Represents the image cropping settings.
 *
 */
export class CroppedImageSettings {
  /**
   * The DPI value for the cropped image.
   *
   * Default: `250`
   */
  dotsPerInch: number;

  /**
   * The extension factor for the cropped image.
   *
   * Default: `0`
   */
  extensionFactor: number;

  /**
   * Indicates whether the document image should be returned.
   *
   * Default: `false`
   */
  returnDocumentImage: boolean;

  /**
   * Indicates whether the face image should be returned.
   *
   * Default: `false`
   */
  returnFaceImage: boolean;

  /**
   * Indicates whether the signature image should be returned.
   *
   * Default: `false`
   */
  returnSignatureImage: boolean;

  /**
   * Represents the image cropping settings.
   *
   */
  constructor() {
    this.dotsPerInch = 250;
    this.extensionFactor = 0;
    this.returnDocumentImage = false;
    this.returnFaceImage = false;
    this.returnSignatureImage = false;
  }
}
