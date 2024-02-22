import fileDiff from '../src/getFileDiff.js';
import {
  obj1,
  obj2,
  obj3,
} from '../__fixtures__/objects.js';

const result1 = `{
  - follow: false
    host: hexlet.io
  - key: true
  + key: false
  - map: flat
    name: valid
  - proxy: 123.234.53.22
  - signature: false
  + signature: true
  - timeout: 50
  + timeout: 20
  + verbose: true
}`;

const result2 = `{
  - follow: false
  - host: hexlet.io
  - key: true
  - map: flat
  - name: valid
  - proxy: 123.234.53.22
  - signature: false
  - timeout: 50
}`;

const result3 = `{
  + follow: false
  + host: hexlet.io
  + key: true
  + map: flat
  + name: valid
  + proxy: 123.234.53.22
  + signature: false
  + timeout: 50
}`;

const result4 = `{

}`;

test('filesDiff normal use', () => {
  expect(fileDiff(obj1, obj2)).toBe(result1);
});

test('filesDiff empty use', () => {
  expect(fileDiff(obj1, obj3)).toBe(result2);
  expect(fileDiff(obj3, obj1)).toBe(result3);
  expect(fileDiff(obj3, obj3)).toBe(result4);
});
