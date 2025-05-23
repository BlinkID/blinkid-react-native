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
                        DispatchQueue.main.async {
                          onReject("Scanning has been canceled" )
                          rootVc.dismiss(animated: true)
                        }
                    }
                }
            }
            .store(in: &cancellables)
        
          self.presentScanningUI(scanningUxModel, rootVc)
    }
  }
  
  private func presentScanningUI(_ model: BlinkIDUXModel, _ rootVc: UIViewController) {
    DispatchQueue.main.async {
      let viewController = UIHostingController(rootView: BlinkIDUXView(viewModel: model))
      viewController.modalPresentationStyle = .fullScreen
      rootVc.present(viewController, animated: true)
    }
  }
  
  @objc public func performDirectApiScan() {
    print("performDirectApiScan from Swift")
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
