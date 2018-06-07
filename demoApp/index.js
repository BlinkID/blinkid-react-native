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
      ios: 'sRwAAAEtb3JnLnJlYWN0anMubmF0aXZlLmV4YW1wbGUuQmxpbmtJRFJlYWN0TmF0aXZlt67qu3Fk2vMma/ITrjQRfa1DSpvMm8yEvRaQ3SuMwaMY0EluqswpnmAYdAMf0UHi27L7ZpbQTTnBAKGJ9LGGAUGwPEuvAwsxL5ESWSnabtuFl3ZKMT+cbzmsfY03KzTn17W5zQZqmiRvBEppFrn3ReRVTn7YCBfp25UrukFMLHI29Mfinzy65rc1aRMhRYU=',
      // android license key for applicationID: com.blinkidreactnative
      android: 'sRwAAAAWY29tLmJsaW5raWRyZWFjdG5hdGl2ZYouOutIS2CbdVuoF24kqsH6BLwKyP7n7dTfBKeKO4i/V1t/3T0nShrUFSV3iU0WOLaf4z+9P1CuTGVsr7huRDRGRMbwmeNDs4A008ywYfVIz50fitgGUNxc8eTLO7upwE9iuqXD7qSBY7GT/DUmfIg5PA5yXj+jIoZYZ6Kta5mDPzz+D3KdCOcxiTlZWxuk'
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
      results: '',
      licenseKeyErrorMessage: ''
    };

  }
  async scan() {
    try {
      // to scan US Driver's licenses, use USDLRecognizer
      var usdlRecognizer = new BlinkIDReactNative.USDLRecognizer();

      // to scan any machine readable travel document (passports, visa's and IDs with 
      // machine readable zone), use MRTDRecognizer
      var mrtdRecognizer = new BlinkIDReactNative.MRTDRecognizer();
      mrtdRecognizer.returnFullDocumentImage = true;
      const scanningResults = await BlinkIDReactNative.BlinkID.scanWithCamera(
        new BlinkIDReactNative.DocumentOverlaySettings(),
        new BlinkIDReactNative.RecognizerCollection([usdlRecognizer, mrtdRecognizer]),
        licenseKey
      );

      if (scanningResults) {
        let resultsFormattedText = "";
        let fieldDelim = ";\n";
        let shouldShowResultImageDocument = false;
        let shouldShowResultImageFace = false;
        let imageDocument = "";
        let imageFace = "";

        for (let i = 0; i < scanningResults.length; ++i) {
            let result = scanningResults[i];
            if (result instanceof BlinkIDReactNative.USDLRecognizerResult) {
                // handle USDL parsing result
                let fields = result.fields
                let USDLKeys = BlinkIDReactNative.USDLKeys;
                resultsFormattedText += /** Personal information */
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
              } else if (result instanceof BlinkIDReactNative.MRTDRecognizerResult) {
                  let mrtdResult = result;
                  resultsFormattedText +=
                      "First name: " + mrtdResult.MRZResult.secondaryId + fieldDelim +
                      "Last name: " + mrtdResult.MRZResult.primaryId + fieldDelim +
                      "Nationality: " + mrtdResult.MRZResult.nationality + fieldDelim +
                      "Gender: " + mrtdResult.MRZResult.gender + fieldDelim +
                      "Date of birth: " +
                          mrtdResult.MRZResult.dateOfBirth.day + "." +
                          mrtdResult.MRZResult.dateOfBirth.month + "." +
                          mrtdResult.MRZResult.dateOfBirth.year + ".";
                  
                    // Document image is returned as Base64 encoded JPEG
                    if (mrtdResult.fullDocumentImage) {
                      shouldShowResultImageDocument = true;
                      imageDocument = 'data:image/jpg;base64,' + mrtdResult.fullDocumentImage;
                    }
              }
        }
          resultsFormattedText += '\n';
          this.setState({showImageDocument: shouldShowResultImageDocument, resultImageDocument: imageDocument,
            showImageFace: shouldShowResultImageFace, resultImageFace: imageFace, results: resultsFormattedText});
        }
    } catch (error) {
        console.log(error);
        this.setState({ showImageDocument: false, resultImageDocument: '', showImageFace: false, resultImageFace: '', results: 'Scanning has been cancelled'});
    }
    
  }

  render() {
    let displayImageDocument = this.state.resultImageDocument;
    let displayImageFace = this.state.resultImageFace;
    let displayFields = this.state.results;
    let licenseKeyErrorMessage = this.state.licenseKeyErrorMessage;
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
