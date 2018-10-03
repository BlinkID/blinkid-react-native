# BlinkID SDK wrapper for React Native

This repository contains example wrapper for BlinkID native SDK for [Android](https://github.com/BlinkID/blinkid-android) and [iOS](https://github.com/BlinkID/blinkid-ios). For 100% of features and maximum control, consider using native SDK.


### Licensing

- [Generate](https://microblink.com/login?url=/customer/generatedemolicence) a **free demo license key** to start using the SDK in your app (registration required)

- Get information about pricing and licensing of [BlinkID](https://microblink.com/blinkid)

## React Native Version

BlinkID React Native was built and tested with [React Native v0.56.0](https://github.com/facebook/react-native/releases/tag/v0.56.0)

## Installation

First generate an empty project if needed:

```shell
react-native init --version="0.56.0" NameOfYourProject
```

Add the **blinkid-react-native** module to your project:

```shell
cd <path_to_your_project>
npm i --save blinkid-react-native
```

## Linking

### iOS

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

#### If you use react-native link for linking

Link module with your project: 

```shell
react-native link blinkid-react-native
```

##### Podfile

```ruby
platform :ios, '9.0'

target 'TargetName' do
  pod 'PPBlinkID', '~> 4.2.0'
end
```

#### If you don't use react-native link

##### Podfile

```ruby
platform :ios, '9.0'

target 'TargetName' do
  pod 'blinkid-react-native', path: '../node_modules/blinkid-react-native'
end
```

After setting Your `Podfile`, run in terminal

```shell
pod install
```

**To run iOS application, open NameOfYourProject.xcworkspace, set Your team for every Target in General settings and add Privacy - Camera Usage Description key to Your info.plist file and press run**

### Android

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

This repository contains **initReactNativeDemoApp.sh** script that will create React Native project and download all of its dependencies. You can run this script with following command: 
```shell
./initReactNativeDemoApp.sh
```

## Video tutorial

Step by step guide how to start blinkid-reactnative demo app. A tutorial flows from cloning repository via git clone to successfully deployed demo application on Android and iOS device with real-time screen mirroring. Application demo contains the simple use of USDL recognizer with Ontario drivers license card.

<p align="center" >
  <a href="https://vimeo.com/293090827" target="_blank">
    <img src="https://i.vimeocdn.com/video/725592267_1280x720.jpg" alt="Video tutorial" />
  </a>
  <a href="https://vimeo.com/293090827" target="_blank">Watch on Vimeo</a>
</p>

  ### Using documentVerificationOverlay and CombinedRecognizer

This video tutorial describes how to use documentVerificationOverlay with UsdlCombinedRecognizer.
DocumentVerificationOverlay is overlay for RecognizerRunnerFragment best suited for combined recognizers because it manages scanning of multiple document sides in the single camera opening and guides the user through the scanning process. It can also be used for single side scanning of ID cards, passports, driver’s licenses, etc

<p align="center" >
  <a href="https://vimeo.com/293090827" target="_blank">
    <img src="https://i.vimeocdn.com/video/729644410_1280x720.jpg" alt="Video tutorial" />
  </a>
  <a href="https://vimeo.com/293090827" target="_blank">Watch on Vimeo</a>
</p>

## Usage

To use the module you call it in your index.android.js or index.ios.js file like in the [example app](demoApp/index.js). Available recognizers and API documentation is available in [JS API files](BlinkID).

## FAQ

**Can I create a custom UI overlay?**

Yes you can, but you will have to implement it natively for android and ios, you can see native implementation guides [here(Android)](https://github.com/BlinkID/blinkid-android#recognizerRunnerView) and [here(ios)](https://github.com/BlinkID/blinkid-ios#recognizerRunnerViewController).
