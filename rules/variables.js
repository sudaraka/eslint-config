/**
 * rules/variables.js: rules listed as Variables in ESLint docs
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

// See https://eslint.org/docs/rules/#variables

module.exports = {
  'init-declarations': 'off',
  'no-catch-shadow': 'error',
  'no-delete-var': 'error',
  'no-label-var': 'error',
  'no-restricted-globals': 'error',
  'no-shadow': [
    'error',
    { 'hoist': 'all' }
  ],
  'no-shadow-restricted-names': 'error',
  'no-undef': 'error',
  'no-undef-init': 'error',
  'no-undefined': 'error',
  'no-unused-vars': [
    'error',
    {
      'varsIgnorePattern': '^_$',
      'argsIgnorePattern': '^_$'
    }
  ],
  'no-use-before-define': [
    'off',
    {
      'classes': true,
      'functions': true
    }
  ]
}
