import _ from 'lodash';

const fileDiff = (firstObj, secondObj) => {
  const result = [];
  const allKeys = _.union(Object.keys(firstObj), Object.keys(secondObj));
  const sortedKeys = _.sortBy(allKeys);
  sortedKeys.forEach((key) => {
    const includesOld = Object.keys(firstObj).includes(key);
    const includesNew = Object.keys(secondObj).includes(key);

    if (includesNew && !includesOld) {
      result.push(['+', `${key}:`, secondObj[key]]);
    } else if (!includesNew && includesOld) {
      result.push(['-', `${key}:`, firstObj[key]]);
    } else if (firstObj[key] === secondObj[key]) {
      result.push([' ', `${key}:`, firstObj[key]]);
    } else {
      result.push(['-', `${key}:`, firstObj[key]]);
      result.push(['+', `${key}:`, secondObj[key]]);
    }
  });

  const resultPure = result.map((item) => `  ${item.join(' ')}`);
  const resultSrt = `{\n${resultPure.join('\n')}\n}`;
  return resultSrt;
};

export default fileDiff;
