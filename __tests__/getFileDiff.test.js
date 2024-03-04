import fileDiff from '../src/getFileDiff.js';
import {
  obj1,
  obj2,
  obj3,
  obj5,
  obj6,
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
    common: {
      - follow: false
        setting1: Value 1
      + setting2: 200
      - setting3: null
      + setting3: true
      - setting4: blah blah
      - setting5: {
            key5: value5
        }
        setting6: {
            doge: {
              - wow: so much
              + wow: 
            }
            key: value
          - ops: vops
        }
    }
    group1: {
      - baz: bars
      + baz: bas
        foo: bar
      - nest: str
      + nest: {
            key: value
        }
    }
  + group2: {
        abc: 12345
        deep: {
            id: 45
        }
    }
  - group3: {
        deep: {
            id: {
                number: 45
            }
        }
        fee: 100500
    }
}`;

const result3 = `{
    env: {
      - browser: true
      + browser: false
      - es2021: true
      - jest/globals: true
      + jest/globals: false
    }
  - extends: airbnb-base
  + extends: babel-eslint
    parserOptions: {
      - ecmaVersion: latest
      + ecmaVersion: 2018
      - sourceType: module
      + sourceType: script
    }
  - plugins: {
        0: jest
    }
    rules: {
      - consistent-return: 0
      - import/extensions: 0
      - no-console: 0
      + no-console: 1
      - no-underscore-dangle: {
            0: 2
            1: {
                allow: {
                    0: __filename
                    1: __dirname
                }
            }
        }
      + no-underscore-dangle: {
            0: 0
        }
    }
}`;

const result4 = `{
}`;

const result5 = `{
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

const result6 = `{
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

test('filesDiff normal use', () => {
  expect(fileDiff(obj1, obj2, 'stylish')).toBe(result1);
  expect(fileDiff(obj2, obj1, 'stylish')).toBe(result2);
  expect(fileDiff(obj5, obj6, 'stylish')).toBe(result3);
});

test('filesDiff empty use', () => {
  expect(fileDiff(obj3, obj3, 'stylish')).toBe(result4);
  expect(fileDiff(obj1, obj3, 'stylish')).toBe(result5);
  expect(fileDiff(obj3, obj1, 'stylish')).toBe(result6);
});
