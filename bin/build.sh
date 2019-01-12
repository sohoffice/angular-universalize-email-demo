#!/usr/bin/env bash

DIR="$( cd "$( dirname $(realpath "${BASH_SOURCE[0]}") )" && pwd )"
BASEDIR="$DIR/.."
TARGET="$BASEDIR/target"

now=$(date +'%Y-%m-%d')

rm -rf "$TARGET"

cd $BASEDIR

git clone https://github.com/sohoffice/angular-universalize-email.git target
cd $TARGET

git checkout gh-pages
git clean -fdx

cd $DIR
npm run build:deploy

echo "---
permalink: /404.html
---
" > "$BASEDIR/dist/angular-universalize-email-demo/404.html"
cat "$BASEDIR/dist/angular-universalize-email-demo/index.html" >> "$BASEDIR/dist/angular-universalize-email-demo/404.html"

cd $TARGET
cp -R "$BASEDIR/dist/angular-universalize-email-demo"/* $TARGET
git add .
git commit -a -m "pages commit, $now"

echo
echo Build complete, please review the output in target folder.
echo "Run the command to push it to github: 'bin/publish.sh'"
