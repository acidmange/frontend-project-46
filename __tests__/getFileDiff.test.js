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

const result7 = `
Property 'common.follow' was added with value: false
Property 'common.setting2' was removed
Property 'common.setting3' was updated. From true to null
Property 'common.setting4' was added with value: 'blah blah'
Property 'common.setting5' was added with value: [complex value]
Property 'common.setting6.doge.wow' was updated. From '' to 'so much'
Property 'common.setting6.ops' was added with value: 'vops'
Property 'group1.baz' was updated. From 'bas' to 'bars'
Property 'group1.nest' was updated. From [complex value] to 'str'
Property 'group2' was removed
Property 'group3' was added with value: [complex value]`;

const result8 = `
Property 'common.follow' was removed
Property 'common.setting2' was added with value: 200
Property 'common.setting3' was updated. From null to true
Property 'common.setting4' was removed
Property 'common.setting5' was removed
Property 'common.setting6.doge.wow' was updated. From 'so much' to ''
Property 'common.setting6.ops' was removed
Property 'group1.baz' was updated. From 'bars' to 'bas'
Property 'group1.nest' was updated. From 'str' to [complex value]
Property 'group2' was added with value: [complex value]
Property 'group3' was removed`;

const result9 = `
Property 'env.browser' was updated. From true to false
Property 'env.es2021' was removed
Property 'env.jest/globals' was updated. From true to false
Property '.extends' was updated. From 'airbnb-base' to 'babel-eslint'
Property 'parserOptions.ecmaVersion' was updated. From 'latest' to 2018
Property 'parserOptions.sourceType' was updated. From 'module' to 'script'
Property 'plugins' was removed
Property 'rules.consistent-return' was removed
Property 'rules.import/extensions' was removed
Property 'rules.no-console' was updated. From 0 to 1
Property 'rules.no-underscore-dangle' was updated. From [complex value] to [complex value]`;

test('filesDiff normal use', () => {
  expect(fileDiff(obj1, obj2, 'stylish')).toBe(result1);
  expect(fileDiff(obj2, obj1, 'stylish')).toBe(result2);
  expect(fileDiff(obj5, obj6, 'stylish')).toBe(result3);
});

test('filesDiff plain normal use', () => {
  expect(fileDiff(obj1, obj2, 'plain')).toBe(result7);
  expect(fileDiff(obj2, obj1, 'plain')).toBe(result8);
  expect(fileDiff(obj5, obj6, 'plain')).toBe(result9);
});

test('filesDiff empty use', () => {
  expect(fileDiff(obj3, obj3, 'stylish')).toBe(result4);
  expect(fileDiff(obj1, obj3, 'stylish')).toBe(result5);
  expect(fileDiff(obj3, obj1, 'stylish')).toBe(result6);
});
