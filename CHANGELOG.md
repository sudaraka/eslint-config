# CHANGE LOG

All notable changes to the eslint-config-default project.

Copyright 2015, 2016 Sudaraka Wijesinghe <sudaraka@sudaraka.org>

This program comes with ABSOLUTELY NO WARRANTY;
This is free software, and you are welcome to redistribute it and/or modify it
under the terms of the BSD 2-clause License. See the LICENSE file for more
details.

---

## [Unreleased]
### Added
- All published rules as of ESLint 2.12.0

## Fixed
- Removed parts of the `default.js` description that are incorrect.
- Adjusted quotes and white-spaces to match with default rules.

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
