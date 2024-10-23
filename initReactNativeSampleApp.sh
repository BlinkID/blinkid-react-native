#!/bin/bash

blink_id_plugin_path=`pwd`/BlinkID
appName=Sample

# remove any existing code
rm -rf $appName

# create a sample application
# https://github.com/react-native-community/cli#using-npx-recommended
npx @react-native-community/cli init $appName --version="0.75" || exit 1

# enter into demo project folder
pushd $appName || exit 1

IS_LOCAL_BUILD=false || exit 1
if [ "$IS_LOCAL_BUILD" = true ]; then
  echo "Using blinkid-react-native from this repo instead from NPM"
  # use directly source code from this repo instead of npm package
  # from RN 0.57 symlink does not work any more
  npm pack $blink_id_plugin_path
  npm install --save blinkid-react-native-6.11.1.tgz
  #pushd node_modules
    #ln -s $blink_id_plugin_path blinkid-react-native
  #popd
else
  # download npm package
  echo "Downloading blinkid-react-native module"
  npm install --save blinkid-react-native
fi

# react-native-image-picker plugin needed only for sample application with DirectAPI to get the document images
npm install react-native-image-picker

# Auto-linking is done in 0.6 versions

# enter into android project folder
pushd android || exit 1

# patch the build.gradle to add "maven { url https://maven.microblink.com }"" repository
perl -i~ -pe "BEGIN{$/ = undef;} s/maven \{/maven \{ url 'https:\\/\\/maven.microblink.com' }\n        maven {/" build.gradle

# change package name
# adb uninstall "com.microblink.sample" 
mkdir -p app/src/main/java/com/microblink/sample
mkdir -p app/src/debug/java/com/microblink/sample
mv app/src/main/java/com/sample/* app/src/main/java/com/microblink/sample/
mv app/src/debug/java/com/sample/* app/src/debug/java/com/microblink/sample/
rmdir app/src/main/java/com/sample
rmdir app/src/debug/java/com/sample
grep -rl com.sample . | xargs sed -i '' s/com.sample/com.microblink.sample/g
./gradlew clean

# return from android project folder
popd

# enter into ios project folder
pushd ios || exit 1

#Force minimal iOS version
#sed -i '' "s/platform :ios, min_ios_version_supported/platform :ios, '13.0'/" Podfile

# install pod
pod install

# if [ "$IS_LOCAL_BUILD" = true ]; then
  # echo "Replace pod with custom dev version of BlinkID framework"
  # replace pod with custom dev version of BlinkID framework
  # pushd Pods/PPBlinkID || exit 1
  # rm -rf Microblink.bundle
  # rm -rf Microblink.framework
  # cp -r ~/Downloads/blinkid-ios/Microblink.framework ./
  # popd
# fi

# change bundle id
sed -i '' s/\$\(PRODUCT_BUNDLE_IDENTIFIER\)/com.microblink.sample/g $appName/Info.plist

#Disable Flipper since it spams console with errors
export NO_FLIPPER=1

pod install

# return from ios project folder
popd

# remove index.js
rm -f index.js

# remove index.ios.js
rm -f index.ios.js

# remove index.android.js
rm -f index.android.js

cp ../sample_files/index.js ./

# use the same index.js file for Android and iOS
cp index.js index.ios.js
cp index.js index.android.js

# return to root folder
popd

echo "Go to React Native project folder: cd $appName"
echo "To run on Android execute: npx react-native run-android"
echo "To run on iOS: open $appName/ios/$appName.xcworkspace; set your development team; add Privacy - Camera Usage Description and Privacy - Photo Library Usage Description keys to your info.plist file and press run"
