import * as fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import dataParser from './parsers.js';

const fileParser = (filePath) => {
  const currentPath = process.cwd();
  const absPath = path.resolve(currentPath, filePath);

  try {
    fs.accessSync(absPath, fs.constants.R_OK);
  } catch (err) {
    return undefined;
  }

  const name = path.basename(absPath);
  const fileExt = path.extname(name);
  const data = fs.readFileSync(absPath, { encoding: 'utf-8' });

  return dataParser(data, fileExt);
};

export default fileParser;
