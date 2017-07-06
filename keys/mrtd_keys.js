/***** Keys for obtaining data on Machine Readable Travel Documents *****/

/*
 * Primary indentifier, usually surname. If there is more than one component, they are separated with space.
 */
export const PrimaryId = "PrimaryId";

/*
 * Secondary identifier, usually first name. If there is more than one component, they are separated with space.
 */ 
export const SecondaryId = "SecondaryId";

/* Sex of the card holder. Sex is specified by use of the single initial, capital letter 'F' for female,
 * 'M' for male or '<' for unspecified.
 */ 
export const Sex = "Sex";

/*
 * First optional data. Element does not exist on US Green Card.
 */
export const Opt1 = "Opt1";

/*
 * Second optional data. Element does not exist on Passports and Visas.
 */
export const Opt2 = "Opt2";

/*
 * Nationality of the holder represented by a three-letter or two-letter code. Three-letter
 * codes are based on Alpha-3 codes for entities specified in ISO 3166-1, with extensions for certain
 * States. Two-letter codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with
 * extensions for certain States.
 */
export const Nationality = "Nationality";

/*
 * Three-letter or two-letter code which indicate the issuing State. Three-letter codes are based
 * on Aplha-3 codes for entities specified in ISO 3166-1, with extensions for certain States. Two-letter
 * codes are based on Aplha-2 codes for entities specified in ISO 3166-1, with extensions for certain States.
 */
export const Issuer = "Issuer";

/*
 * Document number. Document number contains up to 9 characters. Element does not exist on US Green Card.
 */
export const DocumentNumber = "DocumentNumber";

/*
 * Document code. Document code contains two characters. For MRTD the first character shall
 * be A, C or I. The second character shall be discretion of the issuing State or organization except
 * that V shall not be used, and `C` shall not be used after `A` except in the crew member certificate.
 * On machine-readable passports (MRP) first character shall be `P` to designate an MRP. One additional
 * letter may be used, at the discretion of the issuing State or organization, to designate a particular
 * MRP. If the second character position is not used for this purpose, it shall be filled by the filter
 * character '<'.
 */
export const DocumentCode = "DocumentCode";

/*
 * Date of expiry in format YYMMDD
 */
export const DateOfExpiry = "DateOfExpiry";

/*
 * Date of birth in format YYMMDD
 */
export const DateOfBirth = "DateOfBirth";

/*
 * Alien number. Exists only on US Green Cards.
 */
export const AlienNumber = "AlienNumber";

/*
 * Application receipt number. Exists only on US Green Cards.
 */
export const ApplicationReceiptNumber = "ApplicationRecieptNumber";

/*
 * Immigrant case number. Exists only on US Green Cards.
 */
export const ImmigrantCaseNumber = "ImmigrantCaseNumber";

/*
 * Entire Machine Readable Zone text from ID. This text is usually used for parsing
 * other elements.
 */
export const MRZText = "MRTDRaw";
