/**
 * Sample React Native App for BlinkID
 * https://github.com/BlinkID/blinkid-react-native
 */

import React, { Component } from 'react';
import * as BlinkIDReactNative from 'blinkid-react-native';
import {
    AppRegistry,
    Platform,
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    Button
} from 'react-native';

const licenseKey = Platform.select({
    // iOS license key for applicationID: com.microblink.sample
    ios: 'sRwAAAEVY29tLm1pY3JvYmxpbmsuc2FtcGxl1BIcP4FpSuS/38KlOx6IMzWbmaGEGiaL7eNSyKVwZjeUMW3Ax8aKh+quw2aZ4K4wKk+HtsAqjaGiGJSKWfeqZ/hXXpX3Kd7PRq/86AF3lpVWOZPN6FzUB6FVm7jYfVBUag4hYYxvq70616zMDQyaAItml02PvEL8OKbKbBxEYmVzBVpq3ew4JoHyRAaOJQfc9WEKrP4HYd8q4s15+HB/KO24IUVBabZggHMj2hOyAEM7p9dWpA/Q+n6C49w35xLfmcJrjSP0qE25bdTUMMEwhu6xiYmYdtMrqJkwCEIjzEQ04bEB3XWskZl3+AD5kUQH8qyhuEELR/mvbmvwxMBpwpM=',
    // android license key for applicationID: com.microblink.sample
    android: 'sRwAAAAVY29tLm1pY3JvYmxpbmsuc2FtcGxlU9kJdZhZkGlTu9XHO8NDZ5etowTvAoM3PXg5QKNOMEzS+WzcCNYkGg0p7csI0R/oydYtBy2pDTTG1MHqYaFvnxUnpSu1mcXUVUOiddboBBWBXu6Z9Pq5iYIdZ3/HuZFmW1V4PK7S0WiUzzlYDHFNMH+KnaDNnJawX7D7X1S7i9KriklziYyNkX59wv1uOaExxS7FuftzTBtqxMjzOmuwglSXXzrqUE4uwNnAijs9b9Jqr/2Y72qkE+SiBY45N5E0BLpG9ex0NFT/uiLhmd1BEZBrKWouCOPogSmKBE30mawHpesSS/4XsjAZH8a5FqQdsL4QXbeYeHsAcSyDhoiwPw0="'
})

var renderIf = function(condition, content) {
    if (condition) {
        return content;
    } 
    return null;
}

function buildResult(result, key) {
    if (result && result != -1) {
        return key + ": " + result + "\n";
    }
    return ""
}

function buildDateResult(result, key) {
    if (result) {
        return key + ": " +
            result.day + "." + result.month + "." + result.year + "."
            + "\n";
    }
    return ""
}

export default class Sample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showFrontImageDocument: false,
            resultFrontImageDocument: '',
            showBackImageDocument: false,
            resultBackImageDocument: '',
            showImageFace: false,
            resultImageFace: '',
            showSuccessFrame: false,
            successFrame: '',
            results: '',
            licenseKeyErrorMessage: ''
        };
    }

    async scan() {
        try {

            // to scan any machine readable travel document (passports, visas and IDs with
            // machine readable zone), use MrtdRecognizer
            // var mrtdRecognizer = new BlinkIDReactNative.MrtdRecognizer();
            // mrtdRecognizer.returnFullDocumentImage = true;

            // var mrtdSuccessFrameGrabber = new BlinkIDReactNative.SuccessFrameGrabberRecognizer(mrtdRecognizer);

            // BlinkIDCombinedRecognizer automatically classifies different document types and scans the data from
            // the supported document
            var blinkIdCombinedRecognizer = new BlinkIDReactNative.BlinkIdCombinedRecognizer();
            blinkIdCombinedRecognizer.returnFullDocumentImage = true;
            blinkIdCombinedRecognizer.returnFaceImage = true;

            const scanningResults = await BlinkIDReactNative.BlinkID.scanWithCamera(
                new BlinkIDReactNative.BlinkIdOverlaySettings(),
                new BlinkIDReactNative.RecognizerCollection([blinkIdCombinedRecognizer/*, mrtdSuccessFrameGrabber*/]),
                licenseKey
            );

            if (scanningResults) {
                let newState = {
                    showFrontImageDocument: false,
                    resultFrontImageDocument: '',
                    showBackImageDocument: false,
                    resultBackImageDocument: '',
                    showImageFace: false,
                    resultImageFace: '',
                    results: '',
                    showSuccessFrame: false,
                    successFrame: ''
                };

                for (let i = 0; i < scanningResults.length; ++i) {
                    let localState = this.handleResult(scanningResults[i]);
                    newState.showFrontImageDocument = newState.showFrontImageDocument || localState.showFrontImageDocument;
                    if (localState.showFrontImageDocument) {
                        newState.resultFrontImageDocument = localState.resultFrontImageDocument;
                    }
                    newState.showBackImageDocument = newState.showBackImageDocument || localState.showBackImageDocument;
                    if (localState.showBackImageDocument) {
                        newState.resultBackImageDocument = localState.resultBackImageDocument;
                    }
                    newState.showImageFace = newState.showImageFace || localState.showImageFace;
                    if (localState.resultImageFace) {
                        newState.resultImageFace = localState.resultImageFace;
                    }
                    newState.results += localState.results;
                    newState.showSuccessFrame = newState.showSuccessFrame || localState.showSuccessFrame;
                    if (localState.successFrame) {
                        newState.successFrame = localState.successFrame;
                    }

                }
                newState.results += '\n';
                this.setState(newState);
            }
        } catch (error) {
            console.log(error);
            this.setState({ showFrontImageDocument: false, resultFrontImageDocument: '', showBackImageDocument: false, resultBackImageDocument: '', showImageFace: false, resultImageFace: '', results: 'Scanning has been cancelled', showSuccessFrame: false,
            successFrame: ''});
        }
    }

    handleResult(result) {
        var localState = {
            showFrontImageDocument: false,
            resultFrontImageDocument: '',
            showBackImageDocument: false,
            resultBackImageDocument: '',
            resultImageFace: '',
            results: '',
            showSuccessFrame: false,
            successFrame: ''
        };

        if (result instanceof BlinkIDReactNative.BlinkIdCombinedRecognizerResult) {
            let blinkIdResult = result;

            let resultString =
                buildResult(blinkIdResult.firstName, "First name") +
                buildResult(blinkIdResult.lastName, "Last name") +
                buildResult(blinkIdResult.fullName, "Full name") +
                buildResult(blinkIdResult.localizedName, "Localized name") +
                buildResult(blinkIdResult.additionalNameInformation, "Additional name info") +
                buildResult(blinkIdResult.address, "Address") +
                buildResult(blinkIdResult.additionalAddressInformation, "Additional address info") +
                buildResult(blinkIdResult.documentNumber, "Document number") +
                buildResult(blinkIdResult.documentAdditionalNumber, "Additional document number") +
                buildResult(blinkIdResult.sex, "Sex") +
                buildResult(blinkIdResult.issuingAuthority, "Issuing authority") +
                buildResult(blinkIdResult.nationality, "Nationality") +
                buildDateResult(blinkIdResult.dateOfBirth, "Date of birth") +
                buildResult(blinkIdResult.age, "Age") +
                buildDateResult(blinkIdResult.dateOfIssue, "Date of issue") +
                buildDateResult(blinkIdResult.dateOfExpiry, "Date of expiry") +
                buildResult(blinkIdResult.dateOfExpiryPermanent, "Date of expiry permanent") +
                buildResult(blinkIdResult.expired, "Expired") +
                buildResult(blinkIdResult.maritalStatus, "Martial status") +
                buildResult(blinkIdResult.personalIdNumber, "Personal id number") +
                buildResult(blinkIdResult.profession, "Profession") +
                buildResult(blinkIdResult.race, "Race") +
                buildResult(blinkIdResult.religion, "Religion") +
                buildResult(blinkIdResult.residentialStatus, "Residential status") +
                buildResult(blinkIdResult.processingStatus, "Processing status") +
                buildResult(blinkIdResult.recognitionMode, "Recognition mode")
                ;

            let dataMatchDetailedInfo = blinkIdResult.dataMatchDetailedInfo;
            resultString +=
                    buildResult(dataMatchDetailedInfo.dataMatchResult, "Data match result") +
                    buildResult(dataMatchDetailedInfo.dateOfExpiry, "dateOfExpiry") +
                    buildResult(dataMatchDetailedInfo.dateOfBirth, "dateOfBirth") +
                    buildResult(dataMatchDetailedInfo.documentNumber, "documentNumber");
            

            let licenceInfo = blinkIdResult.driverLicenseDetailedInfo;
            if (licenceInfo) {
                var vehicleClassesInfoString = '';
                if (licenceInfo.vehicleClassesInfo) {
                  for (let i=0; i<licenceInfo.vehicleClassesInfo.length; i++) {
                        vehicleClassesInfoString += buildResult(licenceInfo.vehicleClassesInfo[i].vehicleClass, 'Vehicle class') + 
                        buildResult(licenceInfo.vehicleClassesInfo[i].licenceType, 'License type') + 
                        buildDateResult(licenceInfo.vehicleClassesInfo[i].effectiveDate, 'Effective date') + 
                        buildDateResult(licenceInfo.vehicleClassesInfo[i].expiryDate, 'Expiry date');
                    }
                }
                resultString +=
                    buildResult(licenceInfo.restrictions, "Restrictions") +
                    buildResult(licenceInfo.endorsements, "Endorsements") +
                    buildResult(licenceInfo.vehicleClass, "Vehicle class") +
                    buildResult(licenceInfo.conditions, "Conditions") + vehicleClassesInfoString;
            }

            // there are other fields to extract
            localState.results += resultString;

            // Document image is returned as Base64 encoded JPEG
            if (blinkIdResult.fullDocumentFrontImage) {
                localState.showFrontImageDocument = true;
                localState.resultFrontImageDocument = 'data:image/jpg;base64,' + blinkIdResult.fullDocumentFrontImage;
            }
            if (blinkIdResult.fullDocumentBackImage) {
                localState.showBackImageDocument = true;
                localState.resultBackImageDocument = 'data:image/jpg;base64,' + blinkIdResult.fullDocumentBackImage;
            }
            // Face image is returned as Base64 encoded JPEG
            if (blinkIdResult.faceImage) {
                localState.showImageFace = true;
                localState.resultImageFace = 'data:image/jpg;base64,' + blinkIdResult.faceImage;
            }
        }
        return localState;
    }

    render() {
        let displayFrontImageDocument = this.state.resultFrontImageDocument;
        let displayBackImageDocument = this.state.resultBackImageDocument;
        let displayImageFace = this.state.resultImageFace;
        let displaySuccessFrame = this.state.successFrame;
        let displayFields = this.state.results;
        return (
        <View style={styles.container}>
            <Text style={styles.label}>BlinkID</Text>
            <View style={styles.buttonContainer}>
            <Button
                onPress={this.scan.bind(this)}
                title="Scan"
                color="#48B2E8"
            />
            </View>
            <ScrollView
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}y>
            <Text style={styles.results}>{displayFields}</Text>
            {renderIf(this.state.showFrontImageDocument,
                <View style={styles.imageContainer}>
                <Image
                    resizeMode='contain'
                    source={{uri: displayFrontImageDocument, scale: 3}} style={styles.imageResult}/>
                </View>
            )}
            {renderIf(this.state.showBackImageDocument,
                <View style={styles.imageContainer}>
                <Image
                    resizeMode='contain'
                    source={{uri: displayBackImageDocument, scale: 3}} style={styles.imageResult}/>
                </View>
            )}
            {renderIf(this.state.showImageFace,
                <View style={styles.imageContainer}>
                <Image
                    resizeMode='contain'
                    source={{uri: displayImageFace, scale: 3}} style={styles.imageResult}/>
                </View>
            )}
            {renderIf(this.state.showSuccessFrame,
                <View style={styles.imageContainer}>
                    <Image
                    resizeMode='contain'
                    source={{uri: displaySuccessFrame, scale: 3}} style={styles.imageResult}/>
                </View>
            )}
            </ScrollView>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
    backgroundColor: '#F5FCFF'
  },
  label: {
    fontSize: 30,
    textAlign: 'center',
    marginTop: 50
  },
  buttonContainer: {
    margin: 20
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  results: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
  },
  imageResult: {
    flex: 1,
    flexShrink: 1,
    height: 200,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10
  },
});

AppRegistry.registerComponent('Sample', () => Sample);
