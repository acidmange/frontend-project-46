import objDiff from './objDiff.js';
import objParser from './objParser.js';
import objStringify from './objStringify.js';

const fileDiff = (firstObj, secondObj) => {
  const resObj = objDiff(firstObj, secondObj);
  const parsedObj = objParser(resObj);

  return objStringify(parsedObj);
};

export default fileDiff;
