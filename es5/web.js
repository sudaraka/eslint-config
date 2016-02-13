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

  "env": {
    "browser": true,
    "jquery": true,
    "es6": false
  },

  "rules": {
    // Best Practices
    'no-invalid-this': 0,

    // ECMAScript 6 (ES2015)
    'prefer-arrow-callback': 0,
    'prefer-const': 0,
    'prefer-reflect': 0,
    'prefer-spread': 0,
    'prefer-template': 0
  }
}
