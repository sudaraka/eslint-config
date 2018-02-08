/**
 * react.js: ESLint configuration for React based projects
 *
 * Copyright 2016-2018 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

module.exports = {
  'extends': './default.js',

  'plugins': [ 'react' ],

  'parserOptions': { 'ecmaFeatures': { 'jsx': true } },

  'env': {
    'browser': true,
    'node': true
  },

  'rules': {
    // Possible Errors
    'no-extra-parens': [
      'error',
      'functions'
    ],

    // React standard
    'react/boolean-prop-naming': 'error',
    'react/button-has-type': 'error',
    'react/display-name': 'off',
    'react/default-props-match-prop-types': 'error',
    'react/destructuring-assignment': [
      'error',
      'always'
    ],
    'react/forbid-component-props': 'error',
    'react/forbid-dom-props': 'error',
    'react/forbid-elements': [
      'error',
      { 'forbid': [] }
    ],
    'react/forbid-foreign-prop-types': 'error',
    'react/forbid-prop-types': 'error',
    'react/no-access-state-in-setstate': 'error',
    'react/no-array-index-key': 'error',
    'react/no-children-prop': 'error',
    'react/no-danger': 'error',
    'react/no-danger-with-children': 'error',
    'react/no-deprecated': 'error',
    'react/no-did-mount-set-state': 'error',
    'react/no-did-update-set-state': 'error',
    'react/no-direct-mutation-state': 'error',
    'react/no-find-dom-node': 'error',
    'react/no-is-mounted': 'error',
    'react/no-multi-comp': 'error',
    'react/no-redundant-should-component-update': 'error',
    'react/no-render-return-value': 'error',
    'react/no-set-state': 'error',
    'react/no-string-refs': 'error',
    'react/no-this-in-sfc': 'error',
    'react/no-typos': 'error',
    'react/no-unescaped-entities': 'error',
    'react/no-unknown-property': 'error',
    'react/no-unused-state': 'error',
    'react/no-unused-prop-types': 'error',
    'react/no-will-update-set-state': 'error',
    'react/prefer-es6-class': 'error',
    'react/prefer-stateless-function': 'error',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'error',
    'react/require-default-props': 'error',
    'react/require-optimization': 'error',
    'react/require-render-return': 'error',
    'react/self-closing-comp': 'error',
    'react/sort-comp': 'error',
    'react/sort-prop-types': 'error',
    'react/style-prop-object': 'error',
    'react/void-dom-elements-no-children': 'error',

    // React standard: JSX
    'react/jsx-boolean-value': [
      'error',
      'always'
    ],
    'react/jsx-child-element-spacing': 'off',
    'react/jsx-closing-bracket-location': [
      'error',
      'line-aligned'
    ],
    'react/jsx-closing-tag-location': 'error',
    'react/jsx-curly-brace-presence': 'off',
    'react/jsx-curly-spacing': [
      'error',
      'always'
    ],
    'react/jsx-equals-spacing': [
      'error',
      'never'
    ],
    'react/jsx-filename-extension': [
      'error',
      {
        'extensions': [
          '.js',
          '.jsx'
        ]
      }
    ],
    'react/jsx-first-prop-new-line': [
      'error',
      'multiline'
    ],
    'react/jsx-handler-names': 'error',
    'react/jsx-indent': [
      'error',
      2
    ],
    'react/jsx-indent-props': [
      'error',
      2
    ],
    'react/jsx-key': 'error',
    'react/jsx-max-props-per-line': 'off',
    'react/jsx-no-bind': 'error',
    'react/jsx-no-comment-textnodes': 'error',
    'react/jsx-no-duplicate-props': 'error',
    'react/jsx-no-literals': 'off',
    'react/jsx-no-target-blank': 'off',
    'react/jsx-no-undef': 'error',
    'react/jsx-one-expression-per-line': 'error',
    'react/jsx-pascal-case': 'error',
    'react/jsx-sort-props': 'off',
    'react/jsx-sort-default-props': 'off',
    'react/jsx-space-before-closing': 'off',
    'react/jsx-tag-spacing': [
      'error',
      {
        'closingSlash': 'never',
        'beforeSelfClosing': 'always',
        'afterOpening': 'never'
      }
    ],
    'react/jsx-uses-react': 'error',
    'react/jsx-uses-vars': 'error',
    'react/jsx-wrap-multilines': 'error'
  }
}
