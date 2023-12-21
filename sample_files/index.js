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
    ios: 'sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUBbGV5SkRjbVZoZEdWa1QyNGlPakUzTURNd056Y3hORFkzT1RJc0lrTnlaV0YwWldSR2IzSWlPaUkwT1RabFpEQXpaUzAwT0RBeExUUXpZV1F0WVRrMU5DMDBNemMyWlRObU9UTTVNR1FpZlE9PYPwAuE88FDjP95RyiGUewj+e6SGUoHitmTt0i2T87nVbH79ynAtPdmuQV49+U4ulln6j4ku3momxVE2igI9howeOZwxK5IbpMVG3ooDibChEXUccclpCCv08w3gEUwsP7hGOIBbA4HP45vru2nkan74SUYXWVU=',
    // android license key for applicationID: com.microblink.sample
    android: 'sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUAbGV5SkRjbVZoZEdWa1QyNGlPakUzTURNd056Y3lNRE0xTWpnc0lrTnlaV0YwWldSR2IzSWlPaUkwT1RabFpEQXpaUzAwT0RBeExUUXpZV1F0WVRrMU5DMDBNemMyWlRObU9UTTVNR1FpZlE9PY6A6Eq56GBOfiH4PZYVCf1vcY3/GuHCOkdOhF5rUKHodDOB3Q01339g0q22TM/fWv5f06CvIiAamEhg1m8xAYWSQt2VVSsVJaAncz+bGexcASnuhlHA+LTLnSZGIxSgnNKBJbizQypDRsyFKKpBq7K2SfVi+gM='
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
    if (result && result.day && result.month && result.year) {
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

            // BlinkIDMultiSideRecognizer automatically classifies different document types and scans the data from
            // the supported document
            var blinkIdMultiSideRecognizer = new BlinkIDReactNative.BlinkIdMultiSideRecognizer();
            blinkIdMultiSideRecognizer.returnFullDocumentImage = true;
            blinkIdMultiSideRecognizer.returnFaceImage = true;

            const scanningResults = await BlinkIDReactNative.BlinkID.scanWithCamera(
                new BlinkIDReactNative.BlinkIdOverlaySettings(),
                new BlinkIDReactNative.RecognizerCollection([blinkIdMultiSideRecognizer/*, mrtdSuccessFrameGrabber*/]),
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

        if (result instanceof BlinkIDReactNative.BlinkIdMultiSideRecognizerResult) {
            let blinkIdResult = result;

            let resultString =
                buildResult(blinkIdResult.firstName.description, "First name") +
                buildResult(blinkIdResult.lastName.description, "Last name") +
                buildResult(blinkIdResult.fullName.description, "Full name") +
                buildResult(blinkIdResult.localizedName.description, "Localized name") +
                buildResult(blinkIdResult.additionalNameInformation.description, "Additional name info") +
                buildResult(blinkIdResult.address.description, "Address") +
                buildResult(blinkIdResult.additionalAddressInformation.description, "Additional address info") +
                buildResult(blinkIdResult.documentNumber.description, "Document number") +
                buildResult(blinkIdResult.documentAdditionalNumber.description, "Additional document number") +
                buildResult(blinkIdResult.sex.description, "Sex") +
                buildResult(blinkIdResult.issuingAuthority.description, "Issuing authority") +
                buildResult(blinkIdResult.nationality.description, "Nationality") +
                buildDateResult(blinkIdResult.dateOfBirth, "Date of birth") +
                buildResult(blinkIdResult.age, "Age") +
                buildDateResult(blinkIdResult.dateOfIssue, "Date of issue") +
                buildDateResult(blinkIdResult.dateOfExpiry, "Date of expiry") +
                buildResult(blinkIdResult.dateOfExpiryPermanent, "Date of expiry permanent") +
                buildResult(blinkIdResult.expired, "Expired") +
                buildResult(blinkIdResult.maritalStatus.description, "Martial status") +
                buildResult(blinkIdResult.personalIdNumber.description, "Personal id number") +
                buildResult(blinkIdResult.profession.description, "Profession") +
                buildResult(blinkIdResult.race.description, "Race") +
                buildResult(blinkIdResult.religion.description, "Religion") +
                buildResult(blinkIdResult.residentialStatus.description, "Residential status") +
                buildResult(blinkIdResult.processingStatus.description, "Processing status") +
                buildResult(blinkIdResult.recognitionMode.description, "Recognition mode")
                ;

            let dataMatchResult = blinkIdResult.dataMatch;
            resultString +=
                    buildResult(dataMatchResult.stateForWholeDocument, "State for the whole document") +
                    buildResult(dataMatchResult.states[0].state, "dateOfBirth") +
                    buildResult(dataMatchResult.states[1].state, "dateOfExpiry") +
                    buildResult(dataMatchResult.states[2].state, "documentNumber");
            

            let licenceInfo = blinkIdResult.driverLicenseDetailedInfo;
            if (licenceInfo) {
                var vehicleClassesInfoString = '';
                if (licenceInfo.vehicleClassesInfo) {
                  for (let i=0; i<licenceInfo.vehicleClassesInfo.length; i++) {
                        vehicleClassesInfoString += buildResult(licenceInfo.vehicleClassesInfo[i].vehicleClass.description, 'Vehicle class') + 
                        buildResult(licenceInfo.vehicleClassesInfo[i].licenceType.description, 'License type') + 
                        buildDateResult(licenceInfo.vehicleClassesInfo[i].effectiveDate, 'Effective date') + 
                        buildDateResult(licenceInfo.vehicleClassesInfo[i].expiryDate, 'Expiry date');
                    }
                }
                resultString +=
                    buildResult(licenceInfo.restrictions.description, "Restrictions") +
                    buildResult(licenceInfo.endorsements.description, "Endorsements") +
                    buildResult(licenceInfo.vehicleClass.description, "Vehicle class") +
                    buildResult(licenceInfo.conditions.description, "Conditions") + vehicleClassesInfoString;
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
