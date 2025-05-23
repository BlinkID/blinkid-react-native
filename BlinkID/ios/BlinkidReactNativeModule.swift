//
//  BlinkidReactNativeModule.swift
//  BlinkidReactNative
//
//  Created by Milan Parađina on 15.05.2025..
//

import Foundation
import UIKit
import SwiftUI
import BlinkID
import Combine

@objc public class BlinkidReactNativeModule: NSObject {
 // private var rootVc: UIViewController?
  private var cancellables = Set<AnyCancellable>()
  private var classFilterDict: [String: Any]?
  
  @objc public func performScan(_ rootVc: UIViewController, blinkIdSdkSettings: [String: Any], blinkIdSessionSettings: [String: Any], classFilterSettings: [String: Any], onResolve: @escaping (String) -> Void, onReject: @escaping (String) -> Void) {
      
      guard let sdkSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSdkSettings(blinkIdSdkSettings) else {
            onReject("Could not initialize the SDK!")
          return
      }
      
      let sessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(blinkIdSessionSettings)
 //     guard let sessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(blinkIdSessionSettings) else {
 //       onReject("Could not set the BlinkID session settings!")
 //     }
      classFilterDict = classFilterSettings
      Task {
        
      //sdkSettings.bundleURL = Bundle(for: BlinkidReactNativeModule.self).url(forResource: "BlinkIDUXResources", withExtension: "bundle")
      
      let sdkInstance = try await BlinkIDSdk.createBlinkIDSdk(withSettings: sdkSettings)
        let analyzer = try await BlinkIDAnalyzer(
            sdk: sdkInstance,
            blinkIdSessionSettings: sessionSettings,
            eventStream: BlinkIDEventStream(),
            classFilter: self
        )
        let scanningUxModel = await BlinkIDUXModel(analyzer: analyzer, shouldShowIntroductionAlert: true)
        await scanningUxModel.$result
            .sink { scanningResultState in
                if let scanningResultState {
                    if let scanningResult = scanningResultState.scanningResult {
                        DispatchQueue.main.async {
                          if let result = BlinkIdSerializationUtilities.serializeBlinkIdScanningResult(scanningResult) {
                            onResolve(result)
                            rootVc.dismiss(animated: true)
                          }
                        }
                    }
                    else {
                      onReject("Scanning has been canceled")
                        DispatchQueue.main.async {
                          rootVc.dismiss(animated: true)
                        }
                    }
                }
            }
            .store(in: &cancellables)
        
          self.presentScanningUI(scanningUxModel, rootVc)
    }
  }
  
  @objc public func performDirectApiScan(blinkIdSdkSettings: [String: Any], blinkIdSessionSettings: [String: Any], firstImage: String, secondImage: String?, onResolve: @escaping (String) -> Void, onReject: @escaping (String) -> Void) {
          
          do {
            guard let sdkSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSdkSettings(blinkIdSdkSettings) else {
                  onReject("Could not initialize the SDK!")
                return
            }
            
            var sessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(blinkIdSessionSettings)
            sessionSettings.inputImageSource = .photo
            
            Task {
              let blinkidSdk = try await BlinkIDSdk.createBlinkIDSdk(withSettings: sdkSettings)
              let session = try await blinkidSdk.createScanningSession(sessionSettings: sessionSettings)
                  
                  guard let frontUIImage = BlinkIdDeserializationUtilities.deserializeBase64Image(firstImage as? String) else {
                    onReject("Could not extract the information from the first image! An image of a valid document needs to be sent.")
                      return
                  }
                                  
                  await session.process(inputImage: InputImage(uiImage: frontUIImage))
                  
              if let backUIImage = BlinkIdDeserializationUtilities.deserializeBase64Image(secondImage as? String) {
                      await session.process(inputImage: InputImage(uiImage: backUIImage))
                  }
                  
                  let scannedResults = await session.getResult()
                  DispatchQueue.main.async {
                    if let results = BlinkIdSerializationUtilities.serializeBlinkIdScanningResult(scannedResults) {
                      onResolve(results)
                    } else {
                      onReject("Could not retrive the results from DirectAPI scanning!")
                    }
                  }
            }
          } catch {
            onReject("Error with DirectAPI scanning. Reason: \(error.localizedDescription)")
          }
  }
  
  private func presentScanningUI(_ model: BlinkIDUXModel, _ rootVc: UIViewController) {
    DispatchQueue.main.async {
      let viewController = UIHostingController(rootView: BlinkIDUXView(viewModel: model))
      viewController.modalPresentationStyle = .fullScreen
      rootVc.present(viewController, animated: true)
    }
  }
}

extension BlinkidReactNativeModule: BlinkIDClassFilter {
  public func classAllowed(classInfo: BlinkID.BlinkIDSDK.DocumentClassInfo) -> Bool {
    if let classInfoFilterDict = classFilterDict {
      return BlinkIdDeserializationUtilities.deserializeClassFilter(classInfoFilterDict, classInfo)
    }
    return true
  }
}
