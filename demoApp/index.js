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
    // iOS license key for applicationID: org.reactjs.native.example.BlinkIDReactNative
    ios: 'sRwAAAEtb3JnLnJlYWN0anMubmF0aXZlLmV4YW1wbGUuQmxpbmtJRFJlYWN0TmF0aXZlt67qu09k2vMma/ITr+jUtWmLD35LqqjTZ1bNQ8RrUXPJVu4Lyo7WV1+5GwcehkPUaU2n8F/oT8jCFJBR3FlfEUmT/nHq8zx3LeRapo+NZEtYN67UnO2A1x/gruVl2BWjEfaGgM7qAGTPIVHqmwlzoRG0wVsljcNsoY9L4C+92IJdgocaLEyEBiJ0DG+0OJWs7PFcqk9W8ukSFdzR+g7c7SY9uC6APTnrmAkVlRc8wp5yfiDGI0zN+ZM=',
    // android license key for applicationID: com.blinkidreactnative
    android: 'sRwAAAAWY29tLmJsaW5raWRyZWFjdG5hdGl2ZYouOut2S2CbdVuoF2+4aAWuB8Cb+WnlM19FpeNDWdUmTe0PoaZU+H5s+iD39qIPn2blLdN3LF5ct3tPzzx29y+OCEszdqG1WPa4604jpWrWiIqjuR66ngXBFcKsih+3SDeObL1O8GS4Ha/5zghEAKhl3i95HzD2EE9HIX9nl95Co4/HlAD2qqOIeXAZueiiV8JnlBMKWfqCOVbN8dOXf4/iGzzS0ctLckP/IQjK/hHIAP0544UKuL2O'
})

var renderIf = function(condition, content) {
    if (condition) {
        return content;
    } 
    return null;
}

export default class BlinkIDReactNativeApp extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showImageDocument: false,
            resultImageDocument: '',
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
            // to scan EU driver's licenses, use EudlRecognizer
            var eudlRecognizer = new BlinkIDReactNative.EudlRecognizer();
            eudlRecognizer.returnFaceImage = true;
            eudlRecognizer.returnFullDocumentImage = true;

            // if you also want to obtain camera frame on which specific recognizer has
            // finished its recognition, wrap it with SuccessFrameGrabberRecognizer and use
            // the wrapper instead of original for building RecognizerCollection
            var eudlSuccessFrameGrabber = new BlinkIDReactNative.SuccessFrameGrabberRecognizer(eudlRecognizer);

            // to scan US Driver's licenses, use UsdlRecognizer
            var usdlRecognizer = new BlinkIDReactNative.UsdlRecognizer();

            var usdlSuccessFrameGrabber = new BlinkIDReactNative.SuccessFrameGrabberRecognizer(usdlRecognizer);

            // to scan any machine readable travel document (passports, visa's and IDs with 
            // machine readable zone), use MrtdRecognizer
            var mrtdRecognizer = new BlinkIDReactNative.MrtdRecognizer();
            mrtdRecognizer.returnFullDocumentImage = true;

            var mrtdSuccessFrameGrabber = new BlinkIDReactNative.SuccessFrameGrabberRecognizer(mrtdRecognizer);

            const scanningResults = await BlinkIDReactNative.BlinkID.scanWithCamera(
                new BlinkIDReactNative.DocumentOverlaySettings(),
                new BlinkIDReactNative.RecognizerCollection([eudlSuccessFrameGrabber, usdlSuccessFrameGrabber, mrtdSuccessFrameGrabber]),
                licenseKey
            );

            if (scanningResults) {
                let newState = {
                    showImageDocument: false,
                    resultImageDocument: '',
                    showImageFace: false,
                    resultImageFace: '',
                    results: '',
                    showSuccessFrame: false,
                    successFrame: ''
                };

                for (let i = 0; i < scanningResults.length; ++i) {
                    let localState = this.handleResult(scanningResults[i]);
                    newState.showImageDocument = newState.showImageDocument || localState.showImageDocument;
                    if (localState.resultImageDocument) {
                        newState.resultImageDocument = localState.resultImageDocument;
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
            this.setState({ showImageDocument: false, resultImageDocument: '', showImageFace: false, resultImageFace: '', results: 'Scanning has been cancelled', showSuccessFrame: false,
            successFrame: ''});
        }
    }

    handleResult(result) {
        let fieldDelim = ";\n";
        
        var localState = {
            showImageDocument: false,
            resultImageDocument: '',
            showImageFace: false,
            resultImageFace: '',
            results: '',
            showSuccessFrame: false,
            successFrame: ''
        };
        
        if (result instanceof BlinkIDReactNative.UsdlRecognizerResult) {
            // handle USDL parsing result
            let fields = result.fields
            let USDLKeys = BlinkIDReactNative.UsdlKeys;
            localState.results += /** Personal information */
                "USDL version: " + fields[USDLKeys.StandardVersionNumber] + fieldDelim +
                "Family name: " + fields[USDLKeys.CustomerFamilyName] + fieldDelim +
                "First name: " + fields[USDLKeys.CustomerFirstName] + fieldDelim +
                "Date of birth: " + fields[USDLKeys.DateOfBirth] + fieldDelim +
                "Sex: " + fields[USDLKeys.Sex] + fieldDelim +
                "Eye color: " + fields[USDLKeys.EyeColor] + fieldDelim +
                "Height: " + fields[USDLKeys.Height] + fieldDelim +
                "Street: " + fields[USDLKeys.AddressStreet] + fieldDelim +
                "City: " + fields[USDLKeys.AddressCity] + fieldDelim +
                "Jurisdiction: " + fields[USDLKeys.AddressJurisdictionCode] + fieldDelim +
                "Postal code: " + fields[USDLKeys.AddressPostalCode] + fieldDelim +
                  /** License information */
                  "Issue date: " + fields[USDLKeys.DocumentIssueDate] + fieldDelim +
                  "Expiration date: " + fields[USDLKeys.DocumentExpirationDate] + fieldDelim +
                  "Issuer ID: " + fields[USDLKeys.IssuerIdentificationNumber] + fieldDelim +
                  "Jurisdiction version: " + fields[USDLKeys.JurisdictionVersionNumber] + fieldDelim +
                  "Vehicle class: " + fields[USDLKeys.JurisdictionVehicleClass] + fieldDelim +
                  "Restrictions: " + fields[USDLKeys.JurisdictionRestrictionCodes] + fieldDelim +
                  "Endorsments: " + fields[USDLKeys.JurisdictionEndorsementCodes] + fieldDelim +
                  "Customer ID: " + fields[USDLKeys.CustomerIdNumber] + fieldDelim;
        } else if (result instanceof BlinkIDReactNative.MrtdRecognizerResult) {
            let mrtdResult = result;
            localState.results +=
                "First name: " + mrtdResult.mrzResult.secondaryId + fieldDelim +
                "Last name: " + mrtdResult.mrzResult.primaryId + fieldDelim +
                "Nationality: " + mrtdResult.mrzResult.nationality + fieldDelim +
                "Gender: " + mrtdResult.mrzResult.gender + fieldDelim +
                "Date of birth: " +
                    mrtdResult.mrzResult.dateOfBirth.day + "." +
                    mrtdResult.mrzResult.dateOfBirth.month + "." +
                    mrtdResult.mrzResult.dateOfBirth.year + ".";
            
              // Document image is returned as Base64 encoded JPEG
              if (mrtdResult.fullDocumentImage) {
                  localState.showImageDocument = true;
                  localState.resultImageDocument = 'data:image/jpg;base64,' + mrtdResult.fullDocumentImage;
              }
        } else if (result instanceof BlinkIDReactNative.EudlRecognizerResult) {
            localState.results +=
                "First name: " + result.firstName + fieldDelim +
                "Last name: " + result.lastName + fieldDelim +
                "Address: " + result.address + fieldDelim +
                "Personal number: " + result.personalNumber + fieldDelim +
                "Driver number: " + result.driverNumber + fieldDelim;
            
            // Document image is returned as Base64 encoded JPEG
            if (result.fullDocumentImage) {
                localState.showImageDocument = true;
                localState.resultImageDocument = 'data:image/jpg;base64,' + result.fullDocumentImage;
            }
        
            // Face image is returned as Base64 encoded JPEG
            if (result.faceImage) {
                localState.showImageFace = true;
                localState.resultImageFace = 'data:image/jpg;base64,' + result.faceImage;
            }
        } else if (result instanceof BlinkIDReactNative.SuccessFrameGrabberRecognizerResult) {
            // first handle slave result, and then add success frame image
            localState = this.handleResult(result.slaveRecognizerResult);
  
              // success frame is returned as Base64 encoded JPEG
            if (result.successFrame) {
                localState.showSuccessFrame = true;
                localState.successFrame = 'data:image/jpg;base64,' + result.successFrame;
            }
        }
        return localState;
    }

    render() {
        let displayImageDocument = this.state.resultImageDocument;
        let displayImageFace = this.state.resultImageFace;
        let displaySuccessFrame = this.state.successFrame;
        let displayFields = this.state.results;
        return (
        <View style={styles.container}>
            <Text style={styles.label}>MicroBlink Ltd</Text>
            <View style={styles.buttonContainer}>
            <Button
                onPress={this.scan.bind(this)}
                title="Scan"
                color="#87c540"
            />
            </View>
            <ScrollView
            automaticallyAdjustContentInsets={false}
            scrollEventThrottle={200}y> 
            {renderIf(this.state.showImageDocument,
                <View style={styles.imageContainer}>
                <Image
                    resizeMode='contain'
                    source={{uri: displayImageDocument, scale: 3}} style={styles.imageResult}/>
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
            <Text style={styles.results}>{displayFields}</Text>
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
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  label: {
    fontSize: 20,
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
    fontSize: 20,
    textAlign: 'center',
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

AppRegistry.registerComponent('BlinkIDReactNative', () => BlinkIDReactNativeApp);
