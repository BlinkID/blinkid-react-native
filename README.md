# BlinkID SDK wrapper for React Native

This repository contains example wrapper for BlinkID native SDK for [Android](https://github.com/BlinkID/blinkid-android) and [iOS](https://github.com/BlinkID/blinkid-ios). For 100% of features and maximum control, consider using native SDK.


### Licensing

- [Generate](https://microblink.com/login?url=/customer/generatedemolicence) a **free demo license key** to start using the SDK in your app (registration required)

- Get information about pricing and licensing of [BlinkID](https://microblink.com/blinkid)

## React Native Version

BlinkID React Native was built and tested with [React Native v0.48.3](https://github.com/facebook/react-native/releases/tag/v0.48.3)

## Installation

First generate an empty project if needed:

```shell
react-native init NameOfYourProject
```

Add the **blinkid-react-native** module to your project:

```shell
cd <path_to_your_project>
npm i --save blinkid-react-native
```

Link module with your project: 

```shell
react-native link blinkid-react-native
```

Add microblink maven repository to project level build.gradle:

```
allprojects {
  repositories {
    // don't forget to add maven and jcenter
    mavenLocal()
    jcenter()
    
    // ... other repositories your project needs
    
    maven { url "http://maven.microblink.com" }
  }
}
```

## Demo

This repository contains **initReactNativeDemoApp.sh** script that will create React Native project and download all of its dependencies. Put that script in your wanted folder and run this command: 
```shell
./initReactNativeDemoApp.sh
```

### Video tutorial
Step by step guide how to start BlinkID React Native. A tutorial flows from git clone to successfully deployed demo application on iOS device with real-time screen mirroring. Application demo contains simple use of USDL recognizer with Ontario DL card.
<p align="center" >
  <a href="https://vimeo.com/241003187" target="_blank">
    <img src="https://i.vimeocdn.com/video/664456443.webp" alt="Video tutorial" />
  </a>
  <a href="https://vimeo.com/241003187" target="_blank">Watch on Vimeo</a>
</p>

## iOS Installation and Settings

[CocoaPods](http://cocoapods.org) is a dependency manager for Objective-C, which automates and simplifies the process of using 3rd-party libraries like BlinkID in your projects.

- If you wish to use version v1.4.0 or above, you need to install [Git Large File Storage](https://git-lfs.github.com) by running these comamnds:

```shell
brew install git-lfs
git lfs install
```

- **Be sure to restart your console after installing Git LFS**

Go to NameOfYourProject/ios folder and create Podfile

```shell
pod init
```

### Podfile

```ruby
platform :ios, '9.0'

target 'TargetName' do
  pod 'PPBlinkID', '~> 2.10.0'
end
```

After setting Your Podfile, run in terminal

```shell
pod install
```

**To run iOS application, open NameOfYourProject.xcworkspace, set Your team for every Target in General settings and add Privacy - Camera Usage Description key to Your info.plist file and press run**

## Usage

To use the module you call it in your index.android.js or index.ios.js file like the example below:

```javascript
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
import {BlinkID, MRTDKeys, USDLKeys, EUDLKeys, MYKADKeys} from 'blinkid-react-native';
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
      ios: '4AMPFP2U-EO3W6VZS-DJ6LRUEI-XZB5PYXG-3ZOUHV7C-43PF2Q6X-4LTN57K7-5E5WSJ6B',
      // android license key for applicationID: com.blinkidreactnative
      android: 'VF2QEAKE-IZYWGJZJ-6T43WTEY-VTKDF37N-HBPMOOC6-Y44F5RZY-L3DTQXWH-HBPLB7DZ'
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
    this.state = {showImage: false, 
                  resultImage: '',
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
          BlinkID.RECOGNIZER_MYKAD
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

          } else if (recognizerResult.resultType == "DocumentFace result") {
            // document face recognizer returns only images
          }
          resultsFormattedText += '\n';
        }
        // image is returned as base64 encoded JPEG, we expect resultImageCorpped because we have activated obtaining of cropped images (shouldReturnCroppedImage: true)
        // to obtain image from successful scan, activate option (shouldReturnSuccessfulImage: true) and get is with scanningResult.resultImageSuccessful
        this.setState({ showImage: scanningResult.resultImageCropped, resultImage: 'data:image/jpg;base64,' + scanningResult.resultImageCropped, results: resultsFormattedText});
      }
    } catch(error) {
        this.setState({ showImage: false, resultImage: '', results: error.message});
    }
    
  }

  render() {
    let displayImage = this.state.resultImage;
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
          {renderIf(this.state.showImage,
              <View style={styles.imageContainer}>
              <Image
                resizeMode='contain'
                source={{uri: displayImage, scale: 3}} style={styles.imageResult}/>
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

```
+ Available recognizers are:
    + **RECOGNIZER_USDL**  - scans barcodes located on the back of US driver's license
    + **RECOGNIZER_MRTD** - scans Machine Readable Travel Document, contained in various IDs and passports
    + **RECOGNIZER_EUDL** - scans the front of European driver's license
    + **RECOGNIZER\_MYKAD** - scans the front of Malaysian ID
    + **RECOGNIZER\_DOCUMENT\_FACE** - scans documents with face image and returns document images
	
+ Scan method returns scan fields in JSON format and images (image is returned as Base64 encoded JPEG)
	+ **scanningResult.resultList** : array of scanning results in JSON format (each activated recognizer can produce its own result)
	+ **scanningResult.resultImageCropped** : cropped document image
 	+ **scanningResult.resultImageSuccessful** : full image on which scan gave valid scanning result

+ LicenseKey parameter must be provided.

## FAQ

**Can I create a custom UI overlay?**

Yes you can, but you will have to implement it natively for android and ios, you can see native implementation guides [here(Android)](https://github.com/BlinkID/blinkid-android#recognizerView) and [here(ios)](https://github.com/BlinkID/blinkid-ios/wiki/Customizing-Camera-UI#steps-for-providing-custom-camera-overlay-view).
