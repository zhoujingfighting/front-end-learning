# negate-sentence

![npm](https://img.shields.io/npm/v/negate-sentence.svg) ![build](https://img.shields.io/codeship/de4c31e0-1bee-0137-292d-46cd4196e9c1/master.svg)

> Negate Sentence

## Table of Contents

- [Background](#background)
- [Install](#install)
- [Usage](#usage)
- [Maintainers](#maintainers)
- [Contributing](#contributing)
- [License](#license)

## Background

It takes a sentence, e.g. `is positive` and returns the negation `is not positive`. It's based on simple string manipulation, nothing fancy, it wasn't tested on more complex sentences. It was created to remove some repetition in a template engine.

## Install

```bash
npm install negate-sentence
```

## Usage

```js
const negate = require('negate-sentence')
const sentence = negate('is negative')
console.log(sentence) // 'is not negative'
```

## Maintainers

[@emilos](https://github.com/emilos).

## Contributing

Please feel free to send PRs that improve the lib.

## License

MIT
