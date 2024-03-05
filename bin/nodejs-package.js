#!/usr/bin/env node

import { Command } from 'commander';
import getFileDiff from '../src/index.js';

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1', '-V, --version', 'output the version number')
  .helpOption('-h, --help', 'output usage information')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((pathA, pathB) => {
    const formatter = program.opts().format ?? 'stylish';
    const result = getFileDiff(pathA, pathB, formatter);
    console.log(result);
  })
  .parse(process.argv);
