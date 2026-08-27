#!/usr/bin/env bash
# Builds a temporary RN sample app that compiles the local BlinkID Android bridge
# for CodeQL java-kotlin analysis (Kotlin requires a real Gradle compile).
set -euo pipefail

WORKSPACE_ROOT="${GITHUB_WORKSPACE:-$(cd "$(dirname "$0")/../../" && pwd)}"
APP_NAME=BlinkIdSample
APP_DIR="${WORKSPACE_ROOT}/${APP_NAME}"
RN_VERSION=0.82.0
CLI_VERSION=17.0.1
PLUGIN_DIR="${WORKSPACE_ROOT}/BlinkID"

cd "${WORKSPACE_ROOT}"

# CodeQL must compile this checkout's Kotlin, not the published npm package.
cd "${PLUGIN_DIR}"
npm install
VERSION=$(node -p "require('./package.json').version")
# npm pack prints lifecycle noise on stdout; derive the tarball path from package version.
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
export APP_DIR
npm install --save "${TARBALL}"

python3 - <<'PY'
from pathlib import Path
import os
import re

gradle = Path(os.environ["APP_DIR"], "android", "build.gradle")
text = gradle.read_text()
updated, count = re.subn(
    r'kotlinVersion\s*=\s*"[0-9.]+"',
    'kotlinVersion = "2.2.21"',
    text,
)
if count == 0:
    raise SystemExit(f"kotlinVersion not found in {gradle}")
gradle.write_text(updated)
PY

cd "${APP_DIR}/android"
./gradlew assembleDebug --no-daemon
