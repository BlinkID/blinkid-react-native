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
    
    private var cancellables = Set<AnyCancellable>()
    private var classFilterDict: [String: Any]?
    
    @objc public func performScan(_ rootVc: UIViewController, blinkIdSdkSettings: [String: Any], blinkIdSessionSettings: [String: Any], blinkIdUiSettings: [String: Any], classFilterSettings: [String: Any], onResolve: @escaping (String) -> Void, onReject: @escaping (String) -> Void) {
        Task {
            do {
                
                guard let sdkSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSdkSettings(blinkIdSdkSettings) else {
                    onReject("Could not initialize the SDK!")
                    return
                }
                
                let sessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(blinkIdSessionSettings)
                classFilterDict = classFilterSettings
                
                let sdkInstance = try await BlinkIDSdk.createBlinkIDSdk(withSettings: sdkSettings)
                let analyzer = try await BlinkIDAnalyzer(
                    sdk: sdkInstance,
                    blinkIdSessionSettings: sessionSettings,
                    eventStream: BlinkIDEventStream(),
                    classFilter: self
                )
                
                var shouldShowIntroductionAlert = true
                if let showOnboardingDialog = blinkIdUiSettings["showOnboardingDialog"] as? Bool {
                    shouldShowIntroductionAlert = showOnboardingDialog
                }
                var shouldShowHelpButton = true
                if let showHelpButton = blinkIdUiSettings["showHelpButton"] as? Bool {
                    shouldShowHelpButton = showHelpButton
                }
                
                let scanningUxModel = await BlinkIDUXModel(
                    analyzer: analyzer,
                    shouldShowIntroductionAlert: shouldShowIntroductionAlert,
                    showHelpButton: shouldShowHelpButton)
                await scanningUxModel.$result
                    .sink { [weak self] scanningResultState in
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
                                    onReject("Scanning has been canceled")
                                    rootVc.dismiss(animated: true)
                                }
                                self?.cancellables.forEach{ $0.cancel() }
                            }
                        }
                    }
                    .store(in: &cancellables)
                
                self.presentScanningUI(scanningUxModel, rootVc)
            } catch {
                onReject(error.localizedDescription)
            }
        }
    }
    
    @objc public func performDirectApiScan(blinkIdSdkSettings: [String: Any], blinkIdSessionSettings: [String: Any], firstImage: String, secondImage: String?, onResolve: @escaping (String) -> Void, onReject: @escaping (String) -> Void) {
        Task{
            do {
                guard let sdkSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSdkSettings(blinkIdSdkSettings) else {
                    onReject("Could not initialize the SDK!")
                    return
                }
                
                var sessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(blinkIdSessionSettings)
                sessionSettings.inputImageSource = .photo
                
                let blinkidSdk = try await BlinkIDSdk.createBlinkIDSdk(withSettings: sdkSettings)
                let session = try await blinkidSdk.createScanningSession(sessionSettings: sessionSettings)
                
                guard let frontUIImage = BlinkIdDeserializationUtilities.deserializeBase64Image(firstImage) else {
                    onReject("Could not extract the information from the first image! An image of a valid document needs to be sent.")
                    return
                }
                
                await session.process(inputImage: InputImage(uiImage: frontUIImage))
                
                if let backUIImage = BlinkIdDeserializationUtilities.deserializeBase64Image(secondImage) {
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
            } catch {
                onReject(error.localizedDescription)
            }
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
