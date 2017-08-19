/**
 * rules/es2015.js: rules listed as ECMAScript 6 in ESLint docs
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

// See https://eslint.org/docs/rules/#ecmascript-6

module.exports = {
  'arrow-body-style': [
    'error',
    'as-needed'
  ],
  'arrow-parens': [
    'error',
    'as-needed'
  ],
  'arrow-spacing': 'error',
  'constructor-super': 'error',
  'generator-star-spacing': [
    'error',
    {
      'before': true,
      'after': true
    }
  ],
  'no-class-assign': 'error',
  'no-confusing-arrow': 'error',
  'no-const-assign': 'error',
  'no-dupe-class-members': 'error',
  'no-duplicate-imports': [
    'error',
    { 'includeExports': true }
  ],
  'no-new-symbol': 'error',
  'no-restricted-imports': 'off',
  'no-this-before-super': 'error',
  'no-useless-computed-key': 'error',
  'no-useless-constructor': 'error',
  'no-useless-rename': [
    'error',
    {
      'ignoreDestructuring': false,
      'ignoreImport': true,
      'ignoreExport': true
    }
  ],
  'no-var': 'off',
  'object-shorthand': [
    'error',
    'always'
  ],
  'prefer-arrow-callback': 'error',
  'prefer-const': 'error',
  'prefer-destructuring': [
    'error',
    {
      'array': true,
      'object': true
    },
    { 'enforceForRenamedProperties': true }
  ],
  'prefer-numeric-literals': 'error',
  'prefer-reflect': 'error',
  'prefer-rest-params': 'error',
  'prefer-spread': 'error',
  'prefer-template': 'error',
  'require-yield': 'error',
  'rest-spread-spacing': [
    'error',
    'never'
  ],
  'sort-imports': 'off',
  'symbol-description': 'error',
  'template-curly-spacing': [
    'error',
    'never'
  ],
  'yield-star-spacing': [
    'error',
    'after'
  ]
}
