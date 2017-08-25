/**
 * rules/best-practices.js: rules listed as Best Practices in ESLint docs
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

// See https://eslint.org/docs/rules/#best-practices

module.exports = {
  'accessor-pairs': 'error',
  'array-callback-return': 'error',
  'block-scoped-var': 'error',
  'class-methods-use-this': 'error',
  'complexity': 'error',
  'consistent-return': 'error',
  'curly': 'error',
  'default-case': 'error',
  'dot-location': [
    'error',
    'property'
  ],
  'dot-notation': 'error',
  'eqeqeq': 'error',
  'guard-for-in': 'error',
  'no-alert': 'error',
  'no-caller': 'error',
  'no-case-declarations': 'error',
  'no-div-regex': 'error',
  'no-else-return': 'error',
  'no-empty-function': 'error',
  'no-empty-pattern': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'error',
  'no-extra-bind': 'error',
  'no-extra-label': 'error',
  'no-fallthrough': 'error',
  'no-floating-decimal': 'error',
  'no-global-assign': 'error',
  'no-implicit-coercion': 'error',
  'no-implicit-globals': 'error',
  'no-implied-eval': 'error',
  'no-invalid-this': 'error',
  'no-iterator': 'error',
  'no-labels': 'error',
  'no-lone-blocks': 'error',
  'no-loop-func': 'error',
  'no-magic-numbers': [
    'error',
    {
      'ignoreArrayIndexes': true,
      'ignore': [
        // 0, 1 allowed for length/emptiness test (i.e. `1 > length` or `0 < length`)
        0,
        1,
        // 2 allowed for decimal point representation (i.e. `value.toFixed(2)`)
        2
      ]
    }
  ],
  'no-multi-spaces': [
    'error',
    { 'ignoreEOLComments': true }
  ],
  'no-multi-str': 'error',
  'no-native-reassign': 'off',
  'no-new': 'error',
  'no-new-func': 'error',
  'no-new-wrappers': 'error',
  'no-octal': 'error',
  'no-octal-escape': 'error',
  'no-param-reassign': [
    'error',
    { 'props': true }
  ],
  'no-proto': 'error',
  'no-redeclare': 'error',
  'no-restricted-properties': 'off',
  'no-return-assign': 'error',
  'no-return-await': 'error',
  'no-script-url': 'error',
  'no-self-assign': 'error',
  'no-self-compare': 'error',
  'no-sequences': 'error',
  'no-throw-literal': 'error',
  'no-unmodified-loop-condition': 'error',
  'no-unused-expressions': 'error',
  'no-unused-labels': 'error',
  'no-useless-call': 'error',
  'no-useless-concat': 'error',
  'no-useless-escape': 'error',
  'no-useless-return': 'error',
  'no-void': 'error',
  'no-warning-comments': [
    'warn',
    {
      'terms': [
        'todo',
        'fixme'
      ],
      'location': 'anywhere'
    }
  ],
  'no-with': 'error',
  'prefer-promise-reject-errors': 'error',
  'radix': 'error',
  'require-await': 'error',
  'vars-on-top': 'error',
  'wrap-iife': [
    'error',
    'outside'
  ],
  'yoda': [
    'error',
    'always'
  ]
}
