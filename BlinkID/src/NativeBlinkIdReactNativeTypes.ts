import type { Country, DetailedFieldType, DocumentAnonymizationSettings, DocumentFilter, DocumentNumberAnonymizationSettings, DocumentRules, DocumentType, FieldType, RecognitionModeFilter, Region, ScanningMode } from "./types";

export abstract class Serializable<T extends Record<string, any>> {
  abstract getSerializableFields(): (keyof T)[];

  toPlainObject(): T {
    const result = {} as Partial<T>;

    for (const key of this.getSerializableFields()) {
      const value = (this as any)[key];

      if (Array.isArray(value)) {
        result[key] = value.map((item: any) =>
          typeof item?.toPlainObject === 'function' ? item.toPlainObject() : item
        ) as T[typeof key];
      } else if (value?.toPlainObject) {
        result[key] = value.toPlainObject() as T[typeof key];
      } else {
        result[key] = value;
      }
    }

    return result as T;
  }
}

export interface BlinkIdScanningSettingsData {
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
     blurDetectionLevel: string;
      
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
     skipImagesWithBlur: boolean
    
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
      glareDetectionLevel: string;
    
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
      tiltDetectionLevel: string;
    
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
      enableBarcodeScanOnly: false;
    
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
      anonymizationMode: string;
    
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
      scanUnsupportedBack: false;
    
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
      croppedImageSettings: CroppedImageSettingsData;
}

export interface CroppedImageSettingsData {
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
  returnFaceImage: false;

  /**
   * Indicates whether the signature image should be returned.
   * 
   * Default: `false`
   */
  returnSignatureImage: boolean
}

export interface ClassFilterData {
      /**
   * Document classes that will be explicitly accepted by this filter.
   * Only documents belonging to the specified classes will be processed. All other documents will be rejected.
   *
   * If this list is empty, no restrictions are applied, and documents will be accepted unless explicitly excluded by `excludeDocuments`.
   *
   * Example usage:
   *
   *  ```
   *   final classFilter = ClassFilter();
   *    classFilter.includeDocuments = [
   *      DocumentFilter.country(Country.Usa),
   *      DocumentFilter.countryType(Country.Croatia, DocumentType.Id),
   *    ];
   *
   *
   *  ```
   *
   *
   * NOTE: from the example above, the class filter is set to only accept all documents from USA, and Croatian IDs.
   * All other documents will be rejected.
   *
   * Rules can be combined, for example, to set all three properties (Country Region, Type), two (e.g., Country and Type) or just one (e.g, Region).
   *
   * See {@link DocumentFilter} for setting the combinations.
   */
  includeDocuments?: DocumentFilter[];
  /**
   * Document classes that will be explicitly rejected by this filter.
   * Documents belonging to the specified classes will not be processed. Other documents, not included with `excludeDocuments` will be accepted.
   *
   * If this array is empty, no restrictions are applied, and documents will be excluded only if not present in `includeDocuments`.
   *
   * Example usage:
   *
   *  ```
   *   final classFilter = ClassFilter();
   *    classFilter.excludeDocuments = [
   *      DocumentFilter.country(Country.Usa),
   *      DocumentFilter.countryType(Country.Croatia, DocumentType.Id),
   *    ];
   *
   *
   *  ```
   *
   * NOTE: from the example above, the class filter is set to only exclude all documents from USA, and Croatian IDs.
   * All other classes will be accepted.
   *
   * Rules can be combined, for example, to set all three properties (Country Region, Type), two (e.g., Country and Type) or just one (e.g, Region).
   *
   * See {@link DocumentFilter} for setting the combinations.
   */
  excludeDocuments?: DocumentFilter[];

}

export interface DocumentRulesData {
      /**
   * Specified fields will overrule our document class field rules if filter conditions are met.
   *
   * See {@link DocumentFilter} for more information.
   */
      documentFilter?: DocumentFilter;
    
      /**
       * Fields to overrule our class field rules.
       *
       * See {@link DetailedFieldType} for more information.
       */
      fields: DetailedFieldType[];
}

export interface DetailedFieldTypeData {
      /**
       * The field type.
       *
       * See {@link FieldType} for more information.
       */
      fieldType: string;
    
      /**
       * The alphabet type.
       *
       * See {@link AlphabetType} for more information.
       */
      alphabetType: string;
}

export interface DocumentAnonymizationSettingsData {
      /**
       * Document fields that will be anonymized.
       *
       */
      fields: FieldType[];
    
      /**
       * Specified fields will be anonymized if filter conditions are met.
       *
       */
      documentFilter?: DocumentFilter;
    
      /**
       * Document number anonymization settings.
       *
       */
      documentNumberAnonymizationSettings?: DocumentNumberAnonymizationSettings;
}

export interface RecognitionModeFilterData {
      /**
   * Enable scanning of MRZ IDs.
   *
   */
  enableMrzId: boolean;

  /**
   * Enable scanning of visa MRZ.
   *
   */
  enableMrzVisa: boolean;

  /**
   * Enable scanning of Passport MRZ.
   *
   */
  enableMrzPassport: boolean;

  /**
   * Enable scanning of Photo ID.
   *
   */
  enablePhotoId: boolean;

  /**
   * Enable scanning of barcode IDs.
   *
   */
  enableBarcodeId: boolean;

  /**
   * Enable full document recognition.
   *
   */
  enableFullDocumentRecognition: boolean;
}

export interface DocumentFilterData {
      /**
       * If set, only specified country will pass the filter criteria.
       * Otherwise, issuing country will not betaken into account.
       */
      country?: Country;
    
      /**
       * If set, only specified country will pass the filter criteria.
       * Otherwise, issuing region will not be taken into account.
       */
      region?: Region;
    
      /**
       * If set, only specified type will pass the filter criteria.
       * Otherwise, issuing type will not be taken into account.
       */
      documentType?: DocumentType;
}

export interface DocumentNumberAnonymizationSettingsData {
      /**
   * Defines how many digits at the beginning of the document number remain visible after anonymization.
   *
   */
  prefixDigitsVisible?: number;

  /**
   * Defines how many digits at the end of the document number remain visible after anonymization.
   *
   */
  suffixDigitsVisible?: number;
}