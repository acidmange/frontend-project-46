import _ from 'lodash';

const stringCheck = (value) => {
  if ((value !== '[complex value]') && (typeof value === 'string')) {
    return `'${value}'`;
  }
  return value;
};

const complexCheck = (value) => {
  if (_.isObject(value)) {
    return '[complex value]';
  }

  return value;
};

const propertyCheck = (path, key) => {
  if (path === '') {
    return key;
  }
  return `${path}.${key}`;
};

const objPlain = (obj, path = '') => {
  const objKeys = Object.keys(obj);

  const result = objKeys.reduce((acc, key) => {
    const value = obj[key];
    const isObj = !_.isArray(value) && _.isObject(value);

    if (isObj) {
      const isDiff = _.has(value, 'oldValue');

      if (!isDiff) {
        const newPath = propertyCheck(path, key);
        return [...acc, ...objPlain(value, newPath)];
      }

      if (value.oldValue === undefined) {
        const newValue = complexCheck(value.newValue);
        const property = propertyCheck(path, key);
        return [...acc, `Property '${property}' was added with value: ${stringCheck(newValue)}`];
      }

      if (value.newValue === undefined) {
        const property = (path === '') ? key : `${path}.${key}`;
        return [...acc, `Property '${property}' was removed`];
      }

      const oldValue = complexCheck(value.oldValue);
      const newValue = complexCheck(value.newValue);
      return [...acc, `Property '${path}.${key}' was updated. From ${stringCheck(oldValue)} to ${stringCheck(newValue)}`];
    }

    return acc;
  }, []);

  return result;
};

export default objPlain;
