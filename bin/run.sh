#!/bin/bash

docker run --rm \
-e COMMITS="000001 New: Implement some (refs ORSEPIN-1)\n00002 Fix: Some Error" \
-e PRESET="eslint" \
-e COMMIT_DELIMITER="\\n" \
madoos/node-commit-validator:latest 