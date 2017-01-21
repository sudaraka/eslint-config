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
  rc = require('rc'),
  axios = require('axios'),
  chalk = require('chalk')

  npm = rc('npm', { 'registry': 'https://registry.npmjs.org/' }),

  processReactPlugin = data => {
    const
      objectString = (data.match(/.*allRules\s*=\s*([^;]+)/)[1] || '{}')
        .replace(/'/g, '"')
        .replace(/require\(/g, '')
        .replace(/\)/g, '')

    try {
      return Object.keys(JSON.parse(objectString))
    }
    catch(_) {
      return []
    }
  },

  RULE_SOURCES = [
    {
      'name': 'ESLint Core - Released (unpkg.com)',
      'url': 'https://unpkg.com/eslint@{eslint_ver}/conf/eslint.json',
      'docs': 'http://eslint.org/docs/rules/{rule}',
      'file': 'default.js'
    },
    {
    {
      'name': 'React Plugin - Released (unpkg.com)',
      'url': 'https://unpkg.com/eslint-plugin-react',
      'docs': 'https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/{rule}.md',
      'file': 'react.js',
      'prefix': 'react/',
      'processRemoteData': processReactPlugin
    }
  ],

  readLocalRules = ruleSource => {
    let
      localRules = []

    try {
      const
        config = require(`./${ruleSource.file}`)

      localRules = Object.keys(config.rules)
        .filter(r => !ruleSource.prefix || null !== r.match(ruleSource.prefix))
    }
    catch(_) {
      // noop
    }

    return Object.assign({}, ruleSource, { localRules })
  },

  loadRemoteRules = rulePromise => rulePromise.then(
    ruleSource => axios
      .get(ruleSource.url)
      .then(res => {
        const
          remoteRules = 'function' === typeof ruleSource.processRemoteData ?
            ruleSource.processRemoteData(res.data) :
            Object.keys(res.data.rules || {})

        return Object.assign({}, ruleSource, { remoteRules })
      })
      .catch(_ => ruleSource)
  ),

  applyVersion = version => ruleSource => {
    const
      url = ruleSource.url.replace(/{eslint_ver}/, version)

    return Object.assign({}, ruleSource, { url })
  },

  findNewRules = ruleSource => {
    const
      newRules = ruleSource.remoteRules
        .filter(r => !ruleSource.localRules.includes(`${ruleSource.prefix || ''}${r}`))
        .map(r => `   ${chalk.green('+')} \
${chalk.cyan(ruleSource.docs.replace(/{rule}/, chalk.bold(r)))}`)

    return Object.assign({}, ruleSource, { newRules })
  },

  findRemovedRules = ruleSource => {
    const
      removedRules = ruleSource.localRules
        .filter(r => !ruleSource.remoteRules.includes(r.replace(ruleSource.prefix || '', '')))
        .map(r => `   ${chalk.red.dim('-')} ${chalk.gray(r)}`)

    return Object.assign({}, ruleSource, { removedRules })
  },

  formatSource = ruleSource => {
    const
      rules = [ ...ruleSource.newRules, ...ruleSource.removedRules ],
      name = [
        '',
        0 < rules.length ? chalk.yellow('!') : chalk.green('✓'),
        chalk.dim(ruleSource.name)
      ]

    return [
      chalk.bold(name.join(' ')),
      rules.sort().join('\n'),
      ''
    ].join('\n').replace(/\n\n/, '\n')
  }

axios
  .get(`${npm.registry}eslint`)
  .then((result) => {
    const
      eslintVer = result.data['dist-tags'].latest

    console.log(chalk.green.dim(`   Current ESLint Release: ${chalk.bold(eslintVer)}\n`))

    RULE_SOURCES
      .map(s => Promise.resolve(s))
      .map(p => p.then(readLocalRules))
      .map(p => p.then(applyVersion(eslintVer)))
      .map(loadRemoteRules)
      .map(p => p.then(findNewRules))
      .map(p => p.then(findRemovedRules))
      .map(p => p.then(formatSource))
      .map(s => s.then(console.log))
  })
  .catch(err => console.log('Failed to fetch ESLint release information: ', err.message))
