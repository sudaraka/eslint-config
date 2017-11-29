/**
 * rules/stylistic-issues-a2m.js: rules listed as Stylistic Issues in ESLint docs
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

/*
 * NOTE: this file only contain rules starting from A to M
 * See https://eslint.org/docs/rules/#stylistic-issues
 *
 */

module.exports = {
  'array-bracket-newline': [
    'error',
    { 'minItems': 2 }
  ],
  'array-bracket-spacing': [
    'error',
    'always'
  ],
  'array-element-newline': [
    'error',
    { 'minItems': 2 }
  ],
  'block-spacing': [
    'error',
    'always'
  ],
  'brace-style': [
    'error',
    'stroustrup'
  ],
  'camelcase': 'error',
  'capitalized-comments': 'off',
  'comma-dangle': [
    'error',
    'never'
  ],
  'comma-spacing': [
    'error',
    {
      'before': false,
      'after': true
    }
  ],
  'comma-style': [
    'error',
    'last'
  ],
  'computed-property-spacing': [
    'error',
    'never'
  ],
  'consistent-this': [
    'error',
    'self'
  ],
  'eol-last': 'error',
  'func-call-spacing': [
    'error',
    'never'
  ],
  'func-name-matching': 'error',
  'func-names': 'off',
  'func-style': [
    'error',
    'expression'
  ],
  'function-paren-newline': [
    'error',
    'consistent'
  ],
  'id-blacklist': 'off',
  'id-length': 'off',
  'id-match': [
    'error',
    '^[a-zA-Z0-9_$]+([a-z0-9_]+)*$',
    { 'properties': true }
  ],
  'implicit-arrow-linebreak': [
    'error',
    'beside'
  ],
  'indent': [
    'error',
    2
  ],
  'indent-legacy': 'off',
  'jsx-quotes': [
    'error',
    'prefer-single'
  ],
  'key-spacing': [
    'error',
    {
      'beforeColon': false,
      'afterColon': true
    }
  ],
  'keyword-spacing': [
    'error',
    {
      'after': false,
      'before': true,
      'overrides': {
        'else': { 'after': true },
        'export': { 'after': true },
        'from': { 'after': true },
        'import': { 'after': true },
        'return': { 'after': true },
        'try': { 'after': true }
      }
    }
  ],
  'line-comment-position': [
    'error',
    { 'position': 'above' }
  ],
  'linebreak-style': [
    'error',
    'unix'
  ],
  'lines-around-comment': [
    'error',
    {
      'allowBlockStart': true,
      'beforeBlockComment': true,
      'beforeLineComment': false
    }
  ],
  'lines-between-class-members': [
    'error',
    'always'
  ],
  'lines-around-directive': 'off',
  'max-depth': [
    'error',
    8
  ],
  'max-len': [
    'error',
    {
      // 80 should be soft limit for code, using 100 here allow some flexibility
      'code': 100,
      'comments': 120,
      'ignoreComments': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'ignoreStrings': true,
      'ignoreTemplateLiterals': true,
      'tabWidth': 2
    }
  ],
  'max-lines': 'error',
  'max-nested-callbacks': [
    'error',
    5
  ],
  'max-params': [
    'error',
    5
  ],
  'max-statements': [
    'error',
    15
  ],
  'max-statements-per-line': [
    'error',
    { 'max': 1 }
  ],
  'multiline-comment-style': [
    'error',
    'starred-block'
  ],
  'multiline-ternary': 'off'
}
