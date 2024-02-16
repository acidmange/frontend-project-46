import * as fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';

const fileParser = (filePath) => {
  const currentPath = process.cwd();
  const absPath = path.resolve(currentPath, filePath);

  try {
    fs.accessSync(absPath, fs.constants.R_OK | fs.constants.W_OK);
    const name = path.basename(absPath);
    const fileArr = name.split('.');
    if (fileArr.length < 2) {
      return;
    }
    const data = fs.readFileSync(absPath, { encoding: 'utf-8' });
    const fileExt = fileArr[1];
    switch (fileExt) {
      case 'json': {
        return JSON.parse(data);
      }
      default: {
        return;
      }
    }

  } catch (err) {
    return;
  }
};

export default fileParser;