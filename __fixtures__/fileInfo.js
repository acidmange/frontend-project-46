#!/usr/bin/env node

import fileParser from '../src/getFileInfo.js';
import * as process from 'node:process';

const args = process.argv.slice(2);

if (args.length > 0) {
  const [path] = args;
  const data = fileParser(path) ?? 'wrong format';
  console.log(data);
} else {
  console.log('no args');
}

