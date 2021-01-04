# BlinkID SDK wrapper for React Native

Best-in-class ID scanning software for cross-platform apps built with React Native.

Below, you’ll find a quick guide on starting your own demo project as well as complete guidance on installing and linking BlinkID library with your iOS and Android apps ⬇️

For a full access to all features and functionalities, please consider using our native SDKs (for [iOS](https://github.com/BlinkID/blinkid-ios) or [Android](https://github.com/BlinkID/blinkid-android))


## Licensing

- [Generate](https://microblink.com/login?url=/customer/generatedemolicence) a **free trial license key** to start using the SDK in your app (registration required)

- For production licensing, please [contact sales](https://microblink.com/contact-us) to request a quote.

**Keep in mind:** Versions 5.8.0 and above require an internet connection to work under our new License Management Program.

We’re only asking you to do this so we can validate your trial license key. Scanning or data extraction of identity documents still happens offline, on the device itself. 

Once the validation is complete, you can continue using the SDK in offline mode (or over a private network) until the next check.


## React Native Version

BlinkID React Native was built and tested with [React Native v0.63.2](https://github.com/facebook/react-native/releases/tag/v0.63.2)

## Installation

First generate an empty project if needed:

```shell
react-native init --version="0.63.2" NameOfYourProject
```

Add the **blinkid-react-native** module to your project:

```shell
cd <path_to_your_project>
npm i --save blinkid-react-native
```

## Linking

### iOS

Link module with your project: 

```shell
react-native link blinkid-react-native
```

[CocoaPods](http://cocoapods.org) is a dependency manager for Objective-C, which automates and simplifies the process of using 3rd-party libraries like BlinkID in your projects.

- If you wish to use version v1.4.0 or above, you need to install [Git Large File Storage](https://git-lfs.github.com) by running these comamnds:

```shell
brew install git-lfs
git lfs install
```

- **Be sure to restart your console after installing Git LFS**

#### Installing pods

From [react-native 0.60](https://facebook.github.io/react-native/blog/2019/07/03/version-60#cocoapods-by-default) CocoaPods are now part of React Native's iOS project.

Go to `NameOfYourProject/ios` folder and install Pods

```shell
pod install
```

Our `blinkid-react-native` depends on latest `PPBlinkID` pod so it will be installed automatically.

**To run iOS application, open NameOfYourProject.xcworkspace, set Your team for every Target in General settings and add Privacy - Camera Usage Description key to Your info.plist file and press run**

### Android

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

## Sample

This repository contains **initReactNativeSampleApp.sh** script that will create React Native project and download all of its dependencies. You can run this script with following command: 
```shell
./initReactNativeSampleApp.sh
```

## Video tutorial

Step by step guide how to start blinkid-reactnative sample app. A tutorial flows from cloning repository via git clone to successfully deployed sample application on Android and iOS device with real-time screen mirroring. Application sample contains the simple use of USDL recognizer with Ontario drivers license card.

<p align="center" >
  <a href="https://vimeo.com/289850200" target="_blank">
    <img src="https://i.vimeocdn.com/video/725592267_1280x720.jpg" alt="Video tutorial" />
  </a>
  <a href="https://vimeo.com/289850200" target="_blank">Watch on Vimeo</a>
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

To use the module you call it in your index.android.js or index.ios.js file like in the [sample app](SampleFiles/index.js). Available recognizers and API documentation is available in [JS API files](BlinkID).

## FAQ

**Can I create a custom UI overlay?**

Yes you can, but you will have to implement it natively for android and ios, you can see native implementation guides [here(Android)](https://github.com/BlinkID/blinkid-android#recognizerRunnerView) and [here(ios)](https://github.com/BlinkID/blinkid-ios#recognizerRunnerViewController).

## Known react-native problems:

### iOS
React native v0.62.2

** [NSURLResponse allHeaderFields]: unrecognized selector sent to instance**

Make sure to use the Flipper version 0.37.0 in your Podfile:

`versions['Flipper'] ||= '~> 0.37.0'` 

### Android build exception - missing `ReactSwipeRefreshLayout`

**java.lang.NoClassDefFoundError: com.facebook.react.views.swiperefresh.ReactSwipeRefreshLayout**

Add the following line to dependencies section in android/app/build.gradle:

`implementation 'androidx.swiperefreshlayout:swiperefreshlayout:1.1.0-alpha02'`

