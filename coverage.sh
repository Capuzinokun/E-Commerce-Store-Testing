#!/usr/bin/env bash
rm -rf coverage
rm -rf lib-cov

mkdir coverage

node_modules/.bin/jscover library/src library/src-cov
mv library/src library/src-orig
mv library/src-cov library/src
node_modules/.bin/mocha -R mocha-lcov-reporter > coverage/coverage.lcov
rm -rf library/src
mv library/src-orig library/src