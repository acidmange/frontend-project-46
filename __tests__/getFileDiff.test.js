import fileDiff from '../src/getFileDiff.js';
import {
  obj1,
  obj2,
  obj3,
} from '../__fixtures__/objects.js';

const result1 = `{
    common: {
      + follow: false
        setting1: Value 1
      - setting2: 200
      - setting3: true
      + setting3: null
      + setting4: blah blah
      + setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: 
              + wow: so much
            }
            key: value
          + ops: vops
        }
    }
    group1: {
      - baz: bas
      + baz: bars
        foo: bar
      - nest: {
            key: value
        }
      + nest: str
    }
  - group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  + group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

const result2 = `{
    - common: {
          setting1: Value 1
          setting2: 200
          setting3: true
          setting6: {
              key: value
              doge: {
                  wow:
              }
          }
      }
    - group1: {
          baz: bas
          foo: bar
          nest: {
              key: value
          }
      }
    - group2: {
          abc: 12345
          deep: {
              id: 45
          }
      }
}`;

const result3 = `{
    + common: {
          setting1: Value 1
          setting2: 200
          setting3: true
          setting6: {
              key: value
              doge: {
                  wow:
              }
          }
      }
    + group1: {
          baz: bas
          foo: bar
          nest: {
              key: value
          }
      }
    + group2: {
          abc: 12345
          deep: {
              id: 45
          }
      }
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
