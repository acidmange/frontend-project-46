import _ from 'lodash';

const objParser = (obj) => {
  const objKeys = Object.keys(obj);

  const result = objKeys.reduce((acc, key) => {
    const value = obj[key];
    const isObj = !_.isArray(value) && _.isObject(value);
    if (isObj) {
      const isDiff = _.has(value, 'oldValue');

      if (!isDiff) {
        return { ...acc, [`  ${key}`]: objParser(value) };
      }

      if (value.oldValue === undefined) {
        return { ...acc, [`+ ${key}`]: value.newValue };
      }

      if (value.newValue === undefined) {
        return { ...acc, [`- ${key}`]: value.oldValue };
      }
      return { ...acc, [`- ${key}`]: value.oldValue, [`+ ${key}`]: value.newValue };
    }

    return { ...acc, [`  ${key}`]: value };
  }, {});

  return result;
};

export default objParser;
