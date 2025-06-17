import {
  BlinkIdScanningResult,
  AddressDetailedInfo,
  BarcodeResult,
  BarcodeData,
  DataMatchResult,
  DataMatchField,
  DateResult,
  DependentInfo,
  DocumentClassInfo,
  DriverLicenseDetailedInfo,
  MrzResult,
  SingleSideScanningResult,
  StringResult,
  VizResult,
  DataMatchState,
  MRZDocumentType,
  BarcodeType,
} from '@microblink/blinkid-react-native';

export class BlinkIdResultBuilder {
  static getIdResultString(result?: BlinkIdScanningResult): string {
    if (result == null || result == undefined) {
      return '';
    }

    const resultString =
      this.buildStringResult('Recognition mode', result?.recognitionMode) +
      '\n' +
      this.buildResult('First name', result.firstName) +
      this.buildResult('Last name', result.lastName) +
      this.buildResult('Full name', result.fullName) +
      this.buildResult('Localized name', result.localizedName) +
      this.buildResult(
        'Additional name info',
        result.additionalNameInformation
      ) +
      this.buildResult('Address', result.address) +
      this.buildResult(
        'Additional address info',
        result.additionalAddressInformation
      ) +
      this.buildResult('Document number', result.documentNumber) +
      this.buildResult(
        'Additional document number',
        result.documentAdditionalNumber
      ) +
      this.buildResult('Sex', result.sex) +
      this.buildResult('Issuing authority', result.issuingAuthority) +
      this.buildResult('Nationality', result.nationality) +
      this.buildDateResult('Date of birth', result.dateOfBirth) +
      this.buildDateResult('Date of issue', result.dateOfIssue) +
      this.buildDateResult('Date of expiry', result.dateOfExpiry) +
      this.buildStringResult('Date of expiry permanent', `${result.dateOfExpiryPermanent}`) +
      this.buildResult('Martial status', result.maritalStatus) +
      this.buildResult('Personal Id Number', result.personalIdNumber) +
      this.buildResult('Profession', result.profession) +
      this.buildResult('Race', result.race) +
      this.buildResult('Religion', result.religion) +
      this.buildResult('Residential Status', result.residentialStatus) +
      this.buildDriverLicenceResult(result.driverLicenseDetailedInfo) +
      this.buildDataMatchResult(result.dataMatchResult) +
      this.buildDocumentClassInfoResult(result.documentClassInfo) +
      this.buildSubresults(result.subResults);

    return `${resultString}\n`;
  }

  static buildSubresults(subResults?: SingleSideScanningResult[]): string {
    if (!subResults || subResults.length === 0) return '';

    return subResults
      .map((result, index) => {
        const viz = this.buildVizResult(result.viz);
        const mrz = this.buildMrzResult(result.mrz);
        const barcode = this.buildBarcodeResult(result.barcode);

        return (
          `\nDocument side ${index + 1} information:\n` + viz + mrz + barcode
        );
      })
      .join('');
  }
  static buildMrzResult(result?: MrzResult) {
    if (result == null || result == undefined) return '';

    let resultString =
      this.buildStringResult('Document code', result.documentCode) +
      this.buildStringResult('Document number', result.documentNumber) +
      this.buildStringResult('Gender', result.gender) +
      this.buildStringResult('Issuer', result.issuer) +
      this.buildStringResult('Issuer name', result.issuerName) +
      this.buildStringResult('Nationality', result.nationality) +
      this.buildStringResult('Nationality name', result.nationalityName) +
      this.buildStringResult('Opt1', result.opt1) +
      this.buildStringResult('Opt2', result.opt2) +
      this.buildStringResult('Primary ID', result.primaryID) +
      this.buildStringResult('Secondary ID', result.secondaryID) +
      this.buildDateResult('Date of birth', result.dateOfBirth) +
      this.buildDateResult('Date of expiry', result.dateOfExpiry) +
      this.buildStringResult('Raw MRZ string', result.rawMRZString) +
      this.buildStringResult(
        'Sanitized document code',
        result.sanitizedDocumentCode
      ) +
      this.buildStringResult(
        'Sanitized document number',
        result.sanitizedDocumentNumber
      ) +
      this.buildStringResult('Sanitized issuer', result.sanitizedIssuer) +
      this.buildStringResult(
        'Sanitized nationality',
        result.sanitizedNationality
      ) +
      this.buildStringResult('Sanitized Opt1', result.sanitizedOpt1) +
      this.buildStringResult('Sanitized Opt2', result.sanitizedOpt2);
      
      if (result.documentType != undefined) {
       resultString += this.buildStringResult('Document type', MRZDocumentType[result.documentType])
      }
    return resultString == '' ? '' : `MRZ result:\n${resultString}\n`;
  }

  static buildBarcodeResult(result?: BarcodeResult) {
    if (result == null) return '';

    const resultString =
      this.buildStringResult(
        'Additional name information',
        result.additionalNameInformation
      ) +
      this.buildStringResult('Address', result.address) +
      this.buildStringResult(
        'Document additional number',
        result.documentAdditionalNumber
      ) +
      this.buildStringResult('Document number', result.documentNumber) +
      this.buildStringResult('Employer', result.employer) +
      this.buildStringResult('First name', result.firstName) +
      this.buildStringResult('Last name', result.lastName) +
      this.buildStringResult('Full name', result.fullName) +
      this.buildStringResult('Issuing authority', result.issuingAuthority) +
      this.buildStringResult('Marital status', result.maritalStatus) +
      this.buildStringResult('Nationality', result.nationality) +
      this.buildStringResult('Personal ID number', result.personalIdNumber) +
      this.buildDateResult('Date of birth', result.dateOfBirth) +
      this.buildDateResult('Date of expiry', result.dateOfExpiry) +
      this.buildDateResult('Date of issue', result.dateOfIssue) +
      this.buildStringResult('Middle name', result.middleName) +
      this.buildStringResult('Place of birth', result.placeOfBirth) +
      this.buildStringResult('Personal ID number', result.personalIdNumber) +
      this.buildStringResult('Race', result.race) +
      this.buildStringResult('Religion', result.religion) +
      this.buildStringResult('Profession', result.profession) +
      this.buildStringResult('Residential status', result.residentialStatus) +
      this.buildStringResult('Sex', result.sex) +
      this.buildAddressDetailedInfo(result.addressDetailedInfo) +
      this.buildDriverLicenseInfo(result.driverLicenseDetailedInfo) +
      this.buildBarcodeData(result.barcodeData);

    return resultString == '' ? '' : `Barcode result:\n${resultString}\n`;
  }

  static buildVizResult(result?: VizResult) {
    if (result == null) return '';

    const resultString =
      this.buildResult('First name', result.firstName) +
      this.buildResult('Last name', result.lastName) +
      this.buildResult('Full name', result.fullName) +
      this.buildResult('Address', result.address) +
      this.buildResult('Place of birth', result.placeOfBirth) +
      this.buildResult('Nationality', result.nationality) +
      this.buildResult('Marital status', result.maritalStatus) +
      this.buildResult('Residential status', result.residentialStatus) +
      this.buildResult('Employer', result.employer) +
      this.buildResult('Sponsor', result.sponsor) +
      this.buildResult('Blood type', result.bloodType) +
      this.buildDateResult('Date of birth', result.dateOfBirth) +
      this.buildDateResult('Date of expiry', result.dateOfExpiry) +
      this.buildDateResult('Date of issue', result.dateOfIssue) +
      this.buildResult('Document number', result.documentNumber) +
      this.buildResult('Issuing authority', result.issuingAuthority) +
      this.buildResult('Document subtype', result.documentSubtype) +
      this.buildResult(
        'Additional optional address information',
        result.additionalOptionalAddressInformation
      ) +
      this.buildResult(
        'Additional personal ID number',
        result.additionalPersonalIdNumber
      ) +
      this.buildResult(
        'Document additional number',
        result.documentAdditionalNumber
      ) +
      this.buildResult(
        'Document optional additional number',
        result.documentOptionalAdditionalNumber
      ) +
      this.buildResult('Eligibility category', result.eligibilityCategory) +
      this.buildResult("Father's name", result.fathersName) +
      this.buildResult('Localized name', result.localizedName) +
      this.buildResult('Manufacturing year', result.manufacturingYear) +
      this.buildResult("Mother's name", result.mothersName) +
      this.buildResult("Father's name", result.fathersName) +
      this.buildResult('Personal ID number', result.personalIdNumber) +
      this.buildResult('Profession', result.profession) +
      this.buildResult('Race', result.race) +
      this.buildResult('Religion', result.religion) +
      this.buildResult('Remarks', result.remarks) +
      this.buildResult('Residence permit type', result.residencePermitType) +
      this.buildResult('Residential status', result.residentialStatus) +
      this.buildResult('Sex', result.sex) +
      this.buildResult(
        'Specific document validity',
        result.specificDocumentValidity
      ) +
      this.buildResult('Sponsor', result.sponsor) +
      this.buildResult('Vehicle owner', result.vehicleOwner) +
      this.buildResult('Vehicle type', result.vehicleType) +
      this.buildResult('Visa type', result.visaType) +
      this.buildDependentsInfoResult(result.dependentsInfo);

    return resultString == '' ? '' : `VIZ result:\n${resultString}\n`;
  }

  static buildAddressDetailedInfo(info?: AddressDetailedInfo) {
    if (info == null) return '';
    return (
      this.buildStringResult('Street', info.street) +
      this.buildStringResult('City', info.city) +
      this.buildStringResult('Postal code', info.postalCode) +
      this.buildStringResult('Jurisdiction', info.jurisdiction)
    );
  }

  static buildDriverLicenseInfo(info?: DriverLicenseDetailedInfo<string>) {
    if (info == null) return '';
    return (
      this.buildStringResult('Restrictions', info.restrictions) +
      this.buildStringResult('Endorsements', info.endorsements) +
      this.buildStringResult('Vehicle class', info.vehicleClass)
    );
  }

  static buildResult(propertyName: string, result?: StringResult) {
    if (result == null || result.value == null || result.value == undefined) {
      return '';
    }
    let resultString = '';
    if (result.latin != null || result.latin != undefined) {
      resultString += `${result.latin}`;
    }

    if (result.arabic != null || result.arabic != undefined) {
      resultString += ` ${result.arabic}`;
    }
    if (result.cyrillic != null || result.cyrillic != undefined) {
      resultString += ` ${result.cyrillic}`;
    }
    if (result.greek != null || result.greek != undefined) {
      resultString += ` ${result.greek}`;
    }
    return `${propertyName}: ${resultString}\n`;
  }

  static buildDocumentClassInfoResult(result?: DocumentClassInfo) {
    if (result == null || result == undefined) return '';

    return `\nDocument class information:\nCountry: ${result.country}\nRegion: ${result.region}\nDocument type: ${result.documentType}\n`;
  }

  static buildDateResult<T>(
    propertyName: string,
    result?: DateResult<T>
  ): string {
    if (!result || !result.date || result.date.year === 0) return '';

    let stringResult =
      this.buildNumberResult('Day', result.date.day) +
      this.buildNumberResult('Month', result.date.month) +
      this.buildNumberResult('Year', result.date.year);

    if (result.successfullyParsed != undefined) {
      stringResult += `Successfully parsed: ${result.successfullyParsed}\n`;
    }
    if (result.originalString != undefined) {
      stringResult += `${this.handleStringType('Original date string', result.originalString)}`;
    }

    return stringResult == '' ? '' : `${propertyName}:\n${stringResult}\n`;
  }

  static buildStringResult(propertyName: string, result?: string) {
    if (result == null || result == undefined || result == '') return '';

    return `${propertyName}: ${result}\n`;
  }

  static buildNumberResult(propertyName: string, result?: number) {
    if (result == null || result == undefined || result < 0) return '';
    return `${propertyName}: ${result}\n`;
  }

  static buildDriverLicenceResult<T>(result?: DriverLicenseDetailedInfo<T>) {
    if (result == null || result == undefined) return '';

    return (
      this.handleStringType('Restrictions', result.restrictions) ??
      '' + this.handleStringType('Endorsements', result.endorsements) + 
      this.handleStringType('Vehicle class', result.vehicleClass) 
      + this.handleStringType('Conditions', result.conditions)
    );
  }

  static buildDataMatchResult(dataMatchresult?: DataMatchResult) {
    if (dataMatchresult == null || dataMatchresult == undefined) return '';

    let dataMatchResultString =
      dataMatchresult.overallState != undefined
        ? `\nData match information:\nState for whole document: ${DataMatchState[dataMatchresult.overallState]}\n`
        : '';
    if (dataMatchresult.states != null || dataMatchresult.states != undefined) {
      for (const fieldState of dataMatchresult?.states) {
        dataMatchResultString +=
          fieldState.field != undefined && fieldState.state != undefined
            ? `${DataMatchField[fieldState.field]}: ${DataMatchState[fieldState.state]}\n`
            : '';
      }
    }
    return dataMatchResultString;
  }

  static buildDependentsInfoResult(
    dependentInfoResult?: DependentInfo[]
  ): string {
    if (dependentInfoResult == null || dependentInfoResult == undefined)
      return '';

    let resultString = '';
    for (const dependentInfo of dependentInfoResult) {
      resultString +=
        this.buildResult('Document number', dependentInfo.documentNumber) +
        this.buildResult('Full name', dependentInfo.fullName) +
        this.buildResult('Sex', dependentInfo.sex) +
        this.buildDateResult('Date of birth', dependentInfo.dateOfBirth);
    }

    return resultString == '' ? '' : `Dependent info:\n${resultString}`;
  }

  static buildBarcodeData(barcodeDataResult?: BarcodeData): string {
    if (barcodeDataResult == null || barcodeDataResult == undefined) return '';

    return (
      (barcodeDataResult.barcodeType != undefined
        ? this.buildStringResult(
            'Barcode type',
            BarcodeType[barcodeDataResult.barcodeType]
          )
        : '') +
      this.buildStringResult(
        'Barcode string data',
        barcodeDataResult.stringData
      )
    );
  }

  static handleStringType(propertyName: string, raw?: any): string | undefined {
    if (typeof raw === 'string') {
      return this.buildStringResult(propertyName, raw);
    }

    if (typeof raw === 'object' && raw !== null && 'value' in raw) {
      return this.buildResult(propertyName, raw);
    }

    return undefined;
  }
}