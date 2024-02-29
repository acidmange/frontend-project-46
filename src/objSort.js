import _ from 'lodash';

const objSort = (obj) => {
  const result = _.sortBy(Object.keys(obj)).reduce((acc, key) => ({ ...acc, [key]: obj[key] }), {});

  return result;
};

export default objSort;
