'use strict'

const split = require('split2')
const { prop, pipe, useWith, complement, ifElse } = require('ramda')
const { PRESET } = require('./ENV')
const { splitFirstLine, validateCommitWith, nothing } = require('./src/util')
const getCommitMsg = pipe(splitFirstLine(' '), prop(1))

const isValidCommit = useWith(validateCommitWith({ preset: PRESET }), [getCommitMsg])
const isInvalidCommit = complement(isValidCommit)

const exitWithError = (commit) => process.exit(1)
const exitSuccess = () => process.exit(0)

process.stdin
  .pipe(split('\n'))
  .on('data', ifElse(isInvalidCommit, exitWithError, nothing))
  .on('end', exitSuccess)
