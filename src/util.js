'use strict'

const { curry, pipe, flip, always } = require('ramda')
const validateCommit = require('validate-commit').validateMessage
const flipCurry = pipe(flip, curry)

module.exports = {
  splitFirstLine: curry(splitFirstLine),
  flipCurry,
  validateCommitWith: flipCurry(validateCommit),
  nothing: always(null)
}

function splitFirstLine (delimiter, str) {
  return [str.substr(0, str.indexOf(delimiter)), str.substr(str.indexOf(delimiter) + 1)]
}
