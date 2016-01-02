/**
 * default.js: Default ESLint configuration with (almost) all rules enabled
 *
 * Copyright 2015, Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 */


// NOTE: Configuration in this file inherits from ESLint "recommended" and DOES
// NOT explicitly define any of the recommended settings.
//
// See http://eslint.org/docs/rules/

module.exports = {
    'extends': 'eslint:recommended',

    'rules': {
        // Possible Errors
        'no-console': 0,
        'no-extra-parens': 2,
        'no-unexpected-multiline': 2,
        'no-unreachable': 2,

        // Best Practices
        'block-scoped-var': 2,
        'consistent-return': 0,
        'curly': 2,
        'dot-location': [2, "property"],
        'dot-notation': 2,
        'eqeqeq': 2,
        'guard-for-in': 2,
        'no-alert': 2,
        'no-caller': 2,
        'no-div-regex': 2,
        'no-else-return': 2,
        'no-empty-label': 2,
        'no-eq-null': 2,
        'no-eval': 2,
        'no-extend-native': 2,
        'no-extra-bind': 2,
        'no-floating-decimal': 2,
        'no-implicit-coercion': 2,
        'no-implied-eval': 2,
        'no-invalid-this': 2,
        'no-iterator': 2,
        'no-labels': 2,
        'no-lone-blocks': 2,
        'no-loop-func': 2,
        'no-multi-spaces': 2,
        'no-multi-str': 2,
        'no-native-reassign': 2,
        'no-new': 2,
        'no-new-func': 2,
        'no-new-wrappers': 2,
        'no-octal-escape': 2,
        'no-param-reassign': 0,
        'no-process-env': 2,
        'no-proto': 2,
        'no-return-assign': 2,
        'no-script-url': 2,
        'no-self-compare': 2,
        'no-sequences': 2,
        'no-throw-literal': 2,
        'no-unused-expressions': 2,
        'no-useless-call': 2,
        'no-useless-concat': 2,
        'no-void': 2,
        'no-warning-comments': [2, { 'terms': ['todo', 'fixme'], 'location': 'anywhere' }],
        'no-with': 2,
        'radix': 2,
        'vars-on-top': 2,
        'wrap-iife': [2, 'outside'],
        'yoda': [2, 'always'],

        // Strict Mode
        'strict': [2, 'function'],

        // Variables
        'init-declarations': 0,
        'no-catch-shadow': 2,
        'no-label-var': 2,
        'no-shadow': [2, { 'hoist': 'all' }],
        'no-shadow-restricted-names': 2,
        'no-undefined': 2,
        'no-undef-init': 2,
        'no-use-before-define': 0,

        // Node.js and CommonJS
        'handle-callback-err': [2, '^.*(e|E)rr' ],
        'no-mixed-requires': 2,
        'no-new-require': 2,
        'no-path-concat': 2,
        'no-process-exit': 2,

        // Stylistic Issues
        'array-bracket-spacing': [2, 'never'],
        'block-spacing': [2, 'always'],
        'brace-style': [2, 'stroustrup'],
        'camelcase': 0,
        'comma-spacing': [2, {'before': false, 'after': true}],
        'comma-style': [2, 'last'],
        'computed-property-spacing': [2, 'never'],
        'consistent-this': [2, 'self'],
        'eol-last': 2,
        'func-names': 0,
        'func-style': [2, 'expression'],
        'id-length': [2, {'min': 2, 'properties': 'always', 'exceptions': ['e', 'x', 'y', '_']}],
        'id-match': [2, '^[a-zA-Z0-9_\$]+([a-z0-9_]+)*$', {'properties': true}],
        'indent': [2, 4],
        'key-spacing': [2, {'beforeColon': false, 'afterColon': true}],
        'lines-around-comment': [2, {
            'beforeBlockComment': true,
            'beforeLineComment': false,
            'allowBlockStart': true
        }],
        'max-nested-callbacks': [2, 3],
        'new-cap': 2,
        'newline-after-var': [2, 'always'],
        'new-parens': 2,
        'no-array-constructor': 2,
        'no-continue': 2,
        'no-inline-comments': 0,
        'no-lonely-if': 2,
        'no-multiple-empty-lines': [2, {'max': 2}],
        'no-nested-ternary': 2,
        'no-new-object': 2,
        'no-spaced-func': 2,
        'no-ternary': 0,
        'no-trailing-spaces': 2,
        'no-underscore-dangle': 0,
        'no-unneeded-ternary': 2,
        'object-curly-spacing': [2, 'always'],
        'one-var': [2, 'always'],
        'operator-assignment': [2, 'always'],
        'operator-linebreak': [2, 'after'],
        'padded-blocks': [2, 'never'],
        'quote-props': [2, 'always'],
        'quotes': [2, 'single', 'avoid-escape'],
        'require-jsdoc': 2,
        'semi': [2, 'always'],
        'semi-spacing': [2, {'before': false, 'after': true}],
        'sort-vars': 0,
        'space-after-keywords': 0,
        'space-before-blocks': 2,
        'space-before-function-paren': [2, 'never'],
        'space-before-keywords': 2,
        'spaced-comment': [2, 'always', { 'exceptions': ['-', '=', '*'] }],
        'space-infix-ops': 2,
        'space-in-parens': [2, 'never'],
        'space-return-throw-case': 2,
        'space-unary-ops': 2,

        // ECMAScript 6 (ES2015)
        'arrow-parens': [2, 'always'],
        'arrow-spacing': 2,
        'constructor-super': 2,
        'generator-star-spacing': [2, {'before': true, 'after': true}],
        'no-class-assign': 2,
        'no-const-assign': 2,
        'no-dupe-class-members': 2,
        'no-var': 0,
        'object-shorthand': [2, 'always'],
        'prefer-arrow-callback': 2,
        'prefer-const': 2,
        'prefer-reflect': 1,
        'prefer-spread': 2,
        'prefer-template': 1,
        'require-yield': 2,

        // Legacy
        'max-depth': [2, 5],
        'max-len': 0,
        'max-statements': [2, 20],
        'no-plusplus': 2
    }
};
