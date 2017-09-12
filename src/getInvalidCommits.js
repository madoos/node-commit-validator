'use strict'

const {
    prop,
    pipe,
    useWith,
    filter,
    complement
} = require('ramda')

const {
    splitFirstLine,
    projection,
    validateCommitWith
} = require('./util')

// (Arr) => { hash, commit}
const setFormat = pipe(
    splitFirstLine(' '),
    projection({
      hash: prop(0),
      commit: prop(1)
    })
)

module.exports = function getInvalidCommits (COMMITS, PRESET, COMMIT_DELIMITER) {
  const commits = COMMITS.split(COMMIT_DELIMITER).map(setFormat)
  const validateCommitWithPreset = validateCommitWith({ preset: PRESET })
  const isValidCommit = useWith(validateCommitWithPreset, [ prop('commit') ])
  return filter(complement(isValidCommit), commits)
}
