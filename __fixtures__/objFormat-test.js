import objFormat from '../src/objFormat.js';

const testObj = {
  value: {
    text: {
      haha: {
        num: {
          operand: true,
        },
      },
    },
  },
};

const result = JSON.stringify(objFormat(testObj));

console.log(result);
