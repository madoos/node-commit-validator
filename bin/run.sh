#!/bin/bash

docker run -i --rm \
-e PRESET="eslint" \
madoos/node-commit-validator:latest 