'use strict'

const { isEmpty } = require('ramda')
const { COMMIT_DELIMITER, COMMITS, PRESET } = require('./ENV')
const getInvalidCommits = require('./src/getInvalidCommits')

const invalidCommits = getInvalidCommits(COMMITS, PRESET, COMMIT_DELIMITER)
console.log(invalidCommits)

if (isEmpty(invalidCommits)) {
  console.log('Commit validation successfully')
  process.exit(0)
}

console.log('Commit validation error:', invalidCommits)
process.exit(1)
