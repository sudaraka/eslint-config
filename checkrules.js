#!/usr/bin/env node
/**
 * checkrules.js: Lookup ESLint github repository for new rules.
 *
 * Copyright 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 */

const
  pkg = require('./package'),

  REMOTE_RULES_FILE = `https://npmcdn.com/eslint@${pkg.peerDependencies.eslint}/conf/eslint.json`,
  ESLINT_DOC_URL = 'http://eslint.org/docs/rules/',
  ICON_ADD = ' \033[0;38;5;71m\033[0m  ',
  ICON_REMOVE = ' \033[0;38;5;203m\033[0m  ',
  axios = require('axios')
  localRules = Object.keys(require('./default').rules)

axios
  .get(REMOTE_RULES_FILE)
  .then(res => Object.keys(res.data.rules))
  .then(githubRules => {
    console.log(
      githubRules
        .filter(gr => !localRules.includes(gr))
        .map(newRule => `${ICON_ADD}${ESLINT_DOC_URL}${newRule}`)
        .join('\n')
    )

    console.log(
      localRules
        .filter(lr => !githubRules.includes(lr))
        .map(removedRule => `${ICON_REMOVE}${ESLINT_DOC_URL}${removedRule}`)
        .join('\n')
    )
  })
