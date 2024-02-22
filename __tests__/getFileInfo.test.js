import path from 'node:path';
import _ from 'lodash';
import fileParser from '../src/getFileInfo.js';

const currentPath = process.cwd();
const path1 = './__fixtures__/file1.json';
const path2 = './__fixtures__/file2.json';
const path3 = './__fixtures__/file3.json';
const path4 = './__fixtures__/fileInfo.js';
const path5 = './__fixtures__/asd';

const absPath1 = path.resolve(currentPath, path1);
const absPath2 = path.resolve(currentPath, path2);
const absPath3 = path.resolve(currentPath, path3);
const absPath4 = path.resolve(currentPath, path4);
const absPath5 = path.resolve(currentPath, path5);
const absPath6 = path.resolve(currentPath);

const result1 = {
  host: 'hexlet.io',
  key: true,
  map: 'flat',
  signature: false,
  name: 'valid',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const result2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
  key: false,
  signature: true,
  name: 'valid',
};

const result3 = {};

const result4 = undefined;

test('fileParser normal use', () => {
  expect(_.isEqual(fileParser(absPath1), result1)).toBeTruthy();
  expect(_.isEqual(fileParser(absPath2), result2)).toBeTruthy();
});

test('filesParser empty use', () => {
  expect(_.isEqual(fileParser(absPath3), result3)).toBeTruthy();
});

test('filesParser wrong use', () => {
  expect(_.isEqual(fileParser(absPath4), result4)).toBeTruthy();
  expect(_.isEqual(fileParser(absPath5), result4)).toBeTruthy();
  expect(_.isEqual(fileParser(absPath6), result4)).toBeTruthy();
});
