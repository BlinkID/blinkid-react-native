/**
 * Sample React Native App for BlinkID
 * https://github.com/BlinkID/blinkid-react-native
 */

import React, { Component } from 'react';
import * as BlinkIDReactNative from 'blinkid-react-native';
import * as ImagePicker from 'react-native-image-picker';

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
    ios: 'sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUBbGV5SkRjbVZoZEdWa1QyNGlPakUzTWprMk56STJNek14TWprc0lrTnlaV0YwWldSR2IzSWlPaUprWkdRd05qWmxaaTAxT0RJekxUUXdNRGd0T1RRNE1DMDFORFU0WWpBeFlUVTJZamdpZlE9PZMSFIDjfsc2m+8UnhzvMhED/AmC88IsR2fZxwubpmi0qD4pb5d5WCrFKgZ1cEBZ2DpfK4L4MAPlARj2c24GmAyYAjd8JFuQeN+ZrBQfRBnF/8bBidrvxcMGyzC/AMpWF6Lqw+YbjNfI4vWNHfjbcKqzE+ns4SQDQA==',
    // android license key for applicationID: com.microblink.sample
    android: 'sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUAbGV5SkRjbVZoZEdWa1QyNGlPakUzTWprMk56STFOemt5TlRZc0lrTnlaV0YwWldSR2IzSWlPaUprWkdRd05qWmxaaTAxT0RJekxUUXdNRGd0T1RRNE1DMDFORFU0WWpBeFlUVTJZamdpZlE9PcrAOSeJRWm8NpTScxgcudqfZAkJmFrFr6acjOpEO99vEkqAQpfhPkpGzPHlR73WkYjLL9NmiCAChWAzur4NI0t26FrnVqr/1NZes61Q4iCKi9leea2ygLf1wzLGRw8V/XDjWm/2Exb3NbsL9rWW7PHO2P7XzyPhpQ=='
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
        this.pickImage = this.pickImage.bind(this);
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
    /* BlinkID scanning using the camera */
    async scan() {
        try {

            // BlinkIDMultiSideRecognizer automatically classifies different document types and scans the data from
            // the supported document
            var blinkIdMultiSideRecognizer = new BlinkIDReactNative.BlinkIdMultiSideRecognizer();
            blinkIdMultiSideRecognizer.returnFullDocumentImage = true;
            blinkIdMultiSideRecognizer.returnFaceImage = true;

            const scanningResults = await BlinkIDReactNative.BlinkID.scanWithCamera(
                new BlinkIDReactNative.BlinkIdOverlaySettings(),
                new BlinkIDReactNative.RecognizerCollection([blinkIdMultiSideRecognizer]),
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
            this.setState({ showFrontImageDocument: false, resultFrontImageDocument: '', showBackImageDocument: false, resultBackImageDocument: '', showImageFace: false, resultImageFace: '', results: 'Scanning has been cancelled', showSuccessFrame: false,
            successFrame: ''});
        }
    }

    /* BlinkID scanning with DirectAPI and the BlinkIDMultiSide recognizer.
    Best used for getting the information from both front and backside information from various documents */
    async directApiMultiSide() {
        try {
            // Get the front side of the document and return it in the Base64 format
            let frontImage = await this.pickImage();
            // Get the back side of the document and return it in the Base64 format
            let backImage = await this.pickImage();
            
            const recognizer = new BlinkIDReactNative.BlinkIdMultiSideRecognizer();
            recognizer.returnFullDocumentImage = true;
            recognizer.returnFaceImage = true;

            /* Uncomment line 143 if you're using DirectAPI and you are sending cropped images for processing. 
            The processing will most likely not work if cropped images are being sent with the scanCroppedDocumentImage property being set to false */
            
            //recognizer.scanCroppedDocumentImage = true;

            // Pass the recogizer along with the license and the Base64 images to the DirectAPI method of processing
            const scanningResults = await BlinkIDReactNative.BlinkID.scanWithDirectApi(
                new BlinkIDReactNative.RecognizerCollection([recognizer]),
                frontImage,
                backImage,
                licenseKey
            );
    
            if (scanningResults) {
                if (scanningResults.length == 0) {
                    this.setState({ showFrontImageDocument: false, 
                        resultFrontImageDocument: '', 
                        showBackImageDocument: false, 
                        resultBackImageDocument: '', 
                        showImageFace: false, 
                        resultImageFace: '', 
                        results: "Could not extract the images with DirectAPI!", 
                        showSuccessFrame: false,
                        successFrame: ''});
                } else {
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
            }
        } catch (error) {
            this.setState({ showFrontImageDocument: false, resultFrontImageDocument: '', showBackImageDocument: false, resultBackImageDocument: '', showImageFace: false, resultImageFace: '', results: error, showSuccessFrame: false,
            successFrame: ''});
        }
    }

    /* BlinkID scanning with DirectAPI and the BlinkIDSingleSide recognizer.
    Best used for getting the information from only one side from various documents */
    async directApiSingleSide() {
        try {
            // Get the document image (it can be either front or back) and return it in the Base64 format
            let image = await this.pickImage();
            
            const recognizer = new BlinkIDReactNative.BlinkIdSingleSideRecognizer();
            recognizer.returnFullDocumentImage = true;
            recognizer.returnFaceImage = true;

            /* Uncomment line 223 if you're using DirectAPI and you are sending cropped images for processing. 
            The processing will most likely not work if cropped images are being sent with the scanCroppedDocumentImage property being set to false */
            
            //recognizer.scanCroppedDocumentImage = true;

            // Pass the recogizer along with the license and the Base64 image to the DirectAPI method of processing
            const scanningResults = await BlinkIDReactNative.BlinkID.scanWithDirectApi(
                new BlinkIDReactNative.RecognizerCollection([recognizer]),
                image,
                null,
                licenseKey
            );
            
            if (scanningResults) {
                if (scanningResults.length == 0) {
                    this.setState({ showFrontImageDocument: false, 
                        resultFrontImageDocument: '', 
                        showBackImageDocument: false, 
                        resultBackImageDocument: '', 
                        showImageFace: false, 
                        resultImageFace: '', 
                        results: "Could not extract the image with DirectAPI!", 
                        showSuccessFrame: false,
                        successFrame: ''});
                } else {
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
            } 

        } catch (error) {
            this.setState({ showFrontImageDocument: false, resultFrontImageDocument: '', showBackImageDocument: false, resultBackImageDocument: '', showImageFace: false, resultImageFace: '', results: error, showSuccessFrame: false,
            successFrame: ''});
        }
    }

    /* A helper method for handling the picked document image */
    async pickImage() {
        return new Promise((resolve, reject) => {
            ImagePicker.launchImageLibrary({
                mediaType: 'photo',
                includeBase64: true,
            }, response => {
                if (response.didCancel) {
                    reject('Image selection canceled');
                } else if (response.error) {
                    reject(response.error);
                } else {
                    if (response.assets && response.assets.length > 0) {
                        const base64Data = response.assets[0].base64;
                        if (base64Data) {
                            resolve(base64Data);
                        } else {
                            reject('Base64 data not found in response');
                        }
                    } else {
                        reject('No assets found in response');
                    }
                }
            });
        });
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

        if (result instanceof BlinkIDReactNative.BlinkIdMultiSideRecognizerResult || result instanceof BlinkIDReactNative.BlinkIdSingleSideRecognizerResult) {
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
             if (result instanceof BlinkIDReactNative.BlinkIdMultiSideRecognizerResult) {
                let dataMatchResult = blinkIdResult.dataMatch;
                resultString +=
                        buildResult(dataMatchResult.stateForWholeDocument, "State for the whole document") +
                        buildResult(dataMatchResult.states[0].state, "dateOfBirth") +
                        buildResult(dataMatchResult.states[1].state, "dateOfExpiry") +
                        buildResult(dataMatchResult.states[2].state, "documentNumber");    
             }

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
            if (result instanceof BlinkIDReactNative.BlinkIdMultiSideRecognizerResult) {
                if (blinkIdResult.fullDocumentFrontImage) {
                    localState.showFrontImageDocument = true;
                    localState.resultFrontImageDocument = 'data:image/jpg;base64,' + blinkIdResult.fullDocumentFrontImage;
                }
                if (blinkIdResult.fullDocumentBackImage) {
                    localState.showBackImageDocument = true;
                    localState.resultBackImageDocument = 'data:image/jpg;base64,' + blinkIdResult.fullDocumentBackImage;
                }
            } else {
                if (blinkIdResult.fullDocumentImage) {
                    localState.showFrontImageDocument = true;
                    localState.resultFrontImageDocument = 'data:image/jpg;base64,' + blinkIdResult.fullDocumentImage;
                    localState.showBackImageDocument = false;
                    localState.resultBackImageDocument = "";
                }
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
             <Button
                onPress={this.directApiMultiSide.bind(this)} 
                title="DirectAPI MultiSide"
                color="#48B2E8"
                />
            <Button
                onPress={this.directApiSingleSide.bind(this)}
                title="DirectAPI SingleSide"
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
    marginTop: 50,
    color: "black"
  },
  buttonContainer: {
    margin: 20,
    marginTop: 20,
    marginBottom: 20,
    marginTop: 20,
    gap: 20,
  },
  imageContainer: {
    flexDirection: 'row',
    justifyContent: 'center'
  },
  results: {
    fontSize: 16,
    textAlign: 'left',
    margin: 10,
    color: 'black'
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