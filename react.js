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
  'extends': './default.js',

  'plugins': [
    'react'
  ],

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },

  'env': {
    'browser': true,
    'node': true
  },

  'rules': {
    // Possible Errors
    'no-extra-parens': [ 'error', 'functions' ],

    // React standard
    'react/display-name': 'off',
    'react/forbid-prop-types': 'error',
    'react/no-danger': 'error',
    'react/no-deprecated':'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-unknown-property': 'error',
    'react/prefer-es6-class': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-extension': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/wrap-multilines': 'error',

    // React standard: JSX
    'react/jsx-boolean-value': [ 'error', 'always' ],
    'react/jsx-closing-bracket-location': [ 'error', {
      'nonEmpty': 'tag-aligned',
      'selfClosing': 'props-aligned'
    }],
    'react/jsx-curly-spacing': [ 'error', 'always' ],
    'react/jsx-equals-spacing': [ 'error', 'never' ],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent-props': [ 'error', 2 ],
    'react/jsx-indent': [ 'error', 2 ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': 'off',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error'
  }
}
