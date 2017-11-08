#!/bin/bash

# remove any existing code
rm -rf BlinkIDReactNative

# create a sample application
react-native init --version="0.48.3" BlinkIDReactNative

# enter into demo project folder
cd BlinkIDReactNative

# download npm package
echo "Downloading blinkid-react-native module"
npm i --save blinkid-react-native

npm install

# link package with project
echo "Linking blinkid-react-native module with project"
react-native link blinkid-react-native

# enter into android project folder
cd android

# add the microblink maven repository to build.gradle
cat > build.gradle << EOF
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {
    repositories {
        jcenter()
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:2.2.3'

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {
    repositories {
        mavenLocal()
        jcenter()
        maven {
            // All of React Native (JS, Obj-C sources, Android binaries) is installed from npm
            url "\$rootDir/../node_modules/react-native/android"
        }
        maven { url 'http://maven.microblink.com' }
    }
}
EOF

# go to react native root project
cd ..

# enter into ios project folder
cd ios

# initialize Podfile
echo "Initializing and installing Podfile"
pod init

# remove Podfile
rm -f Podfile

# replace Podfile with new Podfile
cat > Podfile << EOF
platform :ios, '8.0'

target 'BlinkIDReactNative' do
  pod 'PPBlinkID', '~> 2.12.0'
end
EOF

# install pod
pod install

# go to react native root project
cd ..

# remove index.js
rm -f index.js

# remove index.ios.js
rm -f index.ios.js

# remove index.android.js
rm -f index.android.js

# create demp app index.js with content
cat > index.js << EOF
/**
 * Sample React Native App for BlinkID
 * https://github.com/BlinkID/blinkid-react-native
 */

 /**
* Use these recognizer types
* Available: RECOGNIZER_USDL, RECOGNIZER_MRTD, RECOGNIZER_EUDL, RECOGNIZER_DOCUMENT_FACE
* RECOGNIZER_USDL - scans barcodes located on the back of US driver license
* RECOGNIZER_MRTD - scans Machine Readable Travel Document, contained in various IDs and passports
* RECOGNIZER_EUDL - scans the front of European driver license
* RECOGNIZER_MYKAD - scans the front of Malaysian ID
* RECOGNIZER_DOCUMENT_FACE - scans documents with face image and returns document images
*/

/**
 * There are several options you need to pass to scan function to add recognizers and to obtain the image and results
 * available:
 * enableBeep : if it is set to true, successful scan will play a sound
 * useFrontCamera : if it is set to false, back camera is used, else front
 * shouldReturnCroppedImage : if true, cropped images in the recognition process will be returned
 * shouldReturnSuccessfulImage : if true, image on which scan gave valid scanning result will be returned
 * recognizers : array which contains recognizers that will be activated
 */

/**
 * Scan method returns scan fields in JSON format and image(s) (image is returned as Base64 encoded JPEG)
 * scanningResult.resultImageCropped : cropped document image
 * scanningResult.resultImageSuccessful : full image on which scan gave valid scanning result
 * scanningResult.resultList : array of scanning results in JSON format (each activated recognizer can produce its own result)
 */


import React, { Component } from 'react';
import {BlinkID, MRTDKeys, USDLKeys, EUDLKeys, MYKADKeys, PDF417Keys} from 'blinkid-react-native';
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
      ios: 'E2ONP7QK-SGLUN3RH-YIEFNMOT-Q23AMHC6-U7EIRDKV-ZZJO73HG-3ZOUG574-VLZMR3HC',
      // android license key for applicationID: com.blinkidreactnative
      android: 'FDHBV6QZ-BW3EPUBO-U4LQEDFN-PPHKWSW6-HSYM5K2K-3Y6LBTVL-JLPDZMGO-VNFKTKTX'
})

var renderIf = function(condition, content) {
  if (condition) {
      return content;
  } 
  return null;
}

export default class BlinkIDReactNative extends Component {
  constructor(props) {
    super(props);
    this.state = {showImageCropped: false,
                  resultImageCropped: '',
                  showImageFace: false,
                  resultImageFace: '',
                  results: '',
                  licenseKeyErrorMessage: ''};
  }
  async scan() {
    try {
      const scanningResult = await BlinkID.scan(
      licenseKey,
      {
        enableBeep: true,
        useFrontCamera: false,
        shouldReturnCroppedImage: true,
        shouldReturnSuccessfulImage: false,
        // Returns face image when BlinkID.RECOGNIZER_DOCUMENT_FACE is used
        shouldReturnFaceImage: true,
        recognizers: [
          // scans documents with face image and returns document images
          // BlinkID.RECOGNIZER_DOCUMENT_FACE,
          // scans documents with MRZ (Machine Readable Zone)
          BlinkID.RECOGNIZER_MRTD,
          // scans USDL (US Driver License)
          BlinkID.RECOGNIZER_USDL,
          // scans EUDL (EU Driver License)
          BlinkID.RECOGNIZER_EUDL,
          // scans MyKad (Malaysian ID)
          BlinkID.RECOGNIZER_MYKAD,
          // scans PDF417 type of barcode
          BlinkID.RECOGNIZER_PDF417
        ]
      })
      if (scanningResult) {
        let resultList = scanningResult.resultList;
        let resultsFormattedText = "";
        let fieldDelim = ";\n";
        for (let i = 0; i < resultList.length; i++) {
          // Get individual resilt
          var recognizerResult = resultList[i];
          resultsFormattedText += "Result type: " + recognizerResult.resultType + fieldDelim;
          if (recognizerResult.resultType == "USDL result") {
              // handle USDL parsing resul
              var fields = recognizerResult.fields
              // USDLKeys are keys from keys/usdl_keys.js
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

          } else if (recognizerResult.resultType == "MRTD result") {
                      
              var fields = recognizerResult.fields
              // MRTDKeys are keys from keys/mrtd_keys.js
              resultsFormattedText += /** Personal information */
                                      "Family name: " + fields[MRTDKeys.PrimaryId] + fieldDelim +
                                      "First name: " + fields[MRTDKeys.SecondaryId] + fieldDelim +
                                      "Date of birth: " + fields[MRTDKeys.DateOfBirth] + fieldDelim +
                                      "Sex: " + fields[MRTDKeys.Sex] + fieldDelim +
                                      "Nationality: " + fields[MRTDKeys.Nationality] + fieldDelim +
                                      "Date of Expiry: " + fields[MRTDKeys.DateOfExpiry] + fieldDelim +
                                      "Document Code: " + fields[MRTDKeys.DocumentCode] + fieldDelim +
                                      "Document Number: " + fields[MRTDKeys.DocumentNumber] + fieldDelim +
                                      "Issuer: " + fields[MRTDKeys.Issuer] + fieldDelim +
                                      "Opt1: " + fields[MRTDKeys.Opt1] + fieldDelim +
                                      "Opt2: " + fields[MRTDKeys.Opt2] + fieldDelim;

          } else if (recognizerResult.resultType == "EUDL result") {
                          
              var fields = recognizerResult.fields
              // EUDLKeys are keys from keys/eudl_keys.js
              resultsFormattedText += /** Personal information */
                                      "First name: " + fields[EUDLKeys.FirstName] + fieldDelim +
                                      "Last name: " + fields[EUDLKeys.LastName] + fieldDelim +
                                      "Date of Expiry: " + fields[EUDLKeys.ExpiryDate] + fieldDelim +
                                      "Issue Date: " + fields[EUDLKeys.IssueDate] + fieldDelim +
                                      "Driver Number: " + fields[EUDLKeys.DriverNumber] + fieldDelim +
                                      "Address: " + fields[EUDLKeys.Address] + fieldDelim +
                                      "Birth Data: " + fields[EUDLKeys.BirthData] + fieldDelim;

          } else if (recognizerResult.resultType == "MyKad result") {
    
              var fields = recognizerResult.fields
              // MYKADKeys are keys from keys/mykad_keys.js
              resultsFormattedText += /** Personal information */
                                      "Full name: " + fields[MYKADKeys.FullName] + fieldDelim +
                                      "NRIC Number: " + fields[MYKADKeys.NricNumber] + fieldDelim +
                                      "Address: " + fields[MYKADKeys.Address] + fieldDelim +
                                      "City: " + fields[MYKADKeys.AddressCity] + fieldDelim +
                                      "State: " + fields[MYKADKeys.AddressState] + fieldDelim +
                                      "Street: " + fields[MYKADKeys.AddressStreet] + fieldDelim +
                                      "Zip code: " + fields[MYKADKeys.AddressZipCode] + fieldDelim +
                                      "Date of birth: " + fields[MYKADKeys.DateOfBirth] + fieldDelim +
                                      "Religion: " + fields[MYKADKeys.Religion] + fieldDelim +
                                      "Sex: " + fields[MYKADKeys.Sex] + fieldDelim;
          } else if (recognizerResult.resultType == "PDF417 result") {

            var fields = recognizerResult.fields
            // PDF417Keys are keys from keys/pdf417_keys.js
            resultsFormattedText += "Barcode data: " + fields[PDF417Keys.BarcodeData] + fieldDelim;

          } else if (recognizerResult.resultType == "DocumentFace result") {
            // document face recognizer returns only images
          }
          resultsFormattedText += '\n';
        }
        // image is returned as base64 encoded JPEG, we expect resultImageCorpped because we have activated obtaining of cropped images (shouldReturnCroppedImage: true)
        // to obtain image from successful scan, activate option (shouldReturnSuccessfulImage: true) and get is with scanningResult.resultImageSuccessful
        this.setState({showImageCropped: scanningResult.resultImageCropped, resultImageCropped: 'data:image/jpg;base64,' + scanningResult.resultImageCropped,
                       showImageFace: scanningResult.resultImageFace, resultImageFace: 'data:image/jpg;base64,' + scanningResult.resultImageFace, results: resultsFormattedText});}
    } catch(error) {
        this.setState({ showImageCropped: false, resultImageCropped: '', showImageFace: false, resultImageFace: '', results: error.message});
    }
    
  }

  render() {
    let displayImageCropped = this.state.resultImageCropped;
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
          {renderIf(this.state.showImageCropped,
              <View style={styles.imageContainer}>
              <Image
                resizeMode='contain'
                source={{uri: displayImageCropped, scale: 3}} style={styles.imageResult}/>
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

AppRegistry.registerComponent('BlinkIDReactNative', () => BlinkIDReactNative);
EOF

# use the same index.js file for Android and iOS
cp index.js index.ios.js
cp index.js index.android.js

echo "Go to React Native project folder: cd BlinkIDReactNative"
echo "To run on Android execute: react-native run-android"
echo "To run on iOS: go to BlinkIDReactNative/ios and open BlinkIDReactNative.xcworkspace; set your development team and add Privacy - Camera Usage Description key to Your info.plist file and press run"