import getFileInfo from './getFileInfo.js';
import objDiff from './objDiff.js';
import objParser from './objParser.js';
import objPlain from './objPlain.js';
import objStringify from './objStringify.js';

const fileDiff = (pathA, pathB, formatter = 'stylish') => {
  const firstObj = getFileInfo(pathA);
  const secondObj = getFileInfo(pathB);
  const resObj = objDiff(firstObj, secondObj);

  if (formatter === 'stylish') {
    const parsedObj = objParser(resObj);
    return `${objStringify(parsedObj)}`;
  }

  if (formatter === 'plain') {
    const parsedObj = objPlain(resObj);
    return `${parsedObj.join('\n')}`;
  }

  if (formatter === 'json') {
    const parsedObj = objParser(resObj);
    return JSON.stringify(parsedObj);
  }

  return undefined;
};

export default fileDiff;
