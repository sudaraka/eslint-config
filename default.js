/**
 * default.js: Default ESLint configuration with (almost) all rules enabled
 *
 * Copyright 2015-2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

// See http://eslint.org/docs/rules/

const
  possibleErrors = require('./rules/possible-errors'),
  bestPractices = require('./rules/best-practices'),
  strictMode = require('./rules/strict-mode'),
  variables = require('./rules/variables'),
  nodeJSCommonJS = require('./rules/nodejs-commonjs'),
  stylisticIssueAM = require('./rules/stylistic-issues-a2m'),
  stylisticIssueNZ = require('./rules/stylistic-issues-n2z'),
  es2015 = require('./rules/es2015')

module.exports = {
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'impliedStrict': true,
      'experimentalObjectRestSpread': true
    },
    'sourceType': 'module'
  },

  'env': { 'es6': true },

  'rules': {
    ...possibleErrors,
    ...bestPractices,
    ...strictMode,
    ...variables,
    ...nodeJSCommonJS,
    ...stylisticIssueAM,
    ...stylisticIssueNZ,
    ...es2015
  }
}
