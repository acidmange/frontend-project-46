import process from 'node:process';
import fileParser from '../src/getFileInfo.js';

const args = process.argv.slice(2);
if (args.length !== 0) {
  console.log(JSON.stringify(fileParser(args[0])) ?? undefined);
}
