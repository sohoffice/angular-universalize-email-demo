#!/usr/bin/env bash

DIR="$( cd "$( dirname $(realpath "${BASH_SOURCE[0]}") )" && pwd )"
BASEDIR="$DIR/.."
TARGET="$BASEDIR/target"

cd $TARGET
git push origin gh-pages
