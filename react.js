/**
 * react.js: ESLint configuration for React based projects
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 */

module.exports = {
  'extends': './default',

  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'impliedStrict': true,
      'jsx': true,
      'experimentalObjectRestSpread': true
    },
    'sourceType': 'module',
  },

  'env': {
    'browser': true,
    'es6': true,
    'node': true
  },

  'rules': {
    // Possible Errors
    'no-extra-parens': [2, 'functions'],

    // Variables
    'no-unused-vars': 0
  }
}
