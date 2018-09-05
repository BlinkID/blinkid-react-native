require 'json'

package = JSON.parse(File.read(File.join(__dir__, 'package.json')))

Pod::Spec.new do |s|
  s.name         = package['name']
  s.version      = package['version']
  s.summary      = package['description']

  s.authors      = package['author']
  s.homepage     = package['homepage']
  s.license      = package['license']
  s.platform     = :ios, "9.0"

  s.source       = { :git => "https://github.com/BlinkID/blinkid-react-native.git", :tag => "v#{s.version}" }
  s.source_files  = "src/ios", "src/ios/**/*.{h,m}"

  s.dependency 'React'
  s.dependency 'PPBlinkID', '~> 4.2.0'

  s.frameworks = 'UIKit'
end
