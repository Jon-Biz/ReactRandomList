# randomlist [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-url]][daviddm-image]

A ReactComponent list iterator that randomizes the order of the output. Takes a `cell` and an array of props, returns a list of elements, randomly ordered.

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**  *generated with [DocToc](https://github.com/thlorenz/doctoc)*

- [Install](#install)
- [Usage](#usage)
- [Props](#props)
  - [`<React> cell` **Required**](#react-cell-required)
  - [`<Array> cellProps` **Required**](#array-cellprops-required)
- [Tests](#tests)
- [Developing](#developing)
  - [Requirements](#requirements)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install

```sh
npm i -S @getable/randomlist
```

## Usage

## Props
### `<React> cell` **Required**
The cell to be iterated over

### `<Array> cellProps` **Required**
An array of prop to be set on the cell

## Tests
Tests are in [tape](https://github.com/substack/tape).


* `npm test` will run the tests in a browser
* `npm run tdd` will run the tests in a browser on every file change.


## Developing
To publish, run `npm run release -- [{patch,minor,major}]`

_NOTE: you might need to `sudo ln -s /usr/local/bin/node /usr/bin/node` to ensure node is in your path for the git hooks to work_

### Requirements
* **npm > 2.0.0** So that passing args to a npm script will work. `npm i -g npm`
* **git > 1.8.3** So that `git push --follow-tags` will work. `brew install git`

## License

Artistic 2.0 © [Jonathan El-Bizri]()


[npm-url]: https://npmjs.org/package/@getable/randomlist
[npm-image]: https://badge.fury.io/js/@getable/randomlist.svg
[travis-url]: https://travis-ci.org/Getable/@getable/randomlist
[travis-image]: https://travis-ci.org/Getable/@getable/randomlist.svg?branch=master
[daviddm-url]: https://david-dm.org/Getable/@getable/randomlist.svg?theme=shields.io
[daviddm-image]: https://david-dm.org/Getable/@getable/randomlist
