// deno-fmt-ignore-file
// deno-lint-ignore-file

// Copyright Joyent and Node contributors. All rights reserved. MIT license.
// Taken from Node 18.12.1
// This file is automatically generated by `tests/node_compat/runner/setup.ts`. Do not modify this file manually.

'use strict';
require('../common');

process.env.TERM = 'dumb';

console.log({ foo: 'bar' });
console.dir({ foo: 'bar' });
console.log('%s q', 'string');
console.log('%o with object format param', { foo: 'bar' });
