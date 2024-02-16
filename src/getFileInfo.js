import * as fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const fileParser = (filePath) => {
  const currentPath = process.cwd();
  const absPath = path.resolve(currentPath, filePath);

  try {
    fs.accessSync(absPath, fs.constants.R_OK | fs.constants.W_OK);
    const data = fs.readFileSync(absPath, { encoding: 'utf-8' });
    return data;

  } catch (err) {
    return;
  }
};

export default fileParser;