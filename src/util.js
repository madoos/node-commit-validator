'use strict'

const { curry, pipe, map, flip } = require('ramda')
const validateCommit = require('validate-commit').validateMessage
const flipCurry = pipe(flip, curry)

module.exports = {
  splitFirstLine: curry(splitFirstLine),
  projection: curry(projection),
  flipCurry,
  validateCommitWith: flipCurry(validateCommit)
}

function splitFirstLine (delimiter, str) {
  return [str.substr(0, str.indexOf(delimiter)), str.substr(str.indexOf(delimiter) + 1)]
}

function projection (descriptor, data) {
  return map((fn) => fn(data), descriptor)
}
