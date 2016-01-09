# CHANGE LOG

All notable changes to the eslint-config-default project.

Copyright 2015, Sudaraka Wijesinghe <sudaraka@sudaraka.org>

This program comes with ABSOLUTELY NO WARRANTY;
This is free software, and you are welcome to redistribute it and/or modify it
under the terms of the BSD 2-clause License. See the LICENSE file for more
details.

---

## [Unreleased]
### Changed
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
