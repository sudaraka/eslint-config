#!/usr/bin/env node
/**
 * checkrules.js: Lookup ESLint github repository for new rules.
 *
 * Copyright 2016, 2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>
 *
 * This program comes with ABSOLUTELY NO WARRANTY;
 * This is free software, and you are welcome to redistribute it and/or modify
 * it under the terms of the BSD 2-clause License. See the LICENSE file for more
 * details.
 *
 */

const
  rc = require('rc'),
  axios = require('axios'),
  chalk = require('chalk'),

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
      'url': '/lib/rules/?json',
      'docs': {
        'latest': 'http://eslint.org/docs/rules/{rule}',
        'next': 'https://github.com/eslint/eslint/blob/master/docs/rules/{rule}.md'
      },
      'file': 'default.js',
      'tags': [
        'latest',
        'next'
      ]
    },
    {
      'package': 'eslint-plugin-react',
      'docs': 'https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/{rule}.md',
      'file': 'react.js',
      'namespace': 'react/',
      'prefixes': [ 'jsx' ],
      'processRemoteData': processReactPlugin
    }
  ],

  readLocalRules = ruleSource => {
    let
      localRules = []

    try {
      const
        config = require(`./${ruleSource.file}`)  // eslint-disable-line global-require

      localRules = Object.keys(config.rules)
        .filter(r => !ruleSource.namespace || null !== r.match(ruleSource.namespace))
    }
    catch(_) {
      // noop
    }

    return Object.assign({}, ruleSource, { localRules })
  },

  processCore = data => data.files
    .filter(f => 'application/javascript' === f.contentType)
    .map(f => f.path.split('/').pop().replace(/\.js$/, '')),

  loadRemoteRules = rulePromise => rulePromise.then(
    ruleSource => axios
      .get(ruleSource.url)
      .then(res => {
        const
          remoteRules = 'function' === typeof ruleSource.processRemoteData
            ? ruleSource.processRemoteData(res.data)
            : processCore(res.data)

        return Object.assign({ 'prefixes': [] }, ruleSource, { remoteRules })
      })
      .catch(_ => ruleSource)
  ),

  applyPackageInfo = rulePromise => rulePromise.then(
    ruleSource => axios
      .get(`${npm.registry}${ruleSource.package}`)
      .then(result => {
        const
          { 'data': pkg } = result,
          name = `${chalk.white.bold(pkg.name)} ${chalk.magenta(`v${pkg['dist-tags'][ruleSource.tag]}`)}${chalk.dim(` - ${pkg.description}`)}`,
          url = `https://unpkg.com/${pkg.name}@${pkg['dist-tags'][ruleSource.tag]}${ruleSource.url || ''}`

        return Object.assign({}, ruleSource, {
          name,
          url
        })
      })
      .catch(_ => ruleSource)
  ),

  findNewRules = ruleSource => {
    const
      newRules = ruleSource.remoteRules
        .filter(r => {
          if(ruleSource.localRules.includes(`${ruleSource.namespace || ''}${r}`)) {
            return false
          }

          return !ruleSource.prefixes
            .some(prefix => ruleSource.localRules.includes(`${ruleSource.namespace || ''}${prefix}-${r}`))
        })
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
      rules = [
        ...ruleSource.newRules,
        ...ruleSource.removedRules
      ],
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
  },

  expandTags = (list, ruleSource) => {
    if(!Array.isArray(ruleSource.tags)) {
      ruleSource.tags = [ 'latest' ]
    }

    const
      source = ruleSource.tags.map(
        tag => Object.assign({}, ruleSource, {
          'tags': null,
          tag
        })
      )

    return [
      ...list,
      ...source
    ]
  },

  removeTags = ruleSource => {
    delete ruleSource.tags

    return ruleSource
  },

  selectDocsUrl = ruleSource => {
    if('object' !== typeof ruleSource.docs) {
      return ruleSource
    }

    return {
      ...ruleSource,
      'docs': ruleSource.docs[ruleSource.tag]
    }
  }

console.log('')

RULE_SOURCES
  .reduce(expandTags, [])
  .map(removeTags)  // just for aesthetics
  .map(selectDocsUrl)
  .map(s => Promise.resolve(s))
  .map(p => p.then(readLocalRules))
  .map(applyPackageInfo)
  .map(loadRemoteRules)
  .map(p => p.then(findNewRules))
  .map(p => p.then(findRemovedRules))
  .map(p => p.then(formatSource))
  .map(s => s.then(console.log))
