#!/usr/bin/env bash
# Builds a temporary RN sample app that compiles the local BlinkID iOS bridge
# for CodeQL Swift analysis (Swift requires a real Xcode build on macOS).
set -euo pipefail

WORKSPACE_ROOT="${GITHUB_WORKSPACE:-$(cd "$(dirname "$0")/../../" && pwd)}"
APP_NAME=BlinkIdSample
APP_DIR="${WORKSPACE_ROOT}/${APP_NAME}"
IOS_DIR="${APP_DIR}/ios"
RN_VERSION=0.82.0
CLI_VERSION=17.0.1
PLUGIN_DIR="${WORKSPACE_ROOT}/BlinkID"

cd "${WORKSPACE_ROOT}"

# CodeQL must compile this checkout's Swift, not the published npm package.
cd "${PLUGIN_DIR}"
npm install
VERSION=$(node -p "require('./package.json').version")
npm pack --pack-destination "${PLUGIN_DIR}" --ignore-scripts >/dev/null
TARBALL="${PLUGIN_DIR}/microblink-blinkid-react-native-${VERSION}.tgz"
if [[ ! -f "${TARBALL}" ]]; then
  echo "Expected tarball not found: ${TARBALL}" >&2
  exit 1
fi

cd "${WORKSPACE_ROOT}"
rm -rf "${APP_DIR}"

npx --yes "@react-native-community/cli@${CLI_VERSION}" init "${APP_NAME}" \
  --version "${RN_VERSION}" \
  --package-name com.microblink.sample \
  --title "BlinkID React-Native Sample" \
  --skip-git-init \
  --pm npm

cd "${APP_DIR}"
npm install --save "${TARBALL}"

cd "${IOS_DIR}"

# macOS sed (GitHub macos-latest runners).
sed -i '' "s/platform :ios, min_ios_version_supported/platform :ios, '16.0'/" Podfile

# RN 0.82 + newer Xcode: compile fmt pod with C++17 (see initBlinkIdReactNativeSample.sh).
python3 <<'PYEOF'
with open('Podfile', 'r') as f:
    content = f.read()

fmt_fix = """
    installer.pods_project.targets.each do |target|
      if target.name == 'fmt'
        target.build_configurations.each do |config|
          config.build_settings['CLANG_CXX_LANGUAGE_STANDARD'] = 'gnu++17'
        end
      end
    end
"""

old = "      # :ccache_enabled => true\n    )\n  end\nend"
new = "      # :ccache_enabled => true\n    )" + fmt_fix + "  end\nend"
if old not in content:
    raise SystemExit("Podfile post_install block not found; RN template may have changed")
content = content.replace(old, new)

with open('Podfile', 'w') as f:
    f.write(content)
PYEOF

export NO_FLIPPER=1
pod install

xcodebuild \
  -workspace "${APP_NAME}.xcworkspace" \
  -scheme "${APP_NAME}" \
  -configuration Debug \
  -sdk iphonesimulator \
  -destination 'generic/platform=iOS Simulator' \
  ARCHS=arm64 \
  CODE_SIGNING_ALLOWED=NO \
  build
