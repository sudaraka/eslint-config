/**
 * rules/possible-errors.js: rules listed as Possible Errors in ESLint docs
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

// See https://eslint.org/docs/rules/#possible-errors

module.exports = {
  // Possible Errors
  'for-direction': 'error',
  'getter-return': 'error',
  'no-await-in-loop': 'error',
  'no-compare-neg-zero': 'error',
  'no-cond-assign': [
    'error',
    'always'
  ],
  'no-console': 'off',
  'no-constant-condition': 'error',
  'no-control-regex': 'error',
  'no-debugger': 'error',
  'no-dupe-args': 'error',
  'no-dupe-keys': 'error',
  'no-duplicate-case': 'error',
  'no-empty': 'error',
  'no-empty-character-class': 'error',
  'no-ex-assign': 'error',
  'no-extra-boolean-cast': 'error',
  'no-extra-parens': [
    'error',
    'all',
    { 'nestedBinaryExpressions': true }
  ],
  'no-extra-semi': 'error',
  'no-func-assign': 'error',
  'no-inner-declarations': [
    'error',
    'both'
  ],
  'no-invalid-regexp': 'error',
  'no-irregular-whitespace': 'error',
  'no-negated-in-lhs': 'error',
  'no-obj-calls': 'error',
  'no-prototype-builtins': 'error',
  'no-regex-spaces': 'error',
  'no-sparse-arrays': 'error',
  'no-template-curly-in-string': 'error',
  'no-unexpected-multiline': 'error',
  'no-unreachable': 'error',
  'no-unsafe-finally': 'error',
  'no-unsafe-negation': 'error',
  'use-isnan': 'error',
  'valid-jsdoc': 'error',
  'valid-typeof': 'error'
}
