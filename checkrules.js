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
      'package': 'eslint',
      'url': '/conf/eslint.json',
      'docs': 'http://eslint.org/docs/rules/{rule}',
      'file': 'default.js'
    },
    {
      'package': 'eslint-plugin-react',
      'docs': 'https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/{rule}.md',
      'file': 'react.js',
      'namespace': 'react/',
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
        .filter(r => !ruleSource.namespace || null !== r.match(ruleSource.namespace))
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

  applyPackageInfo = rulePromise => rulePromise.then(
    ruleSource => axios
      .get(`${npm.registry}${ruleSource.package}`)
      .then(result => {
        const
          pkg = result.data,
          name = `${chalk.white.bold(pkg.name)} ${chalk.magenta(`v${pkg['dist-tags'].latest}`)}${chalk.dim(` - ${pkg.description}`)}`,
          url = `https://unpkg.com/${pkg.name}@${pkg['dist-tags'].latest}${ruleSource.url || ''}`

        return Object.assign({}, ruleSource, { name, url })
      })
      .catch(_ => ruleSource)
  ),

  findNewRules = ruleSource => {
    const
      newRules = ruleSource.remoteRules
        .filter(r => !ruleSource.localRules.includes(`${ruleSource.namespace || ''}${r}`))
        .map(r => `   ${chalk.green('+')} \
${chalk.cyan(ruleSource.docs.replace(/{rule}/, chalk.bold(r)))}`)

    return Object.assign({}, ruleSource, { newRules })
  },

  findRemovedRules = ruleSource => {
    const
      removedRules = ruleSource.localRules
        .filter(r => !ruleSource.remoteRules.includes(r.replace(ruleSource.namespace || '', '')))
        .map(r => `   ${chalk.red.dim('-')} ${chalk.gray(r)}`)

    return Object.assign({}, ruleSource, { removedRules })
  },

  formatSource = ruleSource => {
    const
      rules = [ ...ruleSource.newRules, ...ruleSource.removedRules ],
      name = [
        '',
        chalk.bold(0 < rules.length ? chalk.yellow('!') : chalk.green('✓')),
        ruleSource.name
      ]

    return [
      name.join(' '),
      rules.sort().join('\n'),
      ''
    ].join('\n').replace(/\n\n/, '\n')
  }

console.log('')

RULE_SOURCES
  .map(s => Promise.resolve(s))
  .map(p => p.then(readLocalRules))
  .map(applyPackageInfo)
  .map(loadRemoteRules)
  .map(p => p.then(findNewRules))
  .map(p => p.then(findRemovedRules))
  .map(p => p.then(formatSource))
  .map(s => s.then(console.log))
