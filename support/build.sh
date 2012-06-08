#!/usr/env/sh
browserify -r ravendb -r http-browserify -o ravendb.js

cat ./support/patches.js >> ravendb.js