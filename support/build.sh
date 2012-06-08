#!/usr/env/sh
browserify -r ravendb -r http-browserify -o http-dev-ravendb.js

cat ./support/patches.js >> http-dev-ravendb.js