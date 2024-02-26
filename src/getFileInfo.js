import * as fs from 'node:fs';
import path from 'node:path';
import process from 'node:process';
import yaml from 'js-yaml';

const fileParser = (filePath) => {
  const currentPath = process.cwd();
  const absPath = path.resolve(currentPath, filePath);

  try {
    fs.accessSync(absPath, fs.constants.R_OK);
  } catch (err) {
    return undefined;
  }

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
    case 'yml':
    case 'yaml': {
      return yaml.load(data);
    }
    default: {
      return undefined;
    }
  }
};

export default fileParser;
