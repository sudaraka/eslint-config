/**
 * rules/nodejs-commonjs.js: rules listed as Node.js and CommonJS in ESLint docs
 *
 * Copyright 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

// See https://eslint.org/docs/rules/#nodejs-and-commonjs

module.exports = {
  'callback-return': 'error',
  'global-require': 'error',
  'handle-callback-err': [
    'error',
    '^.*(e|E)rr'
  ],
  'no-buffer-constructor': 'error',
  'no-mixed-requires': 'off',
  'no-new-require': 'error',
  'no-path-concat': 'error',
  'no-process-env': 'error',
  'no-process-exit': 'error',
  'no-restricted-modules': 'off',
  'no-sync': 'off'
}
