const obj1 = {
  common: {
    setting1: 'Value 1',
    setting2: 200,
    setting3: true,
    setting6: {
      key: 'value',
      doge: {
        wow: '',
      },
    },
  },
  group1: {
    baz: 'bas',
    foo: 'bar',
    nest: {
      key: 'value',
    },
  },
  group2: {
    abc: 12345,
    deep: {
      id: 45,
    },
  },
};

const obj2 = {
  common: {
    follow: false,
    setting1: 'Value 1',
    setting3: null,
    setting4: 'blah blah',
    setting5: {
      key5: 'value5',
    },
    setting6: {
      key: 'value',
      ops: 'vops',
      doge: {
        wow: 'so much',
      },
    },
  },
  group1: {
    foo: 'bar',
    baz: 'bars',
    nest: 'str',
  },
  group3: {
    deep: {
      id: {
        number: 45,
      },
    },
    fee: 100500,
  },
};

const obj3 = {};

const obj4 = undefined;

const obj5 = {
  env: {
    browser: true,
    es2021: true,
    'jest/globals': true,
  },
  extends: 'airbnb-base',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'no-console': 0,
    'import/extensions': 0,
    'consistent-return': 0,
    'no-underscore-dangle': [
      2,
      {
        allow: [
          '__filename',
          '__dirname',
        ],
      },
    ],
  },
  plugins: [
    'jest',
  ],
};

const obj6 = {
  env: {
    browser: false,
    'jest/globals': false,
  },
  extends: 'babel-eslint',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'script',
  },
  rules: {
    'no-console': 1,
    'no-underscore-dangle': [
      0,
    ],
  },
};

export {
  obj1,
  obj2,
  obj3,
  obj4,
  obj5,
  obj6,
};
