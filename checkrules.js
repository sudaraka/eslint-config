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

  RELEASED_RULES_FILE = `https://npmcdn.com/eslint@${pkg.peerDependencies.eslint}/conf/eslint.json`,
  BETA_RULES_FILE = `https://raw.githubusercontent.com/eslint/eslint/master/conf/eslint.json`,
  ESLINT_DOC_URL = 'http://eslint.org/docs/rules/',

  ICON_ADD_RELEASED = ' \033[0;38;5;71m\033[0m  ',
  ICON_REMOVE_RELEASED = ' \033[0;38;5;203m\033[0m  ',
  ICON_ADD_BETA = ' \033[0;38;5;215m\033[0m  ',
  ICON_REMOVE_BETA = ' \033[0;38;5;206m\033[0m  ',

  axios = require('axios')
  localRules = Object.keys(require('./default').rules)

  showChangedRules = (rulesFile, icons = [ICON_ADD_RELEASED, ICON_REMOVE_RELEASED]) => {
    axios
      .get(rulesFile)
      .then(res => Object.keys(res.data.rules))
      .then(githubRules => {
        console.log(
          githubRules
            .filter(gr => !localRules.includes(gr))
            .map(newRule => `${icons[0]}${ESLINT_DOC_URL}${newRule}`)
            .join('\n')
        )

        console.log(
          localRules
            .filter(lr => !githubRules.includes(lr))
            .map(removedRule => `${icons[1]}${ESLINT_DOC_URL}${removedRule}`)
            .join('\n')
        )
      })
  }

showChangedRules(RELEASED_RULES_FILE)
showChangedRules(BETA_RULES_FILE, [ICON_ADD_BETA, ICON_REMOVE_BETA])
