/**
 * es5/web.js: ESLint configuration for ES5 web projects
 *
 * Copyright 2015, 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 */

//var config = require('../default');

module.exports = {
  'extends': '../default',

  'parserOptions': {
    'ecmaVersion': 5,
    'ecmaFeatures': {
      'experimentalObjectRestSpread': false
    },
  },

  "env": {
    "browser": true,
    "jquery": true,
    "es6": false
  },

  "rules": {
    // Best Practices
    'no-invalid-this': 'off',

    // ECMAScript 6 (ES2015)
    'prefer-arrow-callback': 'off',
    'prefer-const': 'off',
    'prefer-reflect': 'off',
    'prefer-spread': 'off',
    'prefer-template': 'off'
  }
}
