'use strict'

const split = require('split2')
const { complement, ifElse } = require('ramda')
const { PRESET } = require('./ENV')
const { validateCommitWith, nothing } = require('./src/util')

const isValidCommit = validateCommitWith({ preset: PRESET })
const isInvalidCommit = complement(isValidCommit)

const exitWithError = (commit) => process.exit(1)
const exitSuccess = () => process.exit(0)

process.stdin
  .pipe(split('\n'))
  .on('data', ifElse(isInvalidCommit, exitWithError, nothing))
  .on('end', exitSuccess)
