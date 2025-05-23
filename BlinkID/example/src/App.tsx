import React, { useState } from 'react';
import { Button, Text, View, StyleSheet, ScrollView } from 'react-native';
import { performScan, performDirectApiScan } from 'blinkid-react-native';
import { BlinkIdSdkSettings, BlinkIdSessionSettings } from '../../src/blinkIdSettings';
import { ClassFilter, Country, DocumentFilter, DocumentType, Region, ScanningMode } from '../../src/types';
import type { BlinkIdScanningResult } from '../../src/blinkIdResult';

export default function App() {
  const [result, setResult] = useState<string>('No result yet.');

  const handlePerformScan = async () => {
    try {
      const settings = new BlinkIdSdkSettings(          "sRwCABVjb20ubWljcm9ibGluay5zYW1wbGUBbGV5SkRjbVZoZEdWa1QyNGlPakUzTkRZM01ETXhNREk1T0RRc0lrTnlaV0YwWldSR2IzSWlPaUprWkdRd05qWmxaaTAxT0RJekxUUXdNRGd0T1RRNE1DMDFORFU0WWpBeFlUVTJZamdpZlE9PZj1qzwW3YWd5hB0gRmxRAs1HcAzNYHM32LNFCsjU8syiBzQqljDpF9KFwmvmwrOaFfyggW5qd+vc2DZWZanqcrs2ApDoHhhRa3b2MEOe3QvVHsoR1u6tl9QDAewWQ==");
      //console.log('hello' + settings.createData());

      const sessionSettings = new BlinkIdSessionSettings();
      sessionSettings.scanningMode = ScanningMode.Automatic;

      const classFilter = new ClassFilter();
      classFilter.includeDocuments = [new DocumentFilter(Country.Croatia, undefined, DocumentType.Id), new DocumentFilter(Country.USA, Region.California, DocumentType.Dl)];

    await performScan(settings, sessionSettings, classFilter)
        .then ((result: BlinkIdScanningResult) => { 
          console.log("DOB original: " + result?.dateOfBirth?.originalString?.value);
          console.log("DOB dMY: " + result?.dateOfBirth?.date?.day + result?.dateOfBirth?.date?.month + result?.dateOfBirth?.date?.year);
          console.log('First name: ' + result?.firstName?.value);
          console.log('Last name: ' + result?.lastName?.value);
      })
      .catch((error) => {
        setResult(`Error during scan: ${error}`);
        console.log("Error: " + error);
          if (error instanceof Error) {
        console.log('Stack trace:', error.stack);
    }
      })
    } catch (error) {
      setResult(`Error during scan: ${error}`);
    }
  };

  const handlePerformDirectApiScan = async () => {
    try {
    //const scanResult = await performDirectApiScan();
    //  setResult(JSON.stringify(scanResult, null, 2));
    } catch (error) {
      setResult(`Error during direct API scan: ${JSON.stringify(error)}`);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Perform Scan" onPress={handlePerformScan} />
      <View style={styles.spacer} />
      <Button title="Direct API Scan" onPress={handlePerformDirectApiScan} />
      <ScrollView style={styles.resultBox}>
        <Text>{result}</Text>
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
    height: 20,
  },
  resultBox: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
    padding: 10,
    borderRadius: 8,
    maxHeight: 300,
  },
});
