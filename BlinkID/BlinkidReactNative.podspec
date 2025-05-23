require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = "BlinkidReactNative"
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => 16.0 }
  s.source       = { :git => "https://github.com/BlinkID/blinkid-react-native.git", :tag => "#{s.version}" }
  s.requires_arc     = true

  #s.source_files = "ios/**/*.{h,m,mm,cpp,swift}"
  #s.private_header_files = "ios/**/*.h"

   s.source_files = [
    "ios/*.{swift,h,m,mm,cpp}",
    "ios/generated/**/*.{swift,h,m,mm,cpp}",
   # "ios/Frameworks/Source/**/*.{swift,h,xcassets,xcstrings,png}"
    "ios/Frameworks/Source/**/*.{swift,h,m,mm,cpp}"
  ]
  #s.module_name = "BlinkIDUX"

  s.private_header_files = "ios/**/*.h"

  # Vendored frameworks
  s.vendored_frameworks = ["ios/Frameworks/*.xcframework"] #, "ios/Frameworks/Source/**/*"]
  # s.preserve_paths = 'ios/Frameworks/Source/BlinkIDUX/BlinkIDUX.modulemap'
  # s.module_map = "ios/Frameworks/Source/BlinkIDUX/BlinkIDUX.modulemap"
  #s.resources = ['ios/Frameworks/Source/**/*.{bundle,json,png,xcstrings, xcassets}'] #xcassets
 # s.resources = ['ios/Frameworks/Source/**/*.{json}'] #xcassets
  #s.resource_bundles = {
  #  'BlinkIDUXResources' => ['ios/Frameworks/Source/**/*.{json,png,xcassets,xcstrings}']
  #}
  #s.pod_target_xcconfig = {
  #  'OTHER_SWIFT_FLAGS' => '-package-name BlinkIDUX'
#}
  #s.public_header_files = 'ios/Source/BlinkIDUX/BlinkIDUX.h'

  s.resource_bundles = {
  'BlinkIDUXResources' => ['ios/Frameworks/Source/**/*.{xcassets,json,xcstrings,png}']
  }
# s.resources = ['ios/Frameworks/Source/**/*.{png,json,xcassets,xcstrings}']
s.swift_version = '5.0'
s.requires_arc = true

install_modules_dependencies(s)
end
