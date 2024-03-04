import objDiff from './objDiff.js';
import objParser from './objParser.js';
import objPlain from './objPlain.js';
import objStringify from './objStringify.js';

const fileDiff = (firstObj, secondObj, formatter) => {
  const resObj = objDiff(firstObj, secondObj);
  let parsedObj;
  if (formatter === 'stylish') {
    parsedObj = objParser(resObj);
    return objStringify(parsedObj);
  }

  if (formatter === 'plain') {
    parsedObj = objPlain(resObj);
    return `\n${parsedObj.join('\n')}`;
  }
};

export default fileDiff;
