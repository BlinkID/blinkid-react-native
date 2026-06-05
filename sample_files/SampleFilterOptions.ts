import {
  Country,
  DocumentType,
  FieldType,
  Region,
  type Country as CountryType,
  type DocumentFilter,
  type DocumentType as DocumentTypeValue,
  type FieldType as FieldTypeValue,
  type RedactionMode,
  type Region as RegionType,
} from "@microblink/blinkid-react-native";

export type UiDocumentFilter = {
  country?: CountryType;
  region?: RegionType;
  documentType?: DocumentTypeValue;
};

export const SAMPLE_COUNTRIES: CountryType[] = [
  Country.Canada,
  Country.USA,
  Country.Croatia,
  Country.Germany,
  Country.UK,
  Country.Australia,
];

export const SAMPLE_USA_REGIONS: RegionType[] = [
  Region.California,
  Region.Texas,
  Region.NewYork,
  Region.Florida,
];

export const SAMPLE_DOCUMENT_TYPES: DocumentTypeValue[] = [
  DocumentType.Id,
  DocumentType.Dl,
  DocumentType.Passport,
  DocumentType.Visa,
];

export const REDACTION_MODES: RedactionMode[] = [
  "none",
  "imageOnly",
  "resultFieldsOnly",
  "fullResult",
];

export const SAMPLE_REDACTION_FIELDS: FieldTypeValue[] = [
  FieldType.FirstName,
  FieldType.LastName,
  FieldType.FullName,
  FieldType.DocumentNumber,
  FieldType.DateOfBirth,
  FieldType.Address,
  FieldType.PersonalIdNumber,
];

export function uiToDocumentFilter(ui: UiDocumentFilter): DocumentFilter {
  const filter: DocumentFilter = {};
  if (ui.country) {
    filter.country = ui.country;
  }
  if (ui.region) {
    filter.region = ui.region;
  }
  if (ui.documentType) {
    filter.documentType = ui.documentType;
  }
  return filter;
}

export function hasDocumentFilterCriteria(ui: UiDocumentFilter): boolean {
  return !!(ui.country || ui.region || ui.documentType);
}

export function emptyUiDocumentFilter(): UiDocumentFilter {
  return {};
}
