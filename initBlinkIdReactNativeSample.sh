#!/bin/bash

blink_id_plugin_path=`pwd`/BlinkID
appName=BlinkIdSample
appId=com.microblink.sample
rn_version="0.79.0"

# remove any existing code
rm -rf $appName


# create a sample application
# https://github.com/react-native-community/cli#using-npx-recommended
#npx @react-native-community/cli init $appName  || exit 1
npx @react-native-community/cli init $appName --package-name $appId --title "BlinkID React-Native Sample" --version "$rn_version"

# enter into demo project folder
pushd $appName || exit 1

# Inject esModuleInterop into tsconfig.json
# Add "esModuleInterop": true into compilerOptions in tsconfig.json
sed -i '' '/"compilerOptions": {/a\
\    "esModuleInterop": true,\
\    "allowSyntheticDefaultImports": true,\
\    "skipLibCheck": true,
' tsconfig.json

IS_LOCAL_BUILD=true || exit 1
if [ "$IS_LOCAL_BUILD" = true ]; then
  echo "Using blinkid-react-native from this repo instead from NPM"
  # use directly source code from this repo instead of npm package
  npm pack $blink_id_plugin_path
  npm i --save blinkid-react-native-7.2.0.tgz
  #pushd node_modules
    #ln -s $blink_id_plugin_path blinkid-react-native
  #popd
else
  # download npm package
  echo "Downloading blinkid-react-native module"
  npm install --save blinkid-react-native
fi

# react-native-image-picker plugin needed only for sample application with DirectAPI to get the document images
npm i react-native-image-picker

# enter into android project folder
pushd android || exit 1

# patch the build.gradle to add "maven { url https://maven.microblink.com }"" repository
perl -i~ -pe "BEGIN{$/ = undef;} s/maven \{/maven \{ url 'https:\\/\\/maven.microblink.com' }\n        maven {/" build.gradle

# return from android project folder
popd

# enter into ios project folder
pushd ios || exit 1

#Force minimal iOS version
sed -i '' "s/platform :ios, min_ios_version_supported/platform :ios, '16.0'/" Podfile

# Add the camera and photo usage descriptions into Info.plist to enable camera scanning the image upload via gallery
sed -i '' '/<dict>/a\
  <key>NSCameraUsageDescription</key>\
  <string>Enable the camera usage for BlinkID default UX scanning</string>\
  <key>NSPhotoLibraryUsageDescription</key>\
  <string>Enable photo gallery usage for BlinkID DirectAPI scanning</string>\
' $appName/Info.plist

#Disable Flipper since it spams console with errors
export NO_FLIPPER=1

pod install

# return from ios project folder
popd

# add the sample files with the BlinkID integration code to the sample application
cp ../sample_files/App.tsx ./
cp ../sample_files/BlinkIdResultBuilder.ts ./

# return to root folder
popd
echo "
Instruction for running the $appName sample application:
 
Go to the React Native project folder: cd $appName

----- Android instuctions -----

Execute: npx react-native run-android

----- iOS instuctions -----

1. Execute npx react-native start
2. Open $appName/ios/$appName.xcworkspace
3. Set your development team
4. Press run
"
