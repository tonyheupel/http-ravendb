#!/usr/env/sh
browserify -r ravendb -r http-browserify -r buffer-browserify -o ./public/javascripts/ravendb.js

cat ./support/patches.js >> ./public/javascripts/ravendb.js