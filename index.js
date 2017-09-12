'use strict'

const { isEmpty } = require('ramda')
const ENV = require('./ENV')
const { COMMITS, PRESET, COMMIT_DELIMITER } = ENV
const getInvalidCommits = require('./src/getInvalidCommits')

console.log('Executing With Args: \n\n', ENV, '\n')
const invalidCommits = getInvalidCommits(COMMITS, PRESET, COMMIT_DELIMITER)

if (isEmpty(invalidCommits)) {
  console.log('Commit validation successfully')
  process.exit(0)
}

console.log('Commit validation error:', invalidCommits)
process.exit(1)
