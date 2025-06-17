FOLDER='BlinkID'

pushd $FOLDER > /dev/null || exit 1

# copy README.md to npm package folder
cp ../README.md . ||  exit 1

# run npm install first
npm i

# publish to npm
npm publish

# rm README.md
rm README.md

popd > /dev/null
