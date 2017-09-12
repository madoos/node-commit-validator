'use strict'


const validateCommit = require('validate-commit').validateMessage
const { COMMIT_DELIMITER, COMMITS, PRESET } = require('./ENV')
const { split } = require('ramda')

const commits = split(COMMIT_DELIMITER, COMMITS)
const  response = validateCommit('mi commirt')

console.log(response)