//
//  BlinkidReactNativeModule.swift
//  BlinkidReactNative
//
//  Created by Milan Parađina on 15.05.2025..
//

import Foundation
import UIKit
import SwiftUI
import Combine
import BlinkID
import BlinkIDUX

@objc public class BlinkidReactNativeModule: NSObject {
    
    private var cancellables = Set<AnyCancellable>()
    private var classFilterDict: [String: Any]?
    
    private var blinkIdSdk: BlinkIDSdk?
    
    @objc public func loadSdk(_ blinkIdSdkSettings: [String: Any], onResolve: @escaping (String) -> Void, onReject: @escaping (String) -> Void) {
        Task {
            do {
                let _ = try await ensureLoadedSdk(blinkIdSdkSettings)
                onResolve("")
            } catch {
                onReject(error.localizedDescription)
            }
        }
    }
    
    private func ensureLoadedSdk(_ blinkIdSdkSettings: [String: Any]) async throws -> BlinkIDSdk? {
        if let blinkIdSdk = blinkIdSdk { return blinkIdSdk }
        do {
            guard let settings = BlinkIdDeserializationUtilities.deserializeBlinkIdSdkSettings(blinkIdSdkSettings) else { throw BlinkIdReactNativeError.incorrectArgument(message: "Incorrect BlinkID SDK settings!") }
            blinkIdSdk = try await BlinkIDSdk.createBlinkIDSdk(withSettings: settings)
            return blinkIdSdk
        } catch {
            blinkIdSdk = nil
            throw error
        }
        return nil
    }
    
    @objc public func unloadSdk(_ deleteCachedResources: Bool, onResolve: @escaping (String) -> Void, onReject: @escaping (String) -> Void) {
        Task {
            if deleteCachedResources {
               await BlinkIDSdk.terminateBlinkIDSdkAndDeleteCachedResources()
            } else {
                await BlinkIDSdk.terminateBlinkIDSdk()
            }
            blinkIdSdk = nil
            onResolve("")
        }
    }
    
    @objc public func performScan(_ rootVc: UIViewController, blinkIdSdkSettings: [String: Any], blinkIdSessionSettings: [String: Any], blinkIdScanningUxSettings: [String: Any], classFilterSettings: [String: Any], onResolve: @escaping (String) -> Void, onReject: @escaping (String) -> Void) {
        Task {
            do {
                
                blinkIdSdk = try await ensureLoadedSdk(blinkIdSdkSettings)
                guard let blinkIdSdk = blinkIdSdk else {
                    onReject("The SDK is not loaded!")
                    return
                }
                let sessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(blinkIdSessionSettings)
                classFilterDict = classFilterSettings
                
                let analyzer = try await BlinkIDAnalyzer(
                    sdk: blinkIdSdk,
                    blinkIdSessionSettings: sessionSettings,
                    eventStream: BlinkIDEventStream(),
                    classFilter: self
                )
                await addReactNativePinglet(with: analyzer.sessionNumber)
                
                let scanningUxModel = await BlinkIDUXModel(
                    analyzer: analyzer,
                    uxSettings: BlinkIdDeserializationUtilities.deserializeBlinkIdUxScanningSettings(blinkIdScanningUxSettings),
                    sessionNumber: analyzer.sessionNumber)
                
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
                                Task {
                                    await BlinkIDSdk.terminateBlinkIDSdk()
                                }
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
                if let sdkError = error as? InvalidLicenseKeyError {
                    onReject(sdkError.message)
                } else {
                    onReject(error.localizedDescription)
                }
            }
        }
    }
    
    @objc public func performDirectApiScan(blinkIdSdkSettings: [String: Any], blinkIdSessionSettings: [String: Any], firstImage: String, secondImage: String?, onResolve: @escaping (String) -> Void, onReject: @escaping (String) -> Void) {
        Task{
            do {
                blinkIdSdk = try await ensureLoadedSdk(blinkIdSdkSettings)
                guard let blinkIdSdk = blinkIdSdk else {
                    onReject("The BlinkID SDK is not initialized!")
                    return
                }
                var sessionSettings = BlinkIdDeserializationUtilities.deserializeBlinkIdSessionSettings(blinkIdSessionSettings)
                sessionSettings.inputImageSource = .photo
                
                let session = try await blinkIdSdk.createScanningSession(sessionSettings: sessionSettings)
                
                await addReactNativePinglet(with: session.getSessionNumber())
                
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
                if let sdkError = error as? InvalidLicenseKeyError {
                    onReject(sdkError.message)
                } else {
                    onReject(error.localizedDescription)
                }
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
    
    private func addReactNativePinglet(with sessionNumber: Int) async {
        await PingManager.shared.addPinglet(pinglet: WrapperProductInfoPinglet(wrapperProduct: .crossplatformreactnative), sessionNumber: sessionNumber)
    }
}

enum BlinkIdReactNativeError: Error {
    case incorrectArgument(message: String)
}

extension BlinkidReactNativeModule: BlinkIDClassFilter {
    public func classAllowed(classInfo: BlinkID.BlinkIDSDK.DocumentClassInfo) -> Bool {
        if let classInfoFilterDict = classFilterDict {
            return BlinkIdDeserializationUtilities.deserializeClassFilter(classInfoFilterDict, classInfo)
        }
        return true
    }
}
