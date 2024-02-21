import fileDiff from '../src/getFileDiff.js';

const file1 = {
  host: 'hexlet.io',
  key: true,
  map: 'flat',
  signature: false,
  name: 'valid',
  timeout: 50,
  proxy: '123.234.53.22',
  follow: false,
};

const file2 = {
  timeout: 20,
  verbose: true,
  host: 'hexlet.io',
  key: false,
  signature: true,
  name: 'valid',
};

const file3 = {};

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
  expect(fileDiff(file1, file2)).toBe(result1);
});

test('filesDiff empty use', () => {
  expect(fileDiff(file1, file3)).toBe(result2);
  expect(fileDiff(file3, file1)).toBe(result3);
  expect(fileDiff(file3, file3)).toBe(result4);
});
