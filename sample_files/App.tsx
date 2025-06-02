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
  DetectionLevel,
  DocumentRules,
  DetailedFieldType,
  FieldType,
  AlphabetType,
  DocumentAnonymizationSettings,
  DocumentNumberAnonymizationSettings,
  RecognitionModeFilter,
  AnonymizationMode,
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

      /**
       * Set the BlinkID SDK settings
       * Add the license key here from the code above
       */
      const sdkSettings = new BlinkIdSdkSettings(licenseKey);
      sdkSettings.downloadResources = true;

      /**
       * Create and modify the Session Settings
       */
      const sessionSettings = new BlinkIdSessionSettings();
      sessionSettings.scanningMode = ScanningMode.Automatic;
      /**
       * Create and modify the scanning settings
       */
      const scanningSettings = new BlinkIdScanningSettings();
      scanningSettings.glareDetectionLevel = DetectionLevel.Mid;
      scanningSettings.anonymizationMode = AnonymizationMode.FullResult;
      scanningSettings.returnInputImages = true;
      /**
       * Create and modify the Image settings
       */
      const croppedImageSettings = new CroppedImageSettings();
      croppedImageSettings.returnDocumentImage = true;
      croppedImageSettings.returnFaceImage = true;
      croppedImageSettings.returnSignatureImage = true;
      /**
       * Place the image settings in the scanning settings
       */
      scanningSettings.croppedImageSettings = croppedImageSettings;

      /**
       * Document filters for doc rules & anonymization
       */
      const filterOne = new DocumentFilter(Country.Croatia);
      const filterTwo = new DocumentFilter(
        undefined,
        Region.California,
        DocumentType.Dl,
      );

      /**
       * DOCUMENT RULES
       */
      const documentRules = [
        new DocumentRules([
          new DetailedFieldType(FieldType.FirstName, AlphabetType.Latin)], filterOne),
        new DocumentRules([
          new DetailedFieldType(FieldType.Address, AlphabetType.Latin),
          new DetailedFieldType(FieldType.LastName, AlphabetType.Latin)],
        filterTwo)
      ];

      scanningSettings.customDocumentRules = documentRules;

      /**
       * ADDITIONAL ANONYMIZATION SETTINGS
       */
      const additionalAnonSettingsOne = new DocumentAnonymizationSettings(
        [FieldType.FirstName, FieldType.Address],
        filterOne,
        new DocumentNumberAnonymizationSettings(undefined, 2),
      );

      const additionalAnonSettingsTwo = new DocumentAnonymizationSettings([
        FieldType.BloodType,
        FieldType.Address,
      ]);

      scanningSettings.customDocumentAnonymizationSettings = [
        additionalAnonSettingsOne,
        additionalAnonSettingsTwo,
      ];

      /**
       * RECOGNITION MODE FILTER
       */
      const recognitionModeFilter = new RecognitionModeFilter();
      recognitionModeFilter.enableBarcodeId = true;
      recognitionModeFilter.enableFullDocumentRecognition = true;
      recognitionModeFilter.enableMrzId = true;
      recognitionModeFilter.enableMrzPassport = true;
      recognitionModeFilter.enableMrzVisa = true;
      recognitionModeFilter.enablePhotoId = true;

      scanningSettings.recognitionModeFilter = recognitionModeFilter;

      /// Place the Scanning settings in the Session settings
      sessionSettings.scanningSettings = scanningSettings;

      /**
       * Place the scanning settings in the session settings
       */
      sessionSettings.scanningSettings = scanningSettings;

      /**
       * Add the document class filter. This parameter is optional.
       */
      const classFilter = new ClassFilter();
      classFilter.includeDocuments = [
        new DocumentFilter(Country.Croatia, undefined, DocumentType.Id),
        new DocumentFilter(Country.USA, Region.Texas, DocumentType.Dl),
      ];
      /**
       * Call the performScan method, where the SDK and session settings need to be passed
       * Here, you can also pass the optional ClassFilter.
       */
      await performScan(sdkSettings, sessionSettings) 
        .then((result: BlinkIdScanningResult) => {
          //handle the results here.
          console.log(result.firstName?.value);
          setResult(BlinkIdResultBuilder.getIdResultString(result));
          setImages(result);
        })
        .catch((error) => {
          // handle any errors here.
          console.log(`Error during scan: ${error}`);
          setResult
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

      /**
       * Set the BlinkID SDK settings
       * Add the license key here from the code above
       */
      const sdkSettings = new BlinkIdSdkSettings(licenseKey);
      sdkSettings.downloadResources = true;

      /**
       * Create and modify the Session Settings
       */
      const sessionSettings = new BlinkIdSessionSettings();

      /**
       * Important: if two images are being passed, use the `Automatic` 
       * scanning mode
       * if just one image is being passed, use the `Single` scanning mode.
      */
      sessionSettings.scanningMode = ScanningMode.Automatic;

      /**
       * Create and modify the scanning settings
       */
      const scanningSettings = new BlinkIdScanningSettings();
      scanningSettings.glareDetectionLevel = DetectionLevel.Mid;
      /**
       * if tge input images consist solely 
       * of the cropped document image, set the 
       * `scanCroppedDocumentImage` to true.
       */
      // scanningSettings.scanCroppedDocumentImage = true;

      /**
       * Create and modify the Image settings
       */
      const croppedImageSettings = new CroppedImageSettings();
      croppedImageSettings.returnDocumentImage = true;
      croppedImageSettings.returnFaceImage = true;
      croppedImageSettings.returnSignatureImage = true;
      /**
       * Place the image settings in the scanning settings
       */
      scanningSettings.croppedImageSettings = croppedImageSettings;

      /**
       * Place the scanning settings in the session settings
       */
      sessionSettings.scanningSettings = scanningSettings;

      // Call scan method with base64 strings
      await performDirectApiScan(
        sdkSettings,
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
      //scanningSettings.scanCroppedDocumentImage = true;
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
