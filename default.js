/**
 * default.js: Default ESLint configuration with (almost) all rules enabled
 *
 * Copyright 2015, 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 */

// See http://eslint.org/docs/rules/

module.exports = {
  'parserOptions': {
    'ecmaVersion': 6,
    'ecmaFeatures': {
      'impliedStrict': true,
      'experimentalObjectRestSpread': true
    },
    'sourceType': 'module',
  },

  'env': {
    'es6': true
  },

  'rules': {
    // Possible Errors
    'comma-dangle': [ 'error', 'never' ],
    'no-cond-assign': [ 'error', 'always' ],
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
    'no-extra-parens': [ 'error', 'all', {
      'nestedBinaryExpressions': true
    } ],
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': [ 'error', 'both' ],
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
    'valid-jsdoc': 1,
    'valid-typeof': 'error',

    // Best Practices
    'accessor-pairs': 1,
    'array-callback-return': 'off',  // can't use bcs this doesn't verify object of the method is an Array
    'block-scoped-var': 'error',
    'class-methods-use-this': 'error',
    'complexity': 'error',
    'consistent-return': 'off',
    'curly': 'error',
    'default-case': 'error',
    'dot-location': [ 'error', 'property' ],
    'dot-notation': 'error',
    'eqeqeq': 'error',
    'guard-for-in': 'error',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'error',
    'no-empty-function': 'off',
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
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-native-reassign': 'error',
    'no-new': 'error',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-process-env': 'error',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-return-assign': 'error',
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
    'no-void': 'error',
    'no-warning-comments': [ 'warn', {
      'terms': [ 'todo', 'fixme' ],
      'location': 'anywhere'
    } ],
    'no-with': 'error',
    'radix': 'error',
    'vars-on-top': 'error',
    'wrap-iife': [ 'error', 'outside' ],
    'yoda': [ 'error', 'always' ],

    // Strict Mode
    'strict': [ 'error', 'safe' ],

    // Variables
    'init-declarations': 'off',
    'no-catch-shadow': 'error',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'error',
    'no-shadow': [ 'error', {
      'hoist': 'all'
    } ],
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'error',
    'no-unused-vars': [ 'error', { 'varsIgnorePattern': '^_$' } ],
    'no-use-before-define': [ 'off', {
      'classes': true,
      'functions': true
    } ],

    // Node.js and CommonJS
    'callback-return': 'error',
    'global-require': 'error',
    'handle-callback-err': [ 'error', '^.*(e|E)rr' ],
    'no-mixed-requires': 'off',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-exit': 'error',
    'no-restricted-imports': 'off',
    'no-restricted-modules': 'off',
    'no-restricted-properties': 'off',
    'no-sync': 'off',

    // Stylistic Issues
    'array-bracket-spacing': [ 'error', 'always' ],
    'block-spacing': [ 'error', 'always' ],
    'brace-style': [ 'error', 'stroustrup' ],
    'camelcase': 'off',
    'comma-spacing': [ 'error', {
      'before': false,
      'after': true
    } ],
    'comma-style': [ 'error', 'last' ],
    'computed-property-spacing': [ 'error', 'never' ],
    'consistent-this': [ 'error', 'self' ],
    'eol-last': 'error',
    'func-call-spacing': [ 'error', 'never' ],
    'func-names': 'off',
    'func-style': [ 'error', 'expression' ],
    'id-blacklist': 'off',
    'id-length': 'off',
    'id-match': [ 'error', '^[a-zA-Z0-9_\$]+([a-z0-9_]+)*$', {
      'properties': true
    } ],
    'indent': [ 'error', 2 ],
    'jsx-quotes': [ 'error', 'prefer-single' ],
    'key-spacing': [ 'error', {
      'beforeColon': false,
      'afterColon': true
    } ],
    'keyword-spacing': [ 'error', {
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
    } ],
    'line-comment-position': [ 'error', { 'position': 'above' }],
    'linebreak-style': [ 'error', 'unix' ],
    'lines-around-comment': [ 'error', {
        'allowBlockStart': true,
        'beforeBlockComment': true,
        'beforeLineComment': false
    } ],
    'lines-around-directive': [ 'error', {
      'before': 'never',
      'after': 'always'
    }],
    'max-depth': [ 'error', 8 ],
    'max-len': [ 'error', {
      'code': 80,
      'comments': 120,
      'ignoreComments': true,
      'ignoreTrailingComments': true,
      'ignoreUrls': true,
      'tabWidth': 'error',
    } ],
    'max-lines': 'error',
    'max-nested-callbacks': [ 'error', 5 ],
    'max-params': [ 'error', 5 ],
    'max-statements': [ 'error', 15 ],
    'max-statements-per-line': [ 'error', {
      'max': 1
    } ],
    'multiline-ternary': 'off',
    'new-cap': 'error',
    'newline-after-var': [ 'error', 'always' ],
    'newline-before-return': 'error',
    'newline-per-chained-call': [ 'error', {
      'ignoreChainWithDepth': 4
    } ],
    'new-parens': 'error',
    'no-array-constructor': 'error',
    'no-bitwise': 'error',
    'no-continue': 'error',
    'no-inline-comments': 'off',
    'no-lonely-if': 'error',
    'no-mixed-operators': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-multiple-empty-lines': [ 'error', {
      'max': 2
    } ],
    'no-negated-condition': 'error',
    'no-nested-ternary': 'error',
    'no-new-object': 'error',
    'no-plusplus': 'error',
    'no-restricted-syntax': [ 'error', 'WithStatement', 'SwitchStatement' ],
    'no-spaced-func': 'error',
    'no-tabs': 'error',
    'no-ternary': 'off',
    'no-trailing-spaces': 'error',
    'no-underscore-dangle': 'off',
    'no-unneeded-ternary': 'error',
    'no-whitespace-before-property': 'error',
    'object-curly-newline': [ 'error', {
      'multiline': true
    } ],
    'object-curly-spacing': [ 'error', 'always' ],
    'object-property-newline': [ 'error', {
      'allowMultiplePropertiesPerLine': false
    } ],
    'one-var': [ 'error', 'always' ],
    'one-var-declaration-per-line': [ 'error', 'always' ],
    'operator-assignment': [ 'error', 'always' ],
    'operator-linebreak': [ 'error', 'before' ],
    'padded-blocks': 'off',
    'quote-props': [ 'error', 'always' ],
    'quotes': [ 'error', 'single', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    'require-jsdoc': 'error',
    'semi': [ 'error', 'never' ],
    'sort-keys': 'off',
    'semi-spacing': [ 'error', {
      'before': false,
      'after': true
    } ],
    'sort-imports': 'off',
    'symbol-description': 'error',
    'sort-vars': 'off',
    'space-before-blocks': 'error',
    'space-before-function-paren': [ 'error', 'never' ],
    'space-in-parens': [ 'error', 'never' ],
    'space-infix-ops': 'error',
    'space-unary-ops': 'error',
    'spaced-comment': [ 'error', 'always', {
      'exceptions': [ '-', '=', '*' ]
    } ],
    'unicode-bom': [ 'error', 'never' ],
    'wrap-regex': 'error',

    // ECMAScript 6 (ES2015)
    'arrow-body-style': [ 'error', 'as-needed' ],
    'arrow-parens': [ 'error', 'as-needed' ],
    'arrow-spacing': 'error',
    'constructor-super': 'error',
    'generator-star-spacing': [ 'error', {
      'before': true,
      'after': true
    } ],
    'no-class-assign': 'error',
    'no-confusing-arrow': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': [ 'error', {
      'includeExports': true
    } ],
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': [ 'error', {
      'ignoreDestructuring': false,
      'ignoreImport': true,
      'ignoreExport': true
    } ],
    'no-var': 'off',
    'object-shorthand': [ 'error', 'always' ],
    'prefer-arrow-callback': 'error',
    'prefer-const': 'error',
    'prefer-numeric-literals': 'error',
    'prefer-reflect': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'rest-spread-spacing': [ 'error', 'never' ],
    'template-curly-spacing': [ 'error', 'never' ],
    'yield-star-spacing': [ 'error', 'after' ],

    // Legacy
    'max-depth': [ 'error', 5 ],
    'max-len': 'off',
    'max-statements': [ 'error', 20 ],
    'no-plusplus': 'error'
  }
}
