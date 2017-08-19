/**
 * rules/stylistic-issues-n2z.js: rules listed as Stylistic Issues in ESLint docs
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

// NOTE: this file only contain rules starting from N to Z
// See https://eslint.org/docs/rules/#stylistic-issues

module.exports = {
  'new-cap': 'error',
  'new-parens': 'error',
  'newline-after-var': 'off',
  'newline-before-return': 'off',
  'newline-per-chained-call': [
    'error',
    { 'ignoreChainWithDepth': 4 }
  ],
  'no-array-constructor': 'error',
  'no-bitwise': 'error',
  'no-continue': 'error',
  'no-inline-comments': 'off',
  'no-lonely-if': 'error',
  'no-mixed-operators': 'error',
  'no-mixed-spaces-and-tabs': 'error',
  'no-multi-assign': 'error',
  'no-multiple-empty-lines': [
    'error',
    { 'max': 2 }
  ],
  'no-negated-condition': 'error',
  'no-nested-ternary': 'error',
  'no-new-object': 'error',
  'no-plusplus': 'error',
  'no-restricted-syntax': [
    'error',
    'WithStatement',
    'SwitchStatement'
  ],
  'no-spaced-func': 'off',
  'no-tabs': 'error',
  'no-ternary': 'off',
  'no-trailing-spaces': 'error',
  'no-underscore-dangle': 'off',
  'no-unneeded-ternary': 'error',
  'no-whitespace-before-property': 'error',
  'nonblock-statement-body-position': 'off',
  'object-curly-newline': [
    'error',
    { 'multiline': true }
  ],
  'object-curly-spacing': [
    'error',
    'always'
  ],
  'object-property-newline': [
    'error',
    { 'allowMultiplePropertiesPerLine': false }
  ],
  'one-var': [
    'error',
    'always'
  ],
  'one-var-declaration-per-line': [
    'error',
    'always'
  ],
  'operator-assignment': [
    'error',
    'always'
  ],
  'operator-linebreak': [
    'error',
    'before'
  ],
  'padded-blocks': 'off',
  'padding-line-between-statements': [
    'error',
    // blank line after directive
    {
      'blankLine': 'always',
      'prev': 'directive',
      'next': '*'
    },
    // no blank line between directives
    {
      'blankLine': 'never',
      'prev': 'directive',
      'next': 'directive'
    },
    // blank line before return
    {
      'blankLine': 'always',
      'prev': '*',
      'next': 'return'
    },
    // blank line after variable declarations
    {
      'blankLine': 'always',
      'prev': [
        'const',
        'let',
        'var'
      ],
      'next': '*'
    }
  ],
  'quote-props': [
    'error',
    'always'
  ],
  'quotes': [
    'error',
    'single',
    {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }
  ],
  'require-jsdoc': 'error',
  'semi': [
    'error',
    'never'
  ],
  'semi-spacing': [
    'error',
    {
      'before': false,
      'after': true
    }
  ],
  'semi-style': [
    'error',
    'last'
  ],
  'sort-keys': 'off',
  'sort-vars': 'off',
  'space-before-blocks': 'error',
  'space-before-function-paren': [
    'error',
    'never'
  ],
  'space-in-parens': [
    'error',
    'never'
  ],
  'space-infix-ops': 'error',
  'space-unary-ops': 'error',
  'spaced-comment': [
    'error',
    'always',
    {
      'exceptions': [
        '-',
        '=',
        '*'
      ]
    }
  ],
  'switch-colon-spacing': [
    'error',
    {
      'after': true,
      'before': false
    }
  ],
  'template-tag-spacing': [
    'error',
    'never'
  ],
  'unicode-bom': [
    'error',
    'never'
  ],
  'wrap-regex': 'error'
}
