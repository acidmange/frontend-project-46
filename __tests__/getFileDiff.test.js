import process from 'node:process';
import path from 'node:path';
import * as fs from 'node:fs';
import fileDiff from '../src/getFileDiff.js';

const getData = (fPath) => {
  const currentPath = process.cwd();
  const absPath = path.resolve(currentPath, fPath) ?? 'none';
  const data = (absPath === 'none') ? undefined : fs.readFileSync(absPath, { encoding: 'utf-8' });

  return data;
};

const objPath1 = './__fixtures__/file1.json';
const objPath2 = './__fixtures__/file2.json';

const plainPath1 = './__fixtures__/result_plain.txt';
const stylePath1 = './__fixtures__/result_stylish.txt';

const obj1 = JSON.parse(getData(objPath1));
const obj2 = JSON.parse(getData(objPath2));

const plainRes1 = getData(plainPath1);
const styleRes1 = getData(stylePath1);

test('filesDiff normal use', () => {
  expect(fileDiff(obj1, obj2, 'plain')).toBe(plainRes1);
  expect(fileDiff(obj1, obj2, 'stylish')).toBe(styleRes1);
});
