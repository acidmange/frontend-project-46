import path from 'node:path';
import _ from 'lodash';
import fileParser from '../src/getFileInfo.js';
import {
  obj1,
  obj2,
  obj3,
  obj4,
} from '../__fixtures__/objects.js';

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

test('fileParser normal use', () => {
  expect(_.isEqual(fileParser(absPath1), obj1)).toBeTruthy();
  expect(_.isEqual(fileParser(absPath2), obj2)).toBeTruthy();
});

test('filesParser empty use', () => {
  expect(_.isEqual(fileParser(absPath3), obj3)).toBeTruthy();
});

test('filesParser wrong use', () => {
  expect(_.isEqual(fileParser(absPath4), obj4)).toBeTruthy();
  expect(_.isEqual(fileParser(absPath5), obj4)).toBeTruthy();
  expect(_.isEqual(fileParser(absPath6), obj4)).toBeTruthy();
});
