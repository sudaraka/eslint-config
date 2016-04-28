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

  'plugins': [
    'react'
  ],

  'env': {
    'browser': true,
    'node': true
  },

  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    }
  },

  'rules': {
    // Possible Errors
    'no-extra-parens': [2, 'functions'],

    // React standard
    'react/display-name': 0,
    'react/forbid-prop-types': 2,
    'react/no-danger': 2,
    'react/no-deprecated':2,
    'react/no-did-mount-set-state': 2,
    'react/no-did-update-set-state': 2,
    'react/no-direct-mutation-state': 2,
    'react/no-is-mounted': 2,
    'react/no-multi-comp': 2,
    'react/no-set-state': 2,
    'react/no-string-refs': 2,
    'react/no-unknown-property': 2,
    'react/prefer-es6-class': 2,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 2,
    'react/require-extension': 2,
    'react/self-closing-comp': 2,
    'react/sort-comp': 2,
    'react/sort-prop-types': 2,
    'react/wrap-multilines': 2,

    // React standard: JSX
    'react/jsx-boolean-value': [2, 'always'],
    'react/jsx-closing-bracket-location': [2, {
      'nonEmpty': 'tag-aligned',
      'selfClosing': 'props-aligned'
    }],
    'react/jsx-curly-spacing': [2, 'always'],
    'react/jsx-equals-spacing': [2, 'never'],
    'react/jsx-handler-names': 2,
    'react/jsx-indent-props': [2, 2],
    'react/jsx-indent': [2, 2],
    'react/jsx-key': 2,
    'react/jsx-max-props-per-line': 0,
    'react/jsx-no-bind': 2,
    'react/jsx-no-duplicate-props': 2,
    'react/jsx-no-literals': 0,
    'react/jsx-no-undef': 2,
    'react/jsx-pascal-case': 2,
    'react/jsx-sort-props': 0,
    'react/jsx-uses-react': 2,
    'react/jsx-uses-vars': 2
  }
}
