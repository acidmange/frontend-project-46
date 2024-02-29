import _ from 'lodash';

const objStringify = (obj) => {
  const replacer = ' ';
  const spacesCount = 4;

  const iter = (value, depth) => {
    if (!_.isObject(value)) {
      return `${value}`;
    }

    const tabsSize = spacesCount * depth - 2;
    const currentTabs = replacer.repeat(tabsSize);
    const bracketTabs = replacer.repeat(tabsSize - spacesCount + 2);
    const lines = Object
      .entries(value)
      .map(([key, val]) => {
        if (!(key.startsWith(' ') || key.startsWith('+') || key.startsWith('-'))) {
          return `${currentTabs}  ${key}: ${iter(val, depth + 1)}`;
        }

        return `${currentTabs}${key}: ${iter(val, depth + 1)}`;
      });

    return [
      '{',
      ...lines,
      `${bracketTabs}}`,
    ].join('\n');
  };

  return iter(obj, 1);
};

export default objStringify;
