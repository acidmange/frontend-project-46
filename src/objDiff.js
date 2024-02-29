import _ from 'lodash';
import objSort from './objSort.js';

const objDiff = (firstObj, secondObj) => {
  const allKeys = _.union(Object.keys(firstObj), Object.keys(secondObj));
  const fKeys = Object.keys(firstObj);
  const sKeys = Object.keys(secondObj);

  const result = allKeys.reduce((acc, key) => {
    const fValue = firstObj[key];
    const sValue = secondObj[key];
    const areObjects = !(_.isArray(fValue) || _.isArray(sValue))
    && (_.isObject(fValue) && _.isObject(sValue));

    if (areObjects && (_.includes(fKeys, key)) && _.includes(sKeys, key)) {
      return { ...acc, [key]: objDiff(fValue, sValue) };
    }

    if (_.isEqual(fValue, sValue)) {
      return { ...acc, [key]: sValue };
    }

    return { ...acc, [key]: { oldValue: fValue, newValue: sValue } };
  }, {});

  return objSort(result);
};

export default objDiff;
