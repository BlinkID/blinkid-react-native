#!/usr/bin/env bash
# Builds a temporary RN sample app that compiles the local BlinkID Android bridge
# for CodeQL java-kotlin analysis (Kotlin requires a real Gradle compile).
set -euo pipefail

APP_NAME=BlinkIdSample
RN_VERSION=0.82.0
PLUGIN_DIR="${GITHUB_WORKSPACE}/BlinkID"

# CodeQL must compile this checkout's Kotlin, not the published npm package.
npm --prefix "$PLUGIN_DIR" install
npm --prefix "$PLUGIN_DIR" pack --pack-destination "$PLUGIN_DIR"
TARBALL=$(ls "$PLUGIN_DIR"/microblink-blinkid-react-native-*.tgz | head -n 1)

npx --yes @react-native-community/cli@latest init "$APP_NAME" \
  --version "$RN_VERSION" \
  --package-name com.microblink.sample \
  --title "BlinkID React-Native Sample" \
  --skip-git-init \
  --pm npm

npm --prefix "$APP_NAME" install --save "$TARBALL"

python3 - <<'PY'
from pathlib import Path
import re

gradle = Path("BlinkIdSample/android/build.gradle")
text = gradle.read_text()
updated, count = re.subn(
    r'kotlinVersion\s*=\s*"[0-9.]+"',
    'kotlinVersion = "2.2.21"',
    text,
)
if count == 0:
    raise SystemExit("kotlinVersion not found in BlinkIdSample/android/build.gradle")
gradle.write_text(updated)
PY

cd "$APP_NAME/android"
./gradlew assembleDebug --no-daemon
