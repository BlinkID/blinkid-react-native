import React, { useState } from 'react';
import {
  Button,
  Text,
  View,
  StyleSheet,
  ScrollView,
  Image,
  Platform,
  SafeAreaView
} from 'react-native';
import {
  BlinkIdScanningSettings,
  BlinkIdSdkSettings,
  BlinkIdSessionSettings,
  ClassFilter,
  Country,
  CroppedImageSettings,
  DocumentFilter,
  DocumentType,
  Region,
  ScanningMode,
  BlinkIdScanningResult,
  performScan,
  performDirectApiScan,
} from 'blinkid-react-native';

import { BlinkIdResultBuilder } from './BlinkIdResultBuilder';
import { launchImageLibrary } from 'react-native-image-picker';

export default function App() {
  const [result, setResult] = useState<string | undefined>();

  const [firstCroppedImage, setFirstCroppedImage] = useState<
    string | undefined
  >();
  const [secondCroppedImage, setSecondCroppedImage] = useState<
    string | undefined
  >();
  const [faceImage, setFaceImage] = useState<string | undefined>();
  const [signatureImage, setSignatureImage] = useState<string | undefined>();
  const [firstInputImage, setFirstInputImage] = useState<string | undefined>();
  const [secondInputImage, setSecondInputImage] = useState<
    string | undefined
  >();

  const licenseKey = Platform.select({
    ios: 'sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUBbGV5SkRjbVZoZEdWa1QyNGlPakUzTkRZM01ETXhNREk1T0RRc0lrTnlaV0YwWldSR2IzSWlPaUprWkdRd05qWmxaaTAxT0RJekxUUXdNRGd0T1RRNE1DMDFORFU0WWpBeFlUVTJZamdpZlE9PZj1qzwW3YWd5hB0gRmxRAs1HcAzNYHM32LNFCsjU8syiBzQqljDpF9KFwmvmwrOaFfyggW5qd+vc2DZWZanqcrs2ApDoHhhRa3b2MEOe3QvVHsoR1u6tl9QDAewWQ==',
    android:
      'sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUAbGV5SkRjbVZoZEdWa1QyNGlPakUzTkRZM01ETXhOREEwTkRnc0lrTnlaV0YwWldSR2IzSWlPaUprWkdRd05qWmxaaTAxT0RJekxUUXdNRGd0T1RRNE1DMDFORFU0WWpBeFlUVTJZamdpZlE9PRa9SyKj7hAPz1SXQtyKj4KqR7EaKJiHiKtUjMvnpse12U2wrgGGOd4w61PGSxu0C+lp3pS+oHB0LNlHXKaVu2n9VsKWnPtEymQflYdUM4LjlsYhdzuOg8WBsvpvrA==',
  })!;

  const handlePerformScan = async () => {
    try {
      const settings = new BlinkIdSdkSettings(licenseKey);

      const sessionSettings = new BlinkIdSessionSettings();
      sessionSettings.scanningMode = ScanningMode.Automatic;

      const scanningSettings = new BlinkIdScanningSettings();
      scanningSettings.returnInputImages = true;

      const croppedImageSettings = new CroppedImageSettings();
      croppedImageSettings.returnDocumentImage = true;
      croppedImageSettings.returnFaceImage = true;
      croppedImageSettings.returnSignatureImage = true;

      scanningSettings.croppedImageSettings = croppedImageSettings;
      sessionSettings.scanningSettings = scanningSettings;

      const classFilter = new ClassFilter();
      classFilter.includeDocuments = [
        new DocumentFilter(Country.Croatia, undefined, DocumentType.Id),
        new DocumentFilter(Country.USA, Region.Texas, DocumentType.Dl),
      ];

      await performScan(settings, sessionSettings, classFilter)
        .then((result: BlinkIdScanningResult) => {
          setResult(BlinkIdResultBuilder.getIdResultString(result));
          setImages(result);
        })
        .catch((error) => {
          setResult(`Error during scan: ${error}`);
          resetImages();
        });
    } catch (error) {
      setResult(`Error during scan: ${error}`);
      resetImages();
    }
  };

  const handlePerformDirectApiMultiSideScan = async () => {
    try {
      // Pick first image
      const first = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });

      if (first.assets == null || !first.assets[0]?.base64) {
        setResult('First image not selected or invalid.');
        return;
      }

      const firstImage = first.assets[0].base64;

      // Pick second image
      const second = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });

      if (second.assets == null || !second.assets[0]?.base64) {
        setResult('Second image not selected or invalid.');
        return;
      }

      const secondImage = second.assets[0].base64;

      // SDK setup
      const settings = new BlinkIdSdkSettings(licenseKey);

      const sessionSettings = new BlinkIdSessionSettings();
      sessionSettings.scanningMode = ScanningMode.Automatic;

      const scanningSettings = new BlinkIdScanningSettings();
      scanningSettings.returnInputImages = true;

      const croppedImageSettings = new CroppedImageSettings();
      croppedImageSettings.returnDocumentImage = true;
      croppedImageSettings.returnFaceImage = true;
      croppedImageSettings.returnSignatureImage = true;

      scanningSettings.croppedImageSettings = croppedImageSettings;
      sessionSettings.scanningSettings = scanningSettings;

      // Call scan method with base64 strings
      await performDirectApiScan(
        settings,
        sessionSettings,
        firstImage,
        secondImage
      )
        .then((result: BlinkIdScanningResult) => {
          setResult(BlinkIdResultBuilder.getIdResultString(result));
          setImages(result);
        })
        .catch((error) => {
          setResult(`Error during scan: ${error}`);
          resetImages();
        });
    } catch (error) {
      setResult(`SDK error: ${error}`);
      resetImages();
    }
  };

  const handlePerformDirectApiSingleSideScan = async () => {
    try {
      // Pick first image
      const first = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });

      if (first.assets == null || !first.assets[0]?.base64) {
        setResult('First image not selected or invalid.');
        return;
      }

      const firstImage = first.assets[0].base64;

      // SDK setup
      const settings = new BlinkIdSdkSettings(licenseKey);

      const sessionSettings = new BlinkIdSessionSettings();
      sessionSettings.scanningMode = ScanningMode.Single;

      const scanningSettings = new BlinkIdScanningSettings();
      scanningSettings.returnInputImages = true;

      const croppedImageSettings = new CroppedImageSettings();
      croppedImageSettings.returnDocumentImage = true;
      croppedImageSettings.returnFaceImage = true;
      croppedImageSettings.returnSignatureImage = true;

      scanningSettings.croppedImageSettings = croppedImageSettings;
     // scanningSettings.scanCroppedDocumentImage = true;
      sessionSettings.scanningSettings = scanningSettings;

      // Call scan method with base64 strings
      await performDirectApiScan(settings, sessionSettings, firstImage)
        .then((result: BlinkIdScanningResult) => {
          setResult(BlinkIdResultBuilder.getIdResultString(result));
          setImages(result);
        })
        .catch((error) => {
          setResult(`Error during DirectAPI scan: ${error}`);
          resetImages();
        });
    } catch (error) {
      setResult(`SDK error: ${error}`);
                resetImages();

    }
  };

function setImages(result: BlinkIdScanningResult) {
          setFirstCroppedImage(result.firstDocumentImage);
          setSecondCroppedImage(result.secondDocumentImage);
          setFaceImage(result.faceImage?.image);
          setSignatureImage(result.signatureImage?.image);
          setFirstInputImage(result.firstInputImage);
          setSecondInputImage(result.secondInputImage);
  }

  function resetImages() {
        setFirstCroppedImage(undefined);
          setSecondCroppedImage(undefined);
          setFaceImage(undefined);
          setSignatureImage(undefined);
          setFirstInputImage(undefined);
          setSecondInputImage(undefined);
  }

  return (
    <View style={styles.container}>
      <View>
        <SafeAreaView></SafeAreaView>
        <View style={styles.spacer} />
        <Button title="Perform Scan" onPress={handlePerformScan} />
        <View style={styles.spacer} />
        <Button
          title="Direct API MultiSide Scan"
          onPress={handlePerformDirectApiMultiSideScan}
        />
        <View style={styles.spacer} />
        <Button
          title="Direct API SingleSide Scan"
          onPress={handlePerformDirectApiSingleSideScan}
        />
      </View>
      <ScrollView style={styles.resultBox}>
        <Text>{result}</Text>
      </ScrollView>

      <ScrollView style={styles.imageScroll} horizontal>
        {firstCroppedImage && (
          <DocumentImageContainer
            label="Front Document Image"
            imageUri={`data:image/jpeg;base64,${firstCroppedImage}`}
          />
        )}
        {secondCroppedImage && (
          <DocumentImageContainer
            label="Back Document Image"
            imageUri={`data:image/jpeg;base64,${secondCroppedImage}`}
          />
        )}
        {faceImage && (
          <DocumentImageContainer
            label="Face Image"
            imageUri={`data:image/jpeg;base64,${faceImage}`}
          />
        )}
        {signatureImage && (
          <DocumentImageContainer
            label="Signature Image"
            imageUri={`data:image/jpeg;base64,${signatureImage}`}
          />
        )}
        {firstInputImage && (
          <DocumentImageContainer
            label="First Input Image"
            imageUri={`data:image/jpeg;base64,${firstInputImage}`}
          />
        )}
        {secondInputImage && (
          <DocumentImageContainer
            label="Second Input Image"
            imageUri={`data:image/jpeg;base64,${secondInputImage}`}
          />
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  spacer: {
    height: 25,
  },

  resultBox: {
    flex: 1,
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    maxHeight: 'auto',
  },

  imageScroll: {
    marginTop: 20,
    maxHeight: 300,
  },
  imageContainer: {
    margin: 10,
    marginTop: 20,
    alignItems: 'center',
  },
  imageLabel: {
    fontSize: 16,
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 8,
    backgroundColor: '#eee',
  },
});

type DocumentImageContainerProps = {
  label: string;
  imageUri: string;
};

const DocumentImageContainer: React.FC<DocumentImageContainerProps> = ({
  label,
  imageUri,
}) => {
  return (
    <View style={styles.imageContainer}>
      <Text style={styles.imageLabel}>{label}</Text>
      <Image
        source={{ uri: imageUri }}
        style={styles.image}
        resizeMode="contain"
      />
    </View>
  );
};
