# CHANGE LOG

All notable changes to the eslint-config-default project.

Copyright 2015-2017 Sudaraka Wijesinghe <sudaraka@sudaraka.org>

This program comes with ABSOLUTELY NO WARRANTY;
This is free software, and you are welcome to redistribute it and/or modify it
under the terms of the BSD 2-clause License. See the LICENSE file for more
details.

---

## [unreleased]
### Changes
- Removed some clutter using argument spread.

### Fixed
- Prevent errors from being swallowed at `Promise.catch` handlers in
  mid-process.

## [2.1.0] - 2017-08-20
### Changed
- Set default behavior for following rules to `error`:
  - `array-callback-return`
  - `consistent-return`
  - `no-empty-function`
  - `no-magic-numbers` (with `ignoreArrayIndexes: true`)
  - `no-param-reassign` (with `props: true`)
  - `camelcase`
  - `no-inline-comments`
  - `padded-blocks` (never)
  - `init-declarations` (always)

## [2.0.0] - 2017-08-19
### Added
- `.eslintrc` and `npm` script command to self-lint file in this package.

### Changed
- Switch to use `line-aligned` for JSX closing brackets.
- Turn off all deprecated rules as of ESLint 4.5.0
- Split default rule set into multiple modules.

### Fixed
- Lint error in .js files.

## [1.10.0] - 2017-08-10
### Added
- All published rules as of `eslint-plugin-react` 7.2.0

## [1.9.0] - 2017-07-09
### Added
- All published rules as of ESLint 4.2.0
- All published rules as of `eslint-plugin-react` 7.1.0

## [1.8.0] - 2017-06-12
### Added
- All published rules as of ESLint 4.0.0
- All published rules as of `eslint-plugin-react` 7.0.1
- checkrules.js: lookup multiple release tags in same package.

### Removed
- Deprecated rules from `react` plugin.

### Changed
- Adjust `no-multi-spaces` rule to allow multiple (conventionally 2) spaced
  before EOL comment.

## [1.7.0] - 2017-03-05
### Added
- All published rules as of ESLint 3.17.0

## [1.6.0] - 2017-02-26
### Added
- checkrules.js: introduce optional rule name prefixes to handle internal
  rule name vs filename incompatibilities in plugins.
- All published rules as of `eslint-plugin-react` 6.10.0

### Changed
- checkrules.js: Rename "prefix" field in source dataset to "namespace".
- checkrules.js: Adjust for ESLint v3.16 package structure.

### Fixed
- `prefixes` field of `RULE_SOURCES` always have to be an Array.

## [1.5.0] - 2017-02-04
### Added
- Extended configuration file for [Preact](https://preactjs.com/) based projects.
- All published rules as of ESLint 3.15.0

## [1.4.0] - 2017-01-21
### Added
- All published rules as of ESLint 3.14.0
- Source to check released rules of `eslint-react-plugin` via unpkg.com.

### Changed
- Get package information from `npm` repository.
- Set `ESLint` as direct dependency.

### Removed
- Sources for unreleased rules on github.

## [1.3.0] - 2017-01-20
### Added
- Support to process rules from multiple locations in`checkrules.js`.
- Optional/Custom function to process rules data retrieved from the remote
  source.
- Support rule prefixes.
- Source to check rules of `eslint-react-plugin`.
- Available rules of `eslint-plugin-react` on 2017-01-20.

### Changed
- Use `chalk` for colorful display of the result.

## [1.2.0] - 2017-01-07
### Added
- All published rules as of ESLint 3.13.0

## [1.1.1] - 2016-12-11
### Changed
- Turned off `capitalized-comments` rule.

## [1.1.0] - 2016-12-09
### Added
- All published rules as of ESLint 3.12.0
- All published rules as of `eslint-plugin-react` 6.4.1

## [1.0.0] - 2016-10-15
### Added
- All published rules as of ESLint 3.8.0

### Changed
- Allow _ to indicate unused argument.
- Do not apply `max-len` rule to strings and template literals.

## [0.7.3] - 2016-09-17
### Changed
- Make `max-len` for code 100 to allow some flexibility. 80 should be the limit
  by discipline/practice.

## [0.7.2] - 2016-09-10
### Fixed
- Invalid value in max-line rule ('error' => 2)

## [0.7.1] - 2016-09-10
### Added
- All published rules as of ESLint 3.5.0

### Changed
- Rename npmcdn.com to unpkg.com (via https://github.com/npmcdn-to-unpkg-bot PR,
  Thanks).

### Fixed
- Removed some duplicated entries in default rules.

## [0.7.0] - 2016-08-13
### Added
- All published rules as of ESLint 3.3.0
- All published rules as of `eslint-plugin-react` 6.0.0

### Changed
- Allow underscore as unused variable for throw aways.
- checkrules.js: show different shape icons for released and beta rules.
- checkrules.js: show github link for beta rules.
- checkrules.js: get latest `ESLint` version from `npm` repository instead of
  from `package.json`.
- checkrules.js: Remove unwanted line breaks from output.

## [0.6.0] - 2016-07-16
### Added
- All published rules as of ESLint 3.1.0

### Changed
- Adjusted strict mode setting for ES5 configuration.
- checkrules.js: show pre-release rule changes from github master branch.
- Allow template literals in `quotes` rule.

### Fixed
- `eslint` 2.13.0 and later require relative extend to include file extension.

### Removed
- Default rules no longer inherit from `eslint:recommended`.

## [0.5.2] - 2016-06-12
### Added
- All published rules as of ESLint 2.12.0

### Changed
- Make `no-warning-comments` rule show a warning instead of an error.

### Fixed
- Removed parts of the `default.js` description that are incorrect.
- Adjusted quotes and white-spaces to match with default rules.
- Added missing second argument to `no-extra-parens` rule.

## [0.5.1] - 2016-06-09
### Added
- All published rules as of ESLint 2.11.0

### Changed
- Require space after `try` keyword.
- Make rule settings use text instead of integer.
- checkrules.js: lookup new rules based on the current peer dependency setting
  via npmcdn.com

## [0.5.0] - 2016-05-22
### Added
- All published rules as of ESLint 2.10.2
- Added `eslint` as a peer dependency to this package.
- checkrules.js: lookup `ESLint` Github repository for new/removed rules.

### Changed
- Changed `package.json` author URL to HTTPS.
- Disabled `react/jsx-no-bind`, like to use it and keep child components
  stateless.
- Disabled `react/prop-types`, it's annoying to use with Redux enabled
  components.
- Require spaces inside array brackets.

## [0.4.1] - 2016-02-29
### Added
- React configuration depends on `eslint-plugin-react` plugin.
- Included all rules from React plugin v4.0 to React configuration.

## [0.4.0] - 2016-02-15
### Added
- Missing rule `no-unused-vars` to the default configuration.
- Extended configuration file for React JS based projects.

### Changed
- ES2015 environment enabled by default.
- Do not require ending semicolons.
- Updated rules and configuration for ESLint v2 compatibility.

## [0.3.1] - 2016-02-11
### Changed
- Make linebreaks to be in before operators (changed my mind).
- Relaxed the requirement of parenthesis around function arguments.
- Turned off id-length rule as it became impractical to maintain exceptions.
- Converted .js files to 2 space indentation.

## [0.3.0] - 2016-01-14
### Changed
- Disabled no-mixed-requires rule in favour of one-var
- Update copyright year to include 2016.
- Disabled padded-block rule as both options given by it makes the code ugly.
- Allow more nested callbacks, need them when using `mocha` testing scripts.
- Switched to using 2 space indentation for JS code.
- Allow _ as short identifier, used to indicate unused variable.
- Allow x and y as short identifiers, used when specifying coordinates.
- Make space after/before object curly braces mandatory.

## [0.2.1] - 2015-11-30
### Added
- Extended configuration file for ES5 projects that target web browsers.

### Changed
- Fixed a typo in package.json author information caused by bad .npmrc setting.

## [0.2.0] - 2015-09-29
### Changed
- Package name changed to `@sudaraka/eslint-config-default`

## [0.1.2] - 2015-09-29
### Deprecated
- Abandoning package name `@sudaraka/eslint-config` to enable better
  extensibility.

## [0.1.1] - 2015-09-28
### Changed
- Allow number id identifier names

## [0.1.0] - 2015-09-28
### Added
- Default ESLint configuration with (almost) all rules enabled
- Scoped npm package to be used by eslint `extends` configuration
- README, LICENSE and CHANGELOG
